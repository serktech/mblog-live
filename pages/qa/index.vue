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
                    <h1>{{page.title}}</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <main>
<!--                <div class="content">-->
<!--                    <div v-html="page.html">{{ page.html }}</div>-->
<!--                </div>-->
            </main>

            <div v-html="page.html" class="block-layout none none default-width" >{{ page.html }}</div>
<!--            <div class="block-layout none none default-width">-->
<!--                <ul>-->
<!--                    <li>-->
<!--                        <input type="checkbox" checked>-->
<!--                        <i></i>-->
<!--                        <h2>Q: Why did you name your firm M&M Wealth Management?</h2>-->
<!--                        <p>A: It stands for Morabito & Marvin</p>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <input type="checkbox" checked>-->
<!--                        <i></i>-->
<!--                        <h2>Q: Whats value do I get with you over traditional stock brokers or robo advisors</h2>-->
<!--                        <p>A: Over 32 years of experience, knowledge, expertiese and training to help you navigate not-->
<!--                            only-->
<!--                            your investments but also tax planning, estate planning and insurance planning, with wide-->
<!--                            access-->
<!--                            to products and services as well as the expertise to choose the ones that best fits your-->
<!--                            needs.-->
<!--                            This alone can save you ten of thousands or even millions in mistakes over your life-->
<!--                            time</p>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <input type="checkbox" checked>-->
<!--                        <i></i>-->
<!--                        <h2>Q: What states do you accept clients from and where are you located?</h2>-->
<!--                        <p>A: We can accept clients from any state and we can do remote video or phone consultations.-->
<!--                            Our-->
<!--                            main office is in Fort Myers FL, however we see clients all over the US including Ohio,-->
<!--                            North-->
<!--                            Carolina and Los Angeles.</p>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <input type="checkbox" checked>-->
<!--                        <i></i>-->
<!--                        <h2>Q: How are you compensated?</h2>-->
<!--                        <p>A: Our compensation is primarily a pre-negotiated asset based fee based on the amount of-->
<!--                            assets-->
<!--                            or a fixed planning fee</p>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <input type="checkbox" checked>-->
<!--                        <i></i>-->
<!--                        <h2>Q: Where are my assets/investments held</h2>-->
<!--                        <p>A: We use Folio as our custodian. Folio Institutional is an independent company that provides-->
<!--                            secure asset custody and innovative investment management tools. Folio Institutional is a-->
<!--                            member-->
<!--                            of SIPC, which protects the securities and cash in each client brokerage account up to-->
<!--                            $500,000-->
<!--                            (including up to $250,000 protection for cash in an account). SIPC protection wards against-->
<!--                            losses stemming from the financial failure of member brokerage firms. A brochure explaining-->
<!--                            SIPC-->
<!--                            coverage is available on the-->
<!--                            <a-->
<!--                                    target="_blank" href="#">SIPC website (www.sipc.org)</a>.In addition they have-->
<!--                            supplemental-->
<!--                            coverage from Lloyds of London of up to $10 million per client. Neither the SIPC nor the-->
<!--                            supplemental insurance protects against losses from the decline in the market value of-->
<!--                            securities.</p>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <input type="checkbox" checked>-->
<!--                        <i></i>-->
<!--                        <h2>Q: What type of investing do you do</h2>-->
<!--                        <p>A: Everyone is unique so we do whatever is determined to be in your best interest. This may-->
<!--                            be a-->
<!--                            combination of stocks, bonds, mutual funds, ETF’s, Managed portfolios, insurance, annuities,-->
<!--                            direct investments or alternative investments</p>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <input type="checkbox" checked>-->
<!--                        <i></i>-->
<!--                        <h2>Q: Do you do tax planning</h2>-->
<!--                        <p>A: We are not CPA’s and do not do taxes, however tax planning is something we strongly-->
<!--                            believe-->
<!--                            in. We believe this is one of the most overlooked areas of financial planning and unlike the-->
<!--                            market, it’s something we have more control of.</p>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <input type="checkbox" checked>-->
<!--                        <i></i>-->
<!--                        <h2>Q: Do you offer insurance</h2>-->
<!--                        <p>A: Yes we have an insurance license, however our goal is to find the best deal and product-->
<!--                            for-->
<!--                            you and many times we contract someone else to write the insurance once we have determined-->
<!--                            the-->
<!--                            amount and type of coverage needed.-->
<!--                        </p>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <input type="checkbox" checked>-->
<!--                        <i></i>-->
<!--                        <h2>Q: Do you do estate planning</h2>-->
<!--                        <p>A: Yes we look at every aspect of estate planning from the very basic to the extremely-->
<!--                            complex-->
<!--                            and we work with your attorney or our attorney to ensure the proper Will, Trust and Power of-->
<!--                            Attorneys are set up correctly</p>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <input type="checkbox" checked>-->
<!--                        <i></i>-->
<!--                        <h2>Q: Do you do annuities</h2>-->
<!--                        <p>A: Yes we have access to almost every insurance carrier and hundreds of products, if-->
<!--                            necessary,-->
<!--                            we can find the annuity that would be in your best interest</p>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <input type="checkbox" checked>-->
<!--                        <i></i>-->
<!--                        <h2>Q: Are you a fiduciary</h2>-->
<!--                        <p>A: Yes</p>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <input type="checkbox" checked>-->
<!--                        <i></i>-->
<!--                        <h2>Q: Do I need a minimum investable asset size</h2>-->
<!--                        <p>A: It depends on the type of service you chose and the negotiated fee structure. For example,-->
<!--                            if-->
<!--                            your asset size is larger the fee structure will be lower. If the asset size is smaller the-->
<!--                            fee-->
<!--                            structure may be more or the available services may be less depending on what program you-->
<!--                            choose. A short phone interview is the best way to determine if we are a good fit for each-->
<!--                            other.</p>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <input type="checkbox" checked>-->
<!--                        <i></i>-->
<!--                        <h2>Q: I have another question not listed here</h2>-->
<!--                        <p>A: Please contact Guiseppi at <a class="email"-->
<!--                                                            href="mailto:gmorabito@mandmwealth.com">gmorabito@mandmwealth.com</a>-->
<!--                            or Eric at <a class="email"-->
<!--                                          href="mailto:emarvin@mandmwealth.com">emarvin@mandmwealth.com</a></p>-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </div>-->


        </div>

    </div>

</template>

<script>
    import Logo from '~/components/Logo.vue'
    import {getPage} from '~/api/posts';


    export default {
        async asyncData() {
            const page = await getPage('qa');
            return {page: page}
        },
        head() {
            return {
                title: this.page.meta_title,
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    {hid: 'description', name: 'description', content: this.page.meta_description}
                ]
            }
        }
    }
</script>

<style scoped>


    @media only screen and (min-width: 768px) {
        .content {
            padding: 2em;
        }
    }

    /*drop*/
    .transition, p, ul li i:before, ul li i:after {
        transition: all 0.25s ease-in-out;
    }

    .flipIn, h1, ul li {
        animation: flipdown 0.5s ease both;
    }

    .no-select, h2 {
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /*html {*/
    /*    !*width: 100%;*!*/
    /*    !*height: 100%;*!*/
    /*    perspective: 900;*/
    /*    overflow-y: scroll;*/
    /*    background-color: #dce7eb;*/
    /*    !*font-family: "Titillium Web", sans-serif;*!*/
    /*    color: rgba(48, 69, 92, 0.8);*/
    /*}*/

    .content_dropdown {
        /*min-height: 0;*/
        display: grid;
        position: relative;
        /*left: 50%;*/
        margin: 1rem 2rem;
        /*transform: translate(-50%, 0);*/
        /*box-shadow: 0 10px 0 0 #ff6873 inset;*/
        background-color: #fefffa;
        /*max-width: 650px;*/
        /*padding: 30px;*/
    }

    @media (max-width: 550px) {
        .content_dropdown {
            box-sizing: border-box;
            transform: translate(0, 0);
            /*max-width: 100%;*/
            /*min-height: 100%;*/
            margin: 0;
            /*left: 0;*/
        }
    }

    h1, h2 {
        /*color: #ff6873;*/
    }

    h1 {
        /*text-transform: uppercase;*/
        /*font-size: 36px;*/
        /*line-height: 42px;*/
        /*letter-spacing: 3px;*/
        /*font-weight: 100;*/
    }

    h2 {
        /*font-size: 26px;*/
        /*line-height: 34px;*/
        /*font-weight: 300;*/
        letter-spacing: 1px;
        display: block;
        /*background-color: #fefffa;*/
        margin: 0;
        cursor: pointer;
    }

    p {
        color: rgba(48, 69, 92, 0.8);
        font-size: 17px;
        line-height: 26px;
        letter-spacing: 1px;
        position: relative;
        overflow: hidden;
        max-height: 800px;
        opacity: 1;
        transform: translate(0, 0);
        margin-top: 14px;
        z-index: 2;
    }

    ul {
        list-style: none;
        perspective: 900;
        padding: 0;
        margin: 0;
    }

    ul li {
        position: relative;
        margin: 0;
        padding-bottom: 15px;
        padding-top: 15px;
        border-top: 1px dotted #dce7eb;
    }

    /*ul li:nth-of-type(1) {*/
    /*    animation-delay: 0.5s;*/
    /*}*/

    /*ul li:nth-of-type(2) {*/
    /*    animation-delay: 0.75s;*/
    /*}*/

    /*ul li:nth-of-type(3) {*/
    /*    animation-delay: 1.0s;*/
    /*}*/

    ul li:last-of-type {
        padding-bottom: 0;
    }

    ul li i {
        position: absolute;
        transform: translate(-6px, 0);
        margin-top: 5px;
        right: 0;
      /*padding-bottom: 20px;*/
      /*padding-top: 15px;*/
    }

    ul li i:before, ul li i:after {
        content: "";
        position: absolute;
        background-color: #121c64;
        width: 3px;
        height: 9px;

    }

    ul li i:before {
        transform: translate(-2px, 0) rotate(45deg);
    }

    ul li i:after {
        transform: translate(2px, 0) rotate(-45deg);
    }

    ul li input[type=checkbox] {
        position: absolute;
        cursor: pointer;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
    }

    ul li input[type=checkbox]:checked ~ p {
        margin-top: 0;
        max-height: 0;
        opacity: 0;
        transform: translate(0, 50%);
    }

    ul li input[type=checkbox]:checked ~ i:before {
        transform: translate(2px, 0) rotate(45deg);
    }

    ul li input[type=checkbox]:checked ~ i:after {
        transform: translate(-2px, 0) rotate(-45deg);
    }

    @keyframes flipdown {
        0% {
            opacity: 0;
            transform-origin: top center;
            transform: rotateX(-90deg);
        }

        5% {
            opacity: 1;
        }

        80% {
            transform: rotateX(8deg);
        }

        83% {
            transform: rotateX(6deg);
        }

        92% {
            transform: rotateX(-3deg);
        }

        100% {
            transform-origin: top center;
            transform: rotateX(0deg);
        }
    }


</style>
