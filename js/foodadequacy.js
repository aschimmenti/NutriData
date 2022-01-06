$( document ).ready(function() {
  $('#mapchartdropdowns').empty()
  getColorMap();
})



function getColorMap() {
    $('#mapchartdropdowns').empty()
    $('#mapchartdropdowns').append(`
    <div id="calories-button-linechart" class="col-lg-12 col-md-6 col-sm-6 col p-0"></div>
    </div>`)
    $('#calories-button-linechart').empty()
    $('#calories-button-linechart').append(`
    <h4>Average dietary energy supply adequacy (percent) per day</h4>`)
    $('#mapchartdropdowns').append('<div id="mapchartdiv"></div><div class="card"><div class="card-body"><h3 class="card-title">Download datasets used in this visualization</h3><a class="btn btn-primary" href="datasets/foodsupplyadequacy.csv" download>Download .csv</a><a class="btn btn-primary" href="datasets/foodsupplyadequacy.json" download>Download .json</a></div></div>')
    colorMapGraph()
}


function colorMapGraph() {
    am5.ready(function() {
    
    // Data
    var groupData = [
    {
        "name": ">150%",
        "data": [{"id": "DZ", "percentage": "151"},
                 {"id": "IE", "percentage": "158"},
                 {"id": "IL", "percentage": "154"},
                 {"id": "TR", "percentage": "156"}]
    },
    {
        "name": "120-150%",
        "data": [{"id": "AL", "percentage": "137"},
                 {"id": "KH", "percentage": "120"},
                 {"id": "CY", "percentage": "120"},
                 {"id": "DM", "percentage": "120"},
                 {"id": "PF", "percentage": "120"},
                 {"id": "MW", "percentage": "120"},
                 {"id": "MY", "percentage": "120"},
                 {"id": "VC", "percentage": "120"},
                 {"id": "ZA", "percentage": "120"},
                 {"id": "LK", "percentage": "120"},
                 {"id": "AR", "percentage": "136"},
                 {"id": "AM", "percentage": "124"},
                 {"id": "AU", "percentage": "136"},
                 {"id": "AT", "percentage": "147"},
                 {"id": "AZ", "percentage": "131"},
                 {"id": "BY", "percentage": "135"},
                 {"id": "BE", "percentage": "149"},
                 {"id": "BZ", "percentage": "121"},
                 {"id": "BJ", "percentage": "124"},
                 {"id": "BA", "percentage": "133"},
                 {"id": "BR", "percentage": "134"},
                 {"id": "BN", "percentage": "129"},
                 {"id": "BF", "percentage": "124"},
                 {"id": "CM", "percentage": "124"},
                 {"id": "CA", "percentage": "145"},
                 {"id": "CL", "percentage": "124"},
                 {"id": "CN", "percentage": "137"},
                 {"id": "HK", "percentage": "135"},
                 {"id": "MO", "percentage": "136"},
                 {"id": "TW", "percentage": "121"},
                 {"id": "CO", "percentage": "122"},
                 {"id": "CR", "percentage": "124"},
                 {"id": "CI", "percentage": "129"},
                 {"id": "HR", "percentage": "124"},
                 {"id": "CU", "percentage": "137"},
                 {"id": "CZ", "percentage": "130"},
                 {"id": "DK", "percentage": "134"},
                 {"id": "DO", "percentage": "121"},
                 {"id": "EG", "percentage": "141"},
                 {"id": "EE", "percentage": "129"},
                 {"id": "FI", "percentage": "132"},
                 {"id": "FR", "percentage": "141"},
                 {"id": "DE", "percentage": "141"},
                 {"id": "GH", "percentage": "134"},
                 {"id": "GR", "percentage": "135"},
                 {"id": "GN", "percentage": "129"},
                 {"id": "GY", "percentage": "125"},
                 {"id": "HU", "percentage": "132"},
                 {"id": "IS", "percentage": "146"},
                 {"id": "ID", "percentage": "126"},
                 {"id": "IR", "percentage": "127"},
                 {"id": "IT", "percentage": "140"},
                 {"id": "KZ", "percentage": "134"},
                 {"id": "KI", "percentage": "138"},
                 {"id": "KW", "percentage": "140"},
                 {"id": "LV", "percentage": "133"},
                 {"id": "LT", "percentage": "140"},
                 {"id": "LU", "percentage": "135"},
                 {"id": "ML", "percentage": "132"},
                 {"id": "MT", "percentage": "137"},
                 {"id": "MR", "percentage": "128"},
                 {"id": "MU", "percentage": "126"},
                 {"id": "MX", "percentage": "133"},
                 {"id": "MN", "percentage": "125"},
                 {"id": "ME", "percentage": "143"},
                 {"id": "MA", "percentage": "144"},
                 {"id": "MM", "percentage": "123"},
                 {"id": "NP", "percentage": "128"},
                 {"id": "NL", "percentage": "129"},
                 {"id": "NC", "percentage": "122"},
                 {"id": "NZ", "percentage": "129"},
                 {"id": "NE", "percentage": "124"},
                 {"id": "MK", "percentage": "124"},
                 {"id": "NO", "percentage": "132"},
                 {"id": "PA", "percentage": "124"},
                 {"id": "PE", "percentage": "121"},
                 {"id": "PH", "percentage": "123"},
                 {"id": "PL", "percentage": "142"},
                 {"id": "PT", "percentage": "140"},
                 {"id": "KR", "percentage": "141"},
                 {"id": "RO", "percentage": "145"},
                 {"id": "RU", "percentage": "138"},
                 {"id": "WS", "percentage": "131"},
                 {"id": "SA", "percentage": "136"},
                 {"id": "SC", "percentage": "129"},
                 {"id": "SI", "percentage": "129"},
                 {"id": "ES", "percentage": "134"},
                 {"id": "SE", "percentage": "127"},
                 {"id": "CH", "percentage": "130"},
                 {"id": "TT", "percentage": "123"},
                 {"id": "TN", "percentage": "147"},
                 {"id": "TM", "percentage": "123"},
                 {"id": "UA", "percentage": "125"},
                 {"id": "AE", "percentage": "124"},
                 {"id": "GB", "percentage": "133"},
                 {"id": "US", "percentage": "149"},
                 {"id": "UY", "percentage": "133"},
                 {"id": "UZ", "percentage": "136"},
                 {"id": "VU", "percentage": "121"},
                 {"id": "VN", "percentage": "127"}, ]
    }, {
        "name": "110-120%",
        "data": [{"id": "AO", "percentage": "116"},
                 {"id": "BD", "percentage": "114"},
                 {"id": "BB", "percentage": "119"},
                 {"id": "BG", "percentage": "115"},
                 {"id": "DJ", "percentage": "111"},
                 {"id": "EC", "percentage": "112"},
                 {"id": "SV", "percentage": "118"},
                 {"id": "SZ", "percentage": "112"},
                 {"id": "ET", "percentage": "111"},
                 {"id": "FJ", "percentage": "119"},
                 {"id": "GA", "percentage": "117"},
                 {"id": "GM", "percentage": "113"},
                 {"id": "GE", "percentage": "116"},
                 {"id": "GT", "percentage": "116"},
                 {"id": "HN", "percentage": "117"},
                 {"id": "IN", "percentage": "112"},
                 {"id": "JM", "percentage": "114"},
                 {"id": "JP", "percentage": "113"},
                 {"id": "JO", "percentage": "116"},
                 {"id": "KG", "percentage": "118"},
                 {"id": "LA", "percentage": "119"},
                 {"id": "LB", "percentage": "119"},
                 {"id": "NI", "percentage": "112"},
                 {"id": "NG", "percentage": "118"},
                 {"id": "OM", "percentage": "117"},
                 {"id": "PK", "percentage": "111"},
                 {"id": "PY", "percentage": "117"},
                 {"id": "SN", "percentage": "116"},
                 {"id": "RS", "percentage": "115"},
                 {"id": "SK", "percentage": "114"},
                 {"id": "SB", "percentage": "113"},
                 {"id": "SD", "percentage": "116"},
                 {"id": "SR", "percentage": "113"},
                 {"id": "SY", "percentage": "117"},
                 {"id": "TH", "percentage": "115"},
                 {"id": "TZ", "percentage": "111"}]
    }, {
        "name": "100-110%",
        "data": [{"id": "AF", "percentage": "106"},
                 {"id": "NA", "percentage": "110"},
                 {"id": "BS", "percentage": "107"},
                 {"id": "BO", "percentage": "109"},
                 {"id": "BW", "percentage": "102"},
                 {"id": "CV", "percentage": "107"},
                 {"id": "TD", "percentage": "104"},
                 {"id": "KN", "percentage": "105"},
                 {"id": "LC", "percentage": "104"},
                 {"id": "ST", "percentage": "108"},
                 {"id": "SL", "percentage": "105"},
                 {"id": "TL", "percentage": "106"},
                 {"id": "TG", "percentage": "109"}]
    }, {
        "name": "80-90%",
        "data": [{"id": "CF", "percentage": "86"},
                 {"id": "KP", "percentage": "86"},
                 {"id": "MG", "percentage": "88"},
                 {"id": "AG", "percentage": "100"},
                 {"id": "GW", "percentage": "100"},
                 {"id": "LS", "percentage": "100"},
                 {"id": "PG", "percentage": "100"},
                 {"id": "RW", "percentage": "100"}]
    },
    {
        "name": "70-80%",
        "data": [{"id": "SO", "percentage": "79"},
                 {"id": "ZW", "percentage": "79"}]
    }
];
    
    
    // Create root and chart
    var root = am5.Root.new("mapchartdiv");
    
    
    // Set themes
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    var chart = root.container.children.push(am5map.MapChart.new(root, {
      homeZoomLevel: 3.5,
      homeGeoPoint: { longitude: 10, latitude: 52 }
    }));
    
    
    // Create world polygon series
    var worldSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      exclude: ["AQ"]
    }));
    
    worldSeries.mapPolygons.template.setAll({
      fill: am5.color(0xaaaaaa)
    });
    
    worldSeries.events.on("datavalidated", () => {
      chart.goHome();
    });
    
    
    // Add legend
    var legend = chart.children.push(am5.Legend.new(root, {
      useDefaultMarker: true,
      centerX: am5.p50,
      x: am5.p50,
      centerY: am5.p100,
      y: am5.p100,
      dy: -20,
      background: am5.RoundedRectangle.new(root, {
        fill: am5.color(0xffffff),
        fillOpacity: 0.2
      })
    }));
    
    legend.valueLabels.template.set("forceHidden", true)
    
    
    // Create series for each group
    var colors = am5.ColorSet.new(root, {
      step: 2
    });
    colors.next();
    
    am5.array.each(groupData, function(group) {
      var countries = [];
      var color = colors.next();
    
      am5.array.each(group.data, function(country) {
        countries.push(country.id)
      });
    
      var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        include: countries,
        name: group.name,
        fill: color
      }));
    
    
      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "[bold]{name}[/]\nFood supply adequacy in percentage: {percentage}%",
        interactive: true,
        fill: color,
        strokeWidth: 2
      });
    
      polygonSeries.mapPolygons.template.states.create("hover", {
        fill: am5.Color.brighten(color, -0.3)
      });
    
      polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
        ev.target.series.mapPolygons.each(function(polygon) {
          polygon.states.applyAnimate("hover");
        });
      });
    
      polygonSeries.mapPolygons.template.events.on("pointerout", function(ev) {
        ev.target.series.mapPolygons.each(function(polygon) {
          polygon.states.applyAnimate("default");
        });
      });
      polygonSeries.data.setAll(group.data);
    
      legend.data.push(polygonSeries);
    });
    
    });
}