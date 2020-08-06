import HomePage from './../views/HomePage'

export class RouteManager implements IRouteManager, IRouteManagerAttributes, IRouteManagerActions {

    // ATTRIBUTES LISTED HERE
    public routesParents        : Array<IRouteParent>
    public count                : number
    private _homeRoute          : IRoutingData
    private static _instance    : IRouteManagerActions

    private constructor()
    {
        this.routesParents  =   []
        this.count          =   0
        this._homeRoute     =   {
            to: '/',
            Component: HomePage,
            exact: true
        }
    }

    /**
     * HOW WE ARE ABLE TO ACCESS THE CLASS|SINGLETON INSTANCE
     */
    public static getInstance()
    {
        if(!RouteManager._instance) RouteManager._instance = new RouteManager()
        return RouteManager._instance
    }

    /**
     * How we are able to add a new RouteGroup
     * @param routeName Name of the routeGroup
     */
    public addRouteGroup(routeName: string):IRouteParentActions
    {
        const routeReference:IRouteParent = new RouteParent(routeName)
        this.routesParents.push(routeReference)
        this.count++
        return routeReference
    }

    /**
     * Removes parents who dont have children
     */
    public removeOrphanParents(): void
    {
        const _newPointer: Array<IRouteParent> = []
        this.routesParents.forEach(p => {
            if(p && Array.isArray(p.children) && p.children.length === 0) {
                // will get new pointer anyway
            } else _newPointer.push(p)
        })

        delete this.routesParents
        this.routesParents = _newPointer
        this.count = _newPointer.length
    }

    /**
     * Gets back data from Parents POV with Children.
     * Used in the HamburgerSlider.tsx
     */
    public getRouteParents(): Array<IRouteParent>
    {
        return this.routesParents
    }

    /**
     * Gets back data from Childrens POV with out Parents
     */
    private _getRouteChildren(): Array<IRouteAttributes>
    {
        const routingDataCollection: Array<IRouteAttributes> = []
        this.routesParents.forEach(p => 
            p.children.forEach(c => 
                routingDataCollection.push(c)
            )
        )
        return routingDataCollection
    }

    /**
     * Used in App.tsx to create the standard routing. Note that we include the homeRoute as well
     */
    public getRoutingData(): Array<IRoutingData> {
        return [
            ...this._getRouteChildren(),
            // Adding the Home Route Over Here as this Does not have a parent
            this._homeRoute
        ]
    }

    /**
     * This will get the data for the HomePage Tile... We do NOT include Home here. Used in Tile.tsx.
     */
    public getTileData(): Array<ITileRoutingAttributes> {
        return this._getRouteChildren().filter(t => t.isShowing)
    }

}

class RouteParent implements IRouteParent, IRouteParentAttributes, IRouteParentActions {
    public name:        string
    public children:    Array<IRouteAttributes>
    constructor(name:string)
    {
        this.name  = name
        this.children   = []
    }

    public addRoute(routeInfo: IRouteAttributes):void {
        this.children.push(new Route(routeInfo))
    }
}

class Route implements IRouteAttributes
{
    public title:       string
    public isShowing:   boolean
    public imgSrc:      string
    public gifSrc:      string
    public to:          string
    public exact:       boolean
    public Component:   React.FC<{}>
    constructor(routeSettings: IRouteAttributes)
    {
        const { title, isShowing, imgSrc, gifSrc, to, exact, Component } = routeSettings
        this.title      = title
        this.isShowing  = isShowing
        this.imgSrc     = imgSrc
        this.gifSrc     = gifSrc
        this.to         = to
        this.exact      = exact
        this.Component  = Component
    }
}

