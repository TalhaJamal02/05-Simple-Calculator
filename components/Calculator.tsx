'use client';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <Card className="p-8 shadow-lg max-w-sm w-full">
        {/* Calculator Title */}
        <h2 className="text-2xl font-bold mb-4">Simple Calculator</h2>

        {/* Input for Number 1 */}
        <div className="mb-4">
          <Label>Number 1</Label>
          <Input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter a number"
            className="mt-2"
          />
        </div>

        {/* Input for Number 2 */}
        <div className="mb-4">
          <Label>Number 2</Label>
          <Input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter a number"
            className="mt-2"
          />
        </div>

        {/* Operation Buttons */}
        <div className="flex justify-between mb-4">
          <Button onClick={() => handleCalculate('+')}>+</Button>
          <Button onClick={() => handleCalculate('-')}>-</Button>
          <Button onClick={() => handleCalculate('*')}>*</Button>
          <Button onClick={() => handleCalculate('/')}>/</Button>
        </div>

        {/* Display Result */}
        <div className="mb-4">
          <Label>Result</Label>
          <Input
            readOnly
            value={result.toString()}
            placeholder="Result"
            className="mt-2"
          />
        </div>

        {/* Clear Button */}
        <Button onClick={handleClear} className="w-full mt-4">
          Clear
        </Button>
      </Card>
    </div>
  );
}