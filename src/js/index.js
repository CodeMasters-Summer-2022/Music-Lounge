import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"

const notification = Toastify({
  text: "",
  duration: 3000,
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "#00b09b",
  },
  onClick: function () { } // Callback after click
});
notification.options.text = "Add notification text here";
notification.showToast();