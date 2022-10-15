<script>
    const toggleTheme = () => {
        document.documentElement.setAttribute('data-theme', 'dark')
// document.documentElement.setAttribute('data-theme', 'light')
    }

</script>

<input type="checkbox" on:click={toggleTheme} />
