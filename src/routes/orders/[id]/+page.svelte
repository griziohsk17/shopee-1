<script lang="ts">
	import Placeholder from '$lib/components/Placeholder.svelte';
	let { params } = $props();
</script>

<Placeholder title={`Заказ №${params.id}`} description="Детали заказа — заглушка. Могу вывести таймлайн, состав, адрес и статусы." />
