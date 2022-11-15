<script>
    import '../global.css';
    import DarkModeToggle from "../components/DarkModeToggle.svelte";
    import Logo from '$lib/images/logo.png';
    import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	import 'nprogress/nprogress.css';

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

<!-- navbar -->
<div class="nav-wrapper">
  <div class="nav container">

    <a href="/" class="nav-logo main-item nav-item">
      <img class="" src="/logo.png" alt="Logo" />
      <span>Rohit Maurya</span>
    </a>
    <a class="nav-item" href="/articles">Articles</a>
  </div>
</div>

<slot />
<!-- <DarkModeToggle /> -->
<!-- footer -->
<div>
  <br />
  <br />
  <br />
  <p style="text-align:center">Rohit Maurya v0.0.1 </p>
</div>