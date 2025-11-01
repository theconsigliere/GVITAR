<script lang="ts">
	import { page } from '$app/state';
	import Header from './Header.svelte';
	import TuningControl from '$lib/components/tuningControl/Main.svelte';
	import GuitarBassSelector from '$lib/components/GuitarBassSelector.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import '../app.css';

	let { children } = $props();

	$inspect(page.url.pathname);

</script>

<div class="app page--{ page.url.pathname.replace(/^\//, '').replace(/\//g, '-')}">
	<Header />
	<main class="layoutGrid">
		<Nav />
		<GuitarBassSelector />
		<TuningControl />
		{@render children()}
	</main>

	<footer>
	</footer>
</div>
