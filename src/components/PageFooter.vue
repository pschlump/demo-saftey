<template>
	<footer class="page-footer font-small blue pt-4">

		<div class="container-fluid text-md-left">
			<img class="small-top-left" src="../img/logo.jpg">

			<div class="row">

				<hr class="clearfix w-100 d-md-none pb-3 top-hr">

				<div class="col-md-3 mb-md-0 mb-3">

					Col1
				</div>

				<div class="col-md-3 mb-md-0 mb-3">

					Col2

				</div>

			</div>

		</div>
		
		<div class="footer-copyright text-center py-3">© 2020 Copyright: <a href="/"> www.safe-space.com </a> </div>

	</footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'PageFooter'
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
.small-top-left {
	position: absolute;
	bottom: 74px;
	left: 10px;
	height: 15px;
}
.top-hr {
	margin-top: 0px;
	padding-top: 0px;
}
.footer-copyright {
	font-size: 10px;
}
.page-footer {
	height: 120px;
	max-height: 120px;
	position: absolute;
	bottom: 0px;
	width: 100vw;
}
</style>
