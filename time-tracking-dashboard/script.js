const dailyData = {
    'work': {
        'curr': 5,
        'last': 7
    },
    'play': {
        'curr': 1,
        'last': 2
    },
    'study': {
        'curr': 0,
        'last': 1
    },
    'exercise': {
        'curr': 1,
        'last': 1
    },
    'social': {
        'curr': 1,
        'last': 3
    },
    'self-care': {
        'curr': 0,
        'last': 1
    }
}

const weeklyData = {
    'work': {
        'curr': 32,
        'last': 36
    },
    'play': {
        'curr': 10,
        'last': 8
    },
    'study': {
        'curr': 4,
        'last': 7
    },
    'exercise': {
        'curr': 4,
        'last': 5
    },
    'social': {
        'curr': 5,
        'last': 10
    },
    'self-care': {
        'curr': 2,
        'last': 2
    }
}

const monthlyData = {
    'work': {
        'curr': 103,
        'last': 128
    },
    'play': {
        'curr': 23,
        'last': 29
    },
    'study': {
        'curr': 13,
        'last': 19
    },
    'exercise': {
        'curr': 11,
        'last': 18
    },
    'social': {
        'curr': 21,
        'last': 23
    },
    'self-care': {
        'curr': 7,
        'last': 11
    }
}

const dailyEl = document.getElementById('daily')
const weeklyEl = document.getElementById('weekly')
const monthlyEl = document.getElementById('monthly')
const periodEl = document.getElementsByClassName("period")
const workHrsEl = document.getElementsByClassName("workTally")
const playHrsEl = document.getElementsByClassName("playTally")
const studyHrsEl = document.getElementsByClassName("studyTally")
const exerciseHrsEl = document.getElementsByClassName("exerciseTally")
const socialHrsEl = document.getElementsByClassName("socialTally")
const selfCareHrsEl = document.getElementsByClassName("selfCareTally")

const setDaily = () => {
    //console.log(e.target)
    for (let index = 0; index < 6; index++) {
        const element = periodEl[index];
        element.textContent = "Day" 
    }
    console.log(workHrsEl)
    workHrsEl[0].textContent = dailyData['work']['curr']
    workHrsEl[1].textContent = dailyData['work']['last']
    playHrsEl[0].textContent = dailyData['play']['curr']
    playHrsEl[1].textContent = dailyData['play']['last']
    studyHrsEl[0].textContent = dailyData['study']['curr']
    studyHrsEl[1].textContent = dailyData['study']['last']
    exerciseHrsEl[0].textContent = dailyData['exercise']['curr']
    exerciseHrsEl[1].textContent = dailyData['exercise']['last']
    socialHrsEl[0].textContent = dailyData['social']['curr']
    socialHrsEl[1].textContent = dailyData['social']['last']
    selfCareHrsEl[0].textContent = dailyData['self-care']['curr']
    selfCareHrsEl[1].textContent = dailyData['self-care']['last']
}

const setWeekly = () => {
    //console.log(e.target)
    for (let index = 0; index < 6; index++) {
        const element = periodEl[index];
        element.textContent = "Week" 
    }
    console.log(workHrsEl)
    workHrsEl[0].textContent = weeklyData['work']['curr']
    workHrsEl[1].textContent = weeklyData['work']['last']
    playHrsEl[0].textContent = weeklyData['play']['curr']
    playHrsEl[1].textContent = weeklyData['play']['last']
    studyHrsEl[0].textContent = weeklyData['study']['curr']
    studyHrsEl[1].textContent = weeklyData['study']['last']
    exerciseHrsEl[0].textContent = weeklyData['exercise']['curr']
    exerciseHrsEl[1].textContent = weeklyData['exercise']['last']
    socialHrsEl[0].textContent = weeklyData['social']['curr']
    socialHrsEl[1].textContent = weeklyData['social']['last']
    selfCareHrsEl[0].textContent = weeklyData['self-care']['curr']
    selfCareHrsEl[1].textContent = weeklyData['self-care']['last']
}

const setMonthly = () => {
    //console.log(e.target)
    for (let index = 0; index < 6; index++) {
        const element = periodEl[index];
        element.textContent = "Month" 
    }
    console.log(workHrsEl)
    workHrsEl[0].textContent = monthlyData['work']['curr']
    workHrsEl[1].textContent = monthlyData['work']['last']
    playHrsEl[0].textContent = monthlyData['play']['curr']
    playHrsEl[1].textContent = monthlyData['play']['last']
    studyHrsEl[0].textContent = monthlyData['study']['curr']
    studyHrsEl[1].textContent = monthlyData['study']['last']
    exerciseHrsEl[0].textContent = monthlyData['exercise']['curr']
    exerciseHrsEl[1].textContent = monthlyData['exercise']['last']
    socialHrsEl[0].textContent = monthlyData['social']['curr']
    socialHrsEl[1].textContent = monthlyData['social']['last']
    selfCareHrsEl[0].textContent = monthlyData['self-care']['curr']
    selfCareHrsEl[1].textContent = monthlyData['self-care']['last']
}

const initListeners = () => {
    dailyEl.addEventListener("click", e => setDaily())
    weeklyEl.addEventListener("click", e => setWeekly())
    monthlyEl.addEventListener("click", e => setMonthly())
}

const init = () => {
    setWeekly()
    initListeners()
    console.log(dailyEl)
}

init()