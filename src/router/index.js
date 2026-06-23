import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import BlogPostView from '../views/BlogPostView.vue'
import AboutView from '../views/AboutView.vue'
import RacesView from '../views/RacesView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/blog', name: 'blog', component: BlogView },
  { path: '/blog/:slug', name: 'blog-post', component: BlogPostView, props: true },
  { path: '/info', name: 'o-meni', component: AboutView },
  { path: '/podvigi', name: 'tekme', component: RacesView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
