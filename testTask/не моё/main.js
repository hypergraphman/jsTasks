var mainJS=function()
{var e=document.getElementsByClassName("accordeon-item"),
n=e.length,
a=function(a)
{for(var c=0;n>c;c++)e[c]===a?"accordeon-item"===a.className?a.className=
"accordeon-item active":a.className="accordeon-item":e[c].className=
"accordeon-item"},

c=function()
{for(var c=0;n>c;c++)
	{var t=e[c];t.addEventListener("click",function(e)
		{e.preventDefault(),a(this)})
}
},
	t=function(){c()};
	return{init:t}
}();
mainJS.init();