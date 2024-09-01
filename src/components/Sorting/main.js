import React from "react";
import { mergeSort, quickSort, inPlaceQuickSort } from "./sort";

function Sorting() {
  React.useEffect(() => {
    const arr = [4, 1, 7, 9, 32, 5, 12];
    console.log("Input", arr);
    console.log("mergeSort: nlogn, n");
    console.log(mergeSort(arr));
    console.log("quickSort: nlogn, n");
    console.log(quickSort(arr));
    console.log("inPlaceQuickSort: nlogn, logn");
    console.log(inPlaceQuickSort(arr));
  }, []);

  return (
    <div>
      <h2>Sorting</h2>
      <div>(check console)</div>
    </div>
  );
}

export default Sorting;
