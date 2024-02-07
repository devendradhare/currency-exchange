import React from "react";
import WorldMap from "react-svg-worldmap";

const SvgWorldMap = ({ data, width }) => {

  return (
    <WorldMap
      color="gray"
      value-suffix="people"
      size={width}
      data={data}
    />
  );
};

export default SvgWorldMap;

