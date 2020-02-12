import React from 'react';
import {
  TextContent,
  TextVariants,
  List,
  ListItem,
  Text,
  Divider
} from '@patternfly/react-core';

interface IOwnProps {
  abortedMessageObj: any;
  completedMessageObj: any;
}
const ListComponent: React.FC<IOwnProps> = ({
  abortedMessageObj,
  completedMessageObj
}) => {
  return (
    <>
      {' '}
      {Object.keys(abortedMessageObj).length !== 0 &&
        Object.keys(completedMessageObj).length !== 0 && (
          <>
            <TextContent>
              <Text component={TextVariants.h2}>
                {' '}
                The following processes were aborted :
              </Text>
            </TextContent>
            <List>
              {Object.entries(abortedMessageObj).map(process => {
                return (
                  <ListItem key={process[0]}>
                    {process[0]} : {process[1]}
                  </ListItem>
                );
              })}
            </List>
            <Divider component="div" className="pf-u-mt-xl pf-u-mb-xl" />
            <TextContent>
              <Text component={TextVariants.h2}>
                The following processes were skipped because they were either
                completed or aborted :
              </Text>
            </TextContent>

            <List>
              {Object.entries(completedMessageObj).map(process => {
                return (
                  <ListItem key={process[0]}>
                    {process[0]} : {process[1]}
                  </ListItem>
                );
              })}
            </List>
          </>
        )}
      {Object.keys(abortedMessageObj).length === 0 &&
        Object.keys(completedMessageObj).length !== 0 && (
          <>
            <TextContent>
              <Text component={TextVariants.h2}>
                {' '}
                No processes were aborted
              </Text>
            </TextContent>
            <Divider component="div" className="pf-u-mt-xl pf-u-mb-xl" />
            <TextContent>
              <Text component={TextVariants.h2}>
                The following processes were skipped because they were either
                completed or aborted :
              </Text>
            </TextContent>

            <List>
              {Object.entries(completedMessageObj).map(process => {
                return (
                  <ListItem key={process[0]}>
                    {process[0]} : {process[1]}
                  </ListItem>
                );
              })}
            </List>
          </>
        )}
      {Object.keys(abortedMessageObj).length !== 0 &&
        Object.keys(completedMessageObj).length === 0 && (
          <>
            <TextContent>
              <Text component={TextVariants.h2}>
                {' '}
                The following processes were aborted :
              </Text>
            </TextContent>
            <List>
              {Object.entries(abortedMessageObj).map(process => {
                return (
                  <ListItem key={process[0]}>
                    {process[0]} : {process[1]}
                  </ListItem>
                );
              })}
            </List>
            <Divider component="div" className="pf-u-mt-xl pf-u-mb-xl" />
            <TextContent>
              <Text component={TextVariants.h2}>No processes were skipped</Text>
            </TextContent>
          </>
        )}
    </>
  );
};

export default ListComponent;
