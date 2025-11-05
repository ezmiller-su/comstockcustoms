var datamap = new Map([
  [document.getElementById("shirtBtn"), document.getElementById("shirtModal")],
  [document.getElementById("hatBtn"), document.getElementById("hatModal")]
]);

datamap.forEach((value, key) => {
  doModal(key, value);
});

function doModal(anchor, popupbox) {

  // Get the <span> element that closes the modal
  var span = popupbox.getElementsByClassName("close")[0];

  anchor.addEventListener("click", function (event) {
      popupbox.style.display = "block";
  });

  span.addEventListener("click", function (event) {
      popupbox.style.display = "none";
  });

  window.addEventListener("click", function (event) {
      if (event.target == popupbox) {
          popupbox.style.display = "none";
      }
  });
}