(this.webpackJsonp18120082=this.webpackJsonp18120082||[]).push([[0],{14:function(e,t,n){},9:function(e,t,n){"use strict";n.r(t);var s=n(8),r=n(3),i=n(4),a=n(6),c=n(5),u=n(1),o=n.n(u),l=n(7),h=n.n(l),d=(n(14),n(0));function j(e){return Object(d.jsx)("button",{className:"square "+(e.isWinning?"square--winning":null),onClick:e.onClick,children:e.value})}var b=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"renderSquare",value:function(e){var t=this;return Object(d.jsx)(j,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},isWinning:this.props.winningSquares.includes(e)},"square"+e)}},{key:"renderSquares",value:function(e){for(var t=[],n=e;n<e+3;n++)t.push(this.renderSquare(n));return t}},{key:"renderRows",value:function(e){return Object(d.jsx)("div",{className:"board-row",children:this.renderSquares(e)})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[this.renderRows(0),this.renderRows(3),this.renderRows(6)]})}}]),n}(o.a.Component),v=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,isDescending:!0},s}return Object(i.a)(n,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();p(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n,location:[[1,1],[2,1],[3,1],[1,2],[2,2],[3,2],[1,3],[2,3],[3,3]][e]}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"sortHistory",value:function(){this.setState({isDescending:!this.state.isDescending})}},{key:"render",value:function(){var e,t=this,n=this.state.history,s=n[this.state.stepNumber],r=p(s.squares),i=n.map((function(e,s){var r=s?"Go to move #"+s+" at location ("+n[s].location+")":"Go to game start";return Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){return t.jumpTo(s)},children:s===t.state.stepNumber?Object(d.jsx)("b",{children:r}):r})},s)}));return e=r?"Winner: "+r.player+" at points "+r.line:s.squares.includes(null)?"Next player: "+(this.state.xIsNext?"X":"O"):"Draw",Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)("div",{className:"game-board",children:Object(d.jsx)(b,{squares:s.squares,onClick:function(e){return t.handleClick(e)},winningSquares:r?r.line:[]})}),Object(d.jsxs)("div",{className:"game-info",children:[Object(d.jsx)("div",{children:e}),Object(d.jsx)("ol",{children:this.state.isDescending?i:i.reverse()}),Object(d.jsxs)("button",{onClick:function(){t.sortHistory()},children:["Sort by: ",this.state.isDescending?"Descending":"Asending"]})]})]})}}]),n}(o.a.Component);function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(s.a)(t[n],3),i=r[0],a=r[1],c=r[2];if(e[i]&&e[i]===e[a]&&e[i]===e[c])return{player:e[i],line:[i,a,c]}}return null}h.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.d3a38929.chunk.js.map