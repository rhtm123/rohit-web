<script>
    const toggleTheme = () => {
        document.documentElement.setAttribute('data-theme', 'dark')
// document.documentElement.setAttribute('data-theme', 'light')
    }

</script>
<div class="theme-wrapper">
<input type="checkbox" on:click={toggleTheme} />
</div>
