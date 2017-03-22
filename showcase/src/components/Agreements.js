import React from 'react';
import Agreement from './Agreement';
import '../styles/Agreements.css';

const Agreements = ({ agreements }) => {
  return (
    <div className="Agreements">
      {agreements.map((agreement, i) => {
        return (
          <Agreement {...agreement} key={i} />
        );
      })}
    </div>
  );
};

Agreements.propTypes = {
  agreements: React.PropTypes.array.isRequired
};

export default Agreements;
