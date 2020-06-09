export default function bubbleSort(array) {
  var animations = [];
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      var animation = {};
      animation.comparaison = [j, j + 1];
      if (array[j] < array[j + 1]) {
        //Swap Numbers
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        animation.swap = [j, j + 1];
      }
      animations.push(animation);
    }
  }
  return animations;
}
