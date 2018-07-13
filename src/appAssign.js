class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ele : false
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
            return{
                ele : !(prevState.ele)
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility} > {this.state.ele?'Hide':'Show'} details</button>
                {
                    this.state.ele && <p>Here is some text</p>
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));
// const appRoot = document.getElementById('app');
// let ele = false;

// const toggleBut = ()=> {
//     ele = !ele;
//     render();
// };

// const render = ()=> {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleBut}> {ele?'Hide':'Show'} details</button>
//             {ele && <p>Hey these are some!</p>}
//         </div>
//     );
//     ReactDOM.render(template,appRoot);
// }
// render();