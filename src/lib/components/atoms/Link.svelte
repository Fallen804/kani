<script lang="ts">
	let { children, href } = $props();
	let externalUrl = $derived(href.startsWith('http'));
</script>

{#if children}
	<a
		{href}
		target={externalUrl ? '_blank' : ''}
		rel={externalUrl ? 'noopener noreferrer' : ''}
		class="text-indigo-500 hover:text-indigo-800"
	>
		{@render children()}
	</a>
{/if}
