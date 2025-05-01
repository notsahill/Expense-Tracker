import styled from "styled-components";

const StyledExpense = styled.div`
    width: 100%;
    min-height: 10%;
    box-sizing: border-box;
    border: 1px solid white; 
    border-radius: 0.5rem;
    padding: 0.4rem;
    margin-top: 1%;

    .description-amount{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .description{
        font-size: 1rem;
        font-weight: 600;
    }

    .amount{
        font-size: 0.95rem;
        font-weight: 600;
        color: green;
    }

    .category-date{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .category{
        font-size: 0.75rem;
        font-weight: 400;
    }

    .date{
        font-size: 0.75rem;
        font-weight: 400;
    }
`;

export default StyledExpense;