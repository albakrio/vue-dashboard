
import { useQuery } from '@tanstack/vue-query'

const baseUrl = 'https://jsonplaceholder.typicode.com/posts'
const fiveMinutes = 5 * 60 * 1000

export async function fetchPosts() {
  const response = await fetch(baseUrl)
  
  if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`)

  return await response.json()

}

export async function fetchComments(postId) {
  const response = await fetch(`${baseUrl}/${postId}/comments`)
  
  if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`)
  return await response.json()
}

export function usePostsQuery() {
  return useQuery(['posts'], fetchPosts, {    
    staleTime: fiveMinutes,
    cacheTime: fiveMinutes,
    refetchOnWindowFocus: false, 
    refetchOnMount: false,       
    
  })
}

export function usePostCommentsQuery(postId) {  
  return useQuery(['postComments',postId], ()=> fetchComments(postId), {    
    staleTime: fiveMinutes,
    cacheTime: fiveMinutes,
    refetchOnWindowFocus: false, 
    refetchOnMount: false, 
    enabled: !!postId, // Fetch only if postId exists
  })
}
