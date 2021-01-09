<template>
  <div>
    <div class="hero">
      <div class="container">
        <h1>Welcome to My Blog</h1>
        <p class="subtitle">We create customized investment strategies designed to </p>
          <nuxt-link to="/contact" class="contact">Contact</nuxt-link>
      </div>

    </div>

    <div class="container">
      <main>
        <h4>Latest posts</h4>
        <ul>
          <li v-for="(post, index) in posts" :key="index">
            <img :src="post.feature_image">
            <div class="content">
              <span>{{ post.authors[0].name }}</span>
              <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
              <p>{{ post.excerpt }}</p>
            </div>
          </li>
        </ul>
      </main>
    </div>

  </div>
</template>

<script>

  import {getPosts} from '~/api/posts';

  export default {
    async asyncData() {
      const posts = await getPosts();
      return {posts: posts}
    }
  }
</script>

<style lang="scss">

  .hero {
    background: #1f2f8a;
    background: -moz-linear-gradient(-70deg, #1f2f8a 0, #00aaea 100%);
    background: -webkit-linear-gradient(-70deg, #1f2f8a 0, #00aaea 100%);
    background: linear-gradient(110deg, #1f2f8a 0, #00aaea 100%);
    color: white;
    text-align: center;
    padding-top: 2em;


    .contact {
      background: #1f2f8a;
      padding: .5em 3em;
      margin: 2em 0 3em;
      /*display: inline-block;*/
      border-radius: 10px;
      color: #B4D21E;
      text-decoration: none;
    }
  }



  @media only screen and (min-width: 768px) {
    main li {
      display: grid;
      grid-template-columns: 180px auto;
      grid-column-gap: 1em;
    }
  }

</style>
