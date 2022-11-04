var ul=document.getElementById("list");

var li;
var addButton=document.getElementById("add");
addButton.addEventListener("click",addTodo);


var removeButton=document.getElementById("remove");
removeButton.addEventListener("click",removeTodo);


function addTodo(){
    var input=document.getElementById("input");
    var item=input.value;
    li=document.createElement("li");
     
    var textnode=document.createTextNode(item);
    if(item ==='')
    {  var para = document.createElement('h2');
      para.textContent="Enter todo";
      document.getElementById('list').appendChild(para);
        setTimeout(() => {
            document.getElementById('list').removeChild(para);
        }, 1500);
        // think of way such that enter to do fades away aftewr certain seconds
      
    }
    else{

        li=document.createElement("li");
        checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.setAttribute('id','check');

        var label=document.createElement('label');
        label.setAttribute('for','item');

      //  ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);


        setTimeout(() => {
            li.className="visual"
            
        }, 2);

        input.value='';
    }
    

}

function removeTodo(){
    li=ul.children;//refersw to children or the list (li tag present inside it)
    //first loop to access the list
    // second loop to access within the list
    for (let index = 0; index < li.length; index++) {
       while(li[index] && li[index].children[0].checked){ // removes elements which have been checked 
            ul.removeChild(li[index]);
            
        }
       // console.log(li[index].children);//do this will get reason

    }

        
    
}