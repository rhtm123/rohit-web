<script>
    import '../global.css';
    import DarkModeToggle from "../components/DarkModeToggle.svelte";
    import Logo from '$lib/images/logo.png';
    import NProgress from 'nprogress';
	  import { navigating } from '$app/stores';
    import { onMount } from 'svelte';

	  import 'nprogress/nprogress.css';

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}



	onMount(() => {
		AOS.init();
	});
  
</script>

<!-- navbar -->


<div class="nav-wrapper">
  <div class="row">

    <div class="col-12">
    <div class="nav container">


    <a href="/" class="nav-logo main-item nav-item">
      <img class="" src="/logo.png" alt="Logo" />
      <span> Rohit Maurya</span>
    </a>
    <a class="nav-item" href="/articles">Articles</a>
    

  </div>

  </div>
  </div>
</div>

<DarkModeToggle />
<slot />
<!-- footer -->

  <div class="footer">
  <p style="text-align:center; font-weight:500; padding:1rem" class="subtitle">Rohit Maurya v0.0.1 </p>
  </div>
