<template>
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + itemId" aria-expanded="false" :aria-controls="'collapse' + itemId">
        {{ title }}
      </button>
    </h2>
    <div :id="'collapse' + itemId" class="accordion-collapse collapse" :aria-labelledby="'heading' + itemId" :data-bs-parent="'#' + accordId">
      <div class="accordion-body">
        {{ bodyText }}
      </div>
    </div>
</template>

<script>
export default {
  name: "AccordionItem",
  props: {
    title: String,
    bodyText: String,
    itemId: Number,
    accordId: String
  }
}
</script>

<style scoped>

</style>