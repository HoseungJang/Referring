import React, { useState } from "react";
import styled from "styled-components";
import { Edit } from "@material-ui/icons";

import { Color } from "../../constants/color";
import { Typography } from "../Typography";
import { UpdateLinkModal } from "../Modal";

import { useInfiniteQueryWithScroll } from "../../hooks/useInfiniteQueryWithScroll";

import { Device } from "../../constants/device";
import { Link } from "../../types";

export const LinkCardList: React.FC = () => {
  const {
    data,
    isFetchingFirst,
    isFetchingMore,
    fetchTriggerElement,
  } = useInfiniteQueryWithScroll("getLinkList", 16);

  return (
    <Containers.LinkCardList>
      {data.map((e, i) => (
        <LinkCard key={i} {...e} />
      ))}
      {!isFetchingFirst && !isFetchingMore && fetchTriggerElement}
    </Containers.LinkCardList>
  );
};

export const LinkCard: React.FC<Link> = (props) => {
  const { id, img, name, link } = props;

  const [openUpdateLinkModal, setOpenUpdateLinkModal] = useState(false);

  return (
    <>
      {openUpdateLinkModal && (
        <UpdateLinkModal
          id={id}
          name={name}
          link={link}
          onClose={() => setOpenUpdateLinkModal(false)}
        />
      )}
      <Containers.LinkCardWrap>
        <div
          className="link-card"
          onClick={() => (window.location.href = link)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenUpdateLinkModal(true);
            }}
          >
            <Edit />
          </button>
          <div className="og-img">
            <img src={img} alt="" />
          </div>
          <div className="title">
            <Typography.LinkTitle>{name}</Typography.LinkTitle>
          </div>
        </div>
      </Containers.LinkCardWrap>
    </>
  );
};

const Containers = {
  LinkCardWrap: styled.div`
    width: 100%;
    height: 300px;

    @media ${Device.mobile} {
      width: 50%;
      height: 250px;
    }

    @media ${Device.tablet} {
      width: 33%;
      height: 320px;
    }

    @media ${Device.desktop} {
      width: 25%;
      height: 350px;
    }

    padding: 10px;

    box-sizing: border-box;

    > .link-card {
      position: relative;
      z-index: 0;

      width: 100%;
      height: 100%;

      background-color: ${Color.White};
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);

      > button {
        display: none;

        position: absolute;

        top: 10px;
        right: 10px;

        background-color: ${Color.White};
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

        border: 0;
        border-radius: 1px;

        outline: none;
      }

      &:hover {
        transition: transform 0.5s;
        transform: scale(1.07);

        > button {
          display: flex;
        }
      }

      > .og-img {
        width: 100%;
        height: 80%;

        > img {
          width: 100%;
          height: 100%;

          object-fit: contain;
        }
      }

      > .title {
        position: relative;

        width: 100%;
        height: 20%;

        padding: 0 10px;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        box-sizing: border-box;

        > div {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
  `,
  LinkCardList: styled.div`
    width: 100%;

    display: flex;
    flex-flow: row wrap;
  `,
};
