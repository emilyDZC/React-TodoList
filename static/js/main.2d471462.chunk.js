(this["webpackJsonpreact-crash-todo"]=this["webpackJsonpreact-crash-todo"]||[]).push([[0],{27:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),c=a.n(r),l=a(18),i=a(5),s=a(6),d=a(8),u=a(7),p=a(9),m=a(13),h=a(10),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:a.props.todo.completed?"line-through":"none"}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," "," ",a,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),style:b},"X")))}}]),t}(n.Component),b={background:"#f12345",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},v=f,g=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return o.a.createElement(v,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})}))}}]),t}(n.Component);var y={background:"#376",color:"#fff",textAlign:"center",padding:"10px"},E={color:"#fff",textDecoration:"none"},j=function(){return o.a.createElement("header",{style:y},o.a.createElement("h1",null,"ToDoList"),o.a.createElement(m.b,{style:E,to:"/"},"Home")," | ",o.a.createElement(m.b,{style:E,to:"/about"},"About"))},k=a(26),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={title:""},a.onSubmit=function(e){e.preventDefault(),a.props.addTodo(a.state.title),a.setState({title:""})},a.onChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add task...",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),t}(n.Component);var x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is the TodoList app v1.0.0. It is part of a React crash course."))},C=a(14),w=a.n(C),T=(a(39),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[{id:w.a.v4(),title:"Do the washing up",completed:!1},{id:w.a.v4(),title:"Sweep the kitchen floor",completed:!1},{id:w.a.v4(),title:"Check meter readings",completed:!1}]},a.markComplete=function(e){a.setState({todos:a.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},a.delTodo=function(e){a.setState({todos:Object(l.a)(a.state.todos.filter((function(t){return t.id!==e})))})},a.addTodo=function(e){var t={id:w.a.v4(),title:e,completed:!1};a.setState({todos:[].concat(Object(l.a)(a.state.todos),[t])})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(j,null),o.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,{addTodo:e.addTodo}),o.a.createElement(g,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),o.a.createElement(h.a,{path:"/about",component:x}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.2d471462.chunk.js.map