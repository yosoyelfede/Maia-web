import{_ as n,o as c,c as o,a as s,b as l}from"./index-c0b3d799.js";const r={name:"HomeView",data(){const e=window.innerWidth<768;return console.log(e),{currentSlide:0,totalSlides:e?3:1,isMobile:e}},mounted(){this.initCarousel()},methods:{initCarousel(){const e=document.querySelectorAll(".control-dot"),a=document.querySelector(".arrow-left"),t=document.querySelector(".arrow-right");e.forEach((i,d)=>{i.addEventListener("click",()=>{this.goToSlide(d)})}),a&&t&&(a.addEventListener("click",()=>{this.prevSlide()}),t.addEventListener("click",()=>{this.nextSlide()})),setInterval(()=>{this.nextSlide()},5e3)},goToSlide(e){this.currentSlide=e,this.updateCarousel()},nextSlide(){this.currentSlide=(this.currentSlide+1)%this.totalSlides,this.updateCarousel()},prevSlide(){this.currentSlide=(this.currentSlide-1+this.totalSlides)%this.totalSlides,this.updateCarousel()},updateCarousel(){const e=document.querySelector(".testimonials-carousel");e&&(e.style.transform=`translateX(-${this.currentSlide*100}%)`),document.querySelectorAll(".control-dot").forEach((t,i)=>{i===this.currentSlide?t.classList.add("active"):t.classList.remove("active")})}}},v={class:"home"},m={class:"section hero-section",id:"demo"},p={class:"container"},u={class:"hero__content"},h={key:0},f={key:1,class:"hero__demo animate-fade-in"};function _(e,a,t,i,d,b){return c(),o("div",v,[s("section",m,[s("div",p,[s("div",u,[a[2]||(a[2]=s("h1",{class:"hero__title animate-fade-in"}," ¿Y si tus propiedades se vendieran solas? ",-1)),d.isMobile?(c(),o("p",h,a[0]||(a[0]=[s("a",{href:"https://maiavr.s3.sa-east-1.amazonaws.com/demo.html",target:"_blank",class:"demo-container"},[s("div",{class:"demo-container__overlay"},[s("a",{href:"https://maiavr.s3.sa-east-1.amazonaws.com/demo.html",class:"btn btn--primary try-demo-mobile",target:"_blank"}," Probar Demo ")])],-1)]))):(c(),o("div",f,a[1]||(a[1]=[s("div",{class:"demo-frame"},[s("iframe",{src:"https://maiavr.s3.sa-east-1.amazonaws.com/demo.html",frameborder:"0",allowfullscreen:"",allow:"xr-spatial-tracking",class:"demo-iframe"})],-1)]))),a[3]||(a[3]=l('<p class="hero__subtitle animate-slide-in-up" data-v-80dc8896><strong data-v-80dc8896>Show, don&#39;t tell: La venta inmobiliaria es visual, no textual.</strong></p><p class="hero__subtitle animate-slide-in-up" data-v-80dc8896> Maia transforma tus recorridos virtuales en experiencias de venta guiadas por inteligencia artificial. </p><p class="hero__subtitle animate-slide-in-up" data-v-80dc8896> ¿Listo para sumarte a la revolución de las ventas inmobiliarias? </p><div class="hero__actions animate-slide-in-up" data-v-80dc8896><a href="https://docs.google.com/forms/d/1PUet4FLIe1eR0cafpNDapUpBuh0Y7Jvzl7mea_m0kNY/edit?ts=67d4874a" target="_blank" class="btn btn--primary btn--lg" data-v-80dc8896>¡Quiero un mes de prueba gratis!</a></div>',4))])])]),a[4]||(a[4]=l('<section class="section section--light" id="features" data-v-80dc8896><div class="container" data-v-80dc8896><div class="section__header" data-v-80dc8896><h2 class="section__title" data-v-80dc8896>¿Por qué elegir Maia?</h2><p class="section__subtitle" data-v-80dc8896> Ofrecemos una experiencia de compra interactiva, personalizada y simple a través de recorridos virtuales guiados por AI, captando información de una manera más natural y mejorando la calidad de tus leads. </p><p class="section__subtitle" data-v-80dc8896> Las páginas web tradicionales de proyectos inmobiliarios tienen: </p></div><div class="stats-container" data-v-80dc8896><div class="stat-item" data-v-80dc8896><span class="stat-number" data-v-80dc8896>60%</span><span class="stat-label" data-v-80dc8896>Tasa de rebote.</span></div><div class="stat-item" data-v-80dc8896><span class="stat-number" data-v-80dc8896>45 s</span><span class="stat-label" data-v-80dc8896>Tiempo de permanencia promedio.</span></div><div class="stat-item" data-v-80dc8896><span class="stat-number" data-v-80dc8896>4%</span><span class="stat-label" data-v-80dc8896>Tasa de conversión a lead.</span></div></div><div class="features-grid" data-v-80dc8896><div class="feature-card" data-v-80dc8896><div class="feature-icon" data-v-80dc8896><i class="fas fa-robot" data-v-80dc8896></i></div><h3 class="feature-title" data-v-80dc8896>Broker AI</h3><p class="feature-desc" data-v-80dc8896> Guíamos a los potenciales compradores en el recorrido virtual, entregando información y aclarando dudas a través de conversaciones naturales. </p></div><div class="feature-card" data-v-80dc8896><div class="feature-icon" data-v-80dc8896><i class="fas fa-chart-line" data-v-80dc8896></i></div><h3 class="feature-title" data-v-80dc8896>Calficación de leads</h3><p class="feature-desc" data-v-80dc8896> Calificamos leads en base a las conversaciones y comportamientos de tus clientes, ahorrando tiempo y esfuerzo a tus vendedores para que se enfoquen en cerrar los tratos. </p></div><div class="feature-card" data-v-80dc8896><div class="feature-icon" data-v-80dc8896><i class="fas fa-vr-cardboard" data-v-80dc8896></i></div><h3 class="feature-title" data-v-80dc8896>Recorridos virtuales</h3><p class="feature-desc" data-v-80dc8896> Aprovechamos tus recorridos virtuales existentes, o bien los creamos por ti. <br data-v-80dc8896><strong data-v-80dc8896>Los recorridos virtuales aumentan la conversión de visita a lead en un 95% y reducen el tiempo de venta en 33%.</strong></p></div><div class="feature-card" data-v-80dc8896><div class="feature-icon" data-v-80dc8896><i class="fas fa-plug" data-v-80dc8896></i></div><h3 class="feature-title" data-v-80dc8896>Integración sin esfuerzo</h3><p class="feature-desc" data-v-80dc8896> Nos integramos a tus canales de comunicación existentes y CRM, automatizando y centralizando el seguimiento de tus leads. </p></div></div></div></section><section class="section team-section" id="about" data-v-80dc8896><div class="container" data-v-80dc8896><div class="section__header" data-v-80dc8896><h2 class="section__title" data-v-80dc8896>Conoce al Equipo</h2></div><div class="team-container" data-v-80dc8896><div class="team-card" data-v-80dc8896><div class="team-image" data-v-80dc8896><img src="https://media.licdn.com/dms/image/v2/D4E03AQFi2QfyPeH3sQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700504903894?e=1746057600&amp;v=beta&amp;t=T2CmNrKmIqp0Rn1Vd3TLguv87GMRzwZbgf8iDDiblYw" alt="Manuel Fernández" data-v-80dc8896></div><div class="team-content" data-v-80dc8896><h3 data-v-80dc8896>Manuel Fernández</h3><h4 data-v-80dc8896>CEO &amp; Co-Fundador</h4><p data-v-80dc8896> Arquitecto, experto en VR y modelado 3D, profesor universitario. Lidera la visión del producto y el diseño de experiencia. </p><div class="team-social" data-v-80dc8896><a href="https://www.linkedin.com/in/manjofer/" target="_blank" class="social-link" aria-label="LinkedIn" data-v-80dc8896><i class="fab fa-linkedin-in" data-v-80dc8896></i></a><a href="mailto:manuel@maiavr.cl" class="social-link" aria-label="Email" data-v-80dc8896><i class="fas fa-envelope" data-v-80dc8896></i></a></div></div></div><div class="team-card" data-v-80dc8896><div class="team-image" data-v-80dc8896><img src="https://media.licdn.com/dms/image/v2/D4E03AQFRnpgqYgn6Cw/profile-displayphoto-shrink_800_800/B4EZWL7aWXH0Ag-/0/1741809363200?e=1747267200&amp;v=beta&amp;t=HvNAp2FbvZaiz3FKEy3g7Vk8rKdUC5tziFQ0_tWZVj8" alt="Juan Pablo Rojas" data-v-80dc8896></div><div class="team-content" data-v-80dc8896><h3 data-v-80dc8896>Juan Pablo Rojas</h3><h4 data-v-80dc8896>CTO &amp; Co-Fundador</h4><p data-v-80dc8896> 10+ años en desarrollo de software diseñando sistemas escalables para startups. Responsable de la arquitectura técnica y desarrollo de IA. </p><div class="team-social" data-v-80dc8896><a href="https://www.linkedin.com/in/jprojasc/" target="_blank" class="social-link" aria-label="LinkedIn" data-v-80dc8896><i class="fab fa-linkedin-in" data-v-80dc8896></i></a></div></div></div><div class="team-card" data-v-80dc8896><div class="team-image" data-v-80dc8896><img src="https://media.licdn.com/dms/image/v2/C4D03AQExEzpf2qxawQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1635413934306?e=1746057600&amp;v=beta&amp;t=DZsUsWBp3D5yciGIHNtxFH15bROc2GTBmQOzZ9ikR00" alt="Federico Antunovic" data-v-80dc8896></div><div class="team-content" data-v-80dc8896><h3 data-v-80dc8896>Federico Antunovic</h3><h4 data-v-80dc8896>CCO &amp; Co-Fundador</h4><p data-v-80dc8896> MBA, 8+ años en ventas B2B, experiencia en consultoría inmobiliaria. Dirige las estrategias comerciales y relaciones con clientes. </p><div class="team-social" data-v-80dc8896><a href="https://www.linkedin.com/in/fantunovic/" target="_blank" class="social-link" aria-label="LinkedIn" data-v-80dc8896><i class="fab fa-linkedin-in" data-v-80dc8896></i></a><a href="mailto:fede@maiavr.cl" class="social-link" aria-label="Email" data-v-80dc8896><i class="fas fa-envelope" data-v-80dc8896></i></a></div></div></div></div></div></section><section class="section section--cta" data-v-80dc8896><div class="container" data-v-80dc8896><div class="cta" data-v-80dc8896><h2 class="cta__title" data-v-80dc8896>¿Listo para sumarte a la revolución de las ventas inmobiliarias?</h2><p class="cta__subtitle" data-v-80dc8896></p><div class="cta__actions" data-v-80dc8896><a href="https://docs.google.com/forms/d/1PUet4FLIe1eR0cafpNDapUpBuh0Y7Jvzl7mea_m0kNY/edit?ts=67d4874a" target="_blank" class="btn btn--white btn--lg" data-v-80dc8896>¡Quiero un mes de prueba gratis!</a></div></div></div></section>',3))])}const k=n(r,[["render",_],["__scopeId","data-v-80dc8896"]]);export{k as default};
