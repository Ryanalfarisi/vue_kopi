<template>
  <div class="container">
    <div class="row py-3" style="height: 50px">
      <div class="col-lg-6 col-md-6 col-7 m-auto text-left pr-0">
        <p class="mb-0 font-weight-bold fs-18">
          <i data-v-22ba47ca="" class="fa fa-shopping-bag mr-2"></i>Kopi Mamah
          Eny
        </p>
      </div>
      <div
        class="col-lg-6 col-md-6 col-5 m-auto text-right pl-0 position-relative search_app"
      >
        <i class="fa fa-search" aria-hidden="true"></i>
        <input
          type="text"
          placeholder="Search"
          class="input_search fs-14 t-grey py-2 w-100"
        />
      </div>
      <div class="mt-4 w-100">
        <b-tabs
          content-class="mt-0 bg-grey border-0"
          active-nav-item-class="t-blue font-weight-bold fs-14 border-0 bb-blue"
        >
          <b-tab
            title="All products"
            title-link-class="t-grey fs-14 font-weight-bold border-0"
            active
          >
            <div class="py-3 px-2" style="height: 80vh;">
              <div
                v-for="item in items"
                :key="item.id"
                class="bg-white col-12 py-2 wrapper_goods mb-2"
              >
                <div class="row">
                  <div class="col-4 col-md-3 col-lg-9 text-left">
                    <img src="@/assets/product_1.png" alt="" />
                  </div>
                  <div class="col-8 col-md-9 col-lg-9 text-left">
                    <p class="font-weight-s fs-14 mb-0">{{ item.label }}</p>
                    <p class="font-weight-bold mb-0">Rp. {{ item.price }}</p>
                    <p class="fs-12 mb-0">{{ item.qty }}</p>
                    <button
                      class="btn btn-blue-calm mt-0 cart-btn font-weight-bold fs-12 py-2 px-2"
                      @click="addToCart(item)"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
              <p class="t-grey fs-14 font-weight-bold mt-4">
                Showing 1 items out of 1
              </p>
            </div>
          </b-tab>
          <b-tab
            title="Kopi susu"
            title-link-class="t-grey fs-14 font-weight-bold border-0"
            ><p>I'm the second tab</p></b-tab
          >
        </b-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          label: "Kopi Susu Cowok",
          price: "80.000,00",
          qty: 1
        }
      ]
    };
  },
  methods: {
    addToCart(item) {
      this.$store.commit("addCart", item);
      this.$router.push({ name: "Cart" });
    }
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
</style>
