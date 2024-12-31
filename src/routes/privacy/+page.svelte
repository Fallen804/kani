<script lang="ts">
	import Link from '$lib/components/atoms/Link.svelte';
</script>

<svelte:head>
	<title>Privacy</title>
</svelte:head>

<main class="mt-4 w-full max-w-3xl px-5 sm:mt-10">
	<h1 class="mb-5 text-4xl font-light sm:text-5xl">Privacy</h1>

	<p class="mb-5 text-lg sm:text-xl">
		Kani is our academic master’s project for the MultiMediaTechnology program at the Salzburg
		University of Applied Sciences (FH Salzburg).
	</p>

	<p class="mb-5 text-lg sm:text-xl">
		This website is hosted on Vercel, which generates logs that may include the date and time of
		your request, the requested resource, and your anonymized IP address. For more information,
		please refer to
		<Link href="https://vercel.com/legal/privacy-policy">Vercel's privacy policy</Link>.
	</p>

	<p class="mb-5 text-lg sm:text-xl">
		If you sign up for our waitlist using your email address, we use Supabase to securely store and
		manage your data. For more details, you can review
		<Link href="https://supabase.com/privacy">Supabase's privacy policy</Link>. If you subscribed to
		Kani's waitlist and would like us to delete your data, please contact us using the email
		addresses below.
	</p>

	<p class="mb-5 text-lg sm:text-xl">
		If you have questions or comments, please contact us:<br />
	</p>
	<p class="mb-5 text-lg sm:text-xl">
		Maximilian Hajek:
		<Link href="mailto:mhajek.mmtb-m2024@fh-salzburg.ac.at"
			>mhajek.mmtb-m2024@fh-salzburg.ac.at</Link
		><br />
		Pascal Gottschling:
		<Link href="mailto:pgottschling.mmtb-m2024@fh-salzburg.ac.at"
			>pgottschling.mmtb-m2024@fh-salzburg.ac.at</Link
		>
	</p>
	<p class="mb-5 text-lg sm:text-xl">
		Salzburg University of Applied Sciences (FH Salzburg)<br />
		c/o MultiMediaTechnology<br />
		Urstein Süd 1<br />
		5412 Puch bei Hallein<br />
		Austria
	</p>
</main>
