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
                <image xlink:href="" filter="url(#duotone-151091871828100)" preserveAspectRatio="xMidYMin slice"
                       width="100%"
                       height="100%"></image>
            </svg>
            <div class="mast-content">
                <div class="content">
                    <h1>Latest posts</h1>
                </div>
            </div>
        </div>
        <!--        <div class="container">-->
        <!--            <main>-->
        <!--                <ul>-->
        <!--                    <li v-for="(post, index) in posts" :key="index">-->
        <!--                        <img :src="post.feature_image">-->
        <!--                        <div class="content">-->
        <!--                            <span>{{ post.authors[0].name }}</span>-->
        <!--                            <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>-->
        <!--                            <p>{{ post.excerpt }}</p>-->
        <!--                        </div>-->
        <!--                    </li>-->
        <!--                </ul>-->
        <!--            </main>-->
        <!--        </div>-->


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
<!--                                         <p><time datetime="">{{ post.published_at }}</time></p>-->

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

    import {getPosts} from '~/api/posts';

    export default {
        async asyncData() {
            const posts = await getPosts();
            return {posts: posts}
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        padding: 0 1em;
    }

    .hero {
        background: #1f2f8a;
        background: -moz-linear-gradient(-70deg, #1f2f8a 0, #00aaea 100%);
        background: -webkit-linear-gradient(-70deg, #1f2f8a 0, #00aaea 100%);
        background: linear-gradient(110deg, #1f2f8a 0, #00aaea 100%);
        color: white;
        text-align: center;
        padding-top: 2em;

        h1 {
            margin-bottom: 1em;
        }

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

    .container ul {
        list-style-type: none;
        padding: 0;
    }

    main {

        li {
            /*background: white;*/
            /*border-radius: 1em;*/
            /*padding: .8em;*/
            /*margin: 1em 0;*/
            /*box-shadow: 15px 21px 40px 0px rgba(0,0,0,0.04);*/
        }

        img {
            width: 100%;
            border-radius: .5em;
        }

        .content {
            /*padding: .5em;*/
        }

        a {
            font-size: 1.5em;
            text-decoration: none;
            color: black;
            font-weight: bold;
            display: block;
            margin: -.1em 0 .2em;
        }

        h2 {
            margin-top: 3em;
            text-transform: uppercase;
            font-size: .8em;
        }

        span {
            color: #1f2f8a;
            text-transform: uppercase;
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
