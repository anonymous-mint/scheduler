import React from "react";
import { useRouter } from "next/router";

const Space = () => {
  const { query } = useRouter();
  const space = query.space;
  return <div>{space}</div>;
};

export default Space;
