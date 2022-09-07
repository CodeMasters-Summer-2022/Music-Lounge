import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

// Display success/error notifications
const showNotification = (message, type = "success") => {
  Toastify({
    text: message,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: `${type === "error" ? "crimson" : "#00b09b"}`
    },
    onClick: function () { } // Callback after click
  }).showToast();
}

export { showNotification };