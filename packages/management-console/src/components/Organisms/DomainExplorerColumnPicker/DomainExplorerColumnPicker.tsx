import React, { useState } from 'react';
import {
  Select,
  SelectOption,
  SelectVariant,
  SelectGroup,
  Button,
  Grid,
  GridItem
} from '@patternfly/react-core';
import { query } from 'gql-query-builder';
import axios from 'axios';

import { useGetPickerQuery } from '../../../graphql/types';

export interface IOwnProps {
  columnPickerType: any;
  setColumnFilters: any;
  setTableLoading: any;
  setDisplayTable: any;
  getQueryTypes: any;
  nullTypes: any;
}

const DomainExplorerColumnPicker: React.FC<IOwnProps> = ({
  columnPickerType,
  setColumnFilters,
  setTableLoading,
  setDisplayTable,
  getQueryTypes
}) => {
  const [selected, setSelected] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [parameters, setParameters] = useState([]);

  const fieldObject: any = {};
  const nullTypes = [null, 'String', 'Boolean', 'Int', 'DateTime'];

  const onSelect = (event, selection) => {
    if (selected.includes(selection)) {
      setSelected(prevState => prevState.filter(item => item !== selection));
    } else {
      setSelected(prevState => [...prevState, selection]);
    }
    filterColumnSelection(event, selection);
  };

  const filterColumnSelection = (event, selection) => {
    const parent = event.nativeEvent.target.parentElement.parentElement.getAttribute(
      'aria-labelledby'
    );
    fieldObject.value = Object.create({ parent });
    fieldObject.value[parent] = [selection];
    setParameters(prevState => [...prevState, fieldObject.value]);
  };
  const onToggle = _isExpanded => {
    setIsExpanded(_isExpanded);
  };

  const getPicker = useGetPickerQuery({
    variables: { columnPickerType }
  });
  async function filterColumn() {
    try {
      await axios
        .post(
          'http://localhost:4000/graphql',
          query({
            operation: columnPickerType,
            fields: parameters
          })
        )
        .then(response => {
          setTableLoading(false);
          setColumnFilters(response.data.data);
          setDisplayTable(true);
          return response;
        });
    } catch (error) {
      return error;
    }
  }

  const data = [];
  !getPicker.loading &&
    getPicker.data.__type &&
    getPicker.data.__type.fields.filter(i => {
      if (i.type.kind !== 'SCALAR') {
        return data.push(i);
      }
    });

  const fetchSchema = option => {
    return (
      !getQueryTypes.loading &&
      getQueryTypes.data.__schema &&
      getQueryTypes.data.__schema.queryType.find(item => {
        if (item.name === option.type.name) {
          return item;
        }
      })
    );
  };

  const childOptions = fields => {
    // return fields;
    if (fields) {
      return fields.map((field, _i) => {
        if (nullTypes.includes(field.type.name)) {
          return <SelectOption key={_i} value={field.name} />;
        } else {
          const m = fetchSchema(field);
          return (
            <SelectGroup key={_i} label={field.name} value={field.name}>
              {m.fields.map((opt, index) => {
                if (nullTypes.includes(opt.type.name)) {
                  return <SelectOption key={index} value={opt.name} />;
                } else {
                  const tem = fetchSchema(opt);
                  return (
                    <SelectGroup key={_i} label={opt.name} value={opt.name}>
                      {childOptions(tem.fields)}
                    </SelectGroup>
                  );
                }
              })}
            </SelectGroup>
          );
        }
      });
    }
  };

  const selectionItems =
    !getPicker.loading &&
    data.map((group, index) => {
      return (
        <SelectGroup label={group.name} key={index}>
          {group.type.fields &&
            group.type.fields.map((item, _index) => {
              if (!nullTypes.includes(item.type.name)) {
                const _v = fetchSchema(item);
                return (
                  <SelectGroup key={_index} label={item.name} value={item.name}>
                    {childOptions(_v.fields)}
                  </SelectGroup>
                );
              } else {
                return <SelectOption key={_index} value={item.name} />;
              }
            })}
        </SelectGroup>
      );
    });

  return (
    <React.Fragment>
      {!getPicker.loading && columnPickerType && (
        <Grid style={{ padding: '16px 16px' }}>
          <GridItem span={5}>
            <Button variant="primary" onClick={filterColumn}>
              Apply Columns
            </Button>
          </GridItem>
          <GridItem span={7}>
            <Select
              variant={SelectVariant.checkbox}
              aria-label="Select Input"
              onToggle={onToggle}
              onSelect={onSelect}
              selections={selected}
              isExpanded={isExpanded}
              placeholderText="Pick Columns"
              ariaLabelledBy="Column Picker dropdown"
              isGrouped
              maxHeight="60vh"
            >
              {selectionItems}
            </Select>
          </GridItem>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default React.memo(DomainExplorerColumnPicker);
