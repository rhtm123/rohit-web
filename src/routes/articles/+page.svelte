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
            <br />
            {#each data.results as item, key}
            <div data-aos="fade">
            <h5>{key+1}_ <a href={"/article/"+item.slug}>{item.header}</a></h5>
            <br />
            </div>
            {/each}
        </div>
        <div class="col-2"></div>

    </div>
 

</div>
