<script lang="ts">
	import type { PageData } from './$types';
	import OrderCard from '$lib/components/OrderCard.svelte';
	let { data }: { data: PageData } = $props();
</script>

<section class="container container-py">
	<h1>Заказы</h1>
	{#if data.orders.length}
		<div class="mt-6 grid gap-4 md:grid-cols-2">
			{#each data.orders as o (o.id)}
				<OrderCard order={o} />
			{/each}
		</div>
	{:else}
		<p class="mt-4 text-muted">У вас пока нет заказов.</p>
	{/if}
</section>
