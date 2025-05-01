import StyledExpense from "./Expense.styled";

const Expense = ({description, amount, date= "26-12-2000", category="Miscellaneous"}) => {
    
    return (
        <StyledExpense>
            <div className="description-amount">
                <div className="description">
                    {description}
                </div>
                <div className="amount">
                    {`₹`}{amount}
                </div>
            </div>
            <div className="category-date">
                <div className="category">
                    {category}
                </div>
                <div className="date"> 
                    {date}
                </div>
            </div>
        </StyledExpense>
    )
}

export default Expense;