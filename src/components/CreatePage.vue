<template>
  <form action="" class="container mb-3">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label for="" class="form-label">Page Title</label>
          <input type="text" class="form-control" v-model="pageTitle"/>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Content</label>
          <textarea type="text" class="form-control" rows="5" v-model="content"></textarea>
        </div>
    </div>
    <div class="col">
    <div class="mb-3">
        <label for="" class="form-label">Link Text</label>
        <input type="text" class="form-control" v-model="linkText" />
    </div>
    <div class="mb-3">
        <label for="" class="form-label" >Link URL</label>
        <input type="text" class="form-control" v-model="linkUrl" />
    </div>
    <div class="row mb-3">
        <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="published" >
        <label class="form-check-label" for="gridCheck1">Published</label>
        </div>
    </div>
    </div>
    </div>
    <div class="mb-3">
         <button class="btn btn-primary" @click.prevent="submitForm" :disabled="isFormInvalid">Create</button>
        </div>
</form>
</template>

<script>
export default{
    emits: {
        pageCreated({pageTitle, content, link, published}){
            if(!pageTitle){
                return false;
            }
            if(!content){
                return false;
            }
            if(!link){
                return false;
            }
            if(!published){
                return false;
            }

        }
    },
    computed: {
        isFormInvalid(){
            let value = (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl);
            return(value);
        }
    },
    data() {
        return{
            pageTitle:'',
            content:'',
            linkText:'',
            linkUrl:'',
            published: true
        }
    },
    methods:{
        submitForm(){
            if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl){
                alert('please fill all the forms')
                return;
            }

            this.$emit('pageCreated', {
                pageTitle : this.pageTitle,
                content : this.content,
                link:{
                    text: this.linkText,
                    url: this.linkUrl
                },
                published : this.published
            });
        }
    },
    watch: {
        pageTitle(newTitle, oldTitle){
            if(this.linkText != this.oldTitle){
                this.linkText = newTitle;
            }
        }
    }
}
</script>