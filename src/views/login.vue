<template>
  <div class="login-bg" :style="{minHeight:windowHeight + 'px'}">
    <div class="login-content">
      <div class="layout-logo-login"></div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" id='loginForm'>
        <Form-item prop="userName">
            <Input type="text" v-model="formInline.userName" placeholder="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="code">
          <Row>
              <Col span="16">
                <Input  v-model="formInline.code"  placeholder="验证码"></Input>
              </Col>
              <Col span="8">
              </Col>
          </Row>

        </Form-item>
        <Form-item>
          <Row>
            <Col span='4'>
              <a href="javascript:;">
                忘记密码
              </a>
            </Col>
          </Row>
          <Row>
            <Col span="15">
                <Button  size="large" type="primary" @click="handleSubmit('formInline')" long>登录</Button>
            </Col>
            <Col span="8" offset="1">
              <router-link to='/signIn'>
                  <Button  size="large" type="dashed" long>注册</Button>
              </router-link>
            </Col>
          </Row>

        </Form-item>
    </Form>
    </div>
  </div>
</template>
<script>
    export default {
      data () {
           return {
               formInline: {
                   userName: '',
                   password: '',
                   code:''
               },
               ruleInline: {
                   userName: [
                       { required: true, message: '请填写用户名', trigger: 'blur' }
                   ],
                   password: [
                       { required: true, message: '请填写密码', trigger: 'blur' },
                       { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                   ],
                   code:[
                      { required: true, message: '请填写验证码', trigger: 'blur' },
                   ]
               }
           }
       },
       methods: {
           handleSubmit(name) {
               this.$refs[name].validate((valid) => {
                   if (valid) {
                      this.$Message.success('提交成功!');
                      this.$store.commit('RECORD_USERINFO',this.formInline)
                      this.$router.push('/guidance/market/overview')
                   } else {
                       this.$Message.error('表单验证失败!');
                   }
               })
           }
       },
       computed:{
         windowHeight(){
           return  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
         }
       }

    }
</script>
<style media="screen">
  .login-bg{
    background-color: #3091f2;
    width: 100%;
    padding-top: 200px;
    padding-bottom: 60px;
  }
  .layout-logo-login{
      width: 290px;
      height: 45px;
      margin: 14px auto 20px;
      background-image: url(../assets/img/logo-1.png);
      background-size: cover;
      border-radius: 3px;

  }
  .login-content{
    width: 380px;
    padding: 16px 44px 6px;
    background-color: #fff;
    margin:0px auto ;
    border-radius:6px;
    box-shadow: 0px 0px 12px rgba(0,0,0,0.45)
  }
  #loginForm .ivu-icon-ios-person-outline:before,
  #loginForm .ivu-icon-ios-locked-outline:before{
    font-size: 14px;
  }
  #loginForm .ivu-input{
    height: 36px;
    line-height: 36px;
    font-size: 14px;
  }
  #loginForm .ivu-btn-large{
    margin-top: 12px;
  }

</style>
