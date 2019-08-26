import styled from "styled-components";
import { lighten } from "polished";

export const Header = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
  min-width: 600px;
  & .user-interface-logo {
    width: 300px;
  }
  & > div:nth-child(2) {
    flex: 1;
    padding-left: 20px;
    color: ${props => props.color};
    font-size: ${props => props.size};
  }
  & > div > .user-interface-btn {
    color: white;
    margin-left: 10px;
    background: ${props => props.color};
  }
  & > div > .user-interface-btn:hover {
    color: white;
    background: ${props => props.color && lighten(.15, props.color)};
  }
  & > .user-interface-btn:active, .user-interface-btn:focus, {
    color: white;
  }
`;

export const SubHeader = styled.div `
  background: ${props => props.color};
  color: white;
  display: flex;
  justify-content: center;
  border-top-left-radius: ${props => props.borderRadius};
  border-top-right-radius: ${props => props.borderRadius};
  border-bottom: 3px solid white;
  min-width: 600px;
  & > .account-page-header_container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 50px;
    width: 100%;
    min-width: 300px;
    & > .countdown {
      padding-left: 10px;
      text-align: center;
      font-size: ${props => props.size};
    }
    & > h1 {
      flex: 1;
      padding: 0;
      margin: 0;
      font-size: ${props => props.headerSize};
      font-weight: ${props => props.headerWeight};
    }
  }
`;

export const Search = styled.div `
  width: 100%;
  min-width: 300px;
  padding: 20px 50px;
  display: flex;
  & > .search-input {
    border: none;
    flex: 1;
    background: none;
    box-shadow: none;
    border-bottom: 2px solid ${props => props.color};
  }
  & > .search-input:focus {
    outline: 0;
  }
  & > .search-icon {
    width: 40px;
    height: 30px;
    background: 50% 0% url('data:image/svg+xml;utf8,<svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="${props => props.color}" id="icon-111-search"><path d="M19.4271164,21.4271164 C18.0372495,22.4174803 16.3366522,23 14.5,23 C9.80557939,23 6,19.1944206 6,14.5 C6,9.80557939 9.80557939,6 14.5,6 C19.1944206,6 23,9.80557939 23,14.5 C23,16.3366522 22.4174803,18.0372495 21.4271164,19.4271164 L27.0119176,25.0119176 C27.5621186,25.5621186 27.5575313,26.4424687 27.0117185,26.9882815 L26.9882815,27.0117185 C26.4438648,27.5561352 25.5576204,27.5576204 25.0119176,27.0119176 L19.4271164,21.4271164 L19.4271164,21.4271164 Z M14.5,21 C18.0898511,21 21,18.0898511 21,14.5 C21,10.9101489 18.0898511,8 14.5,8 C10.9101489,8 8,10.9101489 8,14.5 C8,18.0898511 10.9101489,21 14.5,21 L14.5,21 Z" id="search"/></g></svg>') no-repeat;
  }
`;

export const Main = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CopyrightFooter = styled.div `
  width: 100%;
  text-align: center;
  color: white;
  padding: 5px;
  background: ${props => props.color};
  font-size: 12px;
  border-bottom-left-radius: ${props => props.borderRadius};
  border-bottom-right-radius: ${props => props.borderRadius};
  margin-bottom: 30px;
`;
