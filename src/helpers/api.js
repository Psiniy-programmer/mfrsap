const BASE = 'https://rasp.msfu.ru/';
const API_URL = BASE + 'api/';
const PRINT_URL = BASE + '/print/index.php';

const api = {
    lists: {
        group: API_URL + 'group/list',
        faculty: API_URL +'faculty/list',
        teacher: API_URL + 'teacher/list',
        aud: API_URL + 'aud/list',
        alt: API_URL + 'group/altlist'
    },
    favorites: {
        export: API_URL + 'favorites',
        import: (code = '') => API_URL + `favorites?code=${code}`
    },
    feedback: API_URL + 'feedback',
    announcements: API_URL + 'announcements',
    rasp: (type = '', id = NaN) => API_URL + `${type}?id=${id}`,
    pdf: (type = '', id = NaN) => PRINT_URL + `?${type}=${id}`
};

export default api;
