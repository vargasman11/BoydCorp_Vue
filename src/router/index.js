import {createRouter, createWebHistory} from 'vue-router'

// import Views
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue";
// About Directory
import AboutMillionMilers from "../views/about/AboutMillionMilers.vue";
import AboutMission from "../views/about/AboutMission.vue";
import AboutNewsletter from "../views/about/AboutNewsletter.vue";
import AboutUs from "../views/about/AboutUs.vue";
// Contact Us Directory
import ContactUs from "../views/contact-us/ContactUs.vue";
// Customer Service Directory
import RequestQuote from "../views/customer-service/RequestQuote.vue";
// Driver Service Directory
import DriverServiceFAQ from "../views/driver-service/DriverServiceFAQ.vue";
import DriverServiceMcleod from "../views/driver-service/DriverServiceMcleod.vue";
import DriverServicePrograms from "../views/driver-service/DriverServicePrograms.vue";
import DriverServiceSafety from "../views/driver-service/DriverServiceSafety.vue";
// Employee Services Directory
import EmployeeServicesBenefits from "../views/employee-services/EmployeeServicesBenefits.vue";
// Employment Directory
import EmploymentNonDriverOpportunities from "../views/employment/employmentNonDriverOpportunities.vue";
// Support Directory
import CorporateChaplain from "../views/support/CorporateChaplain.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        // ABOUT US TAB
        {
            path: '/mission-statement',
            name: 'mission-statement',
            component: AboutMission
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs
        },
        {
            path: '/newsletter',
            name: 'newsletter',
            component: AboutNewsletter
        },
        {
            path: '/million-milers',
            name: 'million-milers',
            component: AboutMillionMilers
        },
        // CUSTOMER SERVICE TAB
        {
            path: '/request-quote',
            name: 'request-quote',
            component: RequestQuote
        },
        // DRIVER SERVICE TAB
        {
            path: '/faq',
            name: 'faq',
            component: DriverServiceFAQ
        },
        {
            path: '/safety',
            name: 'safety',
            component: DriverServiceSafety
        },
        {
            path: '/mcleod-mobile-app',
            name: 'mcleod-mobile-app',
            component: DriverServiceMcleod
        },
        {
            path: '/driver-programs',
            name: 'driver-programs',
            component: DriverServicePrograms
        },
        //EMPLOYEE SERVICES TAB
        {
            path: '/employee-benefits',
            name: 'employee-benefits',
            component: EmployeeServicesBenefits
        },
        //EMPLOYMENT
        {
            path: '/non-driver-opportunities',
            name: 'non-driver-opportunities',
            component: EmploymentNonDriverOpportunities
        },
        //CONTACT US TAB
        {
            path: '/contact-us',
            name: 'contact-us',
            component: ContactUs
        },
        //SUPPORT TAB
        {
            path: '/support',
            name: 'support',
            component: CorporateChaplain
        },
    ]
})

export default router
