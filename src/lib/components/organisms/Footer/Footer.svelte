<script lang="ts"></script>

<hr class="mx-auto mb-4 mt-10 w-5/6 border-zinc-300" />

<footer class="mx-auto mb-4 w-5/6">
	<nav>
		<ul class="flex justify-center gap-4">
			{#snippet link(url: string, name: string)}
				<li>
					<a href="/{url}" class="hover:text-indigo-500">{name}</a>
				</li>
			{/snippet}

			{@render link('privacy', 'Privacy')}
			{@render link('imprint', 'Imprint')}
		</ul>
	</nav>
</footer>
