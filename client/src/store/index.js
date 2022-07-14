import { createStore } from 'vuex'

const state = {
  isAuthenticated: false,
  user: {}
}
const mutations = {
  SET_AUTHENTICATED: (state, isAuthenticated) => {
    if (isAuthenticated) state.isAuthenticated = isAuthenticated
    else state.isAuthenticated = false
  },
  SET_USER: (state, user) => {
    if (user) state.user = user
    else state.user = {}
  }
}

const actions = {
  setAuthenticated: ({ commit }, isAuthenticated) => {
    commit('SET_AUTHENTICATED', isAuthenticated)
  },
  setUser: ({ commit }, user) => {
    commit('SET_USER', user)
  }
}

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  user: state => state.user
}

export default createStore({
  state,
  mutations,
  actions,
  getters
})
