<template>
  <div>
    <p>当前位置：通讯信息</p>
    <img :src="header" />
    <input type="text" />
    <button>搜索</button>
    <span>机构选择：</span>
    <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
    </select>
  </div>
</template>

<script>
export default {
    data(){
        return{
            header: require("@/assets/image/header.jpg"),
        }
    },
};
</script>

<style scoped>
</style>