import styled from "styled-components";
import { lighten } from "polished";

export const Admin = styled.div `
  display: flex;
  width: 100%;
  margin: 10px 0 ;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(0,0,0,.03);
  & > .admin-page-date {
    font-size: 1em;
    text-align: center;
    font-weight: 600;
    padding-right: 20px;
    color: ${props => props.textColor && lighten(.5, props.textColor)};
    white-space: nowrap;
    div {
      font-size: 2.4em;
    }
  }
  & > .admin-page-container {
    flex-direction: column;
    font-size: 1.4em;
    word-wrap: breake-word;
    color: ${props => props.textColor};
    flex: 1;
    & > div {
      padding-right: 20px;
      word-wrap: break-word;
    }
    & > div:nth-child(2) {
      font-size: 0.8em;
      color: ${props => props.textColor && lighten(.5, props.textColor)};
      padding-left: 15px;
      padding-top: 10px;
    }
    & > div:nth-child(1) {
      max-width: 100%;
      font-weight: 600;
      cursor: pointer;
      word-wrap: break-word;
      min-width: 0;
    }
    & > div:nth-child(1):hover {
      color: ${props => props.color && lighten(.15, props.color)};
    }
  }
  & > .admin-page-body__accept {
    color: ${props => props.textColor};
    width: 150px;
    & > .buttons {
      display: flex;
      max-width: 450px;
      min-width: 140px;
      flex-wrap: wrap;
      flex-direction: row;
      & > button {
        display: inline-block;
        min-width: 140px;
        margin-bottom: 10px;
      }
      & > .btn-push {
       padding: ${props => props.buttonPadding};
       color: white;
       margin-right: 10px;
       background: ${props => props.pushColor};
     }
     & > .btn-push:hover {
       color: white;
       background: ${props => props.pushColor && lighten(.15, props.pushColor)};
     }
     & > .btn-pushed, .btn-pushed:hover {
       color: ${props => props.pushColor};
       border: 2px solid ${props => props.pushColor};
       background: white;
       cursor: auto;
     }
     & > .btn-download, .btn-upload {
       padding: ${props => props.buttonPadding};
       color: white;
       background: ${props => props.color};
       margin-right: 10px;
     }
     & > .btn-download:hover, .btn-upload:hover {
       color: white;
       background: ${props => props.color && lighten(.15, props.color)};
     }
     & > .btn-accept {
       padding: ${props => props.buttonPadding};
       color: white;
       background: ${props => props.colorApprove};
       margin-right: 10px;
     }
     & > .btn-accept:hover {
       color: white;
       background: ${props => props.colorApprove && lighten(.15, props.colorApprove)};
     }
     & > .btn-decline {
       padding: ${props => props.buttonPadding};
       color: white;
       margin-right: 10px;
       background: ${props => props.colorDecline};
     }
     & > .btn-decline:hover {
       color: white;
       background: ${props => props.colorDecline && lighten(.15, props.colorDecline)};
     }
     & > .btn-approved, .btn-approved:hover {
       color: ${props => props.colorApprove};
       border: 2px solid ${props => props.colorApprove};
       background: white;
       cursor: auto;
     }
     & > .btn-declined, .btn-declined:hover {
       color: ${props => props.colorDecline};
       border: 2px solid ${props => props.colorDecline};
       background: white;
       cursor: auto;
       margin-right: 10px;
     }
     & > .btn-approved-decline, .btn-approved-decline:hover, .btn-declined-approve, .btn-declined-approve:hover  {
       cursor: auto;
       background: white;
       border: 2px solid rgba(0,0,0,.2);
       color: rgba(0,0,0,.2);
       margin-right: 10px;
     }
     & > .btn-upload {
       margin-right: 10px !important;
     }
    }
    & > .admin-page-container_small-text {
      font-size: 0.9em;
    }
    & > .admin-page-body-date {
      padding: 0;
      text-align: left;
      padding-top: 10px;
      font-size: 0.9em;
    }
`;

export const Account = styled.div `
  display: flex;
  color: ${props => props.textColor};
  background: rgba(0,0,0,.03);
  margin-bottom: 10px;
  padding: 20px 15px;
  width: 100%;
  justify-content: space-between;
  min-width: 300px;
  cursor: pointer;
  & div {
    display: inline-block;
    font-size: 1.4em;
    font-weight: 600;
  }
  & > div:nth-child(3) {
    white-space: nowrap;
    padding-right: 5px;
  }
  & > div:nth-child(2) {
    flex: 1;
    padding-right: 20px;
  }
  & .account-item-status-3 {
    color: ${props => props.colorDecline};
  }
  & .account-item-status-0 {
    color: ${props => props.colorDecline};
  }
  & .account-item-status-2 {
    color: ${props => props.colorApprove};
  }
  & .account-item-status-4 {
    color: ${props => props.simpleAdminPage ? props.color : props.colorApprove};
  }
  & .account-item-status-1 {
    color: ${props => props.color};
  }
  & .account-item_speakers {
    font-size: 1em;
    padding-left: 15px;
    padding-top: 10px;
    > div {
      font-size: 0.8em;
      display: block;
      font-weight: 400;
      color: ${props => props.textColor && lighten(.5, props.textColor)};
    }
  }
  & .account-item-date {
    font-size: 1em;
    text-align: center;
    font-weight: 600;
    padding-right: 20px;
    color: ${props => props.textColor && lighten(.5, props.textColor)};
    white-space: nowrap;
    div {
      display: block;
      font-size: 2.4em;
    }
  }
`;
