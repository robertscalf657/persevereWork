import EntryList from './components/entries/entrylist';
import React, { useState, useEffect } from 'react';
import EntryForm from './components/entries/entryForm';

// Main component to render the entire app.
function App() {
  return (
    <>
      <EntryForm />
      <EntryList />
    </>
  );
}
export default App;