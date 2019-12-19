<template>
  <div id="app">
    <div class="main">
<el-container>
  <el-aside width="60%">
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span v-if="this.list == ''">{{this.message.text}}</span>
	<span v-else>aaaaa</span>
  </div>
</el-card>
     <img class="dm" src="./components/imgs/dm.gif" alt="">
  </el-aside>
  <el-container>
    <el-header>

<el-menu  style="color: white;font-weight: bold;" class="el-menu-demo" mode="horizontal"  background-color="#545c64">
  <el-menu-item index="1"><i class="el-icon-tickets"></i><router-link style="text-decoration: none;" to="/Lts">聊天室~</router-link></el-menu-item>
  <el-menu-item index="2"><i class="el-icon-tickets"></i><router-link style="text-decoration: none;" to="/Fkui">问题反馈</router-link></el-menu-item>
  <el-menu-item index="3"><i class="el-icon-edit"></i><router-link style="text-decoration: none;" to="/My">个人信息</router-link></el-menu-item>
</el-menu>

    </el-header>
    <el-main style="background-color: #E9EEF3;color: #333;text-align: left;height: 600px;	padding: 0;	margin: 0;overflow:hidden;width: 1000px;">
		<router-view></router-view>
	</el-main>
    
  </el-container>
</el-container>
    </div>
  </div>
</template>

<script>
	import Lts from './components/Lts.vue'
export default{
  data(){
    return{
      message:{text:'当前还没有人发言！！'},
      list:[], 
    }
  },
  methods:{
	getcomment(comment){
		console.log(comment)
	}
	  }
  }
  
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  overflow-x: hidden;
}
.main{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  height: 800px;
}

  .el-header{
    background-color:#545c64 ;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #FCFCFC;
    color: #333;
    text-align: center;
    height: 800px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .dm{
    width: 480px;
    height: 650px;
    margin-top: 20px;
  }
  .text {
    font-size: 14px;
  }
  .box-card {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    height: 50px;
    margin-top: 20px;
    text-align: left;
    line-height: 20px
  }
</style>
