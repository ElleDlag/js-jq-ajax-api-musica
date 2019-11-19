$(function() {
    var source   = document.getElementById("tmpl-disco").innerHTML;
    var tmplDisco = Handlebars.compile(source);
    var discoinfo;
    $.ajax({
        type: "GET",
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        dataType: "json",
        success: function (dataRex) {
            var partResult = dataRex.response
            partResult.forEach(function (el) {
                for(result in el){
                        discoinfo = tmplDisco({
                        'poster': el.poster,
                        'title': el.title,
                        'author': el.author,
                        'genre': el.genre,
                        'year': el.year,
                        })
                    }
                    $('.final').append(discoinfo)
            }); 
        },
        error: function (dataRex) {
           alert('error')
        }
    })
}) //end here