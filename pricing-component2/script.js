
const toggleContEl = document.getElementById('toggleContainer')
const ballEl = document.getElementById('ball')
const priceBoxBEl = document.getElementById('priceBoxBasic')
const priceBoxPEl = document.getElementById('priceBoxProfessional')
const priceBoxMEl = document.getElementById('priceBoxMaster')
const priceAnnuallyBEl = document.getElementById('annuallyB')
const priceMonthlyBEl = document.getElementById('monthlyB')
const priceAnnuallyPEl = document.getElementById('annuallyP')
const priceMonthlyPEl = document.getElementById('monthlyP')
const priceAnnuallyMEl = document.getElementById('annuallyM')
const priceMonthlyMEl = document.getElementById('monthlyM')

toggleHandler = e => {
    // if(ballEl.classList.contains('annually'))   {
    //     ballEl.classList.remove('annually')
    // }
    // else    {
    //     ballEl.classList.add('annually')
    // }
    ballEl.classList.toggle('annually')
    priceAnnuallyBEl.classList.toggle('hide')
    priceMonthlyBEl.classList.toggle('hide')
    priceAnnuallyPEl.classList.toggle('hide')
    priceMonthlyPEl.classList.toggle('hide')
    priceAnnuallyMEl.classList.toggle('hide')
    priceMonthlyMEl.classList.toggle('hide')
}

hoverBasicHandler = e => {
    if(e.target.closest('#priceBoxBasic') != null)   {
        priceBoxBEl.classList.add('inFocus')
        priceBoxPEl.classList.remove('inFocus')
        priceBoxMEl.classList.remove('inFocus')
    }
}
hoverProfessionalHandler = e => {
    if(e.target.closest('#priceBoxProfessional') != null)   {
        priceBoxPEl.classList.add('inFocus')
        priceBoxBEl.classList.remove('inFocus')
        priceBoxMEl.classList.remove('inFocus')
    }
}
hoverMasterHandler = e => {
    if(e.target.closest('#priceBoxMaster') != null)   {
        priceBoxMEl.classList.add('inFocus')
        priceBoxBEl.classList.remove('inFocus')
        priceBoxPEl.classList.remove('inFocus')
    }
    
}

initEventListeners = () => {
    toggleContEl.addEventListener('click', e => toggleHandler(e))
    priceBoxBEl.addEventListener('mouseover', e => hoverBasicHandler(e))
    priceBoxPEl.addEventListener('mouseover', e => hoverProfessionalHandler(e))
    priceBoxMEl.addEventListener('mouseover', e => hoverMasterHandler(e))
}

init = () => {
    initEventListeners()
}
init()