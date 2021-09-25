import logo from "./logo.svg";
import "./App.css";

function App() {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "dzulsyakimin@gmail.com",
      password: "12345678",
    }),
  };

  fetch("/signin", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log({ result });
      // dispatch({type: MainCallback.USER_DATA, value: result});
    })
    .catch((error) => console.log("error", error));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
