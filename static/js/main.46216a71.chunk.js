(this["webpackJsonpnelsong1997.github.io"]=this["webpackJsonpnelsong1997.github.io"]||[]).push([[0],{130:function(e,t,a){e.exports=a.p+"static/media/sick_face.5f93c0fb.svg"},131:function(e,t,a){e.exports=a.p+"static/media/smile_face.0a29229c.svg"},171:function(e,t,a){e.exports=a(353)},353:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(48),o=a.n(c),l=a(8),u=a(127),r=a(128),s=a(129),m=a(9),d=a(141),h=a(140),v=a(130),f=a.n(v),p=a(131),b=a.n(p),H=a(19);function x(e,t){var a=t-e+1;return Math.floor(a*Math.random())+e}function y(e,t){if(t>=e.length||t<0)throw t;return e.slice(0,t).concat(e.slice(t+1,e.length))}function C(e){for(var t=[],a=0;a<e;a++)t[a]=a;return t}function g(e){for(var t=[],a=0;a<e;a++)t[a]=0;return t}function E(e){var t;t=(e-e%10)/10%2?[e-1,e+10,e+11,e+1,e-9,e-10]:[e-1,e+9,e+10,e+1,e-10,e-11],e%10===0?(t[0]=null,(e-e%10)/10%2||(t[1]=null,t[5]=null)):e%10===9&&(t[3]=null,(e-e%10)/10%2&&(t[2]=null,t[4]=null)),e<10?(t[4]=null,t[5]=null):e>=90&&(t[1]=null,t[2]=null);var a,n=[],i=Object(l.a)(t);try{for(i.s();!(a=i.n()).done;){var c=a.value;null!==c&&n.push(c)}}catch(o){i.e(o)}finally{i.f()}return n}function k(e){var t,a=[],n=Object(l.a)(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;a.push(i)}}catch(c){n.e(c)}finally{n.f()}return a}function O(e){return(e-e%10)/10}function z(e){return e%10}var w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={roundsCompleted:0,zombieHeadHexes:g(100),humanOccupiedHexes:[],zombieOccupiedHexes:[],vaccinatedOccupiedHexes:[],numZombieArms:2,humanCount:50,vaccinatedCount:0,zombieCount:1,history:[],algorithm:"random-head",mortality:!1,mortalityNum:1,vaccination:!1,vaccineEffectiveness:80,mode:"auto",gameStarted:!1,whoseTurn:"Humans",placeHeadOrArm:"head",currentHeadHex:0,numArmsRemaining:0,hiddenHumanHexes:[],hiddenVaccinatedHexes:[],infectedVaccinatedHexes:[],theGraph:null},e.start=e.start.bind(Object(m.a)(e)),e.nextRound=e.nextRound.bind(Object(m.a)(e)),e.nextRoundHotseat=e.nextRoundHotseat.bind(Object(m.a)(e)),e.restart=e.restart.bind(Object(m.a)(e)),e.handleInputChange=e.handleInputChange.bind(Object(m.a)(e)),e.handleHexClick=e.handleHexClick.bind(Object(m.a)(e)),e.calcNewInfections=e.calcNewInfections.bind(Object(m.a)(e)),e.autofill=e.autofill.bind(Object(m.a)(e)),e.autofillZombies=e.autofillZombies.bind(Object(m.a)(e)),e.autofillHumans=e.autofillHumans.bind(Object(m.a)(e)),e}return Object(s.a)(a,[{key:"displayBoard",value:function(e){for(var t=[],a=[],n=[],c=[],o=[],l=[],u=0;u<10;u++){var r=0;u%2&&(r=Math.sqrt(3)/2);for(var s=0;s<10;s++){var m=s*Math.sqrt(3)+r,d="".concat(1.5*u+.5,",").concat(m," ").concat(1.5*u+1.5,",").concat(m," ").concat(1.5*u+2,",").concat(m+Math.sqrt(3)/2,"\n                     ").concat(1.5*u+1.5,",").concat(m+Math.sqrt(3)," ").concat(1.5*u+.5,",").concat(m+Math.sqrt(3)," ").concat(1.5*u,",").concat(m+Math.sqrt(3)/2);if(t.push(i.a.createElement("polygon",{id:"hex-"+u+s,points:d,key:1e3*u+100*s,style:{fill:"white",stroke:"black",strokeWidth:".02"},onClick:this.handleHexClick})),e.humanOccupiedHexes.includes(10*u+s)&&a.push(i.a.createElement("text",{x:1.5*u+.55,y:m+1.3,id:10*u+s,onClick:this.handleHexClick,fontFamily:"Arial",fontSize:"1.75px",fill:"blue",key:1e3*u+100*s+1},"x")),e.vaccinatedOccupiedHexes.includes(10*u+s)&&(n.push(i.a.createElement("text",{x:1.5*u+.55,y:m+1.3,id:10*u+s,onClick:this.handleHexClick,fontFamily:"Arial",fontSize:"1.75px",fill:"lime",key:1e3*u+100*s+2},"x")),e.infectedVaccinatedHexes.includes(10*u+s)&&e.zombieOccupiedHexes.includes(10*u+s)?l.push(i.a.createElement("img",{src:f.a,alt:"sick",style:{left:43.226*(1.5*u+1.55),top:43.226*(m+1.3-.55)}})):!e.infectedVaccinatedHexes.includes(10*u+s)&&e.zombieOccupiedHexes.includes(10*u+s)&&l.push(i.a.createElement("img",{src:b.a,alt:"healthy",style:{left:43.226*(1.5*u+1.55),top:43.226*(m+1.3-.55)}}))),e.zombieHeadHexes[10*u+s]){for(var h=0;h<e.zombieHeadHexes[10*u+s].length;h++){var v=e.zombieHeadHexes[10*u+s][h],p=0;(v-v%10)/10%2&&(p=Math.sqrt(3)/2);var H=v%10*Math.sqrt(3)+p;o.push(i.a.createElement("line",{x1:1.5*u+.99,y1:m+.87,x2:(v-v%10)/10*1.5+.99,y2:H+.87,onClick:this.handleHexClick,style:{stroke:"red",strokeWidth:".25"},key:1e3*u+100*s+2*h+3,opacity:"1",id:10*u+s}),i.a.createElement("circle",{cx:(v-v%10)/10*1.5+.99,cy:H+.87,r:".4",id:10*u+s,onClick:this.handleHexClick,stroke:"red",strokeWidth:".01",fill:"red",opacity:"1",key:1e3*u+100*s+2*h+4}))}c.push(i.a.createElement("circle",{cx:1.5*u+.99,cy:m+.87,r:".4",stroke:"red",strokeWidth:".01",onClick:this.handleHexClick,fill:"red",opacity:"1",key:1e3*u+100*s+16,id:10*u+s}))}}}return i.a.createElement("div",null,i.a.createElement("svg",{viewBox:"0 0 15.5 18.5"},t,c,o,a,n),l)}},{key:"displayControls",value:function(e){var t=[],a=[],n="black";(0===e.humanCount&&0===e.vaccinatedCount||0===e.zombieCount)&&(n="gray");var c="black";e.numZombieArms>2&&(c="gray");var o="black";e.numZombieArms>4&&(o="gray");var l=null,u=null,r=null;e.gameStarted?(e.mortality&&(l=[i.a.createElement("label",{key:"0"},i.a.createElement("strong",null,e.mortalityNum))]),e.vaccination&&(u=[i.a.createElement("label",{key:"0"},i.a.createElement("strong",null,e.history[0].vaccinatedCount)),i.a.createElement("label",{key:"1"},i.a.createElement("strong",null,e.vaccineEffectiveness))]),"auto"===e.mode?t[0]=[i.a.createElement("div",{className:"col-item",key:"0"},i.a.createElement("button",{onClick:this.nextRound,style:{color:n}},"next round"))]:"wait"===e.whoseTurn?t[0]=[i.a.createElement("div",{className:"col-item",key:"0"},i.a.createElement("button",{onClick:this.nextRoundHotseat,style:{color:n}},"next round"))]:"hotseat"===e.mode&&(t[0]=[i.a.createElement("div",{className:"col-item",key:"0"},i.a.createElement("button",{onClick:this.autofill},"autofill"))]),t[1]=[i.a.createElement("div",{className:"col-item",key:"1"},i.a.createElement("button",{onClick:this.restart},"restart"))],a=[i.a.createElement("label",{key:"0"},i.a.createElement("strong",null,e.history[0].humanCount)),i.a.createElement("label",{key:"1"},i.a.createElement("strong",null,e.history[0].zombieCount)),i.a.createElement("label",{key:"2"},i.a.createElement("strong",null,e.numZombieArms))]):(e.mortality&&(l=[i.a.createElement("input",{type:"number",className:"num-input",id:"mortality-num",key:"0",min:"1",value:e.mortalityNum,name:"mortalityNum",onChange:this.handleInputChange})]),e.vaccination&&(u=[i.a.createElement("input",{type:"number",className:"num-input",id:"vaccinated-start-count",key:"0",min:"0",max:100-e.humanCount,value:e.vaccinatedCount,name:"vaccinatedCount",onChange:this.handleInputChange}),i.a.createElement("input",{type:"number",className:"num-input",id:"vaccine-effectiveness",key:"0",min:"0",max:"100",value:e.vaccineEffectiveness,name:"vaccineEffectiveness",onChange:this.handleInputChange})]),t=i.a.createElement("button",{onClick:this.start},"start"),a=[i.a.createElement("input",{type:"number",className:"num-input",id:"human-start-count",key:"0",min:"0",max:100-e.vaccinatedCount,value:e.humanCount,name:"humanCount",onChange:this.handleInputChange}),i.a.createElement("input",{type:"number",className:"num-input",id:"zombie-start-count",key:"1",min:"1",max:"100",value:e.zombieCount,name:"zombieCount",onChange:this.handleInputChange}),i.a.createElement("input",{type:"number",className:"num-input",id:"num-zombie-arms",key:"2",min:"0",max:"6",value:e.numZombieArms,name:"numZombieArms",onChange:this.handleInputChange})],r=[i.a.createElement("div",{className:"col-item",key:"7"},i.a.createElement("label",null,"Other Options"),i.a.createElement("div",{id:"other-options"},i.a.createElement("div",null,i.a.createElement("label",null,i.a.createElement("input",{type:"checkbox",value:!e.mortality,checked:e.mortality,name:"mortality",onChange:this.handleInputChange}),"Zombie Mortality")),i.a.createElement("div",null,i.a.createElement("label",null,i.a.createElement("input",{type:"checkbox",value:!e.vaccination,checked:e.vaccination,name:"vaccination",onChange:this.handleInputChange}),"Vaccination")))),i.a.createElement("div",{className:"col-item",key:"8"},i.a.createElement("label",null,"Mode"),i.a.createElement("div",{id:"mode-select"},i.a.createElement("div",null,i.a.createElement("label",null,i.a.createElement("input",{type:"radio",value:"auto",checked:"auto"===e.mode,name:"mode",onChange:this.handleInputChange}),"Auto")),i.a.createElement("div",null,i.a.createElement("label",null,i.a.createElement("input",{type:"radio",value:"hotseat",checked:"hotseat"===e.mode,name:"mode",onChange:this.handleInputChange}),"Hotseat"))))]);var s=null;e.mortality&&(s=[i.a.createElement("div",{className:"col-item",key:"3"},i.a.createElement("label",null,"Zombie Lifespan (days)"),l)]);var m=null;return e.vaccination&&(m=[i.a.createElement("div",{className:"col-item",key:"4"},i.a.createElement("label",null,"Vaccinated Human Start Count"),u[0]),i.a.createElement("div",{className:"col-item",key:"5"},i.a.createElement("label",null,"% Vaccine Effectiveness"),u[1])]),i.a.createElement("div",{id:"controls"},i.a.createElement("div",{id:"col-0",className:"column"}," ",t),i.a.createElement("div",{id:"col-1",className:"column"}," ",i.a.createElement("div",{className:"col-item",key:"0"},i.a.createElement("label",null,"Human Start Count"),a[0]),i.a.createElement("div",{className:"col-item",key:"1"},i.a.createElement("label",null,"Zombie Start Count"),a[1]),i.a.createElement("div",{className:"col-item",key:"2"},i.a.createElement("label",null,"# of Zombie Arms"),a[2]),s,m,i.a.createElement("div",{className:"col-item",key:"6"},i.a.createElement("label",null,"Algorithm"),i.a.createElement("div",{id:"algorithm-select"},i.a.createElement("div",null,i.a.createElement("label",null,i.a.createElement("input",{type:"radio",value:"random-head",checked:"random-head"===e.algorithm,name:"algorithm",onChange:this.handleInputChange}),"Random Head")),i.a.createElement("div",null,i.a.createElement("label",{style:{color:c}},i.a.createElement("input",{type:"radio",value:"slide",checked:"slide"===e.algorithm,name:"algorithm",onChange:this.handleInputChange}),"Slide")),i.a.createElement("div",null,i.a.createElement("label",{style:{color:o}},i.a.createElement("input",{type:"radio",value:"slots",checked:"slots"===e.algorithm,name:"algorithm",onChange:this.handleInputChange}),"Slots")))),r))}},{key:"displayStatusInfo",value:function(e){if(!e.gameStarted)return null;if("Humans"===e.whoseTurn||"Zombies"===e.whoseTurn){var t,a,n,c=null;if("Humans"===e.whoseTurn)if(t="blue",e.humanCount>0)n="human",a="blue";else{if(!(e.vaccinatedCount>0))return i.a.createElement("div",{id:"status-info",className:"column"},i.a.createElement("p",null,i.a.createElement("strong",null,"Switch players!")));n="vaccinated human",a="lime"}else"Zombies"===e.whoseTurn&&(t="red",e.zombieCount>0&&(n="zombie",a="red","head"===e.placeHeadOrArm?c="the head of ":"arm"===e.placeHeadOrArm&&(c="arm #".concat(e.numZombieArms-e.numArmsRemaining+1," of "))));var o=n+"Count",l=e[o=o.split(" human").join("")];return i.a.createElement("div",{id:"status-info",className:"column"},i.a.createElement("p",null,i.a.createElement("strong",{style:{color:t}},e.whoseTurn,"'")," turn!"),i.a.createElement("p",null,"Currently placing ",c,i.a.createElement("strong",{style:{color:a}},n," #",e.history[e.roundsCompleted][o]-l+1),"!"),i.a.createElement("p",null,"You have ",l," ",i.a.createElement("strong",{style:{color:a}},n+(1===l?" ":"s"))," left to place."))}if("wait"===e.whoseTurn){var u=[i.a.createElement("p",{key:"0"},i.a.createElement("strong",null,"Switch players!"))];0===e.humanCount&&0===e.vaccinatedCount?u=[i.a.createElement("p",{key:"0"},i.a.createElement("strong",{style:{color:"red"}},"The Zombies win!"))]:0===e.zombieCount?u=[i.a.createElement("p",{key:"0"},i.a.createElement("strong",{style:{color:"blue"}},"The Humans win!"))]:"auto"===e.mode&&(u=null);var r=e.history[e.roundsCompleted].newInfections-e.infectedVaccinatedHexes.length,s="humans were";1===r&&(s="human was");var m="humans were";1===e.infectedVaccinatedHexes.length&&(m="human was");var d="";return e.vaccination&&(d=" and ".concat(e.infectedVaccinatedHexes.length," vaccinated ").concat(m," infected")),i.a.createElement("div",{id:"status-info",className:"column"},i.a.createElement("p",null,"Round ended. ",r," normal ",s," infected",d,"."),u)}}},{key:"displayHistoryTable",value:function(e,t){if(t){var a=[];for(var n in e){var c=null;this.state.vaccination&&(c=[i.a.createElement("td",{key:n},e[n].vaccinatedCount)]);var o=null;if(this.state.mortality){var l=e[0].zombieCount+e[0].humanCount+e[0].vaccinatedCount-(e[n].zombieCount+e[n].humanCount+e[n].vaccinatedCount);o=[i.a.createElement("td",{key:n},l)]}a.push(i.a.createElement("tr",{key:n},i.a.createElement("td",null,n),i.a.createElement("td",null,e[n].humanCount),c,i.a.createElement("td",null,e[n].zombieCount),o,i.a.createElement("td",null,e[n].newInfections)))}var u=null;this.state.vaccination&&(u=[i.a.createElement("th",{key:"0"},"# Vaccinated")]);var r=null;this.state.mortality&&(r=[i.a.createElement("th",{key:"0"},"# Removed")]);var s=[i.a.createElement("table",{key:"0"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Round #"),i.a.createElement("th",null,"# Humans"),u,i.a.createElement("th",null,"# Zombies"),r,i.a.createElement("th",null,"New Infections")),a))];return i.a.createElement("div",null,s)}return null}},{key:"createGraph",value:function(e,t,a){var n=[];for(var c in e)n.push({round:c,humanCount:e[c].humanCount});var o=[];for(var l in e)o.push({round:l,zombieCount:e[l].zombieCount});if(t){var u=[];for(var r in e)u.push({round:r,vaccinatedCount:e[r].vaccinatedCount})}if(a){var s=[],m=e[0].zombieCount+e[0].humanCount+e[0].vaccinatedCount;for(var d in e){var h=m-(e[d].zombieCount+e[d].humanCount+e[d].vaccinatedCount);s.push({round:d,removedCount:h})}}return[i.a.createElement("div",{id:"graph",key:"0"},i.a.createElement(H.c,{width:700,height:300,data:[{round:0,humanCount:400,zombieCount:100},{round:1,humanCount:300,zombieCount:200}]},i.a.createElement(H.b,{type:"monotone",dataKey:"humanCount",stroke:"#8884d8"}),i.a.createElement(H.b,{type:"monotone",dataKey:"zombieCount",stroke:"#000000"}),i.a.createElement(H.a,{stroke:"#ccc"}),i.a.createElement(H.d,{dataKey:"round"}),i.a.createElement(H.e,null)))]}},{key:"handleInputChange",value:function(e){var t=e.target.name,a=e.target.value;"number"===e.target.type&&(a=Number(a),"vaccineEffectiveness"!==t&&(a-=a%1),a<e.target.min?a=Number(e.target.min):e.target.max&&a>e.target.max&&(a=Number(e.target.max))),"checkbox"===e.target.type&&(a="true"===a,"vaccination"===t&&a?(this.setState({vaccinatedCount:25}),this.state.humanCount>75&&this.setState({humanCount:75})):"vaccination"!==t||a||this.setState({vaccinatedCount:0})),this.setState(Object(u.a)({},t,a))}},{key:"componentDidUpdate",value:function(){var e=this.state;(e.numZombieArms>4&&"random-head"!==e.algorithm||e.numZombieArms>2&&"slide"===e.algorithm)&&this.setState({algorithm:"random-head"})}},{key:"handleHexClick",value:function(e){var t=this,a=this.state;if(a.gameStarted&&"auto"!==a.mode){var n=Number(e.target.id.slice(-2));if("Humans"!==a.whoseTurn||a.humanOccupiedHexes.includes(n)||a.vaccinatedOccupiedHexes.includes(n))if("Zombies"!==a.whoseTurn||a.zombieOccupiedHexes.includes(n)){if("Humans"===a.whoseTurn){if(0===a.humanCount&&0===a.vaccinatedCount)return;if(a.humanOccupiedHexes.includes(n)){var i=a.humanOccupiedHexes;i=y(i,i.findIndex((function(e){return e===n}))),this.setState({humanCount:a.humanCount+1,humanOccupiedHexes:i})}else if(a.vaccinatedOccupiedHexes.includes(n)){var c=a.vaccinatedOccupiedHexes;c=y(c,c.findIndex((function(e){return e===n}))),this.setState({vaccinatedCount:a.vaccinatedCount+1,vaccinatedOccupiedHexes:c})}}else if("Zombies"===a.whoseTurn){var o=a.zombieHeadHexes,u=a.zombieOccupiedHexes;if(u.includes(n)&&o[n]){u=y(u,u.findIndex((function(e){return e===n})));var r,s=Object(l.a)(o[n]);try{var m=function(){var e=r.value;u=y(u,u.findIndex((function(t){return t===e})))};for(s.s();!(r=s.n()).done;)m()}catch(V){s.e(V)}finally{s.f()}o[n]=0;var d=a.zombieCount,h=a.placeHeadOrArm;n===a.currentHeadHex?h="head":d++,this.setState({zombieCount:d,zombieHeadHexes:o,zombieOccupiedHexes:u,placeHeadOrArm:h})}}}else{var v=a.zombieCount;if("head"===a.placeHeadOrArm){var f=a.zombieOccupiedHexes,p=a.zombieHeadHexes;f.push(n),p[n]=[];var b,H=E(n),x=0,C=Object(l.a)(H);try{for(C.s();!(b=C.n()).done;){var g=b.value;f.includes(g)||x++}}catch(V){C.e(V)}finally{C.f()}var k="arm";0!==x&&0!==a.numZombieArms||(k="head",v--),this.setState({zombieOccupiedHexes:f.sort((function(e,t){return e-t})),zombieHeadHexes:p,zombieCount:v,placeHeadOrArm:k,numArmsRemaining:a.numZombieArms,currentHeadHex:n})}else if("arm"===a.placeHeadOrArm){var O=a.zombieOccupiedHexes,z=a.zombieHeadHexes,w=a.currentHeadHex,I=a.numArmsRemaining;if(!E(w).includes(n))return;O.push(n),z[w].push(n),I--;var S,N=E(w),A=0,Z=Object(l.a)(N);try{for(Z.s();!(S=Z.n()).done;){var j=S.value;O.includes(j)||A++}}catch(V){Z.e(V)}finally{Z.f()}var T="arm";0!==A&&0!==I||(T="head",v--),this.setState({zombieOccupiedHexes:O.sort((function(e,t){return e-t})),zombieHeadHexes:z,zombieCount:v,placeHeadOrArm:T,numArmsRemaining:I})}0===v&&(this.setState({whoseTurn:"wait",humanOccupiedHexes:a.hiddenHumanHexes,vaccinatedOccupiedHexes:a.hiddenVaccinatedHexes}),this.calcNewInfections(this.state))}else{if(a.humanCount>0){var R=a.humanOccupiedHexes;R.push(n),this.setState({humanOccupiedHexes:R.sort((function(e,t){return e-t})),humanCount:a.humanCount-1})}else if(a.vaccinatedCount>0){var M=a.vaccinatedOccupiedHexes;M.push(n),this.setState({vaccinatedOccupiedHexes:M.sort((function(e,t){return e-t})),vaccinatedCount:a.vaccinatedCount-1})}a.humanCount+a.vaccinatedCount===1&&setTimeout((function(){t.setState({whoseTurn:"Zombies",hiddenHumanHexes:a.humanOccupiedHexes,hiddenVaccinatedHexes:a.vaccinatedOccupiedHexes,humanOccupiedHexes:[],vaccinatedOccupiedHexes:[]})}),1500)}}}},{key:"start",value:function(){var e=this.state,t=e.vaccinatedCount,a=e.humanCount,n=e.zombieCount,i=[];i[0]={humanCount:a,vaccinatedCount:t,zombieCount:n,newInfections:n},this.setState({history:i,gameStarted:!0}),"auto"===e.mode&&(this.nextRound(i,!0),this.setState({whoseTurn:"wait"}))}},{key:"nextRound",value:function(e){var t=this.state;if((0!==t.humanCount||0!==t.vaccinatedCount)&&0!==t.zombieCount){var a=t.humanCount,n=t.zombieCount,i=t.vaccinatedCount,c=t.history;0===c.length&&(c=e);var o=this.autofillHumans(a,i,[],[],C(100)),l=o.humanOccupiedHexes,u=o.vaccinatedOccupiedHexes,r=this.autofillZombies(n,[],g(100),C(100)),s=r.zombieOccupiedHexes,m=r.zombieHeadHexes;this.calcNewInfections({humanCount:a,vaccinatedCount:i,zombieCount:n,humanOccupiedHexes:l,vaccinatedOccupiedHexes:u,zombieOccupiedHexes:s,history:c}),this.setState({humanOccupiedHexes:l.sort((function(e,t){return e-t})),vaccinatedOccupiedHexes:u,zombieHeadHexes:m,zombieOccupiedHexes:s})}}},{key:"autofill",value:function(){var e=this.state,t=e.whoseTurn;if("Humans"===t){for(var a=[],n=0;n<100;n++)e.humanOccupiedHexes.includes(n)||e.vaccinatedOccupiedHexes.includes(n)||a.push(n);this.autofillHumans(e.humanCount,e.vaccinatedCount,e.humanOccupiedHexes,e.vaccinatedOccupiedHexes,a)}else if("Zombies"===t){for(var i=[],c=0;c<100;c++)e.zombieOccupiedHexes.includes(c)||i.push(c);this.autofillZombies(e.zombieCount,e.zombieOccupiedHexes,e.zombieHeadHexes,i)}}},{key:"autofillHumans",value:function(e,t,a,n,i){for(var c=this,o=this.state,l=e,u=t,r=a,s=n,m=i,d=0;d<l;d++){var h=x(0,m.length-1),v=m[h];r.push(v),m=y(m,h)}if(o.vaccination)for(var f=0;f<u;f++){var p=x(0,m.length-1),b=m[p];s.push(b),m=y(m,p)}return"hotseat"===o.mode&&(l=0,this.setState({humanOccupiedHexes:r,vaccinatedOccupiedHexes:s,humanCount:l}),setTimeout((function(){c.setState({whoseTurn:"Zombies",hiddenHumanHexes:o.humanOccupiedHexes,hiddenVaccinatedHexes:o.vaccinatedOccupiedHexes,humanOccupiedHexes:[],vaccinatedOccupiedHexes:[]})}),1500)),{humanOccupiedHexes:r,vaccinatedOccupiedHexes:s}}},{key:"autofillZombies",value:function(e,t,a,n){var i=this.state,c=e,o=i.numZombieArms,u=t,r=n,s=a;return"random-head"===i.algorithm?function(){for(var e=function(e){if(0===r.length)return"break";var t,a=x(0,r.length-1),n=r[a],c=E(n),o=[],m=Object(l.a)(c);try{for(m.s();!(t=m.n()).done;){var d=t.value;u.includes(d)||o.push(d)}}catch(H){m.e(H)}finally{m.f()}for(var h=[],v=[],f=0;f<i.numZombieArms&&0!==o.length;f++)h[f]=x(0,o.length-1),v[f]=o[h[f]],o=y(o,h[f]);s[n]=v,u.push(n);for(var p=function(e){u.push(v[e]),r=y(r,r.findIndex((function(t){return t===v[e]})))},b=0;b<v.length;b++)p(b);r=y(r,r.findIndex((function(e){return e===n})))},t=0;t<c;t++){if("break"===e())break}}():"slide"===i.algorithm?function(){var e=[],t=!1;function a(){if(r.length>0){var n,i=x(0,r.length-1),c=r[i],m=E(c),d=[],h=Object(l.a)(m);try{for(h.s();!(n=h.n()).done;){var v=n.value;u.includes(v)||d.push(v)}}catch(q){h.e(q)}finally{h.f()}d.length<o?(e.push(c),r=y(r,r.findIndex((function(e){return e===c}))),a()):function(){for(var t=[],a=[],n=0;n<o&&0!==d.length;n++)t[n]=x(0,d.length-1),a[n]=d[t[n]],d=y(d,t[n]);s[c]=a,u.push(c);for(var i=function(t){u.push(a[t]),r.includes(a[t])?r=y(r,r.findIndex((function(e){return e===a[t]}))):e.includes(a[t])&&(e=y(e,e.findIndex((function(e){return e===a[t]}))))},l=0;l<a.length;l++)i(l);r=y(r,r.findIndex((function(e){return e===c})))}()}else if(e.length>0){var f=function(e){var t,a=e.length-1,n=0,i=[],c=Object(l.a)(e);try{for(c.s();!(t=c.n()).done;){var o=t.value;n=0,i=[];var u,r=E(o),s=Object(l.a)(e);try{for(s.s();!(u=s.n()).done;){var m=u.value;o!==m&&r.includes(m)&&(n++,i.push(m))}}catch(q){s.e(q)}finally{s.f()}if(n===a)return[o,i]}}catch(q){c.e(q)}finally{c.f()}return!1},p=function(e,t,a){var n,i=[e],c=!1;return function e(o){for(var l=0;l<t.length;l++){if(t[l]!==i[a-o]&&!c&&(i[a-o+1]=t[l],console.log(i,f(i),i.length===a+1),f(i)&&i.length===a+1)){n=f(i),c=!0;break}o>1&&e(o-1)}}(a),n},b=function(e,t,a,n,i){var c={suboptimalHexes:a,zombieHeadHexes:n,newHexPosition:e,currentArmHexes:i},u=function(e,t){var a=O(t)-O(e),n=z(t)-z(e),i=[];return a>0?i.push([e+10,"right"]):a<0&&i.push([e-10,"left"]),n>0?i.push([e+1,"down"]):n<0&&i.push([e-1,"up"]),console.log("currentHex:",e,"targetHex:",t),1===i.length?i[0]:2===i.length?Math.abs(a)>Math.abs(n)?i[0]:Math.abs(a)<Math.abs(n)?i[1]:i[x(0,1)]:void 0}(e,t),r=u[0],s=u[1];if(console.log("starting hex:",e,"target hex:",t,"selected hex:",r,"direction:",s),a.includes(r))c.suboptimalHexes.push(e),c.newHexPosition=r,c.suboptimalHexes=y(c.suboptimalHexes,c.suboptimalHexes.findIndex((function(e){return e===r}))),console.log("(hex was free)");else if(i.includes(r)){c.newHexPosition=r;var m=c.currentArmHexes.findIndex((function(e){return e===r}));c.currentArmHexes[m]=e,console.log("encountered an arm. now the arms are:",c.currentArmHexes)}else{var d=E(r);d.push(r);var h,v=Object(l.a)(d);try{for(v.s();!(h=v.n()).done;){var b=h.value;if(n[b]&&(b===r||n[b].includes(r))){console.log("selected zombie head:",b,"arms:",n[b]);var H=k(n[b]);H.push(b),"up"===s?H=H.sort((function(e,t){return e%10-t%10})):"down"===s?H=H.sort((function(e,t){return t%10-e%10})):"left"===s?H=H.sort((function(e,t){return e-t})):"right"===s&&(H=H.sort((function(e,t){return t-e}))),c.zombieHeadHexes[b]=0;var C=y(H,0);C.push(e),console.log("selectedZombieHexes:",H,"newZombieHexes:",C);var g=f(C);if(g)c.zombieHeadHexes[g[0]]=g[1],c.newHexPosition=H[0];else{console.log("couldn't arrange, trying to findViableZombie...");var w=p(e,H,o);c.zombieHeadHexes[w[0]]=w[1];var I,S=Object(l.a)(H);try{for(S.s();!(I=S.n()).done;){var N=I.value;if(w[0]!==N&&!w[1].includes(N)){c.newHexPosition=N;break}}}catch(q){S.e(q)}finally{S.f()}console.log("the new zombie has head",w[0],"and arms",w[1])}console.log("newHexPosition:",c.newHexPosition,"suboptimalHexes:",c.suboptimalHexes);break}}}catch(q){v.e(q)}finally{v.f()}}return c};console.log("Ran out of optimal hexes. trying to move these hexes together:",e);var H=x(0,e.length-1),C=e[H],g=[];e=y(e,H);for(var w=0;w<o&&e.length>0;w++){var I=x(0,e.length-1);g.push(e[I]),e=y(e,I)}console.log("//-----------------//------------------//","trying to connect arm hexes: ",g,"to chosen head hex:",C,"here are the subopt hexes:",e);var S=C,N=g,A=E(C),Z=g[0],j=k(g);j.push(C);for(var T=0;!f(j)&&T<1e3;){console.log("moving the head...");var R=b(S,Z,e,s,N);if(e=R.suboptimalHexes,s=R.zombieHeadHexes,A=E(S=R.newHexPosition),(j=k(N)).push(S),f(j))break;for(var M=0;M<N.length;M++)if(console.log("moving arm #",M,"which is hex#:",N[M],"toward currentHeadHex",S),!A.includes(N[M])){var V=b(N[M],S,e,s,N);if(e=V.suboptimalHexes,s=V.zombieHeadHexes,N[M]=V.newHexPosition,(j=k(N)).push(S),f(j))break}Z=N[0],A.includes(Z)&&(console.log("head hex",S,"is adjacent to old target ",Z),N.push(N[0]),N=N.slice(1,N.length)),console.log("new targetForHead:",Z),T++}if(T>=1e3)console.log("inf loop failure. could not connect arm hexes",N,"to current head hex",S),t=!0;else{if(!function(e,t){var a,n=Object(l.a)(e);try{for(n.s();!(a=n.n()).done;){var i=a.value;if(!t.includes(i))return!1}}catch(q){n.e(q)}finally{n.f()}return!0}(N,A)){var P=f(j);S=P[0],N=P[1]}console.log("success! our new zombie is at hex",S,"with arms at",N),s[S]=N}}else t=!0}for(var n=0;n<c&&!t;n++)a();u=[];for(var i=0;i<100;i++)s[i]&&(u.push(i),u=u.concat(s[i]))}():"slots"===i.algorithm&&function(){var e,t=[[[]],[[]],[[[19,[9,29]],[49,[39,59]],[79,[69,89]]],[[99,[]]]],[[]],[[]]];if(0===o)for(var a=0;a<100;a++)t[0][0][a]=[a,[]];else if(1===o)for(var n=0;n<50;n++)t[1][0][n]=[2*n,[2*n+1]];else if(2===o){e=1;for(var i=0;i<30;i++)t[2][0][i+3]=[e,[e-1,e+1]],(e+=3)%10===0&&e++}else if(3===o){e=1;for(var l=0;l<25;l++)t[3][0][l]=[e,[e-1,e+9,e+10]],((e+=2)-e%10)/10%2&&(e+=10)}else if(4===o){e=1;for(var r=0;r<20;r++)r<10?(t[4][0][r]=[e,[e-1,e+9,e+10,e+1]],((e+=5)-e%10)/10%2&&(e+=10)):(10===r&&(e=13),t[4][0][r]=[e,[e-1,e-10,e-9,e+1]],((e+=5)-e%10)/10%2||(e+=10))}for(var m=k(t[o][0]),d=0;d<c&&(console.log("placing zombie #",d),0!==m.length||t[o][1]);d++){0===m.length&&(m=t[o][1]);var h=x(0,m.length-1),v=m[h];console.log("chosen zombie:",v);var f=v[0],p=v[1];s[f]=p,u.push(f),u=u.concat(p),m=y(m,h)}}(),"hotseat"===i.mode&&(this.setState({whoseTurn:"wait",humanOccupiedHexes:i.hiddenHumanHexes,vaccinatedOccupiedHexes:i.hiddenVaccinatedHexes}),this.calcNewInfections(this.state)),this.setState({zombieHeadHexes:s,zombieOccupiedHexes:u,zombieCount:c}),{zombieHeadHexes:s,zombieOccupiedHexes:u}}},{key:"nextRoundHotseat",value:function(){0===this.state.humanCount&&0===this.state.vaccinatedCount||0===this.state.zombieCount||this.setState({whoseTurn:"Humans",humanOccupiedHexes:[],vaccinatedOccupiedHexes:[],zombieOccupiedHexes:[],zombieHeadHexes:[]})}},{key:"calcNewInfections",value:function(e){var t=this.state,a=t.roundsCompleted,n=t.vaccineEffectiveness,i=t.mortality,c=t.mortalityNum,o=e.history,u=o[a].humanCount,r=o[a].vaccinatedCount,s=o[a].zombieCount,m=e.humanOccupiedHexes,d=e.vaccinatedOccupiedHexes;"hotseat"===t.mode&&(m=t.hiddenHumanHexes,d=t.hiddenVaccinatedHexes);var h=e.zombieOccupiedHexes;i&&a>=c&&(s-=o[a-c].newInfections);var v,f=[],p=0,b=0,H=Object(l.a)(h);try{for(H.s();!(v=H.n()).done;){var x=v.value;if(m.includes(x)&&p++,d.includes(x))Math.random()>=n/100&&(b++,f.push(x))}}catch(y){H.e(y)}finally{H.f()}u-=p,r-=b,s+=p+b,o[++a]={humanCount:u,zombieCount:s,newInfections:p+b,vaccinatedCount:r},i&&a>=c&&0===(s-=o[a-c].newInfections)&&o.push({humanCount:u,zombieCount:0,newInfections:0,vaccinatedCount:r}),this.setState({zombieCount:s,humanCount:u,vaccinatedCount:r,roundsCompleted:a,history:o,infectedVaccinatedHexes:f,theGraph:this.createGraph(o,t.vaccination,i)})}},{key:"restart",value:function(){this.setState({roundsCompleted:0,humanOccupiedHexes:[],zombieOccupiedHexes:[],vaccinatedOccupiedHexes:[],zombieHeadHexes:g(100),humanCount:this.state.history[0].humanCount||50,vaccinatedCount:this.state.history[0].vaccinatedCount||0,zombieCount:this.state.history[0].zombieCount||1,history:[],gameStarted:!1,whoseTurn:"Humans",placeHeadOrArm:"head",currentHeadHex:0,numArmsRemaining:0,theGraph:null})}},{key:"render",value:function(){return i.a.createElement("div",{id:"outer"},i.a.createElement("div",{id:"main"},this.displayBoard(this.state),i.a.createElement("div",{id:"middle-div"},this.displayControls(this.state),this.displayStatusInfo(this.state)),i.a.createElement("div",{id:"data"},this.displayHistoryTable(this.state.history,this.state.gameStarted),this.state.theGraph)),i.a.createElement("label",{id:"reference"},"Based on a game concept by Jim Powell and Matt Lewis: ",i.a.createElement("a",{href:"https://digitalcommons.usu.edu/lemb/1/"},"https://digitalcommons.usu.edu/lemb/1/"),"."))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[171,1,2]]]);
//# sourceMappingURL=main.46216a71.chunk.js.map