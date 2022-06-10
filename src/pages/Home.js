import React from 'react';
import {useEffect, useState} from "react";
import {getDocs, collection} from 'firebase/firestore';
import {db} from "../firebaseConfig";

function Home() {
    const [postList, setPostList] = useState([]);
    const postCollection = collection(db, "posts");
    useEffect(() => {
        const getPost = async () => {
            const data = await getDocs(postCollection);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getPost();
    });
    
//display on homepage to audience
  return (
      
    <div className='homePage'> {postList.map((post) => {
        return (
        
        <div className='post'>
            <div className='postHeader'>
                <div className='title'><h3>{post.title}</h3></div>
                
            </div>
            <div className='postContainer'>
                <div className='textareapara'>{post.postText}</div>
            </div>
            
           
           
        </div>

       
        );
    })}
 
    </div>
    
  );
 
};

export default Home;