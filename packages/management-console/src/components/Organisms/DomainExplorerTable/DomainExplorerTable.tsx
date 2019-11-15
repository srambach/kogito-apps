import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import {
  Title,
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  Bullseye,
  Button
} from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';
import SpinnerComponent from '../../Atoms/SpinnerComponent/SpinnerComponent';

const DomainExplorerTable = ({ columnFilters, tableLoading, displayTable }) => {
  const firstKey = Object.keys(columnFilters)[0];
  const tableContent = columnFilters[firstKey];
  const tableRows: any = [];
  let rows = [];
  const rowObject: any = {};
  const tempCols = [];
  const temp: any = {};
  if (tableContent) {
    const tableObjects: any = [];
    tableContent.filter(items => tableObjects.push(Object.values(items)));
    tableObjects.filter(
      elements => elements.reduce((r, c) => Object.assign(r, c)),
      {}
    );
    const tableData = [];
    tableObjects.filter(arr => {
      const obj = arr.shift();
      tempCols.push(Object.keys(obj));
      tableData.push(Object.values(obj));
    });

    tableData.filter(item => {
      temp.cells = Object.values(item);
      tableRows.push(temp);
    });
    if (tableLoading) {
      rowObject.cells = [
        {
          props: { colSpan: 8 },
          title: (
            <Bullseye>
              <SpinnerComponent spinnerText="Loading Domain Explorer..." />
            </Bullseye>
          )
        }
      ];
      rows.push(rowObject);
    } else {
      rows = tableRows;
    }
  }
  const onRowSelect = (event, isSelected, rowId) => {
    return null;
  };

  const onDelete = (type = '', id = '') => {
    return null;
  };

  return (
    <React.Fragment>
      {displayTable && (
        <Table
          cells={tempCols[0]}
          rows={rows}
          onSelect={onRowSelect}
          aria-label="Filterable Table Demo"
        >
          <TableHeader />
          <TableBody />
        </Table>
      )}
      {columnFilters.length > 0 && rows.length === 0 && (
        <Bullseye>
          <EmptyState>
            <EmptyStateIcon icon={SearchIcon} />
            <Title headingLevel="h5" size="lg">
              No results found
            </Title>
            <EmptyStateBody>
              No results match this filter criteria.
            </EmptyStateBody>
            <EmptyStateSecondaryActions>
              <Button variant="link" onClick={() => onDelete(null)}>
                Clear all filters
              </Button>
            </EmptyStateSecondaryActions>
          </EmptyState>
        </Bullseye>
      )}
    </React.Fragment>
  );
};

export default DomainExplorerTable;
