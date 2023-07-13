<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <v-footer class="text-center d-flex flex-column footer">
      <div class="footer_text">© DUGIMAIL. All rights reserved.</div>
      <div class="footer_text">
        If you have any questions please contact us sabrihakuli@outlook.com
      </div>
      <div class="flex-raw">
        <v-btn
          class="social_button px-4"
          v-for="(icon, i) in icons"
          :key="i"
          :icon="icon.name"
          variant="plain"
        >
          <v-icon class="social_icon" :color="icon.color"></v-icon>
        </v-btn>
      </div>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
  data: () => ({
    icons: [
      { name: "mdi-facebook", color: "#3B5998" },
      { name: "mdi-duck", color: "#EA4C89" },
      { name: "mdi-linkedin", color: "#007BB5" },
      { name: "mdi-instagram", color: "#C32AA3" },
      { name: "mdi-twitter", color: "#489DFF" },
    ],
    // eslint-disable-next-line prettier/prettier
  }),
};
</script>

<style lang="scss" scoped>
.footer {
  background: var(--light-gray, #f0f0f0);
  .footer_text {
    width: 552px;
    color: #525f7f;
    text-align: center;

    /* 12px */
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
  }
  .social_button {
    width: 18px;
    height: 18px;
    .social_icon {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
