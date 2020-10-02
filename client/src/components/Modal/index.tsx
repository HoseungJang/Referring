import React, { useState } from "react";
import styled from "styled-components";
import { queryCache } from "react-query";
import isURL from "validator/lib/isURL";
import { Close } from "@material-ui/icons";

import { TextField } from "../TextField";
import { Spinner } from "../Spinner";

import { Color } from "../../constants/color";
import { Typography } from "../Typography";
import { Device } from "../../constants/device";
import { Button } from "../Button";
import { useApiMutation } from "../../hooks/useApi";

import { Link } from "../../types";

type ModalBaseProps = { disableClose?: boolean; onClose: () => void };

export const AddLinkModal: React.FC<ModalBaseProps> = (props) => {
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const createLink = useApiMutation("createLink", {
    onSuccess: () => {
      queryCache.refetchQueries(["getLinkList"]);
      props.onClose();
    },
    onError: () => alert("server error"),
  });

  return (
    <ModalBase disableClose={createLink.isLoading} {...props}>
      <Containers.LinkModal>
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
            disabled={(!name || !link) && !createLink.isLoading}
            onClick={() =>
              isURL(link, {
                protocols: ["https", "http"],
                require_protocol: true,
              })
                ? createLink.execute({ name, link })
                : alert("유효한 주소를 입력하세요.")
            }
          >
            {createLink.isLoading ? <Spinner /> : "ADD"}
          </Button>
        </div>
      </Containers.LinkModal>
    </ModalBase>
  );
};

export const UpdateLinkModal: React.FC<Omit<Link, "img"> & ModalBaseProps> = ({
  id,
  name,
  link,
  ...props
}) => {
  const [newName, setNewName] = useState<string>(name);
  const [newLink, setNewLink] = useState<string>(link);

  const updateLink = useApiMutation("updateLink", {
    onSuccess: () => {
      queryCache.refetchQueries(["getLinkList"]);
      props.onClose();
    },
    onError: () => alert("server error"),
  });

  const removeLink = useApiMutation("removeLink", {
    onSuccess: () => {
      queryCache.refetchQueries(["getLinkList"]);
      props.onClose();
    },
    onError: () => alert("server error"),
  });

  return (
    <ModalBase disableClose={updateLink.isLoading} {...props}>
      <Containers.LinkModal>
        <div className="title">
          <Typography.ModalTitle>UPDATE LINK</Typography.ModalTitle>
        </div>
        <div className="body">
          <TextField
            placeholder="Name"
            fontSize={20}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <TextField
            placeholder="Link"
            fontSize={20}
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
          />
        </div>
        <div className="footer">
          <Button
            disabled={(!newName || !newLink) && !updateLink.isLoading}
            onClick={() =>
              isURL(newLink, {
                protocols: ["https", "http"],
                require_protocol: true,
              })
                ? updateLink.execute({ id, name: newName, link: newLink })
                : alert("유효한 주소를 입력하세요.")
            }
          >
            {updateLink.isLoading ? <Spinner /> : "UPDATE"}
          </Button>
          <Button
            disabled={removeLink.isLoading}
            onClick={() =>
              window.confirm("삭제하시겠습니까?") && removeLink.execute({ id })
            }
          >
            {removeLink.isLoading ? <Spinner /> : "DELETE"}
          </Button>
        </div>
      </Containers.LinkModal>
    </ModalBase>
  );
};

const ModalBase: React.FC<ModalBaseProps> = ({
  disableClose,
  onClose,
  children,
}) => {
  return (
    <Containers.ModalBase onClick={() => onClose()}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button disabled={disableClose} onClick={() => onClose()}>
            <Close
              style={{
                color: disableClose ? Color.Grey4 : Color.Grey1,
              }}
            />
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
    z-index: 3;
    left: 0;
    top: 0;

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
  LinkModal: styled.div`
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

      > * {
        width: 100%;
        height: 100%;
      }
    }
  `,
};
