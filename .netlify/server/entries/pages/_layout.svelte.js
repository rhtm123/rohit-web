import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const app = "";
const DarkModeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<input type="${"checkbox"}">`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div class="${""}"><img src="${"./img/logo.png"}">
    <a href="${"/"}">Rohit Maurya</a>
    <a href="${"/my-story"}">#MyStory</a>
    <a href="${"/articles"}">Articles</a></div>


${slots.default ? slots.default({}) : ``}
${validate_component(DarkModeToggle, "DarkModeToggle").$$render($$result, {}, {}, {})}

<div></div>`;
});
export {
  Layout as default
};
