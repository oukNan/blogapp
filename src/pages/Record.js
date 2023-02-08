import { uploadBytes, ref, listAll, getDownloadURL } from 'firebase/storage';
import React, { useEffect } from 'react';
import {useState} from "react";
import {storage} from "../firebaseConfig";
import { v4 } from "uuid";





function Record() {
   
const [imageToUpload, setImageToUpload] = useState(null);
const [imageList, setImageList] = useState([]);
const imageListRef = ref(storage, "images/");
const uploadImage = () => {
        if(uploadImage==null) return;

       //else
const imageRef = ref(storage, `images/${imageToUpload.name + v4()}` );
uploadBytes(imageRef,imageToUpload).then(() => {
    alert("success!");
        });
    };
    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                        setImageList((prev) => [...prev, url])
                })
            })
        })
    }, )

return (
    <div className='Record'><p>Picture Gallery</p>
    <input type="file" onChange={(event) => {setImageToUpload(event.target.files[0])}}/>
        <button onClick={uploadImage}>Upload</button>
        { imageList.map((url) => {
            return <img src={imageList}/>
        })};
    </div>

);

}

export default Record;