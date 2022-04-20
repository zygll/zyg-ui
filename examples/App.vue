<template>
  <div id="app">
    <button @click="visible = true" >显示</button>
    <ZygConfirm  :visible.sync="visible">
      <template #title> 
        <!-- #和v-slot一样 -->
        <h1>温馨提示</h1>
      </template>
      今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好
      <template #footer>
        <button @click="visible = false">取消</button>
        <button class="--primary" @click="visible = false">确认</button>
      </template>
    </ZygConfirm>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      visible:false
    }
  }
}
</script>

<style >
*{
  margin: 0;
  padding: 0;
}
</style>
<style scoped lang="scss">
 button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  }
</style>
