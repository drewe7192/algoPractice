import React from "react";
import linkedListPng from './../assets/LinkedList.png'
import sortingPng from './../assets/sorting.png'

import { HomePageTiles, ITileData } from './../routes/HomePageTiles'

export default () => {

  const allTiles: Array<ITileData> = [
    {
      isShowing: true,
      imgSrc: linkedListPng,
      gifSrc: 'linkedListGif',
      title: 'Linked List Tile',
      to: '/SLL'
    },
    {
      isShowing: true,
      imgSrc: sortingPng,
      gifSrc: 'sortingGif',
      title: 'Merge Sort',
      to: '/MergeSort'
    },
]



  return (
    <div className="flex-item description-row fullDim wrapped auto-overflow">
      <HomePageTiles tileData={allTiles}/>
    </div>
  );
};
