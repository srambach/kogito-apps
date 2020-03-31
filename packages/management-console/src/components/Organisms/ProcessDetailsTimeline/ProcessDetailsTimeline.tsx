import Moment from 'react-moment';
import {
  Card,
  CardBody,
  CardHeader,
  Title,
  Bullseye,
  Text,
  TextContent,
  TextVariants,
  Split,
  SplitItem,
  Stack,
  Dropdown,
  KebabToggle,
  DropdownItem,
  Tooltip
} from '@patternfly/react-core';
import {
  ServicesIcon,
  UserIcon,
  CheckCircleIcon,
  ErrorCircleOIcon,
  OnRunningIcon
} from '@patternfly/react-icons';
import React, { useState } from 'react';
import './ProcessDetailsTimeline.css';
import { ProcessInstance } from '../../../graphql/types';

export interface IOwnProps {
  data: Pick<
    ProcessInstance,
    'id' | 'nodes' | 'addons' | 'error' | 'serviceUrl'
  >;
  handleSkip: () => void;
  handleRetry: () => void;
}

const ProcessDetailsTimeline: React.FC<IOwnProps> = ({
  data,
  handleRetry,
  handleSkip
}) => {
  const [isKebabOpen, setIsKebabOpen] = useState(false);

  // TODO: make the kebab menu for each timeline item work!
  // const { isOpen } = this.state;
  const dropdownItems = [
    <DropdownItem key="retry" component="button" onClick={handleRetry}>
      Retry
    </DropdownItem>,
    <DropdownItem key="skip" component="button" onClick={handleSkip}>
      Skip
    </DropdownItem>
  ];

  const onKebabToggle = isOpen => {
    setIsKebabOpen(isOpen);
  };

  const onDropdownSelect = event => {
    setIsKebabOpen(!isKebabOpen);
  };
  return (
    <Card>
      <CardHeader>
        <Title headingLevel="h3" size="xl">
          Timeline
        </Title>
      </CardHeader>
      <CardBody>
        <Stack gutter="md" className="kogito-management-console--timeline">
          {data.nodes &&
            data.nodes.map(content => {
              return (
                <Split
                  gutter={'sm'}
                  className={'kogito-management-console--timeline-item'}
                  key={content.id}
                >
                  <SplitItem>
                    {
                      <>
                        {/* TODO: put the correct icon in depending on the state */}
                        {/* <Tooltip content={'Active'}>
                            <OnRunningIcon className="kogito-management-console--timeline-status" />{' '}
                          </Tooltip> */}
                        {/* <Tooltip content={'Completed'}>
                          <CheckCircleIcon
                            color="var(--pf-global--success-color--100)"
                            className="kogito-management-console--timeline-status"
                          />
                        </Tooltip> */}
                        {data.error &&
                        content.definitionId === data.error.nodeDefinitionId ? (
                          <Tooltip content={data.error.message}>
                            <ErrorCircleOIcon
                              color="var(--pf-global--danger-color--100)"
                              className="kogito-management-console--timeline-status"
                            />
                          </Tooltip>
                        ) : content.exit === null ? (
                          <Tooltip content={'Active'}>
                            <OnRunningIcon className="kogito-management-console--timeline-status" />
                          </Tooltip>
                        ) : (
                          <Tooltip content={'Completed'}>
                            <CheckCircleIcon
                              color="var(--pf-global--success-color--100)"
                              className="kogito-management-console--timeline-status"
                            />
                          </Tooltip>
                        )}
                      </>
                    }
                  </SplitItem>
                  <SplitItem isFilled>
                    <TextContent>
                      <Text component={TextVariants.p}>
                        {content.name}
                        <span>
                          {content.type === 'HumanTaskNode' && (
                            <Tooltip content={'Human task'}>
                              <UserIcon
                                className="pf-u-ml-sm"
                                color="var(--pf-global--icon--Color--light)"
                              />
                            </Tooltip>
                          )}
                        </span>
                        <Text component={TextVariants.small}>
                          {content.exit === null ? (
                            'Active'
                          ) : (
                            <Moment fromNow>
                              {new Date(`${content.exit}`)}
                            </Moment>
                          )}
                        </Text>
                      </Text>
                    </TextContent>
                  </SplitItem>
                  <SplitItem>
                    {
                      <>
                        {/* TODO: Make the dropdown work, with contents depending on the state */}
                        {data.addons.includes('process-management') &&
                        data.serviceUrl !== null &&
                        data.error &&
                        content.definitionId === data.error.nodeDefinitionId ? (
                          <Dropdown
                            onSelect={onDropdownSelect}
                            toggle={
                              <KebabToggle
                                onToggle={onKebabToggle}
                                id="kebab-toggle"
                              />
                            }
                            isOpen={isKebabOpen}
                            isPlain
                            dropdownItems={dropdownItems}
                          />
                        ) : (
                          <Dropdown
                            toggle={
                              <KebabToggle
                                isDisabled
                                id="kebab-toggle-disabled"
                              />
                            }
                            isPlain
                          />
                        )}
                      </>
                    }
                  </SplitItem>{' '}
                </Split>
              );
            })}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProcessDetailsTimeline;
