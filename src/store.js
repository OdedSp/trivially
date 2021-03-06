import Vuex from 'vuex'
import userModule from './modules/user.module'
import triviaModule from './modules/trivia.module'

const store = new Vuex.Store({
    state: {
        socketConnected: false,
        userCount: null
    },
    mutations: {
        SOCKET_CONNECT(state, socket) {
            state.socketConnected = true
        },
        SOCKET_DISCONNECT(state, socket) {
            state.socketConnected = false
        },
        SOCKET_CONNECTEDCOUNT(state, count) {
            state.userCount = count
        }
    },
    modules: {
        userModule,
        triviaModule,
    },
    strict: true
})

export default store