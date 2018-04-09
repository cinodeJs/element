<template>
  <el-table
    :data="tableData4"
    max-height="250">
    <el-table-column
      fixed
      prop="name"
      label="名字"
      width="150">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.row)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData4: []
      }
    },
    watch:{
     '$route'(){
       this.$http.post('http://localhost:8000',{status:this.$route.params.id},{emulateJSON:true}).then(e=>this.tableData4=e.body)
     }
   },
    created(){
      this.$http.post('http://localhost:8000',{status:this.$route.params.id},{emulateJSON:true}).then(e=>this.tableData4=e.body)

    },
    methods:{
      deleteRow(e){
        this.$http.post('http://localhost:8000/del',{id:e.id},{emulateJSON:true}).then(e=>e.id=e.body)
        this.$http.post('http://localhost:8000',{status:this.$route.params.id},{emulateJSON:true}).then(e=>this.tableData4=e.body)
      }
      

    }
  }
</script>


