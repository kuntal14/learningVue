<template>
    <nav 
        :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']"
    >
        <div class="container-fluid">
        <a class="navbar-brand" href="#">My Vue</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <navbar-link 
                v-for="(page, index) in pages" class="nav-item" :key="index"
                :page="page"
                :index="index"
            ></navbar-link>

            <li>
                <router-link
                to="/pages/create"
                active-class="active emphasize"
                class="nav-link"
                aria-current="page"
                > Create Page </router-link>
            </li>
                
        </ul>
        <form class="d-flex">
            <button class="btn btn-primary"
            @click.prevent="changeTheme()"
            >Toggle navbar</button>
        </form>
        </div>
    </nav> 
</template>

<script>
import NavbarLink from './NavbarLink.vue';

export default{
    components: {
        NavbarLink
    },
    created(){
        this.getThemeSetting();

        this.pages = this.$pages.getAllPages();
    },
    
    data(){
        return{
            theme : 'light',
            data : []
        }
    },
    methods: {
        changeTheme(){
            if(this.theme == 'light'){
                this.theme = 'dark';
            }else{
                this.theme = 'light'
            }
            this.storeThemeSetting()
        },
        storeThemeSetting(){
            localStorage.setItem('theme', this.theme);
        },
        getThemeSetting(){
            let theme = localStorage.getItem('theme');

            if(theme){
                this.theme = theme;
            }
        },

    }
}
</script>

<style>
.emphasize{
  text-decoration: underline !important;
}
</style>