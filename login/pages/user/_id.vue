<template>
  <v-card class="elevation-12" :loading="cardLoading">
    <v-toolbar color="primary">
      <v-toolbar-title>
        {{ user.login }}
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-container>
        <v-row class="pb-6" justify="space-around" align="center" fluid>
          <v-col cols="2" style="padding: 0">
            <v-avatar size="96">
              <img src="https://unsplash.it/100" alt="User's photo"/>
            </v-avatar>
          </v-col>
          <v-col cols="10">
            <div class="text-h5">{{ user.name }} {{ user.lastname }}</div>
            <div class="text-subtitle-1" v-text="user.email"></div>
          </v-col>
        </v-row>
        <v-row fluid>
          <div class="text-subtitle-1" v-text="user.description"></div>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: "user",
    data() {
      return {
        user: {},
        cardLoading: true,
      }
    },
    async mounted() {
      this.user = await this.$axios.$get('/user.json');
      this.cardLoading = true;
    },
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
  }
</script>

<style scoped>

</style>
