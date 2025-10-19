<script lang="ts">
	import ProductGrid from '$lib/components/ProductGrid.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	let q = data.q ?? '';
	let category = data.category ?? '';

	function apply(e: SubmitEvent) {
		e.preventDefault();
		const params = new URLSearchParams();
		if (q) params.set('q', q);
		if (category) params.set('category', category);
		window.location.search = params.toString();
	}
</script>

<section class="container container-py">
	<h1>Каталог</h1>
	<form class="mt-4 grid gap-3 md:flex md:items-center" on:submit={apply}>
		<input class="w-full rounded-lg border border-slate-200 px-4 py-2 md:w-80" placeholder="Поиск" bind:value={q} />
		<select class="w-full rounded-lg border border-slate-200 px-4 py-2 md:w-64" bind:value={category}>
			<option value="">Все категории</option>
			{#each data.categories as c}
				<option value={c.slug}>{c.name}</option>
			{/each}
		</select>
		<button class="btn-primary">Применить</button>
	</form>

	<div class="mt-6">
		{#if data.products.length}
			<ProductGrid products={data.products} />
		{:else}
			<p class="text-muted">Ничего не найдено.</p>
		{/if}
	</div>
</section>
