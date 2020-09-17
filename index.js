arr = [1,2,3,4,5,6,7,8,9,10];

function convert(array){
    var x;
    var y = [];
    array.forEach((v, k) => {
      x = {key: k, value: v}
      y.push(x);
    });
    console.log(JSON.stringify(y));
}
convert(arr);