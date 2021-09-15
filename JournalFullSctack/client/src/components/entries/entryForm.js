import React, { useState, useEffect, useRef } from 'react';
import Home from '../home';
// Function to POST an entry to the db.
function EntryForm() {
    const url = 'http://localhost:5000/entries';
    //API call to server
    const addEntry = async (entry) => {
        return await fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(entry)
        })
    }
    const titleInput = useRef(null)
    const contentInput = useRef(null)
    //function to submit entry
    const submitEntry = (e) => {
        //prevent form from automatically being submitted
        e.preventDefault();
        console.log("submit entry running")
        const entry = {
            title: titleInput.current.value,
            content: contentInput.current.value
        }
        //call addEntry function and pass in the new entry 
        addEntry(entry).then((res) => { console.log(res) })
    }
    return (
        <>
            <div class="navBar">
                <a href="#Home">Home</a>
                <a href="#entryList">Entry List</a>
                <a href="#entryInput">Add Entry</a>
            </div>
            <Home id="Home"/>
            <form className="entryFormArea" id="entryInput">
                <p className="formText">Add Entry Here:</p>
                <div className="entryContainer">
                    <input type="text" className="titleInput" for="titleInput" id="titleInput" ref={titleInput} placeholder="Title"></input>
                    <textarea className="entryArea" for="contentInput" id="contentInput" ref={contentInput} placeholder="Entry"></textarea>
                    <button className="submitBtn" onClick={(e) => { submitEntry(e) }}>Submit</button>

                </div>
            </form>
        </>
    )
}
export default EntryForm;
