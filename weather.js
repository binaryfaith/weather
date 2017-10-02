$(document).ready(function () {
    $('form').submit(function () {
        var apikey = `3868beeadc27ec5861beabecdfa8c2a4`;
        var location = $(`#location`).val();
        $.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&&appid=${apikey}`,
            function (res) {
                console.log(res);

                var typehtml = "<ul>";
                    typehtml +="<li>"+res.name,res.main.temp+"</li>";
                    typehtml += "</ul>"

                $("#return").html(
                    `
                    <li>${res.name}</li>
                    <li>Temperature ${(res.main.temp*9/5) - 459.67}</li>
                    `
        );}, 'json');
        return false;
    });
});
