<template>
  <div class="min-vh-100 d-flex justify-content-center align-items-center">
    <b-card
      title="Login into HRS"
      style="width:17rem;"
      class="shadow shadow-sm"
    >
      <b-form @submit="login">
        <b-alert
          :show="alertData.show"
          :variant="alertData.alertType"
          style="font-size:.8rem;"
          class="pl-2 my-1"
        >
          {{ alertData.text }}
        </b-alert>
        <b-form-group
          id="input-group-1"
          label="Username"
          label-for="input-1"
          style="font-size:.8rem;font-weight:bold"
          class="mb-3 mt-4"
        >
          <b-form-input
            id="input-1"
            type="email"
            placeholder="Username"
            v-model="formData.username"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Password"
          label-for="input-1"
          style="font-size:.8rem;font-weight:bold"
          class="mb-4"
        >
          <b-form-input
            id="input-1"
            type="password"
            placeholder="Password"
            v-model="formData.password"
            required
          ></b-form-input>
        </b-form-group>
        <b-button
          type="submit"
          variant="primary"
          block
          class="mb-2"
          :disabled="btn.disabled"
        >
          {{ btn.text }}
        </b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btn: {
        text: "Login",
        disabled: false
      },
      formData: {
        username: "",
        password: ""
      },
      alertData: {
        show: false,
        text: "",
        alertType: ""
      }
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();

      this.btn.text = "Login in...";
      this.btn.disabled = true;

      const result = await this.$store.dispatch("AUTH", { ...this.formData });

      this.alertData.text = result.message;
      this.alertData.alertType =
        result.access === "success" ? "success" : "danger";
      this.alertData.show = true;

      this.btn.text = "Login";
      this.btn.disabled = false;
    }
  }
};
</script>

<style></style>
