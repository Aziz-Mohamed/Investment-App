import Input from "./components/input";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";
import React, { useState } from "react";

function App() {
    const [investmentResults, setInvestmentResults] = useState([]);

    const updatingInvestRes = (userInput) => {
        setInvestmentResults(calculateInvestmentResults(userInput));
    };
    const resetInvestRes = () => {
        setInvestmentResults([]);
    };

    return (
        <>
            <h1>React Investment Calculator</h1>
            <Input
                updatingInvestRes={updatingInvestRes}
                resetInvestRes={resetInvestRes}
            />
            <Results investmentResults={investmentResults} />
        </>
    );
}

export default App;
