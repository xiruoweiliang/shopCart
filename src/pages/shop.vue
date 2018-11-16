<template>
  <div>
    <!-- 商品列表 -->
    <shop-list></shop-list>
    <hr>
    <!-- 已选商品 -->
    <shop-cart></shop-cart>
  </div>
</template>

<script>
import ShopList from '@/pages/shop/ShopList.vue'
import ShopCart from '@/pages/shop/ShopCart.vue'
export default {
  components:{
    ShopList,
    ShopCart,
  },
  data () {
    return {
    }
  },
  created(){
    
  },
  mounted(){
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
