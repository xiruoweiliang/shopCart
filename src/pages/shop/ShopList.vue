<template>
  <div class="shoplist">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>名称</th>
            <th>价格</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(item,index) in shopList' :key='index'>
            <th>{{item.id}}</th>
            <th>{{item.name}}</th>
            <th>{{item.price}}</th>
            <th><button @click='addCart(item)'>添加</button></th>
           </tr>
        </tbody>
      </table>
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
    ...mapGetters(['shopList'])
  },
  created(){
    
  },
  mounted(){
  },
  methods:{
    ...mapActions(['addCart'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shoplist{
  font-size: 0.3rem;
}
.shoplist th{
  padding:0 0.4rem;
  height: 0.6rem;
  line-height: 0.6rem;
}
</style>
