// 1. Separate even numbers of an array

document.write("Separate even numbers of an array"+"<br>");
document.write("---------------------------------"+"<br>");

var a=[12,13,34,19,90,45];
document.write("The number of array elements are:"+a.length+"<br>");
document.write("The array elements are:"+a+"<br>");
for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        document.write(a[i]+"<br>");
    }
}
