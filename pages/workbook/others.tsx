import React,{useEffect} from 'react';
import PracticeOtherAnswersTemplate from '../../src/components/templates/PracticeOtherAnswersTemplate';
import { isLogin } from '../../src/http/userInfo'


const WorkBook = () => {

  useEffect(()=> {
  
    if(!isLogin){
      window.location.href = '/login'
    }
  },[]) 
  
  return (
    <>
      <PracticeOtherAnswersTemplate />
    </>
  );
};

export default WorkBook;
