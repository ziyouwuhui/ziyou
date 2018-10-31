<template>
    <div class="loginContainer">
      <header class="head_top">
        <div class="head_goback">
          <span @click="change" class="icon_left">&lt;</span>
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
      <div class="alet_container" id="alcontainer">
        <div class="tip_text_container">
            <div class="tip_icon">
                <span class="span1"></span>
                <span class="span2"></span>
            </div>
            <p class="tip_text">{{msg}}</p>
            <div class="confrim" @click="confrim()">确认</div>
        </div>
      </div>
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
            pwdType:'password',
            msg:''
          }
        },
        created(){
          this.getCode();
        },
        methods:{
          aclass(){
            let divf = document.getElementById("button_switch");
            let div = document.getElementById("circle_button");
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
          //获取验证码方法
          getCode(){
            let errshow = document.getElementById('alcontainer');
            let url = "https://elm.cangdu.org/v1/captchas";
            this.$http({
              method:'post',
              url:url,
              withCredentials: true
            }).then((data)=>{
              if(data.data.status != 1){
                errshow.style.display = "block";
                this.msg = data.data.message;
              }
              this.code = data.data.code;
            });
          },
          // 登录方法
          login(){
            let errshow = document.getElementById('alcontainer');
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
              if(res.data.status == 0){
                errshow.style.display = "block";
                this.msg = res.data.message;
              }
              /*存入本地*/ 
              let user = [{username:this.username,password:this.password}];
              localStorage.setItem('users',JSON.stringify(user));
            });
          },
          change(e){
            this.$router.go(-1);
          },
          confrim(){
            let errshow = document.getElementById('alcontainer');
            errshow.style.display = "none";
          }
        }
    }
</script>

<style scoped>
  #alcontainer{
    display:none;
  }
    .confrim{
    font-size: .2rem;
    color: #fff;
    font-weight: 700;
    margin-top: .2rem;
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: .5rem;
    border: 1px;
    border-bottom-left-radius: .15rem;
    border-bottom-right-radius: .15rem;
  }
  .tip_text{
    font-size: .2rem;
    color: #333;
    line-height: .5rem;
    text-align: center;
    margin-top: .2rem;
    padding: 0 .8rem;
  }
  .tip_icon .span2{
    width: .05rem;
    height: .05rem;
    border: 1px;
    border-radius: 50%;
    margin-top: .1rem;
    background-color: #f8cb86;
  }
  .tip_icon .span1{
      width: .03rem;
      height: .44rem;
      background-color: #f8cb86;
  }
  .tip_text_container .tip_icon {
    width: .78rem;
    height: .78rem;
    border: .045rem solid #f8cb86;
    border-radius: 50%;
  }
  .tip_text_container{
    position: absolute;
    top: 30%;
    left: 15%;
    background-color: #fff;
    border: 1px;
  }
  .tip_text_container, .tip_text_container .tip_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .alet_container{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
  }
  .head_top{
    background-color: #3190e8;
    width: 100%;
    height: 0.57rem;
  }
  .head_goback{
    left: 0.16rem;
    width: .6rem;
    height: 0.3rem;
    line-height: 0.57rem;
    margin-left: .1rem;
  }
  .title_head{
    position: absolute;
    top: .28rem;
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
