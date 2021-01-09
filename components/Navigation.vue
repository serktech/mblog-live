<template>
    <div>
        <header id="header">
            <div class="bound-header">

                <h1 id="logo">
                    <nuxt-link to="/">
                        <img class="logo-mobile" src="~/assets/img/logommmain.png" alt="Site Logo">
                    </nuxt-link>
                </h1>
                <a href="https://www.folioidentity.com/identity/login?service=https%3A%2F%2Fverification.folioidentity.com%3A443%2Fverification%2Flogin%3Bjsessionid%3D47b806114cd4655536437f4d6980%3Fservice%3Dhttps%253A%252F%252Fwww.folioclient.com%253A443%252Fj_security_check%26login.partnercode%3DIACLIENT%26login.sourcehost%3Dhttps%253A%252F%252Fwww.folioclient.com%253A443%26mbr.loginID%3Dsso&login.partnercode=IACLIENT&login.sourcehost=https%3A%2F%2Fwww.folioclient.com%3A443"
                   class="clogin">Folio <br>Login</a>
                <a href="https://wealth.emaplan.com/ema/ria/mandmwealth"
                   class="clogin2">Client <br>Login</a>
                <a class="mobiletoggle"
                   role="button"
                   :class="{'navbar-burger': true, 'is-active': mobileNavOpen}"
                   aria-label="menu"
                   @click="mobileNavOpen = !mobileNavOpen"
                >
                    <span aria-hidden="true" class="n"/>
                    <span aria-hidden="true" class="a"/>
                    <span aria-hidden="true" class="v"/>
                </a>


                <nav id="nav">
                    <ul>
                        <li class="nav-item  menu-item">
                            <nuxt-link to="/">Home</nuxt-link>
                        </li>
                        <li class="nav-item  menu-item">
                            <nuxt-link to="/service">Our Approach</nuxt-link>
                        </li>
                        <li class="nav-item  menu-item">
                            <nuxt-link to="/about">About us</nuxt-link>
                        </li>
                        <li class="nav-item  menu-item">
                            <nuxt-link to="/blog">Blog</nuxt-link>
                        </li>
                        <li class="nav-item  menu-item">
                            <nuxt-link to="/qa">Q&A</nuxt-link>
                        </li>
                    </ul>
                </nav>
                <nav role="navigation" aria-label="main navigation">
                    <div :class="{'navbar-menu': true, 'is-active': mobileNavOpen }">
                        <div
                                class="navbar-end"
                                @click="mobileNavOpen=false"
                        >

                            <ul class="mobilenav">
                                <li class="nav-item  menu-item">
                                    <nuxt-link to="/">Home</nuxt-link>
                                </li>
                                <li class="nav-item  menu-item">
                                    <nuxt-link to="/service">Our Approach</nuxt-link>
                                </li>
                                <li class="nav-item  menu-item">
                                    <nuxt-link to="/about">About us</nuxt-link>
                                </li>
                                <li class="nav-item  menu-item">
                                    <nuxt-link to="/blog">Blog</nuxt-link>
                                </li>
                                <li class="nav-item  menu-item">
                                    <nuxt-link to="/qa">Q&A</nuxt-link>
                                </li>
                            </ul>


                        </div>
                    </div>
                </nav>
                <!--        <div class="social">-->
                <!--          <a href="tel:888-621-6988" class="phone">-->
                <!--            <svg viewBox="0 0 1792 1792">-->
                <!--              <path d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"/>-->
                <!--            </svg>-->
                <!--            <span>888-888-8888</span></a>-->
                <!--          <a href="mailto:test@test.com?subject=Test%20Email"-->
                <!--             class="email">-->
                <!--            <svg viewBox="0 0 1792 1792">-->
                <!--              <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"/>-->
                <!--            </svg>-->
                <!--          </a>-->
                <!--        </div>-->
                <a href="https://www.folioidentity.com/identity/login?service=https%3A%2F%2Fverification.folioidentity.com%3A443%2Fverification%2Flogin%3Bjsessionid%3D47b806114cd4655536437f4d6980%3Fservice%3Dhttps%253A%252F%252Fwww.folioclient.com%253A443%252Fj_security_check%26login.partnercode%3DIACLIENT%26login.sourcehost%3Dhttps%253A%252F%252Fwww.folioclient.com%253A443%26mbr.loginID%3Dsso&login.partnercode=IACLIENT&login.sourcehost=https%3A%2F%2Fwww.folioclient.com%3A443"
                   class="contact">Folio Login</a>
                <a href="https://wealth.emaplan.com/ema/ria/mandmwealth"
                   class="contact2">Client Login</a>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        props: {
            settings: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                mobileNavOpen: false
            }
        }
    }
</script>

<style scoped>
  a:hover{
    color: #6696dd;

  }
    .navbar-burger {
        color: #fff;
        cursor: pointer;
        display: block;
        height: 3.25rem;
        position: relative;
        width: 3.25rem;
        margin-left: auto;
    }

    .navbar-menu.is-active {
        background: rgba(255, 255, 255, 0.85);
    }

    .mobilenav li {
        margin-bottom: 20px;
    }

    .nuxt-link-active {
        font-weight: bold;
    }


    @media only screen and (min-width: 1024px) {
        .navbar-menu {
            display: none;
        }

        .mobiletoggle.navbar-burger {
            display: none;
        }

        .clogin{
            display: none;
        }
        .clogin2{
            display: none;
        }

        .logo-mobile img{
            height: 2rem;
        }

    }

</style>
