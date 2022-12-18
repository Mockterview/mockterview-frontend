import React from 'react';

const ProcessBarOrganisms = (prop: { bgcolor: any; completed: any }) => {
  const { bgcolor, completed } = prop;

  return (
    <>
      <div>
        <div>
          <span>{`${completed}%`}</span>
        </div>
      </div>
    </>
  );
};

export default ProcessBarOrganisms;
