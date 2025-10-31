<script lang="ts">
	import { page } from '$app/state';
	// import logo from '$lib/images/svelte-logo.svg';
	// import github from '$lib/images/github.svg';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Tuner</a>
			</li>
			<li aria-current={page.url.pathname === '/notes' ? 'page' : undefined}>
				<a href="/notes">Notes</a>
			</li>
			<!-- <li aria-current={page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li> -->
		</ul>
	</nav>
</header>

