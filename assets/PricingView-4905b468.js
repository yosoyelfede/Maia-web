import{_ as w,r as g,e as y,o as t,c as r,a as s,f as i,t as o,F as u,g as d,h as p,w as m,n as v}from"./index-a171e77e.js";const k={class:"pricing-view"},q={class:"pricing-section"},C={class:"container"},P={class:"pricing-container"},h={class:"pricing-card"},z={class:"plan-name"},S={class:"plan-price"},x={class:"amount"},E={class:"plan-description"},L={class:"plan-features"},T={class:"pricing-card",style:{background:"linear-gradient(135deg, #5E60CE, #8492ff)",color:"white",transform:"scale(1.05)","box-shadow":"0 15px 30px rgba(0,0,0,0.2)",border:"none","z-index":"2"}},I={class:"plan-name",style:{color:"white"}},N={class:"plan-price"},V={class:"amount",style:{color:"white"}},A={class:"plan-description",style:{color:"white"}},B={class:"plan-features"},F={class:"pricing-card"},$={class:"plan-name"},M={class:"plan-price"},j={class:"amount"},R={class:"plan-description"},D={class:"plan-features"},O={class:"pricing-note"},Q={class:"faq-section"},G={class:"container"},H={class:"faq-container"},J=["onClick"],K={__name:"PricingView",setup(U){const a=g([{name:"Básico",price:40,description:"Ideal para pequeñas inmobiliarias con hasta 5 propiedades activas.",features:["5 propiedades activas","Chat con IA básico","Tours virtuales estándar","Soporte por email","Estadísticas básicas"],buttonText:"Suscribirse",buttonLink:"/contact",buttonClass:"btn--primary",popular:!1},{name:"Profesional",price:120,description:"Para inmobiliarias en crecimiento con hasta 20 propiedades y funciones avanzadas.",features:["20 propiedades activas","Chat con IA avanzado con aprendizaje","Tours virtuales personalizados","Calificación de leads","Soporte prioritario","Estadísticas avanzadas","Integración con CRM"],buttonText:"Suscribirse",buttonLink:"/contact",buttonClass:"btn--white",popular:!0},{name:"Empresarial",price:200,description:"Propiedades ilimitadas con todas las características premium.",features:["Propiedades ilimitadas","Todas las características premium","API para integración con sistemas propios","Personalización de marca","Soporte dedicado 24/7","Análisis avanzado de datos","Capacitación para el equipo"],buttonText:"Suscribirse",buttonLink:"/contact",buttonClass:"btn--primary",popular:!1}]),b=g([{question:"¿Puedo cambiar de plan en cualquier momento?",answer:"Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplicarán al inicio del siguiente ciclo de facturación.",open:!0},{question:'¿Qué significa "propiedades activas"?',answer:"Las propiedades activas son aquellas que están disponibles para ser visitadas virtualmente por los clientes. Puedes rotar las propiedades activas según tus necesidades.",open:!1},{question:"¿Necesito conocimientos técnicos para implementar Maia?",answer:"No, nuestro equipo se encarga de toda la configuración técnica. Solo necesitas proporcionarnos los recorridos virtuales de tus propiedades y nosotros nos encargamos del resto.",open:!1},{question:"¿Cómo se integra Maia con mi sitio web?",answer:"Proporcionamos un código de inserción simple que puedes añadir a tu sitio web. También ofrecemos integraciones más avanzadas para sitios web personalizados.",open:!1},{question:"¿Ofrecen descuentos por pago anual?",answer:"Sí, ofrecemos un 15% de descuento para los clientes que opten por el pago anual en cualquiera de nuestros planes.",open:!1}]),_=f=>{b.value[f].open=!b.value[f].open};return(f,e)=>{const c=y("router-link");return t(),r("div",k,[s("section",q,[s("div",C,[e[18]||(e[18]=s("div",{class:"section__title"},[s("h2",null,"Planes y Precios"),s("p",null,[i("Elige el plan que mejor se adapte a las necesidades de tu inmobiliaria. "),s("strong",null,"Todos incluyen prueba gratuita de 7 días sin compromiso.")])],-1)),s("div",P,[s("div",h,[s("h3",z,o(a.value[0].name),1),s("div",S,[e[0]||(e[0]=s("span",{class:"currency"},"$",-1)),s("span",x,o(a.value[0].price),1),e[1]||(e[1]=s("span",{class:"period"},"/mes",-1))]),s("p",E,o(a.value[0].description),1),e[4]||(e[4]=s("div",{class:"plan-free-trial"},[s("span",{class:"free-trial-badge"},[s("strong",null,"Prueba gratuita de 7 días")])],-1)),s("ul",L,[(t(!0),r(u,null,d(a.value[0].features,(n,l)=>(t(),r("li",{key:l},[e[2]||(e[2]=s("i",{class:"fas fa-check"},null,-1)),i(" "+o(n),1)]))),128))]),p(c,{to:a.value[0].buttonLink,class:v(["btn",a.value[0].buttonClass])},{default:m(()=>e[3]||(e[3]=[i(" Suscribirse ")])),_:1},8,["to","class"])]),s("div",T,[s("h3",I,o(a.value[1].name),1),s("div",N,[e[5]||(e[5]=s("span",{class:"currency",style:{color:"white"}},"$",-1)),s("span",V,o(a.value[1].price),1),e[6]||(e[6]=s("span",{class:"period",style:{color:"white"}},"/mes",-1))]),s("p",A,o(a.value[1].description),1),e[9]||(e[9]=s("div",{class:"plan-free-trial"},[s("span",{class:"free-trial-badge",style:{"background-color":"rgba(255, 255, 255, 0.2)",color:"white"}},[s("strong",null,"Prueba gratuita de 7 días")])],-1)),s("ul",B,[(t(!0),r(u,null,d(a.value[1].features,(n,l)=>(t(),r("li",{key:l,style:{"border-bottom":"1px solid rgba(255, 255, 255, 0.2)",color:"white"}},[e[7]||(e[7]=s("i",{class:"fas fa-check",style:{color:"white"}},null,-1)),i(" "+o(n),1)]))),128))]),p(c,{to:a.value[1].buttonLink,class:"btn",style:{"background-color":"white",color:"#5E60CE",border:"none"}},{default:m(()=>e[8]||(e[8]=[i(" Suscribirse ")])),_:1},8,["to"])]),s("div",F,[s("h3",$,o(a.value[2].name),1),s("div",M,[e[10]||(e[10]=s("span",{class:"currency"},"$",-1)),s("span",j,o(a.value[2].price),1),e[11]||(e[11]=s("span",{class:"period"},"/mes",-1))]),s("p",R,o(a.value[2].description),1),e[14]||(e[14]=s("div",{class:"plan-free-trial"},[s("span",{class:"free-trial-badge"},[s("strong",null,"Prueba gratuita de 7 días")])],-1)),s("ul",D,[(t(!0),r(u,null,d(a.value[2].features,(n,l)=>(t(),r("li",{key:l},[e[12]||(e[12]=s("i",{class:"fas fa-check"},null,-1)),i(" "+o(n),1)]))),128))]),p(c,{to:a.value[2].buttonLink,class:v(["btn",a.value[2].buttonClass])},{default:m(()=>e[13]||(e[13]=[i(" Suscribirse ")])),_:1},8,["to","class"])])]),s("div",O,[s("p",null,[e[16]||(e[16]=i("¿Necesitas un plan personalizado para tu empresa? ")),p(c,{to:"/contact"},{default:m(()=>e[15]||(e[15]=[i("Contáctanos")])),_:1}),e[17]||(e[17]=i(" para una solución a medida."))])])])]),s("section",Q,[s("div",G,[e[19]||(e[19]=s("div",{class:"section__title"},[s("h2",null,"Preguntas Frecuentes"),s("p",null,"Respuestas a las dudas más comunes sobre nuestros planes")],-1)),s("div",H,[(t(!0),r(u,null,d(b.value,(n,l)=>(t(),r("div",{class:"faq-item",key:l},[s("div",{class:"faq-question",onClick:W=>_(l)},[s("h3",null,o(n.question),1),s("i",{class:v(["fas",n.open?"fa-minus":"fa-plus"])},null,2)],8,J),s("div",{class:v(["faq-answer",{open:n.open}])},[s("p",null,o(n.answer),1)],2)]))),128))])])])])}}},Y=w(K,[["__scopeId","data-v-68259d02"]]);export{Y as default};
