import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${ (props) => (props.variant === 'outline' ? 'white' : '#4caf50') };
  color: ${ (props) => (props.variant === 'outline' ? '#4caf50' : 'white') };
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
`;

export default StyledButton;
