<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto">
      
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold truncate max-w-[85%] text-gray-800 dark:text-gray-100">
          {{ post.title }}
        </h2>
        <button
          @click="$emit('closeModal')"
          class="w-9 h-9 flex items-center justify-center text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-red-500 hover:text-white transition-colors"
          aria-label="Close"
        >
          ✖
        </button>
      </div>

      <p class="mb-4 text-gray-700 dark:text-gray-300">{{ post.body }}</p>
      <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Comments:</h3>
      <LoadingSpinner v-if="isLoading" />
      <ErrorMessage v-if="isError" message="Failed to load comments. Please try again." />

      <ul v-else>
        <li
          v-for="comment in comments"
          :key="comment.id"
          class="p-3 bg-gray-100 dark:bg-gray-700 rounded-md mb-2 text-gray-700 dark:text-gray-300"
        >
          <strong>{{ comment.name }}</strong>
          <p>{{ comment.body }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>


<script setup>
  import { onMounted, onUnmounted, defineProps } from 'vue'
  import { usePostCommentsQuery } from '../services/postService'
  import LoadingSpinner from '../../../components/LoadingSpinner.vue'
  import ErrorMessage from '../../../components/ErrorMessage.vue'

  const {post} = defineProps({
    post: {
      type: Object,
      required: true
    }
  })

  const {data: comments, isLoading, isError} = usePostCommentsQuery(post?.id)

  onMounted(() => {
    document.body.style.overflow = 'hidden'
  })

  onUnmounted(() => {
    document.body.style.overflow = ''
  })
</script>

  