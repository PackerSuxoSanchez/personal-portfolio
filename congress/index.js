import { senators }  from '../data/senators.js'

const senatorDiv = document.querySelector('senators')

function populateSenatorDiv() {
    senators.forEach( senator => {
        let middle_name = senator.middle_name ? ` ${senator.middle_name} ` : ` `

        let senFigure = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')
        
        figImg.src = `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`
        senatorDiv.appendChild(nameParagraph)
        figCaption.textContent = `${senator.first_name}${middle_name}${senator.last_name}`

        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senatorDiv.appendChild(senFigure)
    })
    main.appendChild(senatorDiv)
}

const filterSenators = (prop, value) => {
    return senators.filter(senator => {
        return senator[prop] === value
    })
}

/* console.log(filterSenators('party', 'R'))
console.log(filterSenators('party', 'D'))
console.log(filterSenators('party', 'ID')) */

const senatorNames = senators.map(senator => {
    let middle_name = senator.middle_name ? ` ${senator.middle_name} ` : ` `
    return {
        id: senator.id,
        name: `${senator.first_name}${middle_name}${senator.last_name}`
        imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`
    }
})

//https://www.govtrack.us/static/legislator-photos/300002-100px.jpeg

console.log(senatorNames)

populateSenatorDiv()