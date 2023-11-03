function outer() {
    let name = 'rakesh';
    function inner() {
        console.log(name); // name value sbse phle outer function me check krta h fir retrun se phle kch change h varivle me to wo check krta h uske baad same function (inner function) me check krta h variable;
    }
    name = "pulkit";
    inner();
}
outer();