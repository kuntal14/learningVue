<template>
    <li>
        <router-link
            :to="`/${index}`"
            class="nav-link"
            active-class="active emphasize"
            aria-current="page"

            :title="`this link goes to the ${page.link.text} page`"
        >{{ page.link.text }}</router-link>
    </li>
</template>

<script>
export default { 
    props: ['page', 'index'],
    computed: {
        activeClasses(){
            return{
                active: this.isActive,
                emphasize: this.isActive
            };
        }
        
    }
}
</script>

<style>
.emphasize{
  text-decoration: underline !important;
}
</style>