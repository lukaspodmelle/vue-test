<script setup lang="ts">
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
});

const controlsButton = 'w-4 h-4';
</script>

<template>
	<li
		class="flex justify-between items-center py-2 border-b border-slate-200">
		<div class="flex items-center gap-2">
			<input type="checkbox" />
			<a>{{ title }}</a>
			<div class="hidden md:flex gap-2 items-center">
				<a
					href="#"
					class="bg-slate-100 text-slate-400 leading-[2] text-xs px-2 rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-sm"
					>{{ comments }}</a
				>
				<div class="flex gap-2 text-slate-500">
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
		<div class="hidden md:flex items-center gap-3">
			<Tag v-if="tag" :text="tag" />
			<span class="text-slate-500 text-xs">10 000 Kč</span>
			<span class="text-slate-500 text-xs">1:30 h</span>
			<button @click="$emit('on-delete')">
				<TrashIcon class="w-3 h-3" />
			</button>
		</div>
		<div class="md:hidden w-4 h-4"><EllipsisVerticalIcon /></div>
	</li>
</template>
