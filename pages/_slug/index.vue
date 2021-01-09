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
          <h1>{{post.title}}</h1>
        </div>
      </div>
    </div>
<!--    <div class="block-layout more-spacing none max-width block-animate come-in">-->
<!--      <div v-html="post.html">{{ post.html }}</div>-->
<!--    </div>-->

    <div class="block-layout more-spacing none max-width block-animate come-in">
      <div class="container">
        <main>
          <div class="content">
            <div v-html="post.html">{{ post.html }}</div>
          </div>
        </main>
      </div>
    </div>


  </div>

</template>

<script>

  import { getSinglePost } from '~/api/posts';

  export default {
    async asyncData ({params}) {
      const post = await getSinglePost(params.slug);
      return { post: post }
    }
  }
</script>

<style scoped>

  /*@import "assets/screen.css";*/
.container{
  padding: 0 1em;
}

</style>
