<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="profile.svg">
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Log in
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
              <q-input ref="useridRef" color="teal" outlined rounded v-model="userid"
                       label="userid" lazy-rules :rules="useridRules">
                <template v-slot:prepend>
                  <q-icon name="face"/>
                </template>
              </q-input>

              <q-input ref="passwordRef" color="teal" outlined rounded v-model="password" label="Password"
                       type="password" lazy-rules :rules="passwordRules">
                <template v-slot:prepend>
                  <q-icon name="lock"/>
                </template>
              </q-input>

              <div class="q-pa-md q-gutter-sm" style="text-align: center">
                <q-btn label="Login" type="submit" color="primary" rounded style="width: 150px"/>
                <q-btn label="Reset" type="reset" color="primary" rounded outline style="width: 150px" />
              </div>
            </form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>

    <q-dialog v-model="alert" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-red text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">ERROR!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Login Fail..
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-red">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-layout>


</template>

<script>
import axios from "axios";
import {ref} from 'vue'
import {useRouter} from 'vue-router'

export default {
  name: "Login",
  methods: {
    goMain() {
      alert("??");
      this.$router.push({ name: 'main'});
    }
  },
  setup(props, { root }) {
    const userid = ref(null);
    const useridRef = ref(null);
    const password = ref(null);
    const passwordRef = ref(null);
    const alert = ref(null);
    const route = useRouter();


    return {
      userid,
      useridRef,
      useridRules: [
        val => (val && val.length > 0) || 'userid is required!'
      ],

      password,
      passwordRef,
      passwordRules: [
        val => (val && val.length > 0) || 'password is required!'
      ],

      alert,

      onSubmit() {
        useridRef.value.validate()
        passwordRef.value.validate()

        if (useridRef.value.hasError || passwordRef.value.hasError) {
          // form has error
          return false;
        } else {
          axios.post('/api/authenticate', {userid: userid.value, password: password.value})
          .then((res) => {
            console.log("SUC : ", res);
            route.push("/");
          })
          .catch((error) => {
            alert.value = true;
            console.error("ERR : ", error);
          });
        }
      },

      onReset() {
        userid.value = null;
        password.value = null;

        useridRef.value.resetValidation();
        passwordRef.value.resetValidation();
      }
    }
  }
}
</script>

<style>
.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
</style>
