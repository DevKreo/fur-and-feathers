// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "myCustomTheme",
    themes: {
      myCustomTheme: {
        dark: false,
        colors: {
          background: "#f0f0f0",
        },
      },
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
