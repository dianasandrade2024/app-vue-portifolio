import { createMemoryHistory, createRouter } from 'vue-router'

import PortifolioCard from './components/PortifolioCard.vue'
import ContactForm from './components/ContactForm.vue'
import About from './components/About.vue'
import IndexUser from './components/IndexUser.vue'
import IndexContact from './components/IndexContact.vue'
import EducationCard from './components/EducationCard.vue'
import ProjectsCard from './components/ProjectsCard.vue'


const routes = [
  
  { path: '/', 
    component: PortifolioCard
  },

  { path: '/mycontact', 
    component: ContactForm
  },

  { path: '/about', 
    component: About
  },
  
  { path: '/indexuser',
     component: IndexUser
    },
  { path: '/indexcontact',
     component: IndexContact
  },
  {
    path:'/myeducation',
    component: EducationCard
  },
  {
    path:'/myprojects',
    component: ProjectsCard
  },
  
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router


