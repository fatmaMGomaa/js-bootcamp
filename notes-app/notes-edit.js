const noteId=location.hash.substring(1)
let notes = getSavedNotes()
let note=notes.find((note)=>note.id===noteId)

note===undefined?location.assign('/index.html'):note

document.querySelector('#note-title').value=note.title
document.querySelector('#note-body').value = note.body
document.querySelector('#last-editing').textContent = `last edited ${moment(note.updatedDate).fromNow()}`

document.querySelector('#note-title').addEventListener('input',(e)=>{
   note.title= e.target.value
   note.updatedDate = moment().valueOf()
    document.querySelector('#last-editing').textContent = `last edited ${moment(note.updatedDate).fromNow()}`
   saveNotes(notes)
})

document.querySelector('#note-body').addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedDate=moment().valueOf()
    document.querySelector('#last-editing').textContent = `last edited ${moment(note.updatedDate).fromNow()}`
    saveNotes(notes)
})

document.querySelector('#remove-note').addEventListener('click', (e) => {
    removeNote(noteId)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage',(e)=>{
    if(e.key==='notes'){
        notes=JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId)

        note === undefined ? location.assign('/index.html') : note

        document.querySelector('#note-title').value = note.title
        document.querySelector('#note-body').value = note.body
        document.querySelector('#last-editing').textContent = `last edited ${moment(note.updatedDate).fromNow()}`
    }
})
