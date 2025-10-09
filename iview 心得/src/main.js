import { createApp } from 'vue'

import ViewUIPlus from 'view-ui-plus'
import './assets/styles/view-ui-plus-theme.less'

import App from './App.vue'

const app = createApp(App)

app.use(ViewUIPlus)

app.mount('#app')
