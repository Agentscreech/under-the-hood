$('document').ready(function() {
    $('.addLog').click(function() {
        var form = ($(this).parent());
        // console.log(form);
        var type = form[0].children[1];
        // console.log(type);
        $(type).empty();
        $(type).append('<p>Service Type:</p>');
        $(type).append('<select class="form-select serviceName" name="services"><option>Select Type</option></select>');
        $(type).append('<div class="option"></div>');
        $(type).append('<p>Cost:</p>');
        $(type).append('<input class="form-control" type="text" name="cost" placeholder="19.99"></input>');
        $(type).append('<p>Mileage:</p>');
        $(type).append('<input class="form-control" type="text" name="mileage" placeholder="804450"></input>');
        $(type).append('<button type="submit" class="btn btn-primary">Add</button>');
        $(type).append('<button type="button" class="btn btn-warning cancel">Cancel</button>');

        $.get('profile/form-data/services').done(function(services) {
            services.forEach(function(service) {
                $('.serviceName').append("<option value =" + service.id + ">" + service.name + "</option>");
            });
        });
        var fields = form[0].children[1];
        $(fields).show();
        $('.addLog').hide();
    });
    $('.serviceForm').on('click', '.cancel', function() {
        $('.serviceForm').hide();
        $('.addLog').show();
    });

});
$('.serviceForm').on('change', '.serviceName', function() {
    var form = $(this).parent();
    // console.log(form);
    var type = $(this).find('option:selected').text();
    var option = form[0].childNodes[2]; //this should target the option div for active car only
    // console.log(option);
    $(option).empty();
    if (type == "fuel") {
        $.get('profile/form-data/' + type).done(function(fuel) {
            $(option).prepend('<select class="form-select submenu" name="fuelId"></select>');
            $(option).prepend("<p>Fuel Type:</p>");
            fuel.forEach(function(item) {
                $('.submenu').append("<option value=" + item.id + ">" + item.grade + "</option>");
            });
        });
    } else if (type == "oil") {
        $.get('profile/form-data/' + type).done(function(oil) {
            $(option).prepend('<select class="form-select submenu" name="oilId"></select>');
            $(option).prepend("<p>Oil Type:</p>");
            oil.forEach(function(item) {
                $('.submenu').append("<option value=" + item.id + ">" + item.weight + "</option>");
            });
        });
    } else if (type == "wiper") {
        $.get('profile/form-data/' + type).done(function(wiper) {
            $(option).prepend('<select class="form-select submenu" name="wiperId"></select>');
            $(option).prepend("<p>Wiper Length Type:</p>");
            wiper.forEach(function(item) {
                $('.submenu').append("<option value=" + item.id + ">" + item.length + "</option>");
            });
        });
    } else if (type == "other") {
        $(option).prepend('<input class="form-control" type="text" name="other" placeholder="coolant flush"></input>');
        $(option).prepend('<p>Other:</p>');
    }
});

// function drawOptions(option){
// option.forEach(function(item){
//     $(option).append("<option value="+item.id+">"+item.name+"</option>");
// });
// }
