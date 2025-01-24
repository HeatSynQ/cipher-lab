import { useState } from "react";

const CaeserInput = ({setOutputText, input_text}) => {
    const [shift, setShift] = useState(1);

    const encode = () => {
        const outputText = input_text.toLowerCase().split("").map((char) => {
            if (char.match(/[a-z]/)){
                return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
            }else {
                return char;
            }
        }).join("");
        console.log(`${input_text} => ${outputText}`);
        setOutputText(outputText);
    }

    const decode = () => {
        const outputText = input_text.toLowerCase().split("").map((char) => {
            if (char.match(/[a-z]/)) {
                const shiftedValue = (char.charCodeAt(0) - 97 - shift) % 26;
                return String.fromCharCode((shiftedValue < 0 ? shiftedValue + 26 : shiftedValue) + 97);
            } else {
                return char;
            }
        }).join("");
        setOutputText(outputText);
    };
    

    return (
        <div className="ceaser-input">
            <label>Enter Shift Value</label>
            <input 
                type="number" 
                className="input-area"
                value={shift}
                min="0"
                max="25"
                step="1"
                placeholder="Shift Value"
                onChange={(e) => {
                    setShift(+e.target.value);
                }}
            />
            <button onClick={() => {encode()}}>Encode</button>
            <button onClick={() => {decode()}}>Decode</button>
        </div>
    );
}

const VigenereInput = ({setOutputText, input_text}) => {

    const [key, setKey] = useState("");

    const encode = () => {
        if (!key || key.length === 0) {
            setKey("a");
        }
    
        let currentIndex = 0;
        const keyLen = key  .length;
    
        const outputText = input_text.toLowerCase().split("").map((char) => {
            if (char.match(/[a-z]/)) {
                const diff = key.toLowerCase().charCodeAt(currentIndex % keyLen) - 97;
                const outputChar = String.fromCharCode(((char.charCodeAt(0) - 97 + diff) % 26) + 97);
                currentIndex += 1;
                return outputChar;
            } else {
                return char;
            }
        }).join("");
    
        setOutputText(outputText);
    };

    const decode = () => {
        if (!key || key.length === 0) {
            setKey("a");
        }
    
        let currentIndex = 0;
        const keyLen = key  .length;
    
        const outputText = input_text.toLowerCase().split("").map((char) => {
            if (char.match(/[a-z]/)) {
                const diff = key.toLowerCase().charCodeAt(currentIndex % keyLen) - 97;
                const shiftedValue = ((char.charCodeAt(0) - 97 - diff) % 26)
                const outputChar = String.fromCharCode((shiftedValue < 0 ? shiftedValue + 26 : shiftedValue) + 97);
                currentIndex += 1;
                return outputChar;
            } else {
                return char;
            }
        }).join("");
    
        setOutputText(outputText);
    };

    return ( 
        <div className="vigenere-input">
            <label htmlFor="key" className="input-area">Enter Key: </label>
            <input 
                type="text" 
                id="key" 
                value={key}
                onChange={(e) => {setKey(e.target.value)}}
            />
            <button onClick={() => {encode()}}>Encode</button>
            <button onClick={() => {decode()}}>Decode</button>
        </div>
    );
}
 
export {CaeserInput, VigenereInput};