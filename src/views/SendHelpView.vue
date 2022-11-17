<template>
	<div class="send-help">
		<PageHeader />
		<div class="top">&nbsp;</div>

		<!--
		<h1> Locations </h1>
		<div class="center">
			<router-link to="/send-help">Send Help</router-link> 
		</div>
		<div class="center">
			<router-link to="/help-locations">Help Locaitons</router-link> 
		</div>
		<div class="center">
			<router-link to="/sponsor-connect">Sponsor Connect</router-link> 
		</div>
		-->
		<h2> Help Button </h2>
		<div class="center">
			<button @click="sendHelp()" class="btn btn-primary btn-two btn-std btn-red">
				Send Police
			</button>
		</div>
		<div class="between">&nbsp;</div>
		<h1> Include Help! </h1>
		<div class="center">
			<select class="x-form-control help-type" v-model="help_type_st" name="help_type_st" @change="changeHelpType($event)">
				<option value="" disabled> </option>
				<option value="FIRE">Fire</option>
				<option value="AMBULANCE">Ambulance</option>
			</select> 
		</div>
		<div class="center">
			<button @click="otherHelp()" class="btn btn-primary btn-one btn-std btn-green">
				Help Type
			</button>
		</div>
		<h1> Count Down... </h1>
		<PageFooter />
	</div>
</template>

<script>
/* eslint-disable no-console */

// import LogoSmall from '@/components/LogoSmall.vue'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import { mapActions } from 'vuex'
// @ is an alias to /src
// import { router } from '../router/index.js';
import { router } from '@/router/index.js';

export default {
	name: 'HomeView'
    , data () {
        return {
            placeholder: ''
			, help_type_st: ''
        }
    }
    , created () {
		console.log ( "Locations.v1", router );
    }
	, components: {
		// LogoSmall
		PageHeader
		, PageFooter
	}
    , computed: {
    }
	, methods: {
        ...mapActions('account', ['login', 'logout'])
		, sendHelp () {
			// this.$router.push({ name: 'SignIn'});
		}
		, helpLocaitons () {
			// this.$router.push({ name: 'SignUp'});
		}
		, otherHelp () {
		}
		, changeHelpType () {
		}
		, handleSubmit () {
		}
	}
}

</script>

<style scoped>
.send-help-box {
	border: 1px solid black;
	height: 80px;
	width: 98%;
}
.send-help {
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
.help-type {
	min-width: 200px;
	font-weight: 700;
	font-size: 18px;
	margin-bottom: 10px;
}
.btn-next {
	x-position: absolute;
	x-bottom: 20px;
	align-items: center;
}
.btn-std {
	min-width: 200px;
	font-weight: 700;
	font-size: 18px;
	background-color: #77bc3f;
}
.btn-red {
	background-color: #f377bc;
	x-background-color: #bc3f77;
}
.btn-red {
	height: 100px;
	width: 80vw;
	max-width: 300px;
}
.btn-green {
	height: 100px;
	width: 80vw;
	max-width: 300px;
}
.btn-one {
	x-position: absolute;
	x-bottom: 20px;
	align-items: center;
}
.btn-two {
	x-position: absolute;
	x-bottom: 80px;
	align-items: center;
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
