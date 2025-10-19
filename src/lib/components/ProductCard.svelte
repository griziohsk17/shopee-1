<script lang="ts">
	import type { Product } from '$lib/entities/product';
	export let product: Product;
</script>

<a href={`/product/${product.slug}`} class="group card overflow-hidden">
	<div class="relative aspect-square overflow-hidden bg-slate-100">
		<img src={product.image} alt={product.title} class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
		{#if product.featured}
			<span class="absolute left-2 top-2 rounded-md bg-primary px-2 py-1 text-xs font-semibold text-white">Хит</span>
		{/if}
	</div>
	<div class="p-4">
		<h3 class="line-clamp-1 text-base font-semibold">{product.title}</h3>
		<div class="mt-1 flex items-center justify-between">
			<span class="text-lg font-bold">{product.price.toLocaleString('ru-RU', { style: 'currency', currency: product.currency })}</span>
			<span class="text-sm text-muted">★ {product.rating.toFixed(1)}</span>
		</div>
	</div>
</a>
