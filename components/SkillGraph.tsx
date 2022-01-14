import * as React from "react";
import Graph from "react-graph-vis";

import { graph, options } from "../data/SkillGraphData";

const SkillGraph = (): JSX.Element => {
  return (
    <div style={{ height: 400, width: 600 }}>
      <Graph graph={graph} options={options} />
    </div>
  );
};

export default SkillGraph;
