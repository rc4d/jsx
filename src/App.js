function App() {
    let message = 'Bye there!';
    if(Math.random() > 0.5){
        message = 'Hello there!';
    }
    const date = new Date();
    return (
            <div>
                <input placeholder={message} />
                <textarea autoFocus={true} maxLength={10} spellCheck />
                {/* <input type={"number"} min={0} max={100} />
                <h1 style={{color: 'orange'}}>{message}</h1>
                <h3 style={{color: 'green'}}>Today is {date.toLocaleDateString()} | current time: {date.toLocaleTimeString()}</h3> */}
            </div>
        );
}

export default App;