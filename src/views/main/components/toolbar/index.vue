<template>
  <div class="toolbar">
    <!-- 左侧工具条 -->
    <div class="toolbar-left">
      <MenuFolder />
      <BreadCrumb />
    </div>
    <!-- 右侧工具条 -->
    <div class="toolbar-right">
      <!-- 消息通知组件 -->
      <Notification />
      <!-- 用户下拉组件 -->
      <UserSetting :name="name" :portrait="portrait" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import MenuFolder from "./components/menufolder/index.vue";
import BreadCrumb from "./components/breadcrumb/index.vue";
import UserSetting from "./components/usersetting/index.vue";
import Notification from "./components/notification/index.vue";

export default defineComponent({
  name: "toolbar",
  components: {
    MenuFolder,
    BreadCrumb,
    UserSetting,
    Notification,
  },
  setup() {
    const userInfo = reactive({
      name: "马克豚",
      portrait:
        "https://image.immortalboy.cn/public/uploads/2020/06/08/1591604672082466.jpeg",
    });

    return {
      ...toRefs(userInfo),
    };
  },
});
</script>

<style lang="scss" scoped>
.toolbar {
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
  display: flex;
  height: 48px;
  padding: 0;
  margin-left: -1px;
  line-height: 48px;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  .toolbar-left {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .toolbar-right {
    display: flex;
    align-items: center;
  }
}
</style>
