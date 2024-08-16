import { defineStore } from 'pinia'
import { ref } from 'vue'

interface UserState {
  isLoggedIn: boolean,
  username: string
}


export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false)
  const username = ref()

  function login(user: string) {
    isLoggedIn.value = true
    username.value = user
    localStorage.setItem('authToken','token')
    localStorage.setItem('username', user)
  }

  // logout

  // check login status

  return { isLoggedIn, username, login}
})