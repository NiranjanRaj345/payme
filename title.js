let docTitle = site. title;

window. addEventListener("blur", () => {site.title = "Come Back :("; }); 
window. addeventListener("focus", () =>{site.title = docTitle;});