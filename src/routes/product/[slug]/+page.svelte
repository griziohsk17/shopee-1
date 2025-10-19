<script lang="ts">
	import Placeholder from '$lib/components/Placeholder.svelte';
	let { params } = $props();
</script>

<Placeholder title={`Товар: ${params.slug}`} description="Страница товара — заглушка. Скажите, если хотите сгенерировать детальную карточку." />
