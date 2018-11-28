<template>
    <div>
        <header class="top-header fixed-header">
		<a class="icona" href="javascript:history.go(-1)">
				<img src="../../assets/images/left.png"/>
			</a>
		<h3>男装专区</h3>
                <router-link to="go_address" class="text-top">
                    添加
                </router-link>
        </header>
        
        <div class="contaniner fixed-conta">
            <dl class="address">
                <router-link to="/do_address">
                    <dt>
                        <p>弱小喵</p>
                        <span>17756084251</span>
                        <small>默认</small>
                    </dt>
                    <dd>安徽省合肥市高新区科学大道天波路浙商大厦a座806</dd>
                </router-link>
            </dl>
        </div>
    </div>
</template>
