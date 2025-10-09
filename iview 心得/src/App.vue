<template>
  <div class="root">
    <!-- Tag 一行超出显示 ... 鼠标移入显示全部 -->
    <div class="tag-ellipsis">
      <h4>Tag 一行超出显示 ... 鼠标移入显示全部</h4>
      <Tooltip v-for="i in 3" :key="i" content="Here is the prompt text">
        <Tag color="primary" closable>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis dolor ducimus nesciunt omnis. At eaque fugit ipsam labore, nobis non quis repellendus sequi veniam voluptates! Delectus provident quam voluptatum.
        </Tag>
      </Tooltip>
    </div>

    <br>
    <br>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .root {
    padding: 30px;
  }
  .tag-ellipsis {
    max-width: 300px;
    :deep(.ivu-tag) {
      display: inline-flex;
      max-width: 100%;
    }
    :deep(.ivu-tag-text) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    :deep(.ivu-tag .ivu-icon-ios-close) {
      top: 5px;
    }
    :deep(.ivu-tooltip) {
      max-width: 100%;
    }
    :deep(.ivu-tooltip-rel) {
      max-width: 100%;
    }
  }
</style>