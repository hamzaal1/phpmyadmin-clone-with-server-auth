import { defineStore } from "pinia";

const initialState = {
    mysql: {
        host: "",
        username: "",
        password: "",
    }
}

export const useMySQLConnectionStore = defineStore('MySQL', {
    state: () => {
        return initialState;
    },
    getters: {
        getConnection(state) {
            return state.mysql;
        },
        isConnected(state) {
            const mysqlInfo = this.getConnection;
            return mysqlInfo.host !== "" && mysqlInfo.username !== "";
        },
    },
    actions: {
        saveConnection({ host, username, password }) {
            this.mysql = {  // Use this.state to access the state object
                host,
                username,
                password,
            }
        },
    },

});
