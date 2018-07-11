console.log("App.js is running")

const app = {
    title : 'Indecision App',
    subtitle : 'Info',
    options: []
};

const OnFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderFunction();
    }
};

const removeAll = ()=> {
    app.options = [];
    renderFunction();
};

const appRoot = document.getElementById('app');

const numbers = [55,101,2000];

const onMakeDecision = () => {
    const rand = Math.floor(Math.random()*app.options.length);
    const opt = app.options[rand];
    console.log(opt);
}

const renderFunction = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle) && <p>{app.subtitle}</p>}
            <p>{app.options.length>0?'Here are your options:':'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            {
                // numbers.map((number) => {
                //     return <p key={number}>Number: {number}</p>;
                // })
            }
            <ol>
                {
                    app.options.map((opt)=> <li key={opt}> {opt}</li>)
                }
            </ol>
            <form onSubmit={OnFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderFunction();

