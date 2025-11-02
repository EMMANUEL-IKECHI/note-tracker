import React from 'react'

const NoteForm = () => {
  return (
    <div className='px-10'>
        <h1 className=''>Note Tracker</h1>
        <div>
            <input type="text" name="note-input" id="note-input" />
        </div>
    </div>
  )
}

export default NoteForm