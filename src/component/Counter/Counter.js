import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCounter } from '../../actions/Counter';

export const Counter = (props) => {
  const { count, addCount, } = props;
  return (
    <div>
      <span>{`點了${count}下`}</span>
      <br />
      <button type="button" onClick={addCount}>點我加 1</button>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number,
  addCount: PropTypes.func,
};

Counter.defaultProps = {
  count: 0,
  addCount: () => { console.log('error'); },
};

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  addCount: () => dispatch(addCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
