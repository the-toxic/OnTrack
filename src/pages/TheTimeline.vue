<script setup>
import { generateTimelineItems } from "@/functions";
import TimelineItem from "@/components/TimelineItem.vue";

const timelineItems = generateTimelineItems()
</script>

<template>
	<div class="mt-7">
		<ul>
			<TimelineItem v-for="item in timelineItems" :key="item.hour" :item="item"/>
		</ul>
	</div>
</template>