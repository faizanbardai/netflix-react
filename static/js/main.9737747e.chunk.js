(this["webpackJsonpnetflix-react"]=this["webpackJsonpnetflix-react"]||[]).push([[0],{26:function(e,t,a){e.exports=a(42)},31:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),s=(a(31),a(11)),l=a(13),i=a(6),m=a(7),u=a(9),p=a(8),d=a(10),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},a.search=function(e){a.setState({searchKeyword:e.target.value})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar fixed-top navbar-expand-sm navbar-light bg-light"},r.a.createElement(s.b,{to:"/"},r.a.createElement("div",{className:"navbar-brand","data-toggle":"collapse","data-target":".navbar-collapse.show"},"FayJu Flix")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active","data-toggle":"collapse","data-target":".navbar-collapse.show"},r.a.createElement(s.b,{to:"/movies-in-theater",className:"nav-link"},"Movies In Theater"))),r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{onKeyUp:this.search,className:"form-control mr-sm-2",type:"search",placeholder:"Search movies","aria-label":"Search"}),r.a.createElement(s.b,{to:"/search/"+this.state.searchKeyword},r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit","data-toggle":"collapse","data-target":".navbar-collapse.show"},"Search")))))}}]),t}(n.Component),v=a(1),f=a.n(v),b=a(2),g=function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://www.omdbapi.com/?apikey=251ff3f5&i=".concat(t),e.prev=1,e.next=4,fetch(a,{method:"GET"});case 4:if(!(n=e.sent).ok){e.next=9;break}return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},a.componentDidMount=Object(b.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.movie.imdbID,e.next=3,g(t);case 3:n=e.sent,a.setState({movie:n,loading:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.movie;return e.loading?r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("div",{className:"col-4 col-sm-3 col-md-2 px-1"},r.a.createElement(s.b,{to:"/movie-detail/"+this.state.movie.imdbID},r.a.createElement("img",{src:t.Poster,style:{width:"100%"},className:"mb-2",alt:t.Title})))}}]),t}(n.Component),y=[{imdbID:"tt7286456"},{imdbID:"tt9248934"},{imdbID:"tt1025100"},{imdbID:"tt4520988"},{imdbID:"tt9763442"}],w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"display-4"},"In Theater"),r.a.createElement("div",{className:"row"},y.map((function(e,t){return r.a.createElement(E,{movie:e,key:t})}))))},x=function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://www.omdbapi.com/?apikey=251ff3f5&s=".concat(t),e.prev=1,e.next=4,fetch(a,{method:"GET"});case 4:if(!(n=e.sent).ok){e.next=9;break}return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={searchQuery:a.props.match.params.searchQuery,loading:!0},a.componentDidMount=Object(b.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params.searchQuery,e.next=3,x(t);case 3:(n=e.sent).Error?a.setState({error:n.Error}):a.setState({searchArray:n,loading:!1});case 5:case"end":return e.stop()}}),e)}))),a.componentDidUpdate=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.props.location.pathname===t.location.pathname){e.next=6;break}return n=a.props.match.params.searchQuery,e.next=4,x(n);case 4:(r=e.sent).Error?a.setState({error:r.Error}):a.setState({searchQuery:n,searchArray:r,error:!1,loading:!1});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.searchQuery,a=e.searchArray,n=e.loading,c=e.error;return c?r.a.createElement("div",null,c):n?r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):a.Search?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"display-4"},"Search: ",t),a.Search.length>0&&r.a.createElement("div",{className:"row"},a.Search.map((function(e,t){return r.a.createElement("div",{key:t.toString(),className:"col-6 col-sm-4 col-md-3 col-lg-2 px-1"},r.a.createElement(s.b,{to:"/movie-detail/"+e.imdbID},r.a.createElement("img",{src:"N/A"===e.Poster?"https://via.placeholder.com/300x445":e.Poster,style:{width:"100%"},className:"mb-2",alt:e.Title})))})))):void 0}}]),t}(n.Component),k=btoa("user24:48D4vaVh6Ra3DD8w"),j=new Headers({Authorization:"Basic "+k,"Content-Type":"application/json"}),O=function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://strive-school-testing-apis.herokuapp.com/api/comments/".concat(t),e.prev=1,e.next=4,fetch(a,{method:"GET",headers:j});case 4:if(!(n=e.sent).ok){e.next=9;break}return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),D=btoa("user24:48D4vaVh6Ra3DD8w"),S=new Headers({Authorization:"Basic "+D,"Content-Type":"application/json"}),C=function(){var e=Object(b.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://strive-school-testing-apis.herokuapp.com/api/comments/",e.prev=1,e.next=4,fetch("https://strive-school-testing-apis.herokuapp.com/api/comments/",{method:"POST",body:JSON.stringify(t),headers:S});case 4:if(!(a=e.sent).ok){e.next=9;break}return e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).captureComment=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={comment:document.querySelector("#comment").value,rate:document.querySelector("#rating").value,elementId:a.props.movieID},e.next=4,C(n);case 4:r=e.sent,document.querySelector("#comment").value="",document.querySelector("#rating").value=5,a.props.addComments(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.captureComment},r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{required:!0,className:"form-control mb-2",id:"comment",rows:"3",placeholder:"Write a new comment..."}),r.a.createElement("div",{className:"input-group"},r.a.createElement("select",{className:"custom-select",id:"rating","aria-label":"Example select with button addon"},r.a.createElement("option",{value:"5"},"Five"),r.a.createElement("option",{value:"4"},"Four"),r.a.createElement("option",{selected:!0,value:"3"},"Three"),r.a.createElement("option",{value:"2"},"Two"),r.a.createElement("option",{value:"1"},"One")),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",type:"submit"},"Submit")))))}}]),t}(n.Component),T=a(25),A=a.n(T),F=(a(39),btoa("user24:48D4vaVh6Ra3DD8w")),P=new Headers({Authorization:"Basic "+F,"Content-Type":"application/json"}),Q=function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://strive-school-testing-apis.herokuapp.com/api/comments/".concat(t),e.prev=1,e.next=4,fetch(a,{method:"DELETE",headers:P});case 4:if(!(n=e.sent).ok){e.next=9;break}return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),q=function(e){var t=function(){var t=Object(b.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q(a);case 2:n=t.sent,e.deleteComment(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=e.comment;return r.a.createElement("button",{onClick:function(){t(a._id)},className:"list-group-item list-group-item-action list-group-item-light"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},a.comment,r.a.createElement("span",{className:"badge badge-primary badge-pill"},a.rate)),r.a.createElement("footer",{className:"blockquote-footer"},"by ",a.author," ",r.a.createElement(A.a,{fromNow:!0},a.updatedAt)))},B=function(e){var t=e.comments,a=e.deleteComment;return r.a.createElement(r.a.Fragment,null,0===t.length?r.a.createElement("div",{className:"alert alert-info",role:"alert"},"No comments available. Be the first one to comment."):r.a.createElement("ul",{className:"list-group list-group-flush"},t.map((function(e,t){return r.a.createElement(q,{key:t,comment:e,deleteComment:a})}))))},G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,comments:[]},a.componentDidMount=Object(b.a)(f.a.mark((function e(){var t,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params.movieId,e.next=3,g(t);case 3:return n=e.sent,e.next=6,O(t);case 6:r=e.sent,a.setState({movieID:t,movie:n,comments:r,loading:!1});case 8:case"end":return e.stop()}}),e)}))),a.addComments=function(e){console.log("adding new comment and updating state"),a.setState({comments:a.state.comments.concat(e)})},a.deleteComment=function(e){console.log("deleting comment and updating state"),a.setState({comments:a.state.comments.filter((function(t){return t._id!==e._id}))})},a.componentDidUpdate=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Movie Detail Component updated!");case 1:case"end":return e.stop()}}),e)}))),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.loading,a=e.movie,n=e.comments;return t?r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("div",{className:"row my-2"},r.a.createElement("div",{className:"col-12 col-sm-3 col-md-3 p-2 text-center"},r.a.createElement("img",{src:"N/A"===a.Poster?"https://via.placeholder.com/300x445":a.Poster,className:"img-thumbnail",alt:a.Title,style:{width:"100%"}})),r.a.createElement("div",{className:"col-12 col-sm-9 col-md-5 p-2"},r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"\r list-group-item \r font-weight-bold \r bg-primary \r text-white\r "},a.Title," (",a.Year,")",r.a.createElement("span",{className:"badge badge-light float-right"},a.imdbRating)),r.a.createElement("li",{className:"list-group-item"},"Genre: ",a.Genre),r.a.createElement("li",{className:"list-group-item"},a.Plot))),r.a.createElement("div",{className:"col-md-4 p-2"},r.a.createElement(B,{comments:n,deleteComment:this.deleteComment}),r.a.createElement(I,{movieID:a.imdbID,addComments:this.addComments})))}}]),t}(n.Component),J=function(){return r.a.createElement("section",null,r.a.createElement(s.a,null,r.a.createElement(h,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement(l.a,{path:"/movie-detail/:movieId",component:G}),r.a.createElement(l.a,{path:"/movies-in-theater",component:w}),r.a.createElement(l.a,{path:"/search/:searchQuery",component:N}))),r.a.createElement("footer",{className:"navbar fixed-bottom navbar-dark bg-dark"},r.a.createElement("div",{className:"text-white ml-auto"},"FayJu \xa92019"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.9737747e.chunk.js.map