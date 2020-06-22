<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 bg_blue _header"></div>
      <div class="col-lg-12 position-relative">
        <div class="col-lg-12 position-absolute header_hanging">
          <div class="position-relative w-100 h-100">
            <div class="push_header">
              <div
                class="wrapper_img position-absolute rounded-circle m-auto"
              ></div>
            </div>
            <p class="fs-32 font-weight-bold">Kopi Mamah Eny</p>
            <p class="t-grey fs-12 font-weight-bold">Kopi Mamah Eny</p>
            <div class="mt-5">
              <div class="btn btn-green font-weight-bold fs-18 py-2">
                <i class="fa fa-whatsapp mr-2"></i>+62 813-8000-5151
              </div>
              <br />
              <router-link
                tag="div"
                :to="{ name: 'Store' }"
                class="btn btn-blue-calm font-weight-bold fs-16 py-2 px-4 mt-2"
              >
                <i class="fa fa-shopping-bag mr-2"></i>Start Shopping
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected_menu: "store"
    };
  }
};
</script>
<style scoped>
.bg_blue {
  background: #01176a;
}
._header {
  height: 85px;
}
.header_hanging {
  background: white;
  border-top-right-radius: 8px;
  top: -4px;
  left: 0;
  height: 400px;
  border-top-left-radius: 8px;
}
.wrapper_img {
  width: 180px;
  height: 180px;
  border: 7px solid #eceff1;
  background: #19202a;
  left: 0;
  right: 0;
  top: -62px;
}
.push_header {
  height: 35%;
  width: 100%;
  background: white;
}
</style>
