<template>
  <div class="container">
    <div class="col-lg-12 footer_ex py-4">
      <div class="row">
        <div
          class="col-lg-4 col-md-4 col-4 pointer"
          @click="selected_menu = 'home'"
        >
          <router-link
            exact
            :to="{ name: 'Home' }"
            tag="div"
            class="wrapper_bottom_img text-center"
          >
            <img
              class="d-block ml-auto mr-auto mb-1"
              src="@/assets/home.png"
              alt=""
            />
            <span class="fs-12 font-weight-bold">Home</span>
          </router-link>
        </div>
        <div class="col-lg-4 col-md-4 col-4 pointer">
          <router-link
            :to="{ name: 'Store' }"
            tag="div"
            class="wrapper_bottom_img text-center"
          >
            <img
              class="d-block ml-auto mr-auto mb-1"
              src="@/assets/store.png"
              alt=""
            />
            <span class="fs-12 font-weight-bold">Store</span>
          </router-link>
        </div>
        <div class="col-lg-4 col-md-4 col-4 pointer">
          <router-link
            :to="{ name: 'Cart' }"
            class="wrapper_bottom_img text-center"
          >
            <img
              class="d-block ml-auto mr-auto mb-1"
              src="@/assets/cart.png"
              alt=""
            />
            <span class="fs-12 font-weight-bold">Cart</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // selected_menu: this.selected
    };
  },
  props: {
    selected: {
      type: String,
      default: "home"
    }
  }
};
</script>
<style scoped>
.footer_ex {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 14.5%;
  background-color: #263238;
  color: white;
  text-align: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
.wrapper_bottom_img {
  color: rgba(245, 245, 245, 0.6);
}

.router-link-active {
  color: white !important;
}
</style>
