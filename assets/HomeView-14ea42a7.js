import{_ as n,o as c,c as o,a as d,b as l}from"./index-8cf59a5a.js";const r={name:"HomeView",data(){const e=window.innerWidth<768;return console.log(e),{currentSlide:0,totalSlides:e?3:1,isMobile:e}},mounted(){this.initCarousel()},methods:{initCarousel(){const e=document.querySelectorAll(".control-dot"),a=document.querySelector(".arrow-left"),s=document.querySelector(".arrow-right");e.forEach((t,i)=>{t.addEventListener("click",()=>{this.goToSlide(i)})}),a&&s&&(a.addEventListener("click",()=>{this.prevSlide()}),s.addEventListener("click",()=>{this.nextSlide()})),setInterval(()=>{this.nextSlide()},5e3)},goToSlide(e){this.currentSlide=e,this.updateCarousel()},nextSlide(){this.currentSlide=(this.currentSlide+1)%this.totalSlides,this.updateCarousel()},prevSlide(){this.currentSlide=(this.currentSlide-1+this.totalSlides)%this.totalSlides,this.updateCarousel()},updateCarousel(){const e=document.querySelector(".testimonials-carousel");e&&(e.style.transform=`translateX(-${this.currentSlide*100}%)`),document.querySelectorAll(".control-dot").forEach((s,t)=>{t===this.currentSlide?s.classList.add("active"):s.classList.remove("active")})}}},v={class:"home"},m={class:"section hero-section",id:"demo"},p={class:"container"},u={class:"hero__content"},h={key:0},f={key:1,class:"hero__demo animate-fade-in"};function _(e,a,s,t,i,b){return c(),o("div",v,[d("section",m,[d("div",p,[d("div",u,[a[2]||(a[2]=d("h1",{class:"hero__title animate-fade-in"}," ¿Y si tus propiedades se vendieran solas? ",-1)),i.isMobile?(c(),o("p",h,a[0]||(a[0]=[d("a",{href:"https://maiavr.s3.sa-east-1.amazonaws.com/demo.html",target:"_blank",class:"demo-container"},[d("div",{class:"demo-container__overlay"},[d("a",{href:"https://maiavr.s3.sa-east-1.amazonaws.com/demo.html",class:"btn btn--primary try-demo-mobile",target:"_blank"}," Probar Demo ")])],-1)]))):(c(),o("div",f,a[1]||(a[1]=[d("div",{class:"demo-frame"},[d("iframe",{src:"https://maiavr.s3.sa-east-1.amazonaws.com/demo.html",frameborder:"0",allowfullscreen:"",allow:"xr-spatial-tracking",class:"demo-iframe"})],-1)]))),a[3]||(a[3]=l('<p class="hero__subtitle animate-slide-in-up" data-v-ec28d26d><strong data-v-ec28d26d>Show, don&#39;t tell: La venta inmobiliaria es visual, no textual.</strong></p><p class="hero__subtitle animate-slide-in-up" data-v-ec28d26d> Maia transforma tus recorridos virtuales en experiencias de venta guiadas por inteligencia artificial. </p><p class="hero__subtitle animate-slide-in-up" data-v-ec28d26d> ¿Listo para sumarte a la revolución de las ventas inmobiliarias? </p><div class="hero__actions animate-slide-in-up" data-v-ec28d26d><a href="https://docs.google.com/forms/d/1PUet4FLIe1eR0cafpNDapUpBuh0Y7Jvzl7mea_m0kNY/edit?ts=67d4874a" target="_blank" class="btn btn--primary btn--lg" data-v-ec28d26d>¡Quiero un mes de prueba gratis!</a></div>',4))])])]),a[4]||(a[4]=l('<section class="section section--light" id="features" data-v-ec28d26d><div class="container" data-v-ec28d26d><div class="section__header" data-v-ec28d26d><h2 class="section__title" data-v-ec28d26d>¿Por qué elegir Maia?</h2><p class="section__subtitle" data-v-ec28d26d> Ofrecemos una experiencia de compra interactiva, personalizada y simple a través de recorridos virtuales guiados por AI, captando información de una manera más natural y mejorando la calidad de tus leads. </p><p class="section__subtitle" data-v-ec28d26d> Las páginas web tradicionales de proyectos inmobiliarios tienen: </p></div><div class="stats-container" data-v-ec28d26d><div class="stat-item" data-v-ec28d26d><span class="stat-number" data-v-ec28d26d>60%</span><span class="stat-label" data-v-ec28d26d>Tasa de rebote.</span></div><div class="stat-item" data-v-ec28d26d><span class="stat-number" data-v-ec28d26d>45 s</span><span class="stat-label" data-v-ec28d26d>Tiempo de permanencia promedio.</span></div><div class="stat-item" data-v-ec28d26d><span class="stat-number" data-v-ec28d26d>4%</span><span class="stat-label" data-v-ec28d26d>Tasa de conversión a lead.</span></div></div><div class="features-grid" data-v-ec28d26d><div class="feature-card" data-v-ec28d26d><div class="feature-icon" data-v-ec28d26d><i class="fas fa-robot" data-v-ec28d26d></i></div><h3 class="feature-title" data-v-ec28d26d>Broker AI</h3><p class="feature-desc" data-v-ec28d26d> Guíamos a los potenciales compradores en el recorrido virtual, entregando información y aclarando dudas a través de conversaciones naturales. </p></div><div class="feature-card" data-v-ec28d26d><div class="feature-icon" data-v-ec28d26d><i class="fas fa-chart-line" data-v-ec28d26d></i></div><h3 class="feature-title" data-v-ec28d26d>Calficación de leads</h3><p class="feature-desc" data-v-ec28d26d> Calificamos leads en base a las conversaciones y comportamientos de tus clientes, ahorrando tiempo y esfuerzo a tus vendedores para que se enfoquen en cerrar los tratos. </p></div><div class="feature-card" data-v-ec28d26d><div class="feature-icon" data-v-ec28d26d><i class="fas fa-vr-cardboard" data-v-ec28d26d></i></div><h3 class="feature-title" data-v-ec28d26d>Recorridos virtuales</h3><p class="feature-desc" data-v-ec28d26d> Aprovechamos tus recorridos virtuales existentes, o bien los creamos por ti. <br data-v-ec28d26d><strong data-v-ec28d26d>Los recorridos virtuales aumentan la conversión de visita a lead en un 95% y reducen el tiempo de venta en 33%.</strong></p></div><div class="feature-card" data-v-ec28d26d><div class="feature-icon" data-v-ec28d26d><i class="fas fa-plug" data-v-ec28d26d></i></div><h3 class="feature-title" data-v-ec28d26d>Integración sin esfuerzo</h3><p class="feature-desc" data-v-ec28d26d> Nos integramos a tus canales de comunicación existentes y CRM, automatizando y centralizando el seguimiento de tus leads. </p></div></div></div></section><section class="section team-section" id="about" data-v-ec28d26d><div class="container" data-v-ec28d26d><div class="section__header" data-v-ec28d26d><h2 class="section__title" data-v-ec28d26d>Conoce al Equipo</h2></div><div class="team-container" data-v-ec28d26d><div class="team-card" data-v-ec28d26d><div class="team-image" data-v-ec28d26d><img src="https://media.licdn.com/dms/image/v2/D4E03AQFi2QfyPeH3sQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700504903894?e=1746057600&amp;v=beta&amp;t=T2CmNrKmIqp0Rn1Vd3TLguv87GMRzwZbgf8iDDiblYw" alt="Manuel Fernández" data-v-ec28d26d></div><div class="team-content" data-v-ec28d26d><h3 data-v-ec28d26d>Manuel Fernández</h3><h4 data-v-ec28d26d>CEO &amp; Co-Fundador</h4><p data-v-ec28d26d> Arquitecto, experto en VR y modelado 3D, profesor universitario. Lidera la visión del producto y el diseño de experiencia. </p><div class="team-social" data-v-ec28d26d><a href="https://www.linkedin.com/in/manjofer/" target="_blank" class="social-link" aria-label="LinkedIn" data-v-ec28d26d><i class="fab fa-linkedin-in" data-v-ec28d26d></i></a><a href="mailto:manuel@maiavr.cl" class="social-link" aria-label="Email" data-v-ec28d26d><i class="fas fa-envelope" data-v-ec28d26d></i></a></div></div></div><div class="team-card" data-v-ec28d26d><div class="team-image" data-v-ec28d26d><img src="https://media.licdn.com/dms/image/v2/D4E03AQFRnpgqYgn6Cw/profile-displayphoto-shrink_800_800/B4EZWL7aWXH0Ag-/0/1741809363200?e=1747267200&amp;v=beta&amp;t=HvNAp2FbvZaiz3FKEy3g7Vk8rKdUC5tziFQ0_tWZVj8" alt="Juan Pablo Rojas" data-v-ec28d26d></div><div class="team-content" data-v-ec28d26d><h3 data-v-ec28d26d>Juan Pablo Rojas</h3><h4 data-v-ec28d26d>CTO &amp; Co-Fundador</h4><p data-v-ec28d26d> 10+ años en desarrollo de software diseñando sistemas escalables para startups. Responsable de la arquitectura técnica y desarrollo de IA. </p><div class="team-social" data-v-ec28d26d><a href="https://www.linkedin.com/in/jprojasc/" target="_blank" class="social-link" aria-label="LinkedIn" data-v-ec28d26d><i class="fab fa-linkedin-in" data-v-ec28d26d></i></a></div></div></div><div class="team-card" data-v-ec28d26d><div class="team-image" data-v-ec28d26d><img src="https://media.licdn.com/dms/image/v2/C4D03AQExEzpf2qxawQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1635413934306?e=1746057600&amp;v=beta&amp;t=DZsUsWBp3D5yciGIHNtxFH15bROc2GTBmQOzZ9ikR00" alt="Federico Antunovic" data-v-ec28d26d></div><div class="team-content" data-v-ec28d26d><h3 data-v-ec28d26d>Federico Antunovic</h3><h4 data-v-ec28d26d>CCO &amp; Co-Fundador</h4><p data-v-ec28d26d> MBA, 8+ años en ventas B2B, experiencia en consultoría inmobiliaria. Dirige las estrategias comerciales y relaciones con clientes. </p><div class="team-social" data-v-ec28d26d><a href="https://www.linkedin.com/in/fantunovic/" target="_blank" class="social-link" aria-label="LinkedIn" data-v-ec28d26d><i class="fab fa-linkedin-in" data-v-ec28d26d></i></a><a href="mailto:fede@maiavr.cl" class="social-link" aria-label="Email" data-v-ec28d26d><i class="fas fa-envelope" data-v-ec28d26d></i></a></div></div></div></div></div></section><section class="section section--cta" data-v-ec28d26d><div class="container" data-v-ec28d26d><div class="cta" data-v-ec28d26d><h2 class="cta__title" data-v-ec28d26d>¿Listo para sumarte a la revolución de las ventas inmobiliarias?</h2><p class="cta__subtitle" data-v-ec28d26d></p><div class="cta__actions" data-v-ec28d26d><a href="https://docs.google.com/forms/d/1PUet4FLIe1eR0cafpNDapUpBuh0Y7Jvzl7mea_m0kNY/edit?ts=67d4874a" target="_blank" class="btn btn--white btn--lg" data-v-ec28d26d>¡Quiero un mes de prueba gratis!</a></div></div></div></section>',3))])}const k=n(r,[["render",_],["__scopeId","data-v-ec28d26d"]]);export{k as default};
