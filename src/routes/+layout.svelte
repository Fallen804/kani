<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.css';

	let { children } = $props();
</script>

<Toaster />

<div class="flex min-h-screen flex-col">
	<Header />

	<div class="flex flex-1 flex-col items-center">
		{@render children()}
	</div>

	<Footer />
</div>
