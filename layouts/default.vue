<template>
  <v-layout>
    <v-navigation-drawer expand-on-hover rail permanent>
      <v-list>
        <v-list-item prepend-icon="mdi-snake" title="snakebase" subtitle="v0.0.1" />
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <nuxt-link to="/">
          <v-list-item prepend-icon="mdi-home" title="Dashboard" value="dashboard" />
        </nuxt-link>

        <v-divider />

        <nuxt-link to="/auth">
          <v-list-item prepend-icon="mdi-account-group" title="Auth" value="auth" />
        </nuxt-link>
        <nuxt-link to="/database">
          <v-list-item prepend-icon="mdi-database" title="Database" value="databases" />
        </nuxt-link>
        <nuxt-link to="/functions">
          <v-list-item prepend-icon="mdi-function" title="Functions" value="functions" />
        </nuxt-link>
        <nuxt-link to="/storage">
          <v-list-item prepend-icon="mdi-harddisk" title="Storage" value="storages" />
        </nuxt-link>

        <v-divider />

        <nuxt-link to="/api-docs">
          <v-list-item prepend-icon="mdi-file-document-multiple" title="API Docs" value="api-docs" />
        </nuxt-link>
        <nuxt-link to="/logs">
          <v-list-item prepend-icon="mdi-format-list-group" title="Logs" value="logs" />
        </nuxt-link>
        <nuxt-link to="/metrics">
          <v-list-item prepend-icon="mdi-chart-bar" title="Metrics" value="metrics" />
        </nuxt-link>

        <v-divider />

        <nuxt-link to="/settings">
          <v-list-item prepend-icon="mdi-cog" title="Settings" value="settings" />
        </nuxt-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar elevation="0">
      <v-spacer />
      <v-icon icon="mdi-snake" />
      <h1>snakebase</h1>
      <v-spacer />
    </v-app-bar>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-layout>
</template>


<script lang="ts" setup>

</script>

<style>
.v-app-bar h1 {
  color: #FFE873;
}

.v-app-bar .v-icon {
  color: #FFE873;
  margin: 0 0.5rem;
}

.v-list-item {
  color: #FFE873;
}

.v-list a {
  text-decoration: none;
}
</style>