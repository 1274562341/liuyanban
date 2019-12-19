<template>
	<div>
	<el-container>
		  <div id="scrolldIV" style="width: 780px;height: 680px;overflow:auto;padding-bottom: 12px;justify-content: space-between;">
		  		<ul class="list-group" style="padding-bottom: 30px;">
				  <li  class="list-group-item" v-for="lts in tableData" >
				    <span class="badge">{{lts.name}}</span>
				    {{lts.comment}}
				  </li>
		  		</ul>
		 </div>
	 

	</el-container>
	 <el-footer style="width: 78%;">
	 	<!-- <input style="height: 40px;margin-top: 10px;width: 80%;" type="text" v-model="comment"> -->
	 	   <el-input placeholder="请输入内容" v-model="comment"  prefix-icon="el-icon-search" clearable> </el-input>
	 	 <el-button @click.native='add' style="height: 40px;margin-top: 10px;">Bui~~~~</el-button>
	 </el-footer>
	 </div>
			
</template>

<script>
	import qs from 'qs'
	 export default {
      data() {
        return {
			tableData:[],
			comment:'',
        }
      },
	  methods:{
		  getlts(){
			  const loading = this.$loading({
			           lock: true,
			           text: 'Loading',
			           spinner: 'el-icon-loading',
			           background: 'rgba(0, 0, 0, 0.7)'
			         });
		  		  this.$axios.get('http://127.0.0.1:1234/api/find').then(result=>{
					  if(result.data.err_code == 200){
						  setTimeout(() => {
							 this.tableData = result.data.message
						    loading.close();
						  }, 3000);
					  }else{
						  setTimeout(() => {
						    loading.close();
							alert('数据获取失败')
						  }, 10000);
					  }
		  		  })
	  },
	  add(){
		  var now = new Date();
		  var div = document.getElementById('scrolldIV');
	  //var data = qs.stringify({"comment":this.comment});
	    var comment = qs.stringify({"comment":this.comment});
	    this.$axios.post('http://127.0.0.1:1234/api/add/',comment).then((res)=>{
	         console.log(res)
			 this.$emit('getcomment',this.comment)
			 this.$axios.get('http://127.0.0.1:1234/api/find').then(result=>{
			 this.tableData = result.data.message
			 this.comment = ''
			 })
	     })
		 div.scrollTop = div.scrollHeight;
	  }
    },
	created() {
		this.getlts()
	}}
</script>
<style>
.el-footer {
    background-color: #F2F6FC;
    color: #333;
    text-align: center;
    line-height: 60px;
	display: flex;
	justify-content: space-between;
  }
</style>
