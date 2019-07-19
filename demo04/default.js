// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {   // data 必须是一个函数
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
});

Vue.component('blog-post-1', {
  props: ['title', 'content'],
  template: '<div class="blog-post"><h5>{{ title }}</h5><div v-html="content"></div></div>'
});

Vue.component('blog-post-2', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
      <div>{{ post.create_at }}</div>
      <button @click="$emit('enlarge-text', 0.1)">Enlarge text</button>
    </div>
  `
});

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
});

Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
});




var app1 = new Vue({ 
  el: '#app-1',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content:'My journey with Vue My journey with Vue', create_at:'2019-07-18' },
      { id: 2, title: 'Blogging with Vue' , content:'Blogging with Vue Blogging with Vue', create_at:'2019-07-18'},
      { id: 3, title: 'Why Vue is so fun' , content:'Why Vue is so fun Why Vue is so fun', create_at:'2019-07-18'}
    ],
    postFontSize: 1,
    searchText: 'Search Text',
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  },

});



Vue.component('tab-home', { 
	template: '<div>Home component</div>' 
});
Vue.component('tab-posts', { 
	template: '<div>Posts component</div>' 
});
Vue.component('tab-archive', { 
	template: '<div>Archive component</div>' 
});
new Vue({
  el: '#dynamic-component-demo',
  data: {
    currentTab: 'Home',
    tabs: ['Home', 'Posts', 'Archive']
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
});




Vue.component('blog-post-row', { 
	template: '<tr><td>AAA</td><td>BBB</td></tr>' 
});
var tabs = [
  {
    name: 'Home', 
    component: { 
      template: '<div>Home component</div>' 
    }
  },
  {
    name: 'Posts',
    component: {
      template: '<div>Posts component</div>'
    }
  },
  {
    name: 'Archive',
    component: {
      template: '<div>Archive component</div>',
    }
  }
];
new Vue({
  el: '#dynamic-component-demo-1',
  data: {
  	tabs: tabs,
    currentTab: tabs[0]
  }
});


Vue.component('base-input', {
  //inheritAttrs: false,
  inheritAttrs: false,
  props: ['label', 'value'],
  //props: ['value'],
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  `
})

var ComponentC = {template: '<div>ComponentC ComponentC</div>' }
var ComponentA = {template: '<div>ComponentA ComponentA</div>'}
var ComponentB = {
  components: {
    'component-c': ComponentC
  },
  template: '<div>ComponentB ComponentB</div> <component-c></component-c>',
}
var app2 = new Vue({ 
  el: '#app-2',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  },
  data: {
    username: 'ssssssss',
  },
});
