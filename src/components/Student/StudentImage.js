import React from 'react';
import userDefaultImage from '@assets/img/userDefaultImage.png';

import { Image } from 'react-bootstrap';

function StudentImage() {
  return (
    <div className="student__image-container">
      <Image
        className="student__image"
        src={userDefaultImage}
        roundedCircle
      />
    </div>
  );
}

export default StudentImage;
