import React from 'react'
 import './Faq.css';
 import { faqData } from '../../data/data';

const Faq = () => {
  return (
    <div className='faq-wrapper'>
      <div className='faq-title'>Frequently Asked Questions</div>
      <div className='faq-questionsbox '>
        {faqData.map((question,index)=>{
          return(
             <div className='question-card'>
              <div className='question'>{question}</div>
              <div className='sign'>+</div>
           </div>
          )
        })}
      </div>
    </div>
  )
}

export default Faq