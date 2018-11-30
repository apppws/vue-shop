<template>
  <div>
    <header class="page-header">
      <h3>购物车</h3>
    </header>

    <div class="contaniner fixed-contb">
      <section class="shopcar" v-for="(v,k) in goods" :key="k">
        <div class="shopcar-checkbox">
          <label
            @click="checkeds(v.id)"
            :class="{'shopcar-checkd':cart.find(v1=>v1.sku_id==v.id).checked}"
            for="shopcar"
            onselectstart="return false"
          ></label>
          <input type="checkbox" id="shopcar">
        </div>
        <figure>
          <img :src="v.goods.logo">
        </figure>
        <dl>
          <dt>{{ v.goods.goods_name }}</dt>
          <dd>{{ v.sku_name }}</dd>
          <div class="add">
            <span @click="minus(k)">-</span>
            <input type="text" :value="cart.find(v1=>v1.sku_id==v.id).buy_count">
            <span @click="add(k)">+</span>
          </div>
          <h3>￥{{ v.price }}</h3>
          <small>
            <img src="../../assets/images/shopcar-icon01.png">
          </small>
        </dl>
      </section>

      <!--去结算-->
      <div style="margin-bottom: 16%;"></div>
    </div>
    <div class="page-footer">
      <div class="shop-go">
        <b>合计：￥{{ totalInfo.price }}</b>
        <span>
          <router-link to="buy">
          <a href="buy.html">去结算（{{ totalInfo.count }}）</a>
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods: [],
      cart: undefined
    };
  },
  methods: {
    // 选中
    checkeds: function(skuid) {
      // 根据点击的商品id找出购物车对应的数据
      let cart =this.cart.find(v=>v.sku_id == skuid);
      // 修改勾选状态
      cart.checked = !cart.checked;

      // 写入浏览器
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    // 数量--
    minus: function(k) {
      if (this.goods[k].number > 0) {
        this.goods[k].number--;
      }
    },
    // 数量++
    add: function(k) {
      this.goods[k].number++;
    }
  },
  created() {
    //   取出浏览器中购物车的数据
    let cart = localStorage.getItem("cart");
    // console.log(cart);
    if (cart) {
      // 转成json 并保存到 vue的数据对象中
      this.cart = JSON.parse(cart);
      // console.log(this.cart);
      // 从购物车数组中提取出所有商品的 skuid
      let skuIds = this.cart.flatMap(v => v.sku_id).join(",");
      // console.log(skuIds);
      this.axios.get("/goods?sku_ids=" + skuIds).then(res => {
          console.log(res.data);
        this.goods = res.data.data;
      });
    } else {
      this.$router.push("/");
    }
  },
  // 计算属性
  computed: {
    totalInfo: function() {
      //  总价
      let price = 0;
      // 总数量
      let count = 0;
      // 循环商品
      for (let i = 0; i < this.goods.length; i++) {
        // 得到选中的商品
        if (this.goods[i].checked) {
          price += this.goods[i].price * this.goods[i].number;
          count += this.goods[i].number;
        }
      }
      // 返回
      return {
        price: price,
        count: count
      };
    }
  }
};
</script>
<style>
.add span {
  padding: 0 8px !important;
}
.page-footer .shop-go {
  clear: both;
  position: fixed;
  bottom: 69px;
}
</style>


