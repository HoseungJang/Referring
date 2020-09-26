import React, { useState } from "react";
import styled from "styled-components";

import { Spinner } from "../../components/Spinner";
import { Button } from "../../components/Button";
import { AddLinkModal } from "../../components/Modal";
import { LinkCard } from "../../components/LinkCardList";

import { useScreenEffect } from "../../hooks/useScreenEffect";

import { Color } from "../../constants/color";
import { Device } from "../../constants/device";

export const Home: React.FC = () => {
  const [openAddLinkModal, setOpenAddLinkModal] = useState(false);

  const [pageY, setPageY] = useState(0);
  const [hide, setHide] = useState(false);

  useScreenEffect(() => {
    const { pageYOffset } = window;
    const isScrollDown = pageYOffset > pageY;

    if (pageYOffset > 0) {
      setPageY(pageYOffset);
      setHide(isScrollDown);
    }
  }, [pageY]);

  return (
    <>
      {openAddLinkModal && (
        <AddLinkModal onClose={() => setOpenAddLinkModal(false)} />
      )}
      <Container>
        <div className="buttons" aria-hidden={hide}>
          <Button onClick={() => setOpenAddLinkModal(true)}>Add Link</Button>
        </div>
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  z-index: 0;

  > .buttons {
    position: sticky;

    top: 50px;

    @media ${Device.mobile} {
      top: 61px;
    }

    @media ${Device.tablet} {
      top: 67px;
    }

    @media ${Device.desktop} {
      top: 72px;
    }

    display: flex;
    flex-direction: row;

    padding: 10px 0 0;
    margin: 0 0 10px;

    transform: translateY(0);
    transition: 1s cubic-bezier(0.5, 0.5, 0, 1);

    &[aria-hidden="true"] {
      transform: translateY(-100%);
    }
  }
`;
