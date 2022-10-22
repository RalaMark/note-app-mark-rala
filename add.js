const fs = require('fs')

const add = function(note, oldNote) {   
    const finalNote =JSON.parse(oldNote)  
    finalNote.push(note)
    fs.writeFileSync('note.txt', JSON.stringify(finalNote))

}

module.exports = add