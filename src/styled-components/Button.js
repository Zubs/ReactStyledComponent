import styled from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${ (props) => (props.variant === 'outline' ? 'white' : '#4caf50') };
  color: ${ (props) => (props.variant !== 'outline' ? 'white' : '#4caf50') };
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
	
	&:hover {
    background-color: ${ (props) => (props.variant !== 'outline' ? 'white' : '#4caf50') };
    color: ${ (props) => (props.variant === 'outline' ? 'white' : '#4caf50') };
	}
`;

export const FancyButton = styled(StyledButton)`
	background-image: linear-gradient(to right, white, black);
`;

export const SubmitButton = styled(StyledButton).attrs({
	type: 'submit',
})`
	box-shadow: 0 9px #999;
	
	&:active {
    background-color: ${ (props) => (props.variant !== 'outline' ? 'white' : '#4caf50') };
		box-shadow: 0 5px #666;
		transform: translateY(4px);
	}
`;

export const DarkButton = styled(StyledButton)`
  border: 2px solid ${ props => props.theme.dark.primary };
  background-color: ${ props => props.theme.dark.primary };
  color: ${ props => props.theme.dark.text };
	
	&:hover {
    background-color: ${ props => props.theme.dark.text };
    color: ${ props => props.theme.dark.primary };
	}
`;
