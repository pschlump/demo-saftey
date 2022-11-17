<template>
	<div class="home">
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
		<!--
			<img alt="Vue logo" src="../assets/logo.png">
			<HelloWorld msg="Welcome to Your Vue.js App"/>
		-->
		<div class="center">
			<button @click="signIn()" class="btn btn-primary btn-two btn-std">
				Sign In 
			</button>
			<button @click="signUp()" class="btn btn-primary btn-one btn-std">
				Sign Up
			</button>
		</div>
	</div>
</template>

<script>
/* eslint-disable no-console */

//		<router-link to="/sign-in">Sign In</router-link> |
//		<router-link to="/sign-up">Sign Up</router-link>

// import { mapState, mapActions } from 'vuex'
import Logo from '@/components/Logo.vue'
import { mapActions } from 'vuex'
// @ is an alias to /src
// import { router } from '../router/index.js';
import { router } from '@/router/index.js';

export default {
	name: 'HomeView'
    , data () {
        return {
            placeholder: ''
        }
    }
    , created () {
console.log ( "v4", router );
    }
	, components: {
		Logo
	}
    , computed: {
    }
	, methods: {
        ...mapActions('account', ['login', 'logout'])
		, signIn () {
			this.$router.push({ name: 'SignIn'});
		}
		, signUp () {
			this.$router.push({ name: 'SignUp'});
		}
		, handleSubmit () {
		}
	}
}

</script>

<style scoped>
.home {
	height: 100vh;
}
.input-form input {
	width: 90vw;
	background-color: #ccc;
	max-width: 450px;
}
.center {
	display: flex;
	justify-content: center;
	align-items: center;
}
.btn-next {
	position: absolute;
	bottom: 20px;
	align-items: center;
}
.btn-std {
	min-width: 200px;
	font-weight: 700;
	font-size: 18px;
	background-color: white;
}
.btn-one {
	position: absolute;
	bottom: 20px;
	align-items: center;
}
.btn-two {
	position: absolute;
	bottom: 80px;
	align-items: center;
}

nav {
	padding: 20px;
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
	padding-top: 15px;
}

div a {
	padding: 10px;
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
