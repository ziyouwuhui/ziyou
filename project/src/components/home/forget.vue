<template>
    <div class="restContainer">
      <header class="head_top">
        <div class="head_goback">
          <router-link to="/login" class="icon_left">&lt;</router-link>
        </div>
        <div class="title_head ellipsis">
          <span class="title_text">重置密码</span>
        </div>
      </header>
      <form action="" class="restForm">
        <div class="input_container">
          <input type="text" placeholder="账号" maxlength="11">
        </div>
        <div class="input_container">
          <input type="text" placeholder="旧密码">
        </div>
        <div class="input_container">
          <input type="text" placeholder="请输入新密码">
        </div>
        <div class="input_container">
          <input type="text" placeholder="请确认密码">
        </div>
        <div class="input_container">
          <input type="text" placeholder="验证码" maxlength="4">
          <div class="img_change_img">
            <div>
              <img @click="getCode()" :src="code&&code" alt="">
            </div>
            <div class="change_img" @click="getCode()">
              <p>看不清</p>
              <p>换一张</p>
            </div>
          </div>
        </div>
      </form>
      <div class="login_container" @click="update()">确认修改</div>
    </div>
</template>

<script>
    export default {
        name: "forget",
        data(){
          return{
            code:''
          }
        },
        created(){
          this.getCode();
        },
        methods:{
          getCode(){
            let url = "https://elm.cangdu.org/v1/captchas";
            this.$http({
              method:'post',
              url:url,
              withCredentials: true
            }).then((data)=>{
              // console.log(data.data);
              if(data.data.status != 1){
                alert('验证码无效!');
              }
              this.code = data.data.code;
            });
          },
          update(){

          }
        }
    }
</script>

<style scoped>
  .head_top{
    background-color: #3190e8;
    width: 100%;
    height: 0.45rem;
  }
  .head_goback{
    left: 0.16rem;
    width: .6rem;
    height: 0.3rem;
    line-height: 0.4rem;
    margin-left: .1rem;
  }
  .title_head{
    position: absolute;
    top: 3.5%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: white;
    text-align: center;
  }
  .title_head span{
    font-weight: 700;
    font-size: 0.2rem;
  }
  .head_goback .icon_left{
    font-size: .34rem;
    color: white;
  }
  .restForm{
    background-color: white;
    margin-top: 0.14rem;
  }
  .restForm .input_container{
    padding: .14rem .18rem;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    justify-content: space-between;
  }
  .restForm .input_container input{
    font-size: .16rem;
    color: #666;
  }
  .img_change_img{
    /*overflow: hidden;*/
  }
  .img_change_img div{
    float: left;
  }
  .img_change_img div:nth-child(1){
    margin-right: .05rem;
  }
  .change_img{
    height: .2rem;
  }
  .change_img p{
    font-size: .12rem;
  }
  .change_img p:nth-child(2){
    margin: .04rem 0;
    color: #3b95e9;
  }
  .login_container{
    background-color: #4cd964;
    font-size: .16rem;
    color: white;
    border: 1px;
    padding: .157rem 0;
    text-align: center;
    margin: .234rem .117rem;
    border-radius: .05rem;
  }
</style>
