<template>
	<div class="home">
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
console.log ( "v3", router );
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
</style>
