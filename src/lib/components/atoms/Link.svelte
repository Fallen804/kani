<script lang="ts">
	let { children, url } = $props();
	let externalUrl = $derived(url.startsWith('http'));
</script>

{#if children}
	<a
		href={url}
		target={externalUrl ? '_blank' : ''}
		rel={externalUrl ? 'noopener noreferrer' : ''}
		class="text-indigo-500 hover:text-indigo-800"
	>
		{@render children()}
	</a>
{/if}
