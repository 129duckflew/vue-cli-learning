<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link  :to="{name:'AddBook'}" class="btn-default">添加书籍</router-link>
      <table  class="table">
        <tr>
          <th>编号</th>
          <th>书名</th>
          <th>作者</th>
          <th>操作</th>
        </tr>
        <tr v-for="(book,index) in books " :key="book.id">
          <td>{{book.id}}</td>
          <td>{{book.name}}</td>
          <td>{{book.author}}</td>
          <td>
            <a href="" @click.prevent="delBook(book.id)" class=" btn-default" type="button">删除</a>/
            <router-link :to="{name:'EditBook',query:{bookId:book.id}}" class="btn-default btn-warning" >修改</router-link>
          </td>
        </tr>
      </table >
    <router-view></router-view>
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
  name: 'Books',
  data () {
    return {
      msg: '书籍列表',
      books:[],
      postBook:{}
    }
  },
  methods:{
    findAllBooks() {
      instance.get("books")
        .then(res=>this.books=res.data)
        .catch(error=>console.log(error))
    },
    delBook(id)
    {
      instance.delete("books/"+id)
      .then(res=>this.findAllBooks())
      .catch(error=>console.log(error))
    }
  },
  created()
  {
    this.findAllBooks()
  },
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
    this.findAllBooks();
    next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table{
  width:100%;
}
</style>
