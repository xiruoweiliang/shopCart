//getters.js
export default {
    test:state=>state.test,
    shopList:state=>state.shopList,
    cartList:state=>{
        return state.cartList.map( ({id,num})=>{ //在actions中只有的id和num的字段
            //在原始数据数据上面进行刷选，这里通过id来匹配
            let product = state.shopList.find(n=>n.id == id)
            console.info('product',product,11)
            return {
                ...product,
                num
            }
        })
    },
    totalPrice:(state,getters)=>{    //getter中可以调用getter里面的方法，文档有介绍！！！
        let total=0;
        getters.cartList.forEach(n=>{
            total+=n.price*n.num
        })
        return total
    },
    totalNum:(state,getters)=>{
        let cartNum=0;
        getters.cartList.forEach(n=>{
            cartNum+=n.num
        })
        return cartNum;
    }
}








