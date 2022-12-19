<template>
    <div class="footer p-4">
        <span>Copyright &copy{{date}}</span>  
    </div>
</template>

<script>
    export default{
        data(){
            return{
                date: new Date().getFullYear()
            }
        }
    }

</script>

<style scoped>
.footer{
  text-align: center;
  font-weight: 400;
  font-style: italic;
}
</style>