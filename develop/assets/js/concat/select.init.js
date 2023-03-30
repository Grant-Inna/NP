$(document).ready(function() {
  
    let $region = $('#region'),
        $object = $('#object');
    
    $region.select2({
        data: region,
    });
    $region.on('select2:select', function (e) {
        let data = e.params.data;

        let id = data.id,
            text = data.text;
        console.log(id);
        console.log(text);
    });
    
    $object.select2({
        data: object
    });
    $object.on('select2:select', function (e) {
        let data = e.params.data;

        let id = data.id,
            text = data.text;
        console.log(id);
        console.log(text);
    });
});
