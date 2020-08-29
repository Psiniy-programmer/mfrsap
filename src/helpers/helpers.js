const changeLangEngToRus = (word) => {
    let str;
    switch (word[0].toLowerCase()) {
        case 'k' : str = 'К'; break;
        case 'l' : str = 'ЛТ'; break;
        case 'a' : str = 'Аспирантура'; break;
        default : break;
    }
    // Возвращаем цифры в строку
    return word.match(/\d+/g) === null ? str : str + word.match(/\d+/g)[0];
}

const changeLangRusToEng = (word) => {
    let str;
    switch (word[0].toUpperCase()) {
        case 'К' : str = 'K'; break;
        case 'Л' : str = 'LT'; break;
        case 'А' : str = 'Aspirant'; break;
        default : break;
    }
    // Возвращаем цифры в строку
    return word.match(/\d+/g) === null ? str : str + word.match(/\d+/g)[0];
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

const translateFullGroupNameToRus = (word) => {
    let str = '';
    switch (word[0].toUpperCase()) {
        case 'K' :  str += 'К' ; break;
        case 'LT' : str += 'ЛТ' ; break;
        default : break;
    }
    for (let i = 1; i < word.length - 1; i++) str += word[i];
    switch (word[word.length-1].toUpperCase()) {
        case 'B' : return str += 'Б';
        case 'M' :  return str += 'М';
        default : return str += word[word.length-1];
    }
}

const translateFullGroupNameToEng = (word) => {
    let str = '';
    switch (word[0].toUpperCase()) {
        case 'К' :  str += 'K' ; break;
        case 'ЛТ' : str += 'LT' ; break;
        default : break;
    }
    for (let i = 1; i < word.length - 1; i++) str += word[i];
    switch (word[word.length-1].toUpperCase()) {
        case 'Б' : return str += 'B';
        case 'М' :  return str += 'M';
        default : return str;
    }
}

export {changeLangEngToRus, changeLangRusToEng, findFacultyName, translateFullGroupNameToEng, translateFullGroupNameToRus}