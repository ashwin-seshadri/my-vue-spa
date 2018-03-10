import { app, router } from './app.js';

router.onReady(() => {
  app.$mount('#app');
});

