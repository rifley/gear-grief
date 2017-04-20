
var currentBike = [];
function BikeData() {

}
  BikeData.prototype.getData = function(type, location) {
    $.get('https://bikeindex.org:443/api/v3/search?page=2&per_page=25&manufacturer=' + type + '&location=' + location + '&distance=1&stolenness=proximity')
    .then(function(response) {
       for (var i = 0; i < response.bikes.length; i++) {
         <table>
             <tr>
            $("#bikesLocal").append(response.bikes[i].stolen_location);
            $("#bikesColor").append(response.bikes[i].frame_colors[0]);
            $("#bikesYear").append(response.bikes[i].year);
            $("#bikesModel").append(response.bikes[i].frame_model);
             </tr>
         </table>
        console.log(i);
      }
    });
  };

exports.thingy = BikeData;


// ('https://bikeindex.org:443/api/v3/search?page=2&per_page=25&manufacturer=Schwinn&location=97224&distance=10&stolenness=stolen')
