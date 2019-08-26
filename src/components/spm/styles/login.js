import styled from "styled-components";
import { lighten } from "polished";

export const LoginButtonBox = styled.div `
  display: flex;
  margin-top: 20px;
  & > div {
    flex: 1;
    padding: 5px;
    font-size: 1em;
  }
  & > button {
    border-radius: ${props => props.borderRadius};
    font-size: 1em;
    padding: 12px 26px;
    color: white;
    background: ${props => props.color};
    border: none;
    cursor: pointer;
  }
  & > button:hover {
    color: white;
    background:  ${props => props.color && lighten(.15, props.color)};
  }
`;

export const Login = styled.div `
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  align-items: ${props => props.vertical};
  font-size: ${props => props.size};
  & > div > .login-box {
    width: 30vw;
    max-width: 500px;
    min-width: 300px;
    border: 3px solid ${props => props.color};
    padding: 15px 20px;
    padding-bottom: 25px;
    & > h2 {
      color: ${props => props.color};
      margin-bottom: 0;
      padding: 0;
    }
    & > .login-box_hint {
      padding: 20px 0;
      font-size: 1.1em;
    }
    & > .login-box-input-bottomless {
      border-bottom: none;
    }
    & > input {
      width: 100%;
      border: 3px solid ${props => props.color};
      border-radius: ${props => props.borderRadius};
    }
  }
  & > div > h2 {
    text-align: ${props => props.horizontal};
    color: ${props => props.color}
  }
`;
