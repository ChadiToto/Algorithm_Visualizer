export default function clearAnimations() {
  var highestTimeoutId = setTimeout(1000, "");
  for (var i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }
}
