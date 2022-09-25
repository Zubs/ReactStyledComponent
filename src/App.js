import './App.css';
import { FancyButton, StyledButton, SubmitButton } from "./styled-components/Button";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <StyledButton>Testing Again</StyledButton>
      <br/>
      <StyledButton variant="outline">Testing Again</StyledButton>
      <br/>
      <FancyButton as='a'>Fancy Testing</FancyButton>
      <br/>
      <SubmitButton>Submit me</SubmitButton>
    </div>
  );
}

export default App;
