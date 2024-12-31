<script lang="ts">
	import Link from '$lib/components/atoms/Link.svelte';
</script>

<svelte:head>
	<title>Imprint</title>
</svelte:head>

<main class="mt-4 w-full max-w-3xl px-5 sm:mt-10">
	<h1 class="mb-5 text-4xl font-light sm:text-5xl">Imprint</h1>

	<p class="mb-5 text-lg sm:text-xl">
		<span class="font-medium">Salzburg University of Applied Sciences (FH Salzburg)</span><br />
		c/o MultiMediaTechnology<br />
		Urstein Süd 1<br />
		5412 Puch bei Hallein<br />
		Austria
	</p>

	<p class="mb-5 text-lg sm:text-xl">
		<span class="font-medium">Contact</span><br />
		Maximilian Hajek:
		<Link href="mailto:mhajek.mmtb-m2024@fh-salzburg.ac.at"
			>mhajek.mmtb-m2024@fh-salzburg.ac.at</Link
		><br />
		Pascal Gottschling:
		<Link href="mailto:pgottschling.mmtb-m2024@fh-salzburg.ac.at"
			>pgottschling.mmtb-m2024@fh-salzburg.ac.at</Link
		>
	</p>
</main>
