<template>
  <div id="app">
    <my-header></my-header>
    <my-container>
      这是我的个人主页
    </my-container>
    <my-footer></my-footer>
    <router-view class="full-screen" />
  </div>
</template>

<script>
import myHeader from "./components/Header";
import myContainer from "./components/Container";
import myFooter from "./components/Footer";
export default {
  name: "App",
  components: {
    myHeader,
    myContainer,
    myFooter
  },
};
</script>

<style>
body {
  background-color: #f4f5f5;
}
.full-screen {
  width: 100%;
  height: 100%;
}
</style>
