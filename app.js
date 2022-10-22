const read = require ('./read')
const add = require ('./add')
const del = require('./del')
// const present = require('./present')
const update = require('./update')

const data = process.argv

if  (data[2]==='add' ) {

const note = {
    "id":data[3] ,
    "title" : data [4] ,
    "body" : data [5]
}

const oldNote = read()
add(note, oldNote)

}

if (data [2]==='read') {
console.log(read())

}

if ( data[2]==='delete') {
    id = data[3]
    oldNote = read()
    del(id,oldNote)
    read()
}


if (data[2]== 'update') {
    let note  = {
        id: data[3],
        title: data[4],
        body: data[5]
    }
    const oldNote = read ()
    update (note, oldNote)
    console.log (update)
 }  