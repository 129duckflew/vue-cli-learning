<template >
  <div style="text-align: center">
    <form >
      编号 <input type="text" v-model="postBook.id" class="form-group " disabled="true"><br>
      书名 <input type="text" v-model="postBook.name" class="form-group"><br>
      作者 <input type="text" v-model="postBook.author" class="form-group"><br>
      <a href="" class="btn-info" @click.prevent="editBook">修改书籍</a>
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
  name: 'EditBook',
  data () {
    return {
      postBook:{}
    }
  },
  methods:{
    editBook()
    {
      instance.put("books/"+this.postBook.id,this.postBook)
        .then(res=> {
          this.postBook={};
          this.$router.push({name:'Books'})
        })
    },
    getBook()
    {
      this.bookId=this.$route.query.bookId;
      instance.get("/books/"+this.bookId)
        .then(res=>this.postBook=res.data)
        .catch(error=>console.log(error))
    }
  },
  created() {
    this.getBook();
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      this.getBook();
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
