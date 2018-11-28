<template>
    <div>
        <header class="page-header">
		<h3>购物车</h3>
	    </header>
	
	    <div class="contaniner fixed-contb">

            <section class="shopcar" v-for="(v,k) in goods" :key="k">
                <div class="shopcar-checkbox">
                    <label @click="checkeds(k)" :class="{'shopcar-checkd':v.checked}" for="shopcar" onselectstart="return false"></label>
                    <input type="checkbox" id="shopcar"/>
                </div>
                <figure><img :src="v.logo"/></figure>
                <dl>
                    <dt>{{ v.title }}</dt>
                    <dd v-for="(v1,k1) in v.attr" :key="k1">{{ v1 }}</dd>
                    <div class="add">
                        <span @click="minus(k)">-</span>
                        <input type="text" v-model="v.number" />
                        <span @click="add(k)">+</span>
                    </div>
                    <h3>￥{{ v.price }}</h3>
                    <small><img :src="v.logo"/></small>
                </dl>
            </section>

            <!--去结算-->
            <div style="margin-bottom: 16%;"></div>
	    </div>
         <div class="page-footer">
            <div class="shop-go">
                <b>合计：￥{{ totalInfo.price }}</b>
                <span><a href="buy.html">去结算（{{ totalInfo.count }}）</a></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      goods: [
        {
          id: 1,
          title: "超级大品牌服装，现在买只要998",
          attr: ["颜色：经典绮丽款", "尺寸：L"],
          price: "653.00",
          number: 1,
          logo: "http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg",
          checked: true
        },
        {
          id: 2,
          title: "男装 只要888",
          attr: ["颜色：经典绮丽款", "尺寸：XL"],
          price: "888.00",
          number: 1,
          logo: "http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg",
          checked: false
        }
      ]
    };
  },
  methods: {
    // 选中
    checkeds: function(k) {
      this.goods[k].checked = !this.goods[k].checked;
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
  // 计算属性
  computed: {
      totalInfo:function(){
        //  总价
        let price = 0
        // 总数量
        let count = 0
        // 循环商品
        for(let i=0;i<this.goods.length;i++){
            // 得到选中的商品
            if(this.goods[i].checked){
                price += this.goods[i].price * this.goods[i].number;
                count += this.goods[i].number;
            }
        }
        // 返回
        return {
            price:price,
            count:count
        }
      }
  }
};
</script>
<style>
    .add span {
         padding: 0 8px !important;
    }
    .page-footer .shop-go{
        clear:both;
        position: fixed;
        bottom: 69px;
    }

</style>


