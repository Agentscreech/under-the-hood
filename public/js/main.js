$('document').ready(function(){
    $('.serviceForm').hide();
    $('.addLog').click(function(){
        var form = ($(this).parent());
        // console.log(form);
        var type = form[0].children[1];
        // console.log(type);
        $(type).prepend('<select class="form-select serviceName" name="services"><option>Select Type</option></select>');
        $(type).prepend('<p>Service Type:</p>');
        $.get('profile/form-data/services').done(function(services){
            services.forEach(function(service){
                $('.serviceName').append("<option value ="+service.id+">"+service.name+"</option>");
            });
        });
        var fields = form[0].children[1];
        $(fields).show();
        $('.addLog').hide();
    });
    $('.cancel').click(function(){
        $('.serviceForm').hide();
        $('.addLog').show();
    });

});
$('.serviceForm').on('change', '.serviceName',function(){
    console.log('chanage detected');
    var form = $(this).parent();
    console.log(form);
    var type = $(this).find('option:selected').text();
    var option = form[0].childNodes[5];
    $(option).empty();
    if (type == "fuel"){
        $.get('profile/form-data/'+type).done(function(fuel){
            $(option).append("<p>Fuel Type:</p>");
            $(option).append('<select class="form-select submenu" name="fuelId"></select>');
            fuel.forEach(function(item){
                $('.submenu').append("<option value="+item.id+">"+item.grade+"</option>");
            });
        });
        // } else if (type == "oil"){
        //     var oilType = '<select class="form-select" name="oilId"><option value="1">0W-40</option><option value="2">0W-30</option><option value="3">5W-40</option><option value="4">5W-30</option><option value="5">10W-30</option><option value="6">15W-40</option><option value="7">10W-40</option><option value="8">20W-50</option></select>';
        //     $(option).prepend("<p>Oil Weight:</p>");
        //     $(option).append(oilType);
        // } else if (type == "wipers"){
        //     var wiperLength = '<select class="form-select" name="wiperId"><option value="1">10</option><option value="2">11</option><option value="3">12</option><option value="4">13</option><option value="5">14</option><option value="6">15</option><option value="7">16</option><option value="8">17</option><option value="9">18</option><option value="10">19</option><option value="11">20</option><option value="12">21</option><option value="13">22</option><option value="14">23</option><option value="15">24</option><option value="16">25</option><option value="17">26</option><option value="18">27</option><option value="19">28</option><option value="20">29</option><option value="21">30</option></select>';
        //     $(option).prepend("<p>Wiper Length:</p>");
        //     $(option).append(wiperLength);
        // } else if (type == "other"){
        //     var other = '<input'
    }
});

// function drawOptions(option){
    // option.forEach(function(item){
    //     $(option).append("<option value="+item.id+">"+item.name+"</option>");
    // });
// }
