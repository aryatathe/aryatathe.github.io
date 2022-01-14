export const graph = {
  nodes: [
    { id: "skills", label: "Skills", font: { size: 28, color: "#fabc2a" } },
    { id: "html", label: "HTML" },
    { id: "css", label: "CSS" },
    { id: "npm", label: "npm" },
    { id: "gh", label: "GitHub" },
    { id: "sass", label: "SASS" },
    { id: "js", label: "JavaScript" },
    { id: "ts", label: "TypeScript" },
    { id: "react", label: "React" },
    { id: "redux", label: "Redux" },
    { id: "styled", label: "Styled Components" },
    { id: "mui", label: "Material UI" },
  ],
  edges: [
    { from: "skills", to: "html" },
    { from: "skills", to: "css" },
    { from: "skills", to: "js" },
    { from: "skills", to: "npm" },
    { from: "skills", to: "gh" },
    { from: "css", to: "sass" },
    { from: "js", to: "ts" },
    { from: "js", to: "react" },
    { from: "js", to: "redux" },
    { from: "js", to: "styled" },
    { from: "react", to: "mui" },
  ],
};

export const options = {
  autoResize: true,
  height: "100%",
  width: "100%",
  physics: {
    maxVelocity: 10,
  },
  nodes: {
    borderWidth: 0,
    chosen: false,
    color: {
      background: "transparent",
    },
    font: {
      color: "#00eaf0",
      size: 18,
      face: "Josefin Sans",
    },
  },
  edges: {
    arrows: {
      to: {
        enabled: true,
        scaleFactor: 0,
      },
      from: {
        enabled: true,
        scaleFactor: 0,
      },
    },
    arrowStrikethrough: false,
    color: "#d7b9d5",
  },
  interaction: {
    selectable: false,
    dragView: false,
    zoomView: false,
  },
};
