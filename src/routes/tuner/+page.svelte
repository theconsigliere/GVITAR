<svelte:head>
	<title>Notes</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
	import { page } from '$app/stores';
	import TuningSelector from './TuningSelector.svelte';
	import TuningGrid from './TuningGrid.svelte';

</script>


<div class="container">
    <TuningSelector />
	<TuningGrid />
</div>
