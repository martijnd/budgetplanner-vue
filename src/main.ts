import Vue from 'vue';
import App from './App.vue';
import Navbar from './components/Navbar.vue';
import router from './router';
import './registerServiceWorker';
import 'vue-material/dist/theme/default.css';

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
