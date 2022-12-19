<template>
  <div class="container vh-100 d-flex flex-column justify-content-between">
    <app-header></app-header>
    <Accordion id="Accord1" :items="items"></Accordion>
    <app-footer></app-footer>
  </div>

</template>

<script>
import Accordion from "./components/Accordion.vue";
  export default{
    components: {Accordion},
    data() {
      return{
        items: [
          {
            title: 'Title 1',
            bodyText: 'This is body 1'
          },
          {
            title: 'Title 2',
            bodyText: 'This is body 2'
          },
          {
            title: 'Title 3',
            bodyText: 'This is body 3'
          },
        ]
      }
    },
}
</script>

<style>
.container{
  font-family: 'Roboto';
  font-weight: 100;
}
</style>