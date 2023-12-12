import React from 'react'
import './Plan.css'
import {cardsData} from '../../data/data'
import  tick from '../../assets/tick.png'

const Plan = () => {
  const features=[
    {
    "id": "one",
    "title": "Feature",
    "array": ["Ideal for",
    "Features",
    "Number of properties",
    "Channel management channels",
    "Booking engine (customizable)",
    "API access",
    "Dedicated account manager",
    "Priority support"]
    }
  ]
  return (
    <div className='plansection-wrapper'>
    
    <div className='innerdiv-plan'>
    <div className='plan-headings'>
      <h2 className='headingh2'>Choose Your <span style={{color:"#F85E9F"}}>Plan</span></h2>
      <p className='textp2'>Switch or cancel* anytime.</p>
    </div>
     
 
<div className='mainplan-div'>
    <div className='plans'>

    
    {features?.map((feature,index)=>{
      return(
        <div className='feature-card'>
          <div className='feature-innercard'>
             <h3 className='title' style={{textAlign:"start"}}>{feature.title}</h3>
             <ul className='feature-data'>
              {feature.array.map((Data,index) => (
            
                <li key={index} className='feature-items'>{Data}</li>
                
              ))}
            </ul>
          </div>
        </div>
      )
    })}
  


    {cardsData.map((plan, index) => (
          <div className='plan-card' >
          <div className='plan-cardinnerwrapper' key={plan.id}>

          <div className='list-title-wrapper'>
            <h3 className='title'>{plan.title}</h3>
            
            <ul className='plan-data'>
              {plan.array.map((Data,index) => (
            
               <div className='picandData'>
               <img src={tick} alt="pic" style={{height:"9.07px", width:"13.33px",marginTop:"7.66px",marginLeft:"5.23px"}}/>
                <li key={index} className='plan-items'>{Data}</li>.
                </div> 
                
             
              ))}
            </ul>
          </div>
            <button className='plan-button'>{plan.button}</button>
            </div>
          </div>
        ))}
      
    </div>
</div>
    </div>
    </div>
  )
}

export default Plan






