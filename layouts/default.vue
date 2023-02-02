<template>
  <v-layout>
    <v-navigation-drawer expand-on-hover rail permanent>
      <v-list>
        <v-list-item prepend-icon="mdi-snake" title="snakebase" subtitle="v0.0.1">
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home" title="Dashboard" value="dashboard"></v-list-item>
        <v-divider />
        <v-list-item prepend-icon="mdi-account-group" title="Authentication" value="authentications"></v-list-item>
        <v-list-item prepend-icon="mdi-database" title="Database" value="databases"></v-list-item>
        <v-list-item prepend-icon="mdi-function" title="Functions" value="functions"></v-list-item>
        <v-list-item prepend-icon="mdi-harddisk" title="Storage" value="storages"></v-list-item>
        <v-divider />
        <v-list-item prepend-icon="mdi-chart-bar" title="Metrics" value="metrics"></v-list-item>
        <v-list-item prepend-icon="mdi-format-list-group" title="Logs" value="logs"></v-list-item>
        <v-divider />
        <v-list-item prepend-icon="mdi-cog" title="Settings" value="settings"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar elevation="0">
      <v-spacer />
      <v-icon icon="mdi-snake"/>
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


<script lang="ts" start>

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
</style>