import * as types from './mutation-types'

const mutations = {
  [types.SIGN_IN] (state) {
    state.auth = true;
  },
  [types.SIGN_OUT] (state) {
    state.auth = false;
  },
}

export default mutations