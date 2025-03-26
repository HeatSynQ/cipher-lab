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
        <div className="cipher-input">
            <label>Enter Shift Value</label>
            <input
                type="number"
                className="input-area"
                value={shift}
                min="1"
                max="25"
                step="1"
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
        <div className="cipher-input">
            <input
                type="text"
                id="key"
                value={key}
                placeholder="Enter key"
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
        <div className="cipher-input">

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

const PolyalphabeticInput = ({ setOutputText, input_text }) => {
    const [key, setKey] = useState("");

    const encode = () => {
        if (!key || key.length === 0) {
            setKey("a");
        }

        let currentIndex = 0;
        const keyLen = key.length;

        const outputText = input_text.toLowerCase().split("").map((char) => {
            if (char.match(/[a-z]/)) {
                const shift = key.toLowerCase().charCodeAt(currentIndex % keyLen) - 97;
                const outputChar = String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
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
                const shift = key.toLowerCase().charCodeAt(currentIndex % keyLen) - 97;
                const shiftedValue = (char.charCodeAt(0) - 97 - shift) % 26;
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
        <div className="cipher-input">
            <input
                placeholder="Enter Key"
                type="text"
                id="key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
            />
            <button onClick={encode}>Encode</button>
            <button onClick={decode}>Decode</button>
        </div>
    );
};

const ColumnarTranspositionInput = ({ setOutputText, input_text }) => {
    const [key, setKey] = useState("");

    const encode = () => {
        if (!key || key.length === 0) {
            alert("Key cannot be empty");
            return;
        }

        const keyOrder = [...key].map((char, index) => ({ char, index }))
            .sort((a, b) => a.charCodeAt - b.charCodeAt)
            .map(item => item.index);

        const numCols = key.length;
        const numRows = Math.ceil(input_text.length / numCols);
        let grid = Array(numRows).fill("").map(() => Array(numCols).fill(" "));

        let index = 0;
        for (let r = 0; r < numRows; r++) {
            for (let c = 0; c < numCols; c++) {
                if (index < input_text.length) {
                    grid[r][c] = input_text[index];
                    index++;
                }
            }
        }

        let outputText = "";
        keyOrder.forEach(colIndex => {
            for (let row = 0; row < numRows; row++) {
                outputText += grid[row][colIndex];
            }
        });

        setOutputText(outputText.trim());
    };

    const decode = () => {
        if (!key || key.length === 0) {
            alert("Key cannot be empty");
            return;
        }

        const keyOrder = [...key].map((char, index) => ({ char, index }))
            .sort((a, b) => a.charCodeAt - b.charCodeAt)
            .map(item => item.index);

        const numCols = key.length;
        const numRows = Math.ceil(input_text.length / numCols);
        let grid = Array(numRows).fill("").map(() => Array(numCols).fill(" "));

        let index = 0;
        keyOrder.forEach(colIndex => {
            for (let row = 0; row < numRows; row++) {
                if (index < input_text.length) {
                    grid[row][colIndex] = input_text[index];
                    index++;
                }
            }
        });

        let outputText = "";
        for (let r = 0; r < numRows; r++) {
            for (let c = 0; c < numCols; c++) {
                outputText += grid[r][c];
            }
        }

        setOutputText(outputText.trim());
    };

    return (
        <div className="cipher-input">
            <input
                type="text"
                className="input-area"
                value={key}
                placeholder="Enter key"
                onChange={(e) => setKey(e.target.value)}
            />
            <button onClick={encode}>Encode</button>
            <button onClick={decode}>Decode</button>
        </div>
    );
};

const RailFenceInput = ({ setOutputText, input_text }) => {
    const [rails, setRails] = useState(3);

    const encode = () => {
        if (rails < 2) {
            alert("Number of rails must be at least 2");
            return;
        }

        let fence = Array.from({ length: rails }, () => []);
        let row = 0, direction = 1;

        for (let char of input_text) {
            fence[row].push(char);
            if (row === 0) direction = 1;
            if (row === rails - 1) direction = -1;
            row += direction;
        }

        setOutputText(fence.flat().join(""));
    };

    const decode = () => {
        if (rails < 2) {
            alert("Number of rails must be at least 2");
            return;
        }

        let fence = Array.from({ length: rails }, () => Array(input_text.length).fill(null));
        let row = 0, direction = 1;

        for (let i = 0; i < input_text.length; i++) {
            fence[row][i] = "*";
            if (row === 0) direction = 1;
            if (row === rails - 1) direction = -1;
            row += direction;
        }

        let index = 0;
        for (let r = 0; r < rails; r++) {
            for (let c = 0; c < input_text.length; c++) {
                if (fence[r][c] === "*") {
                    fence[r][c] = input_text[index++];
                }
            }
        }

        row = 0, direction = 1;
        let outputText = "";
        for (let i = 0; i < input_text.length; i++) {
            outputText += fence[row][i];
            if (row === 0) direction = 1;
            if (row === rails - 1) direction = -1;
            row += direction;
        }

        setOutputText(outputText);
    };

    return (
        <div className="cipher-input">
            <label>Enter Number of Rails</label>
            <input
                type="number"
                className="input-area"
                value={rails}
                min="2"
                max="10"
                step="1"
                placeholder="Rails"
                onChange={(e) => setRails(Number(e.target.value))}
            />
            <button onClick={encode}>Encode</button>
            <button onClick={decode}>Decode</button>
        </div>
    );
};


export { CaeserInput, VigenereInput, OneTimePadInput, PolyalphabeticInput, ColumnarTranspositionInput, RailFenceInput };