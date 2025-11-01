<svelte:head>
	<title>Tuner</title>
	<meta name="description" content="About this app" />
</svelte:head>


<script lang="ts">
	import { page } from '$app/stores';
	// import TuningSelector from './TuningSelector.svelte';
	import TuningGrid from './TuningGrid.svelte';

</script>


<div class="page__container">
    <!-- <TuningSelector /> -->
	<TuningGrid />
</div>


<style>
	.page__container {
		grid-template-columns: subgrid;
		grid-column: 1 / -1;
		grid-template-rows: auto;
		display: grid;
	}
</style>