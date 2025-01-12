import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkMode', {
  state: () => ({
    isDarkMode: localStorage.getItem('darkMode') === 'true' || false,
  }),
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode

      // reflect change immediately
      document.documentElement.classList.toggle('dark', this.isDarkMode)
      
      //async update to localStorage in the background
      setTimeout(() => {
        localStorage.setItem('darkMode', this.isDarkMode)
      }, 0)
    
    },
  }
})
