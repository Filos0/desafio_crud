<template>
    <el-form inline :model="user" class="demo-form-inline">
        <el-form-item label="Nombre">
            <el-input v-model="user.nombre" placeholder="Nombre"></el-input>
        </el-form-item>
        <el-form-item label="Correo">
            <el-input v-model="user.correo" placeholder="Correo"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button
                type="primary"
                v-if="edit"
                :loading="loading"
                @click="editUser"
            >
                Editar
            </el-button>
            <el-button type="danger" v-else :loading="loading" @click="addUser">
                Agregar
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
//import Firebase from "firebase";
import {mapState} from 'vuex';
import axios from 'axios';
export default {
    data() {
        return {
            loading: false,
        };
    },
    methods: {
        addUser() {
            let user = {
                nombre: this.user.nombre,
                correo: this.user.correo,
            };
            this.loading = true;
            axios
                .post(
                    'https://us-central1-crud-desafio-fad97.cloudfunctions.net/test/user',
                    user
                )
                .then((accept) => {
                    console.log(accept);
                    this.loading = false;
                    this.$store.dispatch('getUsers');
                });
        },
        editUser() {
            let user = {
                nombre: this.user.nombre,
                correo: this.user.correo,
            };
            this.loading = true;
            axios
                .put(
                    `https://us-central1-crud-desafio-fad97.cloudfunctions.net/test/user/${this.user.id}`,
                    user
                )
                .then((accept) => {
                    console.log(accept);
                    this.loading = false;
                    this.$store.dispatch('getUsers');
                });
        },
    },
    computed: {
        ...mapState(['user', 'edit']),
    },
};
</script>
