function showDialog() {
    let noteEditorDOM = document.getElementById('note-editor');
    noteEditorDOM.value = '';
    noteEditorDOM.classList.remove('invalid');
    let saveButtonDOM = document.getElementById('saveButton');
    saveButtonDOM.disabled = true;
    let dialogBoxDOM = document.getElementById('dialogBox');
    dialogBoxDOM.classList.remove('hide');
}

function hideDialog() {
    let dialogBoxDOM = document.getElementById('dialogBox');
    dialogBoxDOM.classList.add('hide');
}

function saveNote() {
    let noteEditorDOM = document.getElementById('note-editor');
    let noteValue = noteEditorDOM.value;
    saveNoteLocalStorage(noteValue);
    // saveNoteToDB(noteValue);
    refreshNoteList();
    hideDialog();
}

function onEditorChange() {
    let noteEditorDOM = document.getElementById('note-editor');
    let noteValue = noteEditorDOM.value;
    let saveButtonDOM = document.getElementById('saveButton');
    if (noteValue) {
        saveButtonDOM.disabled = false;
    } else {
        saveButtonDOM.disabled = true;
    }
}

function isValid() {
    const noteEditorDOM = document.getElementById('note-editor');
    const noteValue = noteEditorDOM.value;
    noteEditorDOM.placeholder = 'Type your note here...';
    if (noteValue) {
        noteEditorDOM.classList.remove('invalid');
    } else {
        noteEditorDOM.classList.add('invalid');
    }
}

function removePlaceholder() {
    const noteEditorDOM = document.getElementById('note-editor');
    noteEditorDOM.placeholder = '';
}

function saveNoteLocalStorage(noteValue) {
    let notes = getNotesLocalStorage();
    notes.push(noteValue);
    notesString = JSON.stringify(notes);
    localStorage.setItem('note', notesString);
}

function getNotesLocalStorage() {
    const notesString = localStorage.getItem('note');
    let notes;
    if (!notesString) {
        notes = [];
    } else {
        notes = JSON.parse(notesString);
    }
    return notes;
}

function refreshNoteList() {
    const notes = getNotesLocalStorage();
    const noteListDOM = document.body.children[2];
    noteListDOM.innerHTML = '';
    notes.forEach(note => {
        addNoteToNoteList(note);
    });
}

function addNoteToNoteList(noteValue) {
    // Creating the div element - <div></div>
    const noteDOM = document.createElement('div');
    // Adding class to the div element - <div class="note"></div>
    noteDOM.classList.add('note');
    // Adding the content in the innerHTML of the div element - <div class="note">Test Note 1</div>
    noteDOM.innerHTML = noteValue;

    // Referencing the noteList element - in line 24
    // <div class="note-list">
    // </div>
    const noteListDOM = document.body.children[2];
    // Appending a child
    // <div class="note-list">
    //      <div class="note">Test Note 1</div>
    //      <div class="note">Test Note 2</div>
    // </div>
    noteListDOM.appendChild(noteDOM);
}

refreshNoteList();