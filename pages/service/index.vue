<template>
  <div>
    <div class="masthead">
      <svg style="color-interpolation-filters: sRGB;">
        <defs>
          <filter id="duotone-151091871828100">
            <fecolormatrix type="matrix"
                           values="-0.01171875 0 0 0 0.0703125 0.31640625 0 0 0 0.109375 0.33984375 0 0 0 0.390625 0 0 0 1 0"></fecolormatrix>
          </filter>
        </defs>
        <image xlink:href="" filter="url(#duotone-151091871828100)" preserveAspectRatio="xMidYMin slice" width="100%"
               height="100%"></image>
      </svg>
      <div class="mast-content">
        <div class="content">
          <h1>{{page.title}}</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <main>
        <div class="content">
          <div v-html="page.html">{{ page.html }}</div>
        </div>
      </main>
    </div>
  </div>

</template>

<script>
  import Logo from '~/components/Logo.vue'
  import { getPage } from '~/api/posts';


  export default {
    async asyncData () {
      const page = await getPage('service');
      return { page: page }
    },
    head () {
      return {
        title: this.page.meta_title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: this.page.meta_description }
        ]
      }
    }
  }
</script>

<style scoped>



</style>
