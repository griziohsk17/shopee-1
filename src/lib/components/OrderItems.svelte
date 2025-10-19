<script lang="ts">
	import type { Order } from '$lib/entities/order';
	export let order: Order;
	const money = (v: number) => v.toLocaleString('ru-RU', { style: 'currency', currency: order.currency });
</script>

<div class="card p-4">
	<h3 class="text-lg font-semibold">Состав заказа</h3>
	<ul class="mt-4 divide-y divide-slate-200">
		{#each order.items as it (it.productId)}
			<li class="py-3 flex items-center gap-3">
				<img src={it.image} alt={it.title} class="h-14 w-14 rounded-lg object-cover" />
				<div class="min-w-0 flex-1">
					<p class="font-medium line-clamp-1"><a href={`/product/${it.slug}`}>{it.title}</a></p>
					<p class="text-sm text-muted">Кол-во: {it.qty}</p>
				</div>
				<div class="font-semibold">{money(it.price * it.qty)}</div>
			</li>
		{/each}
	</ul>
	<div class="mt-4 grid gap-1 text-sm">
		<div class="flex justify-between"><span class="text-muted">Товары</span><span>{money(order.subtotal)}</span></div>
		<div class="flex justify-between"><span class="text-muted">Доставка</span><span>{money(order.shipping)}</span></div>
		<div class="mt-2 h-px bg-slate-200"></div>
		<div class="flex justify-between text-base font-bold"><span>Итого</span><span>{money(order.total)}</span></div>
	</div>
</div>
