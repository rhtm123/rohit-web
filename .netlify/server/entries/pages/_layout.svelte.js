import { c as create_ssr_component, b as subscribe } from "../../chunks/index.js";
import NProgress from "nprogress";
import { n as navigating } from "../../chunks/stores.js";
const global = "";
const nprogress = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  {
    {
      if ($navigating) {
        NProgress.start();
      }
      if (!$navigating) {
        NProgress.done();
      }
    }
  }
  $$unsubscribe_navigating();
  return `


<div class="${"nav-wrapper"}"><div class="${"row"}"><div class="${"col-12"}"><div class="${"nav container"}"><a href="${"/"}" class="${"nav-logo main-item nav-item"}"><img class="${""}" src="${"/logo.png"}" alt="${"Logo"}">
      <span>Rohit Maurya</span></a>
    <a class="${"nav-item"}" href="${"/articles"}">Articles</a></div></div></div></div>

${slots.default ? slots.default({}) : ``}



  <div class="${"footer"}"><p style="${"text-align:center; font-weight:500; padding:1rem"}" class="${"subtitle"}">Rohit Maurya v0.0.1 </p></div>`;
});
export {
  Layout as default
};
