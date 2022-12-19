import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/PageHeader.vue';
import Footer from './components/PageFooter.vue';

const app = createApp(App);

app.component('app-header', Header);
app.component('app-footer', Footer);

app.mount('#app');
