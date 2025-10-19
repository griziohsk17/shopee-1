<script lang="ts">
	import type { Order } from '$lib/entities/order';
	export let order: Order;
	function formatDate(iso: string) {
		return new Date(iso).toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' });
	}
	const badgeColor = (status: Order['status']) => {
		return status === 'delivered' ? 'bg-green-100 text-green-700' :
		status === 'shipped' ? 'bg-blue-100 text-blue-700' :
		status === 'paid' ? 'bg-violet-100 text-violet-700' :
		status === 'processing' ? 'bg-amber-100 text-amber-700' :
		'bg-slate-100 text-slate-700';
	}
</script>

<a href={`/orders/${order.id}`} class="card flex gap-4 p-4 hover:border-primary/40">
	<img src={order.items[0]?.image} alt="preview" class="h-20 w-20 rounded-lg object-cover" />
	<div class="min-w-0 flex-1">
		<div class="flex flex-wrap items-center justify-between gap-2">
			<h3 class="text-lg font-semibold">Заказ №{order.number}</h3>
			<span class={`badge ${badgeColor(order.status)}`}>{order.status}</span>
		</div>
		<p class="mt-1 text-sm text-muted">от {formatDate(order.createdAt)} · товаров: {order.items.length}</p>
		<p class="mt-2 font-bold">{order.total.toLocaleString('ru-RU', { style: 'currency', currency: order.currency })}</p>
	</div>
</a>
