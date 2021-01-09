<template>
  <div>
<!--    <header>-->
<!--      <div class="container">-->
<!--        <div class="navbar">-->
<!--          <nuxt-link to="/" class="logo">M&M Wealth Managment</nuxt-link>-->
<!--          <nav>-->
<!--            <ul>-->
<!--              <li><nuxt-link to="/home">Home</nuxt-link></li>-->
<!--              <li><nuxt-link to="/service">How can We help?</nuxt-link></li>-->
<!--              <li><nuxt-link to="/blog">Blog</nuxt-link></li>-->
<!--              <li><nuxt-link to="/about">About</nuxt-link></li>-->
<!--&lt;!&ndash;              <li><nuxt-link to="/tag">Tag</nuxt-link></li>&ndash;&gt;-->
<!--&lt;!&ndash;              <li><nuxt-link to="/authors">Authors</nuxt-link></li>&ndash;&gt;-->
<!--              <li><nuxt-link to="/testarticlepage">Test Post</nuxt-link></li>-->
<!--              <li><nuxt-link to="/whymm">Why M&M</nuxt-link></li>-->

<!--              <li><nuxt-link to="/contact">Contact</nuxt-link></li>-->
<!--            </ul>-->
<!--          </nav>-->
<!--        </div>-->
<!--      </div>-->
<!--    </header>-->

<!--    Old menu not clicable-->

<!--    <section>-->
<!--      <header id="header">-->
<!--        <div class="bound-header">-->
<!--          <h1 id="logo">-->
<!--            <a href="/">-->
<!--              <img src="~/assets/img/logommmain.png" alt="">-->

<!--            </a>-->
<!--          </h1>-->
<!--          <h1 id="logo-fixed">-->
<!--            <a href="/">-->
<!--              <img src="~/assets/img/logommmain.png" alt="">-->
<!--            </a>-->
<!--          </h1>-->
<!--          <a class="mobiletoggle"-->
<!--             @click="mobileNavOpen = !mobileNavOpen"-->
<!--          >-->
<!--            <span class="n">n</span>-->
<!--            <span class="a">a</span>-->
<!--            <span class="v">v</span>-->
<!--          </a>-->

<!--          <nav id="nav" :class="{'navbar-menu': true, 'is-active': mobileNavOpen }">-->
<!--            <div-->
<!--                    class="navbar-end"-->
<!--                    @click="mobileNavOpen=false"-->
<!--            >-->
<!--            <ul>-->
<!--              <li class="nav-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-228">-->
<!--                <nuxt-link to="/home">Home</nuxt-link>-->
<!--              </li>-->
<!--              <li class="nav-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-69">-->
<!--              <li><nuxt-link to="/blog">Blog</nuxt-link></li>-->
<!--              <li class="nav-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-29">-->
<!--                <nuxt-link to="/about">About</nuxt-link>-->
<!--              </li>-->
<!--              <li class="nav-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-68">-->
<!--                <nuxt-link to="/whymm">Why M&M</nuxt-link>-->
<!--              </li>-->
<!--            </ul>-->
<!--            </div>-->
<!--          </nav>-->
<!--          <div class="social">-->
<!--            <a href="tel:888-621-6988" class="phone">-->
<!--              <svg viewBox="0 0 1792 1792">-->
<!--                <path d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"/>-->
<!--              </svg>-->
<!--              <span>888-888-8888</span></a>-->
<!--            <a href="mailto:test@test.com?subject=Test%20Email"-->
<!--               class="email">-->
<!--              <svg viewBox="0 0 1792 1792">-->
<!--                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"/>-->
<!--              </svg>-->
<!--            </a>-->
<!--          </div>-->
<!--          <a href="/contact" class="contact">Client Login</a>-->
<!--        </div>-->
<!--      </header>-->
<!--    </section>-->

<!--    Old menu not clicable-->
<Navigation  settings/>
<!--    <TheHeader />-->
<!--    <TheSideNav />-->
    <nuxt />
    <Footer />
  </div>
</template>



<style lang="scss">

  html {
      font-family: SourceSansPro-Regular,serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  body {
    font-family: SourceSansPro-Regular,serif;
    font-size: 16px;
    color: #5f5f5f;
    /*color: darkred;*/
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }


  .container {
    margin: 0 auto;
    width: 100%;
  }
  .content{
    width: 100%;
  }
  main{
    width: 100%;

  }
  header {
    background: #1f2f8a;
    background: -moz-linear-gradient(-70deg, #1f2f8a 0, #00aaea 100%);
    background: -webkit-linear-gradient(-70deg, #1f2f8a 0, #00aaea 100%);
    background: linear-gradient(110deg, #1f2f8a 0, #00aaea 100%);
    /*opacity: 0.8;*/
    padding: 1em 0;
    text-align: center;

    a.navbar-item {
      font-weight: 900;
    }

    /*.navbar-menu {*/
    /*  padding-right: 1em;*/
    /*    */
    /*}*/

    /*.navbar {*/
    /*  display: flex;*/
    /*  justify-content: space-between;*/
    /*  align-items: center;*/
    /*  font-weight: bold;*/

    /*}*/

    a {
      color: #1f2f8a;
      text-decoration: none;
    }




  }

  @media only screen and (min-width: 768px) {
    body {
      font-size: 18px;
    }
  }


</style>

<script>

  import Footer from '@/components/Footer'
  import Navigation from '@/components/Navigation.vue'

  export default {
    components: {

      Navigation,
      Footer},
    data() {
      return {
        mobileNavOpen: false
      }
    }

  }
</script>
