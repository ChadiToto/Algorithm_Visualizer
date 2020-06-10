export default function insertionSort(array) {
  let animations = [];
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let key_index = i;
    let j = i - 1;
    while (j >= 0 && array[j] < key) {
      let animation = {};
      animation.comparaison = [j, key_index];
      animation.swap = [j, key_index];
      [array[j], array[key_index]] = [array[key_index], array[j]];
      key_index = j;
      key = array[key_index];
      j--;
      animations.push(animation);
    }
  }
  return animations;
}
