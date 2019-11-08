import { Card, CardBody, CardFooter, CardHeader, Text, TextContent, TextVariants, Title, Flex, FlexItem } from '@patternfly/react-core';
import React from 'react';
import ReactJson from 'react-json-view';
import './ProcessDetailsProcessVariables.css';

const ProcessDetailsProcessVariables = ({ loading, data }) => {
  return (
    <Card>
      <CardHeader>
        <Title headingLevel="h3" size="xl">Process Variables</Title>
      </CardHeader>
      <CardBody>
        {/* <TextContent>
          {!loading ? (
            data.ProcessInstances.map((item, index) => {
              return (
                <div key={index}>
                  <ReactJson src={JSON.parse(item.variables)}/>
                </div>
              );
            })
          ) : (
            <Text component={TextVariants.h4}>Loading...</Text>
          )}
        </TextContent> */}

        <Flex>
          
          <Flex>
            <FlexItem className="kie-process-variables__label pf-m-full-width">flight</FlexItem>
            <Flex className="kie-process-variables__value">
              <Flex className="kie-process-variables__tuple">
                <FlexItem className="kie-process-variables__label">arrival</FlexItem>
                <FlexItem className="kie-process-variables__value">2019-10-22T22:00:00Z[UTC]</FlexItem>
              </Flex>
              <Flex className="kie-process-variables__tuple">
                <FlexItem className="kie-process-variables__label">departure</FlexItem>
                <FlexItem className="kie-process-variables__value">2019-10-30T22:22:00Z[UTC]</FlexItem>
              </Flex>
              <Flex className="kie-process-variables__tuple">
                <FlexItem className="kie-process-variables__label">flightNumber</FlexItem>
                <FlexItem className="kie-process-variables__value">MX555</FlexItem>
              </Flex>
            </Flex>
          </Flex>

          <Flex>
            <FlexItem className="kie-process-variables__label pf-m-full-width">trip</FlexItem>
            <Flex className="kie-process-variables__value">
              <Flex className="kie-process-variables__tuple">
                <FlexItem className="kie-process-variables__label">begin</FlexItem>
                <FlexItem className="kie-process-variables__value">2019-10-22T22:00:00Z[UTC]</FlexItem>
              </Flex>
              <Flex className="kie-process-variables__tuple">
                <FlexItem className="kie-process-variables__label">city</FlexItem>
                <FlexItem className="kie-process-variables__value">Bangalore</FlexItem>
              </Flex>
              <Flex className="kie-process-variables__tuple">
                <FlexItem className="kie-process-variables__label">country</FlexItem>
                <FlexItem className="kie-process-variables__value">India</FlexItem>
              </Flex>
              <Flex className="kie-process-variables__tuple">
                <FlexItem className="kie-process-variables__label">end</FlexItem>
                <FlexItem className="kie-process-variables__value">2019-10-30T22:22:00Z[UTC]</FlexItem>
              </Flex>
              <Flex className="kie-process-variables__tuple">
                <FlexItem className="kie-process-variables__label">visaRequired</FlexItem>
                <FlexItem className="kie-process-variables__value">false</FlexItem>
              </Flex>
            </Flex>
          </Flex>

          <Flex>
            <FlexItem className="kie-process-variables__label pf-m-full-width">hotel</FlexItem>
            <Flex className="kie-process-variables__value">
              <Flex>
                <FlexItem className="kie-process-variables__label pf-m-full-width">address</FlexItem>
                <Flex className="kie-process-variables__value">
                  <Flex className="kie-process-variables__tuple">
                    <FlexItem className="kie-process-variables__label">city</FlexItem>
                    <FlexItem className="kie-process-variables__value">Bangalore</FlexItem>
                  </Flex>
                  <Flex className="kie-process-variables__tuple">
                    <FlexItem className="kie-process-variables__label">country</FlexItem>
                    <FlexItem className="kie-process-variables__value">India</FlexItem>
                  </Flex>
                  <Flex className="kie-process-variables__tuple">
                    <FlexItem className="kie-process-variables__label">street</FlexItem>
                    <FlexItem className="kie-process-variables__value">1232 street</FlexItem>
                  </Flex>
                  <Flex className="kie-process-variables__tuple">
                    <FlexItem className="kie-process-variables__label">zipCode</FlexItem>
                    <FlexItem className="kie-process-variables__value">12345</FlexItem>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            <Flex className="kie-process-variables__tuple">
              <FlexItem className="kie-process-variables__label">bookingNumber</FlexItem>
              <FlexItem className="kie-process-variables__value">XX-01232456</FlexItem>
            </Flex>
            <Flex className="kie-process-variables__tuple">
              <FlexItem className="kie-process-variables__label">name</FlexItem>
              <FlexItem className="kie-process-variables__value">Perfect Hotel</FlexItem>
            </Flex>
            <Flex className="kie-process-variables__tuple">
              <FlexItem className="kie-process-variables__label">phone</FlexItem>
              <FlexItem className="kie-process-variables__value">09877654</FlexItem>
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProcessDetailsProcessVariables;
