_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"3FaR":function(e,n,i){"use strict";i.r(n);var t=i("mC2l"),a=i("ay0y"),s=i.n(a),r=i("f0do"),c=i("KSab"),o=i("nKUr"),l=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(t.a,{imgName:"current-hero.jpg",backgroundPosition:"center top",title:Object(o.jsx)(o.Fragment,{children:"The Current Team"}),subtitleList:["The Torch Runners"],isHome:!1}),Object(o.jsx)("div",{className:s.a.currentTeam,id:"is",children:c.r.map((function(e,n){return Object(o.jsx)(r.a,{index:n,name:e.name,sub:e.sub,imgName:e.imgName,linkedInLink:e.linkedInLink,githubLink:e.githubLink},"senate_".concat(n))}))})]})};n.default=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(l,{})})}},IW6Y:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/teams/current",function(){return i("3FaR")}])},"Tu/p":function(e,n,i){e.exports={hero:"Hero_hero__1fVUa",heroHead:"Hero_heroHead__12Yiw",heroSub:"Hero_heroSub__3-rrY",notif:"Hero_notif__yKDqh",wobble:"Hero_wobble__DlBEw","scroll-indicator":"Hero_scroll-indicator__1OdvK",bounce:"Hero_bounce__22czQ",is:"Hero_is__2c_Nk",caption:"Hero_caption__1RLmY",captionHead:"Hero_captionHead__bPVFr",captionSub:"Hero_captionSub__-hd2G",scrollIndicator:"Hero_scrollIndicator__zJATM"}},ay0y:function(e,n,i){},f0do:function(e,n,i){"use strict";var t=i("y9D+"),a=i.n(t),s=i("IP2g"),r=i("8tEE"),c=i("nKUr"),o=function(e){var n=e.linkedInLink;return""!==n?Object(c.jsx)("a",{href:n,target:"blank",children:Object(c.jsx)(s.a,{icon:r.d})}):null},l=function(e){var n=e.githubLink;return""!==n?Object(c.jsx)("a",{href:n,target:"blank",children:Object(c.jsx)(s.a,{icon:r.b})}):null};n.a=function(e){var n=e.index,i=e.imgName,t=e.name,s=e.sub,r=e.linkedInLink,d=e.githubLink;return Object(c.jsxs)("div",{className:n%2==0?a.a.person:a.a.personr,children:[Object(c.jsx)("div",{style:{backgroundImage:'url("/static/images/'.concat(i,'")')},className:a.a.personImg}),Object(c.jsxs)("div",{className:a.a.personCont,children:[Object(c.jsx)("div",{className:a.a.personContName,children:t}),Object(c.jsx)("div",{className:a.a.personContSub,children:s}),Object(c.jsxs)("div",{className:a.a.links,children:[Object(c.jsx)(o,{linkedInLink:r}),Object(c.jsx)(l,{githubLink:d})]})]})]})}},mC2l:function(e,n,i){"use strict";var t=i("Tu/p"),a=i.n(t),s=i("IP2g"),r=i("wHSu"),c=i("q1tI"),o=i("nKUr");n.a=function(e){var n=e.imgName,i=e.title,t=e.subtitleList,l=e.isHome,d=e.backgroundPosition,b=void 0===d?"center":d,u=Object(c.useState)("none"),j=u[0],_=u[1];return Object(c.useEffect)((function(){setTimeout((function(){_("")}),2e3)}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{style:{backgroundImage:'linear-gradient(\n                            to bottom,\n                            rgba(0, 0, 0, 0.5),\n                            rgba(0, 0, 0, 0.5),\n                            rgba(0, 0, 0, 0.5)), url("/static/images/hero/'.concat(n,'")'),backgroundPosition:b},className:a.a.hero,children:[Object(o.jsx)("div",{className:a.a.heroHead,children:i}),Object(o.jsx)("div",{className:a.a.heroSub,children:t.map((function(e,n){return t.length!==n+1?Object(o.jsxs)("span",{children:[e,"\xa0\xa0\u2022\xa0\xa0"]},"hero_".concat(n)):Object(o.jsx)("span",{children:e},"hero_".concat(n))}))}),Object(o.jsx)("a",{href:"#is",children:Object(o.jsx)("div",{className:a.a.scrollIndicator})}),l&&Object(o.jsx)("a",{href:"#notifs",className:a.a.notif,style:{display:j},children:Object(o.jsx)(s.a,{icon:r.a})})]}),l&&Object(o.jsxs)("div",{className:a.a.is,id:"is",children:[Object(o.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000081, #00000081),\n\t\turl("/static/images/ideate.png")'},className:a.a.caption,children:[Object(o.jsx)("div",{className:a.a.captionHead,children:"Ideate"}),Object(o.jsx)("div",{className:a.a.captionSub,children:"Changing the world, one solution at a time."})]}),Object(o.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000098, #00000098),\n\t\turl("/static/images/innovate.png")'},className:a.a.caption,children:[Object(o.jsx)("div",{className:a.a.captionHead,children:"Innovate"}),Object(o.jsx)("div",{className:a.a.captionSub,children:"Creativity is thinking up new things. Innovation is doing new things."})]}),Object(o.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000081, #00000081),\n\t\turl("/static/images/inspire.png")'},className:a.a.caption,children:[Object(o.jsx)("div",{className:a.a.captionHead,children:"Inspire"}),Object(o.jsx)("div",{className:a.a.captionSub,children:"Don't inspire by being perfect, inspire by embracing your imperfections."})]})]})]})}},"y9D+":function(e,n,i){e.exports={person:"Person_person__rWuoY",personImg:"Person_personImg__rnqgu",personr:"Person_personr__3_TAL",personCont:"Person_personCont__2GxaU",personContName:"Person_personContName__3oVHz",personContSub:"Person_personContSub__jqZWS",links:"Person_links__1yFih"}}},[["IW6Y",0,1,4,6,2,3]]]);