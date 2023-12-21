<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline';
defineProps({
	text: String,
});
</script>

<template>
	<a
		class="flex items-center gap-1 bg-slate-200 text-slate-600 rounded-full text-xs font-bold px-3 py-1"
		>{{ text }} <XMarkIcon class="w-3 h-3"
	/></a>
</template>
