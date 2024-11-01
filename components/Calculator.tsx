'use client';
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function Calculator() {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<string | number>('');

  const handleCalculate = (operation: string) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Please enter valid numbers');
      return;
    }

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
        calculation = n2 !== 0 ? parseFloat((n1 / n2).toFixed(2)) : 'Cannot divide by zero';
        break;
      default:
        calculation = '';
    }
    setResult(calculation);
  };



  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-tr from-gray-500 to-gray-900 text-white">
      <Card className="p-8 shadow-lg max-w-sm w-full  rounded-lg">

        <h2 className="text-3xl font-bold mb-4 text-center text-black">Simple Calculator</h2>

        <div className="flex mb-4">
          <div className="mr-2 w-full ">
            <Label className="font-medium text-sm">Number 1</Label>
            <Input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="Enter a number"
              className="mt-2 outline-none border border-gray-500 rounded-lg text-black"
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
              className="mt-2 outline-none border border-gray-500 text-black rounded-lg"
              inputMode='numeric'
            />
          </div>
        </div>

        <div className="flex justify-between mb-4 mt-6">
          {['+', '-', '*', '/'].map((operation) => (
            <Button
              key={operation}
              onClick={() => handleCalculate(operation)}
              className="flex-1 mx-1 bg-black hover:bg-gray-800 rounded-lg text-lg"
            >
              {operation}
            </Button>
          ))}
        </div>

        <div className="mb-4">
          <Label className="font-medium text-sm">Result</Label>
          <Input
            readOnly
            value={result.toString()}
            placeholder="Result"
            className="mt-2 outline-none border border-gray-500 rounded-lg text-black"
          />
        </div>

        <Button onClick={handleClear} className="w-full mt-4 rounded-lg bg-black hover:bg-gray-800">
          Clear
        </Button>
      </Card>
    </div>

  );
}