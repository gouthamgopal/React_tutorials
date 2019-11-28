// Import React and ReactDOM libraries.
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component.
const App = () => {
    return (
        <div>
            <label for="name">Enter Name:</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
        </div>
    );
}

// Render this to DOM using ReactDOM
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)