<script lang="ts">
	let { title = '', subtitle = '', actions, children, ...rest } = $props();
	const hasSubtitle = $derived(Boolean(subtitle && subtitle.length > 0));
</script>

<section class="container container-py" {...rest}>
	<div class="mb-6 flex items-end justify-between gap-3">
		<div>
			<h2>{title}</h2>
			{#if hasSubtitle}
				<p class="mt-1 text-muted">{subtitle}</p>
			{/if}
		</div>
		{@render actions?.()}
	</div>
	{@render children?.()}
</section>
