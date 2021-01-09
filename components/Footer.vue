<template>
    <section>
        <footer id="footer">
            <div class="footer-wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 153">
                    <path fill="#FFF" fill-rule="evenodd"
                          d="M1440 119.6C1294.8 169 1126 163 933.3 101 644.3 8 340.3-56.2 0 138.8V0h1440v119.6z"/>
                </svg>
            </div>
            <div class="bound-header">
                <div class="footer-top address vcard">
                    <div class="footer-logo">
                        <a href="/">
                            <img src="~/assets/img/logo-big.png" alt="">
                        </a>
                    </div>

                    <div class="footer-address">
					<span class="">
					<span class="fn"><h6 style="display: none;" class="org">M&M Wealth Management, LLC</h6></span>
					<span class="adr"><span class="street-address">13410 Parker Commons Blvd Suite 101</span><br>
					<span class="locality">Fort Myers</span>, <span class="region"
                                                                    title="North Carolina">FL</span> <span
                                class="postal-code">33912</span></span></span>
                    </div>

                    <div class="footer-contact">
                        <span><strong><a href="#">Guiseppi Morabito, CFP®, CRPS®</a></strong></span><br>
                        <span><a class="email"
                                 href="mailto:gmorabito@mandmwealth.com">gmorabito@mandmwealth.com</a></span><br>
                        Phone: <span class="tel"><a href="tel:440-212-3926">440-212-3926</a></span><br>
                    </div>

                    <div class="footer-contact">
                        <span><strong><a href="#">Eric Marvin, CFP®, CRPC®</a></strong></span><br>
                        <span><a class="email"
                                 href="mailto:emarvin@mandmwealth.com">emarvin@mandmwealth.com</a></span><br>
                        Phone: <span class="tel"><a href="tel:239-288-6542">239-288-6542</a></span><br>
                    </div>

                    <!--          <div class="footer-button">-->
                    <!--            <a href="mailto:example@example.com?subject=Contact%20MM%20Wealth%20Managment"-->
                    <!--               class="contact">Hire Us <i>-->
                    <!--              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 22">-->
                    <!--                <path fill-rule="evenodd"-->
                    <!--                      d="M19.7 11.3c0-.5 0-1-.5-1.2l-8.7-8.6A1.7 1.7 0 0 0 9.3 1c-.5 0-1 0-1.2.4l-1 1a1.7 1.7 0 0 0 0 2.4l4 4H1.6c-1 0-1.6.7-1.6 1.6V12c0 1 .6 2 1.6 2H11l-4 3.8a1.7 1.7 0 0 0-.4 1.2c0 .5.2 1 .5 1.2l1 1c.4.3.8.5 1.3.5.4 0 1-.2 1.2-.5l8.7-8.7c.4-.3.5-.8.5-1.2z"/>-->
                    <!--              </svg>-->
                    <!--            </i></a>-->
                    <!--          </div>-->


                </div>
                <div class="copyright"><p class="copy">&copy; 2020 Copyright M&M Wealth Management, LLC. All Rights
                    Reserved. <a
                            target="_blank" href="#">Web Design by SerkTech</a></p>
                    <br>
                    <p  class="copy">
                        *** M&M WEALTH MANAGEMENT, LLC IS A REGISTERED INVESTMENT ADVISER IN FLORIDA. WE ARE AUTHORIZED TO DO BUSINESS IN FLORIDA, OHIO AND OTHER STATES WHERE WE ARE REGISTERED, EXEMPTED OR EXCLUDED FROM REGISTRATION. INFORMATION PRESENTED HERE IS FOR EDUCATIONAL PURPOSES ONLY AND DOES NOT INTEND TO MAKE AN OFFER OR SOLICITATION FOR THE SALE OR PURCHASE OF ANY SPECIFIC SECURITIES PRODUCT, SERVICE OR INVESTMENT STRATEGY. INVESTMENTS INVOLVE RISK AND UNLESS OTHERWISE STATED, ARE NOT GUARANTEED. BE SURE TO FIRST CONSULT WITH A QUALIFIED FINANCIAL ADVISER, TAX PROFESSIONAL, OR ATTORNEY BEFORE IMPLEMENTING ANY STRATEGY OR RECOMMENDATION DISCUSSED HERIN.

                    </p>
                </div>
            </div>
        </footer>
    </section>
</template>

<!--<script>-->
<!--export default {-->
<!--  props: {-->
<!--    settings: {-->
<!--      type: Object,-->
<!--      required: true-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<style>

    #footer {
        background: #00aaea;
        background: -moz-linear-gradient(left, #00aaea 0, #1f2f8a 100%);
        background: -webkit-linear-gradient(left, #00aaea 0, #1f2f8a 100%);
        background: linear-gradient(to right, #00aaea 0, #1f2f8a 100%);
        padding: 0 0 60px;
        overflow: hidden
    }

    #footer .footer-wave {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 10.625%;
        overflow: hidden;
        margin-bottom: 30px;
        margin-top: -2px
    }

    #footer .footer-wave svg {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%
    }

    #footer .footer-top {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        /*-webkit-box-pack: space-between;*/
        /*-moz-box-pack: space-between;*/
        /*-ms-flex-pack: space-between;*/
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-box-align: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        color: #fff
    }

    #footer .footer-top a {
        color: #fff
    }

    #footer .footer-top .footer-logo {
        width: 216px;
        height: 104px;
        position: relative;
        fill: #fff
    }

    #footer .footer-top .footer-logo a, #footer .footer-top .footer-logo svg {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%
    }

    #footer .footer-top .footer-address {
        width: 220px
    }

    #footer .footer-top .footer-contact {
        width: 260px
    }

    #footer .footer-top .footer-button {
        width: 180px;
        position: relative;
        height: 50px
    }

    #footer .footer-top .footer-button a {
        width: 100%;
        background: #00a9e9
    }

    #footer .footer-top .footer-button a i {
        margin-top: -3px;
        height: 14px;
        width: 14px;
        display: inline-block;
        margin-left: 5px;
        position: relative;
        fill: #fff;
        vertical-align: middle
    }

    #footer .footer-top .footer-button a i svg {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%
    }

    #footer .copyright {
        width: 100%;
        border-top: 1px solid rgba(255, 255, 255, .2);
        padding-top: 30px;
        margin-top: 30px;
        text-align: center
    }

    #footer .copyright p {
        color: #fff
    }

    #footer .copyright p a {
        color: #fff
    }

    @media (max-width: 1024px) {
        #footer {
            padding: 0 0 30px
        }

        #footer .footer-wave {
            margin-bottom: 20px
        }

        #footer .footer-top {
            display: block
        }

        #footer .footer-top .footer-logo {
            margin: 0 auto 20px
        }

        #footer .footer-top .footer-address {
            width: 100%;
            text-align: center;
            margin: 0 auto
        }

        #footer .footer-top .footer-contact {
            width: 100%;
            text-align: center;
            margin: 0 auto 20px
        }

        #footer .footer-top .footer-button {
            width: 180px;
            position: relative;
            height: 50px;
            margin: 0 auto
        }

        #footer .footer-top .footer-button a.contact {
            display: block !important
        }

        #footer .footer-top .copyright {
            padding-top: 20px;
            margin-top: 20px
        }
    }

    .come-in {
        transform: translateY(150px);
        -webkit-transform: scale(.8);
        animation: come-in .8s ease forwards
    }

    .come-in:nth-child(odd) {
        animation-duration: .6s
    }

    .already-visible {
        transform: translateY(0);
        animation: none
    }

    @keyframes come-in {
        to {
            transform: translateY(0);
            -webkit-transform: scale(1)
        }
    }

</style>
