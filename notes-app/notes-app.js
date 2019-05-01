let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    notes.push({
        id:id ,
        title: '',
        body: '',
        createdDate: moment().valueOf(),
        updatedDate: moment().valueOf()
    })
    saveNotes(notes)
    renderNotes(notes, filters)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    filters.sortBy=e.target.value
    renderNotes(notes,filters)
})

window.addEventListener('storage',(e)=>{
    if(e.key==='notes'){ //checking the right key from ls
        notes=JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})