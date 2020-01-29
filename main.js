let numArrayObj=[];
numArrayObj[0]=1;
numArrayObj[1]=3;
numArrayObj[2]=2;
numArrayObj[3]=4;
numArrayObj[4]=7;

for(let num of numArrayObj){
    console.log(num);
}
let numArrayObj1=new Array();
numArrayObj1.push(1,3,2,4);

for(let num of numArrayObj1){
    console.log(num);
}

let arrayObj=new Array();
    arrayObj.push(1);
    arrayObj.push("tushar");
    arrayObj.push(false);
    arrayObj.push(numArrayObj);
    arrayObj.push(numArrayObj1);

    for(let value of arrayObj){
        console.log(value);

        if(typeof(value)==="object"){
            for(let num of value){
              console.log(num);
            }
        }
    }

