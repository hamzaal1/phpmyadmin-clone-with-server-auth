export default async function auth(to, from, next) {
    const isAuthenticated = false;
    if (to.name !== 'home' && !isAuthenticated) {
        next({ name: 'home' });
    }
    else { next() }
}