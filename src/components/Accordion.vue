<template>
<div :id="id" class="accordion">
  <div v-for="(item, index) in items" class="accordion-item">
    <AccordionItem :accordId="id" :itemId="index" :title="item.title" :body-text="item.bodyText"></AccordionItem>
  </div>
</div>
</template>

<script>
import AccordionItem from "./AccordionItem.vue";

export default {
  name: "Accordion",
  components: {AccordionItem},
  props: {
    id: String,
    items: Array
  }
}
</script>

<style scoped>

</style>