<template>
  <div class="login-bg" >
    <div class="login-content">
      <div class="layout-logo-login"></div>
      <Form ref="formSignIn" :model="formSignIn" :rules="ruleCustom" :label-width="80">
          <Form-item label="用户名" prop="userName">
              <Input type="text" v-model="formSignIn.userName"></Input>
          </Form-item>
          <Form-item label="店铺名称" prop="storeName">
              <Input type="text" v-model="formSignIn.storeName" ></Input>
          </Form-item>
          <Form-item label="输入密码" prop="passwd">
              <Input type="password" v-model="formSignIn.passwd"></Input>
          </Form-item>
          <Form-item label="确认密码" prop="passwdCheck">
              <Input type="password" v-model="formSignIn.passwdCheck"></Input>
          </Form-item>
          <Form-item label="QQ号" prop="qqMumber">
              <Input type="text" v-model="formSignIn.qqMumber"></Input>
          </Form-item>
          <Form-item label="Email" prop="email">
              <Input type="text" v-model="formSignIn.email"></Input>
          </Form-item>
          <Form-item label="手机号" prop="phone">
              <Input type="text" v-model="formSignIn.phone"></Input>
          </Form-item>
          <Form-item label="验证码" prop="code">
              <Input type="text" v-model="formSignIn.code"></Input>
          </Form-item>
          <Form-item label="手机验证码" prop="phoneCode">
              <Input type="text" v-model="formSignIn.phoneCode" ></Input>
          </Form-item>
          <Form-item>
              <Button type="primary" @click="handleSubmit('formSignIn')">注册</Button>  </Form-item>
      </Form>
    </div>
  </div>
</template>
<script>
    export default {
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formSignIn.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formSignIn.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formSignIn.passwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                // 模拟异步验证效果
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };

            return {
                formSignIn: {
                    userName:'',
                    storeName:'',
                    passwd: '',
                    passwdCheck: '',
                    qqMumber:'',
                    email:'',
                    phone:'',
                    code:'',
                    phoneCode:''
                },
                ruleCustom: {
                    userName:[
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    storeName:[
                        { required: true, message: '请填写店铺名称', trigger: 'blur' }
                    ],
                    passwd: [
                        { required: true,validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { required: true,validator: validatePassCheck, trigger: 'blur' }
                    ],
                    qqMumber:[
                      { required: true, message: '请填写QQ号码', trigger: 'blur' }
                    ],
                    email:[
                      { required: true, message: '请填写正确格式的Email', trigger: 'blur' }
                    ],
                    phone:[
                      { required: true, message: '请填写正确的手机号', trigger: 'blur' }
                    ],
                    code:[
                      { required: true, message: '请填写验证码', trigger: 'blur' }
                    ],
                    phoneCode:[
                      { required: true, message: '请填写手机验证码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>
<style media="screen">
  .login-bg{
    background-color: #3091f2;
    width: 100%;
    padding-top: 120px;
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
    width: 600px;
    padding: 16px 130px 6px;

    background-color: #fff;
    margin:0px auto ;
    border-radius:6px;
    box-shadow: 0px 0px 12px rgba(0,0,0,0.45)
  }
</style>
