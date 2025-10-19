<script lang="ts">
	import type { PageData } from './$types';
	import OrderTimeline from '$lib/components/OrderTimeline.svelte';
	import OrderItems from '$lib/components/OrderItems.svelte';
	import OrderAddress from '$lib/components/OrderAddress.svelte';
	let { data }: { data: PageData } = $props();
	const order = data.order;
	const money = (v: number) => v.toLocaleString('ru-RU', { style: 'currency', currency: order.currency });
	function fmtDate(iso: string) {
		return new Date(iso).toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' });
	}
</script>

<section class="container container-py">
	<h1>Заказ №{order.number}</h1>
	<p class="mt-2 text-muted">от {fmtDate(order.createdAt)} · статус: <span class="font-medium">{order.status}</span></p>
	<div class="mt-6 grid gap-6 md:grid-cols-3">
		<div class="md:col-span-2 grid gap-6">
			<OrderTimeline events={order.events ?? []} />
			<OrderAddress order={order} address={order.shippingAddress} />
		</div>
		<div>
			<OrderItems order={order} />
		</div>
	</div>
</section>
