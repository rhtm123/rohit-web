<script>
    /** @type {import('./$types').PageData} */
    export let data;

    // console.log(data);

</script>

<div class="container">
 
    <br />
    <h3>My Thoughts</h3>
    {#each data.results as item}
    <h5><a href={"/article/"+item.slug}>{item.header}</a></h5>
    {/each}
</div>
