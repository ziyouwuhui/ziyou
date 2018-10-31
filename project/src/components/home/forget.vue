<template>
    <div class="restContainer">
      <header class="head_top">
        <div class="head_goback">
          <span @click="change" class="icon_left">&lt;</span>
        </div>
        <div class="title_head ellipsis">
          <span class="title_text">重置密码</span>
        </div>
      </header>
      <form action="" class="restForm">
        <div class="input_container">
          <input type="text" placeholder="账号" maxlength="11" v-model="username">
        </div>
        <div class="input_container">
          <input type="text" placeholder="旧密码" v-model="oldpass">
        </div>
        <div class="input_container">
          <input type="text" placeholder="请输入新密码" v-model="newpass">
        </div>
        <div class="input_container">
          <input type="text" placeholder="请确认密码" v-model="confirmpass">
        </div>
        <div class="input_container">
          <input type="text" placeholder="验证码" maxlength="4" v-model="captchacode">
          <div class="img_change_img">
            <div class="img_code">
              <img @click="getCode()" :src="codeimg&&codeimg" alt="">
            </div>
            <div class="change_img" @click="getCode()">
              <p>看不清</p>
              <p>换一张</p>
            </div>
          </div>
        </div>
      </form>
      <div class="login_container" @click="update()">确认修改</div>
      <div class="alet_container" id="alcontainer">
        <div class="tip_text_container">
            <div class="tip_icon">
                <span class="span1"></span>
                <span class="span2"></span>
            </div>
            <p class="tip_text">{{msg}}</p>
            <div class="confrim" @click="confirm()">确认</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "forget",
        data(){
          return{
            codeimg:'',
            username:'',
            oldpass:'',
            newpass:'',
            confirmpass:'',
            captchacode:'',
            msg:''
          }
        },
        created(){
          this.getCode();
          this.update();
        },
        methods:{
          getCode(){
            let errshow = document.getElementById('alcontainer');
            let url1 = "https://elm.cangdu.org/v1/captchas";
            this.$http({
              method:'post',
              url:url1,
              withCredentials: true
            }).then((data)=>{
              if(data.data.status != 1){
                errshow.style.display = "block";
                this.msg = data.data.message;
              }
              this.codeimg = data.data.code;
            });
          },
          update(){
            let errshow = document.getElementById('alcontainer');
            let apir = "https://elm.cangdu.org/v2/changepassword";
            this.$http({
              method: "post",
              url:apir,
              withCredentials: true,
              data:{
                username:this.username,
                oldpassWord:this.oldpass,
                newpassword:this.newpass,
                confirmpassword:this.confirmpass,
                captcha_code:this.captchacode
              }
            }).then((res)=>{
                if(res.data.status == 0){
                  errshow.style.display = "block";
                  this.msg = res.data.message;
                }else if(res.data.status == 1){
                  errshow.style.display = "block";
                  this.msg = res.data.success;
                }
            });
          },
          confirm(){
            let errshow = document.getElementById('alcontainer');
            errshow.style.display = "none";
          },
          change(e){
            this.$router.go(-1);
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
    line-height: 0.53rem;
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
  .img_code img{
    width: .6rem;
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
