import ipTracker from "../images/ip-tracker.png";
import minesweeper from "../images/minesweeper.png";
import todoApp from "../images/todo-app.png";
import openOpus from "../images/open-opus.png";

export interface projectInterface {
  title: string;
  description: string;
  url: string;
  image: any;
}

export const projects: projectInterface[] = [
  {
    title: "IP Address Tracker",
    description:
      "Uses the ipapi.co geolocation API and Leaflet JS for map data.",
    url: "https://excalibur1702.github.io/frontend-mentor/ip-tracker/",
    image: ipTracker,
  },
  {
    title: "Minesweeper Game",
    description:
      "Play the classic game with customizable grid size and difficulty",
    url: "https://excalibur1702.github.io/web-games/minesweeper/",
    image: minesweeper,
  },
  {
    title: "Todo App",
    description: "A simple todo list manager with drag and drog functionality.",
    url: "https://excalibur1702.github.io/frontend-mentor/todo-app/",
    image: todoApp,
  },
  {
    title: "Classical Music DB",
    description:
      "Browse the Open Open API for classical composers and their compositions.",
    url: "https://excalibur1702.github.io/classical-music-db/",
    image: openOpus,
  },
];
