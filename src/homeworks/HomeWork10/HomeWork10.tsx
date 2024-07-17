import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import './styles.css';

const Homework10 = () => {
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');
  const [output1, setOutput1] = useState<string>('');
  const [output2, setOutput2] = useState<string>('');

  const handleButtonClick = () => {
    setOutput1(input1);
    setOutput2(input2);
  };

  return (
    <div className="homework10-container">
      <Input label="Input 1" value={input1} onChange={(e) => setInput1(e.target.value)} />
      <Input label="Input 2" value={input2} onChange={(e) => setInput2(e.target.value)} />
      <Button onClick={handleButtonClick}>Show Values</Button>
      <div className="outputs">
        <div className="output-block">
          {output1}
        </div>
        <div className="output-block">
          {output2}
        </div>
      </div>
    </div>
  );
};

export default Homework10;
