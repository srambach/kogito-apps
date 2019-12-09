import React, { useState } from 'react';
import {
  AboutModal,
  Button,
  TextContent,
  TextList,
  TextListItem
} from '@patternfly/react-core';
import './AboutModal.css';
import kogito_logo_aboutpage from '../../../static/kogito_logo_aboutpage.svg';
import KogitoAbout from '../../../static/KogitoAbout.png';
import { version } from '../../../../package.json';
export interface IOwnProps {
  isOpenProp: boolean;
  handleModalToggleProp: any;
}

const AboutModalBox: React.FC<IOwnProps> = ({
  isOpenProp,
  handleModalToggleProp
}) => {
  return (
    <AboutModal
      isOpen={isOpenProp}
      onClose={handleModalToggleProp}
      trademark="Trademark and copyright information here"
      brandImageAlt="Kogito Logo"
      brandImageSrc={kogito_logo_aboutpage}
      backgroundImageSrc={KogitoAbout}
    >
      <TextContent>
        <TextList component="dl">
          <TextListItem component="dt">Version</TextListItem>
          <TextListItem component="dd">{version}</TextListItem>
        </TextList>
      </TextContent>
    </AboutModal>
  );
};

export default AboutModalBox;
