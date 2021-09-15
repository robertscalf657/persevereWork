// import React, { useState, useEffect } from 'react';

// const url = 'http://localhost:5000/entries/comments';
// function CommentsList() {
//     const [loading, setLoading] = useState(true);
//     const [entries, setComments] = useState([]);
//     const fetchComments = async () => {
//         const res = await fetch(url);
//         const newComments = await res.json()
//         setComments(newComments);
//         setLoading(false);
//     };
//     useEffect(() => {
//         fetchComments();
//     }, [])
//     return (
//         <>
//             <p className="comments">{entry.comments}</p>
//         </>
//     );
// }

// export default CommentsList;