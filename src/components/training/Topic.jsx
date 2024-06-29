
"use client"
import React, { useState } from 'react';
import parse from 'html-react-parser'

const Topic = ({topics}) => {

    const [index, setIndex] = useState(0)
    
    function setSlide(id){
        setIndex(id)
    }

    return (
        <>
            <div className=''>
                    <div className='px-2 py-1 min-h-20  bg-blue-300 text-white font-semibold text-4xl'>

                    </div>
                        {topics.map((item, i)=>{
                        return(
                            <div key={i} onClick={()=>setSlide(item.id-1)} className='border border-spacing-1 rounded-md px-2 py-1 hover:bg-slate-400 hover:text-white'>
                            {item.topic}
                            </div>
                        )
                    })}

            </div>
            <div className='col-span-5'>
            {topics.map((item, i)=>{
                return(
                    <Page  key={i} isActive={index===i}>
                        <div onClick={()=>setSlide(item.id-1)} className='px-2 py-1 min-h-20  bg-blue-300 text-white font-semibold text-4xl'>
                        {item.topic}
                        </div>
                        <div className='flex justify-start '>
                        <div className='flex flex-col text-2xl gap-4 p-4 w-5/6' >
                            {parse(item.description)}
                        </div>

                        </div>
                    </Page>
                    
                    
                )
                })}
            </div>
        </>
    );
};

export default Topic;






function Page({children, isActive}){ 
    return ( 
        <>
        {isActive &&  children}
        </>
    )}
