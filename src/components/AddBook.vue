<template >
  <div style="text-align: center">
    <form >
      书名 <input type="text" v-model="postBook.name" class="form-group"><br>
      作者 <input type="text" v-model="postBook.author" class="form-group"><br>
      <a @click.prevent="addBook" class="btn btn-success">添加书籍</a>
    </form>
  </div>
</template>

<script>
  import axios from "axios";

  let instance = axios.create(
    {
      baseURL:"http://localhost:8888",
      timeout:5000
    }
  );
export default {
  name: 'AddBook',
  data () {
    return {
      postBook:{}
    }
  },
  methods:{
    addBook()
    {
      instance.post("books",this.postBook)
      .then(res=>{
        this.$router.push({name:'Books'})
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
