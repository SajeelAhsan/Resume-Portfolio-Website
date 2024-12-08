var tablinks= document.getElementsByClassName("tab-link");
var tabcontents= document.getElementsByClassName("tab-content");
export function opentab(tabname)
{
  for(tablinks of tablinks)
  {
    tablinks.classList.remove("active-link")
  }
  for(tabcontents of tabcontents)
  {
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab")
}