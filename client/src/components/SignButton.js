import React from 'react';
import { connect } from 'react-redux';
import Fingerprint from './Fingerprint';
import { activateFingerprint } from '../actions';
import '../styles/SignButton.css';

class SignButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: null,
      ts: null
    };

    this.handlePress = this.handlePress.bind(this);
    this.handleRelease = this.handleRelease.bind(this);
  }

  handlePress(e) {
    e.preventDefault();
    this.props.onActivate(true);
    this.setState({
      timeout: setTimeout(() => {
        this.props.onActivate(false);
        this.props.onSign();
      }, 2000),
      ts: new Date()
    });
  }

  handleRelease(e) {
    e.preventDefault();
    this.props.onActivate(false);
    console.log("up", (new Date())-this.state.ts);
    if (this.state.timeout) {
      clearTimeout(this.state.timeout);
      this.setState({
        timeout: null
      });
    }
  }

  render() {
    return (
      <button
        className={"SignButton" + (this.state.timeout ? " SignButton--pressed" : "")}
        type="submit"
        onClick={e => { e.preventDefault(); }}
        onTouchStart={this.handlePress}
        onMouseDown={this.handlePress}
        onTouchEnd={this.handleRelease}
        onMouseUp={this.handleRelease}
        onMouseLeave={this.handleRelease}
      >
        <Fingerprint active={!!this.state.timeout} />
      </button>
    );
  }
}

SignButton.propTypes = {
  onSign: React.PropTypes.func.isRequired,
  onActivate: React.PropTypes.func.isRequired
};

const mapDispatchToProps = ({
  onActivate: activateFingerprint
});

SignButton = connect(null, mapDispatchToProps)(SignButton);

export default SignButton;
