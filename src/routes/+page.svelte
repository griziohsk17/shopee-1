<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import ProductGrid from '$lib/components/ProductGrid.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<!-- HERO -->
<section class="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-accent/10">
	<div class="container container-py grid items-center gap-8 md:grid-cols-2">
		<div>
			<h1>Магазин будущего, уже сегодня</h1>
			<p class="mt-4 max-w-xl text-lg text-muted">Красивый и мобильный шаблон интернет‑магазина. Разделение на домены, бизнес‑логику и UI. Данные подтягиваются из JSON.</p>
			<div class="mt-6 flex flex-wrap gap-3">
				<a href="/catalog" class="btn-primary">Перейти в каталог</a>
				<a href="#featured" class="btn-outline">Популярное</a>
			</div>
		</div>
		<div class="relative">
			<div class="aspect-square w-full rounded-3xl bg-gradient-to-br from-primary to-accent p-[2px]">
				<div class="h-full w-full rounded-3xl bg-white p-6">
					<div class="h-full w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CATEGORIES -->
<section class="container container-py">
	<h2>Категории</h2>
	<div class="mt-4 flex flex-wrap gap-2">
		{#each data.categories as cat (cat.id)}
			<a href={`/catalog?category=${cat.slug}`} class="badge hover:bg-primary hover:text-white">{cat.name}</a>
		{/each}
	</div>
</section>

<!-- FEATURED PRODUCTS -->
<Section id="featured" title="Популярные товары" subtitle="Выбор покупателей">
	<ProductGrid products={data.featured} />
	<svelte:fragment slot="actions">
		<a href="/catalog" class="btn-outline">Смотреть все</a>
	</svelte:fragment>
</Section>
