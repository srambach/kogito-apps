import React from 'react';
import {
  Nav,
  NavList,
  NavItem,
  InjectedOuiaProps,
  withOuiaContext
} from '@patternfly/react-core';
import { PageLayout, ouiaAttribute } from '@kogito-apps/common';
import { Redirect, Route, Link, Switch } from 'react-router-dom';
import taskConsoleLogo from '../../../static/taskConsoleLogo.svg';
import DataListContainerExpandable from "../DataListContainerExpandable/DataListContainerExpandable";
import DataListContainer from "../DataListContainer/DataListContainer";
import {Location, History} from 'history'

interface IOwnProps {
  location: Location,
  history: History
}
const PageLayoutComponent: React.FC<IOwnProps & InjectedOuiaProps> = ({
  ouiaContext,
  ...props
}) => {
  const { pathname } = props.location;

  const PageNav = (
    <Nav aria-label="Nav" theme="dark" css="">
      <NavList>
        <NavItem isActive={pathname === '/UserTasks'}>
          <Link to="/UserTasks"
            {...ouiaAttribute(ouiaContext, "data-ouia-navigation-name", "user-tasks")}
          >User Tasks</Link>
        </NavItem>
        <NavItem isActive={pathname === '/UserTasksFilters'}>
          <Link to="/UserTasksFilters"
            {...ouiaAttribute(ouiaContext, "data-ouia-navigation-name", "user-tasks-filters")}>User tasks with filters</Link>
        </NavItem>
      </NavList>
    </Nav>
  );

  const BrandClick = () => {
    props.history.push('/');
  };

  return (
    <PageLayout
      PageNav={PageNav}
      BrandSrc={taskConsoleLogo}
      BrandAltText="Task Console Logo"
      BrandClick={BrandClick}
    >

      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/UserTasks" />}
        />
        <Route exact path="/UserTasks" component={DataListContainerExpandable} />
        <Route exact path="/UserTasksFilters" component={DataListContainer} />
      </Switch>
    </PageLayout>
  );
};

export default withOuiaContext(PageLayoutComponent);
