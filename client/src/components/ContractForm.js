import React from 'react';
import SignatureCanvas, { toolsMap } from './SignatureCanvas';

const ContractForm = ({ dispatch }) => {
  return (
    <form
      className="contract-form"
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <p>Lorem ipsum dolor sit amet</p>
      <SignatureCanvas
        width={500}
        height={500}
        animate={true}
        size="2px"
        color="#222"
        fillColor=''
        items={[]}
        tool={toolsMap.TOOL_PENCIL}
      />
    </form>
  );
};

export default ContractForm;
