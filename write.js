const fs = require('fs')
const write = function(data = 'defualt'){
fs.writeFileSync('note.txt', data)
}
module.exports=write