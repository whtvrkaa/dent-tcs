import React from 'react';
import PropTypes from 'prop-types';
import {

  IconLocation,
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconTwitter,

} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
  
    case 'Location':
      return <IconLocation />;
    case 'Facebook':
      return <IconFacebook />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'Twitter':
      return <IconTwitter />;
  
   ;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
