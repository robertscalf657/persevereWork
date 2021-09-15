import React, { useState, useEffect, useRef } from 'react';
//  Function to POST comments to the app.
function CommentArea(props) {
  const url = 'http://localhost:5000/entries/comments';
  const addComment = async (comment) => {
    return await fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comment)
    })
  }
  const commentInput = useRef(null)
  const submitComment = (e) => {
    e.preventDefault();
    console.log("submit comment running")
    const comment = {
      id: props.id,
      comment: commentInput.current.value
    }
    addComment(comment).then((res) => { console.log(res) })
  }
  return (
    <form className="commentFormArea" >
      <p className="commentText">Add Comment Here:</p>
      <div className="commentFormContainer">
        <textarea className="commentArea" for="commentInput" id="commentInput" ref={commentInput} placeholder="Add Comment"></textarea>
        <button className="commentSubmitBtn" onClick={(e) => { submitComment(e) }}>Submit</button>
      </div>
    </form>
  )
}
export default CommentArea;