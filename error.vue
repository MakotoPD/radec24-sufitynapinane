<template>
	<div class="bg-light w-screen h-screen">
		<NuxtErrorBoundary>
			<div class="py-36 flex justify-center items-center flex-col">
				<div class="mb-12 text-center">
					<h1 class="text-6xl font-bold text-red-500">{{error.statusCode}}</h1>
					<h2 class="text-2xl font-bold text-red-500">{{error.message}}</h2>
				</div>
				<button @click="handleClearError" class="px-6 py-2 rounded-xl bg-red-400 text-whitered hover:shadow-lg hover:bg-red-500 duration-150">Powrót do strony głównej</button>
			</div>
		</NuxtErrorBoundary>
	</div>
</template>

<script setup lang="ts">
defineProps(['error'])

const handleClearError = () => clearError({ redirect: '/' })
</script>