(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],[,,,,,function(s,e,t){},,,,,,,,function(s,e,t){},function(s,e,t){},,function(s,e,t){},function(s,e,t){"use strict";t.r(e);var C=t(1),i=t(6),n=t.n(i),o=t(7),a=t(8),c=(t(13),t(14),t(5),t(0));var r=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"circle"})})};var R=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"cross"})})};var S=function(s){var e=s.position,t=s.value,C=s.takeTurn;return Object(c.jsxs)("div",{className:"square",onClick:function(){"EMPTY"===t&&C(e)},children:["CIRCLE"===t&&Object(c.jsx)(r,{}),"CROSS"===t&&Object(c.jsx)(R,{})]})};t(16);var O=function(s){var e=s.winners;return Object(c.jsxs)("div",{className:"resualt",children:["CIRCLE"===e&&Object(c.jsx)(r,{}),"CROSS"===e&&Object(c.jsx)(R,{})]})};var j=function(){var s=Object(C.useState)({player:"CIRCLE",positions:["EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY"]}),e=Object(a.a)(s,2),t=e[0],i=e[1];function n(s){var e=Object(o.a)(t.positions);e[s]=t.player,i({player:"CIRCLE"===t.player?"CROSS":"CIRCLE",positions:e})}console.log(t.player);var r,R="CIRCLE"===(r=t.positions)[0]&&"CIRCLE"===r[1]&&"CIRCLE"===r[2]||"CIRCLE"===r[3]&&"CIRCLE"===r[4]&&"CIRCLE"===r[5]||"CIRCLE"===r[6]&&"CIRCLE"===r[7]&&"CIRCLE"===r[8]||"CIRCLE"===r[0]&&"CIRCLE"===r[3]&&"CIRCLE"===r[6]||"CIRCLE"===r[1]&&"CIRCLE"===r[4]&&"CIRCLE"===r[7]||"CIRCLE"===r[2]&&"CIRCLE"===r[5]&&"CIRCLE"===r[8]||"CIRCLE"===r[0]&&"CIRCLE"===r[4]&&"CIRCLE"===r[8]||"CIRCLE"===r[2]&&"CIRCLE"===r[4]&&"CIRCLE"===r[6]?"CIRCLE":"CROSS"===r[0]&&"CROSS"===r[1]&&"CROSS"===r[2]||"CROSS"===r[3]&&"CROSS"===r[4]&&"CROSS"===r[5]||"CROSS"===r[6]&&"CROSS"===r[7]&&"CROSS"===r[8]||"CROSS"===r[0]&&"CROSS"===r[3]&&"CROSS"===r[6]||"CROSS"===r[1]&&"CROSS"===r[4]&&"CROSS"===r[7]||"CROSS"===r[2]&&"CROSS"===r[5]&&"CROSS"===r[8]||"CROSS"===r[0]&&"CROSS"===r[4]&&"CROSS"===r[8]||"CROSS"===r[2]&&"CROSS"===r[4]&&"CROSS"===r[6]?"CROSS":void 0;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"player",children:[" Playe : ",t.player]}),Object(c.jsxs)("div",{className:"total",children:[Object(c.jsx)(S,{position:0,value:t.positions[0],takeTurn:n}),Object(c.jsx)(S,{position:1,value:t.positions[1],takeTurn:n}),Object(c.jsx)(S,{position:2,value:t.positions[2],takeTurn:n}),Object(c.jsx)(S,{position:3,value:t.positions[3],takeTurn:n}),Object(c.jsx)(S,{position:4,value:t.positions[4],takeTurn:n}),Object(c.jsx)(S,{position:5,value:t.positions[5],takeTurn:n}),Object(c.jsx)(S,{position:6,value:t.positions[6],takeTurn:n}),Object(c.jsx)(S,{position:7,value:t.positions[7],takeTurn:n}),Object(c.jsx)(S,{position:8,value:t.positions[8],takeTurn:n})]}),Object(c.jsxs)("div",{className:"caption",children:["Winner : ",R&&Object(c.jsx)(O,{winners:R})]})]})};n.a.render(Object(c.jsx)(j,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.cb256982.chunk.js.map