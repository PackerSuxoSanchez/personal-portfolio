import { senators }  from '../data/senators'

const senatorDiv = document.createElement('div')
const main = document.querySelector('main')

function populateSenatorDiv(senators) {
    senators.forEach( senator => {
        console.log(`${senator.first_name} ${senator.last_name}`)
    })
}

populateSenatorDiv()