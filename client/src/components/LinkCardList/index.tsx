import React from "react";
import styled from "styled-components";

import { Color } from "../../constants/color";
import { Typography } from "../Typography";

import { useInfiniteQueryWithScroll } from "../../hooks/useInfiniteQueryWithScroll";
import { Device } from "../../constants/device";

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
        <LinkCard key={i} img={e.img} name={e.name} link={e.link} />
      ))}
      {!isFetchingFirst && !isFetchingMore && fetchTriggerElement}
    </Containers.LinkCardList>
  );
};

export const LinkCard: React.FC<{
  img: string;
  name: string;
  link: string;
}> = (props) => {
  const { img, name, link } = props;

  return (
    <Containers.LinkCardWrap>
      <Containers.LinkCard onClick={() => (window.location.href = link)}>
        <div className="og-img">
          <img src={img} alt="" />
        </div>
        <div className="title">
          <Typography.LinkTitle>{name}</Typography.LinkTitle>
        </div>
      </Containers.LinkCard>
    </Containers.LinkCardWrap>
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
  `,
  LinkCard: styled.div`
    position: relative;
    z-index: 0;

    width: 100%;
    height: 100%;

    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
    background-color: ${Color.White};

    &:hover {
      transition: transform 0.5s;
      transform: scale(1.07);
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
      width: 100%;
      height: 20%;

      padding: 0 10px;

      display: flex;
      justify-content: center;
      align-itmes: center;

      box-sizing: border-box;

      > div {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  `,
  LinkCardList: styled.div`
    width: 100%;

    display: flex;
    flex-flow: row wrap;
  `,
};
