function toogleModeOne() {
  document.getElementById('body-id').classList.add('one-column-feed');
  document.getElementById('one-column-feed').classList.remove('d-none');
  document.getElementById('grid-view').classList.add('d-none');
}

function toogleModeTwo() {
  document.getElementById('body-id').classList.remove('one-column-feed');
  document.getElementById('one-column-feed').classList.add('d-none');
  document.getElementById('grid-view').classList.remove('d-none');
}
