<template>
    <div>
        <header class="top-header fixed-header">
		<a class="icona" href="javascript:history.go(-1)">
				<img src="../../assets/images//left.png"/>
			</a>
		<h3>去评价</h3>
			
			<a class="iconb" href="shopcar.html">
			</a>
	</header>
	
	<div class="contaniner fixed-cont">
		<section class="assess">
				<p>
					<img src="../../assets/images//detail-pp01.png"/>
					<textarea rows="5" placeholder="请写下对宝贝的感受吧，对他人帮助很大哦" ></textarea>
					
				</p>	
				<ul>
					<li>
						商品评价
					</li>
					<li class="assess-right">
						<img onclick="level(1)" src="../../assets/images//detail-iocn01.png"/>
						<img onclick="level(2)" src="../../assets/images//detail-iocn01.png"/>
						<img onclick="level(3)" src="../../assets/images//detail-iocn01.png"/>
						<img onclick="level(4)" src="../../assets/images//detail-iocn01.png"/>
						<img onclick="level(5)" src="../../assets/images//detail-iocn01.png"/>
					</li>
				</ul>
		</section>
	</div>
	
	<footer class="assess-footer fixed-footer ">
		<ul>
			<li>
				<input type="checkbox" id="ass"/>
				<label for="ass" onselectstart="return false">匿名评价</label>
				
			</li>
			<input type="button" value="发表评论" />
		</ul>
	</footer>
    </div>
</template>
