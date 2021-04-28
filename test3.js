
var dataUrl = "https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=a3e2b221-75e0-45c1-8f97-75acbd43d613"; 
    var data = $.getJSON(dataUrl); 
    data.done( function( msg ){ 
        $.each(msg.result.results, function(key,val){
            console.log(1)
            $("#contain").append($("<h2/>").text(val['\ufeffA_Name_Ch']))
            $("#contain").append($("<h3/>").text(val['A_Behavior']))
            if(val['A_Pic01_URL']){
                $("#contain").append($("<img/>").attr("src",val['A_Pic01_URL']))
            }
        })
    }); 
    data.fail( function( msg ) { 
        $('#contain').html('failed get data!')
    });