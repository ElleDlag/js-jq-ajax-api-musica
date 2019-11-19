$(function(){
    $('.btn-start').click(function(){
        $('.nome-list').text("")
        var i = 0;
        var myArray = []
        var myList = setInterval(function(){
            $.ajax({
                type: "GET",
                url: "https://flynn.boolean.careers/exercises/api/random/name",
                dataType: "json",
                success: function (dataRex) {
                    var result = dataRex.response
                    $('.nome-result').text(result)
                    var oldList = $('.nome-list').text()
                    $('.nome-list').append(result + '<br>')
                    myArray.push(result)
                    console.log(myArray)
                        
                    i++;
                    if(i==10 ){
                        $('form').css('display', 'block')
                        clearInterval(myList)
                    }
                },
                error: function (dataRex) {
                    clearInterval(myList)
                    alert('something wrong')
                }
            })
            
        },250)
        $('.btn-check').click(function(){
            if(myArray.includes($('.input-name').val())){
                alert('CI Sei!!!')
            } else {alert('Vattene!!!')}
        })
        
        
    }) 
    
})