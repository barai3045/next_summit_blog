import React from 'react';
import { HomeButton, LeftButton, RightButton } from '../buttons/buttons';


export const Slide1 = ({next, index, maxIndex}) => {
    return (
        <>
        
          
            <div className='grid grid-cols-2 divide-x gap-1 h-full'>
                <div className='grid  justify-end content-center pe-10'>
                    <div className='text-5xl font-semibold'>
                        Madhabdi Power Plant <br/> Summit Power Limited
                    </div>
                </div>
            <div className='grid justify-start content-center '>
            <div className='text-4xl font-semibold ps-10'>
                Induction Training on <br/> Environment, Health & Safety <br/>
                For Visitors
            </div>
            </div>
            </div>
            

            
        </>
    );
};


export const Slide2 =({prev, next, home, index, maxIndex}) => {
    return (
        
        
            <div className="w-2/3">
            <p className='text-4xl font-semibold py-6'>Obligation</p>
            
            <ul className="list-disc text-3xl">
            <li className='bg-gray-100 rounded p-3 mb-2'>At the time of visit the visitors need to comply with the plant  EHS guidelines </li>
            <li className='bg-gray-100 rounded p-3 mb-2'>A visitor will be allowed to visit the operational areas only after getting prior approval from the authority</li>
            <li className='bg-gray-100 rounded p-3 mb-2'>Visitor must be accompanied by an ASPP employee throughout the visit</li>
            <li className='bg-gray-100 rounded p-3 mb-2'>Considering the safety and security issue, the plant management reserve the right to refuse or restrict the movement of any visitor inside the plant operational area</li>
           </ul>
           </div>


          
              
        
    )
}
export const Slide3 =({prev, next, home, index, maxIndex}) => {
    return (
        
        
            <div className="w-2/3">
            <p className='text-4xl font-semibold py-6'>Plant Hazards & places</p>
            
            <table className='text-2xl table-auto w-full'>
                 <thead>
                    <tr>
                    <th className="border border-slate-300 p-2">Hazards</th>
                    <th className="border border-slate-300 p-2">Places</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td className='border border-slate-300 p-2'> High Voltage	 </td>
                    <td className='border border-slate-300 p-2'>Engine Hall, MV Room, LV Switchgear, HV Switchyard</td>
                </tr>
                <tr>
                    <td className='border border-slate-300 p-2'>High noise</td>
                    <td className='border border-slate-300 p-2'>Engine Hall</td>
                </tr>
                <tr>
                    <td className='border border-slate-300 p-2'>Fire </td>
                    <td className='border border-slate-300 p-2'>Engine Hall, MV Room, LV Switchgear, HV Switchyard</td>
                </tr>
                <tr>
                    <td className='border border-slate-300 p-2'>Gas Leakage </td>
                    <td className='border border-slate-300 p-2'> Engine Hall, Gas RMS</td>
                </tr>
                <tr>
                    <td className='border border-slate-300 p-2'>Oil Spillage </td>
                    <td className='border border-slate-300 p-2'>Engine Hall, Switchyard, Lube Oil Storage 	area.</td>
                </tr>
                <tr>
                    <td className='border border-slate-300 p-2'>High temperature</td>
                    <td className='border border-slate-300 p-2'>Engine Hall</td>
                </tr>
                <tr>
                    <td className='border border-slate-300 p-2'>High Pressure</td>
                    <td className='border border-slate-300 p-2'>Engine Hall</td>
                </tr>
                <tr>
                    <td className='border border-slate-300 p-2'>Chemicals</td>
                    <td className='border border-slate-300 p-2'>Chemical Storage Area</td>
                </tr>
                </tbody>
            </table>


           </div>

           

       
    )
}
export const Slide4 =({prev, next, home, index, maxIndex}) => {
    return (
    
        
            <div className="w-2/3">
            <p className='text-4xl font-semibold py-6'>Site Safety</p>
            
           <ul className="list-disc text-3xl">
            <li className='bg-gray-100 rounded p-3 mb-2'>Stand clear off all panels while you are in control room </li>
            <li className='bg-gray-100 rounded p-3 mb-2'>Do not touch any control equipment, switches  or device</li>
            <li className='bg-gray-100 rounded p-3 mb-2'>While you are at the plant site do not restrict or block access to emergency equipment such as fire extinguishers, safety shower, emergency exit or route </li>
            <li className='bg-gray-100 rounded p-3 mb-2'>Stand clear of rotating equipment such as pumps and motors which may start automatically and without warning. </li>
           <li className='bg-gray-100 rounded p-3 mb-2'>Cloth shall not have flapping or trailing edges that may get entangled with rotating equipment or moving parts of the plant </li> 
           <li className='bg-gray-100 rounded p-3 mb-2'>Long hair must be neatly tied back</li> 

            </ul>
           </div>

           
        
    )
}
export const Slide5 =({prev, next, home, index, maxIndex}) => {
    return (
        
       
            <div className="w-3/4">
            <p className='text-4xl font-semibold py-6'>Food, Drinks, Drugs, Alcohol and Smoking</p>
            
           
            <div className='bg-gray-100 rounded p-3 mb-2 text-2xl'>Food and drinks are not allowed to take inside the plant areas except designated areas. </div>
            <div className='bg-gray-100 rounded p-3 mb-2 text-2xl'>Whole plant has been declared non-smoking zone except in following designated areas:
            <ul className="list-disc ml-20">  <li >Main gate</li>
                <li>In side the Dormitory Building . </li> </ul>    
                </div>
           <div className='bg-gray-100 rounded p-3 mb-2 text-2xl'>Alcohol, unauthorized drips, illegal substances are strictly prohibited  </div> 
           


            <div>
            

            </div>
           </div>

           
        
      

       

        
        
        
        
        


    )
}
export const Slide6 =({prev, next, home, index, maxIndex}) => {
    return (
        
                <div className="w-2/3">

                <p className='text-4xl font-semibold py-6'>Personal Protective Equipment</p>

                <div className='bg-gray-100 rounded p-3 mb-2 text-3xl'>Mandatory Personal Protective Equipment (PPE) are:
                      <ul className="list-disc ml-20">
                        <li>Safety Helmet</li>
                        <li>Safety Shoe.</li>
                      </ul>  
                </div>
                <div className='bg-gray-100 rounded p-3 mb-2 text-3xl'>
                Other PPEs that may be required are:
                       <ul className="list-disc ml-20">
                        <li>Ear Protector</li>
                        <li>Chemical Gloves</li>
                        <li>Safety Goggles</li>
                        <li>Face Shield</li>
                        <li>Face Mask etc</li>
                       </ul>
                        
                       
                        
                        
                        
                </div>
                <div className='bg-gray-100 rounded p-3 mb-2 text-3xl'>
                While working at plant these equipment must be worn at designated PPE areas.  
                </div>

                </div>

            
    )
}


export const Slide7 =({prev, next, home, index, maxIndex}) => {
    return (
        
            <div className="w-2/3">
            <p className='text-4xl font-semibold py-6'>First Aid & Emergency</p>
            <div className='bg-gray-100 rounded p-3 mb-2 text-3xl'>
            If you experience any incident or accident or near miss during your visit or if you need any first aid help please report to the plant people/guide
            </div> 
            <div className='bg-gray-100 rounded p-3 mb-2 text-3xl'>

                In case of any  emergency(Fire, severe weather etc.) follow your guide for nearest assembly point(Main gate) & dial  <span className='text-red-600 font-bold'> 01711623175 </span> for  the control room
            </div>   


        </div>

            
    )
}

export const Slide8 =({prev, next, home, index, maxIndex}) => {
    return (
       

            <div className="w-2/3">
                <p className='text-4xl font-semibold py-6'>
                    Environment and Waste Management 
                </p>
                
                <div className='bg-gray-100 rounded p-3 mb-3 text-3xl shadow-md'>
                    There are designated  bins for different waste categories
                </div> 
                
                <div className='bg-gray-100 rounded p-3 mb-3 text-3xl shadow-md'>
                    Please help us for minimizing pollution and conserve the environment.
                </div>   


            </div>

            
    )
}

