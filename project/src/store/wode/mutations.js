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
  add(state){
   this.state.entities.filter(num => id == num.foods[0].specfoods[0].food_id)[0].foods[0].specfoods[0].count++
   this.state.newshop = this.state.entities.filter(num => num.foods[0].specfoods[0].count != 0)
   var sumValue = 0;
   for (let i = 0; i < this.state.newshop.length; i++) {
       sumValue += this.state.newshop[i].foods[0].specfoods[0].price * this.state.newshop[i].foods[0].specfoods[0].count;
   }
   this.state.price = sumValue
  }

  
}
