import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import 'lib-flexible/flexible'
import { Button, Form, Field, CellGroup, PullRefresh, Toast } from 'vant';

import 'vant/lib/index.css'; // 全局引入样式

const app = createApp(App) // 创建实例

app.use(Button) // 注册组件
app.use(Form) // 注册组件
app.use(Field) // 注册组件
app.use(CellGroup) // 注册组件
app.use(PullRefresh) // 注册组件

app.use(Toast) // 注册组件

app.use(router)

app.mount('#app')
