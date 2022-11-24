<script>
    /** @type {import('./$types').PageData} */
    export let data;

</script>

<div class="articles container">

    <div class="row">
        <div class="col-2"></div>
        <div class="col-8">

            <br />
            <h3 class="header">My Thoughts</h3>
            {#each data.results as item}
            <h5><a href={"/article/"+item.slug}>{item.header}</a></h5>
            {/each}
        </div>
        <div class="col-2"></div>

    </div>
 

</div>
