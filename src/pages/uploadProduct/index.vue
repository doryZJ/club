<template>
  <div class="uploadProductWrapper">
    <div class="uploadProduct">
      <div class="title">
        <div class="cloumn">
          <div class="require">*</div>
          <input type="text" placeholder="点此输入标题">
        </div>
      </div>
      <div class="desc">
        <div class="cloumn">
          <div class="require">*</div>
          <input type="text" placeholder="说说你的拍摄心得、经历体会、修图技巧">
        </div>
      </div>
      <div class="uploadBox">
        <div class="upload">
          +
        </div>
      </div>
    </div>
    <div class="buttonBox">
      <div class="btnPublish">发布</div>
    </div>
    <!-- <div class="addBtn">
      <img src="/static/images/make_03.png" alt="">
    </div>
     <div class="makeBox" v-show="isOpen">
       <div class="makeItem" @click="sendMessage">
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
     </div> -->
  </div>
</template>

<script>
import sendMessage from '../../api/makePicture';

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
    sendMessage() {
      console.warn('111');
      sendMessage();
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
  .uploadProductWrapper {
    .uploadProduct {
      padding: 15rpx;
      .title {
        margin-top: 30rpx;
        width: 100%;
        input {
          font-size: 16px;
        }
      }
      .desc {
        margin-top: 30rpx;
        width: 100%;
        input {
          font-size: 28rpx;
        }
      }
      .uploadBox {
        margin-top: 70rpx;
        width: 320rpx;
        height: 320rpx;
        border: 1px solid #ccc;
        background: #f6f6f6;
        text-align: center;
      }
    }

    .cloumn {
      display: inline-block;
      .require {
        display: inline-block;
        font-size: 28rpx;
        color: #e5bb4f;
        vertical-align: middle;
      }
      input {
        display: inline-block;
        vertical-align: middle;
        margin-left: 30rpx;
      }
    }

    .buttonBox {
      border: 1px solid #efefef;
      padding: 30rpx 30rpx;
      width: 100%;
      box-sizing: border-box;
      position: fixed;
      bottom: 0;
      .btnPublish {
        background: #f4bc45;
        height: 100rpx;
        width: 100%;
        border-radius: 10rpx;
        text-align: center;
        line-height: 100rpx;
      }
    }

    // .header {
    //   text-align: center;

    //   .title {
    //     font-size: 32rpx;
    //     color: #333;
    //   }
    //   .desc {
    //     font-size: 28rpx;
    //     color: #333;
    //   }
    // }
    // .addBtn {
    //   text-align: center;
    //   img {
    //     width: 40rpx;
    //     height: 40rpx;
    //     display: inline-block;
    //   }
    // }
    // .makeBox {
    //   display: flex;
    //   padding: 20rpx 50rpx;
    //   border-radius: 45rpx;
    //   border: 1px solid #efefef;
    //   box-shadow: 0 0 5px #fbfbfc;
    //   width: 330rpx;
    //   height: 82rpx;

    //   .makeItem {
    //     flex: 1;
    //     text-align: center;

    //     img {
    //       width: 38rpx;
    //       height: 38rpx;
    //       display: block;
    //     }

    //     span {
    //       font-size: 28rpx;
    //       line-height: 28rpx;
    //       color: #212121;
    //       display: inline-block;
    //     }
    //   }
    // }
  }
</style>
