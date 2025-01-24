import { useEffect } from "react";
import {VigenereInput, CaeserInput} from "./Algo_Form"

const AlgoInput = ({input_text, selectedAlgo, setOutputText}) => {

    switch (selectedAlgo) {
        case "caeser":
            return(<CaeserInput setOutputText={setOutputText} input_text={input_text}/>)
        case "vigenere":
            return(<VigenereInput setOutputText={setOutputText} input_text={input_text}/>)
    }
}
 
export default AlgoInput;