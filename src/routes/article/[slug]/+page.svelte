<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="container">

<h1>{data.header}</h1>
<div>{@html data.detail}</div>
</div>