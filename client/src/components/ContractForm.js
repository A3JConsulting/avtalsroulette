import React from 'react';
import { connect } from 'react-redux';
import SignatureCanvas, { toolsMap } from './SignatureCanvas';
import SignButton from './SignButton';
import Fingerprint from './Fingerprint';
import '../styles/ContractForm.css';

let ContractForm = ({ contractorName, body, fingerprintActive, isSigned, date, onSubmit }) => {
  let canvas;

  const onSign = () => {
    onSubmit(canvas.getDataURL()).then(() => {
      window.print();
    });
  };

  return (
    <form
      className={isSigned ? "ContractForm ContractForm--signed" : "ContractForm"}
      onSubmit={e => { e.preventDefault(); }}
    >
      <div dangerouslySetInnerHTML={{__html: body }} />
      <p>Stockholm, {date}</p>
      <SignatureCanvas
        ref={node => { canvas = node; }}
        width={652}
        height={170}
        animate={true}
        size={2}
        color="#000f55"
        fillColor=''
        items={[]}
        tool={toolsMap.TOOL_PENCIL}
        canvasClassName="ContractForm__signature"
        drawEnabled={!isSigned}
      />
      <p className="ContractForm__name">{ contractorName }</p>
      {isSigned ? null : <SignButton onSign={onSign} />}
      <Fingerprint active={fingerprintActive} />
    </form>
  );
};

ContractForm.propTypes = {
  contractorName: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
  fingerprintActive: React.PropTypes.bool.isRequired,
  isSigned: React.PropTypes.bool.isRequired,
  date: React.PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    fingerprintActive: state.fingerprint.active
  };
};

ContractForm = connect(mapStateToProps)(ContractForm);

export default ContractForm;
