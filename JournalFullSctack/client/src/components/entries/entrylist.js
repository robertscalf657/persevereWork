import React, { useState, useEffect } from 'react';
import CommentForm from '../comments/commentForm';

// Component to send the entire entries list to the app.

const url = 'http://localhost:5000/entries';
function EntryList() {
    const [loading, setLoading] = useState(true);
    const [entries, setEntries] = useState([]);
    const fetchEntries = async () => {
        const res = await fetch(url);
        const newEntries = await res.json()
        setEntries(newEntries);
        setLoading(false);
    };
    useEffect(() => {
        fetchEntries();
    }, [])
    if (loading) {
        return <section className='section loading'>
            <h1>loading...</h1>
        </section>
    }
    // function to go with the entry delete button
    const deleteEntry = async (entryId) => {
        return await fetch('http://localhost:5000/entries/comments', {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        }).then(() => { fetchEntries() })
    }
    // function to go with the comment delete button
    const deleteComment = async (entryid, comment) => {
        return await fetch(`${url}/entries/comments`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "_id": entryid, "comments": comment })
        }).then(() => { fetchEntries() })
    }
    return (
        <>
            <hr className="line" />
            <div className="entryListCont" id="entryList">
                <u className="underline"><h2 className="header">ENTRIES: </h2></u>
                {entries.map((entry) => (
                    <>
                        {console.log(entry)}
                        <u className="underline"> <p className="header">{entry.title}</p></u>
                        <p className="date">{`${new Date(entry.date)
                            .getMonth() + 1}/${new Date(entry.date)
                                .getDate()}/${new Date(entry.date)
                                    .getFullYear()}`}</p>
                        <p className="content">{entry.content}</p>
                        <button className="entryDeleteBtn" onClick={(e) => {
                            deleteEntry(entry._id)
                        }}>Delete</button>
                        <hr className="smallLine" />
                        <CommentForm id={entry._id} />
                        <ul className="comments">{entry.comments.map((comment) => (
                            <div className="commentsDiv">
                                <li className="commentContainer">{comment}</li>
                                <button className="deleteBtn" onclick={(e) => {
                                    deleteComment(entry._id, comment)
                                }}>Delete</button>
                            </div>
                        ))}</ul>
                    </>
                ))}
            </div>
        </>
    );
}
export default EntryList;