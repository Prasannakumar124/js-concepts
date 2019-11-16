var log=console.log;
let x=7;
let obj={
    prop1:1992,
    prop2:'prasanna',
    prop3(){
        document.writeln(obj.prop1+" "+obj.prop2);
    },
    prop4(val){
        this.prop1=val;
    },
    get data(){
        document.writeln(obj.prop1+" "+obj.prop2);

    },
    set data(content)
    {
        fulldata=content.split(' ');
        this.prop1=fulldata[0];
        this.prop2=fulldata[1];
    }
}
// obj.prop3();
// obj.prop4(1993);
// obj.prop3();
obj.data;
obj.data="1994 kumar";
obj.data;