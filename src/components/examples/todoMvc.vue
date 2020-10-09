<template>
  <div class="todoWrap">
    <section class="todoMvc">
      <header class="header">
        <h1>todos</h1>
        <input type="text" class="todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="addTodo">
      </header>
      <section class="main" v-show="todos.length">
        <input type="checkbox" class="toggle-all">
        <label for="toggle-all"></label>
        <ul class="todo-list">
          <li v-for="todo in filtersTodo" :key="todo.id" class="todo">
            <div class="view">
              <input type="checkbox" class="toggle" v-model="todo.completed">
              <label @dblclick="editTodo(todo)" :class="[todo.completed ? 'completed': '']">{{todo.title}}</label>
              <div class="destory" @click="removeTodo(todo)">×</div>
            </div>
            <input type="text" class="edit" :class="{'show': todo.title == editedTodo}" v-model="todo.title" ref="input" @blur="doneEdit(todo)" 
            @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)">
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="todos.length">
        <span class="todo-count">
          <strong>{{remaining}}</strong> {{remaining | pluralize}} left
        </span>
        <ul class="filters">
          <li>
            <span @click="toggleTab" :class="{selected: visibility == 'all'}">All</span>
          </li>
          <li>
            <span @click="toggleTab" :class="{selected: visibility == 'active'}">Active</span>
          </li>
          <li>
            <span @click="toggleTab" :class="{selected: visibility == 'completed'}">Completed</span>
          </li>
        </ul>
        <div class="clear" @click="clearCompleted" v-show="todos.length > remaining">Clear completed</div>
      </footer>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo.</p>
      <p>Written by <a href="https://github.com/masaiya">Masy</a></p>
      <p>Part of <a href="https://github.com/masaiya/Masy-dev">Masy-dev</a></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'todoMvc',
  data() {
    return {
      newTodo: "",
      todos: [],
      editTag: false,
      editedTodo: null,
      visibility: "all",
      filtersTodo: this.todos
    };
  },
  computed:{
    active: function() {
      return this.todos.filter(function(todo) {
        return !todo.completed;
      })
    },
    completed: function() {
      return this.todos.filter(function(todo) {
        return todo.completed;
      })
    },
    remaining: function() {
      return this.active.length;
    }
  },
  filters: {
    pluralize: function(n) {
      return n === 1 ? "item" : "items";
    }
  },
  watch:{
    todos(newValue) {
      this.filtersTodo = this.todos;
    } 
  },
  methods: {
    addTodo: function() {
      var value = this.newTodo && this.newTodo.trim();
      if(!value) return ;
      this.todos.push({
        id: this.todos.length,
        title: value,
        completed: false
      });
      this.newTodo = "";
    },
    editTodo: function(todo) {
      this.beforeEditCache = todo.title;
      this.editedTodo = todo.title;
      this.$nextTick(() => {
        this.$refs.input.focus();
      })
    },
    removeTodo: function(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    doneEdit: function(todo) {
      if(!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      todo.title = todo.title.trim();
      if (!todo.title) {
        this.removeTodo(todo);
      }
    },
    cancelEdit: function(todo) {
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    },
    clearCompleted: function() {
      this.todos = this.active;
    },
    toggleTab: function() {

    }
  }
};
</script>

<style scoped lang="scss">
.todoWrap {
  min-width: 230px;
  max-width: 550px;
}
.todoMvc {
  background-color: #fff;
  margin: 130px 0 40px 0 ;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2),
              0 25px 50px 0 rgba(0,0,0,0.1);
  .header h1 {
    position: absolute;
    top: -210px;
    width: 100%;
    font-size: 100px;
    flex-wrap: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
  }  
  .header input::input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }
  .header input::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }
  .header input {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    line-height: 1.4em;
    border: 0;
    padding: 16px 16px 16px 60px;
    box-shadow: inset 0 0px 5px 0 rgba(0,0,0,0.2);
    outline: 0;
    box-sizing: border-box;
  }
}
.main {
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
  .toggle-all {
    width: 60px;
    height: 34px;
    position: absolute;
    bottom: 100%;
    right: 100%;
    margin-right: -60px;
    margin-bottom: 15px;
    opacity: 0;
    z-index: 3;
  }
  .toggle-all + label {
    width: 60px;
    height: 34px;
    position: absolute;
    top: -52px;
    transform: rotate(90deg);
  }
  .toggle-all + label:before {
    content: "❯";
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }
  .toggle-all:checked + label::before {
    color: #737373;
  }
  .todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 3em;
    .todo {
      position: relative;
      font-size: 24px;
      border-bottom: 1px solid #ededed;
      box-sizing: border-box;
      .view {
        color: #4d4d4d;
        .toggle {
          text-align: center;
          width: 40px;
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto 0 ;
          border: none;
          opacity: 0;
        }
        .toggle + label {
          font: 24px 'Helvetica Neue', Helvetica, Arial, sans-serif;
          padding: 15px 15px 15px 60px;
          line-height: 1.2;
          transition: color 0.4s;
          background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center left;
        }
        .toggle:checked + label {
          background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E");
        }
        label.completed {
          text-decoration: line-through;
          color: #d9d9d9;
        }
        .destory {
          display: inline-block;
          border: none;
          position: absolute;
          right: 20px;
          font-size: 30px;
          color: #cc9a9a;
          transition: color 0.2s ease-out;
          opacity: 0;
        }
        .destory:hover {
          color: #af5b5e;
        }
      }
      .edit {
        display: none;
        height: 50px;
        position: absolute;
        top: 0;
        font-size: 24px;
        left: 60px;
        box-sizing: border-box;
        border: 1px solid #999;
        outline: none;
      }
      .show {
        display: block;  
      }
      &:hover .destory {
        opacity: 1;
      }
    }
  }
}
.footer {
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
	            0 8px 0 -3px #f6f6f6,
	            0 9px 1px -3px rgba(0, 0, 0, 0.2),
	            0 16px 0 -6px #f6f6f6,
	            0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
  .todo-count {
    float: left;
    text-align: left;
    strong {
      font-weight: 300;
    }
  }
  .clear{
    float: right;
    position: relative;
    color: #777;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .filters{
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;
    li {
      display: inline;
      span {
        margin: 3px;
        padding: 3px 7px;
        border: 1px solid transparent;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
          border-color: rgba(175, 47, 47, 0.1);
        }
        &.selected {
          border-color: rgba(175, 47, 47, 0.2);
        }
      }
    }
  } 
}
.info {
  display: block;
  color: #bfbfbf;
  font-size: 10px;
  text-shadow: 0 1px 0 rgba(255,255,255,0.5);
  p {
    line-height: 1;
    color: #bfbfbf;
    text-align: center;
  }
  a {
    color: #bfbfbf;
    font-weight: 400;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
