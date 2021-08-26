const helpData = {
    0: "8:40 - 10:15",
    1: "10:25 - 12:00",
    2: "12:50 - 14:25",
    3: "14:35 - 16:10",
    4: "16:20 - 17:55",
    5: "18:00 - 19:35",
    6: "19:45 - 21:20"
}

const getTime = index => {
    return helpData[index]
}

const mobileCarouselData = [
    {
        'rus': 'ПН',
        'eng': 'monday'
    },
    {
        'rus': 'ВТ',
        'eng': 'tuesday'
    },
    {
        'rus': 'СР',
        'eng': 'wednesday'
    },
    {
        'rus': 'ЧТ',
        'eng': 'thursday'
    },
    {
        'rus': 'ПТ',
        'eng': 'friday'
    },
    {
        'rus': 'СБ',
        'eng': 'saturday'
    }
]

const desktopCarouselData = [
    {
        'rus': 'Понедельник',
        'eng': 'monday'
    },
    {
        'rus': 'Вторник',
        'eng': 'tuesday'
    },
    {
        'rus': 'Среда',
        'eng': 'wednesday'
    },
    {
        'rus': 'Четверг',
        'eng': 'thursday'
    },
    {
        'rus': 'Пятница',
        'eng': 'friday'
    },
    {
        'rus': 'Суббота',
        'eng': 'saturday'
    },
    {
        'rus': 'Все дни',
        'eng': 'everyone'
    }
]

export {getTime, mobileCarouselData, desktopCarouselData}