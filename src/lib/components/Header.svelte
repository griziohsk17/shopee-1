<script lang="ts">
	let mobileOpen = false;
	let query = '';

	function toggleMobile() {
		mobileOpen = !mobileOpen;
	}

	function onSearch(e: SubmitEvent) {
		e.preventDefault();
		const q = query.trim();
		if (!q) return;
		window.location.href = `/catalog?q=${encodeURIComponent(q)}`;
	}
</script>

<header class="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
	<div class="container flex h-16 items-center gap-3">
		<a href="/" class="flex items-center gap-2">
			<div class="grid h-9 w-9 place-items-center rounded-lg bg-primary text-white font-extrabold">ƒ</div>
			<span class="text-lg font-extrabold tracking-tight">Fusion Store</span>
		</a>

		<form class="ml-auto hidden flex-1 items-center md:flex" on:submit={onSearch}>
			<input
				class="w-full max-w-xl rounded-lg border border-slate-200 bg-white px-4 py-2 outline-none ring-primary/20 focus:ring"
				placeholder="Поиск по каталогу"
				bind:value={query}
			/>
		</form>

		<nav class="ml-3 hidden items-center gap-3 md:flex">
			<a href="/catalog" class="text-sm font-medium hover:text-primary">Каталог</a>
			<a href="/orders" class="text-sm font-medium hover:text-primary">Заказы</a>
			<a href="/cart" class="text-sm font-medium hover:text-primary">Корзина</a>
			<a href="/user" class="text-sm font-medium hover:text-primary">Профиль</a>
		</nav>

		<button class="ml-auto inline-flex items-center justify-center rounded-lg p-2 md:hidden" on:click={toggleMobile} aria-label="Открыть меню">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
				<path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 10.5A.75.75 0 0 1 3.75 16.5h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Z" clip-rule="evenodd" />
			</svg>
		</button>
	</div>

	{#if mobileOpen}
		<div class="border-t border-slate-200 bg-white md:hidden">
			<form class="container flex gap-2 py-3" on:submit={onSearch}>
				<input class="w-full rounded-lg border border-slate-200 px-4 py-2" placeholder="Поиск" bind:value={query} />
				<button class="btn-primary">Найти</button>
			</form>
			<nav class="container grid gap-1 pb-4">
				<a class="rounded-lg px-3 py-2 hover:bg-slate-50" href="/catalog">Каталог</a>
				<a class="rounded-lg px-3 py-2 hover:bg-slate-50" href="/orders">Заказы</a>
				<a class="rounded-lg px-3 py-2 hover:bg-slate-50" href="/cart">Корзина</a>
				<a class="rounded-lg px-3 py-2 hover:bg-slate-50" href="/user">Профиль</a>
			</nav>
		</div>
	{/if}
</header>
