import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import fetchDailyInvestmentTrustCompanies from '../api/InvestmentTrustCompanies';

const InvestmentTrust = () => {
    const [everyDayTransaction, setEveryDayTransaction] = useState(null);

    useEffect(() => {
        fetchDailyInvestmentTrustCompanies(setEveryDayTransaction);
    }, []);
    return (
        <>
            {everyDayTransaction ? (
                <Table>
                    <h2>{everyDayTransaction.date}投信買賣超彙總表</h2>
                    <THead>
                        {everyDayTransaction.fields.map((field) => (
                            <Th key={field}>{field}</Th>
                        ))}
                    </THead>
                    <TBody>
                        {everyDayTransaction.data.map((stock) => (
                            <Tr key={stock}>
                                {stock.map((info, i) => (
                                    <Td key={i}>{info}</Td>
                                ))}
                            </Tr>
                        ))}
                    </TBody>
                </Table>
            ) : (
                'Loading...'
            )}
        </>
    );
};

export default InvestmentTrust;

const Table = styled.div`
    width: fit-content;
    margin: auto;
`;
const THead = styled.div`
    display: flex;
    margin: auto;
`;

const TBody = styled.div``;
const Th = styled.div`
    width: ${(props) => props.tdWidthSize};
    padding: 5px 8px;
    color: white;
    background: black;
`;
const Td = styled.div`
    padding: 5px 8px;
    margin: auto;
    color: white;
    background: black;
`;
const Tr = styled.div`
    display: flex;
    padding: 5px 8px;
    color: white;
    background: black;
`;
