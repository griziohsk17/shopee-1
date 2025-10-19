<footer class="border-t border-slate-200 bg-white">
	<div class="container container-py grid gap-6 md:grid-cols-3">
		<div>
			<div class="flex items-center gap-2">
				<div class="grid h-8 w-8 place-items-center rounded-lg bg-primary text-white font-extrabold">ƒ</div>
				<span class="text-lg font-extrabold">Fusion Store</span>
			</div>
			<p class="mt-3 text-sm text-muted">Современный шаблон интернет‑магазина на SvelteKit + Tailwind.</p>
		</div>
		<nav class="grid gap-2 text-sm">
			<a class="hover:text-primary" href="/catalog">Каталог</a>
			<a class="hover:text-primary" href="/cart">Корзина</a>
			<a class="hover:text-primary" href="/user">Профиль</a>
		</nav>
		<div class="text-sm text-muted md:text-right">© {new Date().getFullYear()} Fusion Store</div>
	</div>
</footer>
