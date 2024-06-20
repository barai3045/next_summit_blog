"use client"
import React, { useState } from 'react';

const page = () => {
    const [index, setIndex] = useState(0)
    const [mngCmt, setmngCmt] = useState(true)
    
    const maxSlide = 7

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

    return (
        <div className='bg-white p-6 min-h-screen'>
            <div className='flex justify-between'>
                <button onClick={prevSlide} className='border rounded px-4 bg-gray-200  hover:bg-blue-400 hover:text-white'>Prev </button>
                <p className='font-semibold'>(Slide {index+1} of {maxSlide})</p> {mngCmt}
                <button onClick={nextSlide}  className='border rounded px-4 bg-gray-200  hover:bg-blue-400 hover:text-white'>Next </button>
            </div>
           

            <Slide
            title="Induction Training on"
            isActive ={index===0} >
             <div className='flex justify-center'>
                <p className="text-2xl w-2/3"> Environment , Health & Safety  <br/>
                Madhabdi Power Plant </p>
            </div>
            </Slide> <br/>
            <Slide
            title="Madhabdi Power Plant"
            isActive ={index===1}
            >
            <div className='flex justify-center'>
            <ul className='text-2xl w-2/3 '>
                <li>Consists of Two separate units ( Unit 1- Caterpillar & Unit 2-Wartsila)</li>
                <li>It is reciprocating gas based IC Engine power plant</li>
                <li> Total gross generation capacity of this plant is 35.3MW</li>
                <li>Customer: <b> Narsingdi Palli Bidyut Samity-2 </b> under Bangladesh Rural Electrification Board</li>
                <li>Number of Employees: 45</li>
            </ul>
            </div>





            </Slide>
            <Slide
            title="ISO Certificate Achievement"
            isActive ={index===2}
            >
            <div className='flex justify-center'>
            <ul className='text-2xl w-2/3 '>
                <li className='py-2'>ISO 9001:2015 (QMS)</li>
                <li className='py-2'>ISO 14001:2015 (EMS)</li>
                <li className='py-2'>OHSAS 18001:2007 (Health & Safety)</li>
            </ul>
            </div>
            </Slide>

            
            <Slide
            title="Management Commitment (Health and Safety Policy) "
            isActive ={index===3}
            >
            <div className='flex justify-center'>
            
            <div className="w-2/3 text-xl">
                <p>SUMMIT POWER LIMITED (SPL), strongly believes that the achievement of organizational success must be accompanied by a resolute commitment towards the health and safety to all of its employees.
                SPL commits itself to the following Occupational Health Protection and Safety Policy: </p>

                <ul class="list-disc">
                    <li>Ensure a healthy and safe work environment to employees and provide resources for awareness, preliminary risk evaluation, training and monitoring of health and accident risks.</li>
                    <li>Ensure consistency of SPL’s health and safety procedures with the relevant legislative requirements, other requirements to which SPL subscribes and introduce necessary additional requirements to make certain of a safe and healthy workplace. </li>
                    <li>Incorporate occupational health and safety considerations in the planning stage of product and process design.</li>
                    <li>Continually strive to eliminate any foreseeable hazards, which may result in property damage, accidents, or personal injury/illness.</li>
                    <li>Continually improve in OH&S management and OH&S performance</li>
                    <li>Be prepared for emergencies and act promptly to eliminate their resulting incidents/accidents.</li>
                    <li>Aiming at ensuring the implementation of the actions related to meet the system requirements, organizational issues are dealt with by Management Representative supported by the Deputy Management Representatives of Quality Management, Environmental Management and Occupational Health Protection and Safety Management.</li>
                    <li>A periodic review ensures the suitability of this policy, relevancy and appropriateness to the SPL objectives, as well as to their activities and services.</li>
                </ul>

            </div>
            

            </div>
        
            </Slide>
            <Slide
            title="Management Commitment (Environmental Policy)"
            isActive ={index===4}
            >
            <div className='flex justify-center'>
            
            <div className="w-2/3 text-xl">
                <p>SUMMIT POWER LIMITED (SPL), aware of their social responsibility, sensitive to the global environment protection efforts, and according to the SPL, considers their mission to contribute to the sustainable development of the country.</p>
                <p>Continuous improvement, waste minimization, pollution prevention, as well as the commitment of the employees will be the basis for the implementation of this policy.</p>
                <p>Therefore, SPL commits to:</p>
                <ul class="list-decimal">
                <li>Practice environmental management as a dynamic, evolutionary process, and with permanent feedback.
</li> <li> Seek full compliance with legislation, applicable standards, and other requirements, resulting from agreements signed by the organization, and wherever possible, overcome them.
</li> <li>Minimize any significant adverse environmental impacts of new developments using integrated environmental management procedures and planning
</li> <li>Provide the sites with adequate facilities, aiming at the environmental protection, associated with adequate employee-workplace environment integration.
</li> <li>Implement generation techniques and use of resources that judiciously minimize the generation of waste that is hazardous to the environment.
</li> <li>Encourage the adoption of these principles by suppliers, partners and service providers.
</li> <li>Disseminate this policy by educating and training employees, and encourage them to conduct their activities in an environmentally responsible manner.
</li> 
                </ul>

            </div>
            

            </div>
        
            </Slide>


            <Slide
            title="Importance of Site Induction"
            isActive ={index===5}
            >
            <div className='flex justify-center'>
            
            <div className="w-2/3 text-xl">
            <ul class="list-disc">
                <li>
                To provide all site personnel and visitors with a general awareness of Health, Safety and Environmental issues. 

</li><li>To help you be aware of potential risks during your visit.
</li><li>To ensure you are safe whilst on our site.
</li><li>To ensure you do not put others at risk.
</li><li>To develop a first class safety culture where personal
	</li><li>observations are welcomed by everyone
                </li>
            </ul>
<br/>
<br/>
<br/>
<br/>
            <p className='text-sl font-semibold'>BECAUSE WE BELIEVE THAT EVERYONE HAS THE RIGHT FOR SAFETY LIFE
</p>

            </div>
            

            </div>
        
            </Slide>

            
            <Slide
            title="EHS Obligation of MDPP"
            isActive={index===6}>
                <div className='flex justify-center'>

                    <div className="w-2/3 text-xl">
                    <uL>
                        <li>At the time for visit the visitors need to comply with the plant  EHS guidelines</li>
                        <li>A visitor will be allowed to visit the operational areas only after getting prior approval from the authority</li>
                        <li>Visitor must be accompanied by an MDPP employee throughout the visit</li>
                        <li>Considering the safety and security issue  the plant management reserve the right to refuge or restrict the movement of any visitor inside the plant operational area</li>
                    </uL>
                        
                        
                        
                        
                    </div>

                </div>
            </Slide>


        </div>
    );
};

export default page;


function Slide({
    title,
    children,
    isActive
}){ 
    return ( 
        <>
        {isActive && <div>
            <p className='flex text-4xl font-semibold bg-gray-200 justify-center rounded py-3'>{title}</p> 

           {children}
          </div>
        }
        
        </>
    )

}



function SubSlide(
    {
        children, 
        isSubActive

    }
){
    <div className='bg-blue-200'>
        {isSubActive && {children} }
    </div>
}