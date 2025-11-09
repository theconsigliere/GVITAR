<script lang="ts">
	// import logo from '$lib/images/svelte-logo.svg';
	// import github from '$lib/images/github.svg';
</script>

<header class="layoutGrid">
	<div class="logo">gvitar</div>
</header>

<style>
	header {
		grid-column: 1 / -1;
		display: flex;
		justify-content: center;
	}


	.logo {
		font-size: 1.5rem;
		text-decoration: line-through;
		color: var(--color-dark-grey);
		font-weight: var(--font-weight-mid);
		margin: 0;
		padding: 1rem 2rem;
	}
</style>