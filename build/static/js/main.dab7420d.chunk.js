(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(42)},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(10),l=n.n(s),r=n(11),c=n(12),u=n(14),i=n(13),m=n(15),p=n(2),d=n.n(p),f="/api/persons",h={getAll:function(){return d.a.get(f).then(function(e){return e.data})},create:function(e){return d.a.post(f,e)},del:function(e){return d.a.delete("".concat(f,"/").concat(e)),d.a.get(f).then(function(e){return e.data})},update:function(e,t){return d.a.put("".concat(f,"/").concat(e),t)}},v=function(e){var t=e.message;return null===t?null:o.a.createElement("div",{className:"success"},t)},g=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).handleName=function(e){n.setState({newName:e.target.value})},n.handlePhone=function(e){n.setState({newPhone:e.target.value})},n.handleDelete=function(e){var t=n.state.persons.find(function(t){return t.id===e});return function(){console.log("person "+e+" needs to be deleted"),window.confirm("Poistetaanko nimi luettelosta?")&&h.del(e).then(function(a){n.setState({persons:n.state.persons.filter(function(t){return t.id!==e}),success:"listalta on nyt poistettu ' ".concat(t.name," ' ")}),setTimeout(function(){n.setState({success:null})},5e3)})}},n.handleSearch=function(e){n.setState({search:e.target.value})},n.addPerson=function(e){e.preventDefault();var t={name:n.state.newName,phone:n.state.newPhone};if(n.state.persons.map(function(e){return e.name}).includes(n.state.newName)){var a=n.state.persons.find(function(e){return e.name===n.state.newName});console.log("numeronmuutoksen l\xf6yt\xe4m\xe4 id",a.id),window.confirm("Nimi l\xf6ytyy jo, korvataanko numero uudella?")&&h.update(a.id,t).then(function(e){n.setState({persons:n.state.persons.map(function(t){return t.id!==a.id?t:e.data}),newName:"",newPhone:"",success:"Muutettiin numeroa henkil\xf6lle ' ".concat(t.name," ' ")})}).catch(function(e){n.setState({success:"T\xe4m\xe4 luettelotieto '".concat(a.name,"' on jo valitettavasti poistettu palvelimelta"),persons:n.state.persons.filter(function(e){return e.id!==a.id})}),setTimeout(function(){n.setState({success:null})},5e3)})}else console.log("before post"),console.log(n.state.persons),h.create(t).then(function(e){console.log(e),n.setState({persons:n.state.persons.concat(e.data),newName:"",newPhone:"",success:"listalle on nyt lis\xe4tty ' ".concat(t.name," ' ")}),setTimeout(function(){n.setState({success:null})},5e3)}),console.log("after post"),console.log(n.state.persons)},n.state={persons:[],newName:"",newPhone:"",success:null,search:""},console.log("constructor"),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("did mount"),h.getAll().then(function(t){console.log("promise fulfilled"),e.setState({persons:t})})}},{key:"render",value:function(){return console.log("render"),console.log(this.state.persons),o.a.createElement("div",null,o.a.createElement("h2",null,"Puhelinluettelo"),o.a.createElement(v,{message:this.state.success}),o.a.createElement(w,{rajaus:this}),o.a.createElement(y,{lomake:this}),o.a.createElement("h2",null,"Numerot"),o.a.createElement(E,{tyyppi:this}))}}]),t}(o.a.Component),w=function(e){var t=e.rajaus;return o.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4:",o.a.createElement("input",{value:t.state.search,onChange:t.handleSearch}))},y=function(e){var t=e.lomake;return o.a.createElement("form",{onSubmit:t.addPerson},o.a.createElement("div",null,"nimi:",o.a.createElement("input",{value:t.state.newName,onChange:t.handleName})),o.a.createElement("div",null,"numero:",o.a.createElement("input",{value:t.state.newPhone,onChange:t.handlePhone})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},E=function(e){console.log("personin saama props",e);var t=e.tyyppi.state.showAll?e.tyyppi.state.persons:e.tyyppi.state.persons.filter(function(t){return t.name.includes(e.tyyppi.state.search)});return o.a.createElement("ul",null,t.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(S,{person:t,del:e.tyyppi.handleDelete(t.id)}),o.a.createElement(b,{person:t}))}))},S=function(e){var t=e.person,n=e.del;return o.a.createElement("p",null,o.a.createElement("button",{onClick:n},"poista")," ",t.name,"  ")},b=function(e){return e.person.phone},k=g,N=(n(40),d.a.get("http://localhost:3001/api/persons"));console.log(N),l.a.render(o.a.createElement(k,null),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.dab7420d.chunk.js.map