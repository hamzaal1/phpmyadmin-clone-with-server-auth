<script setup>
import { ref } from 'vue'
import axios from '@/utils/axios'
import { useRouter } from 'vue-router'
import { useMySQLConnectionStore } from '@/stores/mysqlConnection'
import { useDatabasesStore } from '@/stores/databases'

const mysqlStore = useMySQLConnectionStore()
const databasesStore = useDatabasesStore()

const router = useRouter()
const host = ref('')
const username = ref('')
const password = ref('')
const errorText = ref('')
const handleMySQLConnection = async () => {
  try {
    const res = await axios.post('/databases', {
      host: host.value,
      username: username.value,
      password: password.value
    })
    if (res.data?.databases) {
      mysqlStore.saveConnection({
        host,
        username,
        password
      })
      databasesStore.saveDatabases(res.data.databases)
      router.push({ name: 'databases' })
    }
  } catch (error) {
    errorText.value = 'Failed to establish Mysql connection'
  }
}
</script>

<template>
  <div id="page-container">
    <!-- Main Container -->
    <main id="main-container">
      <!-- Page Content -->
      <div class="hero-static d-flex align-items-center">
        <div class="content">
          <div class="row justify-content-center push">
            <div class="col-md-8 col-lg-6 col-xl-4">
              <!-- Sign In Block -->
              <div class="block block-rounded mb-0">
                <div class="block-header block-header-default">
                  <h3 class="block-title">Sign In</h3>
                </div>
                <div class="block-content">
                  <div class="p-sm-3 px-lg-4 px-xxl-5 py-lg-5">
                    <h1 class="h2 mb-1">PhpMyAdmin Clone</h1>
                    <p class="fw-medium text-muted">Welcome, please login.</p>
                    <form
                      class="js-validation-signin"
                      v-on:submit.prevent="handleMySQLConnection"
                      method="POST"
                    >
                      <div class="py-3">
                        <div class="mb-4">
                          <input
                            type="text"
                            v-model="host"
                            class="form-control form-control-alt form-control-lg"
                            id="login-ip"
                            name="login-ip"
                            placeholder="Host"
                          />
                        </div>
                        <div class="mb-4">
                          <input
                            type="text"
                            v-model="username"
                            class="form-control form-control-alt form-control-lg"
                            id="login-username"
                            name="login-username"
                            placeholder="Username"
                          />
                        </div>
                        <div class="mb-4">
                          <input
                            type="password"
                            v-model="password"
                            class="form-control form-control-alt form-control-lg"
                            id="login-password"
                            name="login-password"
                            placeholder="Password"
                          />
                        </div>
                        <p v-if="errorText !== ''" class="text-danger">{{ errorText }}</p>
                        <div class="mb-4">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="login-remember"
                              name="login-remember"
                            />
                            <label class="form-check-label" for="login-remember">Remember Me</label>
                          </div>
                        </div>
                      </div>
                      <div class="row mb-4">
                        <div class="col-md-6 col-xl-5">
                          <button type="submit" class="btn w-100 btn-alt-primary">
                            <i class="fa fa-fw fa-sign-in-alt me-1 opacity-50"></i> Sign In
                          </button>
                        </div>
                      </div>
                    </form>
                    <!-- END Sign In Form -->
                  </div>
                </div>
              </div>
              <!-- END Sign In Block -->
            </div>
          </div>
          <div class="fs-sm text-muted text-center">
            <strong>TechStylitix Clones</strong> &copy; <span data-toggle="year-copy"></span>
          </div>
        </div>
      </div>
      <!-- END Page Content -->
    </main>
    <!-- END Main Container -->
  </div>
</template>
