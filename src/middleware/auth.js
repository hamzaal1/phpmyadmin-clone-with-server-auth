import { useMySQLConnectionStore } from "../stores/mysqlConnection";

export default async function auth(to, from, next) {
    const mysqlStore = useMySQLConnectionStore();
    const isAuthenticated = await mysqlStore.isConnected;
    if (to.name !== 'home' && !isAuthenticated) {
        next({ name: 'home' });
    }
    else if (to.name == 'home' && isAuthenticated) {
        next({ name: 'databases' });
    }
    else { next() }
}