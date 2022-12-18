import React, { ReactNode, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { baseURL } from '../../../http/url';
import instance from '../../../http/axios';

import LandingPageHeaderOrganism from '../../organisms/LandingPageOrganisms/LandingPageHeaderOrganism';
import LandingPagePrepareOrganism from '../../organisms/LandingPageOrganisms/LandingPagePrepareOrganism';
import LandingPageApplyOrganism from '../../organisms/LandingPageOrganisms/LandingPageApplyOrganism';
import LandingPagePracticeOrganism from '../../organisms/LandingPageOrganisms/LandingPagePracticeOrganism';
import LandingPageTopTierOrganism from '../../organisms/LandingPageOrganisms/LandingPageTopTierOrganism';
import LandingPageWorkbookOrganism from '../../organisms/LandingPageOrganisms/LandingPageWorkbookOrganism';
import LandingPageMockOrganism from '../../organisms/LandingPageOrganisms/LandingPageMockOrganism';
import LandingPageWrongAnswerOrganism from '../../organisms/LandingPageOrganisms/LandingPageWrongAnswerOrganism';
import LandingPageFooterOrganism from '../../organisms/LandingPageOrganisms/LandingPageFooterOrganism';

import { checkPlatform } from '../../../checkPlatform';

// interface Props {
//   header: ReactNode;
//   prepare: ReactNode;
//   apply: ReactNode;
//   practice: ReactNode;
//   toptier: ReactNode;
//   workbook: ReactNode;
//   mock: ReactNode;
//   wronganswer: ReactNode;
//   footer: ReactNode;
// }

const LandingPageTemplate = () => {
  useEffect(() => {
    async function fetchLog() {
      const result = await instance.post(`${baseURL}/logs/tracking`, {
        deviceId:
          localStorage.getItem('deviceId') !== null
            ? localStorage.getItem('deviceId')
            : (localStorage.setItem('deviceId', uuidv4()),
              localStorage.getItem('deviceId')),
        pageName: 'LadingPage',
        referrer: document.referrer,
        url: window.location.href,
        agent: checkPlatform(),
      });
    }
    fetchLog();
  }, []);
  return (
    <>
      <LandingPageHeaderOrganism />
      <LandingPagePrepareOrganism />
      <LandingPageApplyOrganism />
      <LandingPagePracticeOrganism />
      <LandingPageTopTierOrganism />
      <LandingPageWorkbookOrganism />
      <LandingPageMockOrganism />
      <LandingPageWrongAnswerOrganism />
      <LandingPageFooterOrganism />
    </>
  );
};

export default LandingPageTemplate;
