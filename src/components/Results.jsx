import React from "react";

function Results({ investmentResults }) {
    return (
        <table className="result center">
            <thead>
                <tr className="result-thead">
                    <th>Year</th>
                    <th>Interest</th>
                    <th>Value at End of Year</th>
                    <th>Annual Investment</th>
                </tr>
            </thead>
            <tbody>
                {investmentResults.map((item) => (
                    <tr key={item.year}>
                        <td>{item.year}</td>
                        <td>
                            {typeof item.interest === "number"
                                ? item.interest
                                : "-"}
                        </td>
                        <td>
                            {typeof item.valueEndOfYear === "number"
                                ? item.valueEndOfYear
                                : "-"}
                        </td>
                        <td>
                            {typeof item.annualInvestment === "number"
                                ? item.annualInvestment
                                : "-"}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Results;
