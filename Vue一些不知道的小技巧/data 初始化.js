// 因为 props 要比 data 先完成初始化，所以我们可以利用这一点给 data 初始化一些数据进去，看代码：
export default {
    data () {
      return {
        buttonSize: this.size
      }
    },
   props: {
     size: String
   }
  }
//   子组件的data函数也可以有参数,  且该参数是当前实例对象, 所有我们可以利用这一点做一些自己的判断. 如, 改成上面的代码:
export default {
    data (vm) {
      return {
        buttonSize: vm.size
      }
    },
   props: {
     size: String
   }
  }