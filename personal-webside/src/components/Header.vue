<template>
  <div id="header" class="header">
    <div class="header-center">
      <div class="ant-row-flex ant-row-flex-center">
        <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-11">
          <span class="header-logo">潘璞</span>
          <span class="header-txt">一个眼袋比年龄大的前端开发工程师</span>
        </div>

        <div class="ant-col memu-div ant-col-xs-0 ant-col-sm-0 ant-col-md-13">
          <div class="ant-row-flex">
            <div class="ant-col ant-col-xs-0 ant-col-sm-0 ant-col-md-4">
              <a href="/"><a-icon type="home" /> 个人主页</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<style>
.header {
  background-color: #fff;
  padding: 0.4rem;
  overflow: hidden;
  height: 3.2rem;
  border-bottom: 1px solid #eee;
}
.header-center {
  max-width: 1100px;
  margin: 0 auto;
}
.header-logo {
  font-size: 1.4rem;
  text-align: left;
  color: #1890ff;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}
.header-txt {
  font-size: 0.6rem;
  color: #999;
  display: inline-block;
  padding-left: 0.3rem;
}
.memu-div {
  padding-top: 10px;
}
.memu-div a {
  color: #999 !important;
  font-size: 0.9rem;
}
</style>