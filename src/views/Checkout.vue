<template>
  <div class="container">
    <div class="row py-3" style="height: 50px">
      <div class="col-12 mb-4 text-left pr-0">
        <img src="@/assets/shopping_cart.png" width="20" alt="" class="mr-2" />
        <div class="d-inline-block align-middle" style="line-height:15px;">
          <p class="font-weight-bold mb-0">Checkout</p>
          <span class="fs-11 t-grey"
            >Please provide details to place order</span
          >
        </div>
      </div>
      <div class="col-12 mb-1 text-left">
        <label for="" class="t-grey fs-14 font-weight-bold d-block mb-0"
          >Nama</label
        >
        <input type="text" class="input_base py-2 px-3 fs-14 t-black w-100" />
      </div>
      <div class="col-12 mb-3">
        <div class="row">
          <div class="col-4 text-left">
            <label for="" class="t-grey fs-12 font-weight-bold d-block mb-0"
              >Country Code</label
            >
            <input
              type="text"
              value="+ 62"
              readonly
              class="input_base py-2 px-3 fs-14 t-black w-100"
            />
          </div>
          <div class="col-8 text-left pl-0">
            <label for="" class="t-grey fs-12 font-weight-bold d-block mb-0"
              >Mobile No</label
            >
            <input
              type="number"
              class="input_base py-2 px-3 fs-14 t-black w-100"
            />
          </div>
        </div>
      </div>
      <div class="col-12 mb-3 text-left">
        <label for="" class="t-grey fs-14 font-weight-bold d-block mb-0"
          >Email</label
        >
        <input type="email" class="input_base py-2 px-3 fs-14 t-black w-100" />
      </div>
      <div class="col-12 mb-1 text-left">
        <label for="" class="t-grey fs-14 font-weight-bold d-block mb-0"
          >Address</label
        >
        <textarea
          class="input_base py-2 px-3 fs-14 t-black w-100"
          name=""
          id=""
          rows="3"
        ></textarea>
      </div>
      <div class="col-12 mb-3 text-left">
        <label for="" class="t-grey fs-14 font-weight-bold d-block mb-0"
          >Want to give a note about an order?
          <i class="fs-10">- Optional</i></label
        >
        <input type="email" class="input_base py-2 px-3 fs-14 t-black w-100" />
      </div>
      <div class="col-12 text-left" style="height:666px;">
        <label for="" class="t-black fs-14 d-block mb-0"
          >Metode Pembayaran</label
        >
        <ul class="list-paid px-0 pb-4">
          <li v-for="item in metode" :key="item.id" @click="choosed = item.id">
            <span class="position-absolute tool-widget fs-10 pointer"
              ><label class="checkbox-label">
                <input type="checkbox" :checked="choosed == item.id" />
                <span class="checkbox-custom rectangular"></span> </label
            ></span>
            <span class="fs-14 t-black">{{ item.label }}</span>
          </li>
        </ul>
        <div class="border-dashed pb-3">
          <label for="" class="t-black fs-14 d-block mb-0"
            >Rincian Pembayaran</label
          >
          <div class="row mt-2">
            <div class="col-6 text-left">
              <p class="fs-14 font-weight-bold t-black mb-0">Subtotal</p>
            </div>
            <div class="col-6 text-right">
              <p class="fs-14 font-weight-bold t-black mb-0">Rp. 43.000</p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-6 text-left">
              <p class="fs-14 font-weight-bold t-black mb-0">Ongkir</p>
            </div>
            <div class="col-6 text-right">
              <p class="fs-14 font-weight-bold t-black mb-0">Rp. 10.000</p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-12 text-left">
              <p class="fs-14 font-weight-bold t-black mb-0">Diskon</p>
            </div>
          </div>
        </div>
        <div class="row mt-2 mb-4">
          <div class="col-6 text-left">
            <p class="fs-14 font-weight-bold t-black mb-0">Total Harga</p>
          </div>
          <div class="col-6 text-right">
            <p class="font-weight-bold fs-20 t-red mb-0">Rp. 53.000</p>
          </div>
        </div>
        <div class="col-12 px-0">
          <div class="btn btn-second-green py-3 w-100 m-auto">
            <i class="fa fa-whatsapp mr-2"></i>Konfirmasi Pesanan
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
      choosed: 1,
      metode: [
        { id: 1, label: "GO-PAY" },
        { id: 2, label: "OVO" },
        { id: 3, label: "DANA" },
        { id: 4, label: "LinkAja" },
        { id: 5, label: "Bayar Langsung" }
      ],
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
.input_base {
  border: none;
  background: #eceff1;
  border-radius: 5px;
}
.list-paid {
  list-style: none;
  border-bottom: 5px solid #eceff1;
}
.list-paid > li {
  height: 30px;
  margin-top: 10px;
  padding-left: 40px;
  position: relative;
  padding-top: 3px;
}
.tool-widget {
  left: -4px;
  top: 4px;
}
.border-dashed {
  border-bottom: 3px dashed #eceff1;
}
</style>
