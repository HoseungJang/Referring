import React from "react";
import styled from "styled-components";
import { Close } from "@material-ui/icons";

import { Color } from "../../constants/color";

type ModalBaseProps = { onClose: () => void };

export const AddLinkModal: React.FC<ModalBaseProps> = (props) => {
  return (
    <ModalBase {...props}>
      <div style={{ width: "100%", height: "100%" }}>asdfasdf</div>
    </ModalBase>
  );
};

const ModalBase: React.FC<ModalBaseProps> = ({ onClose, children }) => {
  return (
    <Containers.ModalBase onClick={() => onClose()}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button onClick={() => onClose()}>
            <Close />
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </Containers.ModalBase>
  );
};

const Containers = {
  ModalBase: styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;

    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);

    > .modal {
      background-color: ${Color.White};

      > .modal-header {
        display: flex;
        justify-content: flex-end;

        padding: 10px;

        > button {
          background-color: inherit;
          border: 0;
          outline: none;
          cursor: pointer;
        }
      }

      > .modal-content {
        width: 500px;
        height: 500px;

        padding: 10px;
      }
    }
  `,
};
