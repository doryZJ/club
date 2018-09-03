<template>
  <div class="makeWrapper">
    <div class="header">
      <p class="title">开始制作</p>
      <p class="desc">支持图文视频～</p>
    </div>
    <div class="addBtn">
      <img src="/static/images/make_03.png" alt="">
    </div>
     <div class="makeBox" v-show="isOpen">
       <div class="makeItem">
         <img src="/static/images/make_13.png"/>
         <span>图片</span>
       </div>
       <div class="makeItem">
         <img src="/static/images/make_10.png"/>
         <span>文字</span>
       </div>
       <div class="makeItem">
         <img src="/static/images/make_07.png"/>
         <span>视频</span>
       </div>
     </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isOpen: false,
    };
  },

  components: {
  },

  methods: {
    handleMake() {
      this.isOpen = !this.isOpen;
    },
    bindViewTap() {
      const url = '../logs/main';
      wx.navigateTo({ url });
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo;
            },
          });
        },
      });
    },
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  },
};
</script>

<style lang="less">
  .makeWrapper {
    .header {
      margin-top: 160rpx;
      text-align: center;

      .title {
        font-size: 32rpx;
        color: #333;
      }
      .desc {
        margin-top: 20rpx;
        font-size: 28rpx;
        color: #333;
      }
    }
    .addBtn {
      margin-top: 90rpx;
      text-align: center;
      img {
        width: 40rpx;
        height: 40rpx;
        display: inline-block;
      }
    }
    .makeBox {
      display: flex;
      padding: 20rpx 50rpx;
      border-radius: 45rpx;
      border: 1px solid #efefef;
      box-shadow: 0 0 5px #fbfbfc;
      width: 330rpx;
      height: 82rpx;
      margin: 0 auto;

      .makeItem {
        flex: 1;
        text-align: center;

        img {
          width: 38rpx;
          height: 38rpx;
          display: block;
          margin: 0 auto;
        }

        span {
          font-size: 28rpx;
          line-height: 28rpx;
          color: #212121;
          display: inline-block;
        }
      }
    }
  }
</style>
