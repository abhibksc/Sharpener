const ExpenseDetails = (props)=>{
    const {title, amount, location}  = props;

    return (<div className="expense-details">
        <h2>{title}</h2>
        <div>Amount: ${amount}</div>
        <div>{location}</div>
    </div>);
} 

export default ExpenseDetails;