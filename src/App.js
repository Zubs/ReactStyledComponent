import './App.css';
import { ThemeProvider } from 'styled-components';
import {
  DarkButton,
  FancyButton,
  StyledButton,
  SubmitButton
} from "./styled-components/Button";

const theme = {
  dark: {
    primary: 'black',
    text: 'white'
  },
  light: {
    primary: 'white',
    text: 'black'
  },
};

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <div className="App">
        <h1>Hello World</h1>
        <StyledButton>Testing Again</StyledButton>
        <br/>
        <StyledButton variant="outline">Testing Again</StyledButton>
        <br/>
        <FancyButton as='a'>Fancy Testing</FancyButton>
        <br/>
        <SubmitButton>Submit me</SubmitButton>
        <br/>
        <br/>
        <DarkButton>Lmao</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
