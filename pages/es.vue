<template>
  <div>
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
                  <li><a href="#about">Acerca</a></li>
                  <li><a href="#prices">Precios</a></li>
                  <li><a href="#services">Servicios</a></li>
                  <li><a href="#testimonials">Testimonios</a></li>
                  <li><a href="#contact">Cont&aacute;ctanos</a></li>
                  <li><nuxt-link to="/">English</nuxt-link></li>
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
                <li class="current-menu-item"><a href="#home">Inicio</a></li>
                <li><a href="#about">Acerca</a></li>
                <li><a href="#prices">Precios</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#testimonials">Testimonios</a></li>
                <li><a href="#contact">Cont&aacute;ctanos</a></li>
                <li><a href="/">English</a></li>
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
              <h2>¡D&eacute;jenos arregl&aacute;rselo!</h2>
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

    <section class="offer-section">
      <div class="container">

        <div class="col-md-9 col-sm-12">
          <h2>Arreglamos sus problemas electr&oacute;nicos</h2>
        </div>
        <div class="col-md-3 col-md-push-0 col-sm-8 col-sm-push-2 col-xs-10 col-xs-push-1">
          <a
            href="#contact"
            class="button-cta button-block">Cont&aacute;ctenos</a>
        </div>

      </div>
    </section>

    <section
      id="about"
      class="site-section about-section section-focus next-section-indicator">
      <div class="container">

        <!-- Section Heading -->
        <div class="row text-center">

          <!-- Section Header -->
          <header class="col-md-8 col-md-push-2 col-sm-12 section-header">
            <h2>¿Por qu&eacute; MDR?</h2>
            <hr class="normal">
          </header>

          <!-- Section Content -->
          <div class="col-md-8 col-md-push-2 col-sm-12 section-content">
            <p>En MDR nos enorgullecemos de ser capaces de resolver problemas, sea por la ca&iacute;da del dispositivo (celulares, tabletas, computadoras), da&ntilde;o por uso, olvido de contrase&ntilde;a, celular bloqueado. Nos esforzamos por crear
            soluciones donde no exist&iacute;a una antes y, porque nuestros clientes significan todo para nosotros, siempre utilizamos las piezas de m&aacute;s alta calidad para nuestras reparaciones y respaldamos todo el trabajo con una garant&iacute;a
            de 30 d&iacute;as.</p>

            <p>Si no podemos solucionar su problema usted no tiene que pagar nada. ¡Venga y pru&eacute;benos!</p>
          </div>

        </div>

      </div>
    </section>

    <section
      id="prices"
      class="site-section prices-section next-section-indicator">
      <div class="container">

        <!-- Section Heading -->
        <div class="row text-center">

          <!-- Section Header -->
          <header class="col-md-8 col-md-push-2 col-sm-12 section-header">
            <h2>Precios</h2>
            <hr class="normal">
          </header>

          <!-- Section Content -->
          <div class="col-md-8 col-md-push-2 col-sm-12 section-content">
            <p>Arreglamos m&aacute;s que pantallas quebradas y m&aacute;s de las que se encuentran enlistadas aqu&iacute;. Tambi&eacute;n hacemos nuestro mejor esfuerzo por mantener los precios actualizados, pero con los constantes cambios en los materiales que utilizamos estos cambian muy frecuentemente por los que nos reservamos el darle un precio diferente cuando venga por el servicio.</p>
            <p>Los precios no incluyen impuestos.</p>
            <p><strong>Ahora todos las reparaciones de iPhones incluyen un Protector de Vidrio Templado Premium gratis.</strong></p>

            <table class="table">
              <thead>
                <tr>
                  <th colspan="2">Apple</th>
                  <th colspan="2">Samsung</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>iPhone XS </td>
                  <td class="price">$240</td>
                  <td>Galaxy S9 Plus</td>
                  <td class="price">$335</td>
                </tr>
                <tr>
                  <td>iPhone XR</td>
                  <td class="price">$245</td>
                  <td>Galaxy S9</td>
                  <td class="price">$315</td>
                </tr>
                <tr>
                  <td>iPhone X </td>
                  <td class="price">$225</td>
                  <td>Galaxy S8 Plus Active</td>
                  <td class="price">$325</td>
                </tr>
                <tr>
                  <td>iPhone 8 Plus</td>
                  <td class="price">$90</td>
                  <td>Galaxy S8 </td>
                  <td class="price">$320</td>
                </tr>
                <tr>
                  <td>iPhone 8 </td>
                  <td class="price">$85</td>
                  <td>Galaxy S7</td>
                  <td class="price">$210</td>
                </tr>
                <tr>
                  <td>iPhone 7 Plus</td>
                  <td class="price">$85</td>
                  <td>Galaxy S7 EDGE Plus</td>
                  <td class="price">$299</td>
                </tr>
                <tr>
                  <td>iPhone 7 </td>
                  <td class="price">$80</td>
                  <td>Galaxy S6 EDGE</td>
                  <td class="price">$299</td>
                </tr>
                <tr>
                  <td>iPhone 6s Plus</td>
                  <td class="price">$70</td>
                  <td>Galaxy S6 Active</td>
                  <td class="price">$235</td>
                </tr>
                <tr>
                  <td>iPhone 5se</td>
                  <td class="price">$55</td>
                  <td>Galaxy S6</td>
                  <td class="price">$220</td>
                </tr>
                <tr>
                  <td>iPhone 5s</td>
                  <td class="price">$55</td>
                  <td>Galaxy S5 Active</td>
                  <td class="price">$199</td>
                </tr>
                <tr>
                  <td>iPhone 5c</td>
                  <td class="price">$55</td>
                  <td>Galaxy S5</td>
                  <td class="price">$185</td>
                </tr>
                <tr>
                  <td>iPhone 5</td>
                  <td class="price">$55</td>
                  <td>Galaxy Note 9</td>
                  <td class="price">$345</td>
                </tr>
                <tr>
                  <td/>
                  <td class="price"/>
                  <td>Galaxy Note 8</td>
                  <td class="price">$340</td>
                </tr>
                <tr>
                  <td/>
                  <td class="price"/>
                  <td>Galaxy Note 5</td>
                  <td class="price">$240</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>

    <section
      id="services"
      class="site-section section-focus prices-section">
      <div class="container">

        <!-- Section Heading -->
        <div class="row text-center">

          <!-- Section Header -->
          <header class="col-md-8 col-md-push-2 col-sm-12 section-header">
            <h2>Servicios</h2>
            <hr class="normal">
          </header>

          <!-- Section Content -->
          <div class="col-md-8 col-md-push-2 col-sm-12 section-content">
            <p>Abrimos de Lun - S&aacute;b de 10:00 AM a 7:00 PM y todos nuestros servicios están respaldados por nuestra garantía de 30 días.</p>
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
                  <h3 class="plan-title">Celulares y Tabletas</h3>
                  <hr class="normal">
                  <p class="plan-subtitle">Apple, Samsung, HTC</p>
                </div>

                <!-- Plan Content -->
                <div class="plan-content">
                  <h4 class="feature-title"><i class="pe-7s-check check"/><a
                    id="cracked-screens"
                    href="#prices">Pantallas con grietas</a></h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Pantallas rotas</h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Problemas con puerto de carga</h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Transferencia de datos</h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Recuperaci&oacute;n de datos</h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Desbloqueo de iPhone y <nuxt-link to="/supported">Android</nuxt-link></h4>
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
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Eliminamos virus</h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Restauraci&oacute;n de contrase&ntilde;as</h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Puesta a punto</h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Reparaci&oacute;n de pantallas</h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Actualizaci&oacute;n de Hardware y Software</h4>
                  <h4 class="feature-title"><i class="pe-7s-check check"/>Recuperaci&oacute;n de datos</h4>
                </div>


              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="offer-section">
      <div class="container">

        <div class="col-md-9 col-sm-12">
          <h2>Dej&oacute; caer su celular?</h2>
        </div>
        <div class="col-md-3 col-md-push-0 col-sm-8 col-sm-push-2 col-xs-10 col-xs-push-1">
          <a
            href="#contact"
            class="button-cta button-block">Preg&uacute;ntenos!</a>
        </div>

      </div>
    </section>

    <section
      id="testimonials"
      class="site-section testimonials-section">
      <div class="container">

        <!-- Section Heading -->
        <div class="row text-center">

          <!-- Section Header -->
          <header class="col-md-8 col-md-push-2 col-sm-12 section-header">
            <h2>Testimonios</h2>
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
                <p class="quote">Llev&eacute; my tel&eacute;fono con una pantalla quebrada, ellos la arreglaron por s&oacute;lo $70.</p>
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
                <p class="quote">&Eacute;l hizo un buen trabajo y r&aacute;pido. Esper&eacute; 5 minutos y mi tel&eacute;fono funciona perfectamente. $40 m&aacute;s barato que en cualquier otro lugar.</p>
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
                <p class="quote">He estado all&iacute; varias veces. &Eacute;l siempre ha sido profesional, r&aacute;pido y repara todo lo que necesitamos.</p>
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
                <p class="quote">¡La gente y el servicio es increíble! ¡Este tipo arregl&oacute; mi teléfono en menos de 15 minutos! ¡Gracias!</p>
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
                <p class="quote">Gracias a Luis por arreglar mi iPhone les recomiendo que vayan con Luis Ogaz</p>
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
                <p class="quote">¡No sabía que arreglar mi teléfono pod&iacute;a ser tan fácil! ¡No lo pensaré dos veces para venir aqu&iacute;! ¡Él es increíble!</p>
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
              target="_blank">Escriba una reseña</a>
          </header>

        </div>

      </div>
    </section>

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
          alt="Sera - One Page Template by Gleesik Wallpaper" >
      </div>

      <div class="container">

        <!-- Section Heading -->
        <div class="row text-center">

          <!-- Section Header -->
          <header class="col-md-8 col-md-push-2 col-sm-12 section-header">
            <h2>Cont&aacute;ctenos</h2>
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
                  placeholder="Nombre" >
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  name="_replyto"
                  placeholder="Correo Electrónico" >
              </div>
              <div class="col-md-12">
                <input
                  type="text"
                  name="_subject"
                  placeholder="Asunto" >
              </div>
              <div class="col-md-12">
                <textarea
                  name="message"
                  rows="8"
                  cols="40"
                  placeholder="Mensaje"/>
              </div>
              <div class="col-md-12 form-action">
                <button
                  type="submit"
                  class="send-button">Enviar Mensaje</button>
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
          target="_blank">Abrir en Google Maps</a>
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
  name: 'Es',
  components: {
    SiteFooter,
    Top
  }
}
</script>
