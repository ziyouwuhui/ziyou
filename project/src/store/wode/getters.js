let getters = {
   api(state){
    let menu =
    "https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+state.s1; 
    //  state.s1等于vue的data
    this.$http.get(menu).then(data => {
        state.entities = data.data;
        console.log(state.meNu,'11212121')
      });
   },
   in(state){
     return state.inde
   }
};
export  {getters}
