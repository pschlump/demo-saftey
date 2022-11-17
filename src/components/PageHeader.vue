<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-blue">
		<div class="container">
			<a class="navbar-brand" href="/home"><img id="logo_img" alt="Safe Spaces Logo" src="../img/logo.jpg"></a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
				<ul v-if="!hide_menu" class="navbar-nav ms-auto">
					<li class="nav-item">
						<a class="nav-link" href="/home">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/about">About</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/sign-up">Sign Up</a>
					</li>
					<li v-if="isLoggedIn()" class="nav-item">
						<a class="nav-link" href="/config">Config</a>
					</li>
					<li v-if="!isLoggedIn()" class="nav-item">
						<a class="nav-link" href="/login">Sign In</a>
					</li>
					<li v-if="isLoggedIn()" class="nav-item">
						<a class="nav-link" href="/logout">Logout</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'PageHeader'
    , data () {
        return {
            hide_menu: false
        }
    }
	, methods: {
		...mapGetters('account', ['isLoggedIn'] )
    }
}
</script>

<style scoped>
#logo_img {
	width: 63px;
	height: 63px;
}

nav {
	background-color: black;
}

nav a {
	font-weight: bold;
	color: white;
}
</style>
