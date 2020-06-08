export default function selectionSort(array) {
  const length = array.length;
  var animations = [];
  for (let i = 0; i < length; i++) {
    let animation = {};
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] > array[min]) {
        min = j;
      }
    }
    animation.comparaison = [min, i];
    animation.swap = [min, i];
    array[i] = array[min];
    array[min] = temp;
    animations.push(animation);
  }
  return animations;
}
