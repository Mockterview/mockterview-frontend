import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PracticeWorkBookHeaderModules from '../../../src/components/organisms/PracticeWorkBookOrganisms/PracticeWorkBookHeaderOrganisms';
import PracticeWorkBookBodyModules from '../../../src/components/organisms/PracticeWorkBookOrganisms/PracticeWorkBookBodyOrganisms';
import PracticeWorkBookNavOrganisms from '../../../src/components/organisms/PracticeWorkBookOrganisms/PracticeWorkBookNavOrganisms';
import { isLogin } from '../../../src/http/userInfo';

const PracticeWorkBook = (props: any) => {
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    if (!isLogin) {
      window.location.href = '/login';
    }
  }, []);
  return (
    <>
      <PracticeWorkBookNavOrganisms />
      <PracticeWorkBookHeaderModules title="React"></PracticeWorkBookHeaderModules>
      <PracticeWorkBookBodyModules language="react" />
    </>
  );
};

export default PracticeWorkBook;
