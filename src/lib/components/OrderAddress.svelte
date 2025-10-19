<script lang="ts">
	import type { Address, Order } from '$lib/entities/order';
	export let address: Address | undefined;
	export let order: Order;
</script>

<div class="card p-4">
	<h3 class="text-lg font-semibold">Доставка</h3>
	<div class="mt-3 grid gap-1 text-sm">
		<p class="text-muted">Способ</p>
		<p class="font-medium">{order.shippingMethod ?? '—'}</p>
		<p class="text-muted mt-3">Адрес</p>
		{#if address}
			<p class="font-medium">{address.fullName}, {address.phone}</p>
			<p>{address.street}, {address.city}, {address.zip}</p>
		{:else}
			<p>—</p>
		{/if}
		{#if order.trackingNumber}
			<p class="text-muted mt-3">Трекинг</p>
			<p class="font-medium">{order.trackingNumber}</p>
		{/if}
	</div>
</div>
