import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import Connection from "@/utils/connection.js";

Vue.config.productionTip = false;

/* ========== Bootstrapping App ========== */
import "./bootstrap.js";

/* ========== MIXINS ========== */
import GlobalMixins from "@/mixins/Global";
Vue.mixin(GlobalMixins);

const app = new Vue({
    router,
    store,
    render: h => h(App),
    data: {
        isOnline: window.navigator.onLine
    }
}).$mount("#app");

/* ========== INTERNET CONNECTION STATUS ========== */
window.addEventListener("online", Connection.updateConnectionStatus(app));
window.addEventListener("offline", Connection.updateConnectionStatus(app));
