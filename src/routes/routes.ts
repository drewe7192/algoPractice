import HomePage from "./../views/HomePage";
import linearSearchData from "../views/LinearSearch";

export class RouteManager
  implements IRouteManager, IRouteManagerAttributes, IRouteManagerActions {
  public routesParents: Array<IRouteParent>;
  public count: number;
  private _homeRoute: IRoutingData;
  private static _instance: IRouteManagerActions;

  private constructor() {
    this.routesParents = [];
    this.count = 0;
    this._homeRoute = {
      to: "/",
      Component: HomePage,
      exact: true,
      data: linearSearchData,
    };
  }

  public static getInstance() {
    if (!RouteManager._instance) RouteManager._instance = new RouteManager();
    return RouteManager._instance;
  }

  /**
   * @param routeName Name of the routeGroup
   */
  public addRouteGroup(routeName: string): IRouteParentActions {
    const routeReference: IRouteParent = new RouteParent(routeName);
    this.routesParents.push(routeReference);
    this.count++;
    return routeReference;
  }

  public removeOrphanParents(): void {
    const _newPointer: Array<IRouteParent> = [];
    this.routesParents.forEach((p) => {
      if (p && Array.isArray(p.children) && p.children.length === 0) {
        // will get new pointer anyway
      } else _newPointer.push(p);
    });

    delete this.routesParents;
    this.routesParents = _newPointer;
    this.count = _newPointer.length;
  }

  public getRouteParents(): Array<IRouteParent> {
    return this.routesParents;
  }

  private _getRouteChildren(): Array<IRouteAttributes> {
    const routingDataCollection: Array<IRouteAttributes> = [];
    this.routesParents.forEach((p) =>
      p.children.forEach((c) => routingDataCollection.push(c))
    );
    return routingDataCollection;
  }

  public getRoutingData(): Array<IRoutingData> {
    return [...this._getRouteChildren(), this._homeRoute];
  }

  public getTileData(): Array<ITileRoutingAttributes> {
    return this._getRouteChildren().filter((t) => t.isShowing);
  }
}

class RouteParent
  implements IRouteParent, IRouteParentAttributes, IRouteParentActions {
  public name: string;
  public children: Array<IRouteAttributes>;
  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  public addRoute(routeInfo: IRouteAttributes): void {
    this.children.push(new Route(routeInfo));
  }
}

class Route implements IRouteAttributes {
  public title: string;
  public isShowing: boolean;
  public imgSrc: string;
  public gifSrc: string;
  public to: string;
  public exact: boolean;
  public data: object;
  public Component: React.FC<{}>;
  constructor(routeSettings: IRouteAttributes) {
    const {
      title,
      isShowing,
      imgSrc,
      gifSrc,
      to,
      exact,
      Component,
      data,
    } = routeSettings;
    this.title = title;
    this.isShowing = isShowing;
    this.imgSrc = imgSrc;
    this.gifSrc = gifSrc;
    this.to = to;
    this.exact = exact;
    this.Component = Component;
    this.data = data;
  }
}
