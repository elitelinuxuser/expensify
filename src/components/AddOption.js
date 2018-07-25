import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAppOption = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    // if(option){
    //     alert(option);
    // }
    const error = this.props.handleAppOption(option);
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAppOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
