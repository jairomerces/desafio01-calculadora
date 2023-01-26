
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleSubtNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const subt = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(subt))
      setOperation('')
    }

  }

  const handleMultNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    }else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult))
      setOperation('')
    }

  }

  const handleDiviNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const divi = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divi))
      setOperation('')
    }

  }

  const handleRqNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('√')
    }else {
      const rq = Math.sqrt(Number(firstNumber)).toFixed(2);
      setCurrentNumber(String(rq))
      setOperation('')
    }

  }

  const handlePercentNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('%')
    }else {
      const percent = Number(firstNumber) * Number(currentNumber) /100;
      setCurrentNumber(String(percent))
      setOperation('')
    }

  }

  const handleExpNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('x²')
    }else {
      const exp = Math.pow(Number(firstNumber),Number(currentNumber));
      setCurrentNumber(String(exp))
      setOperation('')
    }

  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleSubtNumbers();
            break;
          case '*':
            handleMultNumbers();
            break;
          case '/':
            handleDiviNumbers();
            break;      
          case '√':
            handleRqNumbers();
            break;     
          case '%':
            handlePercentNumbers();
            break;    
          case 'x²':
            handleExpNumbers();
            break;    
          default: 
            break;
        }
    }

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>          
          <Button label="C" onClick={handleOnClear}/>
          <Button label="√" onClick={handleRqNumbers}/>
          <Button label="%" onClick={handlePercentNumbers}/>
          <Button label="x²" onClick={handleExpNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="/" onClick={handleDiviNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="*" onClick={handleMultNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="-" onClick={handleSubtNumbers}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>                    
          <Button label="=" onClick={handleEquals}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
