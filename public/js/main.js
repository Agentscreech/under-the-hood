$('document').ready(function(){
    $('.serviceName').on('change',function(){
        var form = $(this).parent();
        var type = $(this).val();
        console.log(type);
        if (type == "fuel"){
            var fuelType = '<select class="form-select" name="fuelId"><option value="1">Plus</option><option value="2">Regular</option><option value="3">Premium</option><option value="4">Diesel</option></select>';
            console.log(form[0].childNodes[5]);
            var option = form[0].childNodes[5];
            $(option).prepend("<p>Fuel Type:</p>");
            $(option).append(fuelType);
        }
    });
});
