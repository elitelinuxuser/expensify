const appRoot = document.getElementById('app');
let ele = false;

const toggleBut = ()=> {
    ele = !ele;
    render();
};

const render = ()=> {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleBut}> {ele?'Hide':'Show'} details</button>
            {ele && <p>Hey these are some!</p>}
        </div>
    );
    ReactDOM.render(template,appRoot);
}
render();
