# Proxy

> http://localhost:3000 --> http://101.200.207.137:8000/get-flow-by-id/?flow_id=4

```js
// vite.config.js
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://101.200.207.137:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }

  },
})

// utils - index.js
  async requestData (url, params) {
    let res = await axios.get(url, params)
    return res
  }

// main.vue
const requestTimeData = (interval) => {
  let params = {
    'bus_timestamp': 1644659758
  }
  let res = await utils.requestData('/api/get-flow-by-ts/', params)
  console.log(res)
}
```