const fs = require('fs')

const present = function(note) {
    let finalNote = JSON.parse(note)
    console.log(finalNote)  
}

module.exports = present

