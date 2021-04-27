<template>
  <div class="ant-row-flex ant-row-flex-center comm-main">
    <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-18">
        <slot></slot>
    </div>
    <div class="ant-col comm-right ant-col-xs-0 ant-col-sm-0 ant-col-md-6">
      <div class="author-div comm-box">
        <div>
          <span class="ant-avatar ant-avatar-circle ant-avatar-image my-image">
            <img src="../assets/author.png" />
          </span>
        </div>
        <div class="author-introduction">潘璞</div>
        <div class="slogn">一个眼袋比年龄大的前端开发工程师。</div>
        <div class="author-tag">
            <span class="ant-tag ant-tag-green">6年经验</span>
            <span class="ant-tag ant-tag-geekblue">代码爱好者</span>
            <span class="ant-tag ant-tag-blue">游戏达人</span>
            <span class="ant-tag ant-tag-magenta">宅</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style>
.comm-main {
  margin-top: 0.5rem !important;
  max-width: 1100px;
  margin: 0 auto;
}
.comm-box {
  background-color: #fff;
  margin-left: 0.5rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  border: 1px solid #eee;
}
.author-div {
  text-align: center;
  padding: 1rem !important;
}
.ant-avatar > img{
    width: 270px;
    margin-left: -50px;
}
.my-image {
  width: 150px;
  height: 150px;
  line-height: 150px;
  font-size: 18px;
}
.slogn {
  height: 40px;
  color: #999;
}
.author-div div {
  margin-bottom: 1rem;
}
.author-tag {
  line-height: 27px;
}
</style>