import React from 'react';

import {Student} from '@components/Student';

function StudentList({ students }) {
  return (
    <>
      <h2 className='mt-5 mb-3'>Our happy students</h2>
      <div className='d-flex flex-wrap'>
        {students.length > 0 ? (
          students.map(({id, firstname}) => <Student key={id} firstname={firstname} />)
        ) : (
          <h3>No students exists.</h3>
        )}
      </div>
    </>
  );
}

export default StudentList;
