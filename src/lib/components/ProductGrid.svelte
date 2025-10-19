<script lang="ts">
	import type { Product } from '$lib/entities/product';
	import ProductCard from './ProductCard.svelte';
	export let products: Product[] = [];
</script>

<div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
	{#each products as p (p.id)}
		<ProductCard product={p} />
	{/each}
</div>
