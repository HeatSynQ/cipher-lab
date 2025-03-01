import { useState } from "react";
import AlgoInput from "./AlgoInput";

const Body = () => {

    const [input_text, setInputText] = useState("");
    const [output_text, setOutputText] = useState("");
    const [selectedAlgo, setSelectedAlgo] = useState("caeser")

    return (
        <div className="body">
            <div className="input-container">
                <input
                    type="text"
                    value={input_text}
                    onChange={e => {
                        setInputText(e.target.value);
                    }}
                />
                <select
                    name="algo-select"
                    id="algo-select"
                    onChange={(e) => {
                        setSelectedAlgo(e.target.value);
                    }}
                >
                    <option value="caeser">Caesar Cipher</option>
                    <option value="vigenere">Vigenère Cipher</option>
                    <option value="otp">One Time Pad</option>
                </select>
            </div>
            <AlgoInput
                input_text={input_text}
                selectedAlgo={selectedAlgo}
                setOutputText={setOutputText}
            />
            <div className="output-container">
                <textarea
                    name="output-text"
                    id="output-text"
                    value={output_text}
                    readOnly
                ></textarea>
            </div>
        </div>
    );
}
export default Body;