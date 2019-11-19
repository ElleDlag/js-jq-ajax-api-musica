$(function(){
    $('button').click(function(){
        $.ajax({
            type: "GET",
            url: "https://flynn.boolean.careers/exercises/api/random/int",
            dataType: "json",
            success: function (dataRex) {
                var result = dataRex.response
                if (result % 2 == 0 ){
                    $('.pari-result').text(result)
                    var listText = $('.pari-result').text()
                    
                    $('.pari-list').text(listText + '<br>' + result)
                } else {
                    $('.dispari-result').text(result)
                }
                return countFill
            },
            error: function (dataRex) {
               alert('error')
            }
        })
    }) 
    
})