<template>
  <div class="shopCart">
    <div>已选商品</div>
    <table>
        <thead>
          <tr>
            <th>id</th>
            <th>名称</th>
            <th>价格</th>
            <th>数量</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(item,index) in cartList' :key='index'>
            <th>{{item.id}}</th>
            <th>{{item.name}}</th>
            <th>{{item.price}}</th>
            <th>{{item.num}}</th>
          </tr>
        </tbody>
      </table>
      <div>
        <span>总数：</span>{{totalNum}}<span></span> <span>总价：</span>{{totalPrice}}<span></span>
      </div>
      <div>
        <button @click='delCart()'>清空购物车</button>
      </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  data () {
    return {
     
    }
  },
  computed:{
    ...mapGetters(['cartList','totalNum','totalPrice'])
  },
  created(){
    
  },
  mounted(){
  },
  methods:{
    ...mapActions(['delCart'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shopCart{
  font-size: 0.3rem;
}
.shopCart th{
  padding:0 0.4rem;
  height: 0.6rem;
  line-height: 0.6rem;
}
</style>
