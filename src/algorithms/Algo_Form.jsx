import { useState } from "react";

const CaeserInput = ({ setOutputText, input_text }) => {
    const [shift, setShift] = useState(1);

    const encode = () => {
        const outputText = input_text.toLowerCase().split("").map((char) => {
            if (char.match(/[a-z]/)) {
                return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
            } else {
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
                min="1"
                max="25"
                step="1"
                placeholder="Shift Value"
                onChange={(e) => {
                    setShift(+e.target.value);
                }}
            />
            <button onClick={() => { encode() }}>Encode</button>
            <button onClick={() => { decode() }}>Decode</button>
        </div>
    );
}

const VigenereInput = ({ setOutputText, input_text }) => {

    const [key, setKey] = useState("");

    const encode = () => {
        if (!key || key.length === 0) {
            setKey("a");
        }

        let currentIndex = 0;
        const keyLen = key.length;

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
        const keyLen = key.length;

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
                onChange={(e) => { setKey(e.target.value) }}
            />
            <button onClick={() => { encode() }}>Encode</button>
            <button onClick={() => { decode() }}>Decode</button>
        </div>
    );
}

const OneTimePadInput = ({ setOutputText, input_text }) => {
    const [key, setKey] = useState("");

    const generateKey = (length) => {
        let result = "";
        const characters = "abcdefghijklmnopqrstuvwxyz";
        for (let i = 0; i < length; i++) {
            result += input_text[i].match(/[a-z]/i)
                ? characters.charAt(Math.floor(Math.random() * characters.length))
                : input_text[i]; // ✅ Preserve spaces and punctuation
        }
        return result;
    };


    const encode = () => {
        if (key.length < input_text.length) {
            alert("Key must be at least as long as the input text");
            return;
        }
        const outputText = input_text.toLowerCase().split("").map((char, index) => {
            if (char.match(/[a-z]/)) {
                const keyChar = key[index].charCodeAt(0) - 97;
                return String.fromCharCode(((char.charCodeAt(0) - 97 + keyChar) % 26) + 97);
            } else {
                return char;
            }
        }).join("");
        setOutputText(outputText);
    };

    const decode = () => {
        if (key.length < input_text.length) {
            alert("Key must be at least as long as the input text");
            return;
        }
        const outputText = input_text.toLowerCase().split("").map((char, index) => {
            if (char.match(/[a-z]/)) {
                const keyChar = key[index].charCodeAt(0) - 97;
                const shiftedValue = (char.charCodeAt(0) - 97 - keyChar) % 26;
                return String.fromCharCode((shiftedValue < 0 ? shiftedValue + 26 : shiftedValue) + 97);
            } else {
                return char;
            }
        }).join("");
        setOutputText(outputText);
    };

    return (
        <div className="one-time-pad-input">
            <label>Enter Key</label>
            <input
                type="text"
                className="input-area"
                value={key}
                placeholder="Enter key"
                onChange={(e) => setKey(e.target.value)}
            />
            <button onClick={() => setKey(generateKey(input_text.length))}>Generate Key</button>
            <button onClick={encode}>Encode</button>
            <button onClick={decode}>Decode</button>
        </div>
    );
};


export { CaeserInput, VigenereInput, OneTimePadInput };