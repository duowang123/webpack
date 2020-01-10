<template>
  <section class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="企业编号" prop="id">
        <el-input
          type="text"
          v-model="ruleForm.id"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="userName">
        <el-input
          type="text"
          v-model="ruleForm.userName"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input
          type="passWord"
          v-model="ruleForm.passWord"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登陆</el-button
        >
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        userName: '',
        passWord: '',
        id: ''
      },
      rules: {
        passWord: [{ validator: this.validatepassWord, trigger: 'blur' }],
        userName: [{ validator: this.validateUserName, trigger: 'blur' }],
        id: [{ validator: this.validateId, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    },
    validateUserName(rule, value, callback) {
      if (!value) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    },
    validatepassWord(rule, value, callback) {
      if (!value) {
        callback(new Error('输入密码'))
      } else {
        callback()
      }
    },
    validateId(rule, value, callback) {
      if (!value) {
        callback(new Error('请输入企业编号'))
      } else {
        callback()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 500px;
  margin: 0 auto;
  position: relative; /*脱离文档流*/
  top: 20%;
}
</style>
