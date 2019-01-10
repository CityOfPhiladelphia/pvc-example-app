/*
                                                                  .__
_________  __ ____             ____ ___  ________    _____ ______ |  |   ____           _____  ______ ______
\____ \  \/ // ___\   ______ _/ __ \\  \/  /\__  \  /     \\____ \|  | _/ __ \   ______ \__  \ \____ \\____ \
|  |_> >   /\  \___  /_____/ \  ___/ >    <  / __ \|  Y Y  \  |_> >  |_\  ___/  /_____/  / __ \|  |_> >  |_> >
|   __/ \_/  \___  >          \___  >__/\_ \(____  /__|_|  /   __/|____/\___  >         (____  /   __/|   __/
|__|             \/               \/      \/     \/      \/|__|             \/               \/|__|   |__|
*/


import Vue from 'vue';
import axios from 'axios';
import createStore from './store';
import configMixin from './util/config-mixin';
import App from './components/App.vue';
import mergeDeep from './util/merge-deep';
import config from './config.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle } from '@fortawesome/pro-solid-svg-icons/faInfoCircle';
import { faExternalLink } from '@fortawesome/pro-solid-svg-icons/faExternalLink';
library.add(faInfoCircle, faExternalLink);
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const date = new Date();
console.log('date:', date);

import '../node_modules/phila-standards/dist/css/phila-app.min.css';
import './styles.css';

const clientConfig = config;
const baseConfigUrl = config.baseConfig;

function initVue(config) {
  const store = createStore(config);

  // make config accessible from each component via this.$config
  Vue.use(configMixin, config);

  Vue.component('font-awesome-icon', FontAwesomeIcon)
  // mount main vue
  const vm = new Vue({
    el: '#vue-app',
    render: h => h(App),
    store
  });
}

// if there is a base config, get base config
if (baseConfigUrl) {
  axios.get(baseConfigUrl).then(response => {
    const data = response.data;
    const baseConfigFn = eval(data);
    const { gatekeeperKey } = clientConfig;
    const baseConfig = baseConfigFn({ gatekeeperKey });

    // deep merge base config and client config
    const config = mergeDeep(baseConfig, clientConfig);

    initVue(config);
  }).catch(err => {
    console.error('Error loading base config:', err);
  });

} else {
  initVue(clientConfig);
}
