import Vue from "vue";

import VueToastr from "vue-toastr";

Vue.use(VueToastr, {
  defaultTimeout: 5000,
  defaultProgressBar: false,
  defaultProgressBarValue: 0,
  defaultPosition: "toast-top-right",
  defaultCloseOnHover: false,
  defaultClassNames: ["animated", "zoomInUp"]
});
