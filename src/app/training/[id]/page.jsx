
import React from 'react';


import Topic from '@/components/training/Topic';

async function getData(id){
    let data = (await(await fetch(`${process.env.HOST}/title/${id}`, { cache: 'no-store' })).json())
    return data;
}



const page = async ({params}) => {
   
        
    

    let id  = parseInt(params.id)
    const data = await getData(id)

    return (
        <div className='grid grid-cols-1 '>
            <div className='bg-slate-200 w-full p-2 border border-slate-600'>
                <Title title ={data.title}/>
            </div>

            <div className='grid grid-cols-6'>
                <Topic topics={data.topics}/>
                
            </div>
        </div>
    );
};

export default page;





export const Title =({title}) => {
    return (
        <div>{title}</div>
    )
}


