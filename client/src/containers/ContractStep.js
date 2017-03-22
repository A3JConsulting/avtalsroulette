import { connect } from 'react-redux';
import { signContract } from '../actions';
import ContractForm from '../components/ContractForm';

const mapStateToProps = (state, ownProps) => {
  const date = (new Date()).toLocaleDateString();
  return {
    contractorName: state.contractor.name,
    body: state.contract.data.body.replace(/(\{name\})|(\{date\})/g, (match, p1, p2) => {
      if (p1) {
        return state.contractor.name;
      } else {
        return date;
      }
    }),
    isSigned: state.signature !== null
  };
};

const mapDispatchToProps = ({
    onSubmit: signContract
});

const ContractStep = connect(mapStateToProps, mapDispatchToProps)(ContractForm);

export default ContractStep;
