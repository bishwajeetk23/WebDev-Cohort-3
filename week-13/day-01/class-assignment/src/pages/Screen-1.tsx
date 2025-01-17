import { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import companylogo from '../assets/company_logo.png';

const horizontalCenter = `flex justify-center`;

export function Screen1() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const isButtonDisabled = !inputValue.trim();

    return (
        <div className="h-screen bg-blue-800 flex justify-center align-center">
            <div className="w-[500px] flex flex-col">
                <div className={`mt-20 ${horizontalCenter}`}>
                    <img src={companylogo} width="100px" height="60px" alt="logo" />
                </div>
                <h1 className={`mt-10 text-white-500 text-xl font-bold ${horizontalCenter}`}>Verify Your Age</h1>
                <p className={`mt-10 text-gray-300 ${horizontalCenter}`}>Please confirm your birth year. This data will not be stored.</p>
                <span className={`mt-5 ${horizontalCenter}`}>
                    <Input 
                        type="text" 
                        placeholder="Your birth year" 
                        size="md" 
                        variant="primary" 
                        value={inputValue} 
                        onChange={handleInputChange}
                    />
                </span>
                <span className={`mt-5 ${horizontalCenter}`}>
                    <Button 
                        disabled={isButtonDisabled} 
                        size="md" 
                        text="Continue" 
                        onClick={() => alert(`Button clicked with input value: ${inputValue}`)}
                        variant={isButtonDisabled ? "secondary" : "primary"} 
                    />
                </span>
            </div>
        </div>
    );
}
