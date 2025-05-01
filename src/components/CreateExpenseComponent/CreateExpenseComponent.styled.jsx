import styled from "styled-components";

const StyledCreateExpenseComponent = styled.div`
    width: 100%;
    height: 20%;

    .amount-date-wrapper{
        display: flex;
        gap: 6%;
    }

    .amount-input{
        width: 47%;
        color: #fff;
    }

    .date-input{
        width: 47%;
        color: #fff;
    }

    .description-input{
        margin-top: 1%;
        color: #fff;
    }

    .add-transaction-button{
        width: 100%;
        margin: 1% 0 1% 0;
        cursor: pointer;
    }


    //

    .no-transactions{
        min-height: 36px;
        border: 1px solid red;
        color: red;
        border-radius: 6px;
        margin: 1% 0 1% 0;
        font-size: 0.875rem;
        display:flex;
        align-items: center;
        justify-content: center;
    }

    .transaction-history{
        margin: 3% 0 3% 0;
        font-size: 0.875rem;
    }


`;

export default StyledCreateExpenseComponent;