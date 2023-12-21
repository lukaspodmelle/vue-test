<script setup lang="ts">
import { ref } from 'vue';
import {
	UserIcon,
	CalendarIcon,
	PlayIcon,
	PencilIcon,
	TagIcon,
	EllipsisVerticalIcon,
	TrashIcon,
} from '@heroicons/vue/24/outline';
import Tag from './Tag.vue';
defineProps({
	title: String,
	comments: Number,
	tag: String,
	done: Boolean,
});
const active = ref(false);
const controlsButton = 'w-4 h-4';
</script>

<template>
	<li
		@mouseover="active = true"
		@mouseleave="active = false"
		class="flex justify-between items-center py-2 border-b border-slate-200"
		:class="{ 'bg-slate-50': active }"
	>
		<div class="flex items-center gap-2">
			<input type="checkbox" @click="$emit('on-complete')" />
			<a :class="{ 'line-through': done }">{{ title }}</a>
			<div class="hidden md:flex gap-2 items-center">
				<button
					class="bg-slate-200 text-slate-400 leading-[2] text-xs px-2 rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-sm"
				>
					{{ comments }}
				</button>
				<div
					id="controls"
					class="gap-2 text-slate-500"
					:class="{ flex: active, hidden: !active }"
				>
					<button>
						<UserIcon :class="controlsButton" />
					</button>
					<button>
						<CalendarIcon :class="controlsButton" />
					</button>
					<button>
						<PlayIcon :class="controlsButton" />
					</button>
					<button>
						<PencilIcon :class="controlsButton" />
					</button>
					<button>
						<TagIcon :class="controlsButton" />
					</button>
				</div>
			</div>
		</div>
		<div class="flex items-center gap-3">
			<div class="hidden md:flex gap-3 items-center">
				<Tag v-if="tag" :text="tag" />
				<span class="text-slate-500 text-xs">10 000 Kč</span>
				<span class="text-slate-500 text-xs">1:30 h</span>
			</div>
			<div>
				<button @click="$emit('on-delete')" class="hover:text-red-400">
					<TrashIcon class="w-4 h-4 md:w-3 md:h-3" />
				</button>
				<button class="md:hidden">
					<EllipsisVerticalIcon class="w-4 h-4 md:w-3 md:h-3" />
				</button>
			</div>
		</div>
	</li>
</template>
