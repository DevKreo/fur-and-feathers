<template>
  <v-card flat>
    <v-toolbar
      :elevation="12"
      class="rounded-b-lg d-flex justify-space-between"
      prominent
      extended
    >
      <v-app-bar-nav-icon class="ma-2 pa-2"></v-app-bar-nav-icon>

      <v-text-field
        :loading="loading"
        density="compact"
        variant="solo"
        label="Поиск по сайту"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
        class="ma-2 pa-2"
      ></v-text-field>
      <v-menu class="ma-2 pa-2">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
        </template>
        <v-list :items="items"> </v-list>
      </v-menu>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    items: [
      {
        title: "Учетная запись",
        props: {
          prependIcon: "mdi-account",
        },
        value: 1,
      },
      {
        title: "Корзина",
        props: {
          prependIcon: "mdi-cart-outline",
        },
        value: 2,
      },
      {
        title: "Избранное",
        props: {
          prependIcon: "mdi-heart-outline",
        },
        value: 3,
      },
    ],
  }),
};
</script>
