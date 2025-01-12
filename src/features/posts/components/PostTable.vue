<template>
  <div
    class="posts-wrapper lg:p-8 p-6 rounded-lg shadow-xl bg-white dark:bg-gray-900"
  >
    <h2 class="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800 dark:text-gray-100">
      Posts
    </h2>

    <LoadingSpinner v-if="isLoading" />

    <ErrorMessage v-if="isError" message="Failed to load posts. Please refresh the page." />

    <table v-if="!isLoading && !isError" class="w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <thead class="table-headers hidden sm:table-header-group bg-gray-100 dark:bg-gray-800">
        <tr>
          <th class="py-4 px-6 text-left uppercase text-sm text-gray-700 dark:text-gray-300">
            Title
          </th>
          <th class="py-4 px-6 text-left uppercase text-sm text-gray-700 dark:text-gray-300">
            Body
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="post in posts"
          :key="post.id"
          @click="openModal(post)"
          class="post-container hover:scale-[1.01] cursor-pointer 
                 odd:bg-gray-100 even:bg-white dark:odd:bg-gray-800 dark:even:bg-gray-900 
                 hover:bg-gray-200 dark:hover:bg-gray-700 
                 rounded-md shadow-sm dark:shadow-md dark:hover:shadow-lg flex flex-col sm:table-row"
        >
          <td class="py-4 px-6 text-blue-600 hover:underline dark:text-blue-400">
            <span class="font-semibold sm:hidden text-blue-600 dark:text-blue-400">Title:</span>

            {{ post.title }}
          </td>
          <td class="py-4 px-6">
            <span class="font-semibold sm:hidden text-black-500 dark:text-white-400">Body:</span>

            {{ post.body }}

            <span>
              {{ expandedPosts[post.id] ? post.body : post.body.slice(0, 100) + '...' }}
            </span>

            <button
              @click.stop="toggleExpand(post.id)"
              class="ml-2 text-sm hover:underline focus:outline-none text-blue-600 dark:text-blue-400"
            >
              {{ expandedPosts[post.id] ? 'Show less' : 'Read more' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <PostModal v-if="selectedPost" :post="selectedPost" @closeModal="closeModal" />

</template>


<script setup>
  import { usePostsQuery } from '../services/postService'
  import { ref } from 'vue'
  import PostModal from './PostModal.vue'
  import LoadingSpinner from '../../../components/LoadingSpinner.vue'
  import ErrorMessage from '../../../components/ErrorMessage.vue'



  const { data: posts, isLoading, isError } = usePostsQuery()
  const selectedPost = ref(null)
  const expandedPosts = ref({})


  const openModal = (post) => {
    selectedPost.value = post
  }

  const closeModal = () => {
    selectedPost.value = null
  }

  const toggleExpand = (postId) => {
    expandedPosts.value[postId] = !expandedPosts.value[postId]
  }
</script>

<style scoped>
  .posts-wrapper {
    @apply bg-secondary;
  }

  .dark .posts-wrapper, .dark .table-headers {
    @apply bg-darkBg;
  }
</style>
