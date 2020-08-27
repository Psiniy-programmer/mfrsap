const changeLangEngToRus = (word) => {
    let str;
    switch (word[0].toLowerCase()) {
        case 'k' : str = 'К'; break;
        case 'l' : str = 'ЛТ'; break;
        case 'a' : str = 'Аспирантура'; break;
        default : break;
    }
    return str;
}

const changeLangRusToEng = (word) => {
    let str;
    switch (word[0].toUpperCase()) {
        case 'К' : str = 'K'; break;
        case 'Л' : str = 'LT'; break;
        case 'А' : str = 'Aspirant'; break;
        default : break;
    }
    return str;
}

const findFacultyName = (word) => {
    let str = '';
    for (let i = 1; i < word.length; i++) str += word[i];
    switch (str.toLowerCase()) {
        case 'k' : str = 'Космический факультет'; break;
        case 'lt' : str = 'Лесной факультет'; break;
        case 'aspirant' : str = 'Аспирантура'; break;
        default : break;
    }
    return str;
}

export {changeLangEngToRus, changeLangRusToEng, findFacultyName}