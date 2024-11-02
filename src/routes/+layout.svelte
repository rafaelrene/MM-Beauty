<script lang="ts">
	import type { Snippet } from 'svelte';

	import '../app.css';

	type Props = {
		children?: Snippet;
	};

	let { children }: Props = $props();

	const LINKS = [
		{
			label: 'Kontakt',
			href: '#kontakt'
		},
		{
			label: 'Salón',
			href: '#salon'
		},
		{
			label: 'Služby',
			href: '#sluzby'
		},
		{
			label: 'Kto sme',
			href: '#kto-sme'
		}
	] as const;
</script>

<header class="relative h-[880px] w-full bg-cover bg-left-top bg-repeat-x">
	<enhanced:img src="$assets/logo.svg" alt="MM beauty logo" class="mx-auto" />

	<ul
		class="absolute left-10 top-full flex w-[880px] flex-initial origin-top-left -rotate-90 justify-evenly text-xl uppercase tracking-[.8rem] text-white"
	>
		{#each LINKS as link}
			<li><a href={link.href}>{link.label}</a></li>
		{/each}
	</ul>
</header>

<main>
	{@render children?.()}
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	header {
		background-image: url('$assets/header.png?enhanced');
	}
</style>
