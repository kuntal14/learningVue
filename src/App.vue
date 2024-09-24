<template>
  <navbar
  :pages = "publishedPages"
  :active-page = "activePage"
  :nav-link-click = "(index) => activePage = index"
  >
  </navbar>

  <page-viewer 
    :page = "publishedPages[activePage]"
  ></page-viewer>

  <create-page
    @page-created="pageCreated"
  ></create-page>

</template>

<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';

export default {
  components: {
    Navbar,
    PageViewer,
    CreatePage
  },
  created(){
    this.getPages();
  },
  computed:{
      publishedPages(){
          return this.pages.filter(p => p.published)
      }
  },
  data() {
    return {
      activePage: 0,
      pages: []
    };
  },
  methods: {
      async getPages() {
        let res = await fetch('pages.json');
        let data = await res.json();
        this.pages = data;
      },
      pageCreated(pageObj){
        this.pages.push(pageObj);
      }
  }
}
</script>

