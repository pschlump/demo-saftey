import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SendHelpView from '../views/SendHelpView.vue'
import HelpLocationsView from '../views/HelpLocationsView.vue'
import SponsorConnectView from '../views/SponsorConnectView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import AboutView from '../views/AboutView.vue'

//		<router-link to="/send-help">Send Help</router-link> |
//		<router-link to="/help-locations">Help Locaitons</router-link> |
//		<router-link to="/sponsor-connect">Sponsor Connect</router-link> |
//		<router-link to="/sign-in">Sign In</router-link>
//		<router-link to="/sign-up">Sign Up</router-link>

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/send-help',
		name: 'SendHelp',
		component: SendHelpView
	},
	{
		path: '/help-locations',
		name: 'HelpLocations',
		component: HelpLocationsView
	},
	{
		path: '/sponsor-connect',
		name: 'SponsorConnect',
		component: SponsorConnectView 
	},
	{
		path: '/sign-in',
		name: 'SignIn',
		component: SignInView
	},
	{
		path: '/sign-up',
		name: 'SignUp',
		component: SignUpView
	},
	{
		path: '/about',
		name: 'about',
		component: AboutView
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router;
