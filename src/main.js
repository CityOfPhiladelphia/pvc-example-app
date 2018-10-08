import Vue from 'vue';
import axios from 'axios';
import createStore from './store';
import configMixin from './util/config-mixin';
import App from './components/App.vue';
import mergeDeep from './util/merge-deep';
import config from './config.js'

console.log('imported config:', config);

import philaVueDatafetch from '@cityofphiladelphia/phila-vue-datafetch';
console.log('in main, philaVueDatafetch:', philaVueDatafetch);
import philaVueMapping from '@cityofphiladelphia/phila-vue-mapping';
console.log('in main, philaVueMapping:', philaVueMapping);
import philaVueComps from '@cityofphiladelphia/phila-vue-comps';
console.log('in main, philaVueComps:', philaVueComps);
// const controllerMixin = philaVueDatafetch.controllerMixin;

const clientConfig = config;

// function init(clientConfig) {
const baseConfigUrl = config.baseConfig;
// get base config
axios.get(baseConfigUrl).then(response => {
  // console.log('in axios, clientConfig:', clientConfig);
  const data = response.data;
  const baseConfigFn = eval(data);
  const { gatekeeperKey } = clientConfig;
  const baseConfig = baseConfigFn({ gatekeeperKey });

  // deep merge base config and client config
  const config = mergeDeep(baseConfig, clientConfig);
  const store = createStore(config);

  // mix in controller
  // Vue.use(controllerMixin, { config, store });

  // mount main vue
  const vm = new Vue({
    el: '#vue-app',
    render: h => h(App),
    store
  });

}).catch(err => {
  console.error('Error loading base config:', err);
});

// }
//
// init(config);
