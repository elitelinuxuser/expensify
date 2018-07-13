class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAppOption = this.handleAppOption.bind(this);
        this.state = {
            options: []
        };
    }
    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options: []
            };
        });
    }
    handlePick() {
        const rand = Math.floor(Math.random()*(this.state.options.length));
        const option = this.state.options[rand]
        alert(option);
    }
    handleAppOption(option){
        if(!option){
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option)> -1){
            return 'This option already exists';
        }

        this.setState((prevState)=>{
            return {
                options: prevState.options.concat(option)
            }
        });
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in hands of a Computer!';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick = {this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} 
                />
                <AddOption 
                    handleAppOption = {this.handleAppOption}
                />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled = {!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}



class Options extends React.Component {
    render(){
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions} >Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAppOption = this.handleAppOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAppOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        // if(option){
        //     alert(option);
        // }
        const error = this.props.handleAppOption(option);
        this.setState(()=>{
            return { error };
        });
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAppOption}>
                    <input type='text' name='option' />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));