(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i.n(s),a=i(9),c=i.n(a),r=i(3),l=i(4),o=i(6),d=i(5),u=i(7),h=i(2),j=i(0),b=function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(r.a)(this,i),(s=t.call(this,e)).addSkill=s.addSkill.bind(Object(h.a)(s)),s.editingSwitchOn=s.editingSwitchOn.bind(Object(h.a)(s)),s.editingSwitchOff=s.editingSwitchOff.bind(Object(h.a)(s)),s.delete=s.delete.bind(Object(h.a)(s)),s.state={editClass:"hide-form",outputClass:"show-form",skillsList:[],skill:""},s}return Object(l.a)(i,[{key:"delete",value:function(e){var t=Object(u.a)(this.state.skillsList);this.setState({skillsList:t.filter((function(t){return t.key!==e}))})}},{key:"addSkill",value:function(e){e.preventDefault();var t=Object(u.a)(this.state.skillsList),i={key:1+Math.random(),value:this.skillBox.value};this.setState({skillsList:t.concat(i),skill:""})}},{key:"editingSwitchOn",value:function(e){e.preventDefault(),this.setState({editClass:"show-form"}),this.setState({outputClass:"hide-form"})}},{key:"editingSwitchOff",value:function(e){e.preventDefault(),this.setState({editClass:"hide-form"}),this.setState({outputClass:"show-form"})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"side-bar-edit-container ".concat(this.state.editClass),children:[Object(j.jsxs)("form",{children:[Object(j.jsxs)("label",{htmlFor:"skill",children:["Add ",this.props.title]}),Object(j.jsx)("input",{type:"text",id:"skill",name:"skill",autoComplete:"off",value:this.state.skill,onChange:function(t){return e.setState({skill:t.target.value})},ref:function(t){return e.skillBox=t}}),Object(j.jsx)("input",{type:"submit",value:"Add",onClick:this.addSkill}),Object(j.jsx)("input",{type:"submit",value:"Submit",onClick:this.editingSwitchOff})]}),this.state.skillsList.map((function(t){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{className:"side-bar-list-item",children:t.value},t.key),Object(j.jsx)("button",{onClick:function(){return e.delete(t.key)},children:"x"})]})}))]}),Object(j.jsxs)("div",{className:"side-bar-container ".concat(this.state.outputClass),children:[Object(j.jsxs)("div",{className:"side-bar-header",children:[Object(j.jsx)("div",{className:"side-bar-list-title",children:this.props.title}),Object(j.jsx)("div",{className:"side-bar-edit",onClick:this.editingSwitchOn,children:"Edit"})]}),Object(j.jsx)("br",{}),this.state.skillsList.map((function(t){return Object(j.jsx)("li",{className:"side-bar-list-item",children:t.value},e.state.skillsList.indexOf(t))}))]})]})}}]),i}(n.a.Component),p=function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(r.a)(this,i),(s=t.call(this,e)).editingSwitchOn=s.editingSwitchOn.bind(Object(h.a)(s)),s.editingSwitchOff=s.editingSwitchOff.bind(Object(h.a)(s)),s.state={editClass:"hide-form",outputClass:"show-form",fullName:"",phoneNumber:"",email:"",github:""},s}return Object(l.a)(i,[{key:"editingSwitchOn",value:function(e){e.preventDefault(),this.setState({editClass:"show-form"}),this.setState({outputClass:"hide-form"})}},{key:"editingSwitchOff",value:function(e){e.preventDefault(),this.setState({editClass:"hide-form"}),this.setState({outputClass:"show-form"})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"profile-container ".concat(this.state.outputClass),children:[Object(j.jsxs)("div",{className:"profile-header",children:[Object(j.jsx)("div",{className:"profile-name",children:this.state.fullName}),Object(j.jsx)("div",{className:"profile-edit",onClick:this.editingSwitchOn,children:"Edit"})]}),Object(j.jsx)("br",{}),this.state.phoneNumber,Object(j.jsx)("br",{}),this.state.email,Object(j.jsx)("br",{}),this.state.github]}),Object(j.jsx)("div",{className:"profile-edit-container ".concat(this.state.editClass),children:Object(j.jsxs)("form",{autoComplete:"off",children:[Object(j.jsx)("label",{htmlFor:"fname",children:"Full name:"}),Object(j.jsx)("input",{type:"text",id:"fname",name:"fname",autoComplete:"off",value:this.state.fullName,onChange:function(t){e.setState({fullName:t.target.value})}}),Object(j.jsx)("label",{htmlFor:"number",children:"Phone number:"}),Object(j.jsx)("input",{type:"text",id:"number",name:"number",autoComplete:"off",value:this.state.phoneNumber,onChange:function(t){e.setState({phoneNumber:t.target.value})}}),Object(j.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(j.jsx)("input",{type:"text",id:"email",name:"email",autoComplete:"off",value:this.state.email,onChange:function(t){e.setState({email:t.target.value})}}),Object(j.jsx)("label",{htmlFor:"github",children:"Github:"}),Object(j.jsx)("input",{type:"text",id:"github",name:"github",autoComplete:"off",value:this.state.github,onChange:function(t){e.setState({github:t.target.value})}}),Object(j.jsx)("input",{type:"submit",value:"Submit",onClick:this.editingSwitchOff})]})})]})}}]),i}(n.a.Component),O=function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(r.a)(this,i),t.call(this,e)}return Object(l.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"side-bar",children:[Object(j.jsx)(p,{}),Object(j.jsx)(b,{title:"Skills"}),Object(j.jsx)(b,{title:"Hobbies"})]})}}]),i}(n.a.Component),f=function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(r.a)(this,i),(s=t.call(this,e)).editingSwitchOn=s.editingSwitchOn.bind(Object(h.a)(s)),s.editingSwitchOff=s.editingSwitchOff.bind(Object(h.a)(s)),s.addExperience=s.addExperience.bind(Object(h.a)(s)),s.delete=s.delete.bind(Object(h.a)(s)),s.state={position:"",year:"",description:"",editClass:"hide-form",outputClass:"show-form",experiences:[]},s}return Object(l.a)(i,[{key:"addExperience",value:function(e){e.preventDefault();var t={key:1+Math.random(),position:this.state.position,year:this.state.year,description:this.state.description},i=Object(u.a)(this.state.experiences);this.setState({experiences:i.concat(t),position:"",year:"",description:""})}},{key:"delete",value:function(e){var t=Object(u.a)(this.state.experiences);this.setState({experiences:t.filter((function(t){return t.key!==e}))})}},{key:"editingSwitchOn",value:function(e){e.preventDefault(),this.setState({editClass:"show-form"}),this.setState({outputClass:"hide-form"})}},{key:"editingSwitchOff",value:function(e){e.preventDefault(),this.setState({editClass:"hide-form"}),this.setState({outputClass:"show-form"})}},{key:"render",value:function(){var e=this,t=this.state,i=t.position,s=t.year,n=t.description,a=t.editClass,c=t.outputClass;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"experience-edit-container ".concat(a),children:[Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{htmlFor:"experience-title",children:"Title:"}),Object(j.jsx)("input",{type:"text",name:"experience-title",id:"experience-title",autoComplete:"off",value:i,onChange:function(t){return e.setState({position:t.target.value})}}),Object(j.jsx)("label",{htmlFor:"experience-year",children:"Years:"}),Object(j.jsx)("input",{type:"text",name:"experience-year",id:"experience-year",autoComplete:"off",value:s,onChange:function(t){return e.setState({year:t.target.value})}}),Object(j.jsx)("label",{htmlFor:"experience-title",children:"Description:"}),Object(j.jsx)("input",{type:"text",name:"experience-description",id:"experience-description",autoComplete:"off",value:n,onChange:function(t){return e.setState({description:t.target.value})}}),Object(j.jsx)("input",{type:"submit",value:"Add Experience",onClick:this.addExperience}),Object(j.jsx)("input",{type:"submit",value:"Submit",onClick:this.editingSwitchOff})]}),this.state.experiences.map((function(t){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"experience-details",children:[Object(j.jsx)("div",{className:"experience-position",children:t.position}),Object(j.jsx)("div",{className:"experience-year",children:t.year}),Object(j.jsx)("div",{className:"experience-description",children:t.description})]}),Object(j.jsx)("button",{onClick:function(){return e.delete(t.key)},children:"x"})]})}))]}),Object(j.jsxs)("div",{className:"experience-container ".concat(c),style:{borderWidth:this.props.top?"0px":"2px"},children:[Object(j.jsxs)("div",{className:"experience-header",children:[Object(j.jsx)("div",{className:"experience-title",children:this.props.title}),Object(j.jsx)("div",{className:"experience-edit",onClick:this.editingSwitchOn,children:"Edit"})]}),this.state.experiences.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"experience-details",children:[Object(j.jsx)("div",{className:"experience-position",children:e.position}),Object(j.jsx)("div",{className:"experience-year",children:e.year}),Object(j.jsx)("div",{className:"experience-description",children:e.description})]})})}))]})]})}}]),i}(n.a.Component),m=function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(r.a)(this,i),(s=t.call(this,e)).state={},s}return Object(l.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"main-bar",children:[Object(j.jsx)(f,{top:!0,title:"Education"}),Object(j.jsx)(f,{title:"Work"}),Object(j.jsx)(f,{title:"Project"})]})}}]),i}(n.a.Component),x=function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(O,{}),Object(j.jsx)(m,{})]})}}]),i}(n.a.Component),v=(i(15),function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("div",{className:"title",children:"CV Builder"}),Object(j.jsx)(x,{})]})}}]),i}(n.a.Component));c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.23ff4286.chunk.js.map