<script lang="ts">
	import type { TimelineEvent } from '$lib/entities/order';
	export let events: TimelineEvent[] = [];
	function fmt(iso: string) {
		return new Date(iso).toLocaleString('ru-RU', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
	}
</script>

<div class="card p-4">
	<h3 class="text-lg font-semibold">Статус заказа</h3>
	<ol class="mt-4 relative border-s border-slate-200 pl-6">
		{#each events as ev (ev.id)}
			<li class="mb-4 last:mb-0">
				<div class="absolute -left-1.5 h-3 w-3 rounded-full bg-primary"></div>
				<p class="font-medium">{ev.label}</p>
				<p class="text-sm text-muted">{fmt(ev.at)}{ev.status ? ` · ${ev.status}` : ''}</p>
				{#if ev.description}
					<p class="text-sm">{ev.description}</p>
				{/if}
			</li>
		{/each}
	</ol>
</div>
