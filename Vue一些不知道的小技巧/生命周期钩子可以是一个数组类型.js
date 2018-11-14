export default {
    ...
    created: [
      function one () {
        console.log(1)
      },
      function two () {
        console.log(2)
      }
    ]
    // ...
   }
  
//    生命周期可以是一个数组类型, 且数组中的函数会一次执行.

// 其实也没啥用.. 知道就行了 事实上生命周期钩子还可以作用于DOM元素上, 利用这一点, 我们可以用父组件中的方法初始化子组件的生命周期钩子

<template>
  <h3>I'm child!</h3>
</template>

 
{/* <template>
 <child @hook:created="handleChildCreated"></child> //子组件
</template> */}

 
   import Child from './child.vue'
   export default {
     components: [ Child ],
     methods: {
       handleChildCreated () {
         console.log('handle child created...')
       }
     }
   }
 
 