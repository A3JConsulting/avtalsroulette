import React, {Component, PropTypes} from 'react';
import { findDOMNode } from 'react-dom';
import Pencil, { TOOL_PENCIL } from '../tools/pencil';

export const toolsMap = {
  [TOOL_PENCIL]: Pencil
};

export default class SignatureCanvas extends Component {

  tool = null;
  interval = null;

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    items: PropTypes.array.isRequired,
    animate: PropTypes.bool,
    canvasClassName: PropTypes.string,
    color: PropTypes.string,
    fillColor: PropTypes.string,
    size: PropTypes.number,
    tool: PropTypes.string,
    toolsMap: PropTypes.object,
    onItemStart: PropTypes.func, // function(stroke:Stroke) { ... }
    onEveryItemChange: PropTypes.func, // function(idStroke:string, x:number, y:number) { ... }
    onDebouncedItemChange: PropTypes.func, // function(idStroke, points:Point[]) { ... }
    onCompleteItem: PropTypes.func, // function(stroke:Stroke) { ... }
    debounceTime: PropTypes.number,
    drawEnabled: PropTypes.bool.isRequired
  };

  static defaultProps = {
    width: 500,
    height: 500,
    color: '#000',
    size: 5,
    fillColor: '',
    canvasClassName: 'canvas',
    debounceTime: 1000,
    animate: true,
    tool: TOOL_PENCIL,
    toolsMap
  };

  constructor(props) {
    super(props);
    this.initTool = this.initTool.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onDebouncedMove = this.onDebouncedMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  componentDidMount() {
    this.canvas = findDOMNode(this);
    this.ctx = this.canvas.getContext('2d');
    this.initTool(this.props.tool);
  }

  componentWillReceiveProps({tool, items}) {
    items
      .filter(item => this.props.items.indexOf(item) === -1)
      .forEach(item => {
        this.initTool(item.tool);
        this.tool.draw(item, this.props.animate);
      });
    this.initTool(tool);
  }

  initTool(tool) {
    this.tool = this.props.toolsMap[tool](this.ctx);
  }

  onTouchStart(e) {
    if (!this.props.drawEnabled) {
      return;
    }
    e.preventDefault();
    this.onMouseDown.call(this, e);
  }

  onMouseDown(e) {
    if (!this.props.drawEnabled) {
      return;
    }
    const data = this.tool.onMouseDown(...this.getCursorPosition(e), this.props.color, this.props.size, this.props.fillColor);
    data && data[0] && this.props.onItemStart && this.props.onItemStart.apply(null, data);
    if (this.props.onDebouncedItemChange) {
      this.interval = setInterval(this.onDebouncedMove, this.props.debounceTime);
    }
  }

  onDebouncedMove() {
    if (!this.props.drawEnabled) {
      return;
    }
    if (typeof this.tool.onDebouncedMouseMove === 'function' && this.props.onDebouncedItemChange) {
      this.props.onDebouncedItemChange.apply(null, this.tool.onDebouncedMouseMove());
    }
  }

  onMouseMove(e) {
    if (!this.props.drawEnabled) {
      return;
    }
    const data = this.tool.onMouseMove(...this.getCursorPosition(e));
    data && data[0] && this.props.onEveryItemChange && this.props.onEveryItemChange.apply(null, data);
  }

  onMouseUp(e) {
    if (!this.props.drawEnabled) {
      return;
    }
    const data = this.tool.onMouseUp(...this.getCursorPosition(e));
    data && data[0] && this.props.onCompleteItem && this.props.onCompleteItem.apply(null, data);
    if (this.props.onDebouncedItemChange) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  getCursorPosition(e) {
    const {top, left} = this.canvas.getBoundingClientRect();
    let clientX, clientY;
    if (e.touches && e.touches.length) {
      ({ clientX, clientY } = e.touches[0]);
    } else if (e.changedTouches && e.changedTouches.length) {
      ({ clientX, clientY } = e.changedTouches[0]);
    } else {
      ({ clientX, clientY } = e);
    }
    return [
      clientX - left,
      clientY - top
    ];
  }

  getDataURL() {
    return this.canvas.toDataURL();
  }

  render() {
    const {width, height, canvasClassName} = this.props;
    return (
      <canvas
        className={canvasClassName}
        onTouchStart={this.onTouchStart.bind(this)}
        onMouseDown={this.onMouseDown}
        onTouchMove={this.onMouseMove}
        onMouseMove={this.onMouseMove}
        onMouseOut={this.onMouseUp}
        onTouchEnd={this.onMouseUp}
        onMouseUp={this.onMouseUp}
        width={width}
        height={height}
      />
    )
  }
}
