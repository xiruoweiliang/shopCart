<template>
  <div class="hello">
      {{mix_CutDate(msg)}}
      {{mix_price(price)}}
      {{mix_state(stateData)}}
     <router-link to='/test'>跳转</router-link>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'    
import store from '@/store/index.js'
import {mix_CutDate,mix_price,mix_state} from '@/mixins/config.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      price:'232.3434343',
      stateData:'man',
      text:'',
    }
  },
  
  mixins:[mix_CutDate,mix_price,mix_state],
  computed:{
    ...mapGetters(['test']) 
  },
  created(){
    this.$store.dispatch('setTest',11)  
    console.log(this.test)      //优化后可以直接 用this.test
  },
  mounted(){
  },
  methods:{
    data(){
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
