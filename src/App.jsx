import React, { useState } from 'react'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList';

const App = () => {
  const [note, setNote] = useState([]);
  const addNote = (item) => {
    setNote(item);
  }

  return (
    <div>
      <NoteForm addNote={addNote} />
      <NoteList content={note} />
    </div>
  )
}

export default App