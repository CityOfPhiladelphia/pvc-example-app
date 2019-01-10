import Vue from 'vue';
import Vuex from 'vuex';
import mergeDeep from './util/merge-deep';
import pvcStore from '../node_modules/@cityofphiladelphia/phila-vue-comps/src/store.js';
// import { pvcStore } from '@cityofphiladelphia/phila-vue-comps';

// when you load vuex from a script tag this seems to happen automatically
Vue.use(Vuex);

function createStore(config) {

  const initialState = {
    candidates: [],
    addressEntered: null,
  };

  const mb = {
    state: initialState,
    mutations: {
      setCandidates(state, payload) {
        state.candidates = payload;
      },
      setAddressEntered(state, payload) {
        state.addressEntered = payload;
      },
    }
  }

  // let mergeStore = mb;
  let mergeStore = mergeDeep(mb, pvcStore);

  // TODO standardize how payloads are passed around/handled
  return new Vuex.Store({
    state: mergeStore.state,
    getters: mergeStore.getters,
    mutations: mergeStore.mutations
  });
}

export default createStore;
