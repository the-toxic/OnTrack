<script>
export default {
	inheritAttrs: false // отключить присвоение атрибутов корневому элементу, переданных в компонент, чтобы присвоить их нужному тегу через $attrs
}
</script>

<template>
	<li class="flex-1">
		<a v-bind="$attrs" class="flex flex-col items-center p-2 text-xs capitalize">
			<slot />
		</a>
	</li>
</template>