const fs = require('fs')
const del = function (id,oldNote) {
    const note = JSON.parse(oldNote)
    const finalNote = note.filter(function(n,i) {
        return n.id!==id    
    } )
fs.writeFileSync('note.txt',JSON.stringify(finalNote))
}

module.exports = del