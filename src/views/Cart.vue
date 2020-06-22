<template>
  <div class="container bg-grey" style="height:88vh;">
    <div class="row py-3" style="height: 50px">
      <div class="col-8 m-auto text-left pr-0">
        <img src="@/assets/shopping_cart.png" width="20" alt="" class="mr-2" />
        <div class="d-inline-block align-middle" style="line-height:15px;">
          <p class="font-weight-bold mb-0">Your Cart</p>
          <span class="fs-11 t-grey">More details in next step</span>
        </div>
      </div>
      <div class="col-4 m-auto text-right pl-0 position-relative search_app">
        <button
          class="btn btn-orange bb-orange t-orange w-100 fs-12 px-3 font-weight-bold"
        >
          <i class="fa fa-trash mr-1" aria-hidden="true"></i> Empty
        </button>
      </div>
    </div>
    <div v-if="cart.length <= 0" class="row mx-0 my-3">
      <div class="col-12 bg-white text-left radius-12 py-3">
        <img src="@/assets/sad.png" alt="" width="60" />
        <p class="my-2 fs-18 font-weight-bold">
          The Cart is Empty!
        </p>
        <p class="fs-12 t-grey">Looks like you haven't made yout choice yet.</p>
      </div>
    </div>
    <div v-else class="row mx-0 my-3">
      <div class="bg-white col-12 py-2 wrapper_goods mb-4">
        <div class="row">
          <div class="col-4 col-md-3 col-lg-9 text-left">
            <img src="@/assets/product_1.png" alt="" />
          </div>
          <div class="col-8 col-md-9 col-lg-9 text-left">
            <p class="font-weight-s fs-14 mb-0">
              Kopi Susu Cowok
            </p>
            <p class="font-weight-bold mb-0">Rp. 80.000,00</p>
            <p class="fs-12 mb-0">1</p>
            <button
              class="btn btn-blue-calm fs-20 px-3 font-weight-bold w-auto"
            >
              -
            </button>
            <span class="mx-3">3</span>
            <button
              class="btn btn-blue-calm fs-20 px-3 font-weight-bold w-auto"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div class="col-6 px-0 text-left">
        <p class="fs-12 font-weight-bold">Number of items</p>
      </div>
      <div class="col-6 px-0 text-right">
        <p class="fs-12 font-weight-bold">2</p>
      </div>
      <div class="col-6 px-0 text-left">
        <p class="fs-12 font-weight-bold">Sub Total</p>
      </div>
      <div class="col-6 px-0 text-right">
        <p class="fs-14 font-weight-bold">Rp 160.000,00</p>
      </div>
      <div class="col-12 mb-3">
        <div class="row py-3 bt-bb-grey">
          <div class="col-6 px-0 text-left m-auto">
            <p class="fs-12 font-weight-bold mb-0">
              <img
                class="align-middle mr-3"
                src="@/assets/truck.png"
                width="30"
              />
              Delivery Charge
            </p>
          </div>
          <div class="col-6 px-0 text-right">
            <p class="fs-18 font-weight-bold mb-0">Rp 10.000,00</p>
          </div>
        </div>
      </div>
      <div class="col-6 px-0 text-left">
        <p class="fs-20 font-weight-bold">Total</p>
      </div>
      <div class="col-6 px-0 text-right">
        <p class="fs-20 font-weight-bold">Rp 170.000,00</p>
      </div>
      <div class="col-12 text-right px-0 mt-5">
        <router-link
          tag="div"
          :to="{ name: 'Checkout' }"
          class="btn btn-blue fs-14 text-white font-weight-bold"
        >
          Continue
          <img src="@/assets/arrow.png" alt="" width="20" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cart: this.$store.state.cart
    };
  }
};
</script>
<style scoped>
.search_app > i {
  position: absolute;
  left: 8px;
  top: 10px;
}
.input_search {
  background: #eceff1;
  border: none;
  border-radius: 25px;
  padding-left: 30px;
}
.btn-orange {
  border-radius: 20px;
}
</style>
