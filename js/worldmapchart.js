function cleanDiv() {
    $('#map-nation-title').empty()
    $('#barchart-nation-title').empty()
    $('#line-nation-title').empty()
    $('#barchart-parent').empty();
    $('#parent-1').empty();
    $('#parent-1').empty();  
    $('#mapchart-parent').empty();
    $('#mapchart-parent').append('<div id="mapchartdiv"></div><div class="card"><div class="card-body"><h3 class="card-title">Download datasets used in this visualization</h3><a class="btn btn-primary" href="datasets/malnutrition.zip" download>Download .zip file (.csv, .json)</a></div></div>')
}



function mapChartButton() {
  $('#mapchartdropdowns').empty()
  $('#mapchartdropdowns').append(`
  <h4 id="map-nation-title">Conditions in the World</h4>
  <div class="row">
  <div class="col-6">
  <div class="dropdown">
    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown"
      aria-haspopup="true" aria-expanded="false">
      Choose malnutrition type
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
      <button onclick="getYears('severe-wasting')" class="dropdown-item" type="button">Severe Wasting</button>
      <button onclick="getYears('wasting')" class="dropdown-item" type="button">Wasting</button>
      <button onclick="getYears('stunting')" class="dropdown-item" type="button">Stunting</button>
      <button onclick="getYears('underweight')" class="dropdown-item" type="button">Underweight</button>
      <button onclick="getYears('overweight')" class="dropdown-item" type="button">Overweight</button>
    </div>
  </div>
</div>
<div class="col-6">  
<div id="years-button"></div>
</div>
</div>
<div id="mapchart-parent">
</div>`);
getGraph('severe-wasting', "2010")
}

function getYears(option) {
    $('#years-button').empty()
    $('#years-button').append(`
    <div class="dropdown">
    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Choose year
    </button>
    <div id="years" class="dropdown-menu" aria-labelledby="dropdownMenu2">
  
    </div>
  </div>`)
    $.getJSON('js/graph-malnutritions.json',function(jsondata){
      var years = Object.keys(jsondata[option])
      console.log(years, option)
      $.each(years, function(idx, y) {
        $('#years').append(`
        <button onclick="getGraph('${option}', '${y}');" class="dropdown-item" type="button">${y}</button>
        `)
      })
    })
  }


  
  
  function getGraph(option, year) {
    cleanDiv()
    nationTitleMap(option, year)
    $.getJSON('js/graph-malnutritions.json',function(clusters){
    var root = am5.Root.new("mapchartdiv");
  
  
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
  
  
    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    var chart = root.container.children.push(am5map.MapChart.new(root, {
      panX: "rotateX",
      panY: "rotateY",
      projection: am5map.geoOrthographic()
    }));
  
  
    // Create series for background fill
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    var backgroundSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {})
    );
    backgroundSeries.mapPolygons.template.setAll({
      fill: root.interfaceColors.get("alternativeBackground"),
      fillOpacity: 0.1,
      strokeOpacity: 0
    });
    backgroundSeries.data.push({
      geometry:
        am5map.getGeoRectangle(90, 180, -90, -180)
    });
  
  
    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow 
    }));
    polygonSeries.mapPolygons.template.setAll({
      fill: root.interfaceColors.get("alternativeBackground"),
      fillOpacity: 0.15,
      strokeWidth: 0.5,
      stroke: root.interfaceColors.get("background")
    });
  
  
    // Create polygon series for projected circles
    var circleSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
    circleSeries.mapPolygons.template.setAll({
      templateField: "polygonTemplate",
      tooltipText: "{name}:{value}"
    });
  
    // Define data
    var colors = am5.ColorSet.new(root, {});
  
    var data = clusters[option][year]
    console.log(data)
    var valueLow = Infinity;
    var valueHigh = -Infinity;
  
    for (var i = 0; i < data.length; i++) {
      var value = data[i].value;
      if (value < valueLow) {
        valueLow = value;
      }
      if (value > valueHigh) {
        valueHigh = value;
      }
    }
  
    // radius in degrees
    var minRadius = 0.5;
    var maxRadius = 3;
  
    // Create circles when data for countries is fully loaded.
    polygonSeries.events.on("datavalidated", function () {
      circleSeries.data.clear();
  
      for (var i = 0; i < data.length; i++) {
        var dataContext = data[i];
        var countryDataItem = polygonSeries.getDataItemById(dataContext.id);
        var countryPolygon = countryDataItem.get("mapPolygon");
  
        var value = dataContext.value;
  
        var radius = minRadius + maxRadius * (value - valueLow) / (valueHigh - valueLow);
  
        if (countryPolygon) {
          var geometry = am5map.getGeoCircle(countryPolygon.visualCentroid(), radius);
          circleSeries.data.push({
            name: dataContext.name,
            value: dataContext.value,
            polygonTemplate: dataContext.polygonTemplate,
            geometry: geometry
          });
        }
      }
    })
    })
  }


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function nationTitleMap(option, year) {
$('#map-nation-title').empty()
$('#map-nation-title').html(`${capitalizeFirstLetter(option.replace('-', ' '))} in the world for the year ${year}`);
}
