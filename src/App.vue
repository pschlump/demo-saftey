<template>
	<!--
	<img src="img/logo.svg" class="logo-main-page">
	<h1> Safe Space </h1>
	-->
	<Logo />
	<!--
	<nav>
		<router-link to="/send-help">Send Help</router-link> |
		<router-link to="/help-locations">Help Locaitons</router-link> |
		<router-link to="/sponsor-connect">Sponsor Connect</router-link> 
	</nav>
	-->
	<div class="top">&nbsp;</div>
	<div class="center">
		<router-link to="/send-help">Send Help</router-link> 
	</div>
	<div class="center">
		<router-link to="/help-locations">Help Locaitons</router-link> 
	</div>
	<div class="center">
		<router-link to="/sponsor-connect">Sponsor Connect</router-link> 
	</div>
	<router-view/>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
	name: 'app'
	, components: {
		Logo
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}

.logo-main-page {
	height: 150px;
}

div a.router-link-exact-active {
	color: #42b983;
}

.top {
	padding-top: 25px;
}

div a {
	padding: 15px;
	text-decoration: none;
	font-weight: bold;
	color: #2c3e50;
	font-size: 18px;
}
.center {
	display: flex;
	justify-content: center;
	align-items: center;
}
div a:link {
    x-text-decoration: underline;
}
div a:hover {
	text-decoration: none;
}

</style>
