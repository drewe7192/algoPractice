import linkedListPng from './../assets/LinkedList.png'
import sortingPng from './../assets/sorting.png'
import sortingGif from './../assets/sorting.gif'
import linkedListGif from './../assets/LinkedList.gif'


// PAGES
import { MergeSortPage } from "./../views/MergeSortPage"
import { SLLPage } from "./../views/SLLPage"
import HomePage from './../views/HomePage'

export enum routingGroup {
  Sorting = 0,
  Collection = 1,
  Other = 2
}

export const RoutesInfo: Array<ITileData<routingGroup>> = [
    {
      isShowing: true,
      imgSrc: linkedListPng,
      gifSrc: linkedListGif,
      title: 'Singly Linked List',
      to: '/SLL',
      group: routingGroup.Collection,
      exact: true,
      Component: MergeSortPage
    },
    {
      isShowing: true,
      imgSrc: sortingPng,
      gifSrc: sortingGif,
      title: 'Merge Sort',
      to: '/MergeSort',
      group: routingGroup.Sorting,
      exact: true,
      Component: SLLPage
    },
]

export const Groupings: Array<IGroupingData<routingGroup>> = [

  {
    group: routingGroup.Collection,
    groupName: 'Sorting'
  }, 
  {
    group: routingGroup.Sorting,
    groupName: 'Collections'
  },
  {
    group: routingGroup.Other,
    groupName: 'Dont display this one'
  }

].filter(g => RoutesInfo.findIndex(r => r.group === g.group) > -1)
