import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/es';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            nombre: '',
            correo: '',
            id: '',
        },
        edit: false,
        users: [],
        loading: false,
    },
    mutations: {
        getUsers(state, users) {
            state.users = users;
            state.loading = false;
        },
        loadingTable(state) {
            state.loading = true;
        },
    },
    actions: {
        getUsers(context) {
            context.commit('loadingTable');
            axios
                .get(
                    'https://us-central1-crud-desafio-fad97.cloudfunctions.net/test/users'
                )
                .then((accept) => {
                    let data = accept.data;
                    context.commit('getUsers', data);
                });
        },
    },
    modules: {},
});
Vue.use(Element, {
    locale,
});
