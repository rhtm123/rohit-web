import { c as create_ssr_component, e as escape } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"article container"}"><div class="${"row"}"><div class="${"col-2"}"></div>
        <div class="${"col-8"}"><br>
        <h2 class="${"header"}">${escape(data.header)}</h2>
        <div><!-- HTML_TAG_START -->${data.detail}<!-- HTML_TAG_END --></div></div>
        <div class="${"col-2"}"></div></div></div>`;
});
export {
  Page as default
};
