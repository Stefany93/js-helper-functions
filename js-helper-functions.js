
/*
    Checks if an argument is supplied to a function.
*/
function argumentsSupplied(argument)
{
    if(argument == undefined)
    {
        return false;
    }
    return true;
}
/*
    Checks if a class exists in the document.
*/
function classExists(class_name)
{
    if (document.querySelector('.'+class_name) == null) 
    {
      return false;
    }
    return true;
}

/*
    Returns as a collection all the nodes with the class name after going
    through checks of arguments suppilied & existence of the class.
*/
function fetchClasses(class_name)
{
    if(argumentsSupplied(class_name) == false)
    {
        console.log('Function ' + this.constructor.name + ' requires an argument');
    }
    if(!classExists(class_name))
    {
        console.log('Class name of ' + class_name + ' does not exist!');
    }

    return classes = document.getElementsByClassName(class_name);
}


            