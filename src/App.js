import Stdbtn from "./components/std-button";
import "./app.css";

function App() {
  return (
    <div className='App'>
      <h1>BBRR Solutions React Boilerplate</h1>
      <div className='container'>
        <p>Please enjoy our version of create-react-app</p>
        <Stdbtn />
        <Stdbtn />
        <Stdbtn />
        <p>
          Visit us at{" "}
          <a href='https://dev.bbrr.solutions'>dev.bbrr.solutions</a>
        </p>
        <p>
          See our public repositories at{" "}
          <a href='https://dev.azure.com/BBRRSolutions/BBRR%20DevOps'>
            BBRR DevOps
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
