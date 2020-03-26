import { connect } from 'react-redux';
import View from './View';

const mapStateToProps = state => {
  console.log("@@@", state);
  return {
    count: 0
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({type: 'DECREMENT'})
  }
};

const component = connect(mapStateToProps, mapDispatchToProps)(View);

export default component;
