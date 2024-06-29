"use client"
import { HomeButton, LeftButton, RightButton } from '@/components/buttons/buttons';
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8 } from '@/components/induction/content';
import React, { useState } from 'react';

const page = () => {
    const [index, setIndex] = useState(0)

    
    const maxSlide = 8

    function prevSlide(){
        if(index == 0 ){
            setIndex(maxSlide-1)
        } else {
            setIndex(index-1)
        }
        
    }

    function nextSlide(){
        if (index >= (maxSlide-1)){
            setIndex( index-(maxSlide-1))
        } else {
            setIndex(index+1)
        }
        
    }

    function home(){
        setIndex(0)
    }

    return (
        
            
        <div className=" relative h-screen flex justify-center">





            <Slide isActive ={index===0} >
               <Slide1  next={nextSlide} index={index}  maxIndex={maxSlide} />
            </Slide> 

            <Slide isActive ={index===1}> 
                <Slide2 prev={prevSlide} next={nextSlide} index={index}  maxIndex={maxSlide} home={home} />
            </Slide>

            <Slide isActive ={index===2}>
                <Slide3 prev={prevSlide} next={nextSlide} index={index}  maxIndex={maxSlide} home={home} />
            </Slide>


            <Slide isActive ={index===3}>
                <Slide4 prev={prevSlide} next={nextSlide} index={index}  maxIndex={maxSlide} home={home} />
            </Slide>
            <Slide isActive ={index===4}>
                <Slide5 prev={prevSlide} next={nextSlide} index={index}  maxIndex={maxSlide} home={home} />
            </Slide>


            <Slide isActive ={index===5} >
                <Slide6 prev={prevSlide} next={nextSlide} index={index}  maxIndex={maxSlide} home={home} />
            </Slide>

            <Slide isActive={index===6}>
                <Slide7 prev={prevSlide} next={nextSlide} index={index}  maxIndex={maxSlide} home={home} />
            </Slide>
            <Slide isActive={index===7}>
                <Slide8 prev={prevSlide} next={nextSlide} index={index}  maxIndex={maxSlide} home={home} />
            </Slide>





        <div className='absolute top-0 right-4'>
                <p className='text-6xl font-bold'>{index+1} </p> 
            </div>
            <div className='absolute top-16 right-4'>
                <p className='text-2xl font-bold text-gray-200'>  [{maxSlide}] </p>
            </div>

           <div className='absolute flex bottom-2 left-4 gap-2'>
                
                <HomeButton home={home}/>
               
            </div>
           <div className='absolute flex bottom-2 right-4 gap-2'>
              
                <LeftButton prev={prevSlide} />
                <RightButton next={nextSlide} />
            </div>

        </div>
    );
};

export default page;


function Slide({children, isActive}){ 
    return ( 
        <>
        {isActive &&  children}
        </>
    )}



