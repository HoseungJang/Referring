import React, { useState } from "react";
import styled from "styled-components";
import isURL from "validator/lib/isURL";
import { Close } from "@material-ui/icons";

import { TextField } from "../TextField";

import { Color } from "../../constants/color";
import { Typography } from "../Typography";
import { Device } from "../../constants/device";
import { Button } from "../Button";
import { useApiMutation } from "../../hooks/useApi";

type ModalBaseProps = { onClose: () => void };

export const AddLinkModal: React.FC<ModalBaseProps> = (props) => {
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const createLink = useApiMutation("createLink");

  return (
    <ModalBase {...props}>
      <Containers.AddLinkModal>
        <div className="title">
          <Typography.ModalTitle>ADD LINK</Typography.ModalTitle>
        </div>
        <div className="body">
          <TextField
            placeholder="Name"
            fontSize={20}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            placeholder="Link"
            fontSize={20}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="footer">
          <Button
            disabled={(!link || !name) && !createLink.isLoading}
            onClick={() => {
              if (
                isURL(link, {
                  protocols: ["https", "http"],
                  require_protocol: true,
                })
              ) {
                createLink.execute({ name, link });
                props.onClose();
              } else {
                alert("유효한 URL을 입력하세요.");
              }
            }}
          >
            ADD
          </Button>
        </div>
      </Containers.AddLinkModal>
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

        padding: 5px 0 0 0;

        > button {
          background-color: inherit;
          border: 0;
          outline: none;
          cursor: pointer;
        }
      }

      > .modal-content {
        padding: 10px;
      }
    }
  `,
  AddLinkModal: styled.div`
    width: 200px;
    height: 200px;

    @media ${Device.mobile} {
      width: 300px;
      height: 200px;
    }

    @media ${Device.tablet} {
      width: 400px;
      height: 220px;
    }

    @media ${Device.desktop} {
      width: 500px;
      height: 250px;
    }

    > .title {
      width: 100%;
      height: 20%;

      display: flex;
      justify-content: flex-start;
    }

    > .body {
      width: 100%;
      height: 60%;

      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start;

      > input {
        height: 50%;
        margin: 5px 0;
      }
    }

    > .footer {
      width: 100%;
      height: 20%;

      display: flex;
      flex-direction: column;

      align-items: stretch;
    }
  `,
};
