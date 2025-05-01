import { Input } from "antd";
import { useState } from "react";
import { DatePicker, Button } from "antd";
import StyledCreateExpenseComponent from "./CreateExpenseComponent.styled";
import Expense from "../Expense";
import NetAmount from "../NetAmount";
import toast from "react-hot-toast";
import moment from "moment";

const CreateExpenseComponent = () => {
  const [formValues, setFormValues] = useState({
    amount: null,
    description: null,
    date: null,
  });
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    const datee = moment.locale();
    console.log(datee);
    
    setFormValues((prev)=>{
      return {
        ...prev,
        date: datee
      }
    })
  };

  const handleAddTransaction = (formValues) => {    
    if(formValues.amount === null || formValues.description === null || formValues.description?.length === 0){
      toast.error("Please enter amount and description")
      return;
    }
    setExpenses((expenses) => {
      return [
        ...expenses,
        formValues
      ]
    })
    setFormValues({
      amount: null,
      description: null,
      date: null,
    })
    setAmount((amount)=> +amount+ +formValues.amount)
  }

  return (
    <StyledCreateExpenseComponent>
      <NetAmount amount={amount}/>
      <div className="amount-date-wrapper">
        <Input
          value={formValues.amount}
          placeholder="expense amount"
          className="amount-input"
          type="number"
          name="amount"
          onChange={handleChange}
        />
        <DatePicker
          placeholder="expense date"
          className="date-input"
          value={formValues.date}
          onChange={onChange}
        />
      </div>
      <Input
        placeholder="expense description"
        className="description-input"
        value={formValues.description}
        name="description"
        onChange={handleChange}
      />
      <Button color="blue" variant="solid" className="add-transaction-button" onClick={()=> handleAddTransaction(formValues)}>
        Add transaction
      </Button>

      <div className="transaction-history">Transaction History</div>
      <div>
        {
          expenses.length===0 ? <div className="no-transactions">No transactions</div> : 
          <div>
            {expenses.map((expense,i) => {
              return (
                <Expense
                  amount={expense.amount}
                  date={expense.date}
                  description={expense.description}
                  key={i}
              />
              )
              
            })}
          </div>
        }
      </div>
  
    </StyledCreateExpenseComponent>
  );
};

export default CreateExpenseComponent;
