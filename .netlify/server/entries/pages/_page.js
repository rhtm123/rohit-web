async function load({ fetch, setHeaders }) {
  let url = "https://codingchaska.up.railway.app/api/v1/short-tutorial/short-tuts/?author=&is_published=&tags=26";
  let res = await fetch(url);
  return res.json();
}
export {
  load
};
