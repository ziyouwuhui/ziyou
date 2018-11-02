export default {
  zihe(state, n) {
    state.count = n;
  },
  s1(state, n) {
    state.s11 = n;
    // console.log(11, state.s11);
  },
  s2(state, n) {
    state.s12 = n;
  },
  arrs(state, n) {
    state.meNu = n;

  },
  in(state, n) {
    state.inde = n;
  },
  updateAddress(state, newAddress) {
    state.address = newAddress;
  },
  updateAllprice(state, newAllprice){
    state.allPrice = newAllprice;
  }
 

  
}
