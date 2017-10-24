<template>
  <div>
    <con>
      <h1 slot="header">这里可能是一个页面标题</h1>
      <p>主要内容的一个段落。</p>
      <p>另一个主要段落。</p>
      <p slot="footer">这里有一些联系信息</p>
    </con>
  </div>
</template>

<script>
  export default{
    components: {
      con: {
        template:`
        <div class="container">
          <header>
            <slot name="header"></slot>
          </header>
          <main>
            <slot></slot>
          </main>
          <footer>
            <slot name="footer"></slot>
          </footer>
        </div>
        `
      }
    }
  }
</script>

<style>
</style>