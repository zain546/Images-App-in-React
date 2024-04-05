"use client"
import axios from "axios";
import Image from "next/image"; 
import React, { useEffect, useState } from 'react'
export default function Home() {
  const [hidden, setHidden] = useState(false);

  const handleHide = () => {
    setHidden(true);
  };  
  
  const [Images, setImages] = useState([])
  // useEffect(() => {
  //   getImages();
 
  // }, []) 
  
  const getImages = async()=>{
   
   try{
     const response = await axios.get("https://picsum.photos/v2/list");
     const data = response.data;
     setImages(data)
     console.log(Images)
     handleHide();
  }catch(error){
    console.error("Error in fetching photos")
  }

  }
 
  return (
   
  <>
  <div className="w-[200px] h-[400px] bg-[#eb26fde3] rounded-full absolute z-[-1] top-[10%] left-[1%] blur-[140px]"></div>
  <div className="w-[500px] h-[500px] bg-cyan-300 rounded-full absolute z-[-1] right-[30%] bottom-[3%] blur-[120px]"></div>
  <div className="w-[400px] h-[300px] bg-blue-300 rounded-full absolute z-[-1] top-[5%] right-[3%] blur-[100px]"></div>
  <div className="flex justify-center"> {!hidden && <button onClick={getImages} className="bg-white/20 shadow-lg focus:scale-[0.99] transition duration-500  w-52 m-10 rounded-sm text-black font-bold text-lg px-4 py-3 z-[5]">Get Images</button>}</div>
 
  <div className="images flex flex-wrap justify-center ">
    {Images.map((img)=>{
        return <img className="md:w-[45%] h-[40%] mt-5 px-5 pt-5 w-full inline-block"  src={img.download_url} alt="" />
        
    })}
  </div>
  
  </>
  )
}
