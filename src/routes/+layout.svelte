<script>
    import '../global.css';
    import DarkModeToggle from "../components/DarkModeToggle.svelte";
    import Logo from '$lib/images/logo.png';
    import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	// NProgress css
	import 'nprogress/nprogress.css';

	// NProgress.configure({
	// 	minimum: 0.16
	// });

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
<p style="text-align:center;">Work in progress.. </p>

<div class="nav container">
    <a class="nav-logo" href="/">Rohit Maurya</a>
    <a class="nav-item" href="/articles">Articles</a>
  </div>

<slot />
<!-- <DarkModeToggle /> -->
<!-- footer -->
<div>
  <br />
  <p style="text-align:center">Rohit Maurya v0.0.1 </p>
</div>