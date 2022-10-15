async function load({ fetch, setHeaders }) {
  let url = "https://gurukulapp.herokuapp.com/api/v1/short-tutorial/short-tuts/?author=&is_published=&tags=16";
  let res = await fetch(url);
  return res.json();
}
export {
  load
};
