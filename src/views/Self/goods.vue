<template>
  <div>
    <header class="detail-header fixed-header">
      <a href="javascript:history.go(-1)">
        <img src="../../assets/images/detail-left.png">
      </a>
      
      <a href="shopcar.html" class="right">
        <img src="../../assets/images/shopbar.png">
      </a>
    </header>

    <div class="contaniner fixed-contb">
      <section class="detail">
        <figure class="swiper-container">
          <wv-swipe :height="430" :autoplay="4000">
            <wv-swipe-item v-for="(v,k) in goods.images" :key="k">
              <img :src="v.path" width="100%">
            </wv-swipe-item>
          </wv-swipe>
          <div class="swiper-pagination"></div>
        </figure>
        <dl class="jiage">
          <dt>
            <h3>{{ goods.goods_name }}</h3>
            <div class="collect">
              <img src="../../assets/images/detail-heart-hei.png">
              <p>收藏</p>
            </div>
          </dt>
          <dd v-if="goods.skus">
            <b>￥{{ goods.skus[skuSelect].price }}</b>
            <p>（ 库存量：{{goods.skus[skuSelect].stock}} ）</p>
            <input type="button" value="￥10.00" readonly>
            <small>+356积分</small>
          </dd>
        </dl>

        <div class="chose">
          <ul>
            <li
              @click="skuSelect=k"
              :class="{'chose-active':k==skuSelect}"
              v-for="(v,k) in goods.skus"
              :key="k"
            >{{ v.sku_name }}</li>
          </ul>
        </div>

        <div class="buy-count" v-if="goods.skus">购买数量：
          <wv-number-spinner :min="1" :max="goods.skus[skuSelect].stock" v-model="buyCount"></wv-number-spinner>
        </div>

        <ul class="same">
          <a href="#">
            <span>同类推荐</span>
            <li class="one">
              <img src="../../assets/images/detail-pp01.png">
              <p>￥188.00</p>
            </li>
            <li>
              <img src="../../assets/images/detail-pp02.png">
              <p>￥188.00</p>
            </li>
            <li>
              <img src="../../assets/images/detail-pp03.png">
              <p>￥188.00</p>
            </li>
            <li>
              <img src="../../assets/images/detail-pp04.png">
              <p>￥188.00</p>
            </li>
          </a>
        </ul>

        <article class="detail-article">
          <nav>
            <ul>
              <li>商品详情</li>
              <li class="article-active">评价</li>
            </ul>
          </nav>
          <section class="talkbox">
            <ul class="talk">
              <li>
                <figure>
                  <img src="../../assets/images/detail-tou.png">
                </figure>
                <dl>
                  <dt>
                    <p>弱小喵</p>
                    <time>2015.11.17</time>
                    <div class="star">
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn001.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn001.png">
                      </span>
                    </div>
                  </dt>
                  <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                  <small>颜色：豹纹凯特</small>
                </dl>
              </li>
              <li>
                <figure>
                  <img src="../../assets/images/detail-tou.png">
                </figure>
                <dl>
                  <dt>
                    <p>弱小喵</p>
                    <time>2015.11.17</time>
                    <div class="star">
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn001.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn001.png">
                      </span>
                    </div>
                  </dt>
                  <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                  <small>颜色：豹纹凯特</small>
                  <div class="picbox">
                    <img src="../../assets/images/detail-pp01.png">
                    <img src="../../assets/images/detail-pp02.png">
                    <img src="../../assets/images/detail-pp03.png">
                    <img src="../../assets/images/detail-pp04.png">
                  </div>
                </dl>
              </li>
              <li>
                <figure>
                  <img src="../../assets/images/detail-tou.png">
                </figure>
                <dl>
                  <dt>
                    <p>弱小喵</p>
                    <time>2015.11.17</time>
                    <div class="star">
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn001.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn001.png">
                      </span>
                    </div>
                  </dt>
                  <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                  <small>颜色：豹纹凯特</small>
                </dl>
              </li>
              <li>
                <figure>
                  <img src="../../assets/images/detail-tou.png">
                </figure>
                <dl>
                  <dt>
                    <p>弱小喵</p>
                    <time>2015.11.17</time>
                    <div class="star">
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn001.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn001.png">
                      </span>
                    </div>
                  </dt>
                  <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                  <small>颜色：豹纹凯特</small>
                  <div class="picbox">
                    <img src="../../assets/images/detail-pp01.png">
                    <img src="../../assets/images/detail-pp02.png">
                    <img src="../../assets/images/detail-pp03.png">
                    <img src="../../assets/images/detail-pp04.png">
                  </div>
                </dl>
              </li>
            </ul>
          </section>
        </article>
      </section>
    </div>

    <footer class="detail-footer fixed-footer">
      <div class="go-car">
        <input @click="addCart" type="button" value="加入购物车">
      </div>
      <a href="buy.html" class="buy">立即购买</a>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods: {},
      skuSelect: 0, //sku 选中的状态
      buyCount: 1
    };
  },
  methods: {
    addCart: function() {
      // 获取购物车数据
      let cart = localStorage.getItem("cart");
      // 将 cart 转成 json
      cart = cart ? JSON.parse(cart) : [];
      // 获取当前的skuid
      let skuid = this.goods.skus[this.skuSelect].id;
      // console.log(skuid);
      // 根据skuid查找这个商品
      let searchInfo = cart.find((v) => v.sku_id == skuid);
      // console.log(searchInfo);
      if (searchInfo) {
        searchInfo.buy_count += this.buyCount;
        // 判断购买数量如果超过库存   购买数量为最大的库存量
        if (searchInfo.buy_count > this.goods.skus[this.skuSelect].stock) {
          searchInfo.buy_count = this.goods.skus[this.skuSelect].stock;
        }
      } else {
        //没有就放到数组中
        cart.push({ 
          sku_id: skuid,
          buy_count: this.buyCount,
          checked: true //选中
        });
      }

      // 写入浏览器
      localStorage.setItem("cart", JSON.stringify(cart));

      // 跳转到购物车页面
      this.$router.push("/cart");
    }
  },
  created() {
    this.axios.get("/goods?id=" + this.$route.query.id).then(res => {
      console.log(res.data.data);
      this.goods = res.data.data;
    });
  }
};
</script>

<style>
.buy-count {
  background-color: #fff;
  padding: 20px;
  margin-top: 5px;
}
.buy-count .wv-number-spinner {
  width: 50%;
  float: right;
}
</style>