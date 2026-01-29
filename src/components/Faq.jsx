import React from 'react';
import { useEffect } from 'react';
import { observeElements } from '../animations';

const Faq = () => {

useEffect(() => {
    // Start observing sections when the page loads
    observeElements('.faqHeader, .questionz');
}, []);
    
  return (
    <div>
    <div className="faq">
        <div className="faqHeader">
            <h1>
                Frequently asked questions
            </h1>
        </div>
        <div className="questionz">
            <div className="question1">
                <div className="general1">
                    <p>
                        General
                    </p>
                </div>
                <div className="question">
                    <p>
                        I want to work part-time, is that possible
                    </p>
                </div>
            </div>
            <div className="questionsB">
                <div className="general2">
                    <p>General</p>
                </div>
                <div className="question">
                    <p>How long are the average projects?</p>
                </div>
            </div>
            <div className="questionsC">
                <div className="general2">
                    <p>General</p>
                </div>
                <div className="question">
                    <p>How does the payment work?</p>
                </div>
            </div>
            <div className="questionsB">
                <div className="general2">
                    <p>General</p>
                </div>
                <div className="question">
                    <p>How much can I earn?</p>
                </div>
            </div>
            <div className="question2">
                <div className="general1">
                    <p>
                        General
                    </p>
                </div>
                <div className="general3">
                    <p>
                        Joining Process
                    </p>
                </div>
                <div className="questionII">
                    <p>
                        I want to work part-time, is that possible
                    </p>
                </div>
            </div>
            <div className="questionsB">
                <div className="general2">
                    <p>General</p>
                </div>
                <div className="question">
                    <p>How long are the average projects?</p>
                </div>
            </div>
            <div className="questionsB">
                <div className="general2">
                    <p>General</p>
                </div>
                <div className="question">
                    <p>How long are the average projects?</p>
                </div>
            </div>
            <div className="questionsB">
                <div className="general2">
                    <p>General</p>
                </div>
                <div className="question">
                    <p>How much can i earn?</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Faq