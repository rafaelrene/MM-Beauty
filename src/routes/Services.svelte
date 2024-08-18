<script lang="ts">
	import Service from './Service.svelte';

	const SERVICES = [
		{
			leftArrow: 'up-solid',
			rightArrow: 'down-hollow',
			label: 'Strihanie',
			description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptate.'
		},
		{
			leftArrow: 'up-solid',
			rightArrow: 'down-hollow',
			label: 'Make up',
			description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptate.'
		},
		{
			leftArrow: 'up-solid',
			rightArrow: 'down-hollow',
			label: 'Barber',
			description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptate.'
		},
		{
			leftArrow: 'up-solid',
			rightArrow: 'down-hollow',
			label: 'Ucesy',
			description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptate.'
		}
	] as const;
</script>

<section id="sluzby" class="h-[644px] bg-[#4D4D4D] pt-20 uppercase tracking-[.8rem] text-[#B19230]">
	<h2 class="text-center text-5xl">Služby</h2>
	<div class="container mx-auto grid grid-cols-2 grid-rows-2">
		{#each SERVICES as service}
			<Service {...service} />
		{/each}
	</div>
</section>
