import { connect } from 'react-redux';
import { signContract } from '../actions';
import ContractForm from '../components/ContractForm';

const mapStateToProps = (state, ownProps) => {
  return {
    contractorName: state.contractor.name,
    body: state.contract.data.body.replace(/\{name\}/, state.contractor.name),
    isSigned: state.signature !== null,
    date: (new Date()).toLocaleDateString()
  };
};

const mapDispatchToProps = ({
    onSubmit: signContract
});

const ContractStep = connect(mapStateToProps, mapDispatchToProps)(ContractForm);

export default ContractStep;
