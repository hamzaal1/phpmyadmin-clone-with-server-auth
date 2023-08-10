import { defineStore } from "pinia";
import axios from "@/utils/axios";
import { useMySQLConnectionStore } from "./mysqlConnection";

const mysqlStore = useMySQLConnectionStore();
const initialState = {
    databases: [

    ]
}

export const useDatabasesStore = defineStore('databases', {
    state: () => {
        return initialState;
    },
    getters: {
        async getDatabasesAsync(state) {
            const res = await axios.post('/databases', {
                ...mysqlStore.mysql,
            });
            await this.saveDatabases(res.data?.databases);
            return this.databases;
        },
        getDatabases(state) {
            return this.databases;
        },
    },
    actions: {
        saveDatabases(databases) {
            this.databases = databases
        },
        async deleteDatabases(name) {
            const res = await axios.post('/databases/delete', {
                host: mysqlStore.mysql.host,
                username: mysqlStore.mysql.username,
                password: mysqlStore.mysql.password,
                name
            });
            console.log(res.data);
        },
        async addDatabase(name) {
            const res = await axios.post('/databases/add', {
                host: mysqlStore.mysql.host,
                username: mysqlStore.mysql.username,
                password: mysqlStore.mysql.password,
                name
            });
            console.log(res.data);
        },
    },

});
