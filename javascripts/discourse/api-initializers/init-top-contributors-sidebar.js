import {
  apiInitializer
} from "discourse/lib/api";

export default apiInitializer("0.8", (api) => {
  api.onPageChange(() => {
    console.log("api initalizer loaded");
    const additionalCloseBtn = document.querySelector(".close-composer-btn");
    const closeBtn = document.querySelector("#reply-control").querySelector(".close-composer-btn");
    if (closeBtn && additionalCloseBtn) {
      console.log("checking if the event listenr is mounted");
      additionalCloseBtn.addEventListener('click', () => {
        closeBtn.click();
      })
    }
  });
})