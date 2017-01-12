$(document).ready(function() {

    // draws form to add service
    $('.addLog').click(function() {
        var form = ($(this).parent());
        // console.log(form);
        var type = form[0].children[2]; //this gets the options div for just the car we are working on
        // console.log(type);
        $(type).empty();
        $(type).append('<p>Service Type:</p>');
        $(type).append('<select class="form-select serviceName" name="serviceId"><option>Select Type</option></select>');
        $(type).append('<div class="option"></div>');
        $(type).append('<p>Cost:</p>');
        $(type).append('<input class="form-control" type="text" name="cost" placeholder="19.99"></input>');
        $(type).append('<p>Mileage:</p>');
        $(type).append('<input class="form-control" type="text" name="mileage" placeholder="804450"></input>');
        $(type).append('<p>Notes:</p>');
        $(type).append('<input class="form-control" type="text" name="notes" placeholder="place was closed Sundays"></input>');
        $(type).append('<button type="submit" class="btn btn-success">Add</button>');
        $(type).append('<button type="button" class="btn btn-warning cancel">Cancel</button>');

        $.get('profile/form-data/services').done(function(services) {
            services.forEach(function(service) {
                $('.serviceName').append("<option value =" + service.id + ">" + service.name + "</option>");
            });
        });
        //hide the non active buttons
        var fields = form[0].children[2];
        $(fields).show();
        $('.addLog').hide();
        $('.showLog').hide();
    });
    // reveals all non active buttons
    $('.serviceForm').on('click', '.cancel', function() {
        $('.serviceForm').hide();
        $('.addLog').show();
        $('.showLog').show();
    });



});

//draws extra options in a drop down if any
$('.serviceForm').on('change', '.serviceName', function() {
    var form = $(this).parent();
    // console.log(form);
    var type = $(this).find('option:selected').text();
    var option = form[0].childNodes[2]; //this should target the option div for active car only
    // console.log(option);
    $(option).empty();
    if (type == "fuel") {
        $.get('profile/form-data/' + type).done(function(fuel) {
            $(option).prepend('<select class="form-select submenu" name="option"></select>');
            $(option).prepend("<p>Fuel Type:</p>");
            fuel.forEach(function(item) {
                $('.submenu').append("<option value=" + item.grade + ">" + item.grade + "</option>");
            });
        });
    } else if (type == "oil") {
        $.get('profile/form-data/' + type).done(function(oil) {
            $(option).prepend('<select class="form-select submenu" name="option"></select>');
            $(option).prepend("<p>Oil Type:</p>");
            oil.forEach(function(item) {
                $('.submenu').append("<option value=" + item.weight + ">" + item.weight + "</option>");
            });
        });
    } else if (type == "wiper") {
        $.get('profile/form-data/' + type).done(function(wiper) {
            $(option).prepend('<select class="form-select submenu" name="option"></select>');
            $(option).prepend("<p>Wiper Length Type:</p>");
            wiper.forEach(function(item) {
                $('.submenu').append("<option value=" + item.length + ">" + item.length + "</option>");
            });
        });
    } else if (type == "other") {
        $(option).prepend('<input class="form-control" type="text" name="other" placeholder="coolant flush"></input>');
        $(option).prepend('<p>Other:</p>');
    }
});


//ajax routes

//delete service log
$('.delete-link').on('click', function(e) {
    e.preventDefault();
    console.log('delete pressed');
    var element = $(this);
    var service = element.attr('href');
    console.log(service);
    $.ajax({
        method: 'DELETE',
        url: service
    }).done(function(data) {
        // get data returned from the DELETE route
        console.log(data);

        // do stuff when the DELETE action is complete
        // element.remove();

        // or, you can redirect to another page
        window.location.reload();
    });
});


//edit service log
$('.update-log').on('submit', function(e) {
  e.preventDefault();
  var logElement = $(this);
  var logUrl = logElement.attr('action');
  var logData = logElement.serialize();
  console.log(logUrl);
  console.log(logData);
  $.ajax({
    method: 'PUT',
    url: logUrl,
    data: logData
  }).done(function(data) {
    // get data returned from the PUT route
    console.log(data);

    // do stuff when the PUT action is complete
    // teamElement.remove();

    // or, you can redirect to another page
    window.location.reload();
  });
});

//draw new car options

$('#newCar').on('click', function(){
    $('#addCarForm').empty();
    $('#addCarForm').append('<form class="form-control" action="profile/car/new" id="carForm" method="post"></form>');
    $('#carForm').append('<label for="year">Select Model Year: </label>');
    $('#carForm').append('<select id="carYear" class="form-select" name="year"></select>');
    $('#carYear').append('<option>Select year</option>');
    drawYearOptions();
});



function drawYearOptions(){
    var date = new Date().getFullYear();
    for (var i = date; i > 1989 ;i--){
        $('#carYear').append('<option value='+i+'>'+i+'</option>');
    }

}

//when you select year
$('#addCarForm').on('change', '#carYear', function(e){
    $('#carYear').nextAll().remove();
    $('#carMake').remove();
    $('#carModel').remove();
    var year = ($('#carYear').val());
    // var getYear = 'http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&year='+year+'&api_key=zw4dk88j42j7keu9zeuseebm';
    $.get('/year').done(function(res){
        console.log(res);
        var makes = res.makes;
        $('#carForm').append('<label for="make">Select Make:</label>');
        $('#carForm').append('<select id="carMake" class="form-select" name="make"></select>');
        $('#carMake').append('<option>Select Make</option>');
        drawMakes(makes);
        //when you select the make
        $('#addCarForm').on('change', '#carMake', function(e1){
            $('#carMake').nextAll().remove();
            $('#carModel').remove();
            var make = $('#carMake').val();
            var makeNice = makes[make].niceName;
            console.log(makes[make]);
            $('#carForm').append('<label for="model">Select Model:</label>');
            $('#carForm').append('<select id="carModel" class="form-select" name="model"></select>');
            $('#carModel').append('<option>Select Model</option>');
            drawModels(makes[make].models);
            $('#addCarForm').on('change', '#carModel', function(e2){
                $('#carModel').nextAll().remove();
                $('#carStyle').remove();
                var model = $('#carModel').val();
                var modelNice = makes[make].models[model].niceName;
                console.log(makes[make].models[model]);
                $('#carForm').append('<label for="style">Select Style:</label>');
                $('#carForm').append('<select id="carStyle" class="form-select" name="style"></select>');
                $('#carStyle').append('<option>Select Style</option>');
                // var getStyle = 'https://api.edmunds.com/api/vehicle/v2/'+makeNice+'/'+modelNice+'/'+year+'/styles?fmt=json&api_key=zw4dk88j42j7keu9zeuseebm&view=full';
                $.get('/style').done(function(stylesList){
                    styles = stylesList.styles;
                    console.log(styles);
                    drawStyles(styles);
                });
            });
        });
    });
});
//when you select the model (next API call)



function drawMakes(makes){
    var makeList = {};
    makes.forEach(function(make, index){
        makeList[make.name] = index;
    });
    for(var make in makeList){
        $('#carMake').append('<option value='+makeList[make]+'>'+make+'</option>');
    }
}
function drawModels(models){
    var modelList = {};
    models.forEach(function(model, index){
        modelList[model.name] = index;
    });
    for(var model in modelList){
        $('#carModel').append('<option value='+modelList[model]+'>'+model+'</option>');
    }
}
function drawStyles(styles){
    var styleList = {};
    styles.forEach(function(style, index){
        $('#carStyle').append('<option value='+index+'>'+style.name+'</option>');
    });
    
}

//when you select makes



// function drawOptions(option){
// option.forEach(function(item){
//     $(option).append("<option value="+item.id+">"+item.name+"</option>");
// });
// }
// else if (type == "tire"){
//     $.get('profile/form-data/' + type).done(function(tires){
//         $(option).prepend('<select class="form-select submenu" name="rim"></select>');
//         $(option).prepend('<select class="form-select submenu" name="height"></select>');
//         $(option).prepend('<select class="form-select submenu" name="width"></select>');
//         $(option).prepend('<p>Tire Size</p>');
//         tires.forEach(function(tire){
//             $('.submenu[name="width"]').append("<option value="+item.id);
//         });
//
//     });
