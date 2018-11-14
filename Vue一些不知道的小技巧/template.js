<template>
  <div class="box">
    <template v-if="isVal">
      <h2>...</h2>
    </template>
    <template v-else>
      <h2>...</h2>
    </template>
  </div>
</template>
 

//  我们做 v-if或者v-for 判断遍历的时候, 可以把判断条件放在tempalte组件上, 最终的渲染结果不会将tempalte元素渲染出来