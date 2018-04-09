<template>
  <div id="app">
    <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu> -->
<div class="line"></div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1"><router-link to="/1">1705A</router-link></el-menu-item>
  <el-menu-item index="2"><router-link to="/2">待末班</router-link></el-menu-item>
  <el-menu-item index="3"><router-link to="/3">确认末班</router-link></el-menu-item>
  
</el-menu>
    <router-view/>



<el-button type="text" @click="dialogFormVisible = true">点击添加内容</el-button>

<el-dialog title="添加" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="名字" :label-width="formLabelWidth">
     <input type="text" v-model="form.name">
    </el-form-item>
    <el-form-item label="性别" :label-width="formLabelWidth">
     <input type="text" v-model="form.sex">
    </el-form-item>
    <el-form-item label="状态" :label-width="formLabelWidth">
      <input type="text" v-model="form.status">
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="add">确 定</el-button>
  </div>
</el-dialog>




</div>


</template>


<script>
export default {
  data() {
      return {

        activeIndex2: this.$route.params.id,

        gridData: [],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
  methods: {



    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      
    },
    add:function(e){
        this.dialogFormVisible=false;
        this.$http.post('http://localhost:8000/add',{name:this.form.name,sex:this.form.sex,status:this.form.status},{emulateJSON:true}).then(e=>this.gridData=e.body)
      }
  },
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
