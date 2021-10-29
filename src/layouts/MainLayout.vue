<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="hd-blue">
      <q-toolbar>
        <q-btn flat dense round @click="toggleLeftDrawer" icon="menu" aria-label="Menu" />
        <q-toolbar-title>
          Demo Admin
        </q-toolbar-title>
        <q-space/>
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="black" :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
                 @click="$q.fullscreen.toggle()" v-if="$q.screen.gt.sm">
          </q-btn>
        <!-- notifications area
          <q-btn round dense flat color="blue" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              5
            </q-badge>
            <q-menu>
              <q-list style="min-width: 100px">
                <messages></messages>
                <q-card class="text-center no-shadow no-border">
                  <q-btn label="View All" style="max-width: 120px !important;" flat dense class="text-indigo-8"></q-btn>
                </q-card>
              </q-list>
            </q-menu>
          </q-btn>-->
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="~/assets/images/boy-avatar.png">
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-scroll-area dark class="fit menu-blue">
        <q-item to="/Dashboard" clickable :active="link === 'Dashboard'" @click="link = 'Dashboard'" active-class="menu-link">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Dashboard2" clickable :active="link === 'Dashboard2'" @click="link = 'Dashboard2'" active-class="menu-link">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>CRM Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item icon="person" label="User">
          <q-list class="q-pl-lg menu-dt-blue">
            <q-item to="/UserList" clickable :active="link === 'UserList'" @click="link = 'UserList'" active-class="menu-link">
              <q-item-section avatar>
                <q-icon name="list"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>User List</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup ({root}) {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      moveMenu () {
        alert("??");
      },
      link: ref('Dashboard')
    }
  }
})
</script>
