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
                    placeholder="Plain Text"
                    onChange={e => {
                        setInputText(e.target.value);
                    }}
                />
                <select
                    name="algo-select"
                    id="algo-select"
                    onChange={(e) => {
                        setOutputText("");
                        setSelectedAlgo(e.target.value);
                    }}
                >
                    <option value="caeser">Caesar Cipher</option>
                    <option value="vigenere">Vigenère Cipher</option>
                    <option value="otp">One Time Pad</option>
                    <option value="poly">Polyalphabetic Cipher</option>
                    <option value="column">Columnar Transposition Cipher</option>
                    <option value="rail-fence">Rail Fence Cipher</option>
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
                    placeholder="Cipher Text"
                    value={output_text}
                    readOnly
                ></textarea>
            </div>
        </div>
    );
}
export default Body;