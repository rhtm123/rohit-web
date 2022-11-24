<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="article container">

    <div class="row">
        <div class="col-2"></div>
        <div class="col-8">

        <br />
        <h2 class="header">{data.header}</h2>
        <div>{@html data.detail}</div>
        </div>
        <div class="col-2"></div>


</div>

</div>