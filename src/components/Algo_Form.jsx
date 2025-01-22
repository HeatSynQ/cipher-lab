import { useState } from "react";

const CaeserInput = ({setOutputText, input_text}) => {
    const [shift, setShift] = useState(1);

    const encode = () => {
        const encodedText = input_text.split("").map((char) => {
            if (char.match(/[a-z]/)){
                return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
            } else if (char.match(/[A-Z]/)) {
                return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
            } else {
                return char;
            }
        }).join("");
        console.log(encodedText, input_text)
        setOutputText(encodedText);
    }

    return (
        <div className="ceaser-input">
            <label>Enter Shift Value</label>
            <input 
                type="number" 
                value={shift}
                min="0"
                max="25"
                step="1"
                placeholder="Shift Value"
                onChange={(e) => {
                    setShift(e.target.value);
                }}
            />
            <button onClick={() => {encode()}}>Encode</button>
        </div>
    );
}

const VigenereInput = ({setOutputText}) => {
    return ( 
        <div className="vigenere-input"></div>
    );
}

const PolyalphabeticInput = ({setOutputText}) => {
    return (  
        <div className="poly-input"></div> 
    );
}
 
export {CaeserInput, VigenereInput, PolyalphabeticInput};