import React from 'react';
import PracticeWorkBookHeaderModules from '../../organisms/PracticeWorkBookOrganisms/PracticeWorkBookHeaderOrganisms';
import PracticeWorkBookBodyModules from '../../organisms/PracticeWorkBookOrganisms/PracticeWorkBookBodyOrganisms';
import PracticeWorkBookNavOrganisms from '../../organisms/PracticeWorkBookOrganisms/PracticeWorkBookNavOrganisms';

import * as S from './PracticeWorkBookTemplate.style';

const PracticeWorkBookTemplate = (props: any) => {
  // let language = ['react', 'node', 'spring'];
  return (
    <>
      <PracticeWorkBookNavOrganisms />
      <br />
      <br />
      <PracticeWorkBookHeaderModules></PracticeWorkBookHeaderModules>
      {/* <PracticeWorkBookBodyModules /> */}
    </>
  );
};

export default PracticeWorkBookTemplate;
