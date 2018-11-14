// 捕获一个来自子孙组件的错误时被调用。有时候当我们想收集错误日志，却不想把错误暴露到浏览器控制台的时候，这很有用。下面是个例子：

// Child.vue

<template>
  <!-- 省略一些无关代码 -->
</template>
  export default {
    mounted () {
      // 故意把 console 写错
      consol.log('这里会报错！')
    }
  }

//  Parent.vue

{/* <template>
  <child></child>
</template> */}

  import Child from './Child.vue'
  export default {
    components: [ Child ],
    /**
     * 收到三个参数：
     * 错误对象、发生错误的组件实例
     * 以及一个包含错误来源信息的字符串。
     * 此钩子可以返回 false 以阻止该错误继续向上传播。
     */
    errorCaptured (err, vm, info) {
      console.log(err)
      // -> ReferenceError: consle is not defined ...
      console.log(vm)
      // -> {_uid: 1, _isVue: true, $options: {…}, _renderProxy: o, _self: o,…}
      console.log(info)
      // -> `mounted hook`
      // 告诉我们这个错误是在 vm 组件中的 mounted 钩子中发生的
      
      // 阻止该错误继续向上传播
      return false
    }
  }


 