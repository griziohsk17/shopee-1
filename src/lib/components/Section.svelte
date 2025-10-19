<script lang="ts">
	export let title = '';
	export let subtitle = '';
	$: hasSubtitle = subtitle && subtitle.length > 0;
</script>

<section class="container container-py">
	<div class="mb-6 flex items-end justify-between gap-3">
		<div>
			<h2>{title}</h2>
			{#if hasSubtitle}
				<p class="mt-1 text-muted">{subtitle}</p>
			{/if}
		</div>
		<slot name="actions" />
	</div>
	<slot />
</section>
