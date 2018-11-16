export const mix_CutDate={
    methods:{
        mix_CutDate(str){
            return str.substr(0,10)
        }
    }
}

export const mix_price={
    methods:{
        mix_price(price){
            return parseFloat(price).toFixed(2)
        }
    }
}


// 根据文本返回状态值  1返回正确  2返回错误  3返回无法识别

export const mix_state={
    methods:{
        mix_state(state){
            switch(state){
                case 'man':
                    return '正确'
                    console.log(1)
                    break;
                case '2':
                    return '错误'
                    break;
                case '3':
                    return '无法识别'
                    break; 
                
            }
        }
    }
}













