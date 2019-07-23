
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: '页面加载于 ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
});


Vue.component('todo-item', {
    props: ['todo'],
    template: '<li data="">{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
      groceryList: [
        { id: 0, text: '蔬菜' },
        { id: 1, text: '奶酪' },
        { id: 2, text: '随便其它什么人吃的东西' }
      ],
      classObject: {
        active: true,
        'text-danger': false
      }
  }
});

var app8 = new Vue({
  el:'#app-8',
  data: {
    loginType: 'username',
    is_show: 'ok',
  }
});

var app9 = new Vue({
  el:'#app-9',
  data: {
    is_show: 'ok',
  }
});

var app10 = new Vue({
  el: '#app-10',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
  // app10.$set(app10.object, "autoooo", "asdfsadfasdf");
});

var app11 = new Vue({
  el: '#app-11',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
});

var app12 = new Vue({
  el: '#app-12',
  data: {
    numbers:[1,2,3,4,5,6,7,8,9],
  },
  computed: {
    evenNumbers: function(){
      return this.numbers.filter( function (number) {
        return number % 2 === 0;
      });
    }
  }
});

var app13 = new Vue({
  el: '#app-13',
  data: {
    numbers:[1,2,3,4,5,6,7,8,9],
  },
  methods: {
    even: function(numbers){
      return numbers.filter( function (number) {
        return number % 2 === 0;
      });
    }
  }
});

var app14 = new Vue({
  el: '#app-14',
  data: {
    name: '',
    newId: 3,
    list: [
      { id: 1, name: '李斯' },
      { id: 2, name: '吕不韦' },
      { id: 3, name: '嬴政' }
    ]
  },
  methods: {
    add() {
     //注意这里是 unshift
      this.list.unshift({ id: ++this.newId, name: this.name })
      this.name = ''
    }
  }
});

Vue.component('todo-item-2', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove_1\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})
var app15 = new Vue({
  el: '#app-15',
  data: {
    newTodoText: '',
    todos: [
      {id: 1, title: 'Do the dishes'},
      {id: 2, title: 'Take out the trash'},
      {id: 3, title: 'Mow the lawn'}
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = '';
    }
  }
});

