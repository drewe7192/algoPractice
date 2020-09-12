import linkedListPng from "./../assets/LinkedList.png";
import linkedListGif from "./../assets/LinkedList.gif";
import sortingPng from "./../assets/sorting.png";
import sortingGif from "./../assets/sorting.gif";
import { MergeSortPage } from "./../views/MergeSortPage";
import { SLLPage } from "./../views/SLLPage";
import { RouteManager } from "./routes";
import Homepage from "../views/HomePage";
import LinearSearch from "../views/LinearSearch";
const RoutingData = RouteManager.getInstance();

const Level1RouteGroup = RoutingData.addRouteGroup("Level1");
Level1RouteGroup.addRoute({
  isShowing: true,
  imgSrc: linkedListPng,
  gifSrc: linkedListGif,
  title: "Searching",
  to: "/Level1/Searching",
  exact: true,
  Component: SLLPage,
  data: LinearSearch,
});
Level1RouteGroup.addRoute({
  isShowing: true,
  imgSrc: linkedListPng,
  gifSrc: linkedListGif,
  title: "Linear Search",
  to: "/Level1/Searching/linearSearch",
  exact: true,
  Component: Homepage,
  data: LinearSearch,
});
Level1RouteGroup.addRoute({
  isShowing: true,
  imgSrc: linkedListPng,
  gifSrc: linkedListGif,
  title: "Binary Search",
  to: "/Level1/Searching/binarySearch",
  exact: true,
  Component: SLLPage,
  data: LinearSearch,
});

const Level2RouteGroup = RoutingData.addRouteGroup("Level2");
Level2RouteGroup.addRoute({
  isShowing: true,
  imgSrc: sortingPng,
  gifSrc: sortingGif,
  title: "Merge Sort",
  to: "/MergeSort",
  exact: true,
  Component: MergeSortPage,
  data: LinearSearch,
});

// RoutingData.removeOrphanParents();

export default RoutingData;
