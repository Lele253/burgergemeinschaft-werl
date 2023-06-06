<template>
  <div>
    <div>
      <HeaderComponent/>
    </div>

    <div class="background"/>
  </div>


</template>

<script>

import HeaderComponent from "@/components/HeaderComponent";

export default ({
  name: 'HomeView',

  components: {
    HeaderComponent
  },
});
</script>

<style>

.background {
  width: 100vw;
  height: 89vh;
  background-image: url('/Users/lgraf/Library/CloudStorage/OneDrive-QuinScapeGmbH/PHPStorm/burgergemeinschaft-werl/src/assets/werl.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

}
</style>
