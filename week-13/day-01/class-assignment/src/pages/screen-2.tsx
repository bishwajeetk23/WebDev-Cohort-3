import { useState } from "react";
import { Button } from "../components/Button2";
import { Input } from "../components/Input2";
import companylogo from "../assets/company_logo.png";

export function Screen2(){
    const [inputValue,setInputValue] = useState('');

    const isButtonDisabled = !inputValue.trim();

    return (
        <div className="h-screen bg-blue-800 flex justify-center">
            <div className="w-[500] flex flex-col items-center">
                <span className={`mt-20`}>
                    <img src={companylogo} alt="Loading" width={"100px"} height={"60px"}/>
                </span>
                <h1 className={`text-white-500 text-xl mt-10 font-bold`}>
                    Let's Get Started 
                </h1>
                <span className={`mt-10`}>
                    <Input 
                        size="md"
                        variant="primary"
                        placeholder="Email id"
                        value={inputValue}
                        type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                            setInputValue(e.target.value);
                        }}
                    />
                </span>
                <span className={`mt-5`}>
                    <Button 
                        isdisabled={isButtonDisabled}
                        varaint={isButtonDisabled?"secondary":"primary"}
                        size="md"
                        text="Continue"
                        onClick={()=>alert(inputValue)}
                    />
                </span>
            </div>
        </div>
    );
}