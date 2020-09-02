import React from 'react';

const Counter = ({count, onClick}) => {
  return (
    <button
      onClick={onClick}>
        Counter: {count}
    </button>
  );
}

Counter.propTypes = {
  count: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Counter;
