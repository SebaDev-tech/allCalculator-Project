import React from 'react';

type Props = {
  initialValue: number;
};

const Calculator: React.FC<Props> = ({ initialValue }) => {
  return <p>Valor inicial: {initialValue}</p>;
};

export default Calculator;
