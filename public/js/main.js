$('document').ready(function(){
    $('.serviceName').on('change',function(){
        var form = $(this).parent();
        var type = $(this).val();
        console.log(type);
        var option = form[0].childNodes[5];
        $(option).empty();
        if (type == "fuel"){
            var fuelType = '<select class="form-select" name="fuelId"><option value="1">Plus</option><option value="2">Regular</option><option value="3">Premium</option><option value="4">Diesel</option></select>';
            console.log(form[0].childNodes[5]);
            $(option).prepend("<p>Fuel Type:</p>");
            $(option).append(fuelType);
        } else if (type == "oil"){
            var oilType = '<select class="form-select" name="oilId"><option value="1">0W-40</option><option value="2">0W-30</option><option value="3">5W-40</option><option value="4">5W-30</option><option value="5">10W-30</option><option value="6">15W-40</option><option value="7">10W-40</option><option value="8">20W-50</option></select>';
            $(option).prepend("<p>Oil Weight:</p>");
            $(option).append(oilType);
        }
    });
});
