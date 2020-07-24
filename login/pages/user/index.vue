<template>
    <v-card class="elevation-12" :loading="cardLoading">
      <v-toolbar>
        <v-toolbar-title>
          {{ user.login }}
        </v-toolbar-title>
      </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        name: "user",
        async data() {
          let data = await this.$axios.$get('/user.json');
          return {
            user: data,
            cardLoading: false,
          }
        }
    }
</script>

<style scoped>

</style>
