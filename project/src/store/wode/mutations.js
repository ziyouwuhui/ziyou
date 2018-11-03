export default {
  zihe(state, n) {
    state.count = n;
  },
  //订单更新 
updatdallRest(state, newvaluerest) {
    state.allRest.push(newvaluerest);
    console.log(111,state.allRest);
    // console.log(11, state.s11);
  },
  arrs(state, n) {
    state.meNu.push(n);
  },
  //排序 
  in(state, n) {
    state.inde = n;
  },
  //添加城市地址 
  updateAddress(state, newAddress) {
    state.address = newAddress;
  },
  updateAllprice(state, newAllprice){
    state.allPrice = newAllprice;
  },
  allNewaddress(state,a){
    state.addAddress.push(a)
  },
  newResulr_li(state,newAesulr_li){
    state.resulr_li = newAesulr_li;
    console.log('lilili222222222222222222222222222222222222222222222222',state.resulr_li)
  }
  
  
}
