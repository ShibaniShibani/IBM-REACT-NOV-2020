function add(){
    var s =0;
    
    for(var i= 0 ; i<arguments.length;i++){
         s = s+arguments[i]    
    }
        return s;
}

console.log(add(1,2))
