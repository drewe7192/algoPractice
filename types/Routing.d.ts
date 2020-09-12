interface IRoutingData {
  exact: boolean;
  Component: React.FC;
  to: string;
  data: object;
}

interface ITileRoutingAttributes {
  title: string;
  imgSrc: string;
  gifSrc: string;
  to: string;
  isShowing: boolean;
}

interface IRouteAttributes extends IRoutingData, ITileRoutingAttributes {}

interface IRouteParent extends IRouteParentAttributes, IRouteParentActions {}

interface IRouteParentAttributes {
  name: string;
  children: Array<IRouteAttributes>;
}

interface IRouteParentActions {
  addRoute(routeInfo: IRouteAttributes): void;
}

interface IRouteManagerAttributes {
  routesParents: Array<IRouteParent>;
  count: number;
}

interface IRouteManagerActions {
  addRouteGroup(groupName: string): IRouteParentActions;
  removeOrphanParents(): void;
  getRoutingData(): Array<IRoutingData>;
  getTileData(): Array<ITileRoutingAttributes>;
  getRouteParents(): Array<IRouteParent>;
}

interface IRouteManager extends IRouteManagerAttributes, IRouteManagerActions {}
