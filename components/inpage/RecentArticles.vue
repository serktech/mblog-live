<template>
<!--    NOT IN PRODUCTION -->
  <div>
    <!--      Blog posts grid no pic start -->
    <div class="block-layout more-spacing none max-width block-animate come-in">
      <!--            <div id="title" class="center">-->
      <!--                <h2>Recent Articles</h2>-->
      <!--            </div>-->
      <div class="recent-news">
        <div class="wave-bg">
          <div class="wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 153">
              <path fill="#FFF" fill-rule="evenodd"
                    d="M1440 119.6C1294.8 169 1126 163 933.3 101 644.3 8 340.3-56.2 0 138.8V0h1440v119.6z"></path>
            </svg>
          </div>
          <div class="grid bound-layout layout-one-column">
            <div class="cols3">
              <div v-for="(post, index) in posts" :key="index" class="col">
                <nuxt-link :to="{ path: post.slug }" target="_blank">

                                  <span
                                          class="news-wrapper">
                                  <div class="pub-logo">
                                  <div class="pub-title">{{ post.title }}</div>
                                   </div>
                                         <h6>{{ post.excerpt }}</h6>
                                         <p><time datetime="2020-01-01">January 1, 2020</time></p>
                                         <div class="slide">Read Full Article <i>
                                           <svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 22">
                                              <path fill-rule="evenodd"
                                                    d="M19.7 11.3c0-.5 0-1-.5-1.2l-8.7-8.6A1.7 1.7 0 0 0 9.3 1c-.5 0-1 0-1.2.4l-1 1a1.7 1.7 0 0 0 0 2.4l4 4H1.6c-1 0-1.6.7-1.6 1.6V12c0 1 .6 2 1.6 2H11l-4 3.8a1.7 1.7 0 0 0-.4 1.2c0 .5.2 1 .5 1.2l1 1c.4.3.8.5 1.3.5.4 0 1-.2 1.2-.5l8.7-8.7c.4-.3.5-.8.5-1.2z"></path>
                                          </svg></i></div>
						          </span>
                </nuxt-link>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>

    <!--      Blog posts grid end -->
  </div>
</template>

<script>
    import {getSixPosts} from '~/api/posts';
    import RecentArticles from "../components/inpage/RecentArticles";
    import {getSinglePost} from "../api/posts";


    export default {

        async asyncData() {
            const posts = await getSixPosts();
            return {posts: posts}
        }
    }



</script>

<style scoped>

</style>
