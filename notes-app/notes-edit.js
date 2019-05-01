const noteId=location.hash.substring(1)
let notes = getSavedNotes()
let note=notes.find((note)=>note.id===noteId)

note===undefined?location.assign('/index.html'):note

document.querySelector('#note-title').value=note.title
document.querySelector('#note-body').value = note.body

document.querySelector('#note-title').addEventListener('input',(e)=>{
   note.title= e.target.value
   saveNotes(notes)
})

document.querySelector('#note-body').addEventListener('input', (e) => {
    note.body = e.target.value
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

    }
})

const date1=new Date('october 31 1992')
const date2=new Date('november 20 1955')

const timeStamp1=date1.getTime()
const timeStamp2 = date2.getTime()

if(timeStamp1>timeStamp2){
    console.log(date2.toString())
}else{
    console.log(date1.toString())
}

const myBirthday = moment()
myBirthday.year(1992).month(9).date(31)
console.log(myBirthday.format('MMM D, YYYY'))