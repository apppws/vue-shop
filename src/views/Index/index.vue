<template>
    <div>
        <header class="page-header">
		<h4>CAST商城</h4>
	    </header>
	
	    <div class="contaniner fixed-contb">
            <figure class="ban swiper-container">
                <ul class="swiper-wrapper">
                    <li v-for='(i,index) in arrItem' :key='index' class="swiper-slide">
                        <!-- <a href="#">
                            <img src="../../assets/images/index-ban01.png"/>
                        </a> -->
                        <div class="iSlide">
                            <img class="img" :src="i.imgUrl">
                        </div>
                    </li>
                </ul>
            </figure>
            
            <section class="shop">
                <h3>
                    <a href="#">
                        服装
                        <span><img src="../../assets/images/right.png"/></span>
                    </a>
                </h3>
                <dl>
                    <dd>
                        <a href="list.html">
                            <img src="../../assets/images/index-ph01.png"/>
                            <b>男装</b>
                        </a>
                    </dd>
                    <dd>
                        <a href="list.html">
                            <img src="../../assets/images/index-ph02.png"/>
                            <b>女装</b>
                        </a>
                    </dd>
                </dl>
            </section>
            
            <section class="shop">
                <h3>
                    <a href="list.html">
                        食品
                        <span><img src="../../assets/images/right.png"/></span>
                    </a>
                </h3>
                <dl>
                    <dd>
                        <a href="list.html">
                            <img src="../../assets/images/index-03.png"/>
                            <b>切糕</b>
                        </a>s
                    </dd>
                    <dd>
                        <a href="list.html">
                            <img src="../../assets/images/index-ph04.png"/>
                            <b>酥饼</b>
                        </a>
                    </dd>
                </dl>
            </section>
	    </div>
    </div>
</template>
<script>
// import jquery from '../../assets/js/jquery.min.js' 
// import swiper from '../../assets/js/swiper.min.js' 
export default {
  mounted: function() {
    // var mySwiper = new Swiper(".swiper-container", {
    //     //   loop: true,
    //     //   speed: 1000,
    //     //   autoplay: 2000
    // });
  },
  data() {
    return {
      arrItem: [
        {
          name: "swiperSlide5",
          imgUrl: "http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg"
        },
        {
          name: "swiperSlide1",
          imgUrl: "http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg"
        },
        {
          name: "swiperSlide51",
          imgUrl: "http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg"
        },
        {
          name: "swiperSlide1111115",
          imgUrl: "http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg"
        }
      ]
    };
  },
  
};
</script>

