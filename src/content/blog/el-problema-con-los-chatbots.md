---
title: "El problema con los chatbots"
description: "Cómo funciona la industria de los chatbots para negocios pequeños. Quién paga, quién gana, qué se pierde. Y por qué montamos un taller en Sevilla que funciona con reglas distintas."
date: "2026-03-08"
author: "Jose M. Ruibérriz"
keywords: "chatbots organizaciones empresas, chatbot peluquería, chatbot despacho, inteligencia artificial negocios pequeños, La Boteca, chatbot ético, soberanía datos"
---

Voy a explicar cómo funciona la industria de los chatbots para negocios pequeños. No la industria de los papers, ni la de las conferencias sobre IA ética, ni la de los hilos de LinkedIn con emojis de cohete. La industria real: la que le vende un bot a una peluquería de barrio, a un despacho laboralista de cuatro personas, a una gestoría fiscal que atiende a autónomos asustados por una carta de Hacienda.

Construyo chatbots. Llevo años formando a organizaciones en su relación con la inteligencia artificial. Lo que voy a contar no es teoría. Es lo que veo.

---

## Cómo llega un chatbot a un negocio pequeño

Llega por un comercial. O por un anuncio de Instagram. O por un amigo que "ha puesto uno y le va genial". La propuesta suena así: "Automatiza tu atención al cliente. Responde 24/7. Ahorra tiempo. Desde 49€/mes."

El dueño del negocio —la peluquera, el abogado laboralista, la gestora fiscal— no sabe qué modelo de lenguaje usa el bot, ni dónde se procesan los datos, ni qué pasa con las conversaciones de sus clientes. No lo sabe porque nadie se lo explica. El proceso de "onboarding" consiste en rellenar un formulario con datos del negocio, elegir un color para el widget y pegar un código en la web. Media hora. Listo.

Lo que el dueño del negocio acaba de hacer, sin saberlo, es lo siguiente:

1. Ha cedido el contenido de su negocio —horarios, servicios, precios, preguntas frecuentes, formas de trabajar— a una plataforma que lo usará para entrenar o mejorar su producto. Lea la letra pequeña de los términos de servicio. O no la lea: nadie la lee.

2. Ha delegado la primera conversación con sus clientes a un sistema que no distingue entre una consulta rutinaria y una persona en crisis. Para la peluquera esto es una molestia menor. Para el despacho laboralista que recibe a un trabajador recién despedido, es otra cosa.

3. Ha aceptado que si deja de pagar, pierde todo. No solo el bot. Los datos. Las conversaciones. Los patrones de consulta que podrían haberle enseñado qué necesitan realmente sus clientes. Todo eso vive en servidores que no son suyos, en un formato que no pueden exportar, bajo condiciones que no han negociado.

4. Ha comprado una voz que no es la suya. El bot responde con el tono genérico que la plataforma considera "profesional": amable, neutro, ligeramente corporativo. La peluquería de barrio que lleva treinta años tuteando a sus clientas ahora les habla de usted por defecto. El despacho laboralista que siempre ha cuidado el primer contacto ahora tiene un widget que dice "¡Hola! ¿En qué puedo ayudarte?" con un emoji de la mano levantada.

---

## Los números

Una organización que contrata un chatbot de plataforma paga entre 49 y 200 euros al mes, según el plan. Eso son entre 588 y 2.400 euros al año. Por ese precio obtiene:

- Un bot que responde preguntas frecuentes con información que el propio negocio ha introducido.
- Un widget para la web.
- Un panel donde ver las conversaciones.
- Soporte técnico por email.

Lo que no obtiene:

- Propiedad del código. El bot no es suyo. Es una instancia de un producto que usan miles de negocios.
- Control sobre el modelo de lenguaje. Si la plataforma cambia de GPT-4 a un modelo más barato, el negocio no se entera y no puede objetar.
- Acceso real a los datos. Puede ver las conversaciones en el panel, pero no puede exportarlas en un formato utilizable, no puede alimentar con ellas otro sistema, no puede llevárselas si cambia de proveedor.
- Formación. Nadie le enseña qué está haciendo el bot ni por qué responde como responde. Nadie le explica qué es un prompt de sistema, qué es una temperatura, qué es una alucinación. Si el bot dice algo incorrecto, el negocio no tiene herramientas para entender por qué ni para corregirlo por su cuenta.

Ahora miren quién gana.

La plataforma tiene miles de clientes pagando entre 49 y 200 euros al mes. Cada cliente ha introducido gratuitamente los datos de su negocio en el sistema. Esos datos —preguntas, respuestas, flujos de conversación, objeciones, patrones de compra— son el verdadero producto. No el bot. Los datos. Con ellos la plataforma mejora su producto, entrena sus modelos, afina sus algoritmos y vende un servicio cada vez mejor a los clientes siguientes. El negocio pequeño es a la vez cliente y materia prima.

Eso tiene un nombre viejo: renta. Pagas por usar algo que no posees, produces valor para el dueño con tu trabajo, y cuando dejas de pagar te quedas con las manos vacías. No es una metáfora. Es el modelo de negocio.

---

## Lo que se pierde

La peluquera de la calle Feria conoce a sus clientas. Sabe que a Marisa le gusta el tinte rubio ceniza y que viene cada seis semanas. Sabe que Lola prefiere las mañanas porque por las tardes cuida a su madre. Sabe que Carmen no quiere charla y que Paqui no para de hablar. Ese conocimiento no está en ninguna base de datos. Está en treinta años de oficio.

Cuando instalas un chatbot genérico para gestionar las citas de esa peluquería, no estás automatizando un proceso. Estás interponiendo una capa de ignorancia entre el negocio y sus clientes. El bot no sabe que Marisa viene cada seis semanas. No sabe que Lola necesita mañanas. No sabe que Carmen quiere silencio. Sabe responder "¿Qué día te viene bien?" con un emoji de calendario.

Y lo peor no es lo que el bot no sabe. Es lo que el negocio deja de aprender. Cuando la primera conversación la tiene una máquina, el negocio pierde la señal. Pierde el tono de voz del cliente. Pierde la duda que indica un problema. Pierde la queja que esconde una oportunidad. Pierde el silencio que significa "me voy a otro sitio".

Un paper reciente de Google DeepMind y la Universidad de Oxford le pone nombre técnico: *cognitive deskilling*. Suena académico. La versión simple es esta: cuanto más delegas, menos sabes. Y cuanto menos sabes, más dependes. Y cuanto más dependes, más pagas. El ciclo se cierra solo.

---

## Cómo debería funcionar

Acabamos de montar La Boteca en Sevilla. Tres personas. Fermín, Txiki y yo. Es un taller de asistentes conversacionales. No hemos vendido todavía ni un solo bot. Lo que tenemos son reglas. Y las reglas vinieron antes que el primer cliente, porque si no las pones antes, no las pones nunca.

**El bot será del cliente.** El código, los datos, las instrucciones, la base de conocimiento, los flujos de conversación, las variables, los casos de prueba, el registro de cambios. Siete documentos que se entregan con cada bot. Si el cliente quiere irse con otro proveedor, se va con todo. No retenemos nada.

**El bot vivirá en servidores que el cliente controle.** No en nuestra nube. No en la nube de un tercero. En una máquina que el cliente pueda tocar, apagar, respaldar y migrar. Los datos de las conversaciones no salen de ahí. Esto no es una ventaja competitiva. Es una posición.

**Cada bot se construirá desde cero con la información real del negocio.** No hay plantilla genérica que se rellena en media hora. Hay semanas de trabajo entendiendo cómo funciona el negocio, qué preguntas recibe, qué respuestas da, qué tono usa, dónde están los límites de lo que un bot debe y no debe responder. La peluquería sonará a peluquería de barrio. El despacho laboralista sonará a despacho que sabe que quien llama tiene miedo.

**El bot tendrá un humano detrás.** Siempre. No como respaldo para cuando falle, sino como parte del diseño. Hay conversaciones que un bot no debe tener solo. El primer contacto de un trabajador despedido. La consulta fiscal que en realidad es una pregunta sobre si va a poder pagar el alquiler. La clienta que pregunta por un corte de pelo pero lo que quiere es hablar un rato. Esas conversaciones pasarán a una persona. No es un fallo del sistema. Es el sistema.

**La formación viene incluida.** No venderemos una caja negra. Enseñaremos qué hay dentro. Qué es el prompt de sistema y cómo funciona. Qué puede hacer el bot y qué no. Cómo pedir cambios. Cómo saber cuándo algo va mal. El objetivo es que el cliente entienda lo que tiene. Y el objetivo final es que no nos necesite.

**Los tokens los paga alguien.** Esto hay que decirlo, porque si no se dice se convierte en el mismo punto ciego que criticamos. Cada vez que un chatbot responde, alguien paga por el uso del modelo de lenguaje. En la industria estándar, eso va incluido en la suscripción mensual — y es una de las razones por las que no puedes irte: estás atado al modelo que elija la plataforma, al precio que decida cobrar, a las condiciones que imponga. En La Boteca hay dos opciones. Si el cliente quiere un producto terminado que funcione con independencia total, el bot se conecta a su propia clave de API: el cliente paga los tokens directamente al proveedor del modelo, elige cuál usar y puede cambiar cuando quiera. Si prefiere un tratamiento continuado — mantenimiento, ajustes, evolución del bot—, el coste de los tokens va incluido en nuestra tarifa. En ambos casos, el cliente sabe exactamente qué está pagando y por qué. No hay letra pequeña.

**Tres proyectos a la vez, máximo.** No es una limitación. Es una decisión sobre qué tipo de trabajo queremos hacer. Los modelos de lenguaje son cada vez más baratos. Lo que no se abarata es entender un negocio concreto, con personas concretas, en un barrio concreto. Eso cuesta tiempo, presencia y atención. No escala. No tiene que escalar.

**Publicaremos las tarifas.** Estarán en la web. Sin formulario de "cuéntanos tu proyecto". Sin "a partir de". Lo que cuesta es lo que cuesta. Si no te cuadra, lo sabes antes de llamar.

---

## Por qué

Puede que no funcione. Puede que el mercado no quiera esto. Puede que la gente prefiera el bot de 49 euros al mes porque es más fácil, más rápido, más cómodo. No lo sé.

Lo que sí sé es por qué lo hacemos.

Llevo años enseñando a organizaciones a pensar críticamente su relación con la tecnología. Cooperativas, ONG, empresas de inserción, despachos profesionales. He visto lo que pasa cuando la tecnología llega sin mediación. He visto organizaciones entusiasmadas en enero y de vuelta al Word en marzo. He visto herramientas que nadie entiende, datos que nadie controla, decisiones que nadie recuerda haber tomado.

Y he aprendido algo que no se dice en las conferencias sobre IA: el noventa por ciento del problema no es técnico. Son personas. Procesos. Cultura. La pregunta no es "¿qué puede hacer la IA?". La pregunta es "¿cómo puede fallar?". Y si no puedes responder a esa pregunta sobre tu propio bot, no deberías tenerlo.

La Boteca no es una empresa de tecnología. Es la consecuencia de haber visto lo suficiente como para saber que hay otra forma de hacer esto. Todavía no hemos demostrado que funcione. Pero las reglas están puestas. Y están puestas antes del primer cliente porque después ya no se ponen.

No será la forma más rentable. No será la que escale. No será la que levante una ronda de financiación.

Será la que nos deje dormir.
