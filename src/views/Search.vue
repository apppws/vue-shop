<template>
  <div>
    <header class="top-header fixed-header">
      <a class="icona" href="javascript:history.go(-1)">
        <img src="../assets/images/left.png">
      </a>
      <h3>男装专区</h3>

      <a class="iconb" href="shopcar.html">
        <img src="../assets/images/shopbar.png">
      </a>
    </header>

    <div class="contaniner fixed-conta">
      <section class="list">
        <figure>
          <img src="../assets/images/list-ban01.png">
        </figure>
        <div class="search">
          <input type="search" v-model="search.keywords" placeholder="韩版卫衣">
          <label>
            <img @click="besearch" src="../assets/images/list-search.png">
          </label>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">
                <span>全部</span>
              </a>
            </li>
            <li class="list-active">
              <a href="#">
                <span>销量</span>
                <img src="../assets/images/up-red.png">
              </a>
            </li>
            <li>
              <a href="#">
                <span>价格</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>评价</span>
              </a>
            </li>
          </ul>
        </nav>
        <ul
          class="wall"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="disableLoad"
          infinite-scroll-distance="50"
        >
          <li class="pic" v-for="(v,k) in goods" :key="k">
            <router-link :to="'/goods?id=' + v.id">
              <img :src="v.logo">
              <p>{{ v.goods_name }}</p>
              <b>￥{{ v.skus[0].price }}</b>
              <del>￥{{ v.skus[0].price }}</del>
            </router-link>
          </li>
        </ul>
        <wv-loadmore v-if="islastPage" id="stopLoad" type="lineDot" text="loading"></wv-loadmore>
        <wv-loadmore v-else></wv-loadmore>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: {
        page: 1,
        per_page: 1,
        keywords: this.$route.query.keywords,
        sortby: "id",
        order: "desc"
      },
      goods: [],
      // 是否禁止滚动
      disableLoad: false,
      //是否到最后一页
      islastPage: false
    };
  },
  created() {
    this.besearch();
  },
  methods: {
    // 当滚动条到 50 触发的函数
    loadMore() {
        // 1 先禁止滚动条的滚动
        this.disableLoad = true
        // 2 当前页面++
        this.search.page++
        // 3
        this.axios.get("/goods", { params: this.search }).then(res => {
          // 合并到原来数组
          this.goods = this.goods.concat(res.data.data.data);
          if(res.data.data.last_page > this.search.page){
            // 设置允许访问
            this.disableLoad = false
          }else
          {
            // 已经到最后一页了
            this.islastPage = true
          }
        });
    },
    besearch() {
      if (this.$route.query.keywords != "") {
        /* 注意：当使用 axios 当 get 请求时，第二个参数必须要放到 params: 里面） */
        this.axios.get("/goods", { params: this.search }).then(res => {
          this.goods = res.data.data.data;
        });
      }
    }
  }
};
</script>

