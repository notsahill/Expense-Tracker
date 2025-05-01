import StyledNetAmount from "./NetAmount.styled";

const NetAmount = ({amount}) => {
    if(!amount) {
        return null;
    }
    return (
        <StyledNetAmount>
            {`₹ `}{amount}
        </StyledNetAmount>
    )
}

export default NetAmount;