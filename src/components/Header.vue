<!-- eslint-disable prettier/prettier -->
<template>
  <div class="head">
    <v-sheet
      class="logo_container d-flex flex-column mx-auto px-6"
      :height="80"
      :width="600"
    >
      <v-img src="../assets/Group_1.png" :height="42" :width="50" class="mx-auto"></v-img>
      <v-divider :thickness="1" class="head_divider"></v-divider>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
<style lang="scss" scoped>
.logo_container {
  padding-top: 19px;
  background: var(--light-gray, #f0f0f0);
}
.head_divider {
  background: var(--super-light-gray, #f3f3f3);
}
</style>
