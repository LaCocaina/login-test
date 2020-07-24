<template>
        <v-card class="elevation-12" :loading="cardLoading">
          <v-toolbar :class="error && 'error'" color="primary" dark flat>
            <v-toolbar-title>{{ error || 'Форма логина' }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
                <v-text-field
                  label="Никнейм"
                  name="nickname"
                  prepend-icon="mdi-account"
                  v-model.trim="$v.login.$model"
                  :error-messages="$v.login.$dirty && !$v.login.required ? ['Логин необходим'] : []"
                  type="text" />
                <v-text-field
                  label="Пароль"
                  name="password"
                  prepend-icon="mdi-lock"
                  v-model.trim="$v.password.$model"
                  :error-messages="$v.password.$dirty && !$v.password.required ? ['Пароль необходим'] : []"
                  type="password" />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" :class="error && 'error'" @click="send">Войти</v-btn>
          </v-card-actions>
        </v-card>
</template>

<script>
    import { required, minLength } from 'vuelidate/lib/validators';

    export default {
        name: "LoginForm",
        data() {
          return {
            login: '',
            password: '',
            error: '',
            cardLoading: false,
          }
        },
        methods: {
          async send() {
              this.cardLoading = true;

              let user = await this.$axios.$get("/user.json");
                  if (this.login === user.login && this.password === user.password) {
                    await this.$router.push({
                      path: '/user/1'
                    });
                  } else this.customError("Неверный логин или пароль");
                setTimeout(()=> this.cardLoading = false, 1000);
          },
          customError(v) {
            this.error = v;
          }
        },
        validations: {
          login: {
            required,
          },
          password: {
            required,
          }
        }
    }
</script>

<style scoped>

</style>
