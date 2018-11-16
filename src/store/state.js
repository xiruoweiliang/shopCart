//state.js
const state={
    test:1,
    shopList:[
        {
          id:1,
          name:'苹果',
          price:'4'
        },
        {
          id:2,
          name:'葡萄',
          price:'7'
        },
        {
          id:3,
          name:'橙子',
          price:'9'
        }
    ],
    cartList:[],
}
export default state






//购物车例子讲解
//1、在state里面添加了shopList的数据，然后利用getters在组件中可以直接使用
//2、添加购物车操作 mutation里的ADD->action的addCart   如何和组件中的添加方法对应呢---->可以用...mapActions(['addCart'])   或者dispatch 提交action
//(这两个方法都可以的！！！)
//3、展示cartList的数据 ->在getter里面计算cartList返回数据，然后mapGetters展示
//4、计算总价，总数量->在getters里面计算totalPrice、totalNum，同上利用mapGetters展示
//5、清空购物车->cartList为空，跟添加有点类似-> mutation里clearAll->action的clearAllCart->...mapActions(['clearAllCart'])组件中的方法调用










