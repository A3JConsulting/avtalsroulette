import { connect } from 'react-redux';
import { setContractor, fetchContract } from '../actions';
import ContractorForm from '../components/ContractorForm';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (name, email) => {
    dispatch(setContractor({ name, email }));
    dispatch(fetchContract());
  }
});

const ContractorStep = connect(null, mapDispatchToProps)(ContractorForm);

export default ContractorStep;
