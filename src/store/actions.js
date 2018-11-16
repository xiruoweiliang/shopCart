//action.js
export default {
    setTest:({commit,state},newTest)=>{     
        // 需要传入一个对象，这个对象里面有两个参数，第一个是commit，是方法->用来调用mutations，
        //第二个参数是state->用来获取原有的值；后面的newTest就是新的值
        commit('SET_TEST',newTest)  //actions调用mutation方法，第一个参数是mutations的方法
    },
    addCart:({commit},product)=>{
        commit('ADD',product.id)
    },
    delCart:({commit})=>{
        commit('DLE')
    }
}




