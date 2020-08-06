interface IRoutingData {
    exact: boolean
    Component: React.FC
    to: string
}

interface ITileRoutingAttributes {
    title: string
    imgSrc: string
    gifSrc: string
    to: string
    isShowing: boolean
}

interface IRouteAttributes extends IRoutingData, ITileRoutingAttributes {}

// Interface for IRouteParent
interface IRouteParent extends IRouteParentAttributes, IRouteParentActions {}
// Interface for IRouteParent
interface IRouteParentAttributes {
    name:  string
    children:   Array<IRouteAttributes>
}

// Interface for IRouteParent
interface IRouteParentActions {
    addRoute(routeInfo: IRouteAttributes):void
}

// RouteManager Interfaces
interface IRouteManagerAttributes {
    routesParents: Array<IRouteParent>
    count: number
}

// implementation code can be found in routes.ts in RouteManager class
interface IRouteManagerActions {

    /**
     * Will add a new Group to Routing, example would be "Sorting"
     * @param groupName Name of the new Group we are adding
     */
    addRouteGroup(groupName: string):IRouteParentActions

    /**
     * Removes parents(Route Groups) who do NOT have children.
     */
    removeOrphanParents(): void

    /**
     * Gets back data for routing in App.tsx
     */
    getRoutingData(): Array<IRoutingData>

    /**
     * Gets routing data for TileData in shape of getTileData
     */
    getTileData(): Array<ITileRoutingAttributes>

    /**
     * Gets back data from Parents POV with Children
     */
    getRouteParents(): Array<IRouteParent>

}

interface IRouteManager extends IRouteManagerAttributes, IRouteManagerActions {}