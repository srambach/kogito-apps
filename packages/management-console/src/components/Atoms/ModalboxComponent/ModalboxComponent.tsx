import React from 'react';
import {
  Modal,
  Title,
  TitleLevel,
  BaseSizes,
  Button,
  List,
  ListItem,
  TextContent,
  Text,
  TextVariants
} from '@patternfly/react-core';
import { faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListComponent from '../ListComponent/ListComponent';

interface IOwnProps {
  alertType: string;
  modalTitle: string;
  modalContent?: string;
  isModalOpen: boolean;
  handleSmallModalToggle?: any;
  abortedMessageObj?: any;
  completedMessageObj?: any;
  onFilterClick?: any;
}
const Modalbox: React.FC<IOwnProps> = ({
  alertType,
  modalContent,
  modalTitle,
  isModalOpen,
  handleSmallModalToggle,
  abortedMessageObj,
  completedMessageObj,
  onFilterClick
}) => {
  return (
    <Modal
      isSmall
      title=""
      header={
        <Title headingLevel={TitleLevel.h1} size={BaseSizes['2xl']}>
          {alertType === 'success' ? (
            <FontAwesomeIcon
              icon={faInfoCircle}
              size="sm"
              color="var(--pf-global--info-color--100)"
              className="pf-u-mr-md"
            />
          ) : (
            <FontAwesomeIcon
              icon={faTimesCircle}
              size="sm"
              color="var(--pf-global--danger-color--100)"
              className="pf-u-mr-md"
            />
          )}
          {modalTitle}
        </Title>
      }
      isOpen={isModalOpen}
      onClose={handleSmallModalToggle}
      actions={[
        <Button
          key="confirm"
          variant="primary"
          onClick={() => {
            handleSmallModalToggle();
            onFilterClick();
          }}
        >
          OK
        </Button>
      ]}
      isFooterLeftAligned={false}
    >
      {abortedMessageObj !== undefined && completedMessageObj !== undefined ? (
        <ListComponent
          abortedMessageObj={abortedMessageObj}
          completedMessageObj={completedMessageObj}
        />
      ) : (
        <>{modalContent}</>
      )}
    </Modal>
  );
};

export default Modalbox;
