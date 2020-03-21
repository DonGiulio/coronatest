import React from 'react';
import { Alert } from 'reactstrap';

const Description = () => { 
  return(<div><p>
            The test below has been developed to help you identify if your symptoms match with the typical Corona Virus (COVID-19) and give you a guide to better understand if you might need to take the extra precautions of a suspect infected case.
          </p>
          <p>
            This guide is by no means replacement for your healthcare system or doctor, it has merely been developed just to help you understand better your situation as a tool for self assessment. 
          </p>
          <Alert color="danger">
            <p>
              Results of this test are just indicative and should not alarm you.
            </p>
            <p>
              In case the test marks you as positive, it’s merely a recommendation to further explore your case and contact your healthcare professionals.
            </p>
            <p>
              In case the test marks you as negative but you are still doubtful you are encouraged to seek help from your healthcare professionals.
            </p>
          </Alert>
          <p>You should answer the following questions to the best of your knowledge and understanding. </p>
          <p>There are no wrong answers, the only wrong answer is the one you don't feel right</p>
  </div>)}

export default Description;