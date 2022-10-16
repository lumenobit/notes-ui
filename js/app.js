function showDialog() {
    let noteEditorDOM = document.getElementById('note-editor');
    noteEditorDOM.value = '';
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
    addNoteToNoteList(noteValue);
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

function addNoteToNoteList(noteValue) {
    // Creating the div element - <div></div>
    let noteDOM = document.createElement('div');
    // Adding class to the div element - <div class="note"></div>
    noteDOM.classList.add('note');
    // Adding the content in the innerHTML of the div element - <div class="note">Test Note 1</div>
    noteDOM.innerHTML = noteValue;

    // Referencing the noteList element - in line 24
    // <div class="note-list">
    // </div>
    let noteListDOM = document.body.children[2];
    // Appending a child
    // <div class="note-list">
    //      <div class="note">Test Note 1</div>
    //      <div class="note">Test Note 2</div>
    // </div>
    noteListDOM.appendChild(noteDOM);
}