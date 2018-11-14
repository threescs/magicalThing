//  官方文档有提出props可以传入一个对象或者数组 我们通常会传数组
{/* <template>
  <button :style="computedWidth">{{ computedWidth }}</button>
</template> */}

 
  export default {
    props: {
      width: [String, Number]
    },
    computed: {
      computedWidth () {
        let o = {}
        if (typeof this.width === 'string') o.width = this.width
        if (typeof this.width === 'number') o.width = this.width + 'px'
        return o
      }
    }
  }
 

  // 使用
{/* <template>
  <my-button :width="100px"></my-button>
  <!-- or -->
  <my-button :width="100"></my-button>
</template> */}