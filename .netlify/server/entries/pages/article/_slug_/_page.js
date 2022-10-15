async function load({ params, fetch }) {
  let slug = params.slug;
  let url = `https://gurukulapp.herokuapp.com/api/v1/short-tutorial/short-tut/${slug}/`;
  console.log(url);
  let res = await fetch(url);
  console.log(res);
  return res.json();
}
export {
  load
};
