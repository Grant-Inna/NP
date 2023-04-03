$(document).ready(function() {
  
    let $region = $('#region'),
        $object = $('#object');
    
    $region.select2({
        data: region,
    });
    $region.on('select2:select', function (e) {
        let data = e.params.data;

        let id = data.geoname_id,
            name = data.name;
        console.log(id);
        console.log(name);
    });
    
    $object.select2({
        data: object
    });
    $object.on('select2:select', function (e) {
        let data = e.params.data;

        let id = data.geoname_id,
            name = data.name;
        console.log(id);
        console.log(name);
    });
});
