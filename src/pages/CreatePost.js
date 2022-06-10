import React from 'react';
import {useState, useEffect } from "react";
import {addDoc, collection} from 'firebase/firestore';
import {db, auth} from "../firebaseConfig";
import { useNavigate} from "react-router-dom";


function CreatePost({isAuth}) {
const [title, setTitle] = useState ("");
const [postText, setPostText] = useState ("");
//when clicked, this will submit to Firestore db
const postCollection = collection(db, "posts");
let navigate = useNavigate();

const createPost = async () => {
    await addDoc(postCollection, {
        title, 
        postText, 
        author: {name: auth.currentUser.displayName, id: auth.currentUser.uid }, 
        
    });
    navigate("/");
};
//if not isAuth...
useEffect (() => {
    if (!isAuth) {
        navigate("/Login");
    }
},)

  return (
    <div className='createPostPage'>
        <div className='postContainer'>
            <h2>Create Post</h2>
            <div className='inputTitle'>
                <label>Title:</label>
                <input placeholder='Title:' onChange={(event) => {setTitle(event.target.value);
                }}/>
            </div>

            <div className='inputText'>
                <label>Post:</label>
                <textarea placeholder='Post...' onChange={(event) => {setPostText(event.target.value);
                }}></textarea>
            </div>
            <button onClick={createPost}>Submit</button>
        </div>
    </div>
  );
}

export default CreatePost;