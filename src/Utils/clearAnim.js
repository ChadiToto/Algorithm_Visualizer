export default function clearAnimations() {
  for (var i = 1; i < 1000; i++) {
    window.clearTimeout(i);
  }
}
