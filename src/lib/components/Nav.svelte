<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="nav">
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
</div>

<style>

.nav {
	grid-template-columns: subgrid;
    grid-column: 2 / 4;
    grid-template-rows: auto;
	

     /* @media (min-width: 768px) {
        grid-column: 1 / -2;
    }

    @media (min-width: 992px) {
        grid-column: 1 / -3;
    }  */
}

ul {
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
}

li {
    margin-right: 1rem;

    &:last-child {
        margin-right: 0;
    }
}

</style>