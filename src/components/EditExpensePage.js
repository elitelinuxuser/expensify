import React from "react";

const EditExpensePage = props => {
  console.log(props);
  return <div>This is from EditExpense and id {props.match.params.id}</div>;
};

export default EditExpensePage;
