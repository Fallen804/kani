<script lang="ts">
	import mockup from '$lib/assets/mockup.avif';
</script>

<svelte:head>
	<title>Kani</title>
</svelte:head>

<main class="flex flex-col items-center sm:px-8">
	<div class="max-w-4xl text-center">
		<div>
			<h1 class="mx-4 mb-5 mt-8 text-balance text-4xl font-bold leading-tight sm:mt-16 sm:text-7xl sm:leading-tight">
				Meet <span class="rounded-2xl bg-indigo-500 px-2 py-1 text-zinc-50">Kani</span>: Flashcards for the digital age
			</h1>
		</div>
		<h2 class="mx-4 mb-4 text-balance text-lg text-zinc-500 sm:text-2xl">
			A beautiful, modern flashcard app designed for the rest of us
		</h2>

		<div class="mb-4 flex flex-col items-stretch justify-center gap-6 bg-gray-50 px-4 py-8 sm:flex-row sm:p-8">
			{#snippet card(subheading: string, heading: string, text: string)}
				<div class="flex-1 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:rounded-l-3xl">
					<p class="mb-2 text-sm font-bold text-indigo-500">{subheading}</p>
					<p class="mb-2 text-balance text-lg font-semibold leading-snug">{heading}</p>
					<p class="text-balance px-2 text-sm text-zinc-500">
						{text}
					</p>
				</div>
			{/snippet}

			{@render card(
				'Design',
				'Intuitive and Beautiful Design',
				"Kani's modern interface makes studying effortless. Designed with users in mind, every click and swipe is optimized to help you focus on what matters most: learning"
			)}
			{@render card(
				'Collaboration',
				'Learn Together, Succeed Together',
				'Share decks, collaborate with peers, and track team progress. Kani makes learning a social experience, helping you achieve your goals as a group'
			)}
			{@render card(
				'Intelligent Learning',
				'Smarter Studying with Science',
				'Kani leverages science-backed methods like spaced repetition to optimize your learning. Retain information longer and focus on areas that matter most with personalized, effective study paths'
			)}
		</div>
	</div>
	<img src={mockup} alt="Kani on desktop and mobile" class="mx-2 w-full max-w-6xl" />
</main>
