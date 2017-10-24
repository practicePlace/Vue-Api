<template>
  <div>
    <cycle :msg="msg"></cycle>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: [
          {
            text: 1,
            children: [{
                text: '1-1',
                text: '1-2'
            }]
          },
          {
            text: 2,
            children: [{
              text: '2-1',
              text: '2-2'
            }]
          },
          {
            text: 3,
            children: [{
               text: '3-1',
               text: '3-2'
            }]
          }
        ]
      }
    },
    components:{
      cycle:{
        name: 'gs',
        template: `
          <ul>
            <li v-for='(a, index) in msg' :key="index" @click='appear(index)'>
              {{a.text}}
             <gs :msg='a.children' v-if='index===show' ></gs>
            </li>
          </ul>
        `,
        props: ['msg'],
        data(){
          return {
            show:NaN
          }
        },
        methods: {
          appear(idx){
            this.show = idx
          }
        }
      }
    }
  }
</script>
<style>
  /* 注意： 递归要给个终止条件，否则就是死循环，上述Demo的终止条件是v-if来控制*/
/*更详情请参考  http://www.cnblogs.com/gsgs/p/6687030.html*/
</style>