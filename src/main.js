import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/HomeComponent.vue';
import AboutUs from './pages/AboutUsComponent.vue';
import Contacts from './pages/ContactsComponent.vue';
import SignIn from './pages/SignInComponent.vue';
import CreateAccount from './pages/CreateAccountComponent.vue';
import Marketplace from './pages/MarketplaceComponent.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about-us', component: AboutUs },
  { path: '/contacts', component: Contacts },
  { path: '/sign-in', component: SignIn },
  { path: '/create-account', component: CreateAccount },
  { path: '/marketplace', component: Marketplace },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount('#app');
