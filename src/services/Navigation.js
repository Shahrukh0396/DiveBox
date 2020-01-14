import {NavigationActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}
function goBack(params) {
  _navigator.dispatch(
    NavigationActions.back({
      // routeName,
      params,
    }),
  );
}
function push(routeName, params) {
  _navigator.push({
    routeName,
    params,
  });
}

function replace(routeName, params) {
  _navigator.dispatch(
    NavigationActions.replace({
      routeName,
      params,
    }),
  );
}
// add other navigation functions that you need and export them

export default {
  navigate,
  replace,
  setTopLevelNavigator,
  goBack,
  _navigator,
  push,
};
