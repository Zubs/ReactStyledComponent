import './App.css';
import StyledButton from "./styled-components/Button";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <StyledButton>Testing Again</StyledButton>
      <br/>
      <StyledButton variant="outline">Testing Again</StyledButton>
    </div>
  );
}

export default App;
