import styled from 'styled-components';

const SignIcon = styled.div`
  height: 40px;
  width: 40px;
  background-color: #f48fb1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignTitle = styled.p`
color: #eeeeee;
font-size: 20px;
display: flex;
justify-content: center;
`;

const InputStyleComponent = styled.input`
  color: red;
  width: ${props => (props.halfWidth ? '144px' : '312px')};
  height: 43px;
  font-family: 'Roboto', sans-serif;
  color: gray;
  background: none;
  border: 1px solid gray;
  margin: 6px;
  border-radius: 3px;
  padding: 0 0 0 10px;
`;

const SignButton = styled.button`
  width: 324px;
  height: 29px;
  border: 0;
  padding: 0;
  background-color: #90caf8;
  margin: 6px;
  border-radius: 3px;
  font-weight: 700;
`;

export { SignIcon, SignTitle, InputStyleComponent, SignButton };
