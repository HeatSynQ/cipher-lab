import { VigenereInput, CaeserInput, OneTimePadInput, PolyalphabeticInput, ColumnarTranspositionInput, RailFenceInput } from "../algorithms/Algo_Form";

const AlgoInput = ({ input_text, selectedAlgo, setOutputText }) => {
    return selectedAlgo === "caeser" ? (
        <CaeserInput setOutputText={setOutputText} input_text={input_text} />
    ) : selectedAlgo === "vigenere" ? (
        <VigenereInput setOutputText={setOutputText} input_text={input_text} />
    ) : selectedAlgo === "otp" ? (
        <OneTimePadInput setOutputText={setOutputText} input_text={input_text} />
    ) : selectedAlgo === "poly" ? (
        <PolyalphabeticInput setOutputText={setOutputText} input_text={input_text} />
    ) : selectedAlgo === "column" ? (
        <ColumnarTranspositionInput setOutputText={setOutputText} input_text={input_text} />
    ) : selectedAlgo === "rail-fence" ? (
        <RailFenceInput setOutputText={setOutputText} input_text={input_text} />
    ) : (
        <>Nothing</>
    )
};

export default AlgoInput;