<template>
  <div id="main">
    <header
      id="home"
      class="site-header parallax"
      data-scrollax-parent="true">

      <!-- Parallax Header Image -->
      <div class="parallax-wrapper">
        <div
          class="cover"
          data-scrollax="properties: { 'translateY': '48%' }">
          <img
            src="/images/header-image3.jpg"
            alt="MDR - Mobile Device Repair" >
        </div>
      </div>

      <div class="navigation">
        <div class="container">
          <!-- Site Navigation Bar -->
          <div class="row site-navigation-bar parent">

            <!-- Logo -->
            <div class="col-sm-2 col-xs-4 logo child-center-v">
              <nuxt-link to="/"><img
                src="/images/logo.png"
                width="100"
                alt="Mobile Device Repair"></nuxt-link>
            </div>

            <!-- Toggle Mobile Menu -->
            <div class="col-xs-8 toggle-menu child-center-v">

              <!-- Burger -->
              <div class="navTrigger">
                <i/><i/><i/>
              </div>

            </div>

            <!-- Navigation Bar -->
            <div class="col-sm-10 col-xs-12 navigation-bar child-center-v">

              <!-- Navigation Menu -->
              <nav
                id="navMenu"
                class="nav-menu">
                <ul class="menu">
                  <li><a href="#about">About</a></li>
                  <li><a href="#prices">Prices</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><nuxt-link to="/es">Español</nuxt-link></li>
                </ul>
              </nav>

            </div>

          </div>

        </div>
      </div>

      <div class="container">

        <!-- Site Navigation Bar -->
        <div
          id="navigation-bar"
          class="row site-navigation-bar parent">

          <!-- Logo -->
          <div class="col-sm-2 col-xs-4 logo child-center-v">
            <nuxt-link to="/"><img
              src="/images/logo.png"
              width="100"
              alt="Mobile Device Repair"></nuxt-link>
          </div>

          <!-- Toggle Mobile Menu -->
          <div class="col-xs-8 toggle-menu child-center-v">

            <!-- Burger -->
            <div class="navTrigger">
              <i/><i/><i/>
            </div>

          </div>

          <!-- Navigation Bar -->
          <div class="col-sm-10 col-xs-12 navigation-bar child-center-v">

            <!-- Navigation Menu -->
            <nav
              id="navMenu"
              class="nav-menu">
              <ul class="menu">
                <li class="current-menu-item"><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#prices">Prices</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><nuxt-link to="/es">Español</nuxt-link></li>
              </ul>
            </nav>

          </div>

        </div>

        <!-- Site Header Banner -->
        <div
          class="row header-banner parent"
          data-scrollax="properties: { 'translateY': '48%', 'opacity': '1.4' }">

          <div class="heading-content text-center child-center-v">

            <!-- Heading Title -->
            <div class="row heading-title">
              <h2>Let us fix it!</h2>
              <hr class="small">
              <h1 class="thin">Mobile Device Repair</h1>
            </div>

          </div>

        </div>

        <!-- Arrow Down -->
        <div
          class="row arrow-down-section"
          data-scrollax="properties: { 'opacity': '0.6' }">

          <div class="wrapper-arrow child-center">
            <a
              href="#about"
              class="arrow-down">
              <i class="pe-7s-angle-down"/>
            </a>
          </div>

        </div>

      </div>

    </header>

    <!-- CTA ONE -->
    <section class="offer-section">
      <div class="container">

        <div class="col-md-9 col-sm-12">
          <h2>Let us fix your Phone,computers,and tablets problems.Please Call 817-648-8748!</h2>
        </div>
        <div class="col-md-3 col-md-push-0 col-sm-8 col-sm-push-2 col-xs-10 col-xs-push-1">
          <a
            href="#contact"
            class="button-cta button-block">Contact Us!</a>
        </div>

      </div>
    </section>

    <!-- About -->
    <section
      id="about"
      class="site-section about-section section-focus next-section-indicator">
      <div class="container">

        <!-- Section Heading -->
        <div class="row text-center">

          <!-- Section Header -->
          <header class="col-md-8 col-md-push-2 col-sm-12 section-header">
            <h2>Why Choose MDR?</h2>
            <hr class="normal">
          </header>

          <!-- Section Content -->
          <div class="col-md-8 col-md-push-2 col-sm-12 section-content">
            <p>At MDR Since 2013 we pride ourselves on being problem solvers, be it dropped devices (phones, tablets, computers), wear damage, forgotten passwords, locked phones. We strive to create solutions where there weren’t any before, and because our
            customers mean everything to us we use the highest quality parts for our repairs and back all work with a 30-day warranty.</p>

            <p>If we can't fix it you don't have to pay anything. So try us out with complete confidence that you'll get the best service.</p>
          </div>

        </div>

      </div>
    </section>

    <!-- Prices -->
    <section
      id="prices"
      class="site-section prices-section next-section-indicator">
      <div class="container">

        <!-- Section Heading -->
        <div class="row text-center">

          <!-- Section Header -->
          <header class="col-md-8 col-md-push-2 col-sm-12 section-header">
            <h2>Prices</h2>
            <hr class="normal">
          </header>

          <!-- Section Content -->
          <div class="col-md-8 col-md-push-2 col-sm-12 section-content">
            <p>We do way more than fix cracked screens and many more than the ones listed here. We also try to keep the prices up to date but our provider prices change so frequently that we have to reserve the right to give you a different price once you walk in.</p>
            <p>Prices do not include taxes.</p>
            <p><strong>Now All iPhone Repairs come with a Free Premium Tempered Glass</strong></p>

            <table class="table">
              <thead>
                <tr>
                  <th colspan="2">Apple</th>
                  <th colspan="2">Samsung</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>iPhone 8 Plus</td>
                  <td class="price">$90</td>
                  <td>Galaxy S9 Plus</td>
                  <td class="price">$320</td>
                </tr>
                <tr>
                  <td>iPhone 8</td>
                  <td class="price">$85</td>
                  <td>Galaxy S9</td>
                  <td class="price">$300</td>
                </tr>
                <tr>
                  <td>iPhone 7 Plus</td>
                  <td class="price">$85</td>
                  <td>Galaxy S8 plus</td>
                  <td class="price">$310</td>
                </tr>
                <tr>
                  <td>iPhone 7</td>
                  <td class="price">$80</td>
                  <td>Galaxy S8</td>
                  <td class="price">$305</td>
                </tr>
                <tr>
                  <td>iPhone 6s Plus</td>
                  <td class="price">$80</td>
                  <td>Galaxy S7</td>
                  <td class="price">$210</td>
                </tr>
                <tr>
                  <td>iPhone 6s</td>
                  <td class="price">$75</td>
                  <td>Galaxy S7 EDGE</td>
                  <td class="price">$285</td>
                </tr>
                <tr>
                  <td>iPhone 6 Plus</td>
                  <td class="price">$70</td>
                  <td>Galaxy S6</td>
                  <td class="price">$205</td>
                </tr>
                <tr>
                  <td>iPhone 6</td>
                  <td class="price">$65</td>
                  <td>Galaxy S6 Edge</td>
                  <td class="price">$295</td>
                </tr>
                <tr>
                  <td>iPhone 5,5C,5S,SE</td>
                  <td class="price">$55</td>
                  <td>Galaxy S6</td>
                  <td class="price">$175</td>
                </tr>
                <tr>
                  <td>iPhone XR</td>
                  <td class="price">$245</td>
                  <td>Galaxy S5 Active</td>
                  <td class="price">$220</td>
                </tr>
                <tr>
                  <td>iPhone XS</td>
                  <td class="price">$245</td>
                  <td>Galaxy S5 </td>
                  <td class="price">$210</td>
                </tr>
                <tr>
                  <td>iPhone X</td>
                  <td class="price">$225</td>
                  <td>Galaxy Note 9 </td>
                  <td class="price">$345</td>
                </tr>
                <tr>
                  <td/>
                  <td class="price"/>
                  <td>Galaxy Note 8 </td>
                  <td class="price">$340</td>
                </tr>
                <tr>
                  <td/>
                  <td class="price"/>
                  <td>Galaxy Note 5 </td>
                  <td class="price">$225</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>

    <!-- Services -->
    <section
      id="services"
      class="site-section section-focus prices-section">
      <div class="container">

        <!-- Section Heading -->
        <div class="row text-center">

          <!-- Section Header -->
          <header class="col-md-8 col-md-push-2 col-sm-12 section-header">
            <h2>Services</h2>
            <hr class="normal">
          </header>

          <!-- Section Content -->
          <div class="col-md-8 col-md-push-2 col-sm-12 section-content">
            <p>We're open Mon - Sat 10:00 AM to 6:00 PM and all our services are backed by our 30-day guarantee.</p>
            <p><sup>*</sup>On supported devices</p>
          </div>

        </div>

        <!-- Pricing Tables Container -->
        <div class="row pricing-tables-container">
          <div class="pricing-tables-wrapper clearfix">

            <!-- Pricing Table -->
            <div class="col-md-5 col-md-push-0 col-sm-6 col-sm-push-0 col-xs-8 col-xs-push-2">
              <div class="pricing-table">

                <!-- Plan Head -->
                <div class="plan-head">
                  <h3 class="plan-title">Cell Phones &amp; Tablets</h3>
                  <hr class="normal">
                  <p class="plan-subtitle">Apple, Samsung, HTC</p>
                </div>

                <!-- Plan Content -->
                <div class="plan-content">
                  <h4 class="feature-title"><i class="pe-7s-check check"/><a
                    id="cracked-screens"
                    href="#prices">Cracked Screens</a></h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Broken LCD's</h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Charging Port Issues</h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Data Transfer</h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/><nuxt-link to="/supported">Data Recovery<sup>*</sup></nuxt-link></h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>iPhone &amp; <nuxt-link to="/supported">Android Unlock<sup>*</sup></nuxt-link></h4>
                </div>

              </div>
            </div>

            <!-- Pricing Table -->
            <div class="col-md-5 col-md-push-0 col-sm-6 col-sm-push-0 col-xs-8 col-xs-push-2">
              <div class="pricing-table">

                <!-- Plan Head -->
                <div class="plan-head">
                  <h3 class="plan-title">Laptops</h3>
                  <hr class="normal">
                  <p class="plan-subtitle">HP, Dell, Lenovo</p>
                </div>

                <!-- Plan Content -->
                <div class="plan-content">
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Virus Removal</h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Password Reset</h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Tune-up</h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Screen Repair</h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Data Recovery</h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Hardware &amp; Software Upgrade</h4>
                </div>


              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA TWO -->
    <section class="offer-section">
      <div class="container">

        <div class="col-md-9 col-sm-12">
          <h2>Dropped your phone?</h2>
        </div>
        <div class="col-md-3 col-md-push-0 col-sm-8 col-sm-push-2 col-xs-10 col-xs-push-1">
          <a
            href="#contact"
            class="button-cta button-block">Just ask!</a>
        </div>

      </div>
    </section>

    <!-- Testimonials -->
    <section
      id="testimonials"
      class="site-section testimonials-section">
      <div class="container">

        <!-- Section Heading -->
        <div class="row text-center">

          <!-- Section Header -->
          <header class="col-md-8 col-md-push-2 col-sm-12 section-header">
            <h2>Testimonials</h2>
            <hr class="normal">
          </header>

        </div>

        <!-- Clients -->
        <div class="row clients">

          <!-- Testimonials Carousel -->
          <carousel
            id="testimonials-carousel"
            class="col-md-8 col-md-push-2">

            <!-- Client Testimonial -->
            <slide class="client-testimonial text-center">
              <!-- Testimonials Face -->
              <div class="testimonial-face">

                <div class="face">
                  <img
                    src="/images/avatars/avatar-02.jpg"
                    alt="Marcus Jackson" >
                </div>

                <div class="info">
                  <h3 class="name">Marcus Jackson</h3>
                </div>

              </div>

              <!-- Testimonials Quote -->
              <div class="testimonial-quote">
                <p class="quote">Took my phone in with a broken screen, they fixed and it was only $70.</p>
              </div>
            </slide>



            <!-- Client Testimonial -->
            <slide class="client-testimonial text-center">
              <!-- Testimonials Face -->
              <div class="testimonial-face">

                <div class="face">
                  <img
                    src="/images/avatars/avatar-01.jpg"
                    alt="Rosetta Schwartz" >
                </div>

                <div class="info">
                  <h3 class="name">Rosetta Schwartz</h3>
                </div>

              </div>

              <!-- Testimonials Quote -->
              <div class="testimonial-quote">
                <p class="quote">He did a fast great job. I waited 5 min and my phone works perfectly. $40 cheaper than anywhere else.</p>
              </div>
            </slide>



            <!-- Client Testimonial -->
            <slide class="client-testimonial text-center">
              <!-- Testimonials Face -->
              <div class="testimonial-face">

                <div class="info">
                  <h3 class="name">Maria Bautista</h3>
                </div>

              </div>

              <!-- Testimonials Quote -->
              <div class="testimonial-quote">
                <p class="quote">I've been in there several times. He has always been professional, quick and fixed everything we needed him to.</p>
              </div>
            </slide>

            <!-- Client Testimonial -->
            <slide class="client-testimonial text-center">
              <!-- Testimonials Face -->
              <div class="testimonial-face">

                <div class="info">
                  <h3 class="name">Alaina Aguirre</h3>
                </div>

              </div>

              <!-- Testimonials Quote -->
              <div class="testimonial-quote">
                <p class="quote">I've gotten my phone fixed here multiple times and it's always a great experience and it's always a super cheap and great job!!</p>
              </div>
            </slide>

            <!-- Client Testimonial -->
            <slide class="client-testimonial text-center">
              <!-- Testimonials Face -->
              <div class="testimonial-face">

                <div class="info">
                  <h3 class="name">Austin Hodshire</h3>
                </div>

              </div>

              <!-- Testimonials Quote -->
              <div class="testimonial-quote">
                <p class="quote">Great people and amazing service too! This guy fixed my phone in less than 15 minutes! Thank y'all!</p>
              </div>
            </slide>

            <!-- Client Testimonial -->
            <slide class="client-testimonial text-center">
              <!-- Testimonials Face -->
              <div class="testimonial-face">

                <div class="info">
                  <h3 class="name">Ramon Martinez</h3>
                </div>

              </div>

              <!-- Testimonials Quote -->
              <div class="testimonial-quote">
                <p class="quote">Thanks to Luis for fixing my iPhone I recommend y'all to come to Luis Ogaz</p>
              </div>
            </slide>

            <!-- Client Testimonial -->
            <slide class="client-testimonial text-center">
              <!-- Testimonials Face -->
              <div class="testimonial-face">

                <div class="info">
                  <h3 class="name">Haylea Ward</h3>
                </div>

              </div>

              <!-- Testimonials Quote -->
              <div class="testimonial-quote">
                <p class="quote">I didn't know fixing my phone could be so easy! I'm definitely coming here every single time! He is amazing!</p>
              </div>
            </slide>

          </carousel>

        </div>

        <div
          class="row text-center"
          style="margin-top: 30px;">

          <!-- Section Header -->
          <header class="col-md-8 col-md-push-2 col-sm-12">
            <a
              href="https://goo.gl/rHBHlI"
              target="_blank">Write a review</a>
          </header>

        </div>

      </div>
    </section>

    <!-- Contact -->
    <section
      id="contact"
      class="site-section contact-section next-section-indicator parallax"
      data-scrollax-parent="true">

      <!-- Parallax Contact Image -->
      <div
        class="cover"
        data-scrollax="properties: { 'translateY': '48%' }">
        <img
          src="/images/contact-image.jpg"
          alt="Contact MDR" >
      </div>

      <div class="container">

        <!-- Section Heading -->
        <div class="row text-center">

          <!-- Section Header -->
          <header class="col-md-8 col-md-push-2 col-sm-12 section-header">
            <h2>Contact Us</h2>
            <hr class="normal">
          </header>

        </div>

        <!-- Form Container -->
        <div class="row form-container">

          <!-- Contact Form -->
          <div class="col-md-8 col-md-push-2">
            <form
              id="sera-contact-form"
              action="https://formspree.io/contact@mymdr.net"
              method="POST"
              class="contact-form container-fluid">
              <input
                type="text"
                name="_gotcha"
                style="display:none" >
              <div class="col-md-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name" >
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  name="_replyto"
                  placeholder="Email" >
              </div>
              <div class="col-md-12">
                <input
                  type="text"
                  name="_subject"
                  placeholder="Subject" >
              </div>
              <div class="col-md-12">
                <textarea
                  name="message"
                  rows="8"
                  cols="40"
                  placeholder="Message"/>
              </div>
              <div class="col-md-12 form-action">
                <button
                  type="submit"
                  class="send-button">Send Message</button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>

    <!-- Location -->
    <GmapMap
      :center="{lat: 32.34541, lng: -97.39543}"
      :zoom="12"
      :options="{scrollwheel: false}"
      style="width: 100%; height: 490px;"
      map-type-id="roadmap"
    >
      <GmapMarker :position="{lat: 32.34541, lng: -97.39543}"/>
      <GmapInfoWindow :position="{lat: 32.34541, lng: -97.39543}">
        <span>
          <strong>MDR - Mobile Device Repair</strong><br>
          709B W Henderson St, Cleburne, TX 76033<br>
        </span>
        <br>
        <a
          href="https://goo.gl/maps/Pajzi11j2H32"
          target="_blank">Open in Google Maps</a>
      </GmapInfoWindow>

    </GmapMap>

    <SiteFooter />

    <!-- Top marker -->
    <Top />
  </div>
</template>

<script>
import SiteFooter from '@/components/SiteFooter'
import Top from '@/components/Top'
export default {
  name: 'Home',
  components: {
    SiteFooter,
    Top
  }
}
</script>
