import React, { useEffect, useState } from "react";

function Input({ updatingInvestRes, resetInvestRes }) {
    const [userInput, setUserInput] = useState({
        initialInvestment: "",
        annualInvestment: "",
        expectedReturn: "",
        duration: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserInput((prevInput) => {
            const newUserInput = { ...prevInput, [name]: value };

            if (
                newUserInput.initialInvestment &&
                newUserInput.annualInvestment &&
                newUserInput.expectedReturn &&
                newUserInput.duration
            ) {
                updatingInvestRes({
                    initialInvestment: parseFloat(newUserInput.initialInvestment),
                    annualInvestment: parseFloat(newUserInput.annualInvestment),
                    expectedReturn: parseFloat(newUserInput.expectedReturn),
                    duration: parseInt(newUserInput.duration, 10),
                });
            } else {
                resetInvestRes();
            }

            return newUserInput;
        });
    };

    console.log(JSON.stringify(userInput));

    return (
        <form id="user-input">
            <div className="input-group">
                <div className="">
                    <label className="label" htmlFor="initial-investment">
                        Initial investment
                    </label>
                    <input
                        className="input"
                        type="text"
                        id="initial-investment"
                        name="initialInvestment"
                        value={userInput.initialInvestment}
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <label className="label" htmlFor="annual-investment">
                        Annual investment
                    </label>
                    <input
                        className="input"
                        type="text"
                        id="annual-investment"
                        name="annualInvestment"
                        value={userInput.annualInvestment}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="input-group">
                <div className="">
                    <label className="label" htmlFor="expected-return">
                        Expected return
                    </label>
                    <input
                        className="input"
                        type="text"
                        id="expected-return"
                        name="expectedReturn"
                        value={userInput.expectedReturn}
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <label className="label" htmlFor="duration">
                        Duration
                    </label>
                    <input
                        className="input"
                        type="text"
                        id="duration"
                        name="duration"
                        value={userInput.duration}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </form>
    );
}

export default Input;
