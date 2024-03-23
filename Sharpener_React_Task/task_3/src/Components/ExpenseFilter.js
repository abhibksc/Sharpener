import React from "react";

const ExpenseFilter = (props) =>{
    const dropdownChangeHandler = (event) =>{
        props.onchangeFilter(event.target.value);
    };

    return (<div className="expense-filter">
        <div className="expense-filter_control">
            <label>Filter by year</label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>
    </div>
    );
};

export default ExpenseFilter;