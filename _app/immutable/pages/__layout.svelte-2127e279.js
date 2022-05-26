import{F as ae,S as Y,i as ee,s as te,e as d,k as L,G as D,t as C,c as h,a as c,d as l,m as I,H as N,h as K,I as le,b as t,J as O,g as x,K as a,E as Q,L as re,M as oe,w as ie,x as ce,y as ne,N as ue,O as ve,P as _e,q as W,o as X,B as fe}from"../chunks/index-a6b0a6eb.js";const de=()=>{const o=ae("__svelte__");return{page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:o.navigating.subscribe}},session:o.session,updated:o.updated}},he={subscribe(o){return de().page.subscribe(o)}};var pe="/_app/immutable/assets/svelte-logo-87df40b8.svg";function me(o){let s,v,i,n,m,E,p,u,q,A,_,b,r,e,f,w,g,H,V,k,S,F,M;return{c(){s=d("header"),v=d("div"),i=d("a"),n=d("img"),E=L(),p=d("nav"),u=D("svg"),q=D("path"),A=L(),_=d("ul"),b=d("li"),r=d("a"),e=C("Home"),f=L(),w=d("li"),g=d("a"),H=C("About"),V=L(),k=D("svg"),S=D("path"),F=L(),M=d("div"),this.h()},l(y){s=h(y,"HEADER",{class:!0});var $=c(s);v=h($,"DIV",{class:!0});var G=c(v);i=h(G,"A",{href:!0,class:!0});var P=c(i);n=h(P,"IMG",{src:!0,alt:!0,class:!0}),P.forEach(l),G.forEach(l),E=I($),p=h($,"NAV",{class:!0});var B=c(p);u=N(B,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var R=c(u);q=N(R,"path",{d:!0,class:!0}),c(q).forEach(l),R.forEach(l),A=I(B),_=h(B,"UL",{class:!0});var z=c(_);b=h(z,"LI",{class:!0});var Z=c(b);r=h(Z,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var J=c(r);e=K(J,"Home"),J.forEach(l),Z.forEach(l),f=I(z),w=h(z,"LI",{class:!0});var T=c(w);g=h(T,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var U=c(g);H=K(U,"About"),U.forEach(l),T.forEach(l),z.forEach(l),V=I(B),k=N(B,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var j=c(k);S=N(j,"path",{d:!0,class:!0}),c(S).forEach(l),j.forEach(l),B.forEach(l),F=I($),M=h($,"DIV",{class:!0});var se=c(M);se.forEach(l),$.forEach(l),this.h()},h(){le(n.src,m=pe)||t(n,"src",m),t(n,"alt","SvelteKit"),t(n,"class","svelte-t2wq17"),t(i,"href","https://kit.svelte.dev"),t(i,"class","svelte-t2wq17"),t(v,"class","corner svelte-t2wq17"),t(q,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),t(q,"class","svelte-t2wq17"),t(u,"viewBox","0 0 2 3"),t(u,"aria-hidden","true"),t(u,"class","svelte-t2wq17"),t(r,"sveltekit:prefetch",""),t(r,"href","/"),t(r,"class","svelte-t2wq17"),t(b,"class","svelte-t2wq17"),O(b,"active",o[0].url.pathname==="/"),t(g,"sveltekit:prefetch",""),t(g,"href","/about"),t(g,"class","svelte-t2wq17"),t(w,"class","svelte-t2wq17"),O(w,"active",o[0].url.pathname==="/about"),t(_,"class","svelte-t2wq17"),t(S,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),t(S,"class","svelte-t2wq17"),t(k,"viewBox","0 0 2 3"),t(k,"aria-hidden","true"),t(k,"class","svelte-t2wq17"),t(p,"class","svelte-t2wq17"),t(M,"class","corner svelte-t2wq17"),t(s,"class","svelte-t2wq17")},m(y,$){x(y,s,$),a(s,v),a(v,i),a(i,n),a(s,E),a(s,p),a(p,u),a(u,q),a(p,A),a(p,_),a(_,b),a(b,r),a(r,e),a(_,f),a(_,w),a(w,g),a(g,H),a(p,V),a(p,k),a(k,S),a(s,F),a(s,M)},p(y,[$]){$&1&&O(b,"active",y[0].url.pathname==="/"),$&1&&O(w,"active",y[0].url.pathname==="/about")},i:Q,o:Q,d(y){y&&l(s)}}}function ge(o,s,v){let i;return re(o,he,n=>v(0,i=n)),[i]}class be extends Y{constructor(s){super(),ee(this,s,ge,me,te,{})}}function Ee(o){let s,v,i,n,m,E,p,u,q,A,_;s=new be({});const b=o[1].default,r=oe(b,o,o[0],null);return{c(){ie(s.$$.fragment),v=L(),i=d("main"),r&&r.c(),n=L(),m=d("footer"),E=d("p"),p=C("visit "),u=d("a"),q=C("kit.svelte.dev"),A=C(" to learn SvelteKit"),this.h()},l(e){ce(s.$$.fragment,e),v=I(e),i=h(e,"MAIN",{class:!0});var f=c(i);r&&r.l(f),f.forEach(l),n=I(e),m=h(e,"FOOTER",{class:!0});var w=c(m);E=h(w,"P",{});var g=c(E);p=K(g,"visit "),u=h(g,"A",{href:!0,class:!0});var H=c(u);q=K(H,"kit.svelte.dev"),H.forEach(l),A=K(g," to learn SvelteKit"),g.forEach(l),w.forEach(l),this.h()},h(){t(i,"class","svelte-1izrdc8"),t(u,"href","https://kit.svelte.dev"),t(u,"class","svelte-1izrdc8"),t(m,"class","svelte-1izrdc8")},m(e,f){ne(s,e,f),x(e,v,f),x(e,i,f),r&&r.m(i,null),x(e,n,f),x(e,m,f),a(m,E),a(E,p),a(E,u),a(u,q),a(E,A),_=!0},p(e,[f]){r&&r.p&&(!_||f&1)&&ue(r,b,e,e[0],_?_e(b,e[0],f,null):ve(e[0]),null)},i(e){_||(W(s.$$.fragment,e),W(r,e),_=!0)},o(e){X(s.$$.fragment,e),X(r,e),_=!1},d(e){fe(s,e),e&&l(v),e&&l(i),r&&r.d(e),e&&l(n),e&&l(m)}}}function we(o,s,v){let{$$slots:i={},$$scope:n}=s;return o.$$set=m=>{"$$scope"in m&&v(0,n=m.$$scope)},[n,i]}class qe extends Y{constructor(s){super(),ee(this,s,we,Ee,te,{})}}export{qe as default};