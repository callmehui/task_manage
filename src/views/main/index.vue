<template>
  <section class="manage-container">
    <!-- 左侧导航条 -->
    <aside class="nav-container">
      <NavBar :logoImg="logoImg" :logoName="logoName" />
    </aside>
    <!-- 右侧主体内容区域 -->
    <section class="main-container">
      <!-- 顶部工具条 -->
      <Toolbar />
      <!-- 已点击的路由 -->
      <!-- 主题内容区域 -->
      <div class="main-content-container">
        <router-view />
      </div>
    </section>
  </section>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import logoImg from "@/assets/image/logo.svg";
import NavBar from "./components/navbar";
import Toolbar from "./components/toolbar";

export default {
  components: {
    NavBar,
    Toolbar,
  },
  setup() {
    /** logo组件reactive */
    const logo = reactive({
      logoImg: logoImg,
      logoName: "Gan Duty",
    });

    const collapse = ref(false);

    const handleCollapse = () => {
      collapse.value = !collapse.value;
    };

    return {
      ...toRefs(logo),
      collapse,
      handleCollapse,
    };
  },
};
</script>

<style lang="scss" scoped>
.manage-container {
  display: flex;
  color: rgba(0, 0, 0, 0.65);
  .nav-container {
  }
  .main-container {
    flex: 1;
    background-color: #f0f2f5;
    .main-content-container {
      padding: 16px;
    }
  }
}
</style>
