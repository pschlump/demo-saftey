<template>
	<div class="login">
		<h1> Sign In </h1>
        <form @submit.prevent="handleSubmit">
			<div class="input-form">

				<div class="form-group">
					<div>Email</div>
					<div class="center">
						<input type="text" v-model="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && !email }" autocorrect="off" autocapitalize="none" />
					</div>
					<div class="center">
						<div v-show="submitted && !email" class="invalid-feedback">Email Address is required</div>
					</div>
				</div>

				<div class="form-group">
					<div>Password</div>
					<div class="center">
						<input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
					</div>
					<div class="center">
						<div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
					</div>
				</div>

			</div>
			<div class="center">
				<button @click="loginPt1()" class="btn btn-primary btn-two btn-std">
					Sign In Now 
				</button>
				<button @click="forgotten()" class="btn btn-primary btn-one btn-std">
					Forgotten Password 
				</button>
			</div>
		</form>
	</div>
</template>

<script>
/* eslint-disable no-console */

import { mapState, mapActions } from 'vuex'
// @ is an alias to /src
import { router } from '../router/index.js';

export default {
	name: 'LoginView'
    , data () {
        return {
            email: '',
            password: '',
            submitted: false,
        }
    }
    , created () {
        this.logout(); 
    }
    , computed: {
        ...mapState('account', ['status'])
    }
	, methods: {
        ...mapActions('account', ['login', 'logout'])
		, loginPt1 () {
		}
		, forgotten () {
			this.logout();
			router.push( '/recover-password/recover-password' );
		}
		, handleSubmit () {
			this.submitted = true;
			const { email, password } = this;
			if (email && password) {
				this.login({ email, password, "xsrf_id": window.xsrf_id })	
			}
		}
	}
}

</script>

<style scoped>
.login {
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
	background-color: #77bc3f;
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
