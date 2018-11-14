// 作用于一些筛选不想显示的条目(我曾用到一些菜单需要做权限的需求)

// v-for 比 v-if渲染优先级更高 
// 举个栗子

{/* <template>
  <ul class="items">
    <!-- 只有激活的用户才可以显示 -->
    <li 
      v-for="(user, index) in users" 
      v-if="user.isActive" 
      :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template> */}

 