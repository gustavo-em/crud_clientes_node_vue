<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
  }),
};
</script>