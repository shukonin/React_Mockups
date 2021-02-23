import React from 'react';

import Avatar1 from '../../Assets/Avatars/Eliot.svg';
import Avatar2 from '../../Assets/Avatars/Fabian.svg';
import Avatar3 from '../../Assets/Avatars/Gael.svg';
import Avatar4 from '../../Assets/Avatars/Gerard.svg';
import Avatar5 from '../../Assets/Avatars/Hasan.svg';
import Avatar6 from '../../Assets/Avatars/Katina.svg';
import Avatar7 from '../../Assets/Avatars/Milo.svg';
import Avatar8 from '../../Assets/Avatars/Oliver.svg';

import { StyledAvatar } from './style';

const Avatar = (props) => {
  switch (props.avatarID) {
    case '1':
      return <StyledAvatar src={Avatar1} top="32" left="18" />;
    case '2':
      return <StyledAvatar src={Avatar2} top="55" left="30" />;
    case '3':
      return <StyledAvatar src={Avatar3} top="75" left="32" />;
    case '4':
      return <StyledAvatar src={Avatar4} top="28" left="48" />;
    case '5':
      return <StyledAvatar src={Avatar5} top="34" left="66" />;
    case '6':
      return <StyledAvatar src={Avatar6} top="85" left="90" />;
    case '7':
      return <StyledAvatar src={Avatar7} top="70" left="53" />;
    case '8':
      return <StyledAvatar src={Avatar8} top="28" left="80" />;
    default:
      return undefined;
  }
};

export { Avatar };
