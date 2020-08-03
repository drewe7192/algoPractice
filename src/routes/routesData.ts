import linkedListPng from './../assets/LinkedList.png'
import sortingPng from './../assets/sorting.png'
import sortingGif from './../assets/sorting.gif'
import linkedListGif from './../assets/LinkedList.gif'

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
      group: routingGroup.Collection
    },
    {
      isShowing: true,
      imgSrc: sortingPng,
      gifSrc: sortingGif,
      title: 'Merge Sort',
      to: '/MergeSort',
      group: routingGroup.Sorting
    }
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
]