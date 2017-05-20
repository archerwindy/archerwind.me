

import routesMiddleware from '../middleware/RoutesMiddleware';


export default ( store ) => {
  const routesGroup = routesMiddleware( store );
  return {
    childRoutes: [
      routesGroup.index,
      routesGroup.giftpacker,
      routesGroup.giftpack,
      routesGroup.iishare,
      routesGroup.dailybin,
      routesGroup.photography,
      routesGroup.motions
      // RoutesGroup.childRouteExample
    ]
  };
}
