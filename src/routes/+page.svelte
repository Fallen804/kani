<script lang="ts">
	import { enhance } from '$app/forms';
	import mockup from '$lib/assets/mockup.avif';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { toast } from 'svelte-sonner';
</script>

<svelte:head>
	<title>Kani</title>
</svelte:head>

<main class="flex flex-col items-center sm:px-8">
	<div class="max-w-4xl text-center">
		<div>
			<h1 class="mx-4 mb-6 mt-8 text-balance text-4xl font-bold leading-tight sm:mt-16 sm:text-7xl sm:leading-tight">
				Meet <span class="rounded-md bg-indigo-500 px-2 py-1 text-zinc-50">Kani</span>, the next-generation flashcard
				app
			</h1>
		</div>
		<h2 class="mx-4 mb-4 text-balance text-lg text-zinc-500 sm:text-2xl">
			With its clean and modern design, Kani makes learning simple and enjoyable. Its intuitive interface and smart
			features transform studying into an engaging experience
		</h2>

		<div class="mb-4 flex flex-col items-stretch justify-center gap-6 bg-gray-50 px-4 py-8 sm:flex-row sm:p-8">
			<div class="flex-1 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:rounded-l-3xl">
				<p class="mb-2 text-sm font-bold text-indigo-500">Design</p>
				<p class="mb-2 text-balance text-lg font-semibold">Intuitive and Beautiful Design</p>
				<p class="text-balance px-2 text-sm text-zinc-500">
					Kani's modern interface makes studying effortless. Designed with users in mind, every click and swipe is
					optimized to help you focus on what matters most: learning
				</p>
			</div>

			<div class="flex-1 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
				<p class="mb-2 text-sm font-bold text-indigo-500">Collaboration</p>
				<p class="mb-2 text-balance text-lg font-semibold">Learn Together, Succeed Together</p>
				<p class="text-balance px-2 text-sm text-zinc-500">
					Share decks, collaborate with peers, and track team progress. Kani makes learning a social experience, helping
					you achieve your goals as a group.
				</p>
			</div>

			<div class="flex-1 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:rounded-r-3xl">
				<p class="mb-2 text-sm font-bold text-indigo-500">Intelligent Learning</p>
				<p class="mb-2 text-balance text-lg font-semibold">Smarter Studying with Science</p>
				<p class="text-balance px-2 text-sm text-zinc-500">
					Kani leverages science-backed methods like spaced repetition to optimize your learning. Retain information
					longer and focus on areas that matter most with personalized, effective study paths.
				</p>
			</div>
		</div>
	</div>
	<img src={mockup} alt="Kani on desktop and mobile" class="mx-2 w-full max-w-6xl" />
</main>
