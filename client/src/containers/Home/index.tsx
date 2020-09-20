import React from "react";

import { Spinner } from "../../components/Spinner";

import { useApiQuery } from "../../hooks/useApi";

import { withPlaceholder } from "../../helpers/withPlaceholder";

const HomeLoaded: React.FC = () => {
  const list = useApiQuery(
    "getLinkList",
    { page: 0, limit: 10 },
    { suspense: true }
  );
  console.log(list.data);

  return <div>home</div>;
};

const HomePlaceholder: React.FC = () => {
  return <Spinner />;
};

export const Home = withPlaceholder(HomeLoaded, HomePlaceholder);
