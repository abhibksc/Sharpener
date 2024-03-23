

const ExpenseDate = (props)=>{
    const {dates} = props
    return <div>{dates.toDateString()}</div>
}

export default ExpenseDate;