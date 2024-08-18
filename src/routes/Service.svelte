<script lang="ts">
	type Arrow = 'up-hollow' | 'up-solid' | 'down-hollow' | 'down-solid';
	type Props = { leftArrow: Arrow; rightArrow: Arrow; label: string; description: string };

	let { leftArrow, rightArrow, label, description }: Props = $props();
</script>

<div class="flex flex-auto">
	<div>arrows</div>
	<div>texts</div>
</div>
