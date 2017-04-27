

/*這邊集中管理 router 導向到的 Components*/

import Index from '../component/index';
import Project from '../component/project';
// 傳入的 store 可以方便在這邊做middleware的功能



export default ( _store ) => ({
  index: {
    path: '/',
    components: Index,
    onEnter: ()=>{console.log(_store)}
  },
  project: {
    path: '/project',
    components: Project,
    onEnter: ()=>{console.log(_store)}
  }
  // childRouteExample: {
  //   path: '/childRouteExample',
  //   components: '{childRouteExample Temple}',
  //   indexRoute: { component: 'childRouteExample index component' },
  //   childRoutes: [
  //     {
  //       path: 'foo', // route display => http://localhost/childRouteExample/foo
  //       components: '{foo component}',
  //       onEnter: (location, replaceWith) => {  },
  //       onLeave: () => {  }
  //     }
  //   ]
  // }
});
