<template>
 <div class="dialog">
    <transition name="fade">
   <div class="model"  v-show="visible" @click.self="close"></div>
   </transition>
    <transition name="zyg">
      <div class="confirm"   v-show="visible" :style="{width,marginTop}">
        <div class="header" v-show="title">
          <slot name="title"
            ><span class="__title">{{ title }}</span></slot
          >
          <div class="close" @click="close"><img src="./assets/close.svg" alt="" /></div>
        </div>
        <div class="content">
          <slot></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
  </transition>
 </div>
</template>

<script>
export default {
  name: "ZygConfirm",
  props: {
    title: {
      type: String,
      default: "提示",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "30%",
    },
    marginTop: {
      type: String,
      default: "10%",
    },
  },

  methods: {
    close() {
      this.$emit("update:visible", false);
    },
  },
  mounted() {
    // this.$destroy()
  },
};
</script>
<style scoped lang="scss">
.fade-enter-active {
  animation: fade 0.5s;
}
.fade-leave-active {
  animation: fade .5s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.zyg-enter-active {
  animation: xz 0.5s;
}
.zyg-leave-active {
  animation: xz1 .5s ;
}
@keyframes xz1 {
  0% {
     transform: rotate(18deg);
    transform-origin: top center;
  }
  50%{
     opacity: 1;
        transform: rotate(0deg);
    transform-origin: top center;
  }
  100% {
    opacity: 0;
        transform: rotate(-18deg);
    transform-origin: top center;
    transform: translateY(200px);
  }
}
@keyframes xz {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
  }
}
.model {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  background: rgb(0 0 0 / 50%);
}
.confirm {
  position: relative;
  margin: 0 auto 50px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  width: 50%;
}
.close {
  position: absolute;
  right: 22px;
  top: 26px;
  font-size: 20px;
  cursor: pointer;
}

.header {
  padding: 20px 20px 10px;
}
.__title {
  line-height: 24px;
  font-size: 18px;
  color: #303133;
}
.content {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}
.footer {
  padding: 10px 20px 20px;
  text-align: right;
  box-sizing: border-box;
}
::v-deep button {
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
  &:first-child {
    margin-right: 10px;
  }
}

::v-deep .--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
</style>
