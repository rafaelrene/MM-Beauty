<script lang="ts">
	import Service from './Service.svelte';

	const SERVICES = [
		{
			alignment: 'left',
			leftArrow: 'up-solid',
			rightArrow: 'down-hollow',
			label: 'Strihanie',
			description: 'lorem ipsum dolor sit amet , consectetur adipisicing elit.'
		},
		{
			alignment: 'right',
			leftArrow: 'down-solid',
			rightArrow: 'up-hollow',
			label: 'Make up',
			description: 'lorem ipsum dolor sit amet , consectetur adipisicing elit.'
		},
		{
			alignment: 'left',
			leftArrow: 'up-hollow',
			rightArrow: 'down-solid',
			label: 'Barber',
			description: 'lorem ipsum dolor sit amet , consectetur adipisicing elit.'
		},
		{
			alignment: 'right',
			leftArrow: 'down-hollow',
			rightArrow: 'up-solid',
			label: 'Ucesy',
			description: 'lorem ipsum dolor sit amet , consectetur adipisicing elit.'
		}
	] as const;
</script>

<section id="sluzby" class="h-[644px] bg-[#4D4D4D] pt-20 uppercase tracking-[.3rem] text-[#B19230]">
	<h2 class="text-center text-5xl">Služby</h2>
	<div class="container mx-auto grid grid-cols-2 grid-rows-2 gap-x-52 gap-y-28">
		{#each SERVICES as service}
			<Service {...service} />
		{/each}
	</div>
</section>
