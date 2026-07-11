export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === '/admin/login') return

  const { loggedIn, fetch } = useUserSession()
  if (!loggedIn.value) {
    await fetch()
  }
  if (!loggedIn.value) {
    return navigateTo('/admin/login')
  }
})
