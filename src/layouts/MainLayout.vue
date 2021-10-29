<template>
  <q-layout view="lHh Lpr lFf" class="fixed fit scroll">
    <q-header class="hd-blue" bordered >
      <q-toolbar>
        <q-btn flat dense round @click="toggleLeftDrawer" icon="menu" aria-label="Menu" />
        <q-toolbar-title>
          Demo Admin
        </q-toolbar-title>
        <q-space/>
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="~/assets/images/boy-avatar.png">
            </q-avatar>
            <q-tooltip class="bg-accent" >User Profile</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="black" :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
                 @click="$q.fullscreen.toggle()" v-if="$q.screen.gt.sm">
            <q-tooltip class="bg-accent">Maximize</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="black" icon="logout"
                 @click="$q.fullscreen.toggle()">
            <q-tooltip class="bg-accent">Logout</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="250">
      <q-scroll-area dark class="fit menu-blue">
        <q-item to="/Dashboard" :active="link === 'Dashboard'" @click="link = 'Dashboard'" active-class="menu-link">
          <q-item-section avatar class="menu-dt-avatar">
            <q-icon name="dashboard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Dashboard2" :active="link === 'Dashboard2'" @click="link = 'Dashboard2'" active-class="menu-link">
          <q-item-section avatar class="menu-dt-avatar">
            <q-icon name="dashboard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>CRM Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item icon="person" label="User" default-opened>
          <q-list class="menu-dt-blue">
            <q-item class="menu-dt-item" to="/UserList" :active="link === 'UserList'" @click="link = 'UserList'" active-class="menu-link">
              <q-item-section avatar class="menu-dt-avatar">
                <q-icon name="list"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>User List</q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="menu-dt-item"  to="/UserSignup" :active="link === 'UserSignup'" @click="link = 'UserSignup'" active-class="menu-link">
              <q-item-section avatar class="menu-dt-avatar">
                <q-icon name="manage_accounts"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>User Signup</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-grey-2 fit scroll">
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
      link: ref('Dashboard')
    }
  }
})
</script>
<style>

/* header */
.hd-blue {
  background-color: #FFFFFF; color: #929292
}

/* left sidebar (=left menu) */
.menu-blue {
  background-color: #0C2135; color: #A0A8AF
}
.menu-blue .menu-dt-blue {
  background-color: #133556;
}
.menu-link {
  background: #0960BD; color: #F0FFFB;
}
.menu-dt-item {
  padding-left: 40px;
}
.menu-dt-avatar {
  min-width: 30px; width: 30px;
}

.q-expansion-item .q-item__section--avatar {
  min-width: 30px; width: 30px;
}
</style>
