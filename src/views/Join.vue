<template>
    <v-container fill-height>
		<v-layout column justify-center>

        	<v-layout shrink align-center justify-center mb-4>
        	    <v-flex xs12 sm8 md4>
        	        <v-card class="elevation-12">
        	            <v-toolbar dark color="primary">
        	                <v-toolbar-title>Join Form</v-toolbar-title>
        	            </v-toolbar>
        	            <v-card-text>
        	                <v-form ref="form" v-model="valid" lazy-validation>
        	                    <v-text-field prepend-icon="person" name="email" label="Email" 	type="email"
        	                                  v-model="email" :rules="emailRules" required>
        	                    </v-text-field>
        	                    <v-text-field prepend-icon="lock" name="password" 	label="Password" id="password" type="password" required v-model="password" 	:rules="passwordRules">
        	                    </v-text-field>
        	                </v-form>
        	            </v-card-text>
        	            <v-card-actions>
        	                <v-spacer></v-spacer>
        	                <v-btn color="primary" :disabled="!valid" @click="submit">Join</v-btn>
        	            </v-card-actions>
        	        </v-card>
        	    </v-flex>
        	</v-layout>

			<v-layout shrink justify-center>
				<v-flex xs12 sm8 md4 subheading>
					If you already have an account <router-link to="/sign-in">click here</router-link>
        	    </v-flex>
			</v-layout>

		</v-layout>
    </v-container>
</template>
<script>
export default {
	name: 'Join',
	data() {
		return {
			valid: false,
        	email: '',
        	password: '',
        	emailRules: [
        	    v => !!v || 'E-mail is required',
        	    v => /.+@.+/.test(v) || 'E-mail must be valid'
        	],
        	passwordRules: [
        	    v => !!v || 'Password is required',
        	    v =>
        	        v.length >= 6 ||
        	        'Password must be greater than 6 characters'
        	]
		}
	},
	methods: {
		submit() {
        	if (this.$refs.form.validate()) {
        	    this.$store.dispatch('userJoin', {
        	        email: this.email,
        	        password: this.password
        	    });
        	}
    	}
	}
};
</script>
<style scoped>
</style>