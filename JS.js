let t="";
function R()
{
  t = t.slice(0, -1);
  document.getElementById("input").value=t;
}
function update(val)
{
  t+=val;
  document.getElementById("input").value=t;
}
function evaluateMath(expr) {
  return Function("return " + expr)();
}
function Equals()
{
  if(/[a-zA-Z]/.test(t))
  {
    document.getElementById("input").value="Syntax Error";
    t="";
    return;
  }
  try
  {
  document.getElementById("input").value=evaluateMath(t);
  t = "";
  }
  catch{
    document.getElementById("input").value="Error";
    t="";
  }
}
function clearI()
{
  t="";
  document.getElementById("input").value="";
}
