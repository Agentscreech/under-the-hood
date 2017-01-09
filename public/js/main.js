$('document').ready(function(){
    $('.serviceForm').hide();
    $('.addLog').click(function(){
        var form = ($(this).parent());
        console.log(form);
        var fields = form[0].children[1];
        console.log(fields);
        $('.serviceSelection .serviceForm').show();
        $('.addLog').hide();
    });
    $('.cancel').click(function(){
        $('.serviceForm').hide();
        $('.addLog').show();
    });

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
        } else if (type == "wipers"){
            var wiperLength = '<select class="form-select" name="wiperId"><option value="1">10</option><option value="2">11</option><option value="3">12</option><option value="4">13</option><option value="5">14</option><option value="6">15</option><option value="7">16</option><option value="8">17</option><option value="9">18</option><option value="10">19</option><option value="11">20</option><option value="12">21</option><option value="13">22</option><option value="14">23</option><option value="15">24</option><option value="16">25</option><option value="17">26</option><option value="18">27</option><option value="19">28</option><option value="20">29</option><option value="21">30</option></select>';
            $(option).prepend("<p>Wiper Length:</p>");
            $(option).append(wiperLength);
        } else if (type == "other"){
            var other = '<input'
        }
    });
});
