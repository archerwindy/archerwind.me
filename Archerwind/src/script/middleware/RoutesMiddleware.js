

/*這邊集中管理 router 導向到的 Components*/

import Index from '../component/index';
import Giftpacker from '../component/project/giftpacker';
import Giftpack from '../component/project/giftpack';
import Dailybin from '../component/project/dailybin';
import Iishare from '../component/project/iishare';
// 傳入的 store 可以方便在這邊做middleware的功能



export default ( _store ) => ({
  index: {
    path: '/',
    components: Index,
    onEnter: ()=>{console.log(_store)}
  },
  giftpacker: {
    path: '/project/giftpacker',
    components: Giftpacker,
    onEnter: ()=>{console.log(_store)}
  },
  giftpack: {
    path: '/project/giftpack',
    components: Giftpack,
    onEnter: ()=>{console.log(_store)}
  },
  dailybin: {
    path: '/project/dailybin',
    components: Dailybin,
    onEnter: ()=>{console.log(_store)}
  },
  iishare: {
    path: '/project/iishare',
    components: Iishare,
    onEnter: ()=>{console.log(_store)}
  }
});
