var obj=[
    {
        id : "001",
        name : "apple",
        category : "fruit",
        color : "red"
    },
    {
        id : "002",
        name : "melon",
        category : "fruit",
        color : "green"
    },
    {
        id : "003",
        name : "banana",
        category : "fruit",
        color : "yellow"
    }
]
var tbl=$("<table/>").attr("id","mytable");
$("#div1").append(tbl);
for(var i=0;i<obj.length;i++)
{
    var tr="<tr>";
    var td1="<td>"+obj[i]["id"]+"</td>";
    var td2="<td>"+obj[i]["name"]+"</td>";
    var td3="<td>"+obj[i]["color"]+"</td></tr>";

   $("#mytable").append(tr+td1+td2+td3); 

}   