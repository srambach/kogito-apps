import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Grid,
  GridItem,
  PageSection,
  Button
} from '@patternfly/react-core';
import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DataListTitleComponent from '../../Molecules/DataListTitleComponent/DataListTitleComponent';
import DataToolbarComponent from '../../Molecules/DataToolbarComponent/DataToolbarComponent';
import './DataList.css';
import DataListComponent from '../../Organisms/DataListComponent/DataListComponent';
import EmptyStateComponent from '../../Atoms/EmptyStateComponent/EmptyStateComponent';
import ModalboxComponent from '../../Atoms/ModalboxComponent/ModalboxComponent';
import { useGetProcessInstancesLazyQuery } from '../../../graphql/types';
import axios from 'axios';

const DataListContainer: React.FC<{}> = () => {
  const [initData, setInitData] = useState<any>([]);
  const [checkedArray, setCheckedArray] = useState<any>(['ACTIVE']);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isStatusSelected, setIsStatusSelected] = useState(true);
  const [filters, setFilters] = useState(checkedArray);
  const [abortedObj, setAbortedObj] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [abortedMessageObj, setAbortedMessageObj] = useState({});
  const [completedMessageObj, setCompletedMessageObj] = useState({});
  const [
    getProcessInstances,
    { loading, data }
  ] = useGetProcessInstancesLazyQuery({ fetchPolicy: 'network-only' });

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onFilterClick = async (arr = checkedArray) => {
    setIsLoading(true);
    setIsError(false);
    setAbortedObj({});
    setAbortedMessageObj({});
    setCompletedMessageObj({});
    setIsStatusSelected(true);
    getProcessInstances({ variables: { state: arr } });
  };

  useEffect(() => {
    setAbortedObj({});
    setAbortedMessageObj({});
    setCompletedMessageObj({});
    setIsLoading(loading);
    if (!loading && data !== undefined) {
      data.ProcessInstances.map((instance: any) => {
        instance.isChecked = false;
        instance.isOpen = false;
      });
    }
    setInitData(data);
  }, [data]);

  const handleAbortAll = () => {
    const tempAbortedObj = { ...abortedObj };
    const completedAndAborted = {};
    for (const [id, processName] of Object.entries(abortedObj)) {
      initData.ProcessInstances.map(instance => {
        if (instance.id === id) {
          if (instance.state === 'COMPLETED' || instance.state === 'ABORTED') {
            completedAndAborted[id] = processName;
            delete tempAbortedObj[id];
          }
        }
        if (instance.childDataList !== undefined) {
          instance.childDataList.map(child => {
            if (child.id === id) {
              if (child.state === 'COMPLETED' || child.state === 'ABORTED') {
                completedAndAborted[id] = processName;
                delete tempAbortedObj[id];
              }
            }
          });
        }
      });
    }
    const endpoint = initData.ProcessInstances[0].endpoint;
    axios
      .post(
        `${endpoint}/management/processes/instances/${Object.keys(
          tempAbortedObj
        )}/abortAll`
      )
      .then(result => {
        setAbortedMessageObj(tempAbortedObj);
        setCompletedMessageObj(completedAndAborted);
        handleModalToggle();
      })
      .catch(err => {
        err = err;
        setAbortedMessageObj(tempAbortedObj);
        setCompletedMessageObj(completedAndAborted);
        handleModalToggle();
      });
  };
  return (
    <React.Fragment>
      <ModalboxComponent
        alertType="success"
        modalTitle="Aborted Operation"
        isModalOpen={isModalOpen}
        handleSmallModalToggle={handleModalToggle}
        abortedMessageObj={abortedMessageObj}
        completedMessageObj={completedMessageObj}
        onFilterClick={onFilterClick}
      />
      <PageSection variant="light">
        <DataListTitleComponent />
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to={'/'}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem isActive>Process instances</BreadcrumbItem>
        </Breadcrumb>
      </PageSection>
      <PageSection>
        <Grid gutter="md">
          <GridItem span={12}>
            <Card className="dataList">
              {!isError && (
                <DataToolbarComponent
                  checkedArray={checkedArray}
                  filterClick={onFilterClick}
                  setCheckedArray={setCheckedArray}
                  setIsStatusSelected={setIsStatusSelected}
                  filters={filters}
                  setFilters={setFilters}
                  initData={initData}
                  setInitData={setInitData}
                  abortedObj={abortedObj}
                  setAbortedObj={setAbortedObj}
                  handleAbortAll={handleAbortAll}
                />
              )}
              {isStatusSelected ? (
                <DataListComponent
                  initData={initData}
                  setInitData={setInitData}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  setIsError={setIsError}
                  abortedObj={abortedObj}
                  setAbortedObj={setAbortedObj}
                />
              ) : (
                <EmptyStateComponent
                  iconType="warningTriangleIcon1"
                  title="No status is selected"
                  body="Try selecting at least one status to see results"
                  filterClick={onFilterClick}
                  setFilters={setFilters}
                  setCheckedArray={setCheckedArray}
                />
              )}
            </Card>
          </GridItem>
        </Grid>
      </PageSection>
    </React.Fragment>
  );
};

export default DataListContainer;
