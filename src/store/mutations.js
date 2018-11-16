//mutations.js
export default {
    'SET_TEST': (state,newTest)=>{ 
        //'SET_TEST'是一个方法  方法有两个参数 第一个参数是state变量，第二个参数是test的值；
        state.test=newTest         
        //设置值，改变state变量下test的值;
    },
    // 添加到购物车
    'ADD':(state,id)=>{
        // 判断是否选择过
        let record=state.cartList.find(n=>n.id==id)

        if(!record){
            state.cartList.push({
                id:id,
                num:1
            })
        }else{
            record.num++
        }
    },
    // 清空----数组为空
    'DLE':(state)=>{
        state.cartList=[]
    }
}










//我要获取到那个数组，就是添加后，有那个数据在cartList里面；要改变数量；要能清空购物车；要计算总价和总数；