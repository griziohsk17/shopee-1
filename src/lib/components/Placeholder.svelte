<script lang="ts">
	export let title = 'Скоро здесь будет страница';
	export let description = 'Подскажите, что именно вы хотите видеть — и я заполню этот экран.';
</script>

<section class="container container-py">
	<h1>{title}</h1>
	<p class="mt-3 text-muted">{description}</p>
	<div class="mt-6">
		<a class="btn-outline" href="/">На главную</a>
		<a class="btn-primary ml-2" href="/catalog">В каталог</a>
	</div>
</section>
