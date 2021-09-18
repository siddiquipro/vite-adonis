<template>
	<div>
		<nav class="navbar is-light" role="navigation" aria-label="main navigation">
			<div class="container is-fullhd">
				<div class="navbar-brand">
					<a class="navbar-item" href="/">
						<div class="is-size-4 has-text-weight-bold has-text-info">MAS</div>
					</a>

					<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div id="navbarBasicExample" class="navbar-menu">
					<div class="navbar-end">
						<router-link to="/" class="navbar-item"> Home </router-link>
						<router-link to="/about" class="navbar-item"> About </router-link>
						<router-link to="/abcd" class="navbar-item"> 404 </router-link>

						<div class="navbar-item">
							<div class="buttons">
								<a class="button is-primary" @click="modal = true"> Login </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
		<div class="p-2">
			<div class="container is-fullhd">
				<router-view></router-view>
			</div>
		</div>

		<b-modal v-model="modal" has-modal-card trap-focus>
			<div class="modal-card" style="width: 450px;">
				<header class="modal-card-head">
					<p class="modal-card-title">Login</p>
				</header>
				<section class="modal-card-body">
					<b-field label="Email">
						<b-input type="email" v-model="auth.email" placeholder="Your email" required> </b-input>
					</b-field>
					<b-field label="Password">
						<b-input type="password" v-model="auth.password" password-reveal placeholder="Your password" required> </b-input>
					</b-field>
					<pre> {{ auth }} </pre>
				</section>
				<footer class="modal-card-foot">
					<b-button label="Close" @click="modal = false" />
					<b-button label="Login" @click="modal = false" type="is-primary" />
				</footer>
			</div>
		</b-modal>
	</div>
</template>

<script>
export default {
	data() {
		return {
			modal: false,
			auth: {},
		};
	},
};
</script>

<style lang="scss" scoped></style>
