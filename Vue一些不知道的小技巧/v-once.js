// 通过v-once创建低开销的静态组件, 渲染普通的HTML元素在Vue 中是非常快速的,但有的时候你可能有一个组件,这个组件中包含了大量静态资源, 在这种情况下, 你可以在根元素上加上v-once

// 作用就是以确保这些内容只计算一次然后缓存起来
<template>
  <div class="box" v-once>
    <h2> 用户协议 </h2>
    ... a lot of static content ...
  </div>
</template>