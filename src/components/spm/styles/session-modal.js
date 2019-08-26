import styled from "styled-components";
import { lighten } from "polished";
import Modal from "./../../Modal";

export const SessionModalWindow = styled(Modal) `
  & .modal__content {
    border-radius: 0px;
    border: 2px solid ${props => props.color};
    margin: auto;
    width: 40vw;
    min-width: 400px;
    max-width: 700px;
    background: white;
  }
  & .modal__dialog {
    width: 40vw;
    min-width: 400px;
    max-width: 700px;
  }
  & .modal__body-main {
    padding: 30px;
  }
  & .modal-content-footer {
    margin-top: 20px;
    display: flex;
    div:nth-child(1) {
      flex: 1;
    }
  }
  & .modal__header {
    font-size: 2em;
    padding: 20px;
    text-align: center;
    border-bottom: 2px solid ${props => props.color};
    color: gold;
  }
  & .account-item-status-0 {
    color: ${props => props.declinedColor};
  }
  & .account-item-status-1 {
    color: ${props => props.color};
  }
  & .account-item-status-2 {
    color: ${props => props.approvedColor};
  }
  & .account-item-status-3 {
    color: ${props => props.declinedColor};
  }
  & .account-item-status-4 {
    color: ${props => props.simpleAdminPage ? props.approvedColor : props.admin ? props.pushedColor : props.color };
  }
  & .loading {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 40px;
    border: 2px solid ${props => props.color};
    margin-top: 30px;
    box-sizing: border-box;
    width: 100%;
    padding: 0;
  }
  & .loading-progress-bar {
    background: ${props => props.color} !important;
    border: 2px solid ${props => props.color};
    width: 1px;
    height: 100%;
  }
  & .loading-percentage {
    position: absolute;
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: -35px;
    z-index: 2;
  }
  & .meter > span {
    display: block;
    height: 100%;
    background-color: ${props => props.color};
    background-image: linear-gradient(
      center bottom,
      rgb(43,194,83) 37%,
      rgb(84,240,84) 69%
    );
    box-shadow:
      inset 0 2px 9px  rgba(255,255,255,0.3),
      inset 0 -2px 6px rgba(0,0,0,0.4);
    position: relative;
    overflow: hidden;
  }

  & .meter > span:after {
    content: "";
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background-image: linear-gradient(
      -45deg,
      rgba(255, 255, 255, .2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, .2) 50%,
      rgba(255, 255, 255, .2) 75%,
      transparent 75%,
      transparent
    );
    z-index: 1;
    background-size: 50px 50px;
    animation: move 2s linear infinite;
    overflow: hidden;
  }

  & .loading-colored {
    color: ${props => props.color};
  }
  & input[type="file"] {
      display: none;
  }

  & .btn {
    border-radius: $border-radius;
    font-size: 1em;
    padding: 12px 26px;
    color: red;
  }
  & .btn-download {
    padding: $admin-button-padding;
    color: white;
    background: ${props => props.color};
    margin-right: 10px;
  }
  & .btn-download:hover {
    color: white;
    background: ${props => props.color && lighten(.15, props.color)};
  }
`;
