<template>
    <div class="loginContainer">
      <header class="head_top">
        <div class="head_goback">
          <router-link to="/mstie" class="icon_left">&lt;</router-link>
        </div>
        <div class="title_head ellipsis">
          <span class="title_text">密码登录</span>
        </div>
      </header>
      <form action="" class="loginForm">
        <div class="input_container">
          <input type="text" placeholder="账号" v-model="username">
        </div>
        <div class="input_container">
          <input :type="pwdType" placeholder="密码" v-model="password">
          <div class="button_switch" id="button_switch">
            <div class="circle_button" id="circle_button" @click="aclass"></div>
            <span>abc</span>
            <span>...</span>
          </div>
        </div>
        <div class="input_container">
          <input type="text" placeholder="验证码" maxlength="4" v-model="codeNumer">
          <div class="img_change_img">
            <div class="img_code">
              <img @click="getCode()" :src="code&&code" alt="">
            </div>
            <div class="change_img" @click="getCode()">
              <p>看不清</p>
              <p>换一张</p>
            </div>
          </div>
        </div>
      </form>
      <p class="login_tips">
        温馨提示：未注册过的账号，登录时将自动注册
      </p>
      <p class="login_tips">
        注册过的用户可凭账号密码登录
      </p>
      <div class="login_container" @click="login()">登录</div>
      <router-link to="/forget" class="to_forget">重置密码？</router-link>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
          return{
            on:true,
            code: "",
            username: "",
            password: "",
            codeNumer: "",
            pwdType:'password'
          }
        },
        created(){
          this.getCode();
        },
        methods:{
          aclass(){
            let divf = document.getElementById("button_switch");
            let div = document.getElementById("circle_button");
            // console.log(divf,div);
            if (this.on){
              divf.classList.add("change_to_text");
              div.classList.add("trans_to_right");
              this.on = false;
            }else {
              divf.classList.remove("change_to_text");
              div.classList.remove("trans_to_right");
              this.on = true;
            }
            this.pwdType = this.pwdType === 'password' ? 'text' : 'password';
          },
          getCode(){
            let url = "https://elm.cangdu.org/v1/captchas";
            this.$http({
              method:'post',
              url:url,
              //https://developer.mozilla.org/zh-CN/docs/Web/API/Request/credentials
              //用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies。
              //默认为false
              withCredentials: true
            }).then((data)=>{
              // console.log(data.data);
              if(data.data.status != 1){
                alert('验证码无效!');
              }
              this.code = data.data.code;
            });
          },
          login(){
            let api = "https://elm.cangdu.org/v2/login";
            this.$http({
              method: "post",
              url:api,
              withCredentials: true,
              data:{
                username:this.username,
                password:this.password,
                captcha_code:this.codeNumer
              }
            }).then((res)=>{
                // console.log('--->',res);
              if(res.data.status == 0){
                alert(res.data.message);
              }
              // this.$router.push({name:"person",query:res.data});
            });
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
    top: .25rem;
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
  .loginForm{
    background-color: white;
    margin-top: 0.14rem;
  }
  .loginForm .input_container{
    padding: .14rem .18rem;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    justify-content: space-between;
  }
  .loginForm .input_container input{
    font-size: .16rem;
    color: #666;
  }
  .img_code img{
    width: .6rem;
  }
  .login_tips{
    color: red;
    font-size: .13rem;
    padding: .093rem .14rem;
    line-height: .118rem;
  }
  .login_container{
    background-color: #4cd964;
    font-size: .16rem;
    color: white;
    border: 1px;
    padding: .157rem 0;
    text-align: center;
    margin: 0 .117rem .234rem;
    border-radius: .05rem;
  }
  .to_forget{
    font-size: .13rem;
    color: #3b95e9;
    float: right;
    margin-right: .071rem;
  }
  .button_switch{
    background-color: #ccc;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    width: .375rem;
    height: .18rem;
    padding: 0 .046rem;
    border: 1px;
    border-radius: .5rem;
    position: relative;
  }
  .button_switch .circle_button{
    transition: all .3s;
    position: absolute;
    top: -.07rem;
    left: -.07rem;
    z-index: 1;
    width: .3rem;
    height: .3rem;
    background-color: #f1f1f1;
    border-radius: 50%;
  }
  .button_switch span{
    font-size: .1rem;
    color: #fff;
    transform: translateY(.05rem);
    line-height: .09rem;
  }
  .change_to_text{
    background-color: #4cd964;
  }
  .button_switch .trans_to_right{
    transform: translateX(.3rem);
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
</style>
