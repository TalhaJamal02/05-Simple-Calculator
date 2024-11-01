'use client';
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function Calculator() {
  // State for the two numbers and the result
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<string | number>('');

  // Handle calculations based on the selected operation
  const handleCalculate = (operation: string) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    // Check if inputs are valid numbers
    if (isNaN(n1) || isNaN(n2)) {
      setResult('Please enter valid numbers');
      return;
    }

    // Perform the calculation based on the operation
    let calculation: string | number;
    switch (operation) {
      case '+':
        calculation = n1 + n2;
        break;
      case '-':
        calculation = n1 - n2;
        break;
      case '*':
        calculation = n1 * n2;
        break;
      case '/':
        calculation = n2 !== 0 ? n1 / n2 : 'Cannot divide by zero';
        break;
      default:
        calculation = '';
    }
    setResult(calculation);
  };

  // Clear all inputs and reset the result
  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-tr from-gray-500 to-gray-900 text-white">
    <Card className="p-8 shadow-lg max-w-sm w-full  rounded-lg">

      <h2 className="text-3xl font-bold mb-4 text-center text-black">Simple Calculator</h2>
  
      {/* Input Fields */}
      <div className="flex mb-4">
        <div className="mr-2 w-full ">
          <Label className="font-medium text-sm">Number 1</Label>
          <Input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter a number"
            className="mt-2 outline-none border border-gray-500 rounded-lg"
            inputMode='numeric'
          />
        </div>
        <div className="ml-2 w-full">
          <Label className="font-medium text-sm">Number 2</Label>
          <Input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter a number"
            className="mt-2 outline-none border border-gray-500 rounded-lg"
            inputMode='numeric'
          />
        </div>
      </div>
  
      {/* Operation Buttons */}
      <div className="flex justify-between mb-4 ">
        {['+', '-', '*', '/'].map((operation) => (
          <Button
            key={operation}
            onClick={() => handleCalculate(operation)}
            className="flex-1 mx-1 rounded-lg text-lg"
          >
            {operation}
          </Button>
        ))}
      </div>
  
      {/* Display Result */}
      <div className="mb-4">
        <Label className="font-medium text-sm">Result</Label>
        <Input
          readOnly
          value={result.toString()}
          placeholder="Result"
          className="mt-2 outline-none border border-gray-500 rounded-lg"
        />
      </div>
  
      {/* Clear Button */}
      <Button onClick={handleClear} className="w-full mt-4 rounded-lg">
        Clear
      </Button>
    </Card>
  </div>
  
  );
}