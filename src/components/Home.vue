<template>
  <div>
    <el-row>
      <el-button type="info" @click="loginout">退出</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    loginout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
  },
}
</script>

<style>
</style>