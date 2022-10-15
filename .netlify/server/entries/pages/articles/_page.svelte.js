import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div>${escape(data.count)}
    ${each(data.results, (item) => {
    return `<a${add_attribute("href", "/article/" + item.slug, 0)}><li>${escape(item.id)} - ${escape(item.header)}</li></a>`;
  })}</div>


<h1>Many Article will go here</h1>`;
});
export {
  Page as default
};
