let docTitle = document. title;

window. addEventListener("blur", () => {document.title = "Come Back :("; }); 
window. addeventListener("focus", () =>{document.title = docTitle;});