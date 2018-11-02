let getters = {
   api(state){
    let menu =
    "https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+state.s1; 
    //  state.s1等于vue的data
    this.$http.get(menu).then(data => {
        state.entities = data.data;
      });
   },
   in(state){
     return state.inde
   }
};
export  {getters}
