const routes = {
    home: '/',
    search: '/search',
    list: `/list/:rasp`,
    favorites: '/favorites',
    settings: {
        base: '/settings',
        theme: '/settings/theme',
        feedback: '/settings/feedback',
        developers: '/settings/developers',
        export: '/settings/export',
        manual: '/settings/manual'
    },
};

export default routes;
