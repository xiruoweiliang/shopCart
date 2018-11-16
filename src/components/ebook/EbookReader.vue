<template>
  <div>
    <div id="read">

    </div>
  </div>
</template>

<script>
import Epub from 'epubjs'
global.ePub = Epub
export default {
  data () {
    return {
      fileName:''
    }
  },
  methods:{
    initEpub(){
      const url=`http://192.168.15.100:8081/static/epub/${this.fileName}.epub`
      this.book=new Epub(url)   //Epub实例化  可以获取到具体内容
      this.rendition=this.book.renderTo('read',{    //进行渲染
        width:innerWidth,
        height:innerHeight,
        method:'default'
      })
      this.rendition.display() //展示
      this.rendition.on('touchstart',event=>{   //手指触摸屏幕时候触发
        this.touchStartX = event.changedTouches[0].clientX  
        this.touchStartTime = event.timeStamp
      })
      this.rendition.on('touchend', event => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX
        const time = event.timeStamp - this.touchStartTime
        if (time < 500 && offsetX > 40) {
          this.prevPage()
        } else if (time < 500 && offsetX < -40) {
          this.nextPage()
        } else {
          this.toggleMenuVisible()
        }
        event.preventDefault()
        event.stopPropagation()
      })
    }
  },
  created(){   
    this.fileName=this.$route.params.fileName.split('|').join('/')
    this.initEpub()  //初始化
  }
}

// 第一节目的：
// 相当于我地址是 http://192.168.15.100:8081/#/ebook/Physics|2015_Book_ProceedingsOfTheInternationalC 的时候
// 我可以显示对应的这个文件的地址： http://192.168.15.100:8081/static/epub/Physics/2015_Book_ProceedingsOfTheInternationalC.epub------因为这个才是那个文件的路径

// 2、匹配到了路径后，需要渲染出来----用的是Epub
//把那个fileName的值存到那个vuex里面去 因为很多地方要用


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


