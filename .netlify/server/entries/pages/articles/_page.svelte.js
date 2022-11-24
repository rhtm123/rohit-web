import { c as create_ssr_component, i as each, h as add_attribute, e as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"articles container"}"><div class="${"row"}"><div class="${"col-2"}"></div>
        <div class="${"col-8"}"><br>
            <h3 class="${"header"}">My Thoughts</h3>
            ${each(data.results, (item) => {
    return `<h5><a${add_attribute("href", "/article/" + item.slug, 0)}>${escape(item.header)}</a></h5>`;
  })}</div>
        <div class="${"col-2"}"></div></div></div>`;
});
export {
  Page as default
};
