import React from 'react';
import { useState } from 'react';
import { nanoid } from "nanoid";
import Search  from './components/Search';
import NotesList from './components/NotesList';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is My first note",
      date: "24/11/2022"
    }

  ]);

  const [searchText, setSearchText] = useState('');

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id : nanoid(),
      text : text,
      date : date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    }

  return (
    <div className='container'>
      <Header />
      <Search handleSearchNote={setSearchText}/>
      <NotesList notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  );
}

export default App;
