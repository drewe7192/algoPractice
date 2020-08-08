// Assets
//  LINKED LIST ASSETS
    import linkedListPng  from './../assets/LinkedList.png'
    import linkedListGif  from './../assets/LinkedList.gif'
//  SORTING ASSETS
    import sortingPng     from './../assets/sorting.png'
    import sortingGif     from './../assets/sorting.gif'
// PAGES
    // SORTING PAGES
    import { MergeSortPage } from "./../views/MergeSortPage"
    // LINKED LIST PAGES
    import { SLLPage } from "./../views/SLLPage"

import { RouteManager } from './routes'

// creating the instance...
const RoutingData = RouteManager.getInstance()

// adding the following GROUP
const CollectionsRouteGroup = RoutingData.addRouteGroup("Collections")
// adding the child to the Newly Created GROUP
CollectionsRouteGroup.addRoute({
    isShowing: true, imgSrc: linkedListPng,
    gifSrc: linkedListGif,
    title: 'Singly Linked List',
    to: '/SLL',
    exact: true,
    Component: SLLPage
    }
)

const SortingRouteGroup = RoutingData.addRouteGroup("Sorting")
SortingRouteGroup.addRoute({
    isShowing: true,
    imgSrc: sortingPng,
    gifSrc: sortingGif,
    title: 'Merge Sort',
    to: '/MergeSort',
    exact: true,
    Component: MergeSortPage
})

// testing out the Orphan thing linked this...
// const OrphanExample = _managerInstance.addRouteGroup("Orphan")

// doing this before exporting it...
RoutingData.removeOrphanParents()

export default RoutingData