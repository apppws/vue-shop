<template>
  <div>
    <header class="top-header fixed-header">
      <a class="icona" href="javascript:history.go(-1)">
        <img src="../../assets/images/left.png">
      </a>
      <h3>男装专区</h3>

      <a class="text-top"></a>
    </header>

    <div class="contaniner fixed-conta">
      <form action method="post" class="change-address" id="save">
        <ul>
          <li>
            <label class="addd">收货人：</label>
            <input type="text" v-model="dodata.name" required="required">
          </li>
          <li>
            <label class="addd">手机号：</label>
            <input type="tel" v-model="dodata.phone" required="required">
          </li>
          <li>
            <label class="addd">所在省</label>
            <input type="text" v-model="dodata.province" required="required">
          </li>
          <li>
            <label class="addd">所在市</label>
            <input type="text" v-model="dodata.city" required="required">
          </li>
          <li>
            <label class="addd">所在区</label>
            <input type="text" v-model="dodata.area" required="required">
          </li>
          <li>
            <label class="addd">详细地址：</label>
            <textarea required="required" v-model="dodata.address"></textarea>
          </li>
        </ul>

        <ul>
          <li class="checkboxa">
            <input type="checkbox" id="check">
            <label 
              :class="{'check checkd':dodata.is_default=1}"
              for="check"
              onselectstart="return false"
            >设置为默认地址</label>
          </li>
        </ul>
        <ul>
          <li>
            <h3>删除此地址</h3>
          </li>
        </ul>
        <input @click.prevent="submit" type="submit" value="保存">
      </form>
    </div>
  </div>
</template>
<script>
import { Dialog, Toast } from "we-vue";
export default {
  data() {
    return {
      dodata: {
        name: "",
        phone: "",
        province: "",
        city: "",
        area: "",
        address: "",
        is_default: ""
      }
    };
  },
  methods: {
    submit() {
      this.axios.post("/addresses", this.dodata).then(res => {
        if (res.data.status_code == "200") {
          Dialog({
            message: "添加成功",
            skin: "ios"
          }).then(res => {
            this.$router.push("buy");
          });
        } else {
          Toast.fail({
            duration: 1000,
            message: "手机号或者地址不全不正确"
          });
        }
      });
    }
  }
};
</script>

