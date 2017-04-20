

import routesMiddleware from '../middleware/RoutesMiddleware';


export default ( store ) => {
  const routesGroup = routesMiddleware( store );
  return {
    childRoutes: [
      routesGroup.index
      // RoutesGroup.childRouteExample
    ]
  };
}
