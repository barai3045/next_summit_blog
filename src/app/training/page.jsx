import Link from 'next/link';
import React from 'react';

async function getData(){
    let data = (await(await fetch(`${process.env.HOST}/title`, { cache: 'no-store' })).json())
    return data;
}


const page = async() => {

    

    const data = await getData();
     
    return (
        
        <div className='flex justify-center p-2 gap-3'>
            {data.map((item, i)=>{
                var tags = item.tags
                const myArray = tags.split(",");
                
                return (
                    <Link  className='w-1/4'  href={`/training/${item['id']}`}>
                    <div 
                    className='border-l-2 border-blue-700 bg-gray-100 rounded-md w-full px-5 py-2'
                    key={i}>
                        <p className=' font-semibold'>{item.title}</p>
                        <p>{item.short_des}</p>
                       <div className='flex gap-2'>
                       { myArray.map((tag, i)=>{
                            return (
                                <div className="" key={i}> {tag} </div>)
                       })
                       }
                        </div>
                        
                    </div>

                    </Link>
                )
                

                

            })}
            
        </div>

       
    );
};

export default page;


