import "./assets/base.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { messages } from './localization'

import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  messages: messages
})

createApp(App)
  .use(PrimeVue, {
      theme: {
          preset: Aura,
          options: {
              prefix: 'p',
              darkModeSelector: 'system',
              cssLayer: false
          }
      }
  })
  .use(store)
  .use(router)
  .use(i18n)
  .mount("#app");
