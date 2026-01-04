let t="";
function update()
{
  t+=document.getElementById("input").value;
}
function evaluateMath(expr) {
  return Function("return " + expr)();
}
function Equals()
{
  let e=document.getElementById("input");
  e.innerHtML=`$(evaluateMath(t));
}
