<script lang="ts">
	import Polygon from './polygon.svg?component';

	type Alignment = 'left' | 'right';
	type Arrow = 'up-solid' | 'up-hollow' | 'down-solid' | 'down-hollow';
	type Props = {
		alignment: Alignment;
		leftArrow: Arrow;
		rightArrow: Arrow;
		label: string;
		description: string;
	};

	let { alignment, leftArrow, rightArrow, label, description }: Props = $props();
</script>

<div class="flex flex-auto gap-14">
	{#if alignment === 'left'}
		{@render arrows(leftArrow, rightArrow)}
	{/if}

	<div class="flex flex-col gap-2">
		<h2 class="text-2xl">{label}</h2>
		<p class="text-sm">{description}</p>
	</div>

	{#if alignment === 'right'}
		{@render arrows(leftArrow, rightArrow)}
	{/if}
</div>

{#snippet arrow(arrow: Arrow)}
	{#if arrow === 'up-solid'}
		<Polygon fill="#B19230" />
	{:else if arrow === 'up-hollow'}
		<Polygon fill="transparent" stroke="#B19230" />
	{:else if arrow === 'down-solid'}
		<Polygon fill="#B19230" transform="rotate(180)" />
	{:else}
		<Polygon fill="transparent" stroke="#B19230" transform="rotate(180)" />
	{/if}
{/snippet}

{#snippet arrows(leftArrow: Arrow, rightArrow: Arrow)}
	<div class="flex items-center gap-4">
		{@render arrow(leftArrow)}
		<div class="h-[60px] w-0 border border-solid border-[#B19230]"></div>
		{@render arrow(rightArrow)}
	</div>
{/snippet}
