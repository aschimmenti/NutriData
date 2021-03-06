
  
function getCaloriesNationsLinechart() {
    $('#mapchartdropdowns').empty()
    $('#mapchartdropdowns').append(`
    <div id="calories-button-linechart" class="col-lg-12 col-md-6 col-sm-6 col p-0"></div>
    <div id="parent1" >
    </div>`)
    $('#calories-button-linechart').empty()
    $('#calories-button-linechart').append(`
    <h4 id="line-nation-title">Daily per capita supply of calories map</h4>
    <div class="dropdown">
    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Choose nation
    </button>
    <div id="nations-linechart" class="dropdown-menu" aria-labelledby="dropdownMenu2">
  
    </div>
  </div>`)
    $.getJSON('js/daily-per-capita-supply-of-calories.json',function(jsondata){
      var nations = Object.keys(jsondata)
      console.log(nations)
      $.each(nations, function(idx, n) {
        $('#nations-linechart').append(`
        <button onclick="linechartCalories('${n}');" class="dropdown-item" type="button">${n}</button>
        `)
      })
    })
    linechartCalories('Italy')
  }


function linechartCalories(nation) {
    $('#barchart-parent').empty();
    $('#mapchart-parent').empty();
    $('#map-nation-title').empty()
    $('#barchart-nation-title').empty()
    $('#line-nation-title').empty()
    linechartTitle(nation)
    $('#parent1').empty()
    $('#parent1').append('<div id="chartdiv-calories"></div><div class="card"><div class="card-body"><h3 class="card-title">Download datasets used in this visualization</h3><a class="btn btn-primary" href="datasets/dailycalories.zip" download>Download .zip file</a></div></div>')
    am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv-calories", am4charts.XYChart);
    
    // Add data
    caloriesData = {
        "Afghanistan": [
            {
                "date": "1961",
                "value": "2999"
            },
            {
                "date": "1962",
                "value": "2917"
            },
            {
                "date": "1963",
                "value": "2698"
            },
            {
                "date": "1964",
                "value": "2953"
            },
            {
                "date": "1965",
                "value": "2956"
            },
            {
                "date": "1966",
                "value": "2737"
            },
            {
                "date": "1967",
                "value": "2971"
            },
            {
                "date": "1968",
                "value": "2918"
            },
            {
                "date": "1969",
                "value": "2935"
            },
            {
                "date": "1970",
                "value": "2534"
            },
            {
                "date": "1971",
                "value": "2512"
            },
            {
                "date": "1972",
                "value": "2658"
            },
            {
                "date": "1973",
                "value": "2721"
            },
            {
                "date": "1974",
                "value": "2713"
            },
            {
                "date": "1975",
                "value": "2752"
            },
            {
                "date": "1976",
                "value": "2824"
            },
            {
                "date": "1977",
                "value": "2489"
            },
            {
                "date": "1978",
                "value": "2621"
            },
            {
                "date": "1979",
                "value": "2621"
            },
            {
                "date": "1980",
                "value": "2478"
            },
            {
                "date": "1981",
                "value": "2484"
            },
            {
                "date": "1982",
                "value": "2480"
            },
            {
                "date": "1983",
                "value": "2524"
            },
            {
                "date": "1984",
                "value": "2452"
            },
            {
                "date": "1985",
                "value": "2403"
            },
            {
                "date": "1986",
                "value": "2397"
            },
            {
                "date": "1987",
                "value": "2727"
            },
            {
                "date": "1988",
                "value": "2518"
            },
            {
                "date": "1989",
                "value": "2462"
            },
            {
                "date": "1990",
                "value": "2314"
            },
            {
                "date": "1991",
                "value": "2044"
            },
            {
                "date": "1992",
                "value": "1891"
            },
            {
                "date": "1993",
                "value": "1910"
            },
            {
                "date": "1994",
                "value": "1820"
            },
            {
                "date": "1995",
                "value": "1844"
            },
            {
                "date": "1996",
                "value": "1843"
            },
            {
                "date": "1997",
                "value": "1874"
            },
            {
                "date": "1998",
                "value": "1903"
            },
            {
                "date": "1999",
                "value": "1852"
            },
            {
                "date": "2000",
                "value": "1790"
            },
            {
                "date": "2001",
                "value": "1737"
            },
            {
                "date": "2002",
                "value": "1826"
            },
            {
                "date": "2003",
                "value": "1892"
            },
            {
                "date": "2004",
                "value": "1967"
            },
            {
                "date": "2005",
                "value": "1948"
            },
            {
                "date": "2006",
                "value": "1966"
            },
            {
                "date": "2007",
                "value": "2046"
            },
            {
                "date": "2008",
                "value": "2041"
            },
            {
                "date": "2009",
                "value": "2081"
            },
            {
                "date": "2010",
                "value": "2104"
            },
            {
                "date": "2011",
                "value": "2107"
            },
            {
                "date": "2012",
                "value": "2100"
            },
            {
                "date": "2013",
                "value": "2090"
            }
        ],
        "Africa": [
            {
                "date": "1961",
                "value": "1993"
            },
            {
                "date": "1962",
                "value": "2025"
            },
            {
                "date": "1963",
                "value": "2028"
            },
            {
                "date": "1964",
                "value": "2037"
            },
            {
                "date": "1965",
                "value": "2042"
            },
            {
                "date": "1966",
                "value": "2009"
            },
            {
                "date": "1967",
                "value": "2041"
            },
            {
                "date": "1968",
                "value": "2053"
            },
            {
                "date": "1969",
                "value": "2086"
            },
            {
                "date": "1970",
                "value": "2105"
            },
            {
                "date": "1971",
                "value": "2087"
            },
            {
                "date": "1972",
                "value": "2049"
            },
            {
                "date": "1973",
                "value": "2079"
            },
            {
                "date": "1974",
                "value": "2120"
            },
            {
                "date": "1975",
                "value": "2127"
            },
            {
                "date": "1976",
                "value": "2127"
            },
            {
                "date": "1977",
                "value": "2143"
            },
            {
                "date": "1978",
                "value": "2169"
            },
            {
                "date": "1979",
                "value": "2198"
            },
            {
                "date": "1980",
                "value": "2233"
            },
            {
                "date": "1981",
                "value": "2241"
            },
            {
                "date": "1982",
                "value": "2246"
            },
            {
                "date": "1983",
                "value": "2210"
            },
            {
                "date": "1984",
                "value": "2182"
            },
            {
                "date": "1985",
                "value": "2233"
            },
            {
                "date": "1986",
                "value": "2268"
            },
            {
                "date": "1987",
                "value": "2254"
            },
            {
                "date": "1988",
                "value": "2274"
            },
            {
                "date": "1989",
                "value": "2278"
            },
            {
                "date": "1990",
                "value": "2291"
            },
            {
                "date": "1991",
                "value": "2322"
            },
            {
                "date": "1992",
                "value": "2320"
            },
            {
                "date": "1993",
                "value": "2342"
            },
            {
                "date": "1994",
                "value": "2356"
            },
            {
                "date": "1995",
                "value": "2376"
            },
            {
                "date": "1996",
                "value": "2390"
            },
            {
                "date": "1997",
                "value": "2403"
            },
            {
                "date": "1998",
                "value": "2423"
            },
            {
                "date": "1999",
                "value": "2433"
            },
            {
                "date": "2000",
                "value": "2433"
            },
            {
                "date": "2001",
                "value": "2457"
            },
            {
                "date": "2002",
                "value": "2473"
            },
            {
                "date": "2003",
                "value": "2480"
            },
            {
                "date": "2004",
                "value": "2493"
            },
            {
                "date": "2005",
                "value": "2525"
            },
            {
                "date": "2006",
                "value": "2546"
            },
            {
                "date": "2007",
                "value": "2550"
            },
            {
                "date": "2008",
                "value": "2567"
            },
            {
                "date": "2009",
                "value": "2575"
            },
            {
                "date": "2010",
                "value": "2594"
            },
            {
                "date": "2011",
                "value": "2614"
            },
            {
                "date": "2012",
                "value": "2618"
            },
            {
                "date": "2013",
                "value": "2624"
            }
        ],
        "Albania": [
            {
                "date": "1961",
                "value": "2223"
            },
            {
                "date": "1962",
                "value": "2242"
            },
            {
                "date": "1963",
                "value": "2156"
            },
            {
                "date": "1964",
                "value": "2270"
            },
            {
                "date": "1965",
                "value": "2254"
            },
            {
                "date": "1966",
                "value": "2254"
            },
            {
                "date": "1967",
                "value": "2262"
            },
            {
                "date": "1968",
                "value": "2343"
            },
            {
                "date": "1969",
                "value": "2404"
            },
            {
                "date": "1970",
                "value": "2415"
            },
            {
                "date": "1971",
                "value": "2360"
            },
            {
                "date": "1972",
                "value": "2388"
            },
            {
                "date": "1973",
                "value": "2432"
            },
            {
                "date": "1974",
                "value": "2494"
            },
            {
                "date": "1975",
                "value": "2494"
            },
            {
                "date": "1976",
                "value": "2680"
            },
            {
                "date": "1977",
                "value": "2776"
            },
            {
                "date": "1978",
                "value": "2689"
            },
            {
                "date": "1979",
                "value": "2607"
            },
            {
                "date": "1980",
                "value": "2596"
            },
            {
                "date": "1981",
                "value": "2676"
            },
            {
                "date": "1982",
                "value": "2664"
            },
            {
                "date": "1983",
                "value": "2798"
            },
            {
                "date": "1984",
                "value": "2721"
            },
            {
                "date": "1985",
                "value": "2565"
            },
            {
                "date": "1986",
                "value": "2690"
            },
            {
                "date": "1987",
                "value": "2497"
            },
            {
                "date": "1988",
                "value": "2594"
            },
            {
                "date": "1989",
                "value": "2569"
            },
            {
                "date": "1990",
                "value": "2568"
            },
            {
                "date": "1991",
                "value": "2572"
            },
            {
                "date": "1992",
                "value": "2654"
            },
            {
                "date": "1993",
                "value": "2795"
            },
            {
                "date": "1994",
                "value": "2877"
            },
            {
                "date": "1995",
                "value": "2717"
            },
            {
                "date": "1996",
                "value": "2843"
            },
            {
                "date": "1997",
                "value": "2725"
            },
            {
                "date": "1998",
                "value": "2725"
            },
            {
                "date": "1999",
                "value": "2797"
            },
            {
                "date": "2000",
                "value": "2734"
            },
            {
                "date": "2001",
                "value": "2803"
            },
            {
                "date": "2002",
                "value": "2864"
            },
            {
                "date": "2003",
                "value": "2772"
            },
            {
                "date": "2004",
                "value": "2792"
            },
            {
                "date": "2005",
                "value": "2874"
            },
            {
                "date": "2006",
                "value": "2855"
            },
            {
                "date": "2007",
                "value": "2860"
            },
            {
                "date": "2008",
                "value": "2947"
            },
            {
                "date": "2009",
                "value": "2993"
            },
            {
                "date": "2010",
                "value": "3076"
            },
            {
                "date": "2011",
                "value": "3132"
            },
            {
                "date": "2012",
                "value": "3184"
            },
            {
                "date": "2013",
                "value": "3193"
            }
        ],
        "Algeria": [
            {
                "date": "1948",
                "value": "1421"
            },
            {
                "date": "1961",
                "value": "1619"
            },
            {
                "date": "1962",
                "value": "1569"
            },
            {
                "date": "1963",
                "value": "1528"
            },
            {
                "date": "1964",
                "value": "1540"
            },
            {
                "date": "1965",
                "value": "1591"
            },
            {
                "date": "1966",
                "value": "1571"
            },
            {
                "date": "1967",
                "value": "1647"
            },
            {
                "date": "1968",
                "value": "1706"
            },
            {
                "date": "1969",
                "value": "1705"
            },
            {
                "date": "1970",
                "value": "1675"
            },
            {
                "date": "1971",
                "value": "1720"
            },
            {
                "date": "1972",
                "value": "1849"
            },
            {
                "date": "1973",
                "value": "1851"
            },
            {
                "date": "1974",
                "value": "1984"
            },
            {
                "date": "1975",
                "value": "2058"
            },
            {
                "date": "1976",
                "value": "2047"
            },
            {
                "date": "1977",
                "value": "2209"
            },
            {
                "date": "1978",
                "value": "2344"
            },
            {
                "date": "1979",
                "value": "2445"
            },
            {
                "date": "1980",
                "value": "2566"
            },
            {
                "date": "1981",
                "value": "2597"
            },
            {
                "date": "1982",
                "value": "2570"
            },
            {
                "date": "1983",
                "value": "2553"
            },
            {
                "date": "1984",
                "value": "2500"
            },
            {
                "date": "1985",
                "value": "2613"
            },
            {
                "date": "1986",
                "value": "2627"
            },
            {
                "date": "1987",
                "value": "2631"
            },
            {
                "date": "1988",
                "value": "2696"
            },
            {
                "date": "1989",
                "value": "2760"
            },
            {
                "date": "1990",
                "value": "2754"
            },
            {
                "date": "1991",
                "value": "2733"
            },
            {
                "date": "1992",
                "value": "2865"
            },
            {
                "date": "1993",
                "value": "2865"
            },
            {
                "date": "1994",
                "value": "2763"
            },
            {
                "date": "1995",
                "value": "2785"
            },
            {
                "date": "1996",
                "value": "2784"
            },
            {
                "date": "1997",
                "value": "2733"
            },
            {
                "date": "1998",
                "value": "2792"
            },
            {
                "date": "1999",
                "value": "2843"
            },
            {
                "date": "2000",
                "value": "2812"
            },
            {
                "date": "2001",
                "value": "2886"
            },
            {
                "date": "2002",
                "value": "2925"
            },
            {
                "date": "2003",
                "value": "2970"
            },
            {
                "date": "2004",
                "value": "2987"
            },
            {
                "date": "2005",
                "value": "2958"
            },
            {
                "date": "2006",
                "value": "3047"
            },
            {
                "date": "2007",
                "value": "3041"
            },
            {
                "date": "2008",
                "value": "3048"
            },
            {
                "date": "2009",
                "value": "3110"
            },
            {
                "date": "2010",
                "value": "3142"
            },
            {
                "date": "2011",
                "value": "3217"
            },
            {
                "date": "2012",
                "value": "3272"
            },
            {
                "date": "2013",
                "value": "3296"
            }
        ],
        "Angola": [
            {
                "date": "1961",
                "value": "1798"
            },
            {
                "date": "1962",
                "value": "1819"
            },
            {
                "date": "1963",
                "value": "1853"
            },
            {
                "date": "1964",
                "value": "1862"
            },
            {
                "date": "1965",
                "value": "1877"
            },
            {
                "date": "1966",
                "value": "1890"
            },
            {
                "date": "1967",
                "value": "1921"
            },
            {
                "date": "1968",
                "value": "1856"
            },
            {
                "date": "1969",
                "value": "1946"
            },
            {
                "date": "1970",
                "value": "1965"
            },
            {
                "date": "1971",
                "value": "2002"
            },
            {
                "date": "1972",
                "value": "1958"
            },
            {
                "date": "1973",
                "value": "1915"
            },
            {
                "date": "1974",
                "value": "1876"
            },
            {
                "date": "1975",
                "value": "1858"
            },
            {
                "date": "1976",
                "value": "1887"
            },
            {
                "date": "1977",
                "value": "1952"
            },
            {
                "date": "1978",
                "value": "1991"
            },
            {
                "date": "1979",
                "value": "1966"
            },
            {
                "date": "1980",
                "value": "1967"
            },
            {
                "date": "1981",
                "value": "1886"
            },
            {
                "date": "1982",
                "value": "1758"
            },
            {
                "date": "1983",
                "value": "1729"
            },
            {
                "date": "1984",
                "value": "1673"
            },
            {
                "date": "1985",
                "value": "1687"
            },
            {
                "date": "1986",
                "value": "1644"
            },
            {
                "date": "1987",
                "value": "1632"
            },
            {
                "date": "1988",
                "value": "1605"
            },
            {
                "date": "1989",
                "value": "1586"
            },
            {
                "date": "1990",
                "value": "1641"
            },
            {
                "date": "1991",
                "value": "1611"
            },
            {
                "date": "1992",
                "value": "1625"
            },
            {
                "date": "1993",
                "value": "1564"
            },
            {
                "date": "1994",
                "value": "1644"
            },
            {
                "date": "1995",
                "value": "1687"
            },
            {
                "date": "1996",
                "value": "1731"
            },
            {
                "date": "1997",
                "value": "1732"
            },
            {
                "date": "1998",
                "value": "1752"
            },
            {
                "date": "1999",
                "value": "1805"
            },
            {
                "date": "2000",
                "value": "1792"
            },
            {
                "date": "2001",
                "value": "1833"
            },
            {
                "date": "2002",
                "value": "1915"
            },
            {
                "date": "2003",
                "value": "1983"
            },
            {
                "date": "2004",
                "value": "2030"
            },
            {
                "date": "2005",
                "value": "2077"
            },
            {
                "date": "2006",
                "value": "2119"
            },
            {
                "date": "2007",
                "value": "2173"
            },
            {
                "date": "2008",
                "value": "2245"
            },
            {
                "date": "2009",
                "value": "2303"
            },
            {
                "date": "2010",
                "value": "2345"
            },
            {
                "date": "2011",
                "value": "2407"
            },
            {
                "date": "2012",
                "value": "2384"
            },
            {
                "date": "2013",
                "value": "2473"
            }
        ],
        "Antigua and Barbuda": [
            {
                "date": "1961",
                "value": "2008"
            },
            {
                "date": "1962",
                "value": "2185"
            },
            {
                "date": "1963",
                "value": "2052"
            },
            {
                "date": "1964",
                "value": "2126"
            },
            {
                "date": "1965",
                "value": "2222"
            },
            {
                "date": "1966",
                "value": "2172"
            },
            {
                "date": "1967",
                "value": "1959"
            },
            {
                "date": "1968",
                "value": "2007"
            },
            {
                "date": "1969",
                "value": "2055"
            },
            {
                "date": "1970",
                "value": "2240"
            },
            {
                "date": "1971",
                "value": "2165"
            },
            {
                "date": "1972",
                "value": "1957"
            },
            {
                "date": "1973",
                "value": "1863"
            },
            {
                "date": "1974",
                "value": "1799"
            },
            {
                "date": "1975",
                "value": "1857"
            },
            {
                "date": "1976",
                "value": "1791"
            },
            {
                "date": "1977",
                "value": "1711"
            },
            {
                "date": "1978",
                "value": "1650"
            },
            {
                "date": "1979",
                "value": "1745"
            },
            {
                "date": "1980",
                "value": "1971"
            },
            {
                "date": "1981",
                "value": "2045"
            },
            {
                "date": "1982",
                "value": "1951"
            },
            {
                "date": "1983",
                "value": "2023"
            },
            {
                "date": "1984",
                "value": "2248"
            },
            {
                "date": "1985",
                "value": "2191"
            },
            {
                "date": "1986",
                "value": "2214"
            },
            {
                "date": "1987",
                "value": "2266"
            },
            {
                "date": "1988",
                "value": "2364"
            },
            {
                "date": "1989",
                "value": "2489"
            },
            {
                "date": "1990",
                "value": "2467"
            },
            {
                "date": "1991",
                "value": "2532"
            },
            {
                "date": "1992",
                "value": "2545"
            },
            {
                "date": "1993",
                "value": "2376"
            },
            {
                "date": "1994",
                "value": "2255"
            },
            {
                "date": "1995",
                "value": "2188"
            },
            {
                "date": "1996",
                "value": "2190"
            },
            {
                "date": "1997",
                "value": "2163"
            },
            {
                "date": "1998",
                "value": "2154"
            },
            {
                "date": "1999",
                "value": "2158"
            },
            {
                "date": "2000",
                "value": "2150"
            },
            {
                "date": "2001",
                "value": "2085"
            },
            {
                "date": "2002",
                "value": "2069"
            },
            {
                "date": "2003",
                "value": "2071"
            },
            {
                "date": "2004",
                "value": "2107"
            },
            {
                "date": "2005",
                "value": "2331"
            },
            {
                "date": "2006",
                "value": "2328"
            },
            {
                "date": "2007",
                "value": "2411"
            },
            {
                "date": "2008",
                "value": "2380"
            },
            {
                "date": "2009",
                "value": "2322"
            },
            {
                "date": "2010",
                "value": "2316"
            },
            {
                "date": "2011",
                "value": "2369"
            },
            {
                "date": "2012",
                "value": "2293"
            },
            {
                "date": "2013",
                "value": "2417"
            }
        ],
        "Argentina": [
            {
                "date": "1948",
                "value": "3191"
            },
            {
                "date": "1961",
                "value": "3105"
            },
            {
                "date": "1962",
                "value": "3078"
            },
            {
                "date": "1963",
                "value": "3031"
            },
            {
                "date": "1964",
                "value": "3076"
            },
            {
                "date": "1965",
                "value": "3183"
            },
            {
                "date": "1966",
                "value": "3141"
            },
            {
                "date": "1967",
                "value": "3218"
            },
            {
                "date": "1968",
                "value": "3266"
            },
            {
                "date": "1969",
                "value": "3304"
            },
            {
                "date": "1970",
                "value": "3333"
            },
            {
                "date": "1971",
                "value": "3174"
            },
            {
                "date": "1972",
                "value": "3060"
            },
            {
                "date": "1973",
                "value": "3010"
            },
            {
                "date": "1974",
                "value": "3197"
            },
            {
                "date": "1975",
                "value": "3259"
            },
            {
                "date": "1976",
                "value": "3187"
            },
            {
                "date": "1977",
                "value": "3171"
            },
            {
                "date": "1978",
                "value": "3227"
            },
            {
                "date": "1979",
                "value": "3203"
            },
            {
                "date": "1980",
                "value": "3222"
            },
            {
                "date": "1981",
                "value": "3199"
            },
            {
                "date": "1982",
                "value": "3060"
            },
            {
                "date": "1983",
                "value": "2990"
            },
            {
                "date": "1984",
                "value": "3034"
            },
            {
                "date": "1985",
                "value": "3115"
            },
            {
                "date": "1986",
                "value": "3028"
            },
            {
                "date": "1987",
                "value": "3096"
            },
            {
                "date": "1988",
                "value": "3012"
            },
            {
                "date": "1989",
                "value": "2959"
            },
            {
                "date": "1990",
                "value": "2911"
            },
            {
                "date": "1991",
                "value": "3010"
            },
            {
                "date": "1992",
                "value": "3077"
            },
            {
                "date": "1993",
                "value": "3116"
            },
            {
                "date": "1994",
                "value": "3155"
            },
            {
                "date": "1995",
                "value": "3163"
            },
            {
                "date": "1996",
                "value": "3156"
            },
            {
                "date": "1997",
                "value": "3132"
            },
            {
                "date": "1998",
                "value": "3163"
            },
            {
                "date": "1999",
                "value": "3265"
            },
            {
                "date": "2000",
                "value": "3260"
            },
            {
                "date": "2001",
                "value": "3212"
            },
            {
                "date": "2002",
                "value": "2977"
            },
            {
                "date": "2003",
                "value": "3009"
            },
            {
                "date": "2004",
                "value": "3028"
            },
            {
                "date": "2005",
                "value": "3107"
            },
            {
                "date": "2006",
                "value": "3114"
            },
            {
                "date": "2007",
                "value": "3145"
            },
            {
                "date": "2008",
                "value": "3158"
            },
            {
                "date": "2009",
                "value": "3132"
            },
            {
                "date": "2010",
                "value": "3155"
            },
            {
                "date": "2011",
                "value": "3161"
            },
            {
                "date": "2012",
                "value": "3197"
            },
            {
                "date": "2013",
                "value": "3229"
            }
        ],
        "Armenia": [
            {
                "date": "1961",
                "value": "3095"
            },
            {
                "date": "1962",
                "value": "3157"
            },
            {
                "date": "1963",
                "value": "3204"
            },
            {
                "date": "1964",
                "value": "3206"
            },
            {
                "date": "1965",
                "value": "3214"
            },
            {
                "date": "1966",
                "value": "3209"
            },
            {
                "date": "1967",
                "value": "3240"
            },
            {
                "date": "1968",
                "value": "3300"
            },
            {
                "date": "1969",
                "value": "3300"
            },
            {
                "date": "1970",
                "value": "3355"
            },
            {
                "date": "1971",
                "value": "3331"
            },
            {
                "date": "1972",
                "value": "3284"
            },
            {
                "date": "1973",
                "value": "3325"
            },
            {
                "date": "1974",
                "value": "3357"
            },
            {
                "date": "1975",
                "value": "3341"
            },
            {
                "date": "1976",
                "value": "3404"
            },
            {
                "date": "1977",
                "value": "3366"
            },
            {
                "date": "1978",
                "value": "3387"
            },
            {
                "date": "1979",
                "value": "3384"
            },
            {
                "date": "1980",
                "value": "3378"
            },
            {
                "date": "1981",
                "value": "3355"
            },
            {
                "date": "1982",
                "value": "3377"
            },
            {
                "date": "1983",
                "value": "3386"
            },
            {
                "date": "1984",
                "value": "3388"
            },
            {
                "date": "1985",
                "value": "3380"
            },
            {
                "date": "1986",
                "value": "3364"
            },
            {
                "date": "1987",
                "value": "3404"
            },
            {
                "date": "1988",
                "value": "3395"
            },
            {
                "date": "1989",
                "value": "3348"
            },
            {
                "date": "1990",
                "value": "3372"
            },
            {
                "date": "1991",
                "value": "3032"
            },
            {
                "date": "1992",
                "value": "2184"
            },
            {
                "date": "1993",
                "value": "2099"
            },
            {
                "date": "1994",
                "value": "2181"
            },
            {
                "date": "1995",
                "value": "2270"
            },
            {
                "date": "1996",
                "value": "2320"
            },
            {
                "date": "1997",
                "value": "2330"
            },
            {
                "date": "1998",
                "value": "2320"
            },
            {
                "date": "1999",
                "value": "2288"
            },
            {
                "date": "2000",
                "value": "2236"
            },
            {
                "date": "2001",
                "value": "2239"
            },
            {
                "date": "2002",
                "value": "2259"
            },
            {
                "date": "2003",
                "value": "2432"
            },
            {
                "date": "2004",
                "value": "2554"
            },
            {
                "date": "2005",
                "value": "2668"
            },
            {
                "date": "2006",
                "value": "2757"
            },
            {
                "date": "2007",
                "value": "2761"
            },
            {
                "date": "2008",
                "value": "2869"
            },
            {
                "date": "2009",
                "value": "2819"
            },
            {
                "date": "2010",
                "value": "2768"
            },
            {
                "date": "2011",
                "value": "2788"
            },
            {
                "date": "2012",
                "value": "2882"
            },
            {
                "date": "2013",
                "value": "2928"
            }
        ],
        "Asia": [
            {
                "date": "1961",
                "value": "1805"
            },
            {
                "date": "1962",
                "value": "1867"
            },
            {
                "date": "1963",
                "value": "1882"
            },
            {
                "date": "1964",
                "value": "1929"
            },
            {
                "date": "1965",
                "value": "1963"
            },
            {
                "date": "1966",
                "value": "1994"
            },
            {
                "date": "1967",
                "value": "1987"
            },
            {
                "date": "1968",
                "value": "1978"
            },
            {
                "date": "1969",
                "value": "1987"
            },
            {
                "date": "1970",
                "value": "2059"
            },
            {
                "date": "1971",
                "value": "2023"
            },
            {
                "date": "1972",
                "value": "2019"
            },
            {
                "date": "1973",
                "value": "2075"
            },
            {
                "date": "1974",
                "value": "2048"
            },
            {
                "date": "1975",
                "value": "2081"
            },
            {
                "date": "1976",
                "value": "2042"
            },
            {
                "date": "1977",
                "value": "2102"
            },
            {
                "date": "1978",
                "value": "2189"
            },
            {
                "date": "1979",
                "value": "2171"
            },
            {
                "date": "1980",
                "value": "2187"
            },
            {
                "date": "1981",
                "value": "2214"
            },
            {
                "date": "1982",
                "value": "2271"
            },
            {
                "date": "1983",
                "value": "2354"
            },
            {
                "date": "1984",
                "value": "2372"
            },
            {
                "date": "1985",
                "value": "2356"
            },
            {
                "date": "1986",
                "value": "2359"
            },
            {
                "date": "1987",
                "value": "2380"
            },
            {
                "date": "1988",
                "value": "2405"
            },
            {
                "date": "1989",
                "value": "2436"
            },
            {
                "date": "1990",
                "value": "2414"
            },
            {
                "date": "1991",
                "value": "2402"
            },
            {
                "date": "1992",
                "value": "2433"
            },
            {
                "date": "1993",
                "value": "2445"
            },
            {
                "date": "1994",
                "value": "2482"
            },
            {
                "date": "1995",
                "value": "2527"
            },
            {
                "date": "1996",
                "value": "2538"
            },
            {
                "date": "1997",
                "value": "2552"
            },
            {
                "date": "1998",
                "value": "2566"
            },
            {
                "date": "1999",
                "value": "2582"
            },
            {
                "date": "2000",
                "value": "2591"
            },
            {
                "date": "2001",
                "value": "2578"
            },
            {
                "date": "2002",
                "value": "2571"
            },
            {
                "date": "2003",
                "value": "2577"
            },
            {
                "date": "2004",
                "value": "2587"
            },
            {
                "date": "2005",
                "value": "2600"
            },
            {
                "date": "2006",
                "value": "2624"
            },
            {
                "date": "2007",
                "value": "2667"
            },
            {
                "date": "2008",
                "value": "2693"
            },
            {
                "date": "2009",
                "value": "2702"
            },
            {
                "date": "2010",
                "value": "2736"
            },
            {
                "date": "2011",
                "value": "2758"
            },
            {
                "date": "2012",
                "value": "2766"
            },
            {
                "date": "2013",
                "value": "2779"
            }
        ],
        "Australia": [
            {
                "date": "1948",
                "value": "3265"
            },
            {
                "date": "1961",
                "value": "3091"
            },
            {
                "date": "1962",
                "value": "3113"
            },
            {
                "date": "1963",
                "value": "3169"
            },
            {
                "date": "1964",
                "value": "3146"
            },
            {
                "date": "1965",
                "value": "3095"
            },
            {
                "date": "1966",
                "value": "3166"
            },
            {
                "date": "1967",
                "value": "3106"
            },
            {
                "date": "1968",
                "value": "3127"
            },
            {
                "date": "1969",
                "value": "3131"
            },
            {
                "date": "1970",
                "value": "3159"
            },
            {
                "date": "1971",
                "value": "3183"
            },
            {
                "date": "1972",
                "value": "3221"
            },
            {
                "date": "1973",
                "value": "3098"
            },
            {
                "date": "1974",
                "value": "3018"
            },
            {
                "date": "1975",
                "value": "3093"
            },
            {
                "date": "1976",
                "value": "3115"
            },
            {
                "date": "1977",
                "value": "3071"
            },
            {
                "date": "1978",
                "value": "3022"
            },
            {
                "date": "1979",
                "value": "3009"
            },
            {
                "date": "1980",
                "value": "3060"
            },
            {
                "date": "1981",
                "value": "3069"
            },
            {
                "date": "1982",
                "value": "3104"
            },
            {
                "date": "1983",
                "value": "3038"
            },
            {
                "date": "1984",
                "value": "3083"
            },
            {
                "date": "1985",
                "value": "3121"
            },
            {
                "date": "1986",
                "value": "3083"
            },
            {
                "date": "1987",
                "value": "3110"
            },
            {
                "date": "1988",
                "value": "3115"
            },
            {
                "date": "1989",
                "value": "3133"
            },
            {
                "date": "1990",
                "value": "3174"
            },
            {
                "date": "1991",
                "value": "3121"
            },
            {
                "date": "1992",
                "value": "3125"
            },
            {
                "date": "1993",
                "value": "3042"
            },
            {
                "date": "1994",
                "value": "3054"
            },
            {
                "date": "1995",
                "value": "3099"
            },
            {
                "date": "1996",
                "value": "3077"
            },
            {
                "date": "1997",
                "value": "3096"
            },
            {
                "date": "1998",
                "value": "3015"
            },
            {
                "date": "1999",
                "value": "3014"
            },
            {
                "date": "2000",
                "value": "2991"
            },
            {
                "date": "2001",
                "value": "3048"
            },
            {
                "date": "2002",
                "value": "3077"
            },
            {
                "date": "2003",
                "value": "3104"
            },
            {
                "date": "2004",
                "value": "3052"
            },
            {
                "date": "2005",
                "value": "3099"
            },
            {
                "date": "2006",
                "value": "3156"
            },
            {
                "date": "2007",
                "value": "3198"
            },
            {
                "date": "2008",
                "value": "3199"
            },
            {
                "date": "2009",
                "value": "3205"
            },
            {
                "date": "2010",
                "value": "3213"
            },
            {
                "date": "2011",
                "value": "3237"
            },
            {
                "date": "2012",
                "value": "3257"
            },
            {
                "date": "2013",
                "value": "3276"
            }
        ],
        "Austria": [
            {
                "date": "1948",
                "value": "2698"
            },
            {
                "date": "1961",
                "value": "3191"
            },
            {
                "date": "1962",
                "value": "3193"
            },
            {
                "date": "1963",
                "value": "3248"
            },
            {
                "date": "1964",
                "value": "3270"
            },
            {
                "date": "1965",
                "value": "3220"
            },
            {
                "date": "1966",
                "value": "3232"
            },
            {
                "date": "1967",
                "value": "3194"
            },
            {
                "date": "1968",
                "value": "3221"
            },
            {
                "date": "1969",
                "value": "3153"
            },
            {
                "date": "1970",
                "value": "3217"
            },
            {
                "date": "1971",
                "value": "3230"
            },
            {
                "date": "1972",
                "value": "3207"
            },
            {
                "date": "1973",
                "value": "3294"
            },
            {
                "date": "1974",
                "value": "3201"
            },
            {
                "date": "1975",
                "value": "3142"
            },
            {
                "date": "1976",
                "value": "3243"
            },
            {
                "date": "1977",
                "value": "3192"
            },
            {
                "date": "1978",
                "value": "3213"
            },
            {
                "date": "1979",
                "value": "3283"
            },
            {
                "date": "1980",
                "value": "3355"
            },
            {
                "date": "1981",
                "value": "3348"
            },
            {
                "date": "1982",
                "value": "3400"
            },
            {
                "date": "1983",
                "value": "3360"
            },
            {
                "date": "1984",
                "value": "3361"
            },
            {
                "date": "1985",
                "value": "3374"
            },
            {
                "date": "1986",
                "value": "3429"
            },
            {
                "date": "1987",
                "value": "3420"
            },
            {
                "date": "1988",
                "value": "3422"
            },
            {
                "date": "1989",
                "value": "3478"
            },
            {
                "date": "1990",
                "value": "3510"
            },
            {
                "date": "1991",
                "value": "3556"
            },
            {
                "date": "1992",
                "value": "3546"
            },
            {
                "date": "1993",
                "value": "3508"
            },
            {
                "date": "1994",
                "value": "3557"
            },
            {
                "date": "1995",
                "value": "3510"
            },
            {
                "date": "1996",
                "value": "3551"
            },
            {
                "date": "1997",
                "value": "3494"
            },
            {
                "date": "1998",
                "value": "3608"
            },
            {
                "date": "1999",
                "value": "3673"
            },
            {
                "date": "2000",
                "value": "3726"
            },
            {
                "date": "2001",
                "value": "3728"
            },
            {
                "date": "2002",
                "value": "3652"
            },
            {
                "date": "2003",
                "value": "3609"
            },
            {
                "date": "2004",
                "value": "3606"
            },
            {
                "date": "2005",
                "value": "3640"
            },
            {
                "date": "2006",
                "value": "3719"
            },
            {
                "date": "2007",
                "value": "3737"
            },
            {
                "date": "2008",
                "value": "3717"
            },
            {
                "date": "2009",
                "value": "3723"
            },
            {
                "date": "2010",
                "value": "3724"
            },
            {
                "date": "2011",
                "value": "3735"
            },
            {
                "date": "2012",
                "value": "3739"
            },
            {
                "date": "2013",
                "value": "3768"
            }
        ],
        "Azerbaijan": [
            {
                "date": "1961",
                "value": "3095"
            },
            {
                "date": "1962",
                "value": "3157"
            },
            {
                "date": "1963",
                "value": "3204"
            },
            {
                "date": "1964",
                "value": "3206"
            },
            {
                "date": "1965",
                "value": "3214"
            },
            {
                "date": "1966",
                "value": "3209"
            },
            {
                "date": "1967",
                "value": "3240"
            },
            {
                "date": "1968",
                "value": "3300"
            },
            {
                "date": "1969",
                "value": "3300"
            },
            {
                "date": "1970",
                "value": "3355"
            },
            {
                "date": "1971",
                "value": "3331"
            },
            {
                "date": "1972",
                "value": "3284"
            },
            {
                "date": "1973",
                "value": "3325"
            },
            {
                "date": "1974",
                "value": "3357"
            },
            {
                "date": "1975",
                "value": "3341"
            },
            {
                "date": "1976",
                "value": "3404"
            },
            {
                "date": "1977",
                "value": "3366"
            },
            {
                "date": "1978",
                "value": "3387"
            },
            {
                "date": "1979",
                "value": "3384"
            },
            {
                "date": "1980",
                "value": "3378"
            },
            {
                "date": "1981",
                "value": "3355"
            },
            {
                "date": "1982",
                "value": "3377"
            },
            {
                "date": "1983",
                "value": "3386"
            },
            {
                "date": "1984",
                "value": "3388"
            },
            {
                "date": "1985",
                "value": "3380"
            },
            {
                "date": "1986",
                "value": "3364"
            },
            {
                "date": "1987",
                "value": "3404"
            },
            {
                "date": "1988",
                "value": "3395"
            },
            {
                "date": "1989",
                "value": "3348"
            },
            {
                "date": "1990",
                "value": "3372"
            },
            {
                "date": "1991",
                "value": "3032"
            },
            {
                "date": "1992",
                "value": "2318"
            },
            {
                "date": "1993",
                "value": "2235"
            },
            {
                "date": "1994",
                "value": "2159"
            },
            {
                "date": "1995",
                "value": "2126"
            },
            {
                "date": "1996",
                "value": "2223"
            },
            {
                "date": "1997",
                "value": "2021"
            },
            {
                "date": "1998",
                "value": "2119"
            },
            {
                "date": "1999",
                "value": "2185"
            },
            {
                "date": "2000",
                "value": "2282"
            },
            {
                "date": "2001",
                "value": "2371"
            },
            {
                "date": "2002",
                "value": "2461"
            },
            {
                "date": "2003",
                "value": "2554"
            },
            {
                "date": "2004",
                "value": "2639"
            },
            {
                "date": "2005",
                "value": "2837"
            },
            {
                "date": "2006",
                "value": "3006"
            },
            {
                "date": "2007",
                "value": "3019"
            },
            {
                "date": "2008",
                "value": "3026"
            },
            {
                "date": "2009",
                "value": "2995"
            },
            {
                "date": "2010",
                "value": "2973"
            },
            {
                "date": "2011",
                "value": "3039"
            },
            {
                "date": "2012",
                "value": "3055"
            },
            {
                "date": "2013",
                "value": "3118"
            }
        ],
        "Bahamas": [
            {
                "date": "1961",
                "value": "2447"
            },
            {
                "date": "1962",
                "value": "2389"
            },
            {
                "date": "1963",
                "value": "2378"
            },
            {
                "date": "1964",
                "value": "2428"
            },
            {
                "date": "1965",
                "value": "2447"
            },
            {
                "date": "1966",
                "value": "2557"
            },
            {
                "date": "1967",
                "value": "2497"
            },
            {
                "date": "1968",
                "value": "2551"
            },
            {
                "date": "1969",
                "value": "2592"
            },
            {
                "date": "1970",
                "value": "2615"
            },
            {
                "date": "1971",
                "value": "2594"
            },
            {
                "date": "1972",
                "value": "2517"
            },
            {
                "date": "1973",
                "value": "2456"
            },
            {
                "date": "1974",
                "value": "2398"
            },
            {
                "date": "1975",
                "value": "2341"
            },
            {
                "date": "1976",
                "value": "2360"
            },
            {
                "date": "1977",
                "value": "2216"
            },
            {
                "date": "1978",
                "value": "2177"
            },
            {
                "date": "1979",
                "value": "2264"
            },
            {
                "date": "1980",
                "value": "2627"
            },
            {
                "date": "1981",
                "value": "2499"
            },
            {
                "date": "1982",
                "value": "2749"
            },
            {
                "date": "1983",
                "value": "2686"
            },
            {
                "date": "1984",
                "value": "2655"
            },
            {
                "date": "1985",
                "value": "2702"
            },
            {
                "date": "1986",
                "value": "2741"
            },
            {
                "date": "1987",
                "value": "2737"
            },
            {
                "date": "1988",
                "value": "2788"
            },
            {
                "date": "1989",
                "value": "2777"
            },
            {
                "date": "1990",
                "value": "2714"
            },
            {
                "date": "1991",
                "value": "2607"
            },
            {
                "date": "1992",
                "value": "2503"
            },
            {
                "date": "1993",
                "value": "2420"
            },
            {
                "date": "1994",
                "value": "2421"
            },
            {
                "date": "1995",
                "value": "2535"
            },
            {
                "date": "1996",
                "value": "2536"
            },
            {
                "date": "1997",
                "value": "2651"
            },
            {
                "date": "1998",
                "value": "2601"
            },
            {
                "date": "1999",
                "value": "2703"
            },
            {
                "date": "2000",
                "value": "2779"
            },
            {
                "date": "2001",
                "value": "2765"
            },
            {
                "date": "2002",
                "value": "2725"
            },
            {
                "date": "2003",
                "value": "2686"
            },
            {
                "date": "2004",
                "value": "2662"
            },
            {
                "date": "2005",
                "value": "2648"
            },
            {
                "date": "2006",
                "value": "2627"
            },
            {
                "date": "2007",
                "value": "2605"
            },
            {
                "date": "2008",
                "value": "2585"
            },
            {
                "date": "2009",
                "value": "2619"
            },
            {
                "date": "2010",
                "value": "2598"
            },
            {
                "date": "2011",
                "value": "2568"
            },
            {
                "date": "2012",
                "value": "2671"
            },
            {
                "date": "2013",
                "value": "2670"
            }
        ],
        "Bangladesh": [
            {
                "date": "1961",
                "value": "2154"
            },
            {
                "date": "1962",
                "value": "2128"
            },
            {
                "date": "1963",
                "value": "2174"
            },
            {
                "date": "1964",
                "value": "2158"
            },
            {
                "date": "1965",
                "value": "2122"
            },
            {
                "date": "1966",
                "value": "2111"
            },
            {
                "date": "1967",
                "value": "1970"
            },
            {
                "date": "1968",
                "value": "2073"
            },
            {
                "date": "1969",
                "value": "2127"
            },
            {
                "date": "1970",
                "value": "2200"
            },
            {
                "date": "1971",
                "value": "2034"
            },
            {
                "date": "1972",
                "value": "1877"
            },
            {
                "date": "1973",
                "value": "1977"
            },
            {
                "date": "1974",
                "value": "2054"
            },
            {
                "date": "1975",
                "value": "1946"
            },
            {
                "date": "1976",
                "value": "2091"
            },
            {
                "date": "1977",
                "value": "1899"
            },
            {
                "date": "1978",
                "value": "2032"
            },
            {
                "date": "1979",
                "value": "2084"
            },
            {
                "date": "1980",
                "value": "2023"
            },
            {
                "date": "1981",
                "value": "1998"
            },
            {
                "date": "1982",
                "value": "2030"
            },
            {
                "date": "1983",
                "value": "2052"
            },
            {
                "date": "1984",
                "value": "2029"
            },
            {
                "date": "1985",
                "value": "2068"
            },
            {
                "date": "1986",
                "value": "2066"
            },
            {
                "date": "1987",
                "value": "2136"
            },
            {
                "date": "1988",
                "value": "2108"
            },
            {
                "date": "1989",
                "value": "2085"
            },
            {
                "date": "1990",
                "value": "2111"
            },
            {
                "date": "1991",
                "value": "2116"
            },
            {
                "date": "1992",
                "value": "2111"
            },
            {
                "date": "1993",
                "value": "2010"
            },
            {
                "date": "1994",
                "value": "2003"
            },
            {
                "date": "1995",
                "value": "2043"
            },
            {
                "date": "1996",
                "value": "2048"
            },
            {
                "date": "1997",
                "value": "2096"
            },
            {
                "date": "1998",
                "value": "2161"
            },
            {
                "date": "1999",
                "value": "2266"
            },
            {
                "date": "2000",
                "value": "2258"
            },
            {
                "date": "2001",
                "value": "2331"
            },
            {
                "date": "2002",
                "value": "2313"
            },
            {
                "date": "2003",
                "value": "2350"
            },
            {
                "date": "2004",
                "value": "2382"
            },
            {
                "date": "2005",
                "value": "2372"
            },
            {
                "date": "2006",
                "value": "2372"
            },
            {
                "date": "2007",
                "value": "2417"
            },
            {
                "date": "2008",
                "value": "2386"
            },
            {
                "date": "2009",
                "value": "2425"
            },
            {
                "date": "2010",
                "value": "2439"
            },
            {
                "date": "2011",
                "value": "2429"
            },
            {
                "date": "2012",
                "value": "2435"
            },
            {
                "date": "2013",
                "value": "2450"
            }
        ],
        "Barbados": [
            {
                "date": "1961",
                "value": "2512"
            },
            {
                "date": "1962",
                "value": "2575"
            },
            {
                "date": "1963",
                "value": "2648"
            },
            {
                "date": "1964",
                "value": "2609"
            },
            {
                "date": "1965",
                "value": "2592"
            },
            {
                "date": "1966",
                "value": "2610"
            },
            {
                "date": "1967",
                "value": "2806"
            },
            {
                "date": "1968",
                "value": "2706"
            },
            {
                "date": "1969",
                "value": "2700"
            },
            {
                "date": "1970",
                "value": "2814"
            },
            {
                "date": "1971",
                "value": "3017"
            },
            {
                "date": "1972",
                "value": "2906"
            },
            {
                "date": "1973",
                "value": "2965"
            },
            {
                "date": "1974",
                "value": "2857"
            },
            {
                "date": "1975",
                "value": "2794"
            },
            {
                "date": "1976",
                "value": "2856"
            },
            {
                "date": "1977",
                "value": "2877"
            },
            {
                "date": "1978",
                "value": "2976"
            },
            {
                "date": "1979",
                "value": "2881"
            },
            {
                "date": "1980",
                "value": "3050"
            },
            {
                "date": "1981",
                "value": "3041"
            },
            {
                "date": "1982",
                "value": "2934"
            },
            {
                "date": "1983",
                "value": "2981"
            },
            {
                "date": "1984",
                "value": "2927"
            },
            {
                "date": "1985",
                "value": "2917"
            },
            {
                "date": "1986",
                "value": "3067"
            },
            {
                "date": "1987",
                "value": "3112"
            },
            {
                "date": "1988",
                "value": "3085"
            },
            {
                "date": "1989",
                "value": "3133"
            },
            {
                "date": "1990",
                "value": "3106"
            },
            {
                "date": "1991",
                "value": "3006"
            },
            {
                "date": "1992",
                "value": "2983"
            },
            {
                "date": "1993",
                "value": "2912"
            },
            {
                "date": "1994",
                "value": "2905"
            },
            {
                "date": "1995",
                "value": "2867"
            },
            {
                "date": "1996",
                "value": "2905"
            },
            {
                "date": "1997",
                "value": "2970"
            },
            {
                "date": "1998",
                "value": "2805"
            },
            {
                "date": "1999",
                "value": "2942"
            },
            {
                "date": "2000",
                "value": "2802"
            },
            {
                "date": "2001",
                "value": "2835"
            },
            {
                "date": "2002",
                "value": "2806"
            },
            {
                "date": "2003",
                "value": "2838"
            },
            {
                "date": "2004",
                "value": "2770"
            },
            {
                "date": "2005",
                "value": "2888"
            },
            {
                "date": "2006",
                "value": "2838"
            },
            {
                "date": "2007",
                "value": "2906"
            },
            {
                "date": "2008",
                "value": "2884"
            },
            {
                "date": "2009",
                "value": "2909"
            },
            {
                "date": "2010",
                "value": "2909"
            },
            {
                "date": "2011",
                "value": "2892"
            },
            {
                "date": "2012",
                "value": "2912"
            },
            {
                "date": "2013",
                "value": "2937"
            }
        ],
        "Belarus": [
            {
                "date": "1961",
                "value": "3095"
            },
            {
                "date": "1962",
                "value": "3157"
            },
            {
                "date": "1963",
                "value": "3204"
            },
            {
                "date": "1964",
                "value": "3206"
            },
            {
                "date": "1965",
                "value": "3214"
            },
            {
                "date": "1966",
                "value": "3209"
            },
            {
                "date": "1967",
                "value": "3240"
            },
            {
                "date": "1968",
                "value": "3300"
            },
            {
                "date": "1969",
                "value": "3300"
            },
            {
                "date": "1970",
                "value": "3355"
            },
            {
                "date": "1971",
                "value": "3331"
            },
            {
                "date": "1972",
                "value": "3284"
            },
            {
                "date": "1973",
                "value": "3325"
            },
            {
                "date": "1974",
                "value": "3357"
            },
            {
                "date": "1975",
                "value": "3341"
            },
            {
                "date": "1976",
                "value": "3404"
            },
            {
                "date": "1977",
                "value": "3366"
            },
            {
                "date": "1978",
                "value": "3387"
            },
            {
                "date": "1979",
                "value": "3384"
            },
            {
                "date": "1980",
                "value": "3378"
            },
            {
                "date": "1981",
                "value": "3355"
            },
            {
                "date": "1982",
                "value": "3377"
            },
            {
                "date": "1983",
                "value": "3386"
            },
            {
                "date": "1984",
                "value": "3388"
            },
            {
                "date": "1985",
                "value": "3380"
            },
            {
                "date": "1986",
                "value": "3364"
            },
            {
                "date": "1987",
                "value": "3404"
            },
            {
                "date": "1988",
                "value": "3395"
            },
            {
                "date": "1989",
                "value": "3348"
            },
            {
                "date": "1990",
                "value": "3372"
            },
            {
                "date": "1991",
                "value": "3032"
            },
            {
                "date": "1992",
                "value": "3099"
            },
            {
                "date": "1993",
                "value": "3194"
            },
            {
                "date": "1994",
                "value": "3125"
            },
            {
                "date": "1995",
                "value": "3195"
            },
            {
                "date": "1996",
                "value": "3284"
            },
            {
                "date": "1997",
                "value": "3282"
            },
            {
                "date": "1998",
                "value": "3219"
            },
            {
                "date": "1999",
                "value": "3117"
            },
            {
                "date": "2000",
                "value": "2993"
            },
            {
                "date": "2001",
                "value": "3046"
            },
            {
                "date": "2002",
                "value": "2981"
            },
            {
                "date": "2003",
                "value": "2821"
            },
            {
                "date": "2004",
                "value": "2901"
            },
            {
                "date": "2005",
                "value": "2987"
            },
            {
                "date": "2006",
                "value": "3084"
            },
            {
                "date": "2007",
                "value": "3186"
            },
            {
                "date": "2008",
                "value": "3200"
            },
            {
                "date": "2009",
                "value": "3126"
            },
            {
                "date": "2010",
                "value": "3196"
            },
            {
                "date": "2011",
                "value": "3400"
            },
            {
                "date": "2012",
                "value": "3400"
            },
            {
                "date": "2013",
                "value": "3250"
            }
        ],
        "Belgium": [
            {
                "date": "1812",
                "value": "2248"
            },
            {
                "date": "1850",
                "value": "2423"
            },
            {
                "date": "1870",
                "value": "2553"
            },
            {
                "date": "1890",
                "value": "2851"
            },
            {
                "date": "1910",
                "value": "3278"
            },
            {
                "date": "1947",
                "value": "2667"
            },
            {
                "date": "1961",
                "value": "2923"
            },
            {
                "date": "1962",
                "value": "2908"
            },
            {
                "date": "1963",
                "value": "3007"
            },
            {
                "date": "1964",
                "value": "3061"
            },
            {
                "date": "1965",
                "value": "2966"
            },
            {
                "date": "1966",
                "value": "3067"
            },
            {
                "date": "1967",
                "value": "3088"
            },
            {
                "date": "1968",
                "value": "3032"
            },
            {
                "date": "1969",
                "value": "3156"
            },
            {
                "date": "1970",
                "value": "3068"
            },
            {
                "date": "1971",
                "value": "3193"
            },
            {
                "date": "1972",
                "value": "3103"
            },
            {
                "date": "1973",
                "value": "3233"
            },
            {
                "date": "1974",
                "value": "3217"
            },
            {
                "date": "1975",
                "value": "3165"
            },
            {
                "date": "1976",
                "value": "3163"
            },
            {
                "date": "1977",
                "value": "3159"
            },
            {
                "date": "1978",
                "value": "3148"
            },
            {
                "date": "1979",
                "value": "3139"
            },
            {
                "date": "1980",
                "value": "3273"
            },
            {
                "date": "1981",
                "value": "3270"
            },
            {
                "date": "1982",
                "value": "3383"
            },
            {
                "date": "1983",
                "value": "3371"
            },
            {
                "date": "1984",
                "value": "3452"
            },
            {
                "date": "1985",
                "value": "3403"
            },
            {
                "date": "1986",
                "value": "3441"
            },
            {
                "date": "1987",
                "value": "3413"
            },
            {
                "date": "1988",
                "value": "3552"
            },
            {
                "date": "1989",
                "value": "3473"
            },
            {
                "date": "1990",
                "value": "3513"
            },
            {
                "date": "1991",
                "value": "3560"
            },
            {
                "date": "1992",
                "value": "3649"
            },
            {
                "date": "1993",
                "value": "3598"
            },
            {
                "date": "1994",
                "value": "3571"
            },
            {
                "date": "1995",
                "value": "3554"
            },
            {
                "date": "1996",
                "value": "3591"
            },
            {
                "date": "1997",
                "value": "3665"
            },
            {
                "date": "1998",
                "value": "3654"
            },
            {
                "date": "1999",
                "value": "3670"
            },
            {
                "date": "2000",
                "value": "3709"
            },
            {
                "date": "2001",
                "value": "3747"
            },
            {
                "date": "2002",
                "value": "3749"
            },
            {
                "date": "2003",
                "value": "3717"
            },
            {
                "date": "2004",
                "value": "3722"
            },
            {
                "date": "2005",
                "value": "3716"
            },
            {
                "date": "2006",
                "value": "3716"
            },
            {
                "date": "2007",
                "value": "3713"
            },
            {
                "date": "2008",
                "value": "3702"
            },
            {
                "date": "2009",
                "value": "3697"
            },
            {
                "date": "2010",
                "value": "3707"
            },
            {
                "date": "2011",
                "value": "3720"
            },
            {
                "date": "2012",
                "value": "3715"
            },
            {
                "date": "2013",
                "value": "3733"
            }
        ],
        "Belize": [
            {
                "date": "1961",
                "value": "2123"
            },
            {
                "date": "1962",
                "value": "2228"
            },
            {
                "date": "1963",
                "value": "2274"
            },
            {
                "date": "1964",
                "value": "2267"
            },
            {
                "date": "1965",
                "value": "2274"
            },
            {
                "date": "1966",
                "value": "2256"
            },
            {
                "date": "1967",
                "value": "2286"
            },
            {
                "date": "1968",
                "value": "2257"
            },
            {
                "date": "1969",
                "value": "2245"
            },
            {
                "date": "1970",
                "value": "2279"
            },
            {
                "date": "1971",
                "value": "2305"
            },
            {
                "date": "1972",
                "value": "2318"
            },
            {
                "date": "1973",
                "value": "2314"
            },
            {
                "date": "1974",
                "value": "2380"
            },
            {
                "date": "1975",
                "value": "2413"
            },
            {
                "date": "1976",
                "value": "2394"
            },
            {
                "date": "1977",
                "value": "2437"
            },
            {
                "date": "1978",
                "value": "2519"
            },
            {
                "date": "1979",
                "value": "2551"
            },
            {
                "date": "1980",
                "value": "2652"
            },
            {
                "date": "1981",
                "value": "2665"
            },
            {
                "date": "1982",
                "value": "2629"
            },
            {
                "date": "1983",
                "value": "2496"
            },
            {
                "date": "1984",
                "value": "2499"
            },
            {
                "date": "1985",
                "value": "2474"
            },
            {
                "date": "1986",
                "value": "2448"
            },
            {
                "date": "1987",
                "value": "2542"
            },
            {
                "date": "1988",
                "value": "2504"
            },
            {
                "date": "1989",
                "value": "2439"
            },
            {
                "date": "1990",
                "value": "2484"
            },
            {
                "date": "1991",
                "value": "2521"
            },
            {
                "date": "1992",
                "value": "2707"
            },
            {
                "date": "1993",
                "value": "2690"
            },
            {
                "date": "1994",
                "value": "2649"
            },
            {
                "date": "1995",
                "value": "2693"
            },
            {
                "date": "1996",
                "value": "2647"
            },
            {
                "date": "1997",
                "value": "2660"
            },
            {
                "date": "1998",
                "value": "2651"
            },
            {
                "date": "1999",
                "value": "2640"
            },
            {
                "date": "2000",
                "value": "2688"
            },
            {
                "date": "2001",
                "value": "2757"
            },
            {
                "date": "2002",
                "value": "2778"
            },
            {
                "date": "2003",
                "value": "2806"
            },
            {
                "date": "2004",
                "value": "2776"
            },
            {
                "date": "2005",
                "value": "2818"
            },
            {
                "date": "2006",
                "value": "2800"
            },
            {
                "date": "2007",
                "value": "2793"
            },
            {
                "date": "2008",
                "value": "2719"
            },
            {
                "date": "2009",
                "value": "2763"
            },
            {
                "date": "2010",
                "value": "2839"
            },
            {
                "date": "2011",
                "value": "2761"
            },
            {
                "date": "2012",
                "value": "2735"
            },
            {
                "date": "2013",
                "value": "2751"
            }
        ],
        "Benin": [
            {
                "date": "1961",
                "value": "1736"
            },
            {
                "date": "1962",
                "value": "1758"
            },
            {
                "date": "1963",
                "value": "1703"
            },
            {
                "date": "1964",
                "value": "1669"
            },
            {
                "date": "1965",
                "value": "1812"
            },
            {
                "date": "1966",
                "value": "1804"
            },
            {
                "date": "1967",
                "value": "1833"
            },
            {
                "date": "1968",
                "value": "1935"
            },
            {
                "date": "1969",
                "value": "1871"
            },
            {
                "date": "1970",
                "value": "1812"
            },
            {
                "date": "1971",
                "value": "1890"
            },
            {
                "date": "1972",
                "value": "1797"
            },
            {
                "date": "1973",
                "value": "1877"
            },
            {
                "date": "1974",
                "value": "1750"
            },
            {
                "date": "1975",
                "value": "1596"
            },
            {
                "date": "1976",
                "value": "1899"
            },
            {
                "date": "1977",
                "value": "1840"
            },
            {
                "date": "1978",
                "value": "1880"
            },
            {
                "date": "1979",
                "value": "1980"
            },
            {
                "date": "1980",
                "value": "1875"
            },
            {
                "date": "1981",
                "value": "1833"
            },
            {
                "date": "1982",
                "value": "1861"
            },
            {
                "date": "1983",
                "value": "1746"
            },
            {
                "date": "1984",
                "value": "1977"
            },
            {
                "date": "1985",
                "value": "1966"
            },
            {
                "date": "1986",
                "value": "1986"
            },
            {
                "date": "1987",
                "value": "1822"
            },
            {
                "date": "1988",
                "value": "1927"
            },
            {
                "date": "1989",
                "value": "2111"
            },
            {
                "date": "1990",
                "value": "2134"
            },
            {
                "date": "1991",
                "value": "2198"
            },
            {
                "date": "1992",
                "value": "2142"
            },
            {
                "date": "1993",
                "value": "2155"
            },
            {
                "date": "1994",
                "value": "2179"
            },
            {
                "date": "1995",
                "value": "2203"
            },
            {
                "date": "1996",
                "value": "2251"
            },
            {
                "date": "1997",
                "value": "2243"
            },
            {
                "date": "1998",
                "value": "2236"
            },
            {
                "date": "1999",
                "value": "2234"
            },
            {
                "date": "2000",
                "value": "2245"
            },
            {
                "date": "2001",
                "value": "2315"
            },
            {
                "date": "2002",
                "value": "2401"
            },
            {
                "date": "2003",
                "value": "2360"
            },
            {
                "date": "2004",
                "value": "2461"
            },
            {
                "date": "2005",
                "value": "2435"
            },
            {
                "date": "2006",
                "value": "2450"
            },
            {
                "date": "2007",
                "value": "2564"
            },
            {
                "date": "2008",
                "value": "2521"
            },
            {
                "date": "2009",
                "value": "2565"
            },
            {
                "date": "2010",
                "value": "2555"
            },
            {
                "date": "2011",
                "value": "2598"
            },
            {
                "date": "2012",
                "value": "2610"
            },
            {
                "date": "2013",
                "value": "2619"
            }
        ],
        "Bermuda": [
            {
                "date": "1961",
                "value": "2573"
            },
            {
                "date": "1962",
                "value": "2617"
            },
            {
                "date": "1963",
                "value": "2578"
            },
            {
                "date": "1964",
                "value": "2642"
            },
            {
                "date": "1965",
                "value": "2616"
            },
            {
                "date": "1966",
                "value": "2642"
            },
            {
                "date": "1967",
                "value": "2652"
            },
            {
                "date": "1968",
                "value": "2757"
            },
            {
                "date": "1969",
                "value": "2816"
            },
            {
                "date": "1970",
                "value": "2873"
            },
            {
                "date": "1971",
                "value": "2830"
            },
            {
                "date": "1972",
                "value": "2905"
            },
            {
                "date": "1973",
                "value": "2816"
            },
            {
                "date": "1974",
                "value": "2799"
            },
            {
                "date": "1975",
                "value": "2718"
            },
            {
                "date": "1976",
                "value": "2797"
            },
            {
                "date": "1977",
                "value": "2695"
            },
            {
                "date": "1978",
                "value": "2841"
            },
            {
                "date": "1979",
                "value": "2888"
            },
            {
                "date": "1980",
                "value": "2910"
            },
            {
                "date": "1981",
                "value": "2968"
            },
            {
                "date": "1982",
                "value": "2977"
            },
            {
                "date": "1983",
                "value": "3034"
            },
            {
                "date": "1984",
                "value": "3072"
            },
            {
                "date": "1985",
                "value": "3107"
            },
            {
                "date": "1986",
                "value": "3074"
            },
            {
                "date": "1987",
                "value": "3044"
            },
            {
                "date": "1988",
                "value": "2890"
            },
            {
                "date": "1989",
                "value": "2914"
            },
            {
                "date": "1990",
                "value": "2785"
            },
            {
                "date": "1991",
                "value": "2792"
            },
            {
                "date": "1992",
                "value": "3022"
            },
            {
                "date": "1993",
                "value": "2982"
            },
            {
                "date": "1994",
                "value": "2817"
            },
            {
                "date": "1995",
                "value": "2921"
            },
            {
                "date": "1996",
                "value": "2868"
            },
            {
                "date": "1997",
                "value": "2792"
            },
            {
                "date": "1998",
                "value": "2772"
            },
            {
                "date": "1999",
                "value": "2643"
            },
            {
                "date": "2000",
                "value": "2651"
            },
            {
                "date": "2001",
                "value": "2612"
            },
            {
                "date": "2002",
                "value": "2583"
            },
            {
                "date": "2003",
                "value": "2490"
            },
            {
                "date": "2004",
                "value": "2455"
            },
            {
                "date": "2005",
                "value": "2521"
            },
            {
                "date": "2006",
                "value": "2590"
            },
            {
                "date": "2007",
                "value": "2626"
            },
            {
                "date": "2008",
                "value": "2701"
            },
            {
                "date": "2009",
                "value": "2716"
            },
            {
                "date": "2010",
                "value": "2677"
            },
            {
                "date": "2011",
                "value": "2649"
            },
            {
                "date": "2012",
                "value": "2649"
            },
            {
                "date": "2013",
                "value": "2671"
            }
        ],
        "Bolivia": [
            {
                "date": "1961",
                "value": "1732"
            },
            {
                "date": "1962",
                "value": "1761"
            },
            {
                "date": "1963",
                "value": "1810"
            },
            {
                "date": "1964",
                "value": "1744"
            },
            {
                "date": "1965",
                "value": "1831"
            },
            {
                "date": "1966",
                "value": "1835"
            },
            {
                "date": "1967",
                "value": "1889"
            },
            {
                "date": "1968",
                "value": "1934"
            },
            {
                "date": "1969",
                "value": "1911"
            },
            {
                "date": "1970",
                "value": "2007"
            },
            {
                "date": "1971",
                "value": "2056"
            },
            {
                "date": "1972",
                "value": "2010"
            },
            {
                "date": "1973",
                "value": "1923"
            },
            {
                "date": "1974",
                "value": "2064"
            },
            {
                "date": "1975",
                "value": "2131"
            },
            {
                "date": "1976",
                "value": "2130"
            },
            {
                "date": "1977",
                "value": "2078"
            },
            {
                "date": "1978",
                "value": "2118"
            },
            {
                "date": "1979",
                "value": "2148"
            },
            {
                "date": "1980",
                "value": "2096"
            },
            {
                "date": "1981",
                "value": "2072"
            },
            {
                "date": "1982",
                "value": "2005"
            },
            {
                "date": "1983",
                "value": "1915"
            },
            {
                "date": "1984",
                "value": "1995"
            },
            {
                "date": "1985",
                "value": "2093"
            },
            {
                "date": "1986",
                "value": "1970"
            },
            {
                "date": "1987",
                "value": "1992"
            },
            {
                "date": "1988",
                "value": "1958"
            },
            {
                "date": "1989",
                "value": "2026"
            },
            {
                "date": "1990",
                "value": "1938"
            },
            {
                "date": "1991",
                "value": "2020"
            },
            {
                "date": "1992",
                "value": "2022"
            },
            {
                "date": "1993",
                "value": "2007"
            },
            {
                "date": "1994",
                "value": "1959"
            },
            {
                "date": "1995",
                "value": "2106"
            },
            {
                "date": "1996",
                "value": "2047"
            },
            {
                "date": "1997",
                "value": "2055"
            },
            {
                "date": "1998",
                "value": "1951"
            },
            {
                "date": "1999",
                "value": "2037"
            },
            {
                "date": "2000",
                "value": "2076"
            },
            {
                "date": "2001",
                "value": "2083"
            },
            {
                "date": "2002",
                "value": "2102"
            },
            {
                "date": "2003",
                "value": "2117"
            },
            {
                "date": "2004",
                "value": "2051"
            },
            {
                "date": "2005",
                "value": "2106"
            },
            {
                "date": "2006",
                "value": "2159"
            },
            {
                "date": "2007",
                "value": "2165"
            },
            {
                "date": "2008",
                "value": "2146"
            },
            {
                "date": "2009",
                "value": "2133"
            },
            {
                "date": "2010",
                "value": "2177"
            },
            {
                "date": "2011",
                "value": "2222"
            },
            {
                "date": "2012",
                "value": "2234"
            },
            {
                "date": "2013",
                "value": "2256"
            }
        ],
        "Bosnia and Herzegovina": [
            {
                "date": "1992",
                "value": "2349"
            },
            {
                "date": "1993",
                "value": "2454"
            },
            {
                "date": "1994",
                "value": "2644"
            },
            {
                "date": "1995",
                "value": "2636"
            },
            {
                "date": "1996",
                "value": "2877"
            },
            {
                "date": "1997",
                "value": "3090"
            },
            {
                "date": "1998",
                "value": "3023"
            },
            {
                "date": "1999",
                "value": "2936"
            },
            {
                "date": "2000",
                "value": "2803"
            },
            {
                "date": "2001",
                "value": "2903"
            },
            {
                "date": "2002",
                "value": "2901"
            },
            {
                "date": "2003",
                "value": "2834"
            },
            {
                "date": "2004",
                "value": "3091"
            },
            {
                "date": "2005",
                "value": "3038"
            },
            {
                "date": "2006",
                "value": "3016"
            },
            {
                "date": "2007",
                "value": "3064"
            },
            {
                "date": "2008",
                "value": "3107"
            },
            {
                "date": "2009",
                "value": "3079"
            },
            {
                "date": "2010",
                "value": "3099"
            },
            {
                "date": "2011",
                "value": "3134"
            },
            {
                "date": "2012",
                "value": "3050"
            },
            {
                "date": "2013",
                "value": "3154"
            }
        ],
        "Botswana": [
            {
                "date": "1961",
                "value": "1976"
            },
            {
                "date": "1962",
                "value": "1909"
            },
            {
                "date": "1963",
                "value": "1972"
            },
            {
                "date": "1964",
                "value": "2001"
            },
            {
                "date": "1965",
                "value": "2005"
            },
            {
                "date": "1966",
                "value": "1947"
            },
            {
                "date": "1967",
                "value": "2010"
            },
            {
                "date": "1968",
                "value": "2052"
            },
            {
                "date": "1969",
                "value": "2013"
            },
            {
                "date": "1970",
                "value": "2035"
            },
            {
                "date": "1971",
                "value": "2121"
            },
            {
                "date": "1972",
                "value": "2133"
            },
            {
                "date": "1973",
                "value": "1993"
            },
            {
                "date": "1974",
                "value": "1871"
            },
            {
                "date": "1975",
                "value": "1948"
            },
            {
                "date": "1976",
                "value": "1928"
            },
            {
                "date": "1977",
                "value": "1993"
            },
            {
                "date": "1978",
                "value": "1874"
            },
            {
                "date": "1979",
                "value": "2015"
            },
            {
                "date": "1980",
                "value": "1965"
            },
            {
                "date": "1981",
                "value": "1987"
            },
            {
                "date": "1982",
                "value": "2013"
            },
            {
                "date": "1983",
                "value": "2087"
            },
            {
                "date": "1984",
                "value": "2205"
            },
            {
                "date": "1985",
                "value": "2167"
            },
            {
                "date": "1986",
                "value": "2169"
            },
            {
                "date": "1987",
                "value": "2183"
            },
            {
                "date": "1988",
                "value": "2200"
            },
            {
                "date": "1989",
                "value": "2113"
            },
            {
                "date": "1990",
                "value": "2216"
            },
            {
                "date": "1991",
                "value": "2224"
            },
            {
                "date": "1992",
                "value": "2203"
            },
            {
                "date": "1993",
                "value": "2069"
            },
            {
                "date": "1994",
                "value": "2186"
            },
            {
                "date": "1995",
                "value": "2188"
            },
            {
                "date": "1996",
                "value": "2214"
            },
            {
                "date": "1997",
                "value": "2165"
            },
            {
                "date": "1998",
                "value": "2081"
            },
            {
                "date": "1999",
                "value": "2117"
            },
            {
                "date": "2000",
                "value": "2080"
            },
            {
                "date": "2001",
                "value": "2154"
            },
            {
                "date": "2002",
                "value": "2111"
            },
            {
                "date": "2003",
                "value": "2113"
            },
            {
                "date": "2004",
                "value": "2191"
            },
            {
                "date": "2005",
                "value": "2198"
            },
            {
                "date": "2006",
                "value": "2150"
            },
            {
                "date": "2007",
                "value": "2166"
            },
            {
                "date": "2008",
                "value": "2184"
            },
            {
                "date": "2009",
                "value": "2199"
            },
            {
                "date": "2010",
                "value": "2234"
            },
            {
                "date": "2011",
                "value": "2273"
            },
            {
                "date": "2012",
                "value": "2342"
            },
            {
                "date": "2013",
                "value": "2326"
            }
        ],
        "Brazil": [
            {
                "date": "1946",
                "value": "2340"
            },
            {
                "date": "1961",
                "value": "2209"
            },
            {
                "date": "1962",
                "value": "2271"
            },
            {
                "date": "1963",
                "value": "2243"
            },
            {
                "date": "1964",
                "value": "2307"
            },
            {
                "date": "1965",
                "value": "2332"
            },
            {
                "date": "1966",
                "value": "2329"
            },
            {
                "date": "1967",
                "value": "2373"
            },
            {
                "date": "1968",
                "value": "2457"
            },
            {
                "date": "1969",
                "value": "2433"
            },
            {
                "date": "1970",
                "value": "2405"
            },
            {
                "date": "1971",
                "value": "2426"
            },
            {
                "date": "1972",
                "value": "2397"
            },
            {
                "date": "1973",
                "value": "2385"
            },
            {
                "date": "1974",
                "value": "2479"
            },
            {
                "date": "1975",
                "value": "2489"
            },
            {
                "date": "1976",
                "value": "2519"
            },
            {
                "date": "1977",
                "value": "2554"
            },
            {
                "date": "1978",
                "value": "2595"
            },
            {
                "date": "1979",
                "value": "2703"
            },
            {
                "date": "1980",
                "value": "2698"
            },
            {
                "date": "1981",
                "value": "2601"
            },
            {
                "date": "1982",
                "value": "2643"
            },
            {
                "date": "1983",
                "value": "2597"
            },
            {
                "date": "1984",
                "value": "2597"
            },
            {
                "date": "1985",
                "value": "2629"
            },
            {
                "date": "1986",
                "value": "2684"
            },
            {
                "date": "1987",
                "value": "2691"
            },
            {
                "date": "1988",
                "value": "2688"
            },
            {
                "date": "1989",
                "value": "2736"
            },
            {
                "date": "1990",
                "value": "2719"
            },
            {
                "date": "1991",
                "value": "2777"
            },
            {
                "date": "1992",
                "value": "2771"
            },
            {
                "date": "1993",
                "value": "2774"
            },
            {
                "date": "1994",
                "value": "2818"
            },
            {
                "date": "1995",
                "value": "2812"
            },
            {
                "date": "1996",
                "value": "2840"
            },
            {
                "date": "1997",
                "value": "2854"
            },
            {
                "date": "1998",
                "value": "2853"
            },
            {
                "date": "1999",
                "value": "2865"
            },
            {
                "date": "2000",
                "value": "2880"
            },
            {
                "date": "2001",
                "value": "2892"
            },
            {
                "date": "2002",
                "value": "2927"
            },
            {
                "date": "2003",
                "value": "3067"
            },
            {
                "date": "2004",
                "value": "3082"
            },
            {
                "date": "2005",
                "value": "3078"
            },
            {
                "date": "2006",
                "value": "3096"
            },
            {
                "date": "2007",
                "value": "3106"
            },
            {
                "date": "2008",
                "value": "3178"
            },
            {
                "date": "2009",
                "value": "3166"
            },
            {
                "date": "2010",
                "value": "3230"
            },
            {
                "date": "2011",
                "value": "3286"
            },
            {
                "date": "2012",
                "value": "3248"
            },
            {
                "date": "2013",
                "value": "3263"
            }
        ],
        "Brunei": [
            {
                "date": "1961",
                "value": "1926"
            },
            {
                "date": "1962",
                "value": "1968"
            },
            {
                "date": "1963",
                "value": "1986"
            },
            {
                "date": "1964",
                "value": "1995"
            },
            {
                "date": "1965",
                "value": "2024"
            },
            {
                "date": "1966",
                "value": "2217"
            },
            {
                "date": "1967",
                "value": "2288"
            },
            {
                "date": "1968",
                "value": "2151"
            },
            {
                "date": "1969",
                "value": "2250"
            },
            {
                "date": "1970",
                "value": "2133"
            },
            {
                "date": "1971",
                "value": "2278"
            },
            {
                "date": "1972",
                "value": "2185"
            },
            {
                "date": "1973",
                "value": "2063"
            },
            {
                "date": "1974",
                "value": "2081"
            },
            {
                "date": "1975",
                "value": "2095"
            },
            {
                "date": "1976",
                "value": "2127"
            },
            {
                "date": "1977",
                "value": "2106"
            },
            {
                "date": "1978",
                "value": "2357"
            },
            {
                "date": "1979",
                "value": "2353"
            },
            {
                "date": "1980",
                "value": "2557"
            },
            {
                "date": "1981",
                "value": "2449"
            },
            {
                "date": "1982",
                "value": "2519"
            },
            {
                "date": "1983",
                "value": "2633"
            },
            {
                "date": "1984",
                "value": "2730"
            },
            {
                "date": "1985",
                "value": "2902"
            },
            {
                "date": "1986",
                "value": "2712"
            },
            {
                "date": "1987",
                "value": "2669"
            },
            {
                "date": "1988",
                "value": "2821"
            },
            {
                "date": "1989",
                "value": "2881"
            },
            {
                "date": "1990",
                "value": "2804"
            },
            {
                "date": "1991",
                "value": "2704"
            },
            {
                "date": "1992",
                "value": "2831"
            },
            {
                "date": "1993",
                "value": "2801"
            },
            {
                "date": "1994",
                "value": "2889"
            },
            {
                "date": "1995",
                "value": "2836"
            },
            {
                "date": "1996",
                "value": "2912"
            },
            {
                "date": "1997",
                "value": "2824"
            },
            {
                "date": "1998",
                "value": "2852"
            },
            {
                "date": "1999",
                "value": "2809"
            },
            {
                "date": "2000",
                "value": "2797"
            },
            {
                "date": "2001",
                "value": "2875"
            },
            {
                "date": "2002",
                "value": "2927"
            },
            {
                "date": "2003",
                "value": "2976"
            },
            {
                "date": "2004",
                "value": "2996"
            },
            {
                "date": "2005",
                "value": "2976"
            },
            {
                "date": "2006",
                "value": "2971"
            },
            {
                "date": "2007",
                "value": "2915"
            },
            {
                "date": "2008",
                "value": "2908"
            },
            {
                "date": "2009",
                "value": "2892"
            },
            {
                "date": "2010",
                "value": "2894"
            },
            {
                "date": "2011",
                "value": "2941"
            },
            {
                "date": "2012",
                "value": "2970"
            },
            {
                "date": "2013",
                "value": "2985"
            }
        ],
        "Bulgaria": [
            {
                "date": "1961",
                "value": "3172"
            },
            {
                "date": "1962",
                "value": "3215"
            },
            {
                "date": "1963",
                "value": "3281"
            },
            {
                "date": "1964",
                "value": "3327"
            },
            {
                "date": "1965",
                "value": "3410"
            },
            {
                "date": "1966",
                "value": "3488"
            },
            {
                "date": "1967",
                "value": "3450"
            },
            {
                "date": "1968",
                "value": "3446"
            },
            {
                "date": "1969",
                "value": "3473"
            },
            {
                "date": "1970",
                "value": "3447"
            },
            {
                "date": "1971",
                "value": "3524"
            },
            {
                "date": "1972",
                "value": "3467"
            },
            {
                "date": "1973",
                "value": "3466"
            },
            {
                "date": "1974",
                "value": "3453"
            },
            {
                "date": "1975",
                "value": "3500"
            },
            {
                "date": "1976",
                "value": "3590"
            },
            {
                "date": "1977",
                "value": "3501"
            },
            {
                "date": "1978",
                "value": "3567"
            },
            {
                "date": "1979",
                "value": "3585"
            },
            {
                "date": "1980",
                "value": "3588"
            },
            {
                "date": "1981",
                "value": "3657"
            },
            {
                "date": "1982",
                "value": "3639"
            },
            {
                "date": "1983",
                "value": "3612"
            },
            {
                "date": "1984",
                "value": "3608"
            },
            {
                "date": "1985",
                "value": "3596"
            },
            {
                "date": "1986",
                "value": "3657"
            },
            {
                "date": "1987",
                "value": "3678"
            },
            {
                "date": "1988",
                "value": "3700"
            },
            {
                "date": "1989",
                "value": "3623"
            },
            {
                "date": "1990",
                "value": "3129"
            },
            {
                "date": "1991",
                "value": "3041"
            },
            {
                "date": "1992",
                "value": "3022"
            },
            {
                "date": "1993",
                "value": "2958"
            },
            {
                "date": "1994",
                "value": "2873"
            },
            {
                "date": "1995",
                "value": "2896"
            },
            {
                "date": "1996",
                "value": "2741"
            },
            {
                "date": "1997",
                "value": "2676"
            },
            {
                "date": "1998",
                "value": "2818"
            },
            {
                "date": "1999",
                "value": "2879"
            },
            {
                "date": "2000",
                "value": "2813"
            },
            {
                "date": "2001",
                "value": "2816"
            },
            {
                "date": "2002",
                "value": "2779"
            },
            {
                "date": "2003",
                "value": "2757"
            },
            {
                "date": "2004",
                "value": "2764"
            },
            {
                "date": "2005",
                "value": "2723"
            },
            {
                "date": "2006",
                "value": "2759"
            },
            {
                "date": "2007",
                "value": "2734"
            },
            {
                "date": "2008",
                "value": "2782"
            },
            {
                "date": "2009",
                "value": "2785"
            },
            {
                "date": "2010",
                "value": "2762"
            },
            {
                "date": "2011",
                "value": "2769"
            },
            {
                "date": "2012",
                "value": "2777"
            },
            {
                "date": "2013",
                "value": "2829"
            }
        ],
        "Burkina Faso": [
            {
                "date": "1961",
                "value": "1326"
            },
            {
                "date": "1962",
                "value": "1308"
            },
            {
                "date": "1963",
                "value": "1452"
            },
            {
                "date": "1964",
                "value": "1555"
            },
            {
                "date": "1965",
                "value": "1571"
            },
            {
                "date": "1966",
                "value": "1560"
            },
            {
                "date": "1967",
                "value": "1587"
            },
            {
                "date": "1968",
                "value": "1602"
            },
            {
                "date": "1969",
                "value": "1604"
            },
            {
                "date": "1970",
                "value": "1546"
            },
            {
                "date": "1971",
                "value": "1523"
            },
            {
                "date": "1972",
                "value": "1459"
            },
            {
                "date": "1973",
                "value": "1434"
            },
            {
                "date": "1974",
                "value": "1462"
            },
            {
                "date": "1975",
                "value": "1507"
            },
            {
                "date": "1976",
                "value": "1568"
            },
            {
                "date": "1977",
                "value": "1400"
            },
            {
                "date": "1978",
                "value": "1580"
            },
            {
                "date": "1979",
                "value": "1676"
            },
            {
                "date": "1980",
                "value": "1564"
            },
            {
                "date": "1981",
                "value": "1506"
            },
            {
                "date": "1982",
                "value": "1670"
            },
            {
                "date": "1983",
                "value": "1589"
            },
            {
                "date": "1984",
                "value": "1545"
            },
            {
                "date": "1985",
                "value": "1728"
            },
            {
                "date": "1986",
                "value": "2042"
            },
            {
                "date": "1987",
                "value": "2025"
            },
            {
                "date": "1988",
                "value": "2022"
            },
            {
                "date": "1989",
                "value": "2086"
            },
            {
                "date": "1990",
                "value": "2196"
            },
            {
                "date": "1991",
                "value": "2233"
            },
            {
                "date": "1992",
                "value": "2292"
            },
            {
                "date": "1993",
                "value": "2313"
            },
            {
                "date": "1994",
                "value": "2344"
            },
            {
                "date": "1995",
                "value": "2337"
            },
            {
                "date": "1996",
                "value": "2338"
            },
            {
                "date": "1997",
                "value": "2311"
            },
            {
                "date": "1998",
                "value": "2285"
            },
            {
                "date": "1999",
                "value": "2343"
            },
            {
                "date": "2000",
                "value": "2318"
            },
            {
                "date": "2001",
                "value": "2332"
            },
            {
                "date": "2002",
                "value": "2411"
            },
            {
                "date": "2003",
                "value": "2492"
            },
            {
                "date": "2004",
                "value": "2505"
            },
            {
                "date": "2005",
                "value": "2463"
            },
            {
                "date": "2006",
                "value": "2559"
            },
            {
                "date": "2007",
                "value": "2546"
            },
            {
                "date": "2008",
                "value": "2588"
            },
            {
                "date": "2009",
                "value": "2639"
            },
            {
                "date": "2010",
                "value": "2681"
            },
            {
                "date": "2011",
                "value": "2664"
            },
            {
                "date": "2012",
                "value": "2707"
            },
            {
                "date": "2013",
                "value": "2720"
            }
        ],
        "Burma": [
            {
                "date": "1948",
                "value": "1877"
            }
        ],
        "Cabo Verde": [
            {
                "date": "1961",
                "value": "1647"
            },
            {
                "date": "1962",
                "value": "1542"
            },
            {
                "date": "1963",
                "value": "1463"
            },
            {
                "date": "1964",
                "value": "1596"
            },
            {
                "date": "1965",
                "value": "1638"
            },
            {
                "date": "1966",
                "value": "1598"
            },
            {
                "date": "1967",
                "value": "1631"
            },
            {
                "date": "1968",
                "value": "1562"
            },
            {
                "date": "1969",
                "value": "1665"
            },
            {
                "date": "1970",
                "value": "1662"
            },
            {
                "date": "1971",
                "value": "1662"
            },
            {
                "date": "1972",
                "value": "1749"
            },
            {
                "date": "1973",
                "value": "1727"
            },
            {
                "date": "1974",
                "value": "1683"
            },
            {
                "date": "1975",
                "value": "1721"
            },
            {
                "date": "1976",
                "value": "1676"
            },
            {
                "date": "1977",
                "value": "1688"
            },
            {
                "date": "1978",
                "value": "2082"
            },
            {
                "date": "1979",
                "value": "2144"
            },
            {
                "date": "1980",
                "value": "2098"
            },
            {
                "date": "1981",
                "value": "2261"
            },
            {
                "date": "1982",
                "value": "2110"
            },
            {
                "date": "1983",
                "value": "2348"
            },
            {
                "date": "1984",
                "value": "2379"
            },
            {
                "date": "1985",
                "value": "2226"
            },
            {
                "date": "1986",
                "value": "2382"
            },
            {
                "date": "1987",
                "value": "2592"
            },
            {
                "date": "1988",
                "value": "2656"
            },
            {
                "date": "1989",
                "value": "2470"
            },
            {
                "date": "1990",
                "value": "2368"
            },
            {
                "date": "1991",
                "value": "2269"
            },
            {
                "date": "1992",
                "value": "2511"
            },
            {
                "date": "1993",
                "value": "2445"
            },
            {
                "date": "1994",
                "value": "2435"
            },
            {
                "date": "1995",
                "value": "2305"
            },
            {
                "date": "1996",
                "value": "2310"
            },
            {
                "date": "1997",
                "value": "2341"
            },
            {
                "date": "1998",
                "value": "2339"
            },
            {
                "date": "1999",
                "value": "2328"
            },
            {
                "date": "2000",
                "value": "2358"
            },
            {
                "date": "2001",
                "value": "2366"
            },
            {
                "date": "2002",
                "value": "2324"
            },
            {
                "date": "2003",
                "value": "2414"
            },
            {
                "date": "2004",
                "value": "2523"
            },
            {
                "date": "2005",
                "value": "2517"
            },
            {
                "date": "2006",
                "value": "2513"
            },
            {
                "date": "2007",
                "value": "2574"
            },
            {
                "date": "2008",
                "value": "2540"
            },
            {
                "date": "2009",
                "value": "2558"
            },
            {
                "date": "2010",
                "value": "2524"
            },
            {
                "date": "2011",
                "value": "2566"
            },
            {
                "date": "2012",
                "value": "2590"
            },
            {
                "date": "2013",
                "value": "2609"
            }
        ],
        "Cambodia": [
            {
                "date": "1946",
                "value": "1560"
            },
            {
                "date": "1961",
                "value": "1913"
            },
            {
                "date": "1962",
                "value": "1883"
            },
            {
                "date": "1963",
                "value": "1945"
            },
            {
                "date": "1964",
                "value": "1915"
            },
            {
                "date": "1965",
                "value": "1928"
            },
            {
                "date": "1966",
                "value": "1945"
            },
            {
                "date": "1967",
                "value": "1973"
            },
            {
                "date": "1968",
                "value": "2017"
            },
            {
                "date": "1969",
                "value": "2017"
            },
            {
                "date": "1970",
                "value": "2088"
            },
            {
                "date": "1971",
                "value": "2069"
            },
            {
                "date": "1972",
                "value": "2016"
            },
            {
                "date": "1973",
                "value": "1938"
            },
            {
                "date": "1974",
                "value": "1902"
            },
            {
                "date": "1975",
                "value": "1596"
            },
            {
                "date": "1976",
                "value": "1519"
            },
            {
                "date": "1977",
                "value": "1537"
            },
            {
                "date": "1978",
                "value": "1580"
            },
            {
                "date": "1979",
                "value": "1616"
            },
            {
                "date": "1980",
                "value": "1682"
            },
            {
                "date": "1981",
                "value": "1776"
            },
            {
                "date": "1982",
                "value": "1812"
            },
            {
                "date": "1983",
                "value": "1881"
            },
            {
                "date": "1984",
                "value": "1855"
            },
            {
                "date": "1985",
                "value": "1795"
            },
            {
                "date": "1986",
                "value": "1782"
            },
            {
                "date": "1987",
                "value": "1904"
            },
            {
                "date": "1988",
                "value": "1942"
            },
            {
                "date": "1989",
                "value": "1885"
            },
            {
                "date": "1990",
                "value": "1938"
            },
            {
                "date": "1991",
                "value": "2009"
            },
            {
                "date": "1992",
                "value": "2037"
            },
            {
                "date": "1993",
                "value": "2026"
            },
            {
                "date": "1994",
                "value": "2038"
            },
            {
                "date": "1995",
                "value": "2038"
            },
            {
                "date": "1996",
                "value": "1901"
            },
            {
                "date": "1997",
                "value": "1895"
            },
            {
                "date": "1998",
                "value": "1977"
            },
            {
                "date": "1999",
                "value": "2052"
            },
            {
                "date": "2000",
                "value": "2115"
            },
            {
                "date": "2001",
                "value": "2172"
            },
            {
                "date": "2002",
                "value": "2264"
            },
            {
                "date": "2003",
                "value": "2261"
            },
            {
                "date": "2004",
                "value": "2275"
            },
            {
                "date": "2005",
                "value": "2327"
            },
            {
                "date": "2006",
                "value": "2377"
            },
            {
                "date": "2007",
                "value": "2388"
            },
            {
                "date": "2008",
                "value": "2403"
            },
            {
                "date": "2009",
                "value": "2417"
            },
            {
                "date": "2010",
                "value": "2417"
            },
            {
                "date": "2011",
                "value": "2426"
            },
            {
                "date": "2012",
                "value": "2432"
            },
            {
                "date": "2013",
                "value": "2477"
            }
        ],
        "Cameroon": [
            {
                "date": "1961",
                "value": "2013"
            },
            {
                "date": "1962",
                "value": "2020"
            },
            {
                "date": "1963",
                "value": "2063"
            },
            {
                "date": "1964",
                "value": "2068"
            },
            {
                "date": "1965",
                "value": "1960"
            },
            {
                "date": "1966",
                "value": "2033"
            },
            {
                "date": "1967",
                "value": "2038"
            },
            {
                "date": "1968",
                "value": "2103"
            },
            {
                "date": "1969",
                "value": "2153"
            },
            {
                "date": "1970",
                "value": "2166"
            },
            {
                "date": "1971",
                "value": "2219"
            },
            {
                "date": "1972",
                "value": "2259"
            },
            {
                "date": "1973",
                "value": "2241"
            },
            {
                "date": "1974",
                "value": "2355"
            },
            {
                "date": "1975",
                "value": "2334"
            },
            {
                "date": "1976",
                "value": "2284"
            },
            {
                "date": "1977",
                "value": "2269"
            },
            {
                "date": "1978",
                "value": "2242"
            },
            {
                "date": "1979",
                "value": "2273"
            },
            {
                "date": "1980",
                "value": "2248"
            },
            {
                "date": "1981",
                "value": "2179"
            },
            {
                "date": "1982",
                "value": "2170"
            },
            {
                "date": "1983",
                "value": "2129"
            },
            {
                "date": "1984",
                "value": "2056"
            },
            {
                "date": "1985",
                "value": "2091"
            },
            {
                "date": "1986",
                "value": "2160"
            },
            {
                "date": "1987",
                "value": "2026"
            },
            {
                "date": "1988",
                "value": "1985"
            },
            {
                "date": "1989",
                "value": "2030"
            },
            {
                "date": "1990",
                "value": "2034"
            },
            {
                "date": "1991",
                "value": "2015"
            },
            {
                "date": "1992",
                "value": "2113"
            },
            {
                "date": "1993",
                "value": "2021"
            },
            {
                "date": "1994",
                "value": "2032"
            },
            {
                "date": "1995",
                "value": "2048"
            },
            {
                "date": "1996",
                "value": "2033"
            },
            {
                "date": "1997",
                "value": "2097"
            },
            {
                "date": "1998",
                "value": "2100"
            },
            {
                "date": "1999",
                "value": "2120"
            },
            {
                "date": "2000",
                "value": "2116"
            },
            {
                "date": "2001",
                "value": "2162"
            },
            {
                "date": "2002",
                "value": "2204"
            },
            {
                "date": "2003",
                "value": "2233"
            },
            {
                "date": "2004",
                "value": "2246"
            },
            {
                "date": "2005",
                "value": "2311"
            },
            {
                "date": "2006",
                "value": "2354"
            },
            {
                "date": "2007",
                "value": "2378"
            },
            {
                "date": "2008",
                "value": "2446"
            },
            {
                "date": "2009",
                "value": "2492"
            },
            {
                "date": "2010",
                "value": "2510"
            },
            {
                "date": "2011",
                "value": "2573"
            },
            {
                "date": "2012",
                "value": "2622"
            },
            {
                "date": "2013",
                "value": "2671"
            }
        ],
        "Canada": [
            {
                "date": "1948",
                "value": "3141"
            },
            {
                "date": "1961",
                "value": "2807"
            },
            {
                "date": "1962",
                "value": "2843"
            },
            {
                "date": "1963",
                "value": "2899"
            },
            {
                "date": "1964",
                "value": "2795"
            },
            {
                "date": "1965",
                "value": "2924"
            },
            {
                "date": "1966",
                "value": "2915"
            },
            {
                "date": "1967",
                "value": "2948"
            },
            {
                "date": "1968",
                "value": "2932"
            },
            {
                "date": "1969",
                "value": "2984"
            },
            {
                "date": "1970",
                "value": "2958"
            },
            {
                "date": "1971",
                "value": "2925"
            },
            {
                "date": "1972",
                "value": "2935"
            },
            {
                "date": "1973",
                "value": "2965"
            },
            {
                "date": "1974",
                "value": "2974"
            },
            {
                "date": "1975",
                "value": "2880"
            },
            {
                "date": "1976",
                "value": "3031"
            },
            {
                "date": "1977",
                "value": "3006"
            },
            {
                "date": "1978",
                "value": "2934"
            },
            {
                "date": "1979",
                "value": "2928"
            },
            {
                "date": "1980",
                "value": "2950"
            },
            {
                "date": "1981",
                "value": "2903"
            },
            {
                "date": "1982",
                "value": "2961"
            },
            {
                "date": "1983",
                "value": "2916"
            },
            {
                "date": "1984",
                "value": "2993"
            },
            {
                "date": "1985",
                "value": "3042"
            },
            {
                "date": "1986",
                "value": "3086"
            },
            {
                "date": "1987",
                "value": "3139"
            },
            {
                "date": "1988",
                "value": "3015"
            },
            {
                "date": "1989",
                "value": "3041"
            },
            {
                "date": "1990",
                "value": "3023"
            },
            {
                "date": "1991",
                "value": "3042"
            },
            {
                "date": "1992",
                "value": "3092"
            },
            {
                "date": "1993",
                "value": "3122"
            },
            {
                "date": "1994",
                "value": "3209"
            },
            {
                "date": "1995",
                "value": "3208"
            },
            {
                "date": "1996",
                "value": "3252"
            },
            {
                "date": "1997",
                "value": "3387"
            },
            {
                "date": "1998",
                "value": "3459"
            },
            {
                "date": "1999",
                "value": "3499"
            },
            {
                "date": "2000",
                "value": "3506"
            },
            {
                "date": "2001",
                "value": "3501"
            },
            {
                "date": "2002",
                "value": "3496"
            },
            {
                "date": "2003",
                "value": "3518"
            },
            {
                "date": "2004",
                "value": "3525"
            },
            {
                "date": "2005",
                "value": "3475"
            },
            {
                "date": "2006",
                "value": "3470"
            },
            {
                "date": "2007",
                "value": "3483"
            },
            {
                "date": "2008",
                "value": "3465"
            },
            {
                "date": "2009",
                "value": "3440"
            },
            {
                "date": "2010",
                "value": "3447"
            },
            {
                "date": "2011",
                "value": "3474"
            },
            {
                "date": "2012",
                "value": "3485"
            },
            {
                "date": "2013",
                "value": "3494"
            }
        ],
        "Central African Republic": [
            {
                "date": "1961",
                "value": "2256"
            },
            {
                "date": "1962",
                "value": "2217"
            },
            {
                "date": "1963",
                "value": "2149"
            },
            {
                "date": "1964",
                "value": "2114"
            },
            {
                "date": "1965",
                "value": "2295"
            },
            {
                "date": "1966",
                "value": "2080"
            },
            {
                "date": "1967",
                "value": "2217"
            },
            {
                "date": "1968",
                "value": "2215"
            },
            {
                "date": "1969",
                "value": "2266"
            },
            {
                "date": "1970",
                "value": "2340"
            },
            {
                "date": "1971",
                "value": "2344"
            },
            {
                "date": "1972",
                "value": "2359"
            },
            {
                "date": "1973",
                "value": "2426"
            },
            {
                "date": "1974",
                "value": "2529"
            },
            {
                "date": "1975",
                "value": "2376"
            },
            {
                "date": "1976",
                "value": "2394"
            },
            {
                "date": "1977",
                "value": "2397"
            },
            {
                "date": "1978",
                "value": "2348"
            },
            {
                "date": "1979",
                "value": "2364"
            },
            {
                "date": "1980",
                "value": "2310"
            },
            {
                "date": "1981",
                "value": "2319"
            },
            {
                "date": "1982",
                "value": "2237"
            },
            {
                "date": "1983",
                "value": "2107"
            },
            {
                "date": "1984",
                "value": "1922"
            },
            {
                "date": "1985",
                "value": "1841"
            },
            {
                "date": "1986",
                "value": "1903"
            },
            {
                "date": "1987",
                "value": "1868"
            },
            {
                "date": "1988",
                "value": "1867"
            },
            {
                "date": "1989",
                "value": "1895"
            },
            {
                "date": "1990",
                "value": "1904"
            },
            {
                "date": "1991",
                "value": "1912"
            },
            {
                "date": "1992",
                "value": "1904"
            },
            {
                "date": "1993",
                "value": "1877"
            },
            {
                "date": "1994",
                "value": "1880"
            },
            {
                "date": "1995",
                "value": "1881"
            },
            {
                "date": "1996",
                "value": "1896"
            },
            {
                "date": "1997",
                "value": "1916"
            },
            {
                "date": "1998",
                "value": "1987"
            },
            {
                "date": "1999",
                "value": "1930"
            },
            {
                "date": "2000",
                "value": "1983"
            },
            {
                "date": "2001",
                "value": "1988"
            },
            {
                "date": "2002",
                "value": "1996"
            },
            {
                "date": "2003",
                "value": "1966"
            },
            {
                "date": "2004",
                "value": "1989"
            },
            {
                "date": "2005",
                "value": "2026"
            },
            {
                "date": "2006",
                "value": "2029"
            },
            {
                "date": "2007",
                "value": "2090"
            },
            {
                "date": "2008",
                "value": "2133"
            },
            {
                "date": "2009",
                "value": "2139"
            },
            {
                "date": "2010",
                "value": "2164"
            },
            {
                "date": "2011",
                "value": "2154"
            },
            {
                "date": "2012",
                "value": "2116"
            },
            {
                "date": "2013",
                "value": "1879"
            }
        ],
        "Chad": [
            {
                "date": "1961",
                "value": "2257"
            },
            {
                "date": "1962",
                "value": "2373"
            },
            {
                "date": "1963",
                "value": "2361"
            },
            {
                "date": "1964",
                "value": "2327"
            },
            {
                "date": "1965",
                "value": "2297"
            },
            {
                "date": "1966",
                "value": "2262"
            },
            {
                "date": "1967",
                "value": "2257"
            },
            {
                "date": "1968",
                "value": "2226"
            },
            {
                "date": "1969",
                "value": "2187"
            },
            {
                "date": "1970",
                "value": "2113"
            },
            {
                "date": "1971",
                "value": "2023"
            },
            {
                "date": "1972",
                "value": "1876"
            },
            {
                "date": "1973",
                "value": "1766"
            },
            {
                "date": "1974",
                "value": "1785"
            },
            {
                "date": "1975",
                "value": "1722"
            },
            {
                "date": "1976",
                "value": "1677"
            },
            {
                "date": "1977",
                "value": "1683"
            },
            {
                "date": "1978",
                "value": "1659"
            },
            {
                "date": "1979",
                "value": "1666"
            },
            {
                "date": "1980",
                "value": "1636"
            },
            {
                "date": "1981",
                "value": "1615"
            },
            {
                "date": "1982",
                "value": "1609"
            },
            {
                "date": "1983",
                "value": "1586"
            },
            {
                "date": "1984",
                "value": "1555"
            },
            {
                "date": "1985",
                "value": "1765"
            },
            {
                "date": "1986",
                "value": "1623"
            },
            {
                "date": "1987",
                "value": "1572"
            },
            {
                "date": "1988",
                "value": "1750"
            },
            {
                "date": "1989",
                "value": "1668"
            },
            {
                "date": "1990",
                "value": "1648"
            },
            {
                "date": "1991",
                "value": "1800"
            },
            {
                "date": "1992",
                "value": "1819"
            },
            {
                "date": "1993",
                "value": "1652"
            },
            {
                "date": "1994",
                "value": "1979"
            },
            {
                "date": "1995",
                "value": "1798"
            },
            {
                "date": "1996",
                "value": "1815"
            },
            {
                "date": "1997",
                "value": "1897"
            },
            {
                "date": "1998",
                "value": "2037"
            },
            {
                "date": "1999",
                "value": "1989"
            },
            {
                "date": "2000",
                "value": "1947"
            },
            {
                "date": "2001",
                "value": "2018"
            },
            {
                "date": "2002",
                "value": "1968"
            },
            {
                "date": "2003",
                "value": "2024"
            },
            {
                "date": "2004",
                "value": "2026"
            },
            {
                "date": "2005",
                "value": "2034"
            },
            {
                "date": "2006",
                "value": "2022"
            },
            {
                "date": "2007",
                "value": "2028"
            },
            {
                "date": "2008",
                "value": "2027"
            },
            {
                "date": "2009",
                "value": "2021"
            },
            {
                "date": "2010",
                "value": "2057"
            },
            {
                "date": "2011",
                "value": "2062"
            },
            {
                "date": "2012",
                "value": "2124"
            },
            {
                "date": "2013",
                "value": "2110"
            }
        ],
        "Chile": [
            {
                "date": "1948",
                "value": "2356"
            },
            {
                "date": "1961",
                "value": "2497"
            },
            {
                "date": "1962",
                "value": "2533"
            },
            {
                "date": "1963",
                "value": "2633"
            },
            {
                "date": "1964",
                "value": "2583"
            },
            {
                "date": "1965",
                "value": "2564"
            },
            {
                "date": "1966",
                "value": "2649"
            },
            {
                "date": "1967",
                "value": "2621"
            },
            {
                "date": "1968",
                "value": "2651"
            },
            {
                "date": "1969",
                "value": "2645"
            },
            {
                "date": "1970",
                "value": "2637"
            },
            {
                "date": "1971",
                "value": "2708"
            },
            {
                "date": "1972",
                "value": "2723"
            },
            {
                "date": "1973",
                "value": "2571"
            },
            {
                "date": "1974",
                "value": "2720"
            },
            {
                "date": "1975",
                "value": "2490"
            },
            {
                "date": "1976",
                "value": "2602"
            },
            {
                "date": "1977",
                "value": "2557"
            },
            {
                "date": "1978",
                "value": "2614"
            },
            {
                "date": "1979",
                "value": "2656"
            },
            {
                "date": "1980",
                "value": "2682"
            },
            {
                "date": "1981",
                "value": "2698"
            },
            {
                "date": "1982",
                "value": "2605"
            },
            {
                "date": "1983",
                "value": "2539"
            },
            {
                "date": "1984",
                "value": "2574"
            },
            {
                "date": "1985",
                "value": "2479"
            },
            {
                "date": "1986",
                "value": "2486"
            },
            {
                "date": "1987",
                "value": "2486"
            },
            {
                "date": "1988",
                "value": "2460"
            },
            {
                "date": "1989",
                "value": "2500"
            },
            {
                "date": "1990",
                "value": "2569"
            },
            {
                "date": "1991",
                "value": "2601"
            },
            {
                "date": "1992",
                "value": "2708"
            },
            {
                "date": "1993",
                "value": "2712"
            },
            {
                "date": "1994",
                "value": "2745"
            },
            {
                "date": "1995",
                "value": "2756"
            },
            {
                "date": "1996",
                "value": "2779"
            },
            {
                "date": "1997",
                "value": "2789"
            },
            {
                "date": "1998",
                "value": "2795"
            },
            {
                "date": "1999",
                "value": "2800"
            },
            {
                "date": "2000",
                "value": "2833"
            },
            {
                "date": "2001",
                "value": "2868"
            },
            {
                "date": "2002",
                "value": "2900"
            },
            {
                "date": "2003",
                "value": "2891"
            },
            {
                "date": "2004",
                "value": "2917"
            },
            {
                "date": "2005",
                "value": "2909"
            },
            {
                "date": "2006",
                "value": "2957"
            },
            {
                "date": "2007",
                "value": "2933"
            },
            {
                "date": "2008",
                "value": "2943"
            },
            {
                "date": "2009",
                "value": "2892"
            },
            {
                "date": "2010",
                "value": "2915"
            },
            {
                "date": "2011",
                "value": "2956"
            },
            {
                "date": "2012",
                "value": "2958"
            },
            {
                "date": "2013",
                "value": "2979"
            }
        ],
        "China": [
            {
                "date": "1946",
                "value": "2030"
            },
            {
                "date": "1952",
                "value": "1861"
            },
            {
                "date": "1954",
                "value": "1895"
            },
            {
                "date": "1956",
                "value": "2051"
            },
            {
                "date": "1958",
                "value": "2053"
            },
            {
                "date": "1960",
                "value": "1453"
            },
            {
                "date": "1961",
                "value": "1439"
            },
            {
                "date": "1962",
                "value": "1547"
            },
            {
                "date": "1963",
                "value": "1614"
            },
            {
                "date": "1964",
                "value": "1685"
            },
            {
                "date": "1965",
                "value": "1813"
            },
            {
                "date": "1966",
                "value": "1880"
            },
            {
                "date": "1967",
                "value": "1833"
            },
            {
                "date": "1968",
                "value": "1776"
            },
            {
                "date": "1969",
                "value": "1751"
            },
            {
                "date": "1970",
                "value": "1859"
            },
            {
                "date": "1971",
                "value": "1863"
            },
            {
                "date": "1972",
                "value": "1848"
            },
            {
                "date": "1973",
                "value": "1917"
            },
            {
                "date": "1974",
                "value": "1913"
            },
            {
                "date": "1975",
                "value": "1929"
            },
            {
                "date": "1976",
                "value": "1896"
            },
            {
                "date": "1977",
                "value": "1934"
            },
            {
                "date": "1978",
                "value": "2080"
            },
            {
                "date": "1979",
                "value": "2095"
            },
            {
                "date": "1980",
                "value": "2161"
            },
            {
                "date": "1981",
                "value": "2178"
            },
            {
                "date": "1982",
                "value": "2339"
            },
            {
                "date": "1983",
                "value": "2407"
            },
            {
                "date": "1984",
                "value": "2440"
            },
            {
                "date": "1985",
                "value": "2437"
            },
            {
                "date": "1986",
                "value": "2433"
            },
            {
                "date": "1987",
                "value": "2448"
            },
            {
                "date": "1988",
                "value": "2427"
            },
            {
                "date": "1989",
                "value": "2417"
            },
            {
                "date": "1990",
                "value": "2515"
            },
            {
                "date": "1991",
                "value": "2444"
            },
            {
                "date": "1992",
                "value": "2468"
            },
            {
                "date": "1993",
                "value": "2550"
            },
            {
                "date": "1994",
                "value": "2614"
            },
            {
                "date": "1995",
                "value": "2701"
            },
            {
                "date": "1996",
                "value": "2704"
            },
            {
                "date": "1997",
                "value": "2734"
            },
            {
                "date": "1998",
                "value": "2776"
            },
            {
                "date": "1999",
                "value": "2770"
            },
            {
                "date": "2000",
                "value": "2814"
            },
            {
                "date": "2001",
                "value": "2821"
            },
            {
                "date": "2002",
                "value": "2836"
            },
            {
                "date": "2003",
                "value": "2838"
            },
            {
                "date": "2004",
                "value": "2861"
            },
            {
                "date": "2005",
                "value": "2883"
            },
            {
                "date": "2006",
                "value": "2886"
            },
            {
                "date": "2007",
                "value": "2921"
            },
            {
                "date": "2008",
                "value": "2977"
            },
            {
                "date": "2009",
                "value": "2995"
            },
            {
                "date": "2010",
                "value": "3044"
            },
            {
                "date": "2011",
                "value": "3080"
            },
            {
                "date": "2012",
                "value": "3098"
            },
            {
                "date": "2013",
                "value": "3108"
            }
        ],
        "Colombia": [
            {
                "date": "1961",
                "value": "2191"
            },
            {
                "date": "1962",
                "value": "2205"
            },
            {
                "date": "1963",
                "value": "2094"
            },
            {
                "date": "1964",
                "value": "2141"
            },
            {
                "date": "1965",
                "value": "2098"
            },
            {
                "date": "1966",
                "value": "2035"
            },
            {
                "date": "1967",
                "value": "2019"
            },
            {
                "date": "1968",
                "value": "2023"
            },
            {
                "date": "1969",
                "value": "2022"
            },
            {
                "date": "1970",
                "value": "2046"
            },
            {
                "date": "1971",
                "value": "2125"
            },
            {
                "date": "1972",
                "value": "2147"
            },
            {
                "date": "1973",
                "value": "2170"
            },
            {
                "date": "1974",
                "value": "2251"
            },
            {
                "date": "1975",
                "value": "2292"
            },
            {
                "date": "1976",
                "value": "2419"
            },
            {
                "date": "1977",
                "value": "2393"
            },
            {
                "date": "1978",
                "value": "2472"
            },
            {
                "date": "1979",
                "value": "2452"
            },
            {
                "date": "1980",
                "value": "2521"
            },
            {
                "date": "1981",
                "value": "2515"
            },
            {
                "date": "1982",
                "value": "2513"
            },
            {
                "date": "1983",
                "value": "2551"
            },
            {
                "date": "1984",
                "value": "2526"
            },
            {
                "date": "1985",
                "value": "2493"
            },
            {
                "date": "1986",
                "value": "2483"
            },
            {
                "date": "1987",
                "value": "2577"
            },
            {
                "date": "1988",
                "value": "2531"
            },
            {
                "date": "1989",
                "value": "2568"
            },
            {
                "date": "1990",
                "value": "2563"
            },
            {
                "date": "1991",
                "value": "2567"
            },
            {
                "date": "1992",
                "value": "2637"
            },
            {
                "date": "1993",
                "value": "2684"
            },
            {
                "date": "1994",
                "value": "2713"
            },
            {
                "date": "1995",
                "value": "2772"
            },
            {
                "date": "1996",
                "value": "2758"
            },
            {
                "date": "1997",
                "value": "2768"
            },
            {
                "date": "1998",
                "value": "2728"
            },
            {
                "date": "1999",
                "value": "2763"
            },
            {
                "date": "2000",
                "value": "2779"
            },
            {
                "date": "2001",
                "value": "2815"
            },
            {
                "date": "2002",
                "value": "2782"
            },
            {
                "date": "2003",
                "value": "2798"
            },
            {
                "date": "2004",
                "value": "2778"
            },
            {
                "date": "2005",
                "value": "2733"
            },
            {
                "date": "2006",
                "value": "2770"
            },
            {
                "date": "2007",
                "value": "2804"
            },
            {
                "date": "2008",
                "value": "2807"
            },
            {
                "date": "2009",
                "value": "2708"
            },
            {
                "date": "2010",
                "value": "2665"
            },
            {
                "date": "2011",
                "value": "2696"
            },
            {
                "date": "2012",
                "value": "2752"
            },
            {
                "date": "2013",
                "value": "2804"
            }
        ],
        "Congo": [
            {
                "date": "1961",
                "value": "2091"
            },
            {
                "date": "1962",
                "value": "2094"
            },
            {
                "date": "1963",
                "value": "2093"
            },
            {
                "date": "1964",
                "value": "2130"
            },
            {
                "date": "1965",
                "value": "2083"
            },
            {
                "date": "1966",
                "value": "2017"
            },
            {
                "date": "1967",
                "value": "2014"
            },
            {
                "date": "1968",
                "value": "2014"
            },
            {
                "date": "1969",
                "value": "1936"
            },
            {
                "date": "1970",
                "value": "1891"
            },
            {
                "date": "1971",
                "value": "1933"
            },
            {
                "date": "1972",
                "value": "1998"
            },
            {
                "date": "1973",
                "value": "1949"
            },
            {
                "date": "1974",
                "value": "1896"
            },
            {
                "date": "1975",
                "value": "2003"
            },
            {
                "date": "1976",
                "value": "1967"
            },
            {
                "date": "1977",
                "value": "2002"
            },
            {
                "date": "1978",
                "value": "2011"
            },
            {
                "date": "1979",
                "value": "2015"
            },
            {
                "date": "1980",
                "value": "2066"
            },
            {
                "date": "1981",
                "value": "2029"
            },
            {
                "date": "1982",
                "value": "2128"
            },
            {
                "date": "1983",
                "value": "2108"
            },
            {
                "date": "1984",
                "value": "2134"
            },
            {
                "date": "1985",
                "value": "2129"
            },
            {
                "date": "1986",
                "value": "2120"
            },
            {
                "date": "1987",
                "value": "2159"
            },
            {
                "date": "1988",
                "value": "2141"
            },
            {
                "date": "1989",
                "value": "2102"
            },
            {
                "date": "1990",
                "value": "2001"
            },
            {
                "date": "1991",
                "value": "2001"
            },
            {
                "date": "1992",
                "value": "2012"
            },
            {
                "date": "1993",
                "value": "1995"
            },
            {
                "date": "1994",
                "value": "1980"
            },
            {
                "date": "1995",
                "value": "1978"
            },
            {
                "date": "1996",
                "value": "1970"
            },
            {
                "date": "1997",
                "value": "1993"
            },
            {
                "date": "1998",
                "value": "2045"
            },
            {
                "date": "1999",
                "value": "2099"
            },
            {
                "date": "2000",
                "value": "2177"
            },
            {
                "date": "2001",
                "value": "2232"
            },
            {
                "date": "2002",
                "value": "2259"
            },
            {
                "date": "2003",
                "value": "2236"
            },
            {
                "date": "2004",
                "value": "2263"
            },
            {
                "date": "2005",
                "value": "2043"
            },
            {
                "date": "2006",
                "value": "2143"
            },
            {
                "date": "2007",
                "value": "2135"
            },
            {
                "date": "2008",
                "value": "2110"
            },
            {
                "date": "2009",
                "value": "2142"
            },
            {
                "date": "2010",
                "value": "2143"
            },
            {
                "date": "2011",
                "value": "2185"
            },
            {
                "date": "2012",
                "value": "2158"
            },
            {
                "date": "2013",
                "value": "2208"
            }
        ],
        "Costa Rica": [
            {
                "date": "1961",
                "value": "1973"
            },
            {
                "date": "1962",
                "value": "2017"
            },
            {
                "date": "1963",
                "value": "2026"
            },
            {
                "date": "1964",
                "value": "2107"
            },
            {
                "date": "1965",
                "value": "2174"
            },
            {
                "date": "1966",
                "value": "2146"
            },
            {
                "date": "1967",
                "value": "2100"
            },
            {
                "date": "1968",
                "value": "2167"
            },
            {
                "date": "1969",
                "value": "2195"
            },
            {
                "date": "1970",
                "value": "2250"
            },
            {
                "date": "1971",
                "value": "2312"
            },
            {
                "date": "1972",
                "value": "2341"
            },
            {
                "date": "1973",
                "value": "2371"
            },
            {
                "date": "1974",
                "value": "2384"
            },
            {
                "date": "1975",
                "value": "2425"
            },
            {
                "date": "1976",
                "value": "2462"
            },
            {
                "date": "1977",
                "value": "2480"
            },
            {
                "date": "1978",
                "value": "2454"
            },
            {
                "date": "1979",
                "value": "2487"
            },
            {
                "date": "1980",
                "value": "2565"
            },
            {
                "date": "1981",
                "value": "2492"
            },
            {
                "date": "1982",
                "value": "2417"
            },
            {
                "date": "1983",
                "value": "2514"
            },
            {
                "date": "1984",
                "value": "2559"
            },
            {
                "date": "1985",
                "value": "2636"
            },
            {
                "date": "1986",
                "value": "2635"
            },
            {
                "date": "1987",
                "value": "2671"
            },
            {
                "date": "1988",
                "value": "2698"
            },
            {
                "date": "1989",
                "value": "2713"
            },
            {
                "date": "1990",
                "value": "2742"
            },
            {
                "date": "1991",
                "value": "2727"
            },
            {
                "date": "1992",
                "value": "2710"
            },
            {
                "date": "1993",
                "value": "2749"
            },
            {
                "date": "1994",
                "value": "2744"
            },
            {
                "date": "1995",
                "value": "2771"
            },
            {
                "date": "1996",
                "value": "2713"
            },
            {
                "date": "1997",
                "value": "2718"
            },
            {
                "date": "1998",
                "value": "2759"
            },
            {
                "date": "1999",
                "value": "2803"
            },
            {
                "date": "2000",
                "value": "2800"
            },
            {
                "date": "2001",
                "value": "2801"
            },
            {
                "date": "2002",
                "value": "2765"
            },
            {
                "date": "2003",
                "value": "2749"
            },
            {
                "date": "2004",
                "value": "2761"
            },
            {
                "date": "2005",
                "value": "2813"
            },
            {
                "date": "2006",
                "value": "2873"
            },
            {
                "date": "2007",
                "value": "2858"
            },
            {
                "date": "2008",
                "value": "2844"
            },
            {
                "date": "2009",
                "value": "2843"
            },
            {
                "date": "2010",
                "value": "2848"
            },
            {
                "date": "2011",
                "value": "2882"
            },
            {
                "date": "2012",
                "value": "2850"
            },
            {
                "date": "2013",
                "value": "2848"
            }
        ],
        "Cote d'Ivoire": [
            {
                "date": "1961",
                "value": "2327"
            },
            {
                "date": "1962",
                "value": "2422"
            },
            {
                "date": "1963",
                "value": "2496"
            },
            {
                "date": "1964",
                "value": "2561"
            },
            {
                "date": "1965",
                "value": "2603"
            },
            {
                "date": "1966",
                "value": "2583"
            },
            {
                "date": "1967",
                "value": "2567"
            },
            {
                "date": "1968",
                "value": "2670"
            },
            {
                "date": "1969",
                "value": "2631"
            },
            {
                "date": "1970",
                "value": "2660"
            },
            {
                "date": "1971",
                "value": "2596"
            },
            {
                "date": "1972",
                "value": "2563"
            },
            {
                "date": "1973",
                "value": "2534"
            },
            {
                "date": "1974",
                "value": "2528"
            },
            {
                "date": "1975",
                "value": "2698"
            },
            {
                "date": "1976",
                "value": "2701"
            },
            {
                "date": "1977",
                "value": "2717"
            },
            {
                "date": "1978",
                "value": "2764"
            },
            {
                "date": "1979",
                "value": "2908"
            },
            {
                "date": "1980",
                "value": "2918"
            },
            {
                "date": "1981",
                "value": "2977"
            },
            {
                "date": "1982",
                "value": "2923"
            },
            {
                "date": "1983",
                "value": "2822"
            },
            {
                "date": "1984",
                "value": "2859"
            },
            {
                "date": "1985",
                "value": "2788"
            },
            {
                "date": "1986",
                "value": "2768"
            },
            {
                "date": "1987",
                "value": "2663"
            },
            {
                "date": "1988",
                "value": "2668"
            },
            {
                "date": "1989",
                "value": "2612"
            },
            {
                "date": "1990",
                "value": "2566"
            },
            {
                "date": "1991",
                "value": "2583"
            },
            {
                "date": "1992",
                "value": "2589"
            },
            {
                "date": "1993",
                "value": "2517"
            },
            {
                "date": "1994",
                "value": "2539"
            },
            {
                "date": "1995",
                "value": "2573"
            },
            {
                "date": "1996",
                "value": "2609"
            },
            {
                "date": "1997",
                "value": "2672"
            },
            {
                "date": "1998",
                "value": "2640"
            },
            {
                "date": "1999",
                "value": "2645"
            },
            {
                "date": "2000",
                "value": "2612"
            },
            {
                "date": "2001",
                "value": "2625"
            },
            {
                "date": "2002",
                "value": "2666"
            },
            {
                "date": "2003",
                "value": "2688"
            },
            {
                "date": "2004",
                "value": "2738"
            },
            {
                "date": "2005",
                "value": "2787"
            },
            {
                "date": "2006",
                "value": "2783"
            },
            {
                "date": "2007",
                "value": "2792"
            },
            {
                "date": "2008",
                "value": "2739"
            },
            {
                "date": "2009",
                "value": "2727"
            },
            {
                "date": "2010",
                "value": "2737"
            },
            {
                "date": "2011",
                "value": "2784"
            },
            {
                "date": "2012",
                "value": "2780"
            },
            {
                "date": "2013",
                "value": "2799"
            }
        ],
        "Croatia": [
            {
                "date": "1992",
                "value": "2312"
            },
            {
                "date": "1993",
                "value": "2240"
            },
            {
                "date": "1994",
                "value": "2368"
            },
            {
                "date": "1995",
                "value": "2546"
            },
            {
                "date": "1996",
                "value": "2552"
            },
            {
                "date": "1997",
                "value": "2529"
            },
            {
                "date": "1998",
                "value": "2517"
            },
            {
                "date": "1999",
                "value": "2543"
            },
            {
                "date": "2000",
                "value": "2556"
            },
            {
                "date": "2001",
                "value": "2738"
            },
            {
                "date": "2002",
                "value": "2820"
            },
            {
                "date": "2003",
                "value": "2868"
            },
            {
                "date": "2004",
                "value": "2943"
            },
            {
                "date": "2005",
                "value": "2980"
            },
            {
                "date": "2006",
                "value": "3070"
            },
            {
                "date": "2007",
                "value": "3077"
            },
            {
                "date": "2008",
                "value": "3109"
            },
            {
                "date": "2009",
                "value": "3058"
            },
            {
                "date": "2010",
                "value": "2971"
            },
            {
                "date": "2011",
                "value": "2997"
            },
            {
                "date": "2012",
                "value": "2995"
            },
            {
                "date": "2013",
                "value": "3059"
            }
        ],
        "Cuba": [
            {
                "date": "1948",
                "value": "2814"
            },
            {
                "date": "1961",
                "value": "2121"
            },
            {
                "date": "1962",
                "value": "2192"
            },
            {
                "date": "1963",
                "value": "2387"
            },
            {
                "date": "1964",
                "value": "2329"
            },
            {
                "date": "1965",
                "value": "2342"
            },
            {
                "date": "1966",
                "value": "2233"
            },
            {
                "date": "1967",
                "value": "2304"
            },
            {
                "date": "1968",
                "value": "2414"
            },
            {
                "date": "1969",
                "value": "2469"
            },
            {
                "date": "1970",
                "value": "2581"
            },
            {
                "date": "1971",
                "value": "2748"
            },
            {
                "date": "1972",
                "value": "2652"
            },
            {
                "date": "1973",
                "value": "2613"
            },
            {
                "date": "1974",
                "value": "2826"
            },
            {
                "date": "1975",
                "value": "2675"
            },
            {
                "date": "1976",
                "value": "2765"
            },
            {
                "date": "1977",
                "value": "2724"
            },
            {
                "date": "1978",
                "value": "2805"
            },
            {
                "date": "1979",
                "value": "2716"
            },
            {
                "date": "1980",
                "value": "2893"
            },
            {
                "date": "1981",
                "value": "2931"
            },
            {
                "date": "1982",
                "value": "3008"
            },
            {
                "date": "1983",
                "value": "3070"
            },
            {
                "date": "1984",
                "value": "3124"
            },
            {
                "date": "1985",
                "value": "3129"
            },
            {
                "date": "1986",
                "value": "3077"
            },
            {
                "date": "1987",
                "value": "3078"
            },
            {
                "date": "1988",
                "value": "2990"
            },
            {
                "date": "1989",
                "value": "3008"
            },
            {
                "date": "1990",
                "value": "2920"
            },
            {
                "date": "1991",
                "value": "2736"
            },
            {
                "date": "1992",
                "value": "2503"
            },
            {
                "date": "1993",
                "value": "2321"
            },
            {
                "date": "1994",
                "value": "2361"
            },
            {
                "date": "1995",
                "value": "2325"
            },
            {
                "date": "1996",
                "value": "2447"
            },
            {
                "date": "1997",
                "value": "2563"
            },
            {
                "date": "1998",
                "value": "2651"
            },
            {
                "date": "1999",
                "value": "2898"
            },
            {
                "date": "2000",
                "value": "3031"
            },
            {
                "date": "2001",
                "value": "3076"
            },
            {
                "date": "2002",
                "value": "3154"
            },
            {
                "date": "2003",
                "value": "3246"
            },
            {
                "date": "2004",
                "value": "3346"
            },
            {
                "date": "2005",
                "value": "3254"
            },
            {
                "date": "2006",
                "value": "3260"
            },
            {
                "date": "2007",
                "value": "3251"
            },
            {
                "date": "2008",
                "value": "3120"
            },
            {
                "date": "2009",
                "value": "3233"
            },
            {
                "date": "2010",
                "value": "3160"
            },
            {
                "date": "2011",
                "value": "3285"
            },
            {
                "date": "2012",
                "value": "3346"
            },
            {
                "date": "2013",
                "value": "3409"
            }
        ],
        "Cyprus": [
            {
                "date": "1961",
                "value": "2478"
            },
            {
                "date": "1962",
                "value": "2424"
            },
            {
                "date": "1963",
                "value": "2373"
            },
            {
                "date": "1964",
                "value": "2598"
            },
            {
                "date": "1965",
                "value": "2701"
            },
            {
                "date": "1966",
                "value": "2767"
            },
            {
                "date": "1967",
                "value": "2916"
            },
            {
                "date": "1968",
                "value": "2994"
            },
            {
                "date": "1969",
                "value": "3169"
            },
            {
                "date": "1970",
                "value": "3056"
            },
            {
                "date": "1971",
                "value": "3070"
            },
            {
                "date": "1972",
                "value": "2821"
            },
            {
                "date": "1973",
                "value": "2861"
            },
            {
                "date": "1974",
                "value": "2421"
            },
            {
                "date": "1975",
                "value": "2376"
            },
            {
                "date": "1976",
                "value": "2309"
            },
            {
                "date": "1977",
                "value": "2325"
            },
            {
                "date": "1978",
                "value": "2403"
            },
            {
                "date": "1979",
                "value": "2527"
            },
            {
                "date": "1980",
                "value": "2455"
            },
            {
                "date": "1981",
                "value": "2479"
            },
            {
                "date": "1982",
                "value": "2677"
            },
            {
                "date": "1983",
                "value": "2666"
            },
            {
                "date": "1984",
                "value": "2784"
            },
            {
                "date": "1985",
                "value": "2851"
            },
            {
                "date": "1986",
                "value": "2737"
            },
            {
                "date": "1987",
                "value": "2719"
            },
            {
                "date": "1988",
                "value": "2633"
            },
            {
                "date": "1989",
                "value": "2685"
            },
            {
                "date": "1990",
                "value": "2689"
            },
            {
                "date": "1991",
                "value": "2745"
            },
            {
                "date": "1992",
                "value": "2787"
            },
            {
                "date": "1993",
                "value": "2799"
            },
            {
                "date": "1994",
                "value": "2812"
            },
            {
                "date": "1995",
                "value": "2823"
            },
            {
                "date": "1996",
                "value": "2724"
            },
            {
                "date": "1997",
                "value": "2721"
            },
            {
                "date": "1998",
                "value": "2727"
            },
            {
                "date": "1999",
                "value": "2709"
            },
            {
                "date": "2000",
                "value": "2676"
            },
            {
                "date": "2001",
                "value": "2648"
            },
            {
                "date": "2002",
                "value": "2638"
            },
            {
                "date": "2003",
                "value": "2611"
            },
            {
                "date": "2004",
                "value": "2601"
            },
            {
                "date": "2005",
                "value": "2565"
            },
            {
                "date": "2006",
                "value": "2559"
            },
            {
                "date": "2007",
                "value": "2639"
            },
            {
                "date": "2008",
                "value": "2657"
            },
            {
                "date": "2009",
                "value": "2630"
            },
            {
                "date": "2010",
                "value": "2671"
            },
            {
                "date": "2011",
                "value": "2683"
            },
            {
                "date": "2012",
                "value": "2640"
            },
            {
                "date": "2013",
                "value": "2649"
            }
        ],
        "Czechia": [
            {
                "date": "1993",
                "value": "3037"
            },
            {
                "date": "1994",
                "value": "2978"
            },
            {
                "date": "1995",
                "value": "3209"
            },
            {
                "date": "1996",
                "value": "3319"
            },
            {
                "date": "1997",
                "value": "3236"
            },
            {
                "date": "1998",
                "value": "3269"
            },
            {
                "date": "1999",
                "value": "3118"
            },
            {
                "date": "2000",
                "value": "3079"
            },
            {
                "date": "2001",
                "value": "3170"
            },
            {
                "date": "2002",
                "value": "3243"
            },
            {
                "date": "2003",
                "value": "3319"
            },
            {
                "date": "2004",
                "value": "3322"
            },
            {
                "date": "2005",
                "value": "3318"
            },
            {
                "date": "2006",
                "value": "3279"
            },
            {
                "date": "2007",
                "value": "3261"
            },
            {
                "date": "2008",
                "value": "3268"
            },
            {
                "date": "2009",
                "value": "3276"
            },
            {
                "date": "2010",
                "value": "3276"
            },
            {
                "date": "2011",
                "value": "3251"
            },
            {
                "date": "2012",
                "value": "3243"
            },
            {
                "date": "2013",
                "value": "3256"
            }
        ],
        "Czechoslovakia": [
            {
                "date": "1948",
                "value": "2656"
            },
            {
                "date": "1961",
                "value": "3301"
            },
            {
                "date": "1962",
                "value": "3348"
            },
            {
                "date": "1963",
                "value": "3397"
            },
            {
                "date": "1964",
                "value": "3377"
            },
            {
                "date": "1965",
                "value": "3384"
            },
            {
                "date": "1966",
                "value": "3417"
            },
            {
                "date": "1967",
                "value": "3406"
            },
            {
                "date": "1968",
                "value": "3456"
            },
            {
                "date": "1969",
                "value": "3395"
            },
            {
                "date": "1970",
                "value": "3357"
            },
            {
                "date": "1971",
                "value": "3355"
            },
            {
                "date": "1972",
                "value": "3349"
            },
            {
                "date": "1973",
                "value": "3370"
            },
            {
                "date": "1974",
                "value": "3375"
            },
            {
                "date": "1975",
                "value": "3369"
            },
            {
                "date": "1976",
                "value": "3360"
            },
            {
                "date": "1977",
                "value": "3311"
            },
            {
                "date": "1978",
                "value": "3362"
            },
            {
                "date": "1979",
                "value": "3344"
            },
            {
                "date": "1980",
                "value": "3342"
            },
            {
                "date": "1981",
                "value": "3391"
            },
            {
                "date": "1982",
                "value": "3441"
            },
            {
                "date": "1983",
                "value": "3406"
            },
            {
                "date": "1984",
                "value": "3450"
            },
            {
                "date": "1985",
                "value": "3438"
            },
            {
                "date": "1986",
                "value": "3478"
            },
            {
                "date": "1987",
                "value": "3494"
            },
            {
                "date": "1988",
                "value": "3593"
            },
            {
                "date": "1989",
                "value": "3607"
            },
            {
                "date": "1990",
                "value": "3650"
            },
            {
                "date": "1991",
                "value": "3301"
            },
            {
                "date": "1992",
                "value": "3161"
            }
        ],
        "Denmark": [
            {
                "date": "1948",
                "value": "3206"
            },
            {
                "date": "1961",
                "value": "3187"
            },
            {
                "date": "1962",
                "value": "3102"
            },
            {
                "date": "1963",
                "value": "3098"
            },
            {
                "date": "1964",
                "value": "3112"
            },
            {
                "date": "1965",
                "value": "3106"
            },
            {
                "date": "1966",
                "value": "3118"
            },
            {
                "date": "1967",
                "value": "3081"
            },
            {
                "date": "1968",
                "value": "3093"
            },
            {
                "date": "1969",
                "value": "3080"
            },
            {
                "date": "1970",
                "value": "3157"
            },
            {
                "date": "1971",
                "value": "3188"
            },
            {
                "date": "1972",
                "value": "3100"
            },
            {
                "date": "1973",
                "value": "3037"
            },
            {
                "date": "1974",
                "value": "3036"
            },
            {
                "date": "1975",
                "value": "2989"
            },
            {
                "date": "1976",
                "value": "2985"
            },
            {
                "date": "1977",
                "value": "3010"
            },
            {
                "date": "1978",
                "value": "3029"
            },
            {
                "date": "1979",
                "value": "3057"
            },
            {
                "date": "1980",
                "value": "3129"
            },
            {
                "date": "1981",
                "value": "3134"
            },
            {
                "date": "1982",
                "value": "3092"
            },
            {
                "date": "1983",
                "value": "3034"
            },
            {
                "date": "1984",
                "value": "3019"
            },
            {
                "date": "1985",
                "value": "3167"
            },
            {
                "date": "1986",
                "value": "3139"
            },
            {
                "date": "1987",
                "value": "3216"
            },
            {
                "date": "1988",
                "value": "3249"
            },
            {
                "date": "1989",
                "value": "3183"
            },
            {
                "date": "1990",
                "value": "3161"
            },
            {
                "date": "1991",
                "value": "3227"
            },
            {
                "date": "1992",
                "value": "3338"
            },
            {
                "date": "1993",
                "value": "3339"
            },
            {
                "date": "1994",
                "value": "3315"
            },
            {
                "date": "1995",
                "value": "3395"
            },
            {
                "date": "1996",
                "value": "3294"
            },
            {
                "date": "1997",
                "value": "3365"
            },
            {
                "date": "1998",
                "value": "3395"
            },
            {
                "date": "1999",
                "value": "3332"
            },
            {
                "date": "2000",
                "value": "3313"
            },
            {
                "date": "2001",
                "value": "3335"
            },
            {
                "date": "2002",
                "value": "3373"
            },
            {
                "date": "2003",
                "value": "3343"
            },
            {
                "date": "2004",
                "value": "3382"
            },
            {
                "date": "2005",
                "value": "3414"
            },
            {
                "date": "2006",
                "value": "3407"
            },
            {
                "date": "2007",
                "value": "3445"
            },
            {
                "date": "2008",
                "value": "3326"
            },
            {
                "date": "2009",
                "value": "3340"
            },
            {
                "date": "2010",
                "value": "3398"
            },
            {
                "date": "2011",
                "value": "3348"
            },
            {
                "date": "2012",
                "value": "3331"
            },
            {
                "date": "2013",
                "value": "3367"
            }
        ],
        "Djibouti": [
            {
                "date": "1961",
                "value": "1613"
            },
            {
                "date": "1962",
                "value": "1645"
            },
            {
                "date": "1963",
                "value": "1595"
            },
            {
                "date": "1964",
                "value": "1565"
            },
            {
                "date": "1965",
                "value": "1586"
            },
            {
                "date": "1966",
                "value": "1612"
            },
            {
                "date": "1967",
                "value": "1685"
            },
            {
                "date": "1968",
                "value": "1705"
            },
            {
                "date": "1969",
                "value": "1580"
            },
            {
                "date": "1970",
                "value": "1707"
            },
            {
                "date": "1971",
                "value": "1726"
            },
            {
                "date": "1972",
                "value": "1685"
            },
            {
                "date": "1973",
                "value": "1775"
            },
            {
                "date": "1974",
                "value": "1690"
            },
            {
                "date": "1975",
                "value": "1661"
            },
            {
                "date": "1976",
                "value": "1617"
            },
            {
                "date": "1977",
                "value": "1564"
            },
            {
                "date": "1978",
                "value": "1438"
            },
            {
                "date": "1979",
                "value": "1366"
            },
            {
                "date": "1980",
                "value": "1435"
            },
            {
                "date": "1981",
                "value": "1454"
            },
            {
                "date": "1982",
                "value": "1503"
            },
            {
                "date": "1983",
                "value": "1535"
            },
            {
                "date": "1984",
                "value": "1524"
            },
            {
                "date": "1985",
                "value": "1562"
            },
            {
                "date": "1986",
                "value": "1602"
            },
            {
                "date": "1987",
                "value": "1562"
            },
            {
                "date": "1988",
                "value": "1593"
            },
            {
                "date": "1989",
                "value": "1527"
            },
            {
                "date": "1990",
                "value": "1613"
            },
            {
                "date": "1991",
                "value": "1507"
            },
            {
                "date": "1992",
                "value": "1506"
            },
            {
                "date": "1993",
                "value": "1574"
            },
            {
                "date": "1994",
                "value": "1596"
            },
            {
                "date": "1995",
                "value": "1707"
            },
            {
                "date": "1996",
                "value": "1691"
            },
            {
                "date": "1997",
                "value": "1757"
            },
            {
                "date": "1998",
                "value": "1855"
            },
            {
                "date": "1999",
                "value": "1901"
            },
            {
                "date": "2000",
                "value": "1993"
            },
            {
                "date": "2001",
                "value": "1982"
            },
            {
                "date": "2002",
                "value": "2054"
            },
            {
                "date": "2003",
                "value": "2094"
            },
            {
                "date": "2004",
                "value": "2136"
            },
            {
                "date": "2005",
                "value": "2265"
            },
            {
                "date": "2006",
                "value": "2314"
            },
            {
                "date": "2007",
                "value": "2414"
            },
            {
                "date": "2008",
                "value": "2447"
            },
            {
                "date": "2009",
                "value": "2466"
            },
            {
                "date": "2010",
                "value": "2467"
            },
            {
                "date": "2011",
                "value": "2504"
            },
            {
                "date": "2012",
                "value": "2545"
            },
            {
                "date": "2013",
                "value": "2607"
            }
        ],
        "Dominica": [
            {
                "date": "1961",
                "value": "1734"
            },
            {
                "date": "1962",
                "value": "1799"
            },
            {
                "date": "1963",
                "value": "1840"
            },
            {
                "date": "1964",
                "value": "1842"
            },
            {
                "date": "1965",
                "value": "1884"
            },
            {
                "date": "1966",
                "value": "1902"
            },
            {
                "date": "1967",
                "value": "1886"
            },
            {
                "date": "1968",
                "value": "1987"
            },
            {
                "date": "1969",
                "value": "1990"
            },
            {
                "date": "1970",
                "value": "2001"
            },
            {
                "date": "1971",
                "value": "1967"
            },
            {
                "date": "1972",
                "value": "1987"
            },
            {
                "date": "1973",
                "value": "1903"
            },
            {
                "date": "1974",
                "value": "1943"
            },
            {
                "date": "1975",
                "value": "1990"
            },
            {
                "date": "1976",
                "value": "2042"
            },
            {
                "date": "1977",
                "value": "2136"
            },
            {
                "date": "1978",
                "value": "2204"
            },
            {
                "date": "1979",
                "value": "2056"
            },
            {
                "date": "1980",
                "value": "2231"
            },
            {
                "date": "1981",
                "value": "2253"
            },
            {
                "date": "1982",
                "value": "2281"
            },
            {
                "date": "1983",
                "value": "2251"
            },
            {
                "date": "1984",
                "value": "2424"
            },
            {
                "date": "1985",
                "value": "2489"
            },
            {
                "date": "1986",
                "value": "2712"
            },
            {
                "date": "1987",
                "value": "2848"
            },
            {
                "date": "1988",
                "value": "2928"
            },
            {
                "date": "1989",
                "value": "2994"
            },
            {
                "date": "1990",
                "value": "2963"
            },
            {
                "date": "1991",
                "value": "2904"
            },
            {
                "date": "1992",
                "value": "2872"
            },
            {
                "date": "1993",
                "value": "2856"
            },
            {
                "date": "1994",
                "value": "2872"
            },
            {
                "date": "1995",
                "value": "2943"
            },
            {
                "date": "1996",
                "value": "2897"
            },
            {
                "date": "1997",
                "value": "2930"
            },
            {
                "date": "1998",
                "value": "2913"
            },
            {
                "date": "1999",
                "value": "2928"
            },
            {
                "date": "2000",
                "value": "3063"
            },
            {
                "date": "2001",
                "value": "3040"
            },
            {
                "date": "2002",
                "value": "2984"
            },
            {
                "date": "2003",
                "value": "3006"
            },
            {
                "date": "2004",
                "value": "2957"
            },
            {
                "date": "2005",
                "value": "2924"
            },
            {
                "date": "2006",
                "value": "2917"
            },
            {
                "date": "2007",
                "value": "3042"
            },
            {
                "date": "2008",
                "value": "3021"
            },
            {
                "date": "2009",
                "value": "3037"
            },
            {
                "date": "2010",
                "value": "2985"
            },
            {
                "date": "2011",
                "value": "2962"
            },
            {
                "date": "2012",
                "value": "2949"
            },
            {
                "date": "2013",
                "value": "2931"
            }
        ],
        "Dominican Republic": [
            {
                "date": "1961",
                "value": "1713"
            },
            {
                "date": "1962",
                "value": "1846"
            },
            {
                "date": "1963",
                "value": "1854"
            },
            {
                "date": "1964",
                "value": "1860"
            },
            {
                "date": "1965",
                "value": "1793"
            },
            {
                "date": "1966",
                "value": "1910"
            },
            {
                "date": "1967",
                "value": "1871"
            },
            {
                "date": "1968",
                "value": "1928"
            },
            {
                "date": "1969",
                "value": "1979"
            },
            {
                "date": "1970",
                "value": "1961"
            },
            {
                "date": "1971",
                "value": "1991"
            },
            {
                "date": "1972",
                "value": "2016"
            },
            {
                "date": "1973",
                "value": "2079"
            },
            {
                "date": "1974",
                "value": "2120"
            },
            {
                "date": "1975",
                "value": "2083"
            },
            {
                "date": "1976",
                "value": "2097"
            },
            {
                "date": "1977",
                "value": "2173"
            },
            {
                "date": "1978",
                "value": "2143"
            },
            {
                "date": "1979",
                "value": "2175"
            },
            {
                "date": "1980",
                "value": "2261"
            },
            {
                "date": "1981",
                "value": "2226"
            },
            {
                "date": "1982",
                "value": "2206"
            },
            {
                "date": "1983",
                "value": "2222"
            },
            {
                "date": "1984",
                "value": "2272"
            },
            {
                "date": "1985",
                "value": "2370"
            },
            {
                "date": "1986",
                "value": "2373"
            },
            {
                "date": "1987",
                "value": "2299"
            },
            {
                "date": "1988",
                "value": "2231"
            },
            {
                "date": "1989",
                "value": "2269"
            },
            {
                "date": "1990",
                "value": "2069"
            },
            {
                "date": "1991",
                "value": "2142"
            },
            {
                "date": "1992",
                "value": "2141"
            },
            {
                "date": "1993",
                "value": "2220"
            },
            {
                "date": "1994",
                "value": "2252"
            },
            {
                "date": "1995",
                "value": "2256"
            },
            {
                "date": "1996",
                "value": "2175"
            },
            {
                "date": "1997",
                "value": "2153"
            },
            {
                "date": "1998",
                "value": "2141"
            },
            {
                "date": "1999",
                "value": "2149"
            },
            {
                "date": "2000",
                "value": "2224"
            },
            {
                "date": "2001",
                "value": "2258"
            },
            {
                "date": "2002",
                "value": "2285"
            },
            {
                "date": "2003",
                "value": "2143"
            },
            {
                "date": "2004",
                "value": "2216"
            },
            {
                "date": "2005",
                "value": "2328"
            },
            {
                "date": "2006",
                "value": "2367"
            },
            {
                "date": "2007",
                "value": "2403"
            },
            {
                "date": "2008",
                "value": "2352"
            },
            {
                "date": "2009",
                "value": "2392"
            },
            {
                "date": "2010",
                "value": "2532"
            },
            {
                "date": "2011",
                "value": "2562"
            },
            {
                "date": "2012",
                "value": "2573"
            },
            {
                "date": "2013",
                "value": "2614"
            }
        ],
        "Ecuador": [
            {
                "date": "1961",
                "value": "2003"
            },
            {
                "date": "1962",
                "value": "2031"
            },
            {
                "date": "1963",
                "value": "2068"
            },
            {
                "date": "1964",
                "value": "2061"
            },
            {
                "date": "1965",
                "value": "2206"
            },
            {
                "date": "1966",
                "value": "2198"
            },
            {
                "date": "1967",
                "value": "2159"
            },
            {
                "date": "1968",
                "value": "2145"
            },
            {
                "date": "1969",
                "value": "2160"
            },
            {
                "date": "1970",
                "value": "2192"
            },
            {
                "date": "1971",
                "value": "2125"
            },
            {
                "date": "1972",
                "value": "2195"
            },
            {
                "date": "1973",
                "value": "2115"
            },
            {
                "date": "1974",
                "value": "2134"
            },
            {
                "date": "1975",
                "value": "2226"
            },
            {
                "date": "1976",
                "value": "2288"
            },
            {
                "date": "1977",
                "value": "2285"
            },
            {
                "date": "1978",
                "value": "2282"
            },
            {
                "date": "1979",
                "value": "2289"
            },
            {
                "date": "1980",
                "value": "2384"
            },
            {
                "date": "1981",
                "value": "2326"
            },
            {
                "date": "1982",
                "value": "2336"
            },
            {
                "date": "1983",
                "value": "2209"
            },
            {
                "date": "1984",
                "value": "2262"
            },
            {
                "date": "1985",
                "value": "2227"
            },
            {
                "date": "1986",
                "value": "2306"
            },
            {
                "date": "1987",
                "value": "2279"
            },
            {
                "date": "1988",
                "value": "2337"
            },
            {
                "date": "1989",
                "value": "2293"
            },
            {
                "date": "1990",
                "value": "2256"
            },
            {
                "date": "1991",
                "value": "2194"
            },
            {
                "date": "1992",
                "value": "2321"
            },
            {
                "date": "1993",
                "value": "2321"
            },
            {
                "date": "1994",
                "value": "2408"
            },
            {
                "date": "1995",
                "value": "2310"
            },
            {
                "date": "1996",
                "value": "2299"
            },
            {
                "date": "1997",
                "value": "2331"
            },
            {
                "date": "1998",
                "value": "2250"
            },
            {
                "date": "1999",
                "value": "2330"
            },
            {
                "date": "2000",
                "value": "2285"
            },
            {
                "date": "2001",
                "value": "2217"
            },
            {
                "date": "2002",
                "value": "2238"
            },
            {
                "date": "2003",
                "value": "2202"
            },
            {
                "date": "2004",
                "value": "2226"
            },
            {
                "date": "2005",
                "value": "2248"
            },
            {
                "date": "2006",
                "value": "2229"
            },
            {
                "date": "2007",
                "value": "2213"
            },
            {
                "date": "2008",
                "value": "2297"
            },
            {
                "date": "2009",
                "value": "2290"
            },
            {
                "date": "2010",
                "value": "2348"
            },
            {
                "date": "2011",
                "value": "2376"
            },
            {
                "date": "2012",
                "value": "2347"
            },
            {
                "date": "2013",
                "value": "2344"
            }
        ],
        "Egypt": [
            {
                "date": "1948",
                "value": "2458"
            },
            {
                "date": "1961",
                "value": "2076"
            },
            {
                "date": "1962",
                "value": "2153"
            },
            {
                "date": "1963",
                "value": "2166"
            },
            {
                "date": "1964",
                "value": "2201"
            },
            {
                "date": "1965",
                "value": "2229"
            },
            {
                "date": "1966",
                "value": "2285"
            },
            {
                "date": "1967",
                "value": "2228"
            },
            {
                "date": "1968",
                "value": "2268"
            },
            {
                "date": "1969",
                "value": "2268"
            },
            {
                "date": "1970",
                "value": "2272"
            },
            {
                "date": "1971",
                "value": "2262"
            },
            {
                "date": "1972",
                "value": "2304"
            },
            {
                "date": "1973",
                "value": "2347"
            },
            {
                "date": "1974",
                "value": "2392"
            },
            {
                "date": "1975",
                "value": "2430"
            },
            {
                "date": "1976",
                "value": "2514"
            },
            {
                "date": "1977",
                "value": "2558"
            },
            {
                "date": "1978",
                "value": "2653"
            },
            {
                "date": "1979",
                "value": "2776"
            },
            {
                "date": "1980",
                "value": "2857"
            },
            {
                "date": "1981",
                "value": "3002"
            },
            {
                "date": "1982",
                "value": "3064"
            },
            {
                "date": "1983",
                "value": "3052"
            },
            {
                "date": "1984",
                "value": "3057"
            },
            {
                "date": "1985",
                "value": "3069"
            },
            {
                "date": "1986",
                "value": "3061"
            },
            {
                "date": "1987",
                "value": "3136"
            },
            {
                "date": "1988",
                "value": "3128"
            },
            {
                "date": "1989",
                "value": "3106"
            },
            {
                "date": "1990",
                "value": "3181"
            },
            {
                "date": "1991",
                "value": "3171"
            },
            {
                "date": "1992",
                "value": "3175"
            },
            {
                "date": "1993",
                "value": "3197"
            },
            {
                "date": "1994",
                "value": "3259"
            },
            {
                "date": "1995",
                "value": "3315"
            },
            {
                "date": "1996",
                "value": "3332"
            },
            {
                "date": "1997",
                "value": "3361"
            },
            {
                "date": "1998",
                "value": "3339"
            },
            {
                "date": "1999",
                "value": "3356"
            },
            {
                "date": "2000",
                "value": "3368"
            },
            {
                "date": "2001",
                "value": "3409"
            },
            {
                "date": "2002",
                "value": "3434"
            },
            {
                "date": "2003",
                "value": "3379"
            },
            {
                "date": "2004",
                "value": "3309"
            },
            {
                "date": "2005",
                "value": "3367"
            },
            {
                "date": "2006",
                "value": "3389"
            },
            {
                "date": "2007",
                "value": "3445"
            },
            {
                "date": "2008",
                "value": "3490"
            },
            {
                "date": "2009",
                "value": "3441"
            },
            {
                "date": "2010",
                "value": "3507"
            },
            {
                "date": "2011",
                "value": "3549"
            },
            {
                "date": "2012",
                "value": "3561"
            },
            {
                "date": "2013",
                "value": "3522"
            }
        ],
        "El Salvador": [
            {
                "date": "1961",
                "value": "1575"
            },
            {
                "date": "1962",
                "value": "1611"
            },
            {
                "date": "1963",
                "value": "1650"
            },
            {
                "date": "1964",
                "value": "1625"
            },
            {
                "date": "1965",
                "value": "1697"
            },
            {
                "date": "1966",
                "value": "1704"
            },
            {
                "date": "1967",
                "value": "1723"
            },
            {
                "date": "1968",
                "value": "1752"
            },
            {
                "date": "1969",
                "value": "1743"
            },
            {
                "date": "1970",
                "value": "1744"
            },
            {
                "date": "1971",
                "value": "1795"
            },
            {
                "date": "1972",
                "value": "1790"
            },
            {
                "date": "1973",
                "value": "1844"
            },
            {
                "date": "1974",
                "value": "1892"
            },
            {
                "date": "1975",
                "value": "2033"
            },
            {
                "date": "1976",
                "value": "2064"
            },
            {
                "date": "1977",
                "value": "2109"
            },
            {
                "date": "1978",
                "value": "2147"
            },
            {
                "date": "1979",
                "value": "2211"
            },
            {
                "date": "1980",
                "value": "2246"
            },
            {
                "date": "1981",
                "value": "2282"
            },
            {
                "date": "1982",
                "value": "2242"
            },
            {
                "date": "1983",
                "value": "2229"
            },
            {
                "date": "1984",
                "value": "2259"
            },
            {
                "date": "1985",
                "value": "2240"
            },
            {
                "date": "1986",
                "value": "2180"
            },
            {
                "date": "1987",
                "value": "2169"
            },
            {
                "date": "1988",
                "value": "2226"
            },
            {
                "date": "1989",
                "value": "2256"
            },
            {
                "date": "1990",
                "value": "2308"
            },
            {
                "date": "1991",
                "value": "2406"
            },
            {
                "date": "1992",
                "value": "2410"
            },
            {
                "date": "1993",
                "value": "2384"
            },
            {
                "date": "1994",
                "value": "2379"
            },
            {
                "date": "1995",
                "value": "2392"
            },
            {
                "date": "1996",
                "value": "2404"
            },
            {
                "date": "1997",
                "value": "2428"
            },
            {
                "date": "1998",
                "value": "2432"
            },
            {
                "date": "1999",
                "value": "2411"
            },
            {
                "date": "2000",
                "value": "2541"
            },
            {
                "date": "2001",
                "value": "2628"
            },
            {
                "date": "2002",
                "value": "2643"
            },
            {
                "date": "2003",
                "value": "2597"
            },
            {
                "date": "2004",
                "value": "2567"
            },
            {
                "date": "2005",
                "value": "2571"
            },
            {
                "date": "2006",
                "value": "2577"
            },
            {
                "date": "2007",
                "value": "2566"
            },
            {
                "date": "2008",
                "value": "2574"
            },
            {
                "date": "2009",
                "value": "2574"
            },
            {
                "date": "2010",
                "value": "2515"
            },
            {
                "date": "2011",
                "value": "2537"
            },
            {
                "date": "2012",
                "value": "2559"
            },
            {
                "date": "2013",
                "value": "2577"
            }
        ],
        "England, all": [],
        "England, farm laborers": [],
        "Estonia": [
            {
                "date": "1961",
                "value": "3095"
            },
            {
                "date": "1962",
                "value": "3157"
            },
            {
                "date": "1963",
                "value": "3204"
            },
            {
                "date": "1964",
                "value": "3206"
            },
            {
                "date": "1965",
                "value": "3214"
            },
            {
                "date": "1966",
                "value": "3209"
            },
            {
                "date": "1967",
                "value": "3240"
            },
            {
                "date": "1968",
                "value": "3300"
            },
            {
                "date": "1969",
                "value": "3300"
            },
            {
                "date": "1970",
                "value": "3355"
            },
            {
                "date": "1971",
                "value": "3331"
            },
            {
                "date": "1972",
                "value": "3284"
            },
            {
                "date": "1973",
                "value": "3325"
            },
            {
                "date": "1974",
                "value": "3357"
            },
            {
                "date": "1975",
                "value": "3341"
            },
            {
                "date": "1976",
                "value": "3404"
            },
            {
                "date": "1977",
                "value": "3366"
            },
            {
                "date": "1978",
                "value": "3387"
            },
            {
                "date": "1979",
                "value": "3384"
            },
            {
                "date": "1980",
                "value": "3378"
            },
            {
                "date": "1981",
                "value": "3355"
            },
            {
                "date": "1982",
                "value": "3377"
            },
            {
                "date": "1983",
                "value": "3386"
            },
            {
                "date": "1984",
                "value": "3388"
            },
            {
                "date": "1985",
                "value": "3380"
            },
            {
                "date": "1986",
                "value": "3364"
            },
            {
                "date": "1987",
                "value": "3404"
            },
            {
                "date": "1988",
                "value": "3395"
            },
            {
                "date": "1989",
                "value": "3348"
            },
            {
                "date": "1990",
                "value": "3372"
            },
            {
                "date": "1991",
                "value": "3032"
            },
            {
                "date": "1992",
                "value": "2516"
            },
            {
                "date": "1993",
                "value": "2576"
            },
            {
                "date": "1994",
                "value": "2694"
            },
            {
                "date": "1995",
                "value": "2923"
            },
            {
                "date": "1996",
                "value": "3061"
            },
            {
                "date": "1997",
                "value": "3013"
            },
            {
                "date": "1998",
                "value": "2962"
            },
            {
                "date": "1999",
                "value": "3110"
            },
            {
                "date": "2000",
                "value": "3050"
            },
            {
                "date": "2001",
                "value": "3046"
            },
            {
                "date": "2002",
                "value": "3043"
            },
            {
                "date": "2003",
                "value": "3074"
            },
            {
                "date": "2004",
                "value": "3080"
            },
            {
                "date": "2005",
                "value": "3167"
            },
            {
                "date": "2006",
                "value": "3203"
            },
            {
                "date": "2007",
                "value": "3222"
            },
            {
                "date": "2008",
                "value": "3313"
            },
            {
                "date": "2009",
                "value": "3348"
            },
            {
                "date": "2010",
                "value": "3310"
            },
            {
                "date": "2011",
                "value": "3289"
            },
            {
                "date": "2012",
                "value": "3232"
            },
            {
                "date": "2013",
                "value": "3253"
            }
        ],
        "Eswatini": [
            {
                "date": "1961",
                "value": "2223"
            },
            {
                "date": "1962",
                "value": "2186"
            },
            {
                "date": "1963",
                "value": "2132"
            },
            {
                "date": "1964",
                "value": "2110"
            },
            {
                "date": "1965",
                "value": "2165"
            },
            {
                "date": "1966",
                "value": "2159"
            },
            {
                "date": "1967",
                "value": "2095"
            },
            {
                "date": "1968",
                "value": "2239"
            },
            {
                "date": "1969",
                "value": "2234"
            },
            {
                "date": "1970",
                "value": "2294"
            },
            {
                "date": "1971",
                "value": "2268"
            },
            {
                "date": "1972",
                "value": "2272"
            },
            {
                "date": "1973",
                "value": "2365"
            },
            {
                "date": "1974",
                "value": "2379"
            },
            {
                "date": "1975",
                "value": "2428"
            },
            {
                "date": "1976",
                "value": "2490"
            },
            {
                "date": "1977",
                "value": "2357"
            },
            {
                "date": "1978",
                "value": "2395"
            },
            {
                "date": "1979",
                "value": "2375"
            },
            {
                "date": "1980",
                "value": "2371"
            },
            {
                "date": "1981",
                "value": "2383"
            },
            {
                "date": "1982",
                "value": "2444"
            },
            {
                "date": "1983",
                "value": "2403"
            },
            {
                "date": "1984",
                "value": "2453"
            },
            {
                "date": "1985",
                "value": "2386"
            },
            {
                "date": "1986",
                "value": "2429"
            },
            {
                "date": "1987",
                "value": "2418"
            },
            {
                "date": "1988",
                "value": "2416"
            },
            {
                "date": "1989",
                "value": "2453"
            },
            {
                "date": "1990",
                "value": "2332"
            },
            {
                "date": "1991",
                "value": "2285"
            },
            {
                "date": "1992",
                "value": "2322"
            },
            {
                "date": "1993",
                "value": "2282"
            },
            {
                "date": "1994",
                "value": "2303"
            },
            {
                "date": "1995",
                "value": "2213"
            },
            {
                "date": "1996",
                "value": "2217"
            },
            {
                "date": "1997",
                "value": "2156"
            },
            {
                "date": "1998",
                "value": "2176"
            },
            {
                "date": "1999",
                "value": "2265"
            },
            {
                "date": "2000",
                "value": "2351"
            },
            {
                "date": "2001",
                "value": "2314"
            },
            {
                "date": "2002",
                "value": "2388"
            },
            {
                "date": "2003",
                "value": "2436"
            },
            {
                "date": "2004",
                "value": "2469"
            },
            {
                "date": "2005",
                "value": "2372"
            },
            {
                "date": "2006",
                "value": "2325"
            },
            {
                "date": "2007",
                "value": "2310"
            },
            {
                "date": "2008",
                "value": "2257"
            },
            {
                "date": "2009",
                "value": "2249"
            },
            {
                "date": "2010",
                "value": "2284"
            },
            {
                "date": "2011",
                "value": "2283"
            },
            {
                "date": "2012",
                "value": "2293"
            },
            {
                "date": "2013",
                "value": "2329"
            }
        ],
        "Ethiopia": [
            {
                "date": "1961",
                "value": "1840"
            },
            {
                "date": "1962",
                "value": "1826"
            },
            {
                "date": "1963",
                "value": "1815"
            },
            {
                "date": "1964",
                "value": "1805"
            },
            {
                "date": "1965",
                "value": "1780"
            },
            {
                "date": "1966",
                "value": "1726"
            },
            {
                "date": "1967",
                "value": "1732"
            },
            {
                "date": "1968",
                "value": "1658"
            },
            {
                "date": "1969",
                "value": "1698"
            },
            {
                "date": "1970",
                "value": "1695"
            },
            {
                "date": "1971",
                "value": "1664"
            },
            {
                "date": "1972",
                "value": "1568"
            },
            {
                "date": "1973",
                "value": "1517"
            },
            {
                "date": "1974",
                "value": "1507"
            },
            {
                "date": "1975",
                "value": "1499"
            },
            {
                "date": "1976",
                "value": "1497"
            },
            {
                "date": "1977",
                "value": "1535"
            },
            {
                "date": "1978",
                "value": "1558"
            },
            {
                "date": "1979",
                "value": "1758"
            },
            {
                "date": "1980",
                "value": "1842"
            },
            {
                "date": "1981",
                "value": "1757"
            },
            {
                "date": "1982",
                "value": "1772"
            },
            {
                "date": "1983",
                "value": "1784"
            },
            {
                "date": "1984",
                "value": "1573"
            },
            {
                "date": "1985",
                "value": "1563"
            },
            {
                "date": "1986",
                "value": "1635"
            },
            {
                "date": "1987",
                "value": "1581"
            },
            {
                "date": "1988",
                "value": "1647"
            },
            {
                "date": "1989",
                "value": "1571"
            },
            {
                "date": "1990",
                "value": "1556"
            },
            {
                "date": "1991",
                "value": "1586"
            },
            {
                "date": "1992",
                "value": "1557"
            },
            {
                "date": "1993",
                "value": "1508"
            },
            {
                "date": "1994",
                "value": "1545"
            },
            {
                "date": "1995",
                "value": "1571"
            },
            {
                "date": "1996",
                "value": "1655"
            },
            {
                "date": "1997",
                "value": "1684"
            },
            {
                "date": "1998",
                "value": "1684"
            },
            {
                "date": "1999",
                "value": "1727"
            },
            {
                "date": "2000",
                "value": "1786"
            },
            {
                "date": "2001",
                "value": "1829"
            },
            {
                "date": "2002",
                "value": "1844"
            },
            {
                "date": "2003",
                "value": "1884"
            },
            {
                "date": "2004",
                "value": "1882"
            },
            {
                "date": "2005",
                "value": "1978"
            },
            {
                "date": "2006",
                "value": "1967"
            },
            {
                "date": "2007",
                "value": "1957"
            },
            {
                "date": "2008",
                "value": "2018"
            },
            {
                "date": "2009",
                "value": "2052"
            },
            {
                "date": "2010",
                "value": "2080"
            },
            {
                "date": "2011",
                "value": "2103"
            },
            {
                "date": "2012",
                "value": "2124"
            },
            {
                "date": "2013",
                "value": "2131"
            }
        ],
        "Europe": [
            {
                "date": "1961",
                "value": "3041"
            },
            {
                "date": "1962",
                "value": "3091"
            },
            {
                "date": "1963",
                "value": "3113"
            },
            {
                "date": "1964",
                "value": "3120"
            },
            {
                "date": "1965",
                "value": "3144"
            },
            {
                "date": "1966",
                "value": "3159"
            },
            {
                "date": "1967",
                "value": "3177"
            },
            {
                "date": "1968",
                "value": "3212"
            },
            {
                "date": "1969",
                "value": "3214"
            },
            {
                "date": "1970",
                "value": "3255"
            },
            {
                "date": "1971",
                "value": "3252"
            },
            {
                "date": "1972",
                "value": "3237"
            },
            {
                "date": "1973",
                "value": "3279"
            },
            {
                "date": "1974",
                "value": "3286"
            },
            {
                "date": "1975",
                "value": "3266"
            },
            {
                "date": "1976",
                "value": "3314"
            },
            {
                "date": "1977",
                "value": "3291"
            },
            {
                "date": "1978",
                "value": "3322"
            },
            {
                "date": "1979",
                "value": "3336"
            },
            {
                "date": "1980",
                "value": "3338"
            },
            {
                "date": "1981",
                "value": "3309"
            },
            {
                "date": "1982",
                "value": "3316"
            },
            {
                "date": "1983",
                "value": "3325"
            },
            {
                "date": "1984",
                "value": "3335"
            },
            {
                "date": "1985",
                "value": "3347"
            },
            {
                "date": "1986",
                "value": "3351"
            },
            {
                "date": "1987",
                "value": "3379"
            },
            {
                "date": "1988",
                "value": "3393"
            },
            {
                "date": "1989",
                "value": "3376"
            },
            {
                "date": "1990",
                "value": "3367"
            },
            {
                "date": "1991",
                "value": "3237"
            },
            {
                "date": "1992",
                "value": "3239"
            },
            {
                "date": "1993",
                "value": "3203"
            },
            {
                "date": "1994",
                "value": "3163"
            },
            {
                "date": "1995",
                "value": "3161"
            },
            {
                "date": "1996",
                "value": "3167"
            },
            {
                "date": "1997",
                "value": "3174"
            },
            {
                "date": "1998",
                "value": "3211"
            },
            {
                "date": "1999",
                "value": "3218"
            },
            {
                "date": "2000",
                "value": "3226"
            },
            {
                "date": "2001",
                "value": "3264"
            },
            {
                "date": "2002",
                "value": "3298"
            },
            {
                "date": "2003",
                "value": "3286"
            },
            {
                "date": "2004",
                "value": "3314"
            },
            {
                "date": "2005",
                "value": "3331"
            },
            {
                "date": "2006",
                "value": "3350"
            },
            {
                "date": "2007",
                "value": "3364"
            },
            {
                "date": "2008",
                "value": "3373"
            },
            {
                "date": "2009",
                "value": "3357"
            },
            {
                "date": "2010",
                "value": "3353"
            },
            {
                "date": "2011",
                "value": "3370"
            },
            {
                "date": "2012",
                "value": "3362"
            },
            {
                "date": "2013",
                "value": "3367"
            }
        ],
        "Fiji": [
            {
                "date": "1961",
                "value": "2585"
            },
            {
                "date": "1962",
                "value": "2635"
            },
            {
                "date": "1963",
                "value": "2715"
            },
            {
                "date": "1964",
                "value": "2670"
            },
            {
                "date": "1965",
                "value": "2800"
            },
            {
                "date": "1966",
                "value": "2608"
            },
            {
                "date": "1967",
                "value": "2538"
            },
            {
                "date": "1968",
                "value": "2533"
            },
            {
                "date": "1969",
                "value": "2561"
            },
            {
                "date": "1970",
                "value": "2293"
            },
            {
                "date": "1971",
                "value": "2577"
            },
            {
                "date": "1972",
                "value": "2510"
            },
            {
                "date": "1973",
                "value": "2432"
            },
            {
                "date": "1974",
                "value": "2315"
            },
            {
                "date": "1975",
                "value": "2335"
            },
            {
                "date": "1976",
                "value": "2276"
            },
            {
                "date": "1977",
                "value": "2390"
            },
            {
                "date": "1978",
                "value": "2398"
            },
            {
                "date": "1979",
                "value": "2478"
            },
            {
                "date": "1980",
                "value": "2509"
            },
            {
                "date": "1981",
                "value": "2207"
            },
            {
                "date": "1982",
                "value": "2478"
            },
            {
                "date": "1983",
                "value": "2491"
            },
            {
                "date": "1984",
                "value": "2548"
            },
            {
                "date": "1985",
                "value": "2601"
            },
            {
                "date": "1986",
                "value": "2516"
            },
            {
                "date": "1987",
                "value": "2493"
            },
            {
                "date": "1988",
                "value": "2565"
            },
            {
                "date": "1989",
                "value": "2578"
            },
            {
                "date": "1990",
                "value": "2683"
            },
            {
                "date": "1991",
                "value": "2722"
            },
            {
                "date": "1992",
                "value": "2739"
            },
            {
                "date": "1993",
                "value": "2854"
            },
            {
                "date": "1994",
                "value": "2796"
            },
            {
                "date": "1995",
                "value": "2742"
            },
            {
                "date": "1996",
                "value": "2824"
            },
            {
                "date": "1997",
                "value": "2845"
            },
            {
                "date": "1998",
                "value": "2830"
            },
            {
                "date": "1999",
                "value": "2835"
            },
            {
                "date": "2000",
                "value": "2830"
            },
            {
                "date": "2001",
                "value": "2876"
            },
            {
                "date": "2002",
                "value": "2902"
            },
            {
                "date": "2003",
                "value": "2892"
            },
            {
                "date": "2004",
                "value": "2901"
            },
            {
                "date": "2005",
                "value": "2941"
            },
            {
                "date": "2006",
                "value": "2949"
            },
            {
                "date": "2007",
                "value": "2924"
            },
            {
                "date": "2008",
                "value": "2948"
            },
            {
                "date": "2009",
                "value": "2916"
            },
            {
                "date": "2010",
                "value": "2914"
            },
            {
                "date": "2011",
                "value": "2923"
            },
            {
                "date": "2012",
                "value": "2931"
            },
            {
                "date": "2013",
                "value": "2943"
            }
        ],
        "Finland": [
            {
                "date": "1910",
                "value": "3000"
            },
            {
                "date": "1947",
                "value": "2617"
            },
            {
                "date": "1961",
                "value": "3265"
            },
            {
                "date": "1962",
                "value": "3151"
            },
            {
                "date": "1963",
                "value": "3073"
            },
            {
                "date": "1964",
                "value": "3092"
            },
            {
                "date": "1965",
                "value": "3123"
            },
            {
                "date": "1966",
                "value": "3140"
            },
            {
                "date": "1967",
                "value": "3067"
            },
            {
                "date": "1968",
                "value": "3069"
            },
            {
                "date": "1969",
                "value": "3181"
            },
            {
                "date": "1970",
                "value": "3128"
            },
            {
                "date": "1971",
                "value": "3138"
            },
            {
                "date": "1972",
                "value": "3156"
            },
            {
                "date": "1973",
                "value": "3198"
            },
            {
                "date": "1974",
                "value": "3153"
            },
            {
                "date": "1975",
                "value": "3205"
            },
            {
                "date": "1976",
                "value": "3146"
            },
            {
                "date": "1977",
                "value": "3045"
            },
            {
                "date": "1978",
                "value": "3041"
            },
            {
                "date": "1979",
                "value": "3008"
            },
            {
                "date": "1980",
                "value": "3094"
            },
            {
                "date": "1981",
                "value": "3025"
            },
            {
                "date": "1982",
                "value": "3109"
            },
            {
                "date": "1983",
                "value": "2989"
            },
            {
                "date": "1984",
                "value": "3002"
            },
            {
                "date": "1985",
                "value": "2963"
            },
            {
                "date": "1986",
                "value": "2964"
            },
            {
                "date": "1987",
                "value": "2942"
            },
            {
                "date": "1988",
                "value": "3098"
            },
            {
                "date": "1989",
                "value": "3228"
            },
            {
                "date": "1990",
                "value": "3145"
            },
            {
                "date": "1991",
                "value": "3107"
            },
            {
                "date": "1992",
                "value": "3190"
            },
            {
                "date": "1993",
                "value": "3038"
            },
            {
                "date": "1994",
                "value": "2989"
            },
            {
                "date": "1995",
                "value": "3031"
            },
            {
                "date": "1996",
                "value": "3017"
            },
            {
                "date": "1997",
                "value": "3150"
            },
            {
                "date": "1998",
                "value": "3177"
            },
            {
                "date": "1999",
                "value": "3173"
            },
            {
                "date": "2000",
                "value": "3151"
            },
            {
                "date": "2001",
                "value": "3171"
            },
            {
                "date": "2002",
                "value": "3152"
            },
            {
                "date": "2003",
                "value": "3154"
            },
            {
                "date": "2004",
                "value": "3188"
            },
            {
                "date": "2005",
                "value": "3201"
            },
            {
                "date": "2006",
                "value": "3237"
            },
            {
                "date": "2007",
                "value": "3281"
            },
            {
                "date": "2008",
                "value": "3236"
            },
            {
                "date": "2009",
                "value": "3233"
            },
            {
                "date": "2010",
                "value": "3280"
            },
            {
                "date": "2011",
                "value": "3305"
            },
            {
                "date": "2012",
                "value": "3323"
            },
            {
                "date": "2013",
                "value": "3368"
            }
        ],
        "France": [
            {
                "date": "1800",
                "value": "1846"
            },
            {
                "date": "1830",
                "value": "2118"
            },
            {
                "date": "1850",
                "value": "2840"
            },
            {
                "date": "1870",
                "value": "3085"
            },
            {
                "date": "1890",
                "value": "3220"
            },
            {
                "date": "1910",
                "value": "3323"
            },
            {
                "date": "1947",
                "value": "2357"
            },
            {
                "date": "1961",
                "value": "3194"
            },
            {
                "date": "1962",
                "value": "3258"
            },
            {
                "date": "1963",
                "value": "3233"
            },
            {
                "date": "1964",
                "value": "3220"
            },
            {
                "date": "1965",
                "value": "3233"
            },
            {
                "date": "1966",
                "value": "3219"
            },
            {
                "date": "1967",
                "value": "3278"
            },
            {
                "date": "1968",
                "value": "3279"
            },
            {
                "date": "1969",
                "value": "3284"
            },
            {
                "date": "1970",
                "value": "3306"
            },
            {
                "date": "1971",
                "value": "3288"
            },
            {
                "date": "1972",
                "value": "3255"
            },
            {
                "date": "1973",
                "value": "3269"
            },
            {
                "date": "1974",
                "value": "3272"
            },
            {
                "date": "1975",
                "value": "3242"
            },
            {
                "date": "1976",
                "value": "3276"
            },
            {
                "date": "1977",
                "value": "3337"
            },
            {
                "date": "1978",
                "value": "3382"
            },
            {
                "date": "1979",
                "value": "3379"
            },
            {
                "date": "1980",
                "value": "3375"
            },
            {
                "date": "1981",
                "value": "3417"
            },
            {
                "date": "1982",
                "value": "3419"
            },
            {
                "date": "1983",
                "value": "3456"
            },
            {
                "date": "1984",
                "value": "3444"
            },
            {
                "date": "1985",
                "value": "3486"
            },
            {
                "date": "1986",
                "value": "3462"
            },
            {
                "date": "1987",
                "value": "3531"
            },
            {
                "date": "1988",
                "value": "3560"
            },
            {
                "date": "1989",
                "value": "3556"
            },
            {
                "date": "1990",
                "value": "3506"
            },
            {
                "date": "1991",
                "value": "3541"
            },
            {
                "date": "1992",
                "value": "3549"
            },
            {
                "date": "1993",
                "value": "3543"
            },
            {
                "date": "1994",
                "value": "3512"
            },
            {
                "date": "1995",
                "value": "3534"
            },
            {
                "date": "1996",
                "value": "3519"
            },
            {
                "date": "1997",
                "value": "3547"
            },
            {
                "date": "1998",
                "value": "3593"
            },
            {
                "date": "1999",
                "value": "3604"
            },
            {
                "date": "2000",
                "value": "3605"
            },
            {
                "date": "2001",
                "value": "3640"
            },
            {
                "date": "2002",
                "value": "3656"
            },
            {
                "date": "2003",
                "value": "3587"
            },
            {
                "date": "2004",
                "value": "3555"
            },
            {
                "date": "2005",
                "value": "3538"
            },
            {
                "date": "2006",
                "value": "3513"
            },
            {
                "date": "2007",
                "value": "3466"
            },
            {
                "date": "2008",
                "value": "3551"
            },
            {
                "date": "2009",
                "value": "3530"
            },
            {
                "date": "2010",
                "value": "3536"
            },
            {
                "date": "2011",
                "value": "3514"
            },
            {
                "date": "2012",
                "value": "3460"
            },
            {
                "date": "2013",
                "value": "3482"
            }
        ],
        "French Polynesia": [
            {
                "date": "1961",
                "value": "2601"
            },
            {
                "date": "1962",
                "value": "2563"
            },
            {
                "date": "1963",
                "value": "2528"
            },
            {
                "date": "1964",
                "value": "2589"
            },
            {
                "date": "1965",
                "value": "2684"
            },
            {
                "date": "1966",
                "value": "2817"
            },
            {
                "date": "1967",
                "value": "2830"
            },
            {
                "date": "1968",
                "value": "2812"
            },
            {
                "date": "1969",
                "value": "2806"
            },
            {
                "date": "1970",
                "value": "2901"
            },
            {
                "date": "1971",
                "value": "2785"
            },
            {
                "date": "1972",
                "value": "2825"
            },
            {
                "date": "1973",
                "value": "2821"
            },
            {
                "date": "1974",
                "value": "2843"
            },
            {
                "date": "1975",
                "value": "2841"
            },
            {
                "date": "1976",
                "value": "2860"
            },
            {
                "date": "1977",
                "value": "2807"
            },
            {
                "date": "1978",
                "value": "2808"
            },
            {
                "date": "1979",
                "value": "2821"
            },
            {
                "date": "1980",
                "value": "2717"
            },
            {
                "date": "1981",
                "value": "2714"
            },
            {
                "date": "1982",
                "value": "2744"
            },
            {
                "date": "1983",
                "value": "2748"
            },
            {
                "date": "1984",
                "value": "2779"
            },
            {
                "date": "1985",
                "value": "2769"
            },
            {
                "date": "1986",
                "value": "2787"
            },
            {
                "date": "1987",
                "value": "2733"
            },
            {
                "date": "1988",
                "value": "2759"
            },
            {
                "date": "1989",
                "value": "2763"
            },
            {
                "date": "1990",
                "value": "2768"
            },
            {
                "date": "1991",
                "value": "2771"
            },
            {
                "date": "1992",
                "value": "2830"
            },
            {
                "date": "1993",
                "value": "2820"
            },
            {
                "date": "1994",
                "value": "2840"
            },
            {
                "date": "1995",
                "value": "2851"
            },
            {
                "date": "1996",
                "value": "2855"
            },
            {
                "date": "1997",
                "value": "2809"
            },
            {
                "date": "1998",
                "value": "2795"
            },
            {
                "date": "1999",
                "value": "2777"
            },
            {
                "date": "2000",
                "value": "2805"
            },
            {
                "date": "2001",
                "value": "2840"
            },
            {
                "date": "2002",
                "value": "2869"
            },
            {
                "date": "2003",
                "value": "2869"
            },
            {
                "date": "2004",
                "value": "2911"
            },
            {
                "date": "2005",
                "value": "2910"
            },
            {
                "date": "2006",
                "value": "2903"
            },
            {
                "date": "2007",
                "value": "2921"
            },
            {
                "date": "2008",
                "value": "2917"
            },
            {
                "date": "2009",
                "value": "2918"
            },
            {
                "date": "2010",
                "value": "2931"
            },
            {
                "date": "2011",
                "value": "2922"
            },
            {
                "date": "2012",
                "value": "2942"
            },
            {
                "date": "2013",
                "value": "2927"
            }
        ],
        "Gabon": [
            {
                "date": "1961",
                "value": "1909"
            },
            {
                "date": "1962",
                "value": "1926"
            },
            {
                "date": "1963",
                "value": "1878"
            },
            {
                "date": "1964",
                "value": "1871"
            },
            {
                "date": "1965",
                "value": "1879"
            },
            {
                "date": "1966",
                "value": "1907"
            },
            {
                "date": "1967",
                "value": "1948"
            },
            {
                "date": "1968",
                "value": "1990"
            },
            {
                "date": "1969",
                "value": "1940"
            },
            {
                "date": "1970",
                "value": "1950"
            },
            {
                "date": "1971",
                "value": "1981"
            },
            {
                "date": "1972",
                "value": "1951"
            },
            {
                "date": "1973",
                "value": "1943"
            },
            {
                "date": "1974",
                "value": "2108"
            },
            {
                "date": "1975",
                "value": "2200"
            },
            {
                "date": "1976",
                "value": "2223"
            },
            {
                "date": "1977",
                "value": "2285"
            },
            {
                "date": "1978",
                "value": "2345"
            },
            {
                "date": "1979",
                "value": "2272"
            },
            {
                "date": "1980",
                "value": "2273"
            },
            {
                "date": "1981",
                "value": "2273"
            },
            {
                "date": "1982",
                "value": "2353"
            },
            {
                "date": "1983",
                "value": "2414"
            },
            {
                "date": "1984",
                "value": "2484"
            },
            {
                "date": "1985",
                "value": "2462"
            },
            {
                "date": "1986",
                "value": "2473"
            },
            {
                "date": "1987",
                "value": "2429"
            },
            {
                "date": "1988",
                "value": "2490"
            },
            {
                "date": "1989",
                "value": "2473"
            },
            {
                "date": "1990",
                "value": "2355"
            },
            {
                "date": "1991",
                "value": "2558"
            },
            {
                "date": "1992",
                "value": "2499"
            },
            {
                "date": "1993",
                "value": "2536"
            },
            {
                "date": "1994",
                "value": "2463"
            },
            {
                "date": "1995",
                "value": "2547"
            },
            {
                "date": "1996",
                "value": "2634"
            },
            {
                "date": "1997",
                "value": "2626"
            },
            {
                "date": "1998",
                "value": "2659"
            },
            {
                "date": "1999",
                "value": "2711"
            },
            {
                "date": "2000",
                "value": "2716"
            },
            {
                "date": "2001",
                "value": "2695"
            },
            {
                "date": "2002",
                "value": "2644"
            },
            {
                "date": "2003",
                "value": "2661"
            },
            {
                "date": "2004",
                "value": "2676"
            },
            {
                "date": "2005",
                "value": "2715"
            },
            {
                "date": "2006",
                "value": "2716"
            },
            {
                "date": "2007",
                "value": "2711"
            },
            {
                "date": "2008",
                "value": "2653"
            },
            {
                "date": "2009",
                "value": "2699"
            },
            {
                "date": "2010",
                "value": "2732"
            },
            {
                "date": "2011",
                "value": "2772"
            },
            {
                "date": "2012",
                "value": "2795"
            },
            {
                "date": "2013",
                "value": "2830"
            }
        ],
        "Gambia": [
            {
                "date": "1961",
                "value": "2069"
            },
            {
                "date": "1962",
                "value": "2080"
            },
            {
                "date": "1963",
                "value": "2116"
            },
            {
                "date": "1964",
                "value": "2127"
            },
            {
                "date": "1965",
                "value": "2292"
            },
            {
                "date": "1966",
                "value": "2224"
            },
            {
                "date": "1967",
                "value": "2283"
            },
            {
                "date": "1968",
                "value": "2309"
            },
            {
                "date": "1969",
                "value": "2316"
            },
            {
                "date": "1970",
                "value": "2237"
            },
            {
                "date": "1971",
                "value": "2273"
            },
            {
                "date": "1972",
                "value": "2077"
            },
            {
                "date": "1973",
                "value": "2065"
            },
            {
                "date": "1974",
                "value": "1953"
            },
            {
                "date": "1975",
                "value": "1809"
            },
            {
                "date": "1976",
                "value": "1844"
            },
            {
                "date": "1977",
                "value": "1827"
            },
            {
                "date": "1978",
                "value": "1895"
            },
            {
                "date": "1979",
                "value": "1895"
            },
            {
                "date": "1980",
                "value": "1959"
            },
            {
                "date": "1981",
                "value": "2036"
            },
            {
                "date": "1982",
                "value": "2075"
            },
            {
                "date": "1983",
                "value": "2150"
            },
            {
                "date": "1984",
                "value": "2182"
            },
            {
                "date": "1985",
                "value": "2372"
            },
            {
                "date": "1986",
                "value": "2557"
            },
            {
                "date": "1987",
                "value": "2498"
            },
            {
                "date": "1988",
                "value": "2457"
            },
            {
                "date": "1989",
                "value": "2410"
            },
            {
                "date": "1990",
                "value": "2522"
            },
            {
                "date": "1991",
                "value": "2546"
            },
            {
                "date": "1992",
                "value": "2498"
            },
            {
                "date": "1993",
                "value": "2467"
            },
            {
                "date": "1994",
                "value": "2380"
            },
            {
                "date": "1995",
                "value": "2393"
            },
            {
                "date": "1996",
                "value": "2391"
            },
            {
                "date": "1997",
                "value": "2476"
            },
            {
                "date": "1998",
                "value": "2357"
            },
            {
                "date": "1999",
                "value": "2512"
            },
            {
                "date": "2000",
                "value": "2590"
            },
            {
                "date": "2001",
                "value": "2521"
            },
            {
                "date": "2002",
                "value": "2455"
            },
            {
                "date": "2003",
                "value": "2455"
            },
            {
                "date": "2004",
                "value": "2465"
            },
            {
                "date": "2005",
                "value": "2442"
            },
            {
                "date": "2006",
                "value": "2397"
            },
            {
                "date": "2007",
                "value": "2535"
            },
            {
                "date": "2008",
                "value": "2589"
            },
            {
                "date": "2009",
                "value": "2621"
            },
            {
                "date": "2010",
                "value": "2674"
            },
            {
                "date": "2011",
                "value": "2692"
            },
            {
                "date": "2012",
                "value": "2652"
            },
            {
                "date": "2013",
                "value": "2628"
            }
        ],
        "Georgia": [
            {
                "date": "1961",
                "value": "3095"
            },
            {
                "date": "1962",
                "value": "3157"
            },
            {
                "date": "1963",
                "value": "3204"
            },
            {
                "date": "1964",
                "value": "3206"
            },
            {
                "date": "1965",
                "value": "3214"
            },
            {
                "date": "1966",
                "value": "3209"
            },
            {
                "date": "1967",
                "value": "3240"
            },
            {
                "date": "1968",
                "value": "3300"
            },
            {
                "date": "1969",
                "value": "3300"
            },
            {
                "date": "1970",
                "value": "3355"
            },
            {
                "date": "1971",
                "value": "3331"
            },
            {
                "date": "1972",
                "value": "3284"
            },
            {
                "date": "1973",
                "value": "3325"
            },
            {
                "date": "1974",
                "value": "3357"
            },
            {
                "date": "1975",
                "value": "3341"
            },
            {
                "date": "1976",
                "value": "3404"
            },
            {
                "date": "1977",
                "value": "3366"
            },
            {
                "date": "1978",
                "value": "3387"
            },
            {
                "date": "1979",
                "value": "3384"
            },
            {
                "date": "1980",
                "value": "3378"
            },
            {
                "date": "1981",
                "value": "3355"
            },
            {
                "date": "1982",
                "value": "3377"
            },
            {
                "date": "1983",
                "value": "3386"
            },
            {
                "date": "1984",
                "value": "3388"
            },
            {
                "date": "1985",
                "value": "3380"
            },
            {
                "date": "1986",
                "value": "3364"
            },
            {
                "date": "1987",
                "value": "3404"
            },
            {
                "date": "1988",
                "value": "3395"
            },
            {
                "date": "1989",
                "value": "3348"
            },
            {
                "date": "1990",
                "value": "3372"
            },
            {
                "date": "1991",
                "value": "3032"
            },
            {
                "date": "1992",
                "value": "1928"
            },
            {
                "date": "1993",
                "value": "1914"
            },
            {
                "date": "1994",
                "value": "1957"
            },
            {
                "date": "1995",
                "value": "2388"
            },
            {
                "date": "1996",
                "value": "2544"
            },
            {
                "date": "1997",
                "value": "2648"
            },
            {
                "date": "1998",
                "value": "2606"
            },
            {
                "date": "1999",
                "value": "2607"
            },
            {
                "date": "2000",
                "value": "2566"
            },
            {
                "date": "2001",
                "value": "2638"
            },
            {
                "date": "2002",
                "value": "2750"
            },
            {
                "date": "2003",
                "value": "2864"
            },
            {
                "date": "2004",
                "value": "2902"
            },
            {
                "date": "2005",
                "value": "2983"
            },
            {
                "date": "2006",
                "value": "2864"
            },
            {
                "date": "2007",
                "value": "2900"
            },
            {
                "date": "2008",
                "value": "2975"
            },
            {
                "date": "2009",
                "value": "2947"
            },
            {
                "date": "2010",
                "value": "2845"
            },
            {
                "date": "2011",
                "value": "2805"
            },
            {
                "date": "2012",
                "value": "2839"
            },
            {
                "date": "2013",
                "value": "2905"
            }
        ],
        "Germany": [
            {
                "date": "1860",
                "value": "2120"
            },
            {
                "date": "1948",
                "value": "2543"
            },
            {
                "date": "1961",
                "value": "2855"
            },
            {
                "date": "1962",
                "value": "2915"
            },
            {
                "date": "1963",
                "value": "2899"
            },
            {
                "date": "1964",
                "value": "2983"
            },
            {
                "date": "1965",
                "value": "3012"
            },
            {
                "date": "1966",
                "value": "3012"
            },
            {
                "date": "1967",
                "value": "3004"
            },
            {
                "date": "1968",
                "value": "3062"
            },
            {
                "date": "1969",
                "value": "3043"
            },
            {
                "date": "1970",
                "value": "3101"
            },
            {
                "date": "1971",
                "value": "3109"
            },
            {
                "date": "1972",
                "value": "3143"
            },
            {
                "date": "1973",
                "value": "3165"
            },
            {
                "date": "1974",
                "value": "3110"
            },
            {
                "date": "1975",
                "value": "3118"
            },
            {
                "date": "1976",
                "value": "3190"
            },
            {
                "date": "1977",
                "value": "3144"
            },
            {
                "date": "1978",
                "value": "3258"
            },
            {
                "date": "1979",
                "value": "3280"
            },
            {
                "date": "1980",
                "value": "3278"
            },
            {
                "date": "1981",
                "value": "3273"
            },
            {
                "date": "1982",
                "value": "3337"
            },
            {
                "date": "1983",
                "value": "3378"
            },
            {
                "date": "1984",
                "value": "3391"
            },
            {
                "date": "1985",
                "value": "3423"
            },
            {
                "date": "1986",
                "value": "3406"
            },
            {
                "date": "1987",
                "value": "3382"
            },
            {
                "date": "1988",
                "value": "3404"
            },
            {
                "date": "1989",
                "value": "3403"
            },
            {
                "date": "1990",
                "value": "3261"
            },
            {
                "date": "1991",
                "value": "3323"
            },
            {
                "date": "1992",
                "value": "3392"
            },
            {
                "date": "1993",
                "value": "3202"
            },
            {
                "date": "1994",
                "value": "3213"
            },
            {
                "date": "1995",
                "value": "3249"
            },
            {
                "date": "1996",
                "value": "3297"
            },
            {
                "date": "1997",
                "value": "3176"
            },
            {
                "date": "1998",
                "value": "3285"
            },
            {
                "date": "1999",
                "value": "3279"
            },
            {
                "date": "2000",
                "value": "3336"
            },
            {
                "date": "2001",
                "value": "3363"
            },
            {
                "date": "2002",
                "value": "3427"
            },
            {
                "date": "2003",
                "value": "3390"
            },
            {
                "date": "2004",
                "value": "3411"
            },
            {
                "date": "2005",
                "value": "3450"
            },
            {
                "date": "2006",
                "value": "3466"
            },
            {
                "date": "2007",
                "value": "3527"
            },
            {
                "date": "2008",
                "value": "3517"
            },
            {
                "date": "2009",
                "value": "3515"
            },
            {
                "date": "2010",
                "value": "3504"
            },
            {
                "date": "2011",
                "value": "3538"
            },
            {
                "date": "2012",
                "value": "3501"
            },
            {
                "date": "2013",
                "value": "3499"
            }
        ],
        "Ghana": [
            {
                "date": "1961",
                "value": "2016"
            },
            {
                "date": "1962",
                "value": "1940"
            },
            {
                "date": "1963",
                "value": "1848"
            },
            {
                "date": "1964",
                "value": "1871"
            },
            {
                "date": "1965",
                "value": "1872"
            },
            {
                "date": "1966",
                "value": "1988"
            },
            {
                "date": "1967",
                "value": "2097"
            },
            {
                "date": "1968",
                "value": "2035"
            },
            {
                "date": "1969",
                "value": "2045"
            },
            {
                "date": "1970",
                "value": "2147"
            },
            {
                "date": "1971",
                "value": "2142"
            },
            {
                "date": "1972",
                "value": "2065"
            },
            {
                "date": "1973",
                "value": "2103"
            },
            {
                "date": "1974",
                "value": "2142"
            },
            {
                "date": "1975",
                "value": "2019"
            },
            {
                "date": "1976",
                "value": "1899"
            },
            {
                "date": "1977",
                "value": "1706"
            },
            {
                "date": "1978",
                "value": "1674"
            },
            {
                "date": "1979",
                "value": "1626"
            },
            {
                "date": "1980",
                "value": "1590"
            },
            {
                "date": "1981",
                "value": "1582"
            },
            {
                "date": "1982",
                "value": "1489"
            },
            {
                "date": "1983",
                "value": "1527"
            },
            {
                "date": "1984",
                "value": "1767"
            },
            {
                "date": "1985",
                "value": "1786"
            },
            {
                "date": "1986",
                "value": "1836"
            },
            {
                "date": "1987",
                "value": "1941"
            },
            {
                "date": "1988",
                "value": "1912"
            },
            {
                "date": "1989",
                "value": "1926"
            },
            {
                "date": "1990",
                "value": "1729"
            },
            {
                "date": "1991",
                "value": "2090"
            },
            {
                "date": "1992",
                "value": "2118"
            },
            {
                "date": "1993",
                "value": "2279"
            },
            {
                "date": "1994",
                "value": "2312"
            },
            {
                "date": "1995",
                "value": "2351"
            },
            {
                "date": "1996",
                "value": "2377"
            },
            {
                "date": "1997",
                "value": "2395"
            },
            {
                "date": "1998",
                "value": "2427"
            },
            {
                "date": "1999",
                "value": "2465"
            },
            {
                "date": "2000",
                "value": "2510"
            },
            {
                "date": "2001",
                "value": "2564"
            },
            {
                "date": "2002",
                "value": "2655"
            },
            {
                "date": "2003",
                "value": "2669"
            },
            {
                "date": "2004",
                "value": "2682"
            },
            {
                "date": "2005",
                "value": "2751"
            },
            {
                "date": "2006",
                "value": "2824"
            },
            {
                "date": "2007",
                "value": "2803"
            },
            {
                "date": "2008",
                "value": "2950"
            },
            {
                "date": "2009",
                "value": "3032"
            },
            {
                "date": "2010",
                "value": "3077"
            },
            {
                "date": "2011",
                "value": "3002"
            },
            {
                "date": "2012",
                "value": "3043"
            },
            {
                "date": "2013",
                "value": "3016"
            }
        ],
        "Greece": [
            {
                "date": "1948",
                "value": "2358"
            },
            {
                "date": "1961",
                "value": "2824"
            },
            {
                "date": "1962",
                "value": "2780"
            },
            {
                "date": "1963",
                "value": "2794"
            },
            {
                "date": "1964",
                "value": "2877"
            },
            {
                "date": "1965",
                "value": "2924"
            },
            {
                "date": "1966",
                "value": "2947"
            },
            {
                "date": "1967",
                "value": "3005"
            },
            {
                "date": "1968",
                "value": "3043"
            },
            {
                "date": "1969",
                "value": "3041"
            },
            {
                "date": "1970",
                "value": "3146"
            },
            {
                "date": "1971",
                "value": "3171"
            },
            {
                "date": "1972",
                "value": "3134"
            },
            {
                "date": "1973",
                "value": "3420"
            },
            {
                "date": "1974",
                "value": "3356"
            },
            {
                "date": "1975",
                "value": "3342"
            },
            {
                "date": "1976",
                "value": "3324"
            },
            {
                "date": "1977",
                "value": "3340"
            },
            {
                "date": "1978",
                "value": "3341"
            },
            {
                "date": "1979",
                "value": "3338"
            },
            {
                "date": "1980",
                "value": "3195"
            },
            {
                "date": "1981",
                "value": "3368"
            },
            {
                "date": "1982",
                "value": "3406"
            },
            {
                "date": "1983",
                "value": "3433"
            },
            {
                "date": "1984",
                "value": "3550"
            },
            {
                "date": "1985",
                "value": "3511"
            },
            {
                "date": "1986",
                "value": "3338"
            },
            {
                "date": "1987",
                "value": "3461"
            },
            {
                "date": "1988",
                "value": "3544"
            },
            {
                "date": "1989",
                "value": "3630"
            },
            {
                "date": "1990",
                "value": "3540"
            },
            {
                "date": "1991",
                "value": "3538"
            },
            {
                "date": "1992",
                "value": "3605"
            },
            {
                "date": "1993",
                "value": "3546"
            },
            {
                "date": "1994",
                "value": "3580"
            },
            {
                "date": "1995",
                "value": "3515"
            },
            {
                "date": "1996",
                "value": "3510"
            },
            {
                "date": "1997",
                "value": "3515"
            },
            {
                "date": "1998",
                "value": "3535"
            },
            {
                "date": "1999",
                "value": "3625"
            },
            {
                "date": "2000",
                "value": "3602"
            },
            {
                "date": "2001",
                "value": "3614"
            },
            {
                "date": "2002",
                "value": "3639"
            },
            {
                "date": "2003",
                "value": "3651"
            },
            {
                "date": "2004",
                "value": "3719"
            },
            {
                "date": "2005",
                "value": "3593"
            },
            {
                "date": "2006",
                "value": "3485"
            },
            {
                "date": "2007",
                "value": "3511"
            },
            {
                "date": "2008",
                "value": "3519"
            },
            {
                "date": "2009",
                "value": "3505"
            },
            {
                "date": "2010",
                "value": "3442"
            },
            {
                "date": "2011",
                "value": "3427"
            },
            {
                "date": "2012",
                "value": "3404"
            },
            {
                "date": "2013",
                "value": "3400"
            }
        ],
        "Grenada": [
            {
                "date": "1961",
                "value": "1732"
            },
            {
                "date": "1962",
                "value": "1813"
            },
            {
                "date": "1963",
                "value": "1856"
            },
            {
                "date": "1964",
                "value": "1932"
            },
            {
                "date": "1965",
                "value": "1985"
            },
            {
                "date": "1966",
                "value": "2057"
            },
            {
                "date": "1967",
                "value": "2070"
            },
            {
                "date": "1968",
                "value": "2105"
            },
            {
                "date": "1969",
                "value": "2155"
            },
            {
                "date": "1970",
                "value": "2241"
            },
            {
                "date": "1971",
                "value": "2199"
            },
            {
                "date": "1972",
                "value": "2171"
            },
            {
                "date": "1973",
                "value": "2148"
            },
            {
                "date": "1974",
                "value": "2060"
            },
            {
                "date": "1975",
                "value": "2050"
            },
            {
                "date": "1976",
                "value": "2102"
            },
            {
                "date": "1977",
                "value": "2224"
            },
            {
                "date": "1978",
                "value": "2277"
            },
            {
                "date": "1979",
                "value": "2290"
            },
            {
                "date": "1980",
                "value": "2258"
            },
            {
                "date": "1981",
                "value": "2228"
            },
            {
                "date": "1982",
                "value": "2190"
            },
            {
                "date": "1983",
                "value": "2106"
            },
            {
                "date": "1984",
                "value": "2102"
            },
            {
                "date": "1985",
                "value": "2106"
            },
            {
                "date": "1986",
                "value": "2131"
            },
            {
                "date": "1987",
                "value": "2358"
            },
            {
                "date": "1988",
                "value": "2401"
            },
            {
                "date": "1989",
                "value": "2454"
            },
            {
                "date": "1990",
                "value": "2495"
            },
            {
                "date": "1991",
                "value": "2461"
            },
            {
                "date": "1992",
                "value": "2456"
            },
            {
                "date": "1993",
                "value": "2477"
            },
            {
                "date": "1994",
                "value": "2440"
            },
            {
                "date": "1995",
                "value": "2400"
            },
            {
                "date": "1996",
                "value": "2379"
            },
            {
                "date": "1997",
                "value": "2397"
            },
            {
                "date": "1998",
                "value": "2324"
            },
            {
                "date": "1999",
                "value": "2251"
            },
            {
                "date": "2000",
                "value": "2220"
            },
            {
                "date": "2001",
                "value": "2291"
            },
            {
                "date": "2002",
                "value": "2307"
            },
            {
                "date": "2003",
                "value": "2313"
            },
            {
                "date": "2004",
                "value": "2378"
            },
            {
                "date": "2005",
                "value": "2370"
            },
            {
                "date": "2006",
                "value": "2400"
            },
            {
                "date": "2007",
                "value": "2395"
            },
            {
                "date": "2008",
                "value": "2426"
            },
            {
                "date": "2009",
                "value": "2434"
            },
            {
                "date": "2010",
                "value": "2432"
            },
            {
                "date": "2011",
                "value": "2424"
            },
            {
                "date": "2012",
                "value": "2440"
            },
            {
                "date": "2013",
                "value": "2447"
            }
        ],
        "Guatemala": [
            {
                "date": "1961",
                "value": "1815"
            },
            {
                "date": "1962",
                "value": "1847"
            },
            {
                "date": "1963",
                "value": "1892"
            },
            {
                "date": "1964",
                "value": "1953"
            },
            {
                "date": "1965",
                "value": "1960"
            },
            {
                "date": "1966",
                "value": "1966"
            },
            {
                "date": "1967",
                "value": "1974"
            },
            {
                "date": "1968",
                "value": "1986"
            },
            {
                "date": "1969",
                "value": "2017"
            },
            {
                "date": "1970",
                "value": "2029"
            },
            {
                "date": "1971",
                "value": "2000"
            },
            {
                "date": "1972",
                "value": "2008"
            },
            {
                "date": "1973",
                "value": "2062"
            },
            {
                "date": "1974",
                "value": "2042"
            },
            {
                "date": "1975",
                "value": "2123"
            },
            {
                "date": "1976",
                "value": "2071"
            },
            {
                "date": "1977",
                "value": "2109"
            },
            {
                "date": "1978",
                "value": "2126"
            },
            {
                "date": "1979",
                "value": "2133"
            },
            {
                "date": "1980",
                "value": "2161"
            },
            {
                "date": "1981",
                "value": "2390"
            },
            {
                "date": "1982",
                "value": "2262"
            },
            {
                "date": "1983",
                "value": "2118"
            },
            {
                "date": "1984",
                "value": "2015"
            },
            {
                "date": "1985",
                "value": "2197"
            },
            {
                "date": "1986",
                "value": "2350"
            },
            {
                "date": "1987",
                "value": "2333"
            },
            {
                "date": "1988",
                "value": "2349"
            },
            {
                "date": "1989",
                "value": "2219"
            },
            {
                "date": "1990",
                "value": "2355"
            },
            {
                "date": "1991",
                "value": "2320"
            },
            {
                "date": "1992",
                "value": "2281"
            },
            {
                "date": "1993",
                "value": "2335"
            },
            {
                "date": "1994",
                "value": "2361"
            },
            {
                "date": "1995",
                "value": "2276"
            },
            {
                "date": "1996",
                "value": "2244"
            },
            {
                "date": "1997",
                "value": "2131"
            },
            {
                "date": "1998",
                "value": "2155"
            },
            {
                "date": "1999",
                "value": "2141"
            },
            {
                "date": "2000",
                "value": "2160"
            },
            {
                "date": "2001",
                "value": "2218"
            },
            {
                "date": "2002",
                "value": "2359"
            },
            {
                "date": "2003",
                "value": "2345"
            },
            {
                "date": "2004",
                "value": "2324"
            },
            {
                "date": "2005",
                "value": "2383"
            },
            {
                "date": "2006",
                "value": "2415"
            },
            {
                "date": "2007",
                "value": "2447"
            },
            {
                "date": "2008",
                "value": "2378"
            },
            {
                "date": "2009",
                "value": "2459"
            },
            {
                "date": "2010",
                "value": "2431"
            },
            {
                "date": "2011",
                "value": "2485"
            },
            {
                "date": "2012",
                "value": "2416"
            },
            {
                "date": "2013",
                "value": "2419"
            }
        ],
        "Guinea": [
            {
                "date": "1961",
                "value": "1957"
            },
            {
                "date": "1962",
                "value": "1942"
            },
            {
                "date": "1963",
                "value": "1941"
            },
            {
                "date": "1964",
                "value": "2055"
            },
            {
                "date": "1965",
                "value": "2020"
            },
            {
                "date": "1966",
                "value": "2014"
            },
            {
                "date": "1967",
                "value": "2011"
            },
            {
                "date": "1968",
                "value": "2000"
            },
            {
                "date": "1969",
                "value": "1968"
            },
            {
                "date": "1970",
                "value": "2020"
            },
            {
                "date": "1971",
                "value": "2047"
            },
            {
                "date": "1972",
                "value": "2026"
            },
            {
                "date": "1973",
                "value": "2148"
            },
            {
                "date": "1974",
                "value": "2131"
            },
            {
                "date": "1975",
                "value": "2170"
            },
            {
                "date": "1976",
                "value": "2197"
            },
            {
                "date": "1977",
                "value": "2249"
            },
            {
                "date": "1978",
                "value": "2317"
            },
            {
                "date": "1979",
                "value": "2394"
            },
            {
                "date": "1980",
                "value": "2354"
            },
            {
                "date": "1981",
                "value": "2439"
            },
            {
                "date": "1982",
                "value": "2347"
            },
            {
                "date": "1983",
                "value": "2339"
            },
            {
                "date": "1984",
                "value": "2426"
            },
            {
                "date": "1985",
                "value": "2407"
            },
            {
                "date": "1986",
                "value": "2452"
            },
            {
                "date": "1987",
                "value": "2440"
            },
            {
                "date": "1988",
                "value": "2513"
            },
            {
                "date": "1989",
                "value": "2496"
            },
            {
                "date": "1990",
                "value": "2430"
            },
            {
                "date": "1991",
                "value": "2421"
            },
            {
                "date": "1992",
                "value": "2449"
            },
            {
                "date": "1993",
                "value": "2432"
            },
            {
                "date": "1994",
                "value": "2412"
            },
            {
                "date": "1995",
                "value": "2377"
            },
            {
                "date": "1996",
                "value": "2352"
            },
            {
                "date": "1997",
                "value": "2293"
            },
            {
                "date": "1998",
                "value": "2263"
            },
            {
                "date": "1999",
                "value": "2323"
            },
            {
                "date": "2000",
                "value": "2359"
            },
            {
                "date": "2001",
                "value": "2330"
            },
            {
                "date": "2002",
                "value": "2357"
            },
            {
                "date": "2003",
                "value": "2400"
            },
            {
                "date": "2004",
                "value": "2426"
            },
            {
                "date": "2005",
                "value": "2443"
            },
            {
                "date": "2006",
                "value": "2503"
            },
            {
                "date": "2007",
                "value": "2505"
            },
            {
                "date": "2008",
                "value": "2534"
            },
            {
                "date": "2009",
                "value": "2546"
            },
            {
                "date": "2010",
                "value": "2550"
            },
            {
                "date": "2011",
                "value": "2546"
            },
            {
                "date": "2012",
                "value": "2561"
            },
            {
                "date": "2013",
                "value": "2566"
            }
        ],
        "Guinea-Bissau": [
            {
                "date": "1961",
                "value": "1615"
            },
            {
                "date": "1962",
                "value": "1571"
            },
            {
                "date": "1963",
                "value": "1596"
            },
            {
                "date": "1964",
                "value": "1621"
            },
            {
                "date": "1965",
                "value": "1664"
            },
            {
                "date": "1966",
                "value": "1671"
            },
            {
                "date": "1967",
                "value": "1639"
            },
            {
                "date": "1968",
                "value": "1542"
            },
            {
                "date": "1969",
                "value": "1623"
            },
            {
                "date": "1970",
                "value": "1534"
            },
            {
                "date": "1971",
                "value": "1634"
            },
            {
                "date": "1972",
                "value": "1575"
            },
            {
                "date": "1973",
                "value": "1568"
            },
            {
                "date": "1974",
                "value": "1605"
            },
            {
                "date": "1975",
                "value": "1680"
            },
            {
                "date": "1976",
                "value": "1753"
            },
            {
                "date": "1977",
                "value": "1833"
            },
            {
                "date": "1978",
                "value": "1952"
            },
            {
                "date": "1979",
                "value": "1938"
            },
            {
                "date": "1980",
                "value": "2020"
            },
            {
                "date": "1981",
                "value": "2144"
            },
            {
                "date": "1982",
                "value": "2144"
            },
            {
                "date": "1983",
                "value": "2141"
            },
            {
                "date": "1984",
                "value": "2134"
            },
            {
                "date": "1985",
                "value": "2347"
            },
            {
                "date": "1986",
                "value": "2249"
            },
            {
                "date": "1987",
                "value": "2258"
            },
            {
                "date": "1988",
                "value": "2213"
            },
            {
                "date": "1989",
                "value": "2190"
            },
            {
                "date": "1990",
                "value": "2249"
            },
            {
                "date": "1991",
                "value": "2319"
            },
            {
                "date": "1992",
                "value": "2373"
            },
            {
                "date": "1993",
                "value": "2307"
            },
            {
                "date": "1994",
                "value": "2340"
            },
            {
                "date": "1995",
                "value": "2336"
            },
            {
                "date": "1996",
                "value": "2251"
            },
            {
                "date": "1997",
                "value": "2185"
            },
            {
                "date": "1998",
                "value": "2152"
            },
            {
                "date": "1999",
                "value": "2160"
            },
            {
                "date": "2000",
                "value": "2250"
            },
            {
                "date": "2001",
                "value": "2275"
            },
            {
                "date": "2002",
                "value": "2272"
            },
            {
                "date": "2003",
                "value": "2227"
            },
            {
                "date": "2004",
                "value": "2257"
            },
            {
                "date": "2005",
                "value": "2273"
            },
            {
                "date": "2006",
                "value": "2253"
            },
            {
                "date": "2007",
                "value": "2293"
            },
            {
                "date": "2008",
                "value": "2304"
            },
            {
                "date": "2009",
                "value": "2278"
            },
            {
                "date": "2010",
                "value": "2346"
            },
            {
                "date": "2011",
                "value": "2336"
            },
            {
                "date": "2012",
                "value": "2331"
            },
            {
                "date": "2013",
                "value": "2292"
            }
        ],
        "Guyana": [
            {
                "date": "1961",
                "value": "2308"
            },
            {
                "date": "1962",
                "value": "2312"
            },
            {
                "date": "1963",
                "value": "2259"
            },
            {
                "date": "1964",
                "value": "2321"
            },
            {
                "date": "1965",
                "value": "2243"
            },
            {
                "date": "1966",
                "value": "2272"
            },
            {
                "date": "1967",
                "value": "2248"
            },
            {
                "date": "1968",
                "value": "2235"
            },
            {
                "date": "1969",
                "value": "2251"
            },
            {
                "date": "1970",
                "value": "2235"
            },
            {
                "date": "1971",
                "value": "2234"
            },
            {
                "date": "1972",
                "value": "2242"
            },
            {
                "date": "1973",
                "value": "2352"
            },
            {
                "date": "1974",
                "value": "2398"
            },
            {
                "date": "1975",
                "value": "2415"
            },
            {
                "date": "1976",
                "value": "2475"
            },
            {
                "date": "1977",
                "value": "2475"
            },
            {
                "date": "1978",
                "value": "2467"
            },
            {
                "date": "1979",
                "value": "2390"
            },
            {
                "date": "1980",
                "value": "2438"
            },
            {
                "date": "1981",
                "value": "2509"
            },
            {
                "date": "1982",
                "value": "2463"
            },
            {
                "date": "1983",
                "value": "2532"
            },
            {
                "date": "1984",
                "value": "2480"
            },
            {
                "date": "1985",
                "value": "2470"
            },
            {
                "date": "1986",
                "value": "2493"
            },
            {
                "date": "1987",
                "value": "2523"
            },
            {
                "date": "1988",
                "value": "2443"
            },
            {
                "date": "1989",
                "value": "2414"
            },
            {
                "date": "1990",
                "value": "2358"
            },
            {
                "date": "1991",
                "value": "2367"
            },
            {
                "date": "1992",
                "value": "2414"
            },
            {
                "date": "1993",
                "value": "2462"
            },
            {
                "date": "1994",
                "value": "2534"
            },
            {
                "date": "1995",
                "value": "2583"
            },
            {
                "date": "1996",
                "value": "2590"
            },
            {
                "date": "1997",
                "value": "2675"
            },
            {
                "date": "1998",
                "value": "2676"
            },
            {
                "date": "1999",
                "value": "2677"
            },
            {
                "date": "2000",
                "value": "2733"
            },
            {
                "date": "2001",
                "value": "2758"
            },
            {
                "date": "2002",
                "value": "2730"
            },
            {
                "date": "2003",
                "value": "2711"
            },
            {
                "date": "2004",
                "value": "2686"
            },
            {
                "date": "2005",
                "value": "2687"
            },
            {
                "date": "2006",
                "value": "2660"
            },
            {
                "date": "2007",
                "value": "2660"
            },
            {
                "date": "2008",
                "value": "2599"
            },
            {
                "date": "2009",
                "value": "2623"
            },
            {
                "date": "2010",
                "value": "2643"
            },
            {
                "date": "2011",
                "value": "2637"
            },
            {
                "date": "2012",
                "value": "2728"
            },
            {
                "date": "2013",
                "value": "2764"
            }
        ],
        "Haiti": [
            {
                "date": "1961",
                "value": "1911"
            },
            {
                "date": "1962",
                "value": "1943"
            },
            {
                "date": "1963",
                "value": "1940"
            },
            {
                "date": "1964",
                "value": "1875"
            },
            {
                "date": "1965",
                "value": "1946"
            },
            {
                "date": "1966",
                "value": "1912"
            },
            {
                "date": "1967",
                "value": "1900"
            },
            {
                "date": "1968",
                "value": "1870"
            },
            {
                "date": "1969",
                "value": "1879"
            },
            {
                "date": "1970",
                "value": "1874"
            },
            {
                "date": "1971",
                "value": "1877"
            },
            {
                "date": "1972",
                "value": "1902"
            },
            {
                "date": "1973",
                "value": "1930"
            },
            {
                "date": "1974",
                "value": "1930"
            },
            {
                "date": "1975",
                "value": "1930"
            },
            {
                "date": "1976",
                "value": "1967"
            },
            {
                "date": "1977",
                "value": "1931"
            },
            {
                "date": "1978",
                "value": "1959"
            },
            {
                "date": "1979",
                "value": "1967"
            },
            {
                "date": "1980",
                "value": "1954"
            },
            {
                "date": "1981",
                "value": "1991"
            },
            {
                "date": "1982",
                "value": "1959"
            },
            {
                "date": "1983",
                "value": "1944"
            },
            {
                "date": "1984",
                "value": "1882"
            },
            {
                "date": "1985",
                "value": "1902"
            },
            {
                "date": "1986",
                "value": "1876"
            },
            {
                "date": "1987",
                "value": "1797"
            },
            {
                "date": "1988",
                "value": "1739"
            },
            {
                "date": "1989",
                "value": "1696"
            },
            {
                "date": "1990",
                "value": "1747"
            },
            {
                "date": "1991",
                "value": "1754"
            },
            {
                "date": "1992",
                "value": "1724"
            },
            {
                "date": "1993",
                "value": "1715"
            },
            {
                "date": "1994",
                "value": "1703"
            },
            {
                "date": "1995",
                "value": "1761"
            },
            {
                "date": "1996",
                "value": "1809"
            },
            {
                "date": "1997",
                "value": "1839"
            },
            {
                "date": "1998",
                "value": "1920"
            },
            {
                "date": "1999",
                "value": "1956"
            },
            {
                "date": "2000",
                "value": "1958"
            },
            {
                "date": "2001",
                "value": "1897"
            },
            {
                "date": "2002",
                "value": "1902"
            },
            {
                "date": "2003",
                "value": "1872"
            },
            {
                "date": "2004",
                "value": "1889"
            },
            {
                "date": "2005",
                "value": "1884"
            },
            {
                "date": "2006",
                "value": "1942"
            },
            {
                "date": "2007",
                "value": "1970"
            },
            {
                "date": "2008",
                "value": "2014"
            },
            {
                "date": "2009",
                "value": "2060"
            },
            {
                "date": "2010",
                "value": "2169"
            },
            {
                "date": "2011",
                "value": "2097"
            },
            {
                "date": "2012",
                "value": "2084"
            },
            {
                "date": "2013",
                "value": "2091"
            }
        ],
        "Honduras": [
            {
                "date": "1961",
                "value": "1883"
            },
            {
                "date": "1962",
                "value": "1853"
            },
            {
                "date": "1963",
                "value": "1865"
            },
            {
                "date": "1964",
                "value": "1863"
            },
            {
                "date": "1965",
                "value": "1919"
            },
            {
                "date": "1966",
                "value": "1977"
            },
            {
                "date": "1967",
                "value": "2029"
            },
            {
                "date": "1968",
                "value": "2044"
            },
            {
                "date": "1969",
                "value": "2089"
            },
            {
                "date": "1970",
                "value": "2075"
            },
            {
                "date": "1971",
                "value": "2032"
            },
            {
                "date": "1972",
                "value": "2005"
            },
            {
                "date": "1973",
                "value": "2039"
            },
            {
                "date": "1974",
                "value": "2011"
            },
            {
                "date": "1975",
                "value": "2077"
            },
            {
                "date": "1976",
                "value": "2106"
            },
            {
                "date": "1977",
                "value": "2091"
            },
            {
                "date": "1978",
                "value": "2055"
            },
            {
                "date": "1979",
                "value": "2041"
            },
            {
                "date": "1980",
                "value": "2070"
            },
            {
                "date": "1981",
                "value": "2124"
            },
            {
                "date": "1982",
                "value": "2031"
            },
            {
                "date": "1983",
                "value": "2098"
            },
            {
                "date": "1984",
                "value": "2098"
            },
            {
                "date": "1985",
                "value": "2140"
            },
            {
                "date": "1986",
                "value": "2158"
            },
            {
                "date": "1987",
                "value": "2185"
            },
            {
                "date": "1988",
                "value": "2242"
            },
            {
                "date": "1989",
                "value": "2287"
            },
            {
                "date": "1990",
                "value": "2311"
            },
            {
                "date": "1991",
                "value": "2277"
            },
            {
                "date": "1992",
                "value": "2321"
            },
            {
                "date": "1993",
                "value": "2329"
            },
            {
                "date": "1994",
                "value": "2355"
            },
            {
                "date": "1995",
                "value": "2389"
            },
            {
                "date": "1996",
                "value": "2409"
            },
            {
                "date": "1997",
                "value": "2404"
            },
            {
                "date": "1998",
                "value": "2410"
            },
            {
                "date": "1999",
                "value": "2396"
            },
            {
                "date": "2000",
                "value": "2369"
            },
            {
                "date": "2001",
                "value": "2452"
            },
            {
                "date": "2002",
                "value": "2474"
            },
            {
                "date": "2003",
                "value": "2482"
            },
            {
                "date": "2004",
                "value": "2480"
            },
            {
                "date": "2005",
                "value": "2490"
            },
            {
                "date": "2006",
                "value": "2530"
            },
            {
                "date": "2007",
                "value": "2569"
            },
            {
                "date": "2008",
                "value": "2603"
            },
            {
                "date": "2009",
                "value": "2596"
            },
            {
                "date": "2010",
                "value": "2596"
            },
            {
                "date": "2011",
                "value": "2624"
            },
            {
                "date": "2012",
                "value": "2629"
            },
            {
                "date": "2013",
                "value": "2641"
            }
        ],
        "Hong Kong": [
            {
                "date": "1961",
                "value": "2592"
            },
            {
                "date": "1962",
                "value": "2603"
            },
            {
                "date": "1963",
                "value": "2611"
            },
            {
                "date": "1964",
                "value": "2597"
            },
            {
                "date": "1965",
                "value": "2603"
            },
            {
                "date": "1966",
                "value": "2642"
            },
            {
                "date": "1967",
                "value": "2688"
            },
            {
                "date": "1968",
                "value": "2771"
            },
            {
                "date": "1969",
                "value": "2793"
            },
            {
                "date": "1970",
                "value": "2881"
            },
            {
                "date": "1971",
                "value": "2926"
            },
            {
                "date": "1972",
                "value": "2959"
            },
            {
                "date": "1973",
                "value": "2966"
            },
            {
                "date": "1974",
                "value": "2936"
            },
            {
                "date": "1975",
                "value": "2911"
            },
            {
                "date": "1976",
                "value": "2930"
            },
            {
                "date": "1977",
                "value": "2925"
            },
            {
                "date": "1978",
                "value": "2899"
            },
            {
                "date": "1979",
                "value": "2942"
            },
            {
                "date": "1980",
                "value": "2919"
            },
            {
                "date": "1981",
                "value": "2970"
            },
            {
                "date": "1982",
                "value": "3002"
            },
            {
                "date": "1983",
                "value": "3052"
            },
            {
                "date": "1984",
                "value": "3054"
            },
            {
                "date": "1985",
                "value": "3071"
            },
            {
                "date": "1986",
                "value": "3106"
            },
            {
                "date": "1987",
                "value": "3169"
            },
            {
                "date": "1988",
                "value": "3205"
            },
            {
                "date": "1989",
                "value": "3239"
            },
            {
                "date": "1990",
                "value": "3180"
            },
            {
                "date": "1991",
                "value": "3187"
            },
            {
                "date": "1992",
                "value": "3093"
            },
            {
                "date": "1993",
                "value": "3158"
            },
            {
                "date": "1994",
                "value": "3208"
            },
            {
                "date": "1995",
                "value": "3252"
            },
            {
                "date": "1996",
                "value": "3162"
            },
            {
                "date": "1997",
                "value": "3127"
            },
            {
                "date": "1998",
                "value": "3037"
            },
            {
                "date": "1999",
                "value": "3053"
            },
            {
                "date": "2000",
                "value": "3049"
            },
            {
                "date": "2001",
                "value": "3082"
            },
            {
                "date": "2002",
                "value": "3125"
            },
            {
                "date": "2003",
                "value": "3179"
            },
            {
                "date": "2004",
                "value": "3208"
            },
            {
                "date": "2005",
                "value": "3224"
            },
            {
                "date": "2006",
                "value": "3246"
            },
            {
                "date": "2007",
                "value": "3246"
            },
            {
                "date": "2008",
                "value": "3241"
            },
            {
                "date": "2009",
                "value": "3255"
            },
            {
                "date": "2010",
                "value": "3256"
            },
            {
                "date": "2011",
                "value": "3259"
            },
            {
                "date": "2012",
                "value": "3281"
            },
            {
                "date": "2013",
                "value": "3290"
            }
        ],
        "Hungary": [
            {
                "date": "1961",
                "value": "2870"
            },
            {
                "date": "1962",
                "value": "3052"
            },
            {
                "date": "1963",
                "value": "3076"
            },
            {
                "date": "1964",
                "value": "3052"
            },
            {
                "date": "1965",
                "value": "3092"
            },
            {
                "date": "1966",
                "value": "3284"
            },
            {
                "date": "1967",
                "value": "3126"
            },
            {
                "date": "1968",
                "value": "3159"
            },
            {
                "date": "1969",
                "value": "3233"
            },
            {
                "date": "1970",
                "value": "3250"
            },
            {
                "date": "1971",
                "value": "3269"
            },
            {
                "date": "1972",
                "value": "3204"
            },
            {
                "date": "1973",
                "value": "3258"
            },
            {
                "date": "1974",
                "value": "3375"
            },
            {
                "date": "1975",
                "value": "3380"
            },
            {
                "date": "1976",
                "value": "3290"
            },
            {
                "date": "1977",
                "value": "3279"
            },
            {
                "date": "1978",
                "value": "3317"
            },
            {
                "date": "1979",
                "value": "3270"
            },
            {
                "date": "1980",
                "value": "3377"
            },
            {
                "date": "1981",
                "value": "3394"
            },
            {
                "date": "1982",
                "value": "3411"
            },
            {
                "date": "1983",
                "value": "3422"
            },
            {
                "date": "1984",
                "value": "3393"
            },
            {
                "date": "1985",
                "value": "3422"
            },
            {
                "date": "1986",
                "value": "3440"
            },
            {
                "date": "1987",
                "value": "3600"
            },
            {
                "date": "1988",
                "value": "3531"
            },
            {
                "date": "1989",
                "value": "3496"
            },
            {
                "date": "1990",
                "value": "3380"
            },
            {
                "date": "1991",
                "value": "3205"
            },
            {
                "date": "1992",
                "value": "3282"
            },
            {
                "date": "1993",
                "value": "3105"
            },
            {
                "date": "1994",
                "value": "3026"
            },
            {
                "date": "1995",
                "value": "2949"
            },
            {
                "date": "1996",
                "value": "2928"
            },
            {
                "date": "1997",
                "value": "3008"
            },
            {
                "date": "1998",
                "value": "3008"
            },
            {
                "date": "1999",
                "value": "2999"
            },
            {
                "date": "2000",
                "value": "3172"
            },
            {
                "date": "2001",
                "value": "3094"
            },
            {
                "date": "2002",
                "value": "3075"
            },
            {
                "date": "2003",
                "value": "3061"
            },
            {
                "date": "2004",
                "value": "3192"
            },
            {
                "date": "2005",
                "value": "3270"
            },
            {
                "date": "2006",
                "value": "3278"
            },
            {
                "date": "2007",
                "value": "3164"
            },
            {
                "date": "2008",
                "value": "3149"
            },
            {
                "date": "2009",
                "value": "3140"
            },
            {
                "date": "2010",
                "value": "3062"
            },
            {
                "date": "2011",
                "value": "3064"
            },
            {
                "date": "2012",
                "value": "3009"
            },
            {
                "date": "2013",
                "value": "3037"
            }
        ],
        "Iceland": [
            {
                "date": "1840",
                "value": "3080"
            },
            {
                "date": "1870",
                "value": "2573"
            },
            {
                "date": "1890",
                "value": "3106"
            },
            {
                "date": "1910",
                "value": "3499"
            },
            {
                "date": "1961",
                "value": "3256"
            },
            {
                "date": "1962",
                "value": "3323"
            },
            {
                "date": "1963",
                "value": "3104"
            },
            {
                "date": "1964",
                "value": "3142"
            },
            {
                "date": "1965",
                "value": "3156"
            },
            {
                "date": "1966",
                "value": "3085"
            },
            {
                "date": "1967",
                "value": "2979"
            },
            {
                "date": "1968",
                "value": "2921"
            },
            {
                "date": "1969",
                "value": "2892"
            },
            {
                "date": "1970",
                "value": "3016"
            },
            {
                "date": "1971",
                "value": "2951"
            },
            {
                "date": "1972",
                "value": "3068"
            },
            {
                "date": "1973",
                "value": "2945"
            },
            {
                "date": "1974",
                "value": "2948"
            },
            {
                "date": "1975",
                "value": "2975"
            },
            {
                "date": "1976",
                "value": "3038"
            },
            {
                "date": "1977",
                "value": "3047"
            },
            {
                "date": "1978",
                "value": "3108"
            },
            {
                "date": "1979",
                "value": "3203"
            },
            {
                "date": "1980",
                "value": "3167"
            },
            {
                "date": "1981",
                "value": "3300"
            },
            {
                "date": "1982",
                "value": "3191"
            },
            {
                "date": "1983",
                "value": "3187"
            },
            {
                "date": "1984",
                "value": "3204"
            },
            {
                "date": "1985",
                "value": "3163"
            },
            {
                "date": "1986",
                "value": "3294"
            },
            {
                "date": "1987",
                "value": "3208"
            },
            {
                "date": "1988",
                "value": "3113"
            },
            {
                "date": "1989",
                "value": "3148"
            },
            {
                "date": "1990",
                "value": "3057"
            },
            {
                "date": "1991",
                "value": "3117"
            },
            {
                "date": "1992",
                "value": "3106"
            },
            {
                "date": "1993",
                "value": "3086"
            },
            {
                "date": "1994",
                "value": "3124"
            },
            {
                "date": "1995",
                "value": "3111"
            },
            {
                "date": "1996",
                "value": "3032"
            },
            {
                "date": "1997",
                "value": "3108"
            },
            {
                "date": "1998",
                "value": "3117"
            },
            {
                "date": "1999",
                "value": "3160"
            },
            {
                "date": "2000",
                "value": "3152"
            },
            {
                "date": "2001",
                "value": "3148"
            },
            {
                "date": "2002",
                "value": "3214"
            },
            {
                "date": "2003",
                "value": "3236"
            },
            {
                "date": "2004",
                "value": "3290"
            },
            {
                "date": "2005",
                "value": "3323"
            },
            {
                "date": "2006",
                "value": "3401"
            },
            {
                "date": "2007",
                "value": "3458"
            },
            {
                "date": "2008",
                "value": "3428"
            },
            {
                "date": "2009",
                "value": "3394"
            },
            {
                "date": "2010",
                "value": "3341"
            },
            {
                "date": "2011",
                "value": "3348"
            },
            {
                "date": "2012",
                "value": "3396"
            },
            {
                "date": "2013",
                "value": "3380"
            }
        ],
        "India": [
            {
                "date": "1946",
                "value": "1700"
            },
            {
                "date": "1948",
                "value": "1570"
            },
            {
                "date": "1961",
                "value": "2010"
            },
            {
                "date": "1962",
                "value": "2052"
            },
            {
                "date": "1963",
                "value": "1973"
            },
            {
                "date": "1964",
                "value": "1995"
            },
            {
                "date": "1965",
                "value": "1931"
            },
            {
                "date": "1966",
                "value": "1939"
            },
            {
                "date": "1967",
                "value": "1991"
            },
            {
                "date": "1968",
                "value": "2010"
            },
            {
                "date": "1969",
                "value": "2036"
            },
            {
                "date": "1970",
                "value": "2111"
            },
            {
                "date": "1971",
                "value": "1990"
            },
            {
                "date": "1972",
                "value": "1985"
            },
            {
                "date": "1973",
                "value": "2046"
            },
            {
                "date": "1974",
                "value": "1938"
            },
            {
                "date": "1975",
                "value": "2060"
            },
            {
                "date": "1976",
                "value": "1923"
            },
            {
                "date": "1977",
                "value": "2106"
            },
            {
                "date": "1978",
                "value": "2148"
            },
            {
                "date": "1979",
                "value": "2025"
            },
            {
                "date": "1980",
                "value": "1994"
            },
            {
                "date": "1981",
                "value": "2056"
            },
            {
                "date": "1982",
                "value": "2029"
            },
            {
                "date": "1983",
                "value": "2208"
            },
            {
                "date": "1984",
                "value": "2215"
            },
            {
                "date": "1985",
                "value": "2158"
            },
            {
                "date": "1986",
                "value": "2160"
            },
            {
                "date": "1987",
                "value": "2173"
            },
            {
                "date": "1988",
                "value": "2276"
            },
            {
                "date": "1989",
                "value": "2367"
            },
            {
                "date": "1990",
                "value": "2205"
            },
            {
                "date": "1991",
                "value": "2297"
            },
            {
                "date": "1992",
                "value": "2333"
            },
            {
                "date": "1993",
                "value": "2269"
            },
            {
                "date": "1994",
                "value": "2292"
            },
            {
                "date": "1995",
                "value": "2324"
            },
            {
                "date": "1996",
                "value": "2344"
            },
            {
                "date": "1997",
                "value": "2369"
            },
            {
                "date": "1998",
                "value": "2361"
            },
            {
                "date": "1999",
                "value": "2398"
            },
            {
                "date": "2000",
                "value": "2380"
            },
            {
                "date": "2001",
                "value": "2333"
            },
            {
                "date": "2002",
                "value": "2285"
            },
            {
                "date": "2003",
                "value": "2282"
            },
            {
                "date": "2004",
                "value": "2256"
            },
            {
                "date": "2005",
                "value": "2270"
            },
            {
                "date": "2006",
                "value": "2334"
            },
            {
                "date": "2007",
                "value": "2400"
            },
            {
                "date": "2008",
                "value": "2427"
            },
            {
                "date": "2009",
                "value": "2415"
            },
            {
                "date": "2010",
                "value": "2442"
            },
            {
                "date": "2011",
                "value": "2455"
            },
            {
                "date": "2012",
                "value": "2435"
            },
            {
                "date": "2013",
                "value": "2459"
            }
        ],
        "Indonesia": [
            {
                "date": "1961",
                "value": "1824"
            },
            {
                "date": "1962",
                "value": "1828"
            },
            {
                "date": "1963",
                "value": "1815"
            },
            {
                "date": "1964",
                "value": "1861"
            },
            {
                "date": "1965",
                "value": "1850"
            },
            {
                "date": "1966",
                "value": "1834"
            },
            {
                "date": "1967",
                "value": "1840"
            },
            {
                "date": "1968",
                "value": "1860"
            },
            {
                "date": "1969",
                "value": "1894"
            },
            {
                "date": "1970",
                "value": "1929"
            },
            {
                "date": "1971",
                "value": "1964"
            },
            {
                "date": "1972",
                "value": "1994"
            },
            {
                "date": "1973",
                "value": "2077"
            },
            {
                "date": "1974",
                "value": "2094"
            },
            {
                "date": "1975",
                "value": "2080"
            },
            {
                "date": "1976",
                "value": "2054"
            },
            {
                "date": "1977",
                "value": "2101"
            },
            {
                "date": "1978",
                "value": "2139"
            },
            {
                "date": "1979",
                "value": "2198"
            },
            {
                "date": "1980",
                "value": "2236"
            },
            {
                "date": "1981",
                "value": "2315"
            },
            {
                "date": "1982",
                "value": "2317"
            },
            {
                "date": "1983",
                "value": "2378"
            },
            {
                "date": "1984",
                "value": "2403"
            },
            {
                "date": "1985",
                "value": "2419"
            },
            {
                "date": "1986",
                "value": "2446"
            },
            {
                "date": "1987",
                "value": "2493"
            },
            {
                "date": "1988",
                "value": "2588"
            },
            {
                "date": "1989",
                "value": "2604"
            },
            {
                "date": "1990",
                "value": "2338"
            },
            {
                "date": "1991",
                "value": "2356"
            },
            {
                "date": "1992",
                "value": "2416"
            },
            {
                "date": "1993",
                "value": "2431"
            },
            {
                "date": "1994",
                "value": "2471"
            },
            {
                "date": "1995",
                "value": "2552"
            },
            {
                "date": "1996",
                "value": "2548"
            },
            {
                "date": "1997",
                "value": "2498"
            },
            {
                "date": "1998",
                "value": "2486"
            },
            {
                "date": "1999",
                "value": "2467"
            },
            {
                "date": "2000",
                "value": "2436"
            },
            {
                "date": "2001",
                "value": "2424"
            },
            {
                "date": "2002",
                "value": "2451"
            },
            {
                "date": "2003",
                "value": "2468"
            },
            {
                "date": "2004",
                "value": "2471"
            },
            {
                "date": "2005",
                "value": "2468"
            },
            {
                "date": "2006",
                "value": "2483"
            },
            {
                "date": "2007",
                "value": "2522"
            },
            {
                "date": "2008",
                "value": "2544"
            },
            {
                "date": "2009",
                "value": "2603"
            },
            {
                "date": "2010",
                "value": "2651"
            },
            {
                "date": "2011",
                "value": "2712"
            },
            {
                "date": "2012",
                "value": "2770"
            },
            {
                "date": "2013",
                "value": "2777"
            }
        ],
        "Iran": [
            {
                "date": "1961",
                "value": "1749"
            },
            {
                "date": "1962",
                "value": "1747"
            },
            {
                "date": "1963",
                "value": "1792"
            },
            {
                "date": "1964",
                "value": "1864"
            },
            {
                "date": "1965",
                "value": "1877"
            },
            {
                "date": "1966",
                "value": "2025"
            },
            {
                "date": "1967",
                "value": "2044"
            },
            {
                "date": "1968",
                "value": "2173"
            },
            {
                "date": "1969",
                "value": "2046"
            },
            {
                "date": "1970",
                "value": "2104"
            },
            {
                "date": "1971",
                "value": "2038"
            },
            {
                "date": "1972",
                "value": "2175"
            },
            {
                "date": "1973",
                "value": "2328"
            },
            {
                "date": "1974",
                "value": "2404"
            },
            {
                "date": "1975",
                "value": "2431"
            },
            {
                "date": "1976",
                "value": "2455"
            },
            {
                "date": "1977",
                "value": "2482"
            },
            {
                "date": "1978",
                "value": "2512"
            },
            {
                "date": "1979",
                "value": "2580"
            },
            {
                "date": "1980",
                "value": "2656"
            },
            {
                "date": "1981",
                "value": "2718"
            },
            {
                "date": "1982",
                "value": "2702"
            },
            {
                "date": "1983",
                "value": "2770"
            },
            {
                "date": "1984",
                "value": "2738"
            },
            {
                "date": "1985",
                "value": "2712"
            },
            {
                "date": "1986",
                "value": "2715"
            },
            {
                "date": "1987",
                "value": "2786"
            },
            {
                "date": "1988",
                "value": "2713"
            },
            {
                "date": "1989",
                "value": "2855"
            },
            {
                "date": "1990",
                "value": "2883"
            },
            {
                "date": "1991",
                "value": "2941"
            },
            {
                "date": "1992",
                "value": "3025"
            },
            {
                "date": "1993",
                "value": "3112"
            },
            {
                "date": "1994",
                "value": "3067"
            },
            {
                "date": "1995",
                "value": "3047"
            },
            {
                "date": "1996",
                "value": "3052"
            },
            {
                "date": "1997",
                "value": "3091"
            },
            {
                "date": "1998",
                "value": "3100"
            },
            {
                "date": "1999",
                "value": "3086"
            },
            {
                "date": "2000",
                "value": "3050"
            },
            {
                "date": "2001",
                "value": "3036"
            },
            {
                "date": "2002",
                "value": "3026"
            },
            {
                "date": "2003",
                "value": "3036"
            },
            {
                "date": "2004",
                "value": "3088"
            },
            {
                "date": "2005",
                "value": "3074"
            },
            {
                "date": "2006",
                "value": "3000"
            },
            {
                "date": "2007",
                "value": "3028"
            },
            {
                "date": "2008",
                "value": "3012"
            },
            {
                "date": "2009",
                "value": "3058"
            },
            {
                "date": "2010",
                "value": "3094"
            },
            {
                "date": "2011",
                "value": "3051"
            },
            {
                "date": "2012",
                "value": "3064"
            },
            {
                "date": "2013",
                "value": "3094"
            }
        ],
        "Iraq": [
            {
                "date": "1961",
                "value": "1735"
            },
            {
                "date": "1962",
                "value": "1864"
            },
            {
                "date": "1963",
                "value": "1977"
            },
            {
                "date": "1964",
                "value": "2029"
            },
            {
                "date": "1965",
                "value": "2054"
            },
            {
                "date": "1966",
                "value": "2056"
            },
            {
                "date": "1967",
                "value": "2085"
            },
            {
                "date": "1968",
                "value": "2094"
            },
            {
                "date": "1969",
                "value": "2117"
            },
            {
                "date": "1970",
                "value": "2144"
            },
            {
                "date": "1971",
                "value": "2164"
            },
            {
                "date": "1972",
                "value": "2090"
            },
            {
                "date": "1973",
                "value": "2112"
            },
            {
                "date": "1974",
                "value": "2151"
            },
            {
                "date": "1975",
                "value": "2200"
            },
            {
                "date": "1976",
                "value": "2226"
            },
            {
                "date": "1977",
                "value": "2297"
            },
            {
                "date": "1978",
                "value": "2460"
            },
            {
                "date": "1979",
                "value": "2586"
            },
            {
                "date": "1980",
                "value": "2676"
            },
            {
                "date": "1981",
                "value": "2832"
            },
            {
                "date": "1982",
                "value": "2961"
            },
            {
                "date": "1983",
                "value": "3047"
            },
            {
                "date": "1984",
                "value": "3205"
            },
            {
                "date": "1985",
                "value": "3321"
            },
            {
                "date": "1986",
                "value": "3422"
            },
            {
                "date": "1987",
                "value": "3451"
            },
            {
                "date": "1988",
                "value": "3444"
            },
            {
                "date": "1989",
                "value": "3444"
            },
            {
                "date": "1990",
                "value": "3249"
            },
            {
                "date": "1991",
                "value": "2356"
            },
            {
                "date": "1992",
                "value": "2249"
            },
            {
                "date": "1993",
                "value": "2262"
            },
            {
                "date": "1994",
                "value": "2228"
            },
            {
                "date": "1995",
                "value": "2203"
            },
            {
                "date": "1996",
                "value": "2175"
            },
            {
                "date": "1997",
                "value": "2098"
            },
            {
                "date": "1998",
                "value": "2118"
            },
            {
                "date": "1999",
                "value": "2150"
            },
            {
                "date": "2000",
                "value": "2177"
            },
            {
                "date": "2001",
                "value": "2254"
            },
            {
                "date": "2002",
                "value": "2272"
            },
            {
                "date": "2003",
                "value": "2252"
            },
            {
                "date": "2004",
                "value": "2367"
            },
            {
                "date": "2005",
                "value": "2351"
            },
            {
                "date": "2006",
                "value": "2374"
            },
            {
                "date": "2007",
                "value": "2379"
            },
            {
                "date": "2008",
                "value": "2358"
            },
            {
                "date": "2009",
                "value": "2441"
            },
            {
                "date": "2010",
                "value": "2505"
            },
            {
                "date": "2011",
                "value": "2494"
            },
            {
                "date": "2012",
                "value": "2527"
            },
            {
                "date": "2013",
                "value": "2545"
            }
        ],
        "Ireland": [
            {
                "date": "1948",
                "value": "3276"
            },
            {
                "date": "1961",
                "value": "3364"
            },
            {
                "date": "1962",
                "value": "3369"
            },
            {
                "date": "1963",
                "value": "3390"
            },
            {
                "date": "1964",
                "value": "3394"
            },
            {
                "date": "1965",
                "value": "3398"
            },
            {
                "date": "1966",
                "value": "3390"
            },
            {
                "date": "1967",
                "value": "3419"
            },
            {
                "date": "1968",
                "value": "3414"
            },
            {
                "date": "1969",
                "value": "3425"
            },
            {
                "date": "1970",
                "value": "3435"
            },
            {
                "date": "1971",
                "value": "3478"
            },
            {
                "date": "1972",
                "value": "3441"
            },
            {
                "date": "1973",
                "value": "3483"
            },
            {
                "date": "1974",
                "value": "3520"
            },
            {
                "date": "1975",
                "value": "3466"
            },
            {
                "date": "1976",
                "value": "3424"
            },
            {
                "date": "1977",
                "value": "3508"
            },
            {
                "date": "1978",
                "value": "3587"
            },
            {
                "date": "1979",
                "value": "3548"
            },
            {
                "date": "1980",
                "value": "3575"
            },
            {
                "date": "1981",
                "value": "3541"
            },
            {
                "date": "1982",
                "value": "3608"
            },
            {
                "date": "1983",
                "value": "3545"
            },
            {
                "date": "1984",
                "value": "3539"
            },
            {
                "date": "1985",
                "value": "3577"
            },
            {
                "date": "1986",
                "value": "3614"
            },
            {
                "date": "1987",
                "value": "3587"
            },
            {
                "date": "1988",
                "value": "3587"
            },
            {
                "date": "1989",
                "value": "3587"
            },
            {
                "date": "1990",
                "value": "3624"
            },
            {
                "date": "1991",
                "value": "3577"
            },
            {
                "date": "1992",
                "value": "3621"
            },
            {
                "date": "1993",
                "value": "3530"
            },
            {
                "date": "1994",
                "value": "3575"
            },
            {
                "date": "1995",
                "value": "3510"
            },
            {
                "date": "1996",
                "value": "3607"
            },
            {
                "date": "1997",
                "value": "3682"
            },
            {
                "date": "1998",
                "value": "3678"
            },
            {
                "date": "1999",
                "value": "3704"
            },
            {
                "date": "2000",
                "value": "3727"
            },
            {
                "date": "2001",
                "value": "3722"
            },
            {
                "date": "2002",
                "value": "3583"
            },
            {
                "date": "2003",
                "value": "3592"
            },
            {
                "date": "2004",
                "value": "3573"
            },
            {
                "date": "2005",
                "value": "3485"
            },
            {
                "date": "2006",
                "value": "3503"
            },
            {
                "date": "2007",
                "value": "3532"
            },
            {
                "date": "2008",
                "value": "3582"
            },
            {
                "date": "2009",
                "value": "3571"
            },
            {
                "date": "2010",
                "value": "3591"
            },
            {
                "date": "2011",
                "value": "3600"
            },
            {
                "date": "2012",
                "value": "3598"
            },
            {
                "date": "2013",
                "value": "3600"
            }
        ],
        "Israel": [
            {
                "date": "1961",
                "value": "2805"
            },
            {
                "date": "1962",
                "value": "2824"
            },
            {
                "date": "1963",
                "value": "2751"
            },
            {
                "date": "1964",
                "value": "2835"
            },
            {
                "date": "1965",
                "value": "2813"
            },
            {
                "date": "1966",
                "value": "2915"
            },
            {
                "date": "1967",
                "value": "3004"
            },
            {
                "date": "1968",
                "value": "3088"
            },
            {
                "date": "1969",
                "value": "3136"
            },
            {
                "date": "1970",
                "value": "3130"
            },
            {
                "date": "1971",
                "value": "3282"
            },
            {
                "date": "1972",
                "value": "3247"
            },
            {
                "date": "1973",
                "value": "3314"
            },
            {
                "date": "1974",
                "value": "3218"
            },
            {
                "date": "1975",
                "value": "3194"
            },
            {
                "date": "1976",
                "value": "3225"
            },
            {
                "date": "1977",
                "value": "3217"
            },
            {
                "date": "1978",
                "value": "3137"
            },
            {
                "date": "1979",
                "value": "3123"
            },
            {
                "date": "1980",
                "value": "3099"
            },
            {
                "date": "1981",
                "value": "3147"
            },
            {
                "date": "1982",
                "value": "3291"
            },
            {
                "date": "1983",
                "value": "3279"
            },
            {
                "date": "1984",
                "value": "3263"
            },
            {
                "date": "1985",
                "value": "3322"
            },
            {
                "date": "1986",
                "value": "3360"
            },
            {
                "date": "1987",
                "value": "3443"
            },
            {
                "date": "1988",
                "value": "3359"
            },
            {
                "date": "1989",
                "value": "3341"
            },
            {
                "date": "1990",
                "value": "3401"
            },
            {
                "date": "1991",
                "value": "3423"
            },
            {
                "date": "1992",
                "value": "3447"
            },
            {
                "date": "1993",
                "value": "3395"
            },
            {
                "date": "1994",
                "value": "3350"
            },
            {
                "date": "1995",
                "value": "3465"
            },
            {
                "date": "1996",
                "value": "3503"
            },
            {
                "date": "1997",
                "value": "3508"
            },
            {
                "date": "1998",
                "value": "3499"
            },
            {
                "date": "1999",
                "value": "3482"
            },
            {
                "date": "2000",
                "value": "3553"
            },
            {
                "date": "2001",
                "value": "3603"
            },
            {
                "date": "2002",
                "value": "3698"
            },
            {
                "date": "2003",
                "value": "3576"
            },
            {
                "date": "2004",
                "value": "3621"
            },
            {
                "date": "2005",
                "value": "3633"
            },
            {
                "date": "2006",
                "value": "3624"
            },
            {
                "date": "2007",
                "value": "3525"
            },
            {
                "date": "2008",
                "value": "3523"
            },
            {
                "date": "2009",
                "value": "3514"
            },
            {
                "date": "2010",
                "value": "3535"
            },
            {
                "date": "2011",
                "value": "3546"
            },
            {
                "date": "2012",
                "value": "3603"
            },
            {
                "date": "2013",
                "value": "3610"
            }
        ],
        "Italy": [
            {
                "date": "1880",
                "value": "2197"
            },
            {
                "date": "1910",
                "value": "2617"
            },
            {
                "date": "1947",
                "value": "2249"
            },
            {
                "date": "1961",
                "value": "2958"
            },
            {
                "date": "1962",
                "value": "3021"
            },
            {
                "date": "1963",
                "value": "3092"
            },
            {
                "date": "1964",
                "value": "3086"
            },
            {
                "date": "1965",
                "value": "3131"
            },
            {
                "date": "1966",
                "value": "3157"
            },
            {
                "date": "1967",
                "value": "3234"
            },
            {
                "date": "1968",
                "value": "3298"
            },
            {
                "date": "1969",
                "value": "3340"
            },
            {
                "date": "1970",
                "value": "3463"
            },
            {
                "date": "1971",
                "value": "3445"
            },
            {
                "date": "1972",
                "value": "3487"
            },
            {
                "date": "1973",
                "value": "3572"
            },
            {
                "date": "1974",
                "value": "3482"
            },
            {
                "date": "1975",
                "value": "3393"
            },
            {
                "date": "1976",
                "value": "3388"
            },
            {
                "date": "1977",
                "value": "3326"
            },
            {
                "date": "1978",
                "value": "3504"
            },
            {
                "date": "1979",
                "value": "3610"
            },
            {
                "date": "1980",
                "value": "3603"
            },
            {
                "date": "1981",
                "value": "3512"
            },
            {
                "date": "1982",
                "value": "3393"
            },
            {
                "date": "1983",
                "value": "3359"
            },
            {
                "date": "1984",
                "value": "3407"
            },
            {
                "date": "1985",
                "value": "3414"
            },
            {
                "date": "1986",
                "value": "3495"
            },
            {
                "date": "1987",
                "value": "3524"
            },
            {
                "date": "1988",
                "value": "3537"
            },
            {
                "date": "1989",
                "value": "3555"
            },
            {
                "date": "1990",
                "value": "3587"
            },
            {
                "date": "1991",
                "value": "3648"
            },
            {
                "date": "1992",
                "value": "3543"
            },
            {
                "date": "1993",
                "value": "3473"
            },
            {
                "date": "1994",
                "value": "3489"
            },
            {
                "date": "1995",
                "value": "3508"
            },
            {
                "date": "1996",
                "value": "3567"
            },
            {
                "date": "1997",
                "value": "3582"
            },
            {
                "date": "1998",
                "value": "3674"
            },
            {
                "date": "1999",
                "value": "3695"
            },
            {
                "date": "2000",
                "value": "3668"
            },
            {
                "date": "2001",
                "value": "3671"
            },
            {
                "date": "2002",
                "value": "3661"
            },
            {
                "date": "2003",
                "value": "3621"
            },
            {
                "date": "2004",
                "value": "3626"
            },
            {
                "date": "2005",
                "value": "3567"
            },
            {
                "date": "2006",
                "value": "3625"
            },
            {
                "date": "2007",
                "value": "3618"
            },
            {
                "date": "2008",
                "value": "3595"
            },
            {
                "date": "2009",
                "value": "3599"
            },
            {
                "date": "2010",
                "value": "3583"
            },
            {
                "date": "2011",
                "value": "3575"
            },
            {
                "date": "2012",
                "value": "3575"
            },
            {
                "date": "2013",
                "value": "3579"
            }
        ],
        "Jamaica": [
            {
                "date": "1961",
                "value": "1915"
            },
            {
                "date": "1962",
                "value": "2020"
            },
            {
                "date": "1963",
                "value": "2029"
            },
            {
                "date": "1964",
                "value": "2170"
            },
            {
                "date": "1965",
                "value": "2175"
            },
            {
                "date": "1966",
                "value": "2202"
            },
            {
                "date": "1967",
                "value": "2331"
            },
            {
                "date": "1968",
                "value": "2342"
            },
            {
                "date": "1969",
                "value": "2345"
            },
            {
                "date": "1970",
                "value": "2493"
            },
            {
                "date": "1971",
                "value": "2562"
            },
            {
                "date": "1972",
                "value": "2657"
            },
            {
                "date": "1973",
                "value": "2536"
            },
            {
                "date": "1974",
                "value": "2621"
            },
            {
                "date": "1975",
                "value": "2647"
            },
            {
                "date": "1976",
                "value": "2685"
            },
            {
                "date": "1977",
                "value": "2639"
            },
            {
                "date": "1978",
                "value": "2707"
            },
            {
                "date": "1979",
                "value": "2582"
            },
            {
                "date": "1980",
                "value": "2652"
            },
            {
                "date": "1981",
                "value": "2584"
            },
            {
                "date": "1982",
                "value": "2516"
            },
            {
                "date": "1983",
                "value": "2527"
            },
            {
                "date": "1984",
                "value": "2606"
            },
            {
                "date": "1985",
                "value": "2532"
            },
            {
                "date": "1986",
                "value": "2565"
            },
            {
                "date": "1987",
                "value": "2619"
            },
            {
                "date": "1988",
                "value": "2542"
            },
            {
                "date": "1989",
                "value": "2601"
            },
            {
                "date": "1990",
                "value": "2641"
            },
            {
                "date": "1991",
                "value": "2578"
            },
            {
                "date": "1992",
                "value": "2626"
            },
            {
                "date": "1993",
                "value": "2706"
            },
            {
                "date": "1994",
                "value": "2717"
            },
            {
                "date": "1995",
                "value": "2684"
            },
            {
                "date": "1996",
                "value": "2717"
            },
            {
                "date": "1997",
                "value": "2697"
            },
            {
                "date": "1998",
                "value": "2710"
            },
            {
                "date": "1999",
                "value": "2725"
            },
            {
                "date": "2000",
                "value": "2729"
            },
            {
                "date": "2001",
                "value": "2798"
            },
            {
                "date": "2002",
                "value": "2795"
            },
            {
                "date": "2003",
                "value": "2810"
            },
            {
                "date": "2004",
                "value": "2792"
            },
            {
                "date": "2005",
                "value": "2795"
            },
            {
                "date": "2006",
                "value": "2792"
            },
            {
                "date": "2007",
                "value": "2791"
            },
            {
                "date": "2008",
                "value": "2747"
            },
            {
                "date": "2009",
                "value": "2749"
            },
            {
                "date": "2010",
                "value": "2762"
            },
            {
                "date": "2011",
                "value": "2768"
            },
            {
                "date": "2012",
                "value": "2754"
            },
            {
                "date": "2013",
                "value": "2746"
            }
        ],
        "Japan": [
            {
                "date": "1948",
                "value": "1795"
            },
            {
                "date": "1961",
                "value": "2525"
            },
            {
                "date": "1962",
                "value": "2572"
            },
            {
                "date": "1963",
                "value": "2608"
            },
            {
                "date": "1964",
                "value": "2631"
            },
            {
                "date": "1965",
                "value": "2620"
            },
            {
                "date": "1966",
                "value": "2641"
            },
            {
                "date": "1967",
                "value": "2689"
            },
            {
                "date": "1968",
                "value": "2699"
            },
            {
                "date": "1969",
                "value": "2698"
            },
            {
                "date": "1970",
                "value": "2737"
            },
            {
                "date": "1971",
                "value": "2728"
            },
            {
                "date": "1972",
                "value": "2781"
            },
            {
                "date": "1973",
                "value": "2772"
            },
            {
                "date": "1974",
                "value": "2742"
            },
            {
                "date": "1975",
                "value": "2716"
            },
            {
                "date": "1976",
                "value": "2751"
            },
            {
                "date": "1977",
                "value": "2774"
            },
            {
                "date": "1978",
                "value": "2790"
            },
            {
                "date": "1979",
                "value": "2807"
            },
            {
                "date": "1980",
                "value": "2798"
            },
            {
                "date": "1981",
                "value": "2750"
            },
            {
                "date": "1982",
                "value": "2813"
            },
            {
                "date": "1983",
                "value": "2829"
            },
            {
                "date": "1984",
                "value": "2827"
            },
            {
                "date": "1985",
                "value": "2861"
            },
            {
                "date": "1986",
                "value": "2874"
            },
            {
                "date": "1987",
                "value": "2895"
            },
            {
                "date": "1988",
                "value": "2941"
            },
            {
                "date": "1989",
                "value": "2969"
            },
            {
                "date": "1990",
                "value": "2948"
            },
            {
                "date": "1991",
                "value": "2934"
            },
            {
                "date": "1992",
                "value": "2943"
            },
            {
                "date": "1993",
                "value": "2926"
            },
            {
                "date": "1994",
                "value": "2932"
            },
            {
                "date": "1995",
                "value": "2920"
            },
            {
                "date": "1996",
                "value": "2963"
            },
            {
                "date": "1997",
                "value": "2938"
            },
            {
                "date": "1998",
                "value": "2895"
            },
            {
                "date": "1999",
                "value": "2897"
            },
            {
                "date": "2000",
                "value": "2899"
            },
            {
                "date": "2001",
                "value": "2889"
            },
            {
                "date": "2002",
                "value": "2853"
            },
            {
                "date": "2003",
                "value": "2842"
            },
            {
                "date": "2004",
                "value": "2842"
            },
            {
                "date": "2005",
                "value": "2829"
            },
            {
                "date": "2006",
                "value": "2778"
            },
            {
                "date": "2007",
                "value": "2817"
            },
            {
                "date": "2008",
                "value": "2734"
            },
            {
                "date": "2009",
                "value": "2675"
            },
            {
                "date": "2010",
                "value": "2685"
            },
            {
                "date": "2011",
                "value": "2712"
            },
            {
                "date": "2012",
                "value": "2740"
            },
            {
                "date": "2013",
                "value": "2726"
            }
        ],
        "Jordan": [
            {
                "date": "1961",
                "value": "2106"
            },
            {
                "date": "1962",
                "value": "2144"
            },
            {
                "date": "1963",
                "value": "2169"
            },
            {
                "date": "1964",
                "value": "2088"
            },
            {
                "date": "1965",
                "value": "2158"
            },
            {
                "date": "1966",
                "value": "2172"
            },
            {
                "date": "1967",
                "value": "2046"
            },
            {
                "date": "1968",
                "value": "2179"
            },
            {
                "date": "1969",
                "value": "2210"
            },
            {
                "date": "1970",
                "value": "2163"
            },
            {
                "date": "1971",
                "value": "2194"
            },
            {
                "date": "1972",
                "value": "2192"
            },
            {
                "date": "1973",
                "value": "2145"
            },
            {
                "date": "1974",
                "value": "2170"
            },
            {
                "date": "1975",
                "value": "2138"
            },
            {
                "date": "1976",
                "value": "2274"
            },
            {
                "date": "1977",
                "value": "2346"
            },
            {
                "date": "1978",
                "value": "2438"
            },
            {
                "date": "1979",
                "value": "2495"
            },
            {
                "date": "1980",
                "value": "2542"
            },
            {
                "date": "1981",
                "value": "2590"
            },
            {
                "date": "1982",
                "value": "2591"
            },
            {
                "date": "1983",
                "value": "2571"
            },
            {
                "date": "1984",
                "value": "2603"
            },
            {
                "date": "1985",
                "value": "2651"
            },
            {
                "date": "1986",
                "value": "2611"
            },
            {
                "date": "1987",
                "value": "2658"
            },
            {
                "date": "1988",
                "value": "2673"
            },
            {
                "date": "1989",
                "value": "2640"
            },
            {
                "date": "1990",
                "value": "2771"
            },
            {
                "date": "1991",
                "value": "2822"
            },
            {
                "date": "1992",
                "value": "2739"
            },
            {
                "date": "1993",
                "value": "2727"
            },
            {
                "date": "1994",
                "value": "2630"
            },
            {
                "date": "1995",
                "value": "2687"
            },
            {
                "date": "1996",
                "value": "2659"
            },
            {
                "date": "1997",
                "value": "2748"
            },
            {
                "date": "1998",
                "value": "2727"
            },
            {
                "date": "1999",
                "value": "2657"
            },
            {
                "date": "2000",
                "value": "2727"
            },
            {
                "date": "2001",
                "value": "2839"
            },
            {
                "date": "2002",
                "value": "2938"
            },
            {
                "date": "2003",
                "value": "3076"
            },
            {
                "date": "2004",
                "value": "3122"
            },
            {
                "date": "2005",
                "value": "3119"
            },
            {
                "date": "2006",
                "value": "3153"
            },
            {
                "date": "2007",
                "value": "3123"
            },
            {
                "date": "2008",
                "value": "3072"
            },
            {
                "date": "2009",
                "value": "3099"
            },
            {
                "date": "2010",
                "value": "3104"
            },
            {
                "date": "2011",
                "value": "3139"
            },
            {
                "date": "2012",
                "value": "3141"
            },
            {
                "date": "2013",
                "value": "3100"
            }
        ],
        "Kazakhstan": [
            {
                "date": "1961",
                "value": "3095"
            },
            {
                "date": "1962",
                "value": "3157"
            },
            {
                "date": "1963",
                "value": "3204"
            },
            {
                "date": "1964",
                "value": "3206"
            },
            {
                "date": "1965",
                "value": "3214"
            },
            {
                "date": "1966",
                "value": "3209"
            },
            {
                "date": "1967",
                "value": "3240"
            },
            {
                "date": "1968",
                "value": "3300"
            },
            {
                "date": "1969",
                "value": "3300"
            },
            {
                "date": "1970",
                "value": "3355"
            },
            {
                "date": "1971",
                "value": "3331"
            },
            {
                "date": "1972",
                "value": "3284"
            },
            {
                "date": "1973",
                "value": "3325"
            },
            {
                "date": "1974",
                "value": "3357"
            },
            {
                "date": "1975",
                "value": "3341"
            },
            {
                "date": "1976",
                "value": "3404"
            },
            {
                "date": "1977",
                "value": "3366"
            },
            {
                "date": "1978",
                "value": "3387"
            },
            {
                "date": "1979",
                "value": "3384"
            },
            {
                "date": "1980",
                "value": "3378"
            },
            {
                "date": "1981",
                "value": "3355"
            },
            {
                "date": "1982",
                "value": "3377"
            },
            {
                "date": "1983",
                "value": "3386"
            },
            {
                "date": "1984",
                "value": "3388"
            },
            {
                "date": "1985",
                "value": "3380"
            },
            {
                "date": "1986",
                "value": "3364"
            },
            {
                "date": "1987",
                "value": "3404"
            },
            {
                "date": "1988",
                "value": "3395"
            },
            {
                "date": "1989",
                "value": "3348"
            },
            {
                "date": "1990",
                "value": "3372"
            },
            {
                "date": "1991",
                "value": "3032"
            },
            {
                "date": "1992",
                "value": "2945"
            },
            {
                "date": "1993",
                "value": "2946"
            },
            {
                "date": "1994",
                "value": "2945"
            },
            {
                "date": "1995",
                "value": "2871"
            },
            {
                "date": "1996",
                "value": "2863"
            },
            {
                "date": "1997",
                "value": "2855"
            },
            {
                "date": "1998",
                "value": "2726"
            },
            {
                "date": "1999",
                "value": "2743"
            },
            {
                "date": "2000",
                "value": "2807"
            },
            {
                "date": "2001",
                "value": "2890"
            },
            {
                "date": "2002",
                "value": "2935"
            },
            {
                "date": "2003",
                "value": "2973"
            },
            {
                "date": "2004",
                "value": "2979"
            },
            {
                "date": "2005",
                "value": "3033"
            },
            {
                "date": "2006",
                "value": "3073"
            },
            {
                "date": "2007",
                "value": "3161"
            },
            {
                "date": "2008",
                "value": "3186"
            },
            {
                "date": "2009",
                "value": "3153"
            },
            {
                "date": "2010",
                "value": "3143"
            },
            {
                "date": "2011",
                "value": "3207"
            },
            {
                "date": "2012",
                "value": "3187"
            },
            {
                "date": "2013",
                "value": "3264"
            }
        ],
        "Kenya": [
            {
                "date": "1961",
                "value": "2249"
            },
            {
                "date": "1962",
                "value": "2252"
            },
            {
                "date": "1963",
                "value": "2144"
            },
            {
                "date": "1964",
                "value": "2192"
            },
            {
                "date": "1965",
                "value": "2307"
            },
            {
                "date": "1966",
                "value": "2296"
            },
            {
                "date": "1967",
                "value": "2283"
            },
            {
                "date": "1968",
                "value": "2307"
            },
            {
                "date": "1969",
                "value": "2360"
            },
            {
                "date": "1970",
                "value": "2300"
            },
            {
                "date": "1971",
                "value": "2302"
            },
            {
                "date": "1972",
                "value": "2350"
            },
            {
                "date": "1973",
                "value": "2304"
            },
            {
                "date": "1974",
                "value": "2316"
            },
            {
                "date": "1975",
                "value": "2312"
            },
            {
                "date": "1976",
                "value": "2344"
            },
            {
                "date": "1977",
                "value": "2358"
            },
            {
                "date": "1978",
                "value": "2364"
            },
            {
                "date": "1979",
                "value": "2315"
            },
            {
                "date": "1980",
                "value": "2293"
            },
            {
                "date": "1981",
                "value": "2268"
            },
            {
                "date": "1982",
                "value": "2259"
            },
            {
                "date": "1983",
                "value": "2208"
            },
            {
                "date": "1984",
                "value": "2039"
            },
            {
                "date": "1985",
                "value": "2184"
            },
            {
                "date": "1986",
                "value": "2226"
            },
            {
                "date": "1987",
                "value": "2138"
            },
            {
                "date": "1988",
                "value": "2072"
            },
            {
                "date": "1989",
                "value": "2109"
            },
            {
                "date": "1990",
                "value": "2043"
            },
            {
                "date": "1991",
                "value": "2025"
            },
            {
                "date": "1992",
                "value": "1927"
            },
            {
                "date": "1993",
                "value": "1886"
            },
            {
                "date": "1994",
                "value": "2057"
            },
            {
                "date": "1995",
                "value": "2055"
            },
            {
                "date": "1996",
                "value": "2051"
            },
            {
                "date": "1997",
                "value": "2017"
            },
            {
                "date": "1998",
                "value": "2049"
            },
            {
                "date": "1999",
                "value": "2077"
            },
            {
                "date": "2000",
                "value": "2049"
            },
            {
                "date": "2001",
                "value": "2066"
            },
            {
                "date": "2002",
                "value": "2023"
            },
            {
                "date": "2003",
                "value": "2004"
            },
            {
                "date": "2004",
                "value": "2022"
            },
            {
                "date": "2005",
                "value": "2161"
            },
            {
                "date": "2006",
                "value": "2161"
            },
            {
                "date": "2007",
                "value": "2110"
            },
            {
                "date": "2008",
                "value": "2106"
            },
            {
                "date": "2009",
                "value": "2165"
            },
            {
                "date": "2010",
                "value": "2160"
            },
            {
                "date": "2011",
                "value": "2170"
            },
            {
                "date": "2012",
                "value": "2192"
            },
            {
                "date": "2013",
                "value": "2206"
            }
        ],
        "Kiribati": [
            {
                "date": "1961",
                "value": "2424"
            },
            {
                "date": "1962",
                "value": "2509"
            },
            {
                "date": "1963",
                "value": "2519"
            },
            {
                "date": "1964",
                "value": "2549"
            },
            {
                "date": "1965",
                "value": "2537"
            },
            {
                "date": "1966",
                "value": "2603"
            },
            {
                "date": "1967",
                "value": "2691"
            },
            {
                "date": "1968",
                "value": "2626"
            },
            {
                "date": "1969",
                "value": "2613"
            },
            {
                "date": "1970",
                "value": "2689"
            },
            {
                "date": "1971",
                "value": "2743"
            },
            {
                "date": "1972",
                "value": "2785"
            },
            {
                "date": "1973",
                "value": "2868"
            },
            {
                "date": "1974",
                "value": "2890"
            },
            {
                "date": "1975",
                "value": "2914"
            },
            {
                "date": "1976",
                "value": "2860"
            },
            {
                "date": "1977",
                "value": "2777"
            },
            {
                "date": "1978",
                "value": "2854"
            },
            {
                "date": "1979",
                "value": "2943"
            },
            {
                "date": "1980",
                "value": "2894"
            },
            {
                "date": "1981",
                "value": "2806"
            },
            {
                "date": "1982",
                "value": "2814"
            },
            {
                "date": "1983",
                "value": "2695"
            },
            {
                "date": "1984",
                "value": "2684"
            },
            {
                "date": "1985",
                "value": "2680"
            },
            {
                "date": "1986",
                "value": "2607"
            },
            {
                "date": "1987",
                "value": "2593"
            },
            {
                "date": "1988",
                "value": "2584"
            },
            {
                "date": "1989",
                "value": "2541"
            },
            {
                "date": "1990",
                "value": "2622"
            },
            {
                "date": "1991",
                "value": "2716"
            },
            {
                "date": "1992",
                "value": "2725"
            },
            {
                "date": "1993",
                "value": "2773"
            },
            {
                "date": "1994",
                "value": "2671"
            },
            {
                "date": "1995",
                "value": "2804"
            },
            {
                "date": "1996",
                "value": "2765"
            },
            {
                "date": "1997",
                "value": "2768"
            },
            {
                "date": "1998",
                "value": "2837"
            },
            {
                "date": "1999",
                "value": "2859"
            },
            {
                "date": "2000",
                "value": "2842"
            },
            {
                "date": "2001",
                "value": "2884"
            },
            {
                "date": "2002",
                "value": "2855"
            },
            {
                "date": "2003",
                "value": "2872"
            },
            {
                "date": "2004",
                "value": "2840"
            },
            {
                "date": "2005",
                "value": "2935"
            },
            {
                "date": "2006",
                "value": "2903"
            },
            {
                "date": "2007",
                "value": "2894"
            },
            {
                "date": "2008",
                "value": "2881"
            },
            {
                "date": "2009",
                "value": "2941"
            },
            {
                "date": "2010",
                "value": "2960"
            },
            {
                "date": "2011",
                "value": "3027"
            },
            {
                "date": "2012",
                "value": "3055"
            },
            {
                "date": "2013",
                "value": "3040"
            }
        ],
        "Kuwait": [
            {
                "date": "1961",
                "value": "2507"
            },
            {
                "date": "1962",
                "value": "2554"
            },
            {
                "date": "1963",
                "value": "2440"
            },
            {
                "date": "1964",
                "value": "2559"
            },
            {
                "date": "1965",
                "value": "2556"
            },
            {
                "date": "1966",
                "value": "2637"
            },
            {
                "date": "1967",
                "value": "2607"
            },
            {
                "date": "1968",
                "value": "2625"
            },
            {
                "date": "1969",
                "value": "2565"
            },
            {
                "date": "1970",
                "value": "2567"
            },
            {
                "date": "1971",
                "value": "2502"
            },
            {
                "date": "1972",
                "value": "2555"
            },
            {
                "date": "1973",
                "value": "2500"
            },
            {
                "date": "1974",
                "value": "2496"
            },
            {
                "date": "1975",
                "value": "2538"
            },
            {
                "date": "1976",
                "value": "2663"
            },
            {
                "date": "1977",
                "value": "2735"
            },
            {
                "date": "1978",
                "value": "2815"
            },
            {
                "date": "1979",
                "value": "2912"
            },
            {
                "date": "1980",
                "value": "2943"
            },
            {
                "date": "1981",
                "value": "2926"
            },
            {
                "date": "1982",
                "value": "3021"
            },
            {
                "date": "1983",
                "value": "3014"
            },
            {
                "date": "1984",
                "value": "3010"
            },
            {
                "date": "1985",
                "value": "2922"
            },
            {
                "date": "1986",
                "value": "2965"
            },
            {
                "date": "1987",
                "value": "3007"
            },
            {
                "date": "1988",
                "value": "3031"
            },
            {
                "date": "1989",
                "value": "3073"
            },
            {
                "date": "1990",
                "value": "2312"
            },
            {
                "date": "1991",
                "value": "1900"
            },
            {
                "date": "1992",
                "value": "2219"
            },
            {
                "date": "1993",
                "value": "2488"
            },
            {
                "date": "1994",
                "value": "2927"
            },
            {
                "date": "1995",
                "value": "3212"
            },
            {
                "date": "1996",
                "value": "3266"
            },
            {
                "date": "1997",
                "value": "3338"
            },
            {
                "date": "1998",
                "value": "3357"
            },
            {
                "date": "1999",
                "value": "3396"
            },
            {
                "date": "2000",
                "value": "3435"
            },
            {
                "date": "2001",
                "value": "3482"
            },
            {
                "date": "2002",
                "value": "3445"
            },
            {
                "date": "2003",
                "value": "3501"
            },
            {
                "date": "2004",
                "value": "3507"
            },
            {
                "date": "2005",
                "value": "3576"
            },
            {
                "date": "2006",
                "value": "3587"
            },
            {
                "date": "2007",
                "value": "3571"
            },
            {
                "date": "2008",
                "value": "3512"
            },
            {
                "date": "2009",
                "value": "3472"
            },
            {
                "date": "2010",
                "value": "3464"
            },
            {
                "date": "2011",
                "value": "3468"
            },
            {
                "date": "2012",
                "value": "3440"
            },
            {
                "date": "2013",
                "value": "3501"
            }
        ],
        "Kyrgyzstan": [
            {
                "date": "1961",
                "value": "3095"
            },
            {
                "date": "1962",
                "value": "3157"
            },
            {
                "date": "1963",
                "value": "3204"
            },
            {
                "date": "1964",
                "value": "3206"
            },
            {
                "date": "1965",
                "value": "3214"
            },
            {
                "date": "1966",
                "value": "3209"
            },
            {
                "date": "1967",
                "value": "3240"
            },
            {
                "date": "1968",
                "value": "3300"
            },
            {
                "date": "1969",
                "value": "3300"
            },
            {
                "date": "1970",
                "value": "3355"
            },
            {
                "date": "1971",
                "value": "3331"
            },
            {
                "date": "1972",
                "value": "3284"
            },
            {
                "date": "1973",
                "value": "3325"
            },
            {
                "date": "1974",
                "value": "3357"
            },
            {
                "date": "1975",
                "value": "3341"
            },
            {
                "date": "1976",
                "value": "3404"
            },
            {
                "date": "1977",
                "value": "3366"
            },
            {
                "date": "1978",
                "value": "3387"
            },
            {
                "date": "1979",
                "value": "3384"
            },
            {
                "date": "1980",
                "value": "3378"
            },
            {
                "date": "1981",
                "value": "3355"
            },
            {
                "date": "1982",
                "value": "3377"
            },
            {
                "date": "1983",
                "value": "3386"
            },
            {
                "date": "1984",
                "value": "3388"
            },
            {
                "date": "1985",
                "value": "3380"
            },
            {
                "date": "1986",
                "value": "3364"
            },
            {
                "date": "1987",
                "value": "3404"
            },
            {
                "date": "1988",
                "value": "3395"
            },
            {
                "date": "1989",
                "value": "3348"
            },
            {
                "date": "1990",
                "value": "3372"
            },
            {
                "date": "1991",
                "value": "3032"
            },
            {
                "date": "1992",
                "value": "2671"
            },
            {
                "date": "1993",
                "value": "2408"
            },
            {
                "date": "1994",
                "value": "2417"
            },
            {
                "date": "1995",
                "value": "2384"
            },
            {
                "date": "1996",
                "value": "2480"
            },
            {
                "date": "1997",
                "value": "2640"
            },
            {
                "date": "1998",
                "value": "2497"
            },
            {
                "date": "1999",
                "value": "2522"
            },
            {
                "date": "2000",
                "value": "2396"
            },
            {
                "date": "2001",
                "value": "2457"
            },
            {
                "date": "2002",
                "value": "2489"
            },
            {
                "date": "2003",
                "value": "2624"
            },
            {
                "date": "2004",
                "value": "2739"
            },
            {
                "date": "2005",
                "value": "2753"
            },
            {
                "date": "2006",
                "value": "2660"
            },
            {
                "date": "2007",
                "value": "2682"
            },
            {
                "date": "2008",
                "value": "2679"
            },
            {
                "date": "2009",
                "value": "2737"
            },
            {
                "date": "2010",
                "value": "2790"
            },
            {
                "date": "2011",
                "value": "2771"
            },
            {
                "date": "2012",
                "value": "2776"
            },
            {
                "date": "2013",
                "value": "2817"
            }
        ],
        "Laos": [
            {
                "date": "1961",
                "value": "1953"
            },
            {
                "date": "1962",
                "value": "1924"
            },
            {
                "date": "1963",
                "value": "1946"
            },
            {
                "date": "1964",
                "value": "1994"
            },
            {
                "date": "1965",
                "value": "2015"
            },
            {
                "date": "1966",
                "value": "2036"
            },
            {
                "date": "1967",
                "value": "2032"
            },
            {
                "date": "1968",
                "value": "2038"
            },
            {
                "date": "1969",
                "value": "1985"
            },
            {
                "date": "1970",
                "value": "2019"
            },
            {
                "date": "1971",
                "value": "2018"
            },
            {
                "date": "1972",
                "value": "2004"
            },
            {
                "date": "1973",
                "value": "1991"
            },
            {
                "date": "1974",
                "value": "1953"
            },
            {
                "date": "1975",
                "value": "1933"
            },
            {
                "date": "1976",
                "value": "1947"
            },
            {
                "date": "1977",
                "value": "2029"
            },
            {
                "date": "1978",
                "value": "1964"
            },
            {
                "date": "1979",
                "value": "1937"
            },
            {
                "date": "1980",
                "value": "1954"
            },
            {
                "date": "1981",
                "value": "1952"
            },
            {
                "date": "1982",
                "value": "1966"
            },
            {
                "date": "1983",
                "value": "1933"
            },
            {
                "date": "1984",
                "value": "1905"
            },
            {
                "date": "1985",
                "value": "1909"
            },
            {
                "date": "1986",
                "value": "1933"
            },
            {
                "date": "1987",
                "value": "1961"
            },
            {
                "date": "1988",
                "value": "1903"
            },
            {
                "date": "1989",
                "value": "1935"
            },
            {
                "date": "1990",
                "value": "2015"
            },
            {
                "date": "1991",
                "value": "1990"
            },
            {
                "date": "1992",
                "value": "1959"
            },
            {
                "date": "1993",
                "value": "1957"
            },
            {
                "date": "1994",
                "value": "1984"
            },
            {
                "date": "1995",
                "value": "1976"
            },
            {
                "date": "1996",
                "value": "2029"
            },
            {
                "date": "1997",
                "value": "2036"
            },
            {
                "date": "1998",
                "value": "2050"
            },
            {
                "date": "1999",
                "value": "2039"
            },
            {
                "date": "2000",
                "value": "2116"
            },
            {
                "date": "2001",
                "value": "2092"
            },
            {
                "date": "2002",
                "value": "2137"
            },
            {
                "date": "2003",
                "value": "2180"
            },
            {
                "date": "2004",
                "value": "2209"
            },
            {
                "date": "2005",
                "value": "2269"
            },
            {
                "date": "2006",
                "value": "2243"
            },
            {
                "date": "2007",
                "value": "2278"
            },
            {
                "date": "2008",
                "value": "2246"
            },
            {
                "date": "2009",
                "value": "2312"
            },
            {
                "date": "2010",
                "value": "2340"
            },
            {
                "date": "2011",
                "value": "2402"
            },
            {
                "date": "2012",
                "value": "2379"
            },
            {
                "date": "2013",
                "value": "2451"
            }
        ],
        "Latvia": [
            {
                "date": "1961",
                "value": "3095"
            },
            {
                "date": "1962",
                "value": "3157"
            },
            {
                "date": "1963",
                "value": "3204"
            },
            {
                "date": "1964",
                "value": "3206"
            },
            {
                "date": "1965",
                "value": "3214"
            },
            {
                "date": "1966",
                "value": "3209"
            },
            {
                "date": "1967",
                "value": "3240"
            },
            {
                "date": "1968",
                "value": "3300"
            },
            {
                "date": "1969",
                "value": "3300"
            },
            {
                "date": "1970",
                "value": "3355"
            },
            {
                "date": "1971",
                "value": "3331"
            },
            {
                "date": "1972",
                "value": "3284"
            },
            {
                "date": "1973",
                "value": "3325"
            },
            {
                "date": "1974",
                "value": "3357"
            },
            {
                "date": "1975",
                "value": "3341"
            },
            {
                "date": "1976",
                "value": "3404"
            },
            {
                "date": "1977",
                "value": "3366"
            },
            {
                "date": "1978",
                "value": "3387"
            },
            {
                "date": "1979",
                "value": "3384"
            },
            {
                "date": "1980",
                "value": "3378"
            },
            {
                "date": "1981",
                "value": "3355"
            },
            {
                "date": "1982",
                "value": "3377"
            },
            {
                "date": "1983",
                "value": "3386"
            },
            {
                "date": "1984",
                "value": "3388"
            },
            {
                "date": "1985",
                "value": "3380"
            },
            {
                "date": "1986",
                "value": "3364"
            },
            {
                "date": "1987",
                "value": "3404"
            },
            {
                "date": "1988",
                "value": "3395"
            },
            {
                "date": "1989",
                "value": "3348"
            },
            {
                "date": "1990",
                "value": "3372"
            },
            {
                "date": "1991",
                "value": "3032"
            },
            {
                "date": "1992",
                "value": "3263"
            },
            {
                "date": "1993",
                "value": "3266"
            },
            {
                "date": "1994",
                "value": "3174"
            },
            {
                "date": "1995",
                "value": "3073"
            },
            {
                "date": "1996",
                "value": "2999"
            },
            {
                "date": "1997",
                "value": "2919"
            },
            {
                "date": "1998",
                "value": "2847"
            },
            {
                "date": "1999",
                "value": "2839"
            },
            {
                "date": "2000",
                "value": "2785"
            },
            {
                "date": "2001",
                "value": "2897"
            },
            {
                "date": "2002",
                "value": "3005"
            },
            {
                "date": "2003",
                "value": "3047"
            },
            {
                "date": "2004",
                "value": "3077"
            },
            {
                "date": "2005",
                "value": "3141"
            },
            {
                "date": "2006",
                "value": "3213"
            },
            {
                "date": "2007",
                "value": "3161"
            },
            {
                "date": "2008",
                "value": "3157"
            },
            {
                "date": "2009",
                "value": "3174"
            },
            {
                "date": "2010",
                "value": "3136"
            },
            {
                "date": "2011",
                "value": "3148"
            },
            {
                "date": "2012",
                "value": "3108"
            },
            {
                "date": "2013",
                "value": "3174"
            }
        ],
        "Lebanon": [
            {
                "date": "1961",
                "value": "2419"
            },
            {
                "date": "1962",
                "value": "2465"
            },
            {
                "date": "1963",
                "value": "2428"
            },
            {
                "date": "1964",
                "value": "2459"
            },
            {
                "date": "1965",
                "value": "2472"
            },
            {
                "date": "1966",
                "value": "2464"
            },
            {
                "date": "1967",
                "value": "2511"
            },
            {
                "date": "1968",
                "value": "2565"
            },
            {
                "date": "1969",
                "value": "2516"
            },
            {
                "date": "1970",
                "value": "2506"
            },
            {
                "date": "1971",
                "value": "2509"
            },
            {
                "date": "1972",
                "value": "2506"
            },
            {
                "date": "1973",
                "value": "2503"
            },
            {
                "date": "1974",
                "value": "2502"
            },
            {
                "date": "1975",
                "value": "2437"
            },
            {
                "date": "1976",
                "value": "2468"
            },
            {
                "date": "1977",
                "value": "2622"
            },
            {
                "date": "1978",
                "value": "2664"
            },
            {
                "date": "1979",
                "value": "2740"
            },
            {
                "date": "1980",
                "value": "2827"
            },
            {
                "date": "1981",
                "value": "2794"
            },
            {
                "date": "1982",
                "value": "2873"
            },
            {
                "date": "1983",
                "value": "2925"
            },
            {
                "date": "1984",
                "value": "2947"
            },
            {
                "date": "1985",
                "value": "2933"
            },
            {
                "date": "1986",
                "value": "2948"
            },
            {
                "date": "1987",
                "value": "3004"
            },
            {
                "date": "1988",
                "value": "3127"
            },
            {
                "date": "1989",
                "value": "3233"
            },
            {
                "date": "1990",
                "value": "3233"
            },
            {
                "date": "1991",
                "value": "3281"
            },
            {
                "date": "1992",
                "value": "3254"
            },
            {
                "date": "1993",
                "value": "3252"
            },
            {
                "date": "1994",
                "value": "3284"
            },
            {
                "date": "1995",
                "value": "3290"
            },
            {
                "date": "1996",
                "value": "3290"
            },
            {
                "date": "1997",
                "value": "3374"
            },
            {
                "date": "1998",
                "value": "3367"
            },
            {
                "date": "1999",
                "value": "3382"
            },
            {
                "date": "2000",
                "value": "3288"
            },
            {
                "date": "2001",
                "value": "3316"
            },
            {
                "date": "2002",
                "value": "3270"
            },
            {
                "date": "2003",
                "value": "3198"
            },
            {
                "date": "2004",
                "value": "3175"
            },
            {
                "date": "2005",
                "value": "3122"
            },
            {
                "date": "2006",
                "value": "3128"
            },
            {
                "date": "2007",
                "value": "3183"
            },
            {
                "date": "2008",
                "value": "3127"
            },
            {
                "date": "2009",
                "value": "3144"
            },
            {
                "date": "2010",
                "value": "3162"
            },
            {
                "date": "2011",
                "value": "3126"
            },
            {
                "date": "2012",
                "value": "3091"
            },
            {
                "date": "2013",
                "value": "3066"
            }
        ],
        "Lesotho": [
            {
                "date": "1961",
                "value": "2013"
            },
            {
                "date": "1962",
                "value": "2004"
            },
            {
                "date": "1963",
                "value": "2080"
            },
            {
                "date": "1964",
                "value": "2028"
            },
            {
                "date": "1965",
                "value": "2072"
            },
            {
                "date": "1966",
                "value": "1998"
            },
            {
                "date": "1967",
                "value": "2008"
            },
            {
                "date": "1968",
                "value": "2004"
            },
            {
                "date": "1969",
                "value": "1983"
            },
            {
                "date": "1970",
                "value": "2015"
            },
            {
                "date": "1971",
                "value": "2082"
            },
            {
                "date": "1972",
                "value": "2032"
            },
            {
                "date": "1973",
                "value": "1976"
            },
            {
                "date": "1974",
                "value": "2101"
            },
            {
                "date": "1975",
                "value": "2082"
            },
            {
                "date": "1976",
                "value": "2183"
            },
            {
                "date": "1977",
                "value": "2282"
            },
            {
                "date": "1978",
                "value": "2357"
            },
            {
                "date": "1979",
                "value": "2288"
            },
            {
                "date": "1980",
                "value": "2259"
            },
            {
                "date": "1981",
                "value": "2318"
            },
            {
                "date": "1982",
                "value": "2269"
            },
            {
                "date": "1983",
                "value": "2337"
            },
            {
                "date": "1984",
                "value": "2301"
            },
            {
                "date": "1985",
                "value": "2306"
            },
            {
                "date": "1986",
                "value": "2313"
            },
            {
                "date": "1987",
                "value": "2281"
            },
            {
                "date": "1988",
                "value": "2297"
            },
            {
                "date": "1989",
                "value": "2328"
            },
            {
                "date": "1990",
                "value": "2332"
            },
            {
                "date": "1991",
                "value": "2384"
            },
            {
                "date": "1992",
                "value": "2382"
            },
            {
                "date": "1993",
                "value": "2377"
            },
            {
                "date": "1994",
                "value": "2405"
            },
            {
                "date": "1995",
                "value": "2296"
            },
            {
                "date": "1996",
                "value": "2360"
            },
            {
                "date": "1997",
                "value": "2398"
            },
            {
                "date": "1998",
                "value": "2427"
            },
            {
                "date": "1999",
                "value": "2456"
            },
            {
                "date": "2000",
                "value": "2462"
            },
            {
                "date": "2001",
                "value": "2485"
            },
            {
                "date": "2002",
                "value": "2516"
            },
            {
                "date": "2003",
                "value": "2518"
            },
            {
                "date": "2004",
                "value": "2541"
            },
            {
                "date": "2005",
                "value": "2567"
            },
            {
                "date": "2006",
                "value": "2595"
            },
            {
                "date": "2007",
                "value": "2560"
            },
            {
                "date": "2008",
                "value": "2558"
            },
            {
                "date": "2009",
                "value": "2569"
            },
            {
                "date": "2010",
                "value": "2572"
            },
            {
                "date": "2011",
                "value": "2550"
            },
            {
                "date": "2012",
                "value": "2547"
            },
            {
                "date": "2013",
                "value": "2529"
            }
        ],
        "Liberia": [
            {
                "date": "1961",
                "value": "2022"
            },
            {
                "date": "1962",
                "value": "2063"
            },
            {
                "date": "1963",
                "value": "2146"
            },
            {
                "date": "1964",
                "value": "2169"
            },
            {
                "date": "1965",
                "value": "2157"
            },
            {
                "date": "1966",
                "value": "2293"
            },
            {
                "date": "1967",
                "value": "2197"
            },
            {
                "date": "1968",
                "value": "2250"
            },
            {
                "date": "1969",
                "value": "2126"
            },
            {
                "date": "1970",
                "value": "2387"
            },
            {
                "date": "1971",
                "value": "2473"
            },
            {
                "date": "1972",
                "value": "2358"
            },
            {
                "date": "1973",
                "value": "2389"
            },
            {
                "date": "1974",
                "value": "2395"
            },
            {
                "date": "1975",
                "value": "2271"
            },
            {
                "date": "1976",
                "value": "2397"
            },
            {
                "date": "1977",
                "value": "2537"
            },
            {
                "date": "1978",
                "value": "2520"
            },
            {
                "date": "1979",
                "value": "2568"
            },
            {
                "date": "1980",
                "value": "2483"
            },
            {
                "date": "1981",
                "value": "2516"
            },
            {
                "date": "1982",
                "value": "2556"
            },
            {
                "date": "1983",
                "value": "2438"
            },
            {
                "date": "1984",
                "value": "2408"
            },
            {
                "date": "1985",
                "value": "2436"
            },
            {
                "date": "1986",
                "value": "2504"
            },
            {
                "date": "1987",
                "value": "2502"
            },
            {
                "date": "1988",
                "value": "2594"
            },
            {
                "date": "1989",
                "value": "2605"
            },
            {
                "date": "1990",
                "value": "2163"
            },
            {
                "date": "1991",
                "value": "2351"
            },
            {
                "date": "1992",
                "value": "2293"
            },
            {
                "date": "1993",
                "value": "2121"
            },
            {
                "date": "1994",
                "value": "2068"
            },
            {
                "date": "1995",
                "value": "1988"
            },
            {
                "date": "1996",
                "value": "1989"
            },
            {
                "date": "1997",
                "value": "2170"
            },
            {
                "date": "1998",
                "value": "2144"
            },
            {
                "date": "1999",
                "value": "2093"
            },
            {
                "date": "2000",
                "value": "2122"
            },
            {
                "date": "2001",
                "value": "2038"
            },
            {
                "date": "2002",
                "value": "2066"
            },
            {
                "date": "2003",
                "value": "2051"
            },
            {
                "date": "2004",
                "value": "2092"
            },
            {
                "date": "2005",
                "value": "2160"
            },
            {
                "date": "2006",
                "value": "2116"
            },
            {
                "date": "2007",
                "value": "2145"
            },
            {
                "date": "2008",
                "value": "2227"
            },
            {
                "date": "2009",
                "value": "2231"
            },
            {
                "date": "2010",
                "value": "2198"
            },
            {
                "date": "2011",
                "value": "2254"
            },
            {
                "date": "2012",
                "value": "2200"
            },
            {
                "date": "2013",
                "value": "2204"
            }
        ],
        "Lithuania": [
            {
                "date": "1961",
                "value": "3095"
            },
            {
                "date": "1962",
                "value": "3157"
            },
            {
                "date": "1963",
                "value": "3204"
            },
            {
                "date": "1964",
                "value": "3206"
            },
            {
                "date": "1965",
                "value": "3214"
            },
            {
                "date": "1966",
                "value": "3209"
            },
            {
                "date": "1967",
                "value": "3240"
            },
            {
                "date": "1968",
                "value": "3300"
            },
            {
                "date": "1969",
                "value": "3300"
            },
            {
                "date": "1970",
                "value": "3355"
            },
            {
                "date": "1971",
                "value": "3331"
            },
            {
                "date": "1972",
                "value": "3284"
            },
            {
                "date": "1973",
                "value": "3325"
            },
            {
                "date": "1974",
                "value": "3357"
            },
            {
                "date": "1975",
                "value": "3341"
            },
            {
                "date": "1976",
                "value": "3404"
            },
            {
                "date": "1977",
                "value": "3366"
            },
            {
                "date": "1978",
                "value": "3387"
            },
            {
                "date": "1979",
                "value": "3384"
            },
            {
                "date": "1980",
                "value": "3378"
            },
            {
                "date": "1981",
                "value": "3355"
            },
            {
                "date": "1982",
                "value": "3377"
            },
            {
                "date": "1983",
                "value": "3386"
            },
            {
                "date": "1984",
                "value": "3388"
            },
            {
                "date": "1985",
                "value": "3380"
            },
            {
                "date": "1986",
                "value": "3364"
            },
            {
                "date": "1987",
                "value": "3404"
            },
            {
                "date": "1988",
                "value": "3395"
            },
            {
                "date": "1989",
                "value": "3348"
            },
            {
                "date": "1990",
                "value": "3372"
            },
            {
                "date": "1991",
                "value": "3032"
            },
            {
                "date": "1992",
                "value": "2984"
            },
            {
                "date": "1993",
                "value": "2815"
            },
            {
                "date": "1994",
                "value": "2781"
            },
            {
                "date": "1995",
                "value": "2824"
            },
            {
                "date": "1996",
                "value": "3007"
            },
            {
                "date": "1997",
                "value": "3183"
            },
            {
                "date": "1998",
                "value": "3194"
            },
            {
                "date": "1999",
                "value": "3132"
            },
            {
                "date": "2000",
                "value": "3160"
            },
            {
                "date": "2001",
                "value": "3269"
            },
            {
                "date": "2002",
                "value": "3276"
            },
            {
                "date": "2003",
                "value": "3288"
            },
            {
                "date": "2004",
                "value": "3361"
            },
            {
                "date": "2005",
                "value": "3463"
            },
            {
                "date": "2006",
                "value": "3466"
            },
            {
                "date": "2007",
                "value": "3563"
            },
            {
                "date": "2008",
                "value": "3522"
            },
            {
                "date": "2009",
                "value": "3470"
            },
            {
                "date": "2010",
                "value": "3333"
            },
            {
                "date": "2011",
                "value": "3409"
            },
            {
                "date": "2012",
                "value": "3390"
            },
            {
                "date": "2013",
                "value": "3417"
            }
        ],
        "Luxembourg": [
            {
                "date": "1948",
                "value": "2878"
            },
            {
                "date": "2000",
                "value": "3479"
            },
            {
                "date": "2001",
                "value": "3484"
            },
            {
                "date": "2002",
                "value": "3484"
            },
            {
                "date": "2003",
                "value": "3489"
            },
            {
                "date": "2004",
                "value": "3489"
            },
            {
                "date": "2005",
                "value": "3502"
            },
            {
                "date": "2006",
                "value": "3505"
            },
            {
                "date": "2007",
                "value": "3501"
            },
            {
                "date": "2008",
                "value": "3511"
            },
            {
                "date": "2009",
                "value": "3511"
            },
            {
                "date": "2010",
                "value": "3526"
            },
            {
                "date": "2011",
                "value": "3532"
            },
            {
                "date": "2012",
                "value": "3540"
            },
            {
                "date": "2013",
                "value": "3539"
            }
        ],
        "Madagascar": [
            {
                "date": "1961",
                "value": "2431"
            },
            {
                "date": "1962",
                "value": "2402"
            },
            {
                "date": "1963",
                "value": "2459"
            },
            {
                "date": "1964",
                "value": "2515"
            },
            {
                "date": "1965",
                "value": "2490"
            },
            {
                "date": "1966",
                "value": "2446"
            },
            {
                "date": "1967",
                "value": "2477"
            },
            {
                "date": "1968",
                "value": "2535"
            },
            {
                "date": "1969",
                "value": "2544"
            },
            {
                "date": "1970",
                "value": "2505"
            },
            {
                "date": "1971",
                "value": "2576"
            },
            {
                "date": "1972",
                "value": "2532"
            },
            {
                "date": "1973",
                "value": "2500"
            },
            {
                "date": "1974",
                "value": "2557"
            },
            {
                "date": "1975",
                "value": "2543"
            },
            {
                "date": "1976",
                "value": "2591"
            },
            {
                "date": "1977",
                "value": "2469"
            },
            {
                "date": "1978",
                "value": "2456"
            },
            {
                "date": "1979",
                "value": "2413"
            },
            {
                "date": "1980",
                "value": "2426"
            },
            {
                "date": "1981",
                "value": "2437"
            },
            {
                "date": "1982",
                "value": "2257"
            },
            {
                "date": "1983",
                "value": "2414"
            },
            {
                "date": "1984",
                "value": "2391"
            },
            {
                "date": "1985",
                "value": "2382"
            },
            {
                "date": "1986",
                "value": "2378"
            },
            {
                "date": "1987",
                "value": "2289"
            },
            {
                "date": "1988",
                "value": "2185"
            },
            {
                "date": "1989",
                "value": "2191"
            },
            {
                "date": "1990",
                "value": "2191"
            },
            {
                "date": "1991",
                "value": "2097"
            },
            {
                "date": "1992",
                "value": "2099"
            },
            {
                "date": "1993",
                "value": "2096"
            },
            {
                "date": "1994",
                "value": "2033"
            },
            {
                "date": "1995",
                "value": "2027"
            },
            {
                "date": "1996",
                "value": "2019"
            },
            {
                "date": "1997",
                "value": "2020"
            },
            {
                "date": "1998",
                "value": "2013"
            },
            {
                "date": "1999",
                "value": "2006"
            },
            {
                "date": "2000",
                "value": "2006"
            },
            {
                "date": "2001",
                "value": "1993"
            },
            {
                "date": "2002",
                "value": "1947"
            },
            {
                "date": "2003",
                "value": "1977"
            },
            {
                "date": "2004",
                "value": "1980"
            },
            {
                "date": "2005",
                "value": "2060"
            },
            {
                "date": "2006",
                "value": "2083"
            },
            {
                "date": "2007",
                "value": "2096"
            },
            {
                "date": "2008",
                "value": "2061"
            },
            {
                "date": "2009",
                "value": "2065"
            },
            {
                "date": "2010",
                "value": "2068"
            },
            {
                "date": "2011",
                "value": "2085"
            },
            {
                "date": "2012",
                "value": "2058"
            },
            {
                "date": "2013",
                "value": "2052"
            }
        ],
        "Malawi": [
            {
                "date": "1961",
                "value": "2012"
            },
            {
                "date": "1962",
                "value": "2013"
            },
            {
                "date": "1963",
                "value": "2108"
            },
            {
                "date": "1964",
                "value": "2221"
            },
            {
                "date": "1965",
                "value": "2254"
            },
            {
                "date": "1966",
                "value": "2234"
            },
            {
                "date": "1967",
                "value": "2192"
            },
            {
                "date": "1968",
                "value": "2262"
            },
            {
                "date": "1969",
                "value": "2240"
            },
            {
                "date": "1970",
                "value": "2347"
            },
            {
                "date": "1971",
                "value": "2402"
            },
            {
                "date": "1972",
                "value": "2365"
            },
            {
                "date": "1973",
                "value": "2424"
            },
            {
                "date": "1974",
                "value": "2410"
            },
            {
                "date": "1975",
                "value": "2378"
            },
            {
                "date": "1976",
                "value": "2371"
            },
            {
                "date": "1977",
                "value": "2345"
            },
            {
                "date": "1978",
                "value": "2317"
            },
            {
                "date": "1979",
                "value": "2264"
            },
            {
                "date": "1980",
                "value": "2222"
            },
            {
                "date": "1981",
                "value": "2261"
            },
            {
                "date": "1982",
                "value": "2262"
            },
            {
                "date": "1983",
                "value": "2157"
            },
            {
                "date": "1984",
                "value": "2071"
            },
            {
                "date": "1985",
                "value": "2081"
            },
            {
                "date": "1986",
                "value": "2020"
            },
            {
                "date": "1987",
                "value": "1996"
            },
            {
                "date": "1988",
                "value": "2004"
            },
            {
                "date": "1989",
                "value": "1945"
            },
            {
                "date": "1990",
                "value": "1913"
            },
            {
                "date": "1991",
                "value": "1913"
            },
            {
                "date": "1992",
                "value": "1800"
            },
            {
                "date": "1993",
                "value": "1879"
            },
            {
                "date": "1994",
                "value": "1901"
            },
            {
                "date": "1995",
                "value": "2004"
            },
            {
                "date": "1996",
                "value": "2017"
            },
            {
                "date": "1997",
                "value": "2057"
            },
            {
                "date": "1998",
                "value": "2116"
            },
            {
                "date": "1999",
                "value": "2179"
            },
            {
                "date": "2000",
                "value": "2204"
            },
            {
                "date": "2001",
                "value": "2235"
            },
            {
                "date": "2002",
                "value": "2173"
            },
            {
                "date": "2003",
                "value": "2168"
            },
            {
                "date": "2004",
                "value": "2166"
            },
            {
                "date": "2005",
                "value": "2191"
            },
            {
                "date": "2006",
                "value": "2269"
            },
            {
                "date": "2007",
                "value": "2293"
            },
            {
                "date": "2008",
                "value": "2318"
            },
            {
                "date": "2009",
                "value": "2311"
            },
            {
                "date": "2010",
                "value": "2329"
            },
            {
                "date": "2011",
                "value": "2348"
            },
            {
                "date": "2012",
                "value": "2333"
            },
            {
                "date": "2013",
                "value": "2367"
            }
        ],
        "Malaysia": [
            {
                "date": "1961",
                "value": "2418"
            },
            {
                "date": "1962",
                "value": "2435"
            },
            {
                "date": "1963",
                "value": "2453"
            },
            {
                "date": "1964",
                "value": "2426"
            },
            {
                "date": "1965",
                "value": "2421"
            },
            {
                "date": "1966",
                "value": "2417"
            },
            {
                "date": "1967",
                "value": "2430"
            },
            {
                "date": "1968",
                "value": "2483"
            },
            {
                "date": "1969",
                "value": "2554"
            },
            {
                "date": "1970",
                "value": "2586"
            },
            {
                "date": "1971",
                "value": "2527"
            },
            {
                "date": "1972",
                "value": "2553"
            },
            {
                "date": "1973",
                "value": "2604"
            },
            {
                "date": "1974",
                "value": "2638"
            },
            {
                "date": "1975",
                "value": "2596"
            },
            {
                "date": "1976",
                "value": "2617"
            },
            {
                "date": "1977",
                "value": "2640"
            },
            {
                "date": "1978",
                "value": "2672"
            },
            {
                "date": "1979",
                "value": "2732"
            },
            {
                "date": "1980",
                "value": "2763"
            },
            {
                "date": "1981",
                "value": "2746"
            },
            {
                "date": "1982",
                "value": "2739"
            },
            {
                "date": "1983",
                "value": "2766"
            },
            {
                "date": "1984",
                "value": "2776"
            },
            {
                "date": "1985",
                "value": "2670"
            },
            {
                "date": "1986",
                "value": "2655"
            },
            {
                "date": "1987",
                "value": "2608"
            },
            {
                "date": "1988",
                "value": "2627"
            },
            {
                "date": "1989",
                "value": "2631"
            },
            {
                "date": "1990",
                "value": "2648"
            },
            {
                "date": "1991",
                "value": "2649"
            },
            {
                "date": "1992",
                "value": "2767"
            },
            {
                "date": "1993",
                "value": "2797"
            },
            {
                "date": "1994",
                "value": "2836"
            },
            {
                "date": "1995",
                "value": "2916"
            },
            {
                "date": "1996",
                "value": "2924"
            },
            {
                "date": "1997",
                "value": "2908"
            },
            {
                "date": "1998",
                "value": "2888"
            },
            {
                "date": "1999",
                "value": "2910"
            },
            {
                "date": "2000",
                "value": "2841"
            },
            {
                "date": "2001",
                "value": "2819"
            },
            {
                "date": "2002",
                "value": "2774"
            },
            {
                "date": "2003",
                "value": "2794"
            },
            {
                "date": "2004",
                "value": "2828"
            },
            {
                "date": "2005",
                "value": "2792"
            },
            {
                "date": "2006",
                "value": "2809"
            },
            {
                "date": "2007",
                "value": "2838"
            },
            {
                "date": "2008",
                "value": "2787"
            },
            {
                "date": "2009",
                "value": "2839"
            },
            {
                "date": "2010",
                "value": "2876"
            },
            {
                "date": "2011",
                "value": "2889"
            },
            {
                "date": "2012",
                "value": "2901"
            },
            {
                "date": "2013",
                "value": "2916"
            }
        ],
        "Maldives": [
            {
                "date": "1961",
                "value": "1558"
            },
            {
                "date": "1962",
                "value": "1573"
            },
            {
                "date": "1963",
                "value": "1569"
            },
            {
                "date": "1964",
                "value": "1560"
            },
            {
                "date": "1965",
                "value": "1654"
            },
            {
                "date": "1966",
                "value": "1688"
            },
            {
                "date": "1967",
                "value": "1715"
            },
            {
                "date": "1968",
                "value": "1703"
            },
            {
                "date": "1969",
                "value": "1705"
            },
            {
                "date": "1970",
                "value": "1776"
            },
            {
                "date": "1971",
                "value": "1756"
            },
            {
                "date": "1972",
                "value": "1691"
            },
            {
                "date": "1973",
                "value": "1830"
            },
            {
                "date": "1974",
                "value": "1814"
            },
            {
                "date": "1975",
                "value": "1783"
            },
            {
                "date": "1976",
                "value": "1913"
            },
            {
                "date": "1977",
                "value": "1935"
            },
            {
                "date": "1978",
                "value": "2031"
            },
            {
                "date": "1979",
                "value": "2138"
            },
            {
                "date": "1980",
                "value": "2263"
            },
            {
                "date": "1981",
                "value": "2289"
            },
            {
                "date": "1982",
                "value": "2328"
            },
            {
                "date": "1983",
                "value": "2303"
            },
            {
                "date": "1984",
                "value": "2302"
            },
            {
                "date": "1985",
                "value": "2308"
            },
            {
                "date": "1986",
                "value": "2346"
            },
            {
                "date": "1987",
                "value": "2266"
            },
            {
                "date": "1988",
                "value": "2296"
            },
            {
                "date": "1989",
                "value": "2421"
            },
            {
                "date": "1990",
                "value": "2290"
            },
            {
                "date": "1991",
                "value": "2368"
            },
            {
                "date": "1992",
                "value": "2365"
            },
            {
                "date": "1993",
                "value": "2415"
            },
            {
                "date": "1994",
                "value": "2515"
            },
            {
                "date": "1995",
                "value": "2421"
            },
            {
                "date": "1996",
                "value": "2423"
            },
            {
                "date": "1997",
                "value": "2399"
            },
            {
                "date": "1998",
                "value": "2428"
            },
            {
                "date": "1999",
                "value": "2484"
            },
            {
                "date": "2000",
                "value": "2435"
            },
            {
                "date": "2001",
                "value": "2475"
            },
            {
                "date": "2002",
                "value": "2500"
            },
            {
                "date": "2003",
                "value": "2399"
            },
            {
                "date": "2004",
                "value": "2440"
            },
            {
                "date": "2005",
                "value": "2459"
            },
            {
                "date": "2006",
                "value": "2388"
            },
            {
                "date": "2007",
                "value": "2494"
            },
            {
                "date": "2008",
                "value": "2554"
            },
            {
                "date": "2009",
                "value": "2602"
            },
            {
                "date": "2010",
                "value": "2718"
            },
            {
                "date": "2011",
                "value": "2750"
            },
            {
                "date": "2012",
                "value": "2712"
            },
            {
                "date": "2013",
                "value": "2732"
            }
        ],
        "Mali": [
            {
                "date": "1961",
                "value": "1644"
            },
            {
                "date": "1962",
                "value": "1700"
            },
            {
                "date": "1963",
                "value": "1766"
            },
            {
                "date": "1964",
                "value": "1717"
            },
            {
                "date": "1965",
                "value": "1698"
            },
            {
                "date": "1966",
                "value": "1704"
            },
            {
                "date": "1967",
                "value": "1745"
            },
            {
                "date": "1968",
                "value": "1862"
            },
            {
                "date": "1969",
                "value": "1737"
            },
            {
                "date": "1970",
                "value": "1966"
            },
            {
                "date": "1971",
                "value": "1709"
            },
            {
                "date": "1972",
                "value": "1675"
            },
            {
                "date": "1973",
                "value": "1652"
            },
            {
                "date": "1974",
                "value": "1786"
            },
            {
                "date": "1975",
                "value": "1864"
            },
            {
                "date": "1976",
                "value": "1836"
            },
            {
                "date": "1977",
                "value": "1755"
            },
            {
                "date": "1978",
                "value": "1662"
            },
            {
                "date": "1979",
                "value": "1762"
            },
            {
                "date": "1980",
                "value": "1678"
            },
            {
                "date": "1981",
                "value": "1603"
            },
            {
                "date": "1982",
                "value": "1795"
            },
            {
                "date": "1983",
                "value": "1735"
            },
            {
                "date": "1984",
                "value": "1837"
            },
            {
                "date": "1985",
                "value": "2097"
            },
            {
                "date": "1986",
                "value": "2213"
            },
            {
                "date": "1987",
                "value": "2203"
            },
            {
                "date": "1988",
                "value": "2365"
            },
            {
                "date": "1989",
                "value": "2365"
            },
            {
                "date": "1990",
                "value": "2400"
            },
            {
                "date": "1991",
                "value": "2372"
            },
            {
                "date": "1992",
                "value": "2355"
            },
            {
                "date": "1993",
                "value": "2346"
            },
            {
                "date": "1994",
                "value": "2331"
            },
            {
                "date": "1995",
                "value": "2340"
            },
            {
                "date": "1996",
                "value": "2373"
            },
            {
                "date": "1997",
                "value": "2360"
            },
            {
                "date": "1998",
                "value": "2427"
            },
            {
                "date": "1999",
                "value": "2451"
            },
            {
                "date": "2000",
                "value": "2451"
            },
            {
                "date": "2001",
                "value": "2502"
            },
            {
                "date": "2002",
                "value": "2498"
            },
            {
                "date": "2003",
                "value": "2521"
            },
            {
                "date": "2004",
                "value": "2540"
            },
            {
                "date": "2005",
                "value": "2583"
            },
            {
                "date": "2006",
                "value": "2654"
            },
            {
                "date": "2007",
                "value": "2722"
            },
            {
                "date": "2008",
                "value": "2777"
            },
            {
                "date": "2009",
                "value": "2831"
            },
            {
                "date": "2010",
                "value": "2813"
            },
            {
                "date": "2011",
                "value": "2832"
            },
            {
                "date": "2012",
                "value": "2860"
            },
            {
                "date": "2013",
                "value": "2890"
            }
        ],
        "Malta": [
            {
                "date": "1961",
                "value": "2836"
            },
            {
                "date": "1962",
                "value": "2852"
            },
            {
                "date": "1963",
                "value": "2926"
            },
            {
                "date": "1964",
                "value": "2972"
            },
            {
                "date": "1965",
                "value": "3070"
            },
            {
                "date": "1966",
                "value": "2982"
            },
            {
                "date": "1967",
                "value": "2998"
            },
            {
                "date": "1968",
                "value": "3121"
            },
            {
                "date": "1969",
                "value": "3143"
            },
            {
                "date": "1970",
                "value": "3134"
            },
            {
                "date": "1971",
                "value": "3148"
            },
            {
                "date": "1972",
                "value": "3138"
            },
            {
                "date": "1973",
                "value": "3093"
            },
            {
                "date": "1974",
                "value": "3069"
            },
            {
                "date": "1975",
                "value": "3221"
            },
            {
                "date": "1976",
                "value": "3290"
            },
            {
                "date": "1977",
                "value": "3265"
            },
            {
                "date": "1978",
                "value": "3243"
            },
            {
                "date": "1979",
                "value": "3207"
            },
            {
                "date": "1980",
                "value": "3256"
            },
            {
                "date": "1981",
                "value": "3187"
            },
            {
                "date": "1982",
                "value": "3085"
            },
            {
                "date": "1983",
                "value": "3106"
            },
            {
                "date": "1984",
                "value": "2996"
            },
            {
                "date": "1985",
                "value": "3074"
            },
            {
                "date": "1986",
                "value": "2945"
            },
            {
                "date": "1987",
                "value": "3038"
            },
            {
                "date": "1988",
                "value": "3142"
            },
            {
                "date": "1989",
                "value": "3168"
            },
            {
                "date": "1990",
                "value": "3020"
            },
            {
                "date": "1991",
                "value": "3160"
            },
            {
                "date": "1992",
                "value": "3129"
            },
            {
                "date": "1993",
                "value": "3125"
            },
            {
                "date": "1994",
                "value": "3163"
            },
            {
                "date": "1995",
                "value": "3276"
            },
            {
                "date": "1996",
                "value": "3293"
            },
            {
                "date": "1997",
                "value": "3302"
            },
            {
                "date": "1998",
                "value": "3350"
            },
            {
                "date": "1999",
                "value": "3374"
            },
            {
                "date": "2000",
                "value": "3331"
            },
            {
                "date": "2001",
                "value": "3342"
            },
            {
                "date": "2002",
                "value": "3343"
            },
            {
                "date": "2003",
                "value": "3369"
            },
            {
                "date": "2004",
                "value": "3372"
            },
            {
                "date": "2005",
                "value": "3369"
            },
            {
                "date": "2006",
                "value": "3368"
            },
            {
                "date": "2007",
                "value": "3370"
            },
            {
                "date": "2008",
                "value": "3371"
            },
            {
                "date": "2009",
                "value": "3379"
            },
            {
                "date": "2010",
                "value": "3387"
            },
            {
                "date": "2011",
                "value": "3374"
            },
            {
                "date": "2012",
                "value": "3381"
            },
            {
                "date": "2013",
                "value": "3378"
            }
        ],
        "Mauritania": [
            {
                "date": "1961",
                "value": "2246"
            },
            {
                "date": "1962",
                "value": "2213"
            },
            {
                "date": "1963",
                "value": "2185"
            },
            {
                "date": "1964",
                "value": "2173"
            },
            {
                "date": "1965",
                "value": "2150"
            },
            {
                "date": "1966",
                "value": "2172"
            },
            {
                "date": "1967",
                "value": "2164"
            },
            {
                "date": "1968",
                "value": "2109"
            },
            {
                "date": "1969",
                "value": "2092"
            },
            {
                "date": "1970",
                "value": "1990"
            },
            {
                "date": "1971",
                "value": "1961"
            },
            {
                "date": "1972",
                "value": "1890"
            },
            {
                "date": "1973",
                "value": "1998"
            },
            {
                "date": "1974",
                "value": "1979"
            },
            {
                "date": "1975",
                "value": "1961"
            },
            {
                "date": "1976",
                "value": "1993"
            },
            {
                "date": "1977",
                "value": "2036"
            },
            {
                "date": "1978",
                "value": "2113"
            },
            {
                "date": "1979",
                "value": "2053"
            },
            {
                "date": "1980",
                "value": "2133"
            },
            {
                "date": "1981",
                "value": "2164"
            },
            {
                "date": "1982",
                "value": "2192"
            },
            {
                "date": "1983",
                "value": "2460"
            },
            {
                "date": "1984",
                "value": "2424"
            },
            {
                "date": "1985",
                "value": "2462"
            },
            {
                "date": "1986",
                "value": "2468"
            },
            {
                "date": "1987",
                "value": "2509"
            },
            {
                "date": "1988",
                "value": "2520"
            },
            {
                "date": "1989",
                "value": "2546"
            },
            {
                "date": "1990",
                "value": "2497"
            },
            {
                "date": "1991",
                "value": "2518"
            },
            {
                "date": "1992",
                "value": "2539"
            },
            {
                "date": "1993",
                "value": "2602"
            },
            {
                "date": "1994",
                "value": "2530"
            },
            {
                "date": "1995",
                "value": "2575"
            },
            {
                "date": "1996",
                "value": "2603"
            },
            {
                "date": "1997",
                "value": "2622"
            },
            {
                "date": "1998",
                "value": "2655"
            },
            {
                "date": "1999",
                "value": "2637"
            },
            {
                "date": "2000",
                "value": "2632"
            },
            {
                "date": "2001",
                "value": "2625"
            },
            {
                "date": "2002",
                "value": "2638"
            },
            {
                "date": "2003",
                "value": "2712"
            },
            {
                "date": "2004",
                "value": "2599"
            },
            {
                "date": "2005",
                "value": "2629"
            },
            {
                "date": "2006",
                "value": "2603"
            },
            {
                "date": "2007",
                "value": "2726"
            },
            {
                "date": "2008",
                "value": "2772"
            },
            {
                "date": "2009",
                "value": "2762"
            },
            {
                "date": "2010",
                "value": "2797"
            },
            {
                "date": "2011",
                "value": "2806"
            },
            {
                "date": "2012",
                "value": "2873"
            },
            {
                "date": "2013",
                "value": "2876"
            }
        ],
        "Mauritius": [
            {
                "date": "1961",
                "value": "2372"
            },
            {
                "date": "1962",
                "value": "2410"
            },
            {
                "date": "1963",
                "value": "2365"
            },
            {
                "date": "1964",
                "value": "2386"
            },
            {
                "date": "1965",
                "value": "2299"
            },
            {
                "date": "1966",
                "value": "2331"
            },
            {
                "date": "1967",
                "value": "2286"
            },
            {
                "date": "1968",
                "value": "2279"
            },
            {
                "date": "1969",
                "value": "2217"
            },
            {
                "date": "1970",
                "value": "2350"
            },
            {
                "date": "1971",
                "value": "2371"
            },
            {
                "date": "1972",
                "value": "2377"
            },
            {
                "date": "1973",
                "value": "2382"
            },
            {
                "date": "1974",
                "value": "2423"
            },
            {
                "date": "1975",
                "value": "2476"
            },
            {
                "date": "1976",
                "value": "2485"
            },
            {
                "date": "1977",
                "value": "2542"
            },
            {
                "date": "1978",
                "value": "2601"
            },
            {
                "date": "1979",
                "value": "2661"
            },
            {
                "date": "1980",
                "value": "2622"
            },
            {
                "date": "1981",
                "value": "2684"
            },
            {
                "date": "1982",
                "value": "2635"
            },
            {
                "date": "1983",
                "value": "2608"
            },
            {
                "date": "1984",
                "value": "2648"
            },
            {
                "date": "1985",
                "value": "2687"
            },
            {
                "date": "1986",
                "value": "2756"
            },
            {
                "date": "1987",
                "value": "2759"
            },
            {
                "date": "1988",
                "value": "2747"
            },
            {
                "date": "1989",
                "value": "2759"
            },
            {
                "date": "1990",
                "value": "2785"
            },
            {
                "date": "1991",
                "value": "2789"
            },
            {
                "date": "1992",
                "value": "2814"
            },
            {
                "date": "1993",
                "value": "2790"
            },
            {
                "date": "1994",
                "value": "2834"
            },
            {
                "date": "1995",
                "value": "2895"
            },
            {
                "date": "1996",
                "value": "2871"
            },
            {
                "date": "1997",
                "value": "2828"
            },
            {
                "date": "1998",
                "value": "2861"
            },
            {
                "date": "1999",
                "value": "2862"
            },
            {
                "date": "2000",
                "value": "2904"
            },
            {
                "date": "2001",
                "value": "2954"
            },
            {
                "date": "2002",
                "value": "2953"
            },
            {
                "date": "2003",
                "value": "2958"
            },
            {
                "date": "2004",
                "value": "3023"
            },
            {
                "date": "2005",
                "value": "3009"
            },
            {
                "date": "2006",
                "value": "3022"
            },
            {
                "date": "2007",
                "value": "3076"
            },
            {
                "date": "2008",
                "value": "3001"
            },
            {
                "date": "2009",
                "value": "3124"
            },
            {
                "date": "2010",
                "value": "3151"
            },
            {
                "date": "2011",
                "value": "3058"
            },
            {
                "date": "2012",
                "value": "3014"
            },
            {
                "date": "2013",
                "value": "3065"
            }
        ],
        "Mexico": [
            {
                "date": "1946",
                "value": "2050"
            },
            {
                "date": "1948",
                "value": "2101"
            },
            {
                "date": "1961",
                "value": "2300"
            },
            {
                "date": "1962",
                "value": "2286"
            },
            {
                "date": "1963",
                "value": "2300"
            },
            {
                "date": "1964",
                "value": "2353"
            },
            {
                "date": "1965",
                "value": "2369"
            },
            {
                "date": "1966",
                "value": "2411"
            },
            {
                "date": "1967",
                "value": "2457"
            },
            {
                "date": "1968",
                "value": "2492"
            },
            {
                "date": "1969",
                "value": "2511"
            },
            {
                "date": "1970",
                "value": "2539"
            },
            {
                "date": "1971",
                "value": "2535"
            },
            {
                "date": "1972",
                "value": "2574"
            },
            {
                "date": "1973",
                "value": "2614"
            },
            {
                "date": "1974",
                "value": "2638"
            },
            {
                "date": "1975",
                "value": "2715"
            },
            {
                "date": "1976",
                "value": "2688"
            },
            {
                "date": "1977",
                "value": "2728"
            },
            {
                "date": "1978",
                "value": "2809"
            },
            {
                "date": "1979",
                "value": "2848"
            },
            {
                "date": "1980",
                "value": "2999"
            },
            {
                "date": "1981",
                "value": "3138"
            },
            {
                "date": "1982",
                "value": "3132"
            },
            {
                "date": "1983",
                "value": "3108"
            },
            {
                "date": "1984",
                "value": "3047"
            },
            {
                "date": "1985",
                "value": "3099"
            },
            {
                "date": "1986",
                "value": "3055"
            },
            {
                "date": "1987",
                "value": "2949"
            },
            {
                "date": "1988",
                "value": "3012"
            },
            {
                "date": "1989",
                "value": "2978"
            },
            {
                "date": "1990",
                "value": "2969"
            },
            {
                "date": "1991",
                "value": "2989"
            },
            {
                "date": "1992",
                "value": "3000"
            },
            {
                "date": "1993",
                "value": "3008"
            },
            {
                "date": "1994",
                "value": "3005"
            },
            {
                "date": "1995",
                "value": "2967"
            },
            {
                "date": "1996",
                "value": "2991"
            },
            {
                "date": "1997",
                "value": "2967"
            },
            {
                "date": "1998",
                "value": "2971"
            },
            {
                "date": "1999",
                "value": "2982"
            },
            {
                "date": "2000",
                "value": "3037"
            },
            {
                "date": "2001",
                "value": "3085"
            },
            {
                "date": "2002",
                "value": "3103"
            },
            {
                "date": "2003",
                "value": "3109"
            },
            {
                "date": "2004",
                "value": "3105"
            },
            {
                "date": "2005",
                "value": "3065"
            },
            {
                "date": "2006",
                "value": "3079"
            },
            {
                "date": "2007",
                "value": "3101"
            },
            {
                "date": "2008",
                "value": "3079"
            },
            {
                "date": "2009",
                "value": "3043"
            },
            {
                "date": "2010",
                "value": "3041"
            },
            {
                "date": "2011",
                "value": "3028"
            },
            {
                "date": "2012",
                "value": "3049"
            },
            {
                "date": "2013",
                "value": "3072"
            }
        ],
        "Moldova": [
            {
                "date": "1961",
                "value": "3095"
            },
            {
                "date": "1962",
                "value": "3157"
            },
            {
                "date": "1963",
                "value": "3204"
            },
            {
                "date": "1964",
                "value": "3206"
            },
            {
                "date": "1965",
                "value": "3214"
            },
            {
                "date": "1966",
                "value": "3209"
            },
            {
                "date": "1967",
                "value": "3240"
            },
            {
                "date": "1968",
                "value": "3300"
            },
            {
                "date": "1969",
                "value": "3300"
            },
            {
                "date": "1970",
                "value": "3355"
            },
            {
                "date": "1971",
                "value": "3331"
            },
            {
                "date": "1972",
                "value": "3284"
            },
            {
                "date": "1973",
                "value": "3325"
            },
            {
                "date": "1974",
                "value": "3357"
            },
            {
                "date": "1975",
                "value": "3341"
            },
            {
                "date": "1976",
                "value": "3404"
            },
            {
                "date": "1977",
                "value": "3366"
            },
            {
                "date": "1978",
                "value": "3387"
            },
            {
                "date": "1979",
                "value": "3384"
            },
            {
                "date": "1980",
                "value": "3378"
            },
            {
                "date": "1981",
                "value": "3355"
            },
            {
                "date": "1982",
                "value": "3377"
            },
            {
                "date": "1983",
                "value": "3386"
            },
            {
                "date": "1984",
                "value": "3388"
            },
            {
                "date": "1985",
                "value": "3380"
            },
            {
                "date": "1986",
                "value": "3364"
            },
            {
                "date": "1987",
                "value": "3404"
            },
            {
                "date": "1988",
                "value": "3395"
            },
            {
                "date": "1989",
                "value": "3348"
            },
            {
                "date": "1990",
                "value": "3372"
            },
            {
                "date": "1991",
                "value": "3032"
            },
            {
                "date": "1992",
                "value": "2475"
            },
            {
                "date": "1993",
                "value": "2480"
            },
            {
                "date": "1994",
                "value": "2443"
            },
            {
                "date": "1995",
                "value": "2492"
            },
            {
                "date": "1996",
                "value": "2449"
            },
            {
                "date": "1997",
                "value": "2456"
            },
            {
                "date": "1998",
                "value": "2462"
            },
            {
                "date": "1999",
                "value": "2481"
            },
            {
                "date": "2000",
                "value": "2500"
            },
            {
                "date": "2001",
                "value": "2525"
            },
            {
                "date": "2002",
                "value": "2569"
            },
            {
                "date": "2003",
                "value": "2555"
            },
            {
                "date": "2004",
                "value": "2582"
            },
            {
                "date": "2005",
                "value": "2625"
            },
            {
                "date": "2006",
                "value": "2694"
            },
            {
                "date": "2007",
                "value": "2754"
            },
            {
                "date": "2008",
                "value": "2788"
            },
            {
                "date": "2009",
                "value": "2695"
            },
            {
                "date": "2010",
                "value": "2680"
            },
            {
                "date": "2011",
                "value": "2700"
            },
            {
                "date": "2012",
                "value": "2713"
            },
            {
                "date": "2013",
                "value": "2714"
            }
        ],
        "Mongolia": [
            {
                "date": "1961",
                "value": "2019"
            },
            {
                "date": "1962",
                "value": "1949"
            },
            {
                "date": "1963",
                "value": "2036"
            },
            {
                "date": "1964",
                "value": "2190"
            },
            {
                "date": "1965",
                "value": "2260"
            },
            {
                "date": "1966",
                "value": "2280"
            },
            {
                "date": "1967",
                "value": "2253"
            },
            {
                "date": "1968",
                "value": "2159"
            },
            {
                "date": "1969",
                "value": "2178"
            },
            {
                "date": "1970",
                "value": "2213"
            },
            {
                "date": "1971",
                "value": "2160"
            },
            {
                "date": "1972",
                "value": "2149"
            },
            {
                "date": "1973",
                "value": "2185"
            },
            {
                "date": "1974",
                "value": "2172"
            },
            {
                "date": "1975",
                "value": "2188"
            },
            {
                "date": "1976",
                "value": "2289"
            },
            {
                "date": "1977",
                "value": "2231"
            },
            {
                "date": "1978",
                "value": "2315"
            },
            {
                "date": "1979",
                "value": "2342"
            },
            {
                "date": "1980",
                "value": "2345"
            },
            {
                "date": "1981",
                "value": "2331"
            },
            {
                "date": "1982",
                "value": "2332"
            },
            {
                "date": "1983",
                "value": "2377"
            },
            {
                "date": "1984",
                "value": "2334"
            },
            {
                "date": "1985",
                "value": "2234"
            },
            {
                "date": "1986",
                "value": "2306"
            },
            {
                "date": "1987",
                "value": "2243"
            },
            {
                "date": "1988",
                "value": "2282"
            },
            {
                "date": "1989",
                "value": "2253"
            },
            {
                "date": "1990",
                "value": "2258"
            },
            {
                "date": "1991",
                "value": "2188"
            },
            {
                "date": "1992",
                "value": "1851"
            },
            {
                "date": "1993",
                "value": "1852"
            },
            {
                "date": "1994",
                "value": "1852"
            },
            {
                "date": "1995",
                "value": "2033"
            },
            {
                "date": "1996",
                "value": "2039"
            },
            {
                "date": "1997",
                "value": "2032"
            },
            {
                "date": "1998",
                "value": "2099"
            },
            {
                "date": "1999",
                "value": "2135"
            },
            {
                "date": "2000",
                "value": "2177"
            },
            {
                "date": "2001",
                "value": "2218"
            },
            {
                "date": "2002",
                "value": "2228"
            },
            {
                "date": "2003",
                "value": "2221"
            },
            {
                "date": "2004",
                "value": "2230"
            },
            {
                "date": "2005",
                "value": "2253"
            },
            {
                "date": "2006",
                "value": "2288"
            },
            {
                "date": "2007",
                "value": "2342"
            },
            {
                "date": "2008",
                "value": "2375"
            },
            {
                "date": "2009",
                "value": "2451"
            },
            {
                "date": "2010",
                "value": "2431"
            },
            {
                "date": "2011",
                "value": "2454"
            },
            {
                "date": "2012",
                "value": "2487"
            },
            {
                "date": "2013",
                "value": "2510"
            }
        ],
        "Montenegro": [
            {
                "date": "2006",
                "value": "3276"
            },
            {
                "date": "2007",
                "value": "3411"
            },
            {
                "date": "2008",
                "value": "3482"
            },
            {
                "date": "2009",
                "value": "3487"
            },
            {
                "date": "2010",
                "value": "3463"
            },
            {
                "date": "2011",
                "value": "3481"
            },
            {
                "date": "2012",
                "value": "3374"
            },
            {
                "date": "2013",
                "value": "3491"
            }
        ],
        "Morocco": [
            {
                "date": "1948",
                "value": "1825"
            },
            {
                "date": "1961",
                "value": "2047"
            },
            {
                "date": "1962",
                "value": "2069"
            },
            {
                "date": "1963",
                "value": "2072"
            },
            {
                "date": "1964",
                "value": "2138"
            },
            {
                "date": "1965",
                "value": "2173"
            },
            {
                "date": "1966",
                "value": "2095"
            },
            {
                "date": "1967",
                "value": "2148"
            },
            {
                "date": "1968",
                "value": "2235"
            },
            {
                "date": "1969",
                "value": "2345"
            },
            {
                "date": "1970",
                "value": "2340"
            },
            {
                "date": "1971",
                "value": "2431"
            },
            {
                "date": "1972",
                "value": "2414"
            },
            {
                "date": "1973",
                "value": "2442"
            },
            {
                "date": "1974",
                "value": "2504"
            },
            {
                "date": "1975",
                "value": "2617"
            },
            {
                "date": "1976",
                "value": "2551"
            },
            {
                "date": "1977",
                "value": "2606"
            },
            {
                "date": "1978",
                "value": "2636"
            },
            {
                "date": "1979",
                "value": "2708"
            },
            {
                "date": "1980",
                "value": "2656"
            },
            {
                "date": "1981",
                "value": "2706"
            },
            {
                "date": "1982",
                "value": "2777"
            },
            {
                "date": "1983",
                "value": "2763"
            },
            {
                "date": "1984",
                "value": "2831"
            },
            {
                "date": "1985",
                "value": "2864"
            },
            {
                "date": "1986",
                "value": "2984"
            },
            {
                "date": "1987",
                "value": "2970"
            },
            {
                "date": "1988",
                "value": "3049"
            },
            {
                "date": "1989",
                "value": "2994"
            },
            {
                "date": "1990",
                "value": "3093"
            },
            {
                "date": "1991",
                "value": "3072"
            },
            {
                "date": "1992",
                "value": "2902"
            },
            {
                "date": "1993",
                "value": "2878"
            },
            {
                "date": "1994",
                "value": "3000"
            },
            {
                "date": "1995",
                "value": "2952"
            },
            {
                "date": "1996",
                "value": "3089"
            },
            {
                "date": "1997",
                "value": "3097"
            },
            {
                "date": "1998",
                "value": "3152"
            },
            {
                "date": "1999",
                "value": "3077"
            },
            {
                "date": "2000",
                "value": "3063"
            },
            {
                "date": "2001",
                "value": "3117"
            },
            {
                "date": "2002",
                "value": "3154"
            },
            {
                "date": "2003",
                "value": "3203"
            },
            {
                "date": "2004",
                "value": "3263"
            },
            {
                "date": "2005",
                "value": "3206"
            },
            {
                "date": "2006",
                "value": "3271"
            },
            {
                "date": "2007",
                "value": "3251"
            },
            {
                "date": "2008",
                "value": "3271"
            },
            {
                "date": "2009",
                "value": "3293"
            },
            {
                "date": "2010",
                "value": "3294"
            },
            {
                "date": "2011",
                "value": "3349"
            },
            {
                "date": "2012",
                "value": "3366"
            },
            {
                "date": "2013",
                "value": "3403"
            }
        ],
        "Mozambique": [
            {
                "date": "1961",
                "value": "1834"
            },
            {
                "date": "1962",
                "value": "1861"
            },
            {
                "date": "1963",
                "value": "1807"
            },
            {
                "date": "1964",
                "value": "1852"
            },
            {
                "date": "1965",
                "value": "1866"
            },
            {
                "date": "1966",
                "value": "1844"
            },
            {
                "date": "1967",
                "value": "1848"
            },
            {
                "date": "1968",
                "value": "1768"
            },
            {
                "date": "1969",
                "value": "1840"
            },
            {
                "date": "1970",
                "value": "1799"
            },
            {
                "date": "1971",
                "value": "1870"
            },
            {
                "date": "1972",
                "value": "1817"
            },
            {
                "date": "1973",
                "value": "1940"
            },
            {
                "date": "1974",
                "value": "1871"
            },
            {
                "date": "1975",
                "value": "1833"
            },
            {
                "date": "1976",
                "value": "1882"
            },
            {
                "date": "1977",
                "value": "1827"
            },
            {
                "date": "1978",
                "value": "1819"
            },
            {
                "date": "1979",
                "value": "1839"
            },
            {
                "date": "1980",
                "value": "1864"
            },
            {
                "date": "1981",
                "value": "1801"
            },
            {
                "date": "1982",
                "value": "1739"
            },
            {
                "date": "1983",
                "value": "1700"
            },
            {
                "date": "1984",
                "value": "1762"
            },
            {
                "date": "1985",
                "value": "1818"
            },
            {
                "date": "1986",
                "value": "1686"
            },
            {
                "date": "1987",
                "value": "1751"
            },
            {
                "date": "1988",
                "value": "1816"
            },
            {
                "date": "1989",
                "value": "1738"
            },
            {
                "date": "1990",
                "value": "1808"
            },
            {
                "date": "1991",
                "value": "1712"
            },
            {
                "date": "1992",
                "value": "1693"
            },
            {
                "date": "1993",
                "value": "1696"
            },
            {
                "date": "1994",
                "value": "1684"
            },
            {
                "date": "1995",
                "value": "1848"
            },
            {
                "date": "1996",
                "value": "1940"
            },
            {
                "date": "1997",
                "value": "1972"
            },
            {
                "date": "1998",
                "value": "1987"
            },
            {
                "date": "1999",
                "value": "2000"
            },
            {
                "date": "2000",
                "value": "1990"
            },
            {
                "date": "2001",
                "value": "1984"
            },
            {
                "date": "2002",
                "value": "2041"
            },
            {
                "date": "2003",
                "value": "2092"
            },
            {
                "date": "2004",
                "value": "2059"
            },
            {
                "date": "2005",
                "value": "2038"
            },
            {
                "date": "2006",
                "value": "2111"
            },
            {
                "date": "2007",
                "value": "2083"
            },
            {
                "date": "2008",
                "value": "2164"
            },
            {
                "date": "2009",
                "value": "2165"
            },
            {
                "date": "2010",
                "value": "2242"
            },
            {
                "date": "2011",
                "value": "2259"
            },
            {
                "date": "2012",
                "value": "2298"
            },
            {
                "date": "2013",
                "value": "2283"
            }
        ],
        "Myanmar": [
            {
                "date": "1961",
                "value": "1449"
            },
            {
                "date": "1962",
                "value": "1506"
            },
            {
                "date": "1963",
                "value": "1533"
            },
            {
                "date": "1964",
                "value": "1576"
            },
            {
                "date": "1965",
                "value": "1546"
            },
            {
                "date": "1966",
                "value": "1449"
            },
            {
                "date": "1967",
                "value": "1454"
            },
            {
                "date": "1968",
                "value": "1459"
            },
            {
                "date": "1969",
                "value": "1440"
            },
            {
                "date": "1970",
                "value": "1455"
            },
            {
                "date": "1971",
                "value": "1479"
            },
            {
                "date": "1972",
                "value": "1439"
            },
            {
                "date": "1973",
                "value": "1460"
            },
            {
                "date": "1974",
                "value": "1499"
            },
            {
                "date": "1975",
                "value": "1479"
            },
            {
                "date": "1976",
                "value": "1491"
            },
            {
                "date": "1977",
                "value": "1516"
            },
            {
                "date": "1978",
                "value": "1553"
            },
            {
                "date": "1979",
                "value": "1573"
            },
            {
                "date": "1980",
                "value": "1551"
            },
            {
                "date": "1981",
                "value": "1618"
            },
            {
                "date": "1982",
                "value": "1674"
            },
            {
                "date": "1983",
                "value": "1682"
            },
            {
                "date": "1984",
                "value": "1708"
            },
            {
                "date": "1985",
                "value": "1665"
            },
            {
                "date": "1986",
                "value": "1636"
            },
            {
                "date": "1987",
                "value": "1631"
            },
            {
                "date": "1988",
                "value": "1576"
            },
            {
                "date": "1989",
                "value": "1471"
            },
            {
                "date": "1990",
                "value": "1696"
            },
            {
                "date": "1991",
                "value": "1692"
            },
            {
                "date": "1992",
                "value": "1693"
            },
            {
                "date": "1993",
                "value": "1737"
            },
            {
                "date": "1994",
                "value": "1715"
            },
            {
                "date": "1995",
                "value": "1770"
            },
            {
                "date": "1996",
                "value": "1788"
            },
            {
                "date": "1997",
                "value": "1840"
            },
            {
                "date": "1998",
                "value": "1837"
            },
            {
                "date": "1999",
                "value": "1836"
            },
            {
                "date": "2000",
                "value": "1910"
            },
            {
                "date": "2001",
                "value": "1957"
            },
            {
                "date": "2002",
                "value": "2002"
            },
            {
                "date": "2003",
                "value": "2057"
            },
            {
                "date": "2004",
                "value": "2093"
            },
            {
                "date": "2005",
                "value": "2137"
            },
            {
                "date": "2006",
                "value": "2207"
            },
            {
                "date": "2007",
                "value": "2282"
            },
            {
                "date": "2008",
                "value": "2372"
            },
            {
                "date": "2009",
                "value": "2405"
            },
            {
                "date": "2010",
                "value": "2500"
            },
            {
                "date": "2011",
                "value": "2531"
            },
            {
                "date": "2012",
                "value": "2565"
            },
            {
                "date": "2013",
                "value": "2571"
            }
        ],
        "Namibia": [
            {
                "date": "1961",
                "value": "2208"
            },
            {
                "date": "1962",
                "value": "2249"
            },
            {
                "date": "1963",
                "value": "2245"
            },
            {
                "date": "1964",
                "value": "2248"
            },
            {
                "date": "1965",
                "value": "2250"
            },
            {
                "date": "1966",
                "value": "2244"
            },
            {
                "date": "1967",
                "value": "2236"
            },
            {
                "date": "1968",
                "value": "2226"
            },
            {
                "date": "1969",
                "value": "2224"
            },
            {
                "date": "1970",
                "value": "2196"
            },
            {
                "date": "1971",
                "value": "2208"
            },
            {
                "date": "1972",
                "value": "2185"
            },
            {
                "date": "1973",
                "value": "2176"
            },
            {
                "date": "1974",
                "value": "2161"
            },
            {
                "date": "1975",
                "value": "2142"
            },
            {
                "date": "1976",
                "value": "2159"
            },
            {
                "date": "1977",
                "value": "2189"
            },
            {
                "date": "1978",
                "value": "2210"
            },
            {
                "date": "1979",
                "value": "2235"
            },
            {
                "date": "1980",
                "value": "2254"
            },
            {
                "date": "1981",
                "value": "2237"
            },
            {
                "date": "1982",
                "value": "2213"
            },
            {
                "date": "1983",
                "value": "2183"
            },
            {
                "date": "1984",
                "value": "2173"
            },
            {
                "date": "1985",
                "value": "2109"
            },
            {
                "date": "1986",
                "value": "2093"
            },
            {
                "date": "1987",
                "value": "2143"
            },
            {
                "date": "1988",
                "value": "2116"
            },
            {
                "date": "1989",
                "value": "2036"
            },
            {
                "date": "1990",
                "value": "2061"
            },
            {
                "date": "1991",
                "value": "2068"
            },
            {
                "date": "1992",
                "value": "2034"
            },
            {
                "date": "1993",
                "value": "2001"
            },
            {
                "date": "1994",
                "value": "1997"
            },
            {
                "date": "1995",
                "value": "2033"
            },
            {
                "date": "1996",
                "value": "2037"
            },
            {
                "date": "1997",
                "value": "2082"
            },
            {
                "date": "1998",
                "value": "2065"
            },
            {
                "date": "1999",
                "value": "2165"
            },
            {
                "date": "2000",
                "value": "2246"
            },
            {
                "date": "2001",
                "value": "2273"
            },
            {
                "date": "2002",
                "value": "2215"
            },
            {
                "date": "2003",
                "value": "2247"
            },
            {
                "date": "2004",
                "value": "2268"
            },
            {
                "date": "2005",
                "value": "2243"
            },
            {
                "date": "2006",
                "value": "2230"
            },
            {
                "date": "2007",
                "value": "2218"
            },
            {
                "date": "2008",
                "value": "2120"
            },
            {
                "date": "2009",
                "value": "2062"
            },
            {
                "date": "2010",
                "value": "2055"
            },
            {
                "date": "2011",
                "value": "2090"
            },
            {
                "date": "2012",
                "value": "2145"
            },
            {
                "date": "2013",
                "value": "2171"
            }
        ],
        "Nepal": [
            {
                "date": "1961",
                "value": "1757"
            },
            {
                "date": "1962",
                "value": "1763"
            },
            {
                "date": "1963",
                "value": "1762"
            },
            {
                "date": "1964",
                "value": "1779"
            },
            {
                "date": "1965",
                "value": "1764"
            },
            {
                "date": "1966",
                "value": "1740"
            },
            {
                "date": "1967",
                "value": "1725"
            },
            {
                "date": "1968",
                "value": "1773"
            },
            {
                "date": "1969",
                "value": "1787"
            },
            {
                "date": "1970",
                "value": "1774"
            },
            {
                "date": "1971",
                "value": "1755"
            },
            {
                "date": "1972",
                "value": "1727"
            },
            {
                "date": "1973",
                "value": "1770"
            },
            {
                "date": "1974",
                "value": "1761"
            },
            {
                "date": "1975",
                "value": "1687"
            },
            {
                "date": "1976",
                "value": "1753"
            },
            {
                "date": "1977",
                "value": "1775"
            },
            {
                "date": "1978",
                "value": "1812"
            },
            {
                "date": "1979",
                "value": "1744"
            },
            {
                "date": "1980",
                "value": "1761"
            },
            {
                "date": "1981",
                "value": "1803"
            },
            {
                "date": "1982",
                "value": "1757"
            },
            {
                "date": "1983",
                "value": "1910"
            },
            {
                "date": "1984",
                "value": "1927"
            },
            {
                "date": "1985",
                "value": "1944"
            },
            {
                "date": "1986",
                "value": "1892"
            },
            {
                "date": "1987",
                "value": "2057"
            },
            {
                "date": "1988",
                "value": "2249"
            },
            {
                "date": "1989",
                "value": "2321"
            },
            {
                "date": "1990",
                "value": "2185"
            },
            {
                "date": "1991",
                "value": "2220"
            },
            {
                "date": "1992",
                "value": "2228"
            },
            {
                "date": "1993",
                "value": "2185"
            },
            {
                "date": "1994",
                "value": "2253"
            },
            {
                "date": "1995",
                "value": "2240"
            },
            {
                "date": "1996",
                "value": "2216"
            },
            {
                "date": "1997",
                "value": "2273"
            },
            {
                "date": "1998",
                "value": "2244"
            },
            {
                "date": "1999",
                "value": "2307"
            },
            {
                "date": "2000",
                "value": "2257"
            },
            {
                "date": "2001",
                "value": "2276"
            },
            {
                "date": "2002",
                "value": "2279"
            },
            {
                "date": "2003",
                "value": "2339"
            },
            {
                "date": "2004",
                "value": "2374"
            },
            {
                "date": "2005",
                "value": "2406"
            },
            {
                "date": "2006",
                "value": "2378"
            },
            {
                "date": "2007",
                "value": "2429"
            },
            {
                "date": "2008",
                "value": "2490"
            },
            {
                "date": "2009",
                "value": "2533"
            },
            {
                "date": "2010",
                "value": "2560"
            },
            {
                "date": "2011",
                "value": "2614"
            },
            {
                "date": "2012",
                "value": "2655"
            },
            {
                "date": "2013",
                "value": "2673"
            }
        ],
        "Netherlands": [
            {
                "date": "1880",
                "value": "2493"
            },
            {
                "date": "1947",
                "value": "2856"
            },
            {
                "date": "1961",
                "value": "3037"
            },
            {
                "date": "1962",
                "value": "3035"
            },
            {
                "date": "1963",
                "value": "3054"
            },
            {
                "date": "1964",
                "value": "2998"
            },
            {
                "date": "1965",
                "value": "2971"
            },
            {
                "date": "1966",
                "value": "3032"
            },
            {
                "date": "1967",
                "value": "3074"
            },
            {
                "date": "1968",
                "value": "3036"
            },
            {
                "date": "1969",
                "value": "3043"
            },
            {
                "date": "1970",
                "value": "3025"
            },
            {
                "date": "1971",
                "value": "3017"
            },
            {
                "date": "1972",
                "value": "3055"
            },
            {
                "date": "1973",
                "value": "3109"
            },
            {
                "date": "1974",
                "value": "3144"
            },
            {
                "date": "1975",
                "value": "2974"
            },
            {
                "date": "1976",
                "value": "3064"
            },
            {
                "date": "1977",
                "value": "3096"
            },
            {
                "date": "1978",
                "value": "3078"
            },
            {
                "date": "1979",
                "value": "3110"
            },
            {
                "date": "1980",
                "value": "3103"
            },
            {
                "date": "1981",
                "value": "3024"
            },
            {
                "date": "1982",
                "value": "3089"
            },
            {
                "date": "1983",
                "value": "3081"
            },
            {
                "date": "1984",
                "value": "3113"
            },
            {
                "date": "1985",
                "value": "3124"
            },
            {
                "date": "1986",
                "value": "3133"
            },
            {
                "date": "1987",
                "value": "3154"
            },
            {
                "date": "1988",
                "value": "3215"
            },
            {
                "date": "1989",
                "value": "3152"
            },
            {
                "date": "1990",
                "value": "3280"
            },
            {
                "date": "1991",
                "value": "3344"
            },
            {
                "date": "1992",
                "value": "3315"
            },
            {
                "date": "1993",
                "value": "3323"
            },
            {
                "date": "1994",
                "value": "3236"
            },
            {
                "date": "1995",
                "value": "3364"
            },
            {
                "date": "1996",
                "value": "3374"
            },
            {
                "date": "1997",
                "value": "3271"
            },
            {
                "date": "1998",
                "value": "3361"
            },
            {
                "date": "1999",
                "value": "3283"
            },
            {
                "date": "2000",
                "value": "3265"
            },
            {
                "date": "2001",
                "value": "3254"
            },
            {
                "date": "2002",
                "value": "3249"
            },
            {
                "date": "2003",
                "value": "3141"
            },
            {
                "date": "2004",
                "value": "3197"
            },
            {
                "date": "2005",
                "value": "3231"
            },
            {
                "date": "2006",
                "value": "3213"
            },
            {
                "date": "2007",
                "value": "3237"
            },
            {
                "date": "2008",
                "value": "3228"
            },
            {
                "date": "2009",
                "value": "3213"
            },
            {
                "date": "2010",
                "value": "3208"
            },
            {
                "date": "2011",
                "value": "3212"
            },
            {
                "date": "2012",
                "value": "3225"
            },
            {
                "date": "2013",
                "value": "3228"
            }
        ],
        "Netherlands Antilles": [
            {
                "date": "1961",
                "value": "2946"
            },
            {
                "date": "1962",
                "value": "3061"
            },
            {
                "date": "1963",
                "value": "3130"
            },
            {
                "date": "1964",
                "value": "3137"
            },
            {
                "date": "1965",
                "value": "3111"
            },
            {
                "date": "1966",
                "value": "3045"
            },
            {
                "date": "1967",
                "value": "3114"
            },
            {
                "date": "1968",
                "value": "3182"
            },
            {
                "date": "1969",
                "value": "3149"
            },
            {
                "date": "1970",
                "value": "3263"
            },
            {
                "date": "1971",
                "value": "3287"
            },
            {
                "date": "1972",
                "value": "3184"
            },
            {
                "date": "1973",
                "value": "3178"
            },
            {
                "date": "1974",
                "value": "3217"
            },
            {
                "date": "1975",
                "value": "3148"
            },
            {
                "date": "1976",
                "value": "3389"
            },
            {
                "date": "1977",
                "value": "3455"
            },
            {
                "date": "1978",
                "value": "3439"
            },
            {
                "date": "1979",
                "value": "3542"
            },
            {
                "date": "1980",
                "value": "3576"
            },
            {
                "date": "1981",
                "value": "3743"
            },
            {
                "date": "1982",
                "value": "3748"
            },
            {
                "date": "1983",
                "value": "3814"
            },
            {
                "date": "1984",
                "value": "3877"
            },
            {
                "date": "1985",
                "value": "2710"
            },
            {
                "date": "1986",
                "value": "2798"
            },
            {
                "date": "1987",
                "value": "2817"
            },
            {
                "date": "1988",
                "value": "2673"
            },
            {
                "date": "1989",
                "value": "2660"
            },
            {
                "date": "1990",
                "value": "2627"
            },
            {
                "date": "1991",
                "value": "2623"
            },
            {
                "date": "1992",
                "value": "2756"
            },
            {
                "date": "1993",
                "value": "2880"
            },
            {
                "date": "1994",
                "value": "2828"
            },
            {
                "date": "1995",
                "value": "2872"
            },
            {
                "date": "1996",
                "value": "2910"
            },
            {
                "date": "1997",
                "value": "2916"
            },
            {
                "date": "1998",
                "value": "2957"
            },
            {
                "date": "1999",
                "value": "3020"
            },
            {
                "date": "2000",
                "value": "3077"
            },
            {
                "date": "2001",
                "value": "3051"
            },
            {
                "date": "2002",
                "value": "3074"
            },
            {
                "date": "2003",
                "value": "3064"
            },
            {
                "date": "2004",
                "value": "3084"
            },
            {
                "date": "2005",
                "value": "3087"
            },
            {
                "date": "2006",
                "value": "3085"
            },
            {
                "date": "2007",
                "value": "3066"
            },
            {
                "date": "2008",
                "value": "3081"
            },
            {
                "date": "2009",
                "value": "3103"
            },
            {
                "date": "2010",
                "value": "3112"
            }
        ],
        "New Caledonia": [
            {
                "date": "1961",
                "value": "2842"
            },
            {
                "date": "1962",
                "value": "2826"
            },
            {
                "date": "1963",
                "value": "2809"
            },
            {
                "date": "1964",
                "value": "2856"
            },
            {
                "date": "1965",
                "value": "2916"
            },
            {
                "date": "1966",
                "value": "2944"
            },
            {
                "date": "1967",
                "value": "2976"
            },
            {
                "date": "1968",
                "value": "2976"
            },
            {
                "date": "1969",
                "value": "3067"
            },
            {
                "date": "1970",
                "value": "3135"
            },
            {
                "date": "1971",
                "value": "3288"
            },
            {
                "date": "1972",
                "value": "3221"
            },
            {
                "date": "1973",
                "value": "3220"
            },
            {
                "date": "1974",
                "value": "3109"
            },
            {
                "date": "1975",
                "value": "3023"
            },
            {
                "date": "1976",
                "value": "2987"
            },
            {
                "date": "1977",
                "value": "2975"
            },
            {
                "date": "1978",
                "value": "2937"
            },
            {
                "date": "1979",
                "value": "2873"
            },
            {
                "date": "1980",
                "value": "2931"
            },
            {
                "date": "1981",
                "value": "2839"
            },
            {
                "date": "1982",
                "value": "2906"
            },
            {
                "date": "1983",
                "value": "2859"
            },
            {
                "date": "1984",
                "value": "2816"
            },
            {
                "date": "1985",
                "value": "2774"
            },
            {
                "date": "1986",
                "value": "2837"
            },
            {
                "date": "1987",
                "value": "2896"
            },
            {
                "date": "1988",
                "value": "2701"
            },
            {
                "date": "1989",
                "value": "2745"
            },
            {
                "date": "1990",
                "value": "2746"
            },
            {
                "date": "1991",
                "value": "2854"
            },
            {
                "date": "1992",
                "value": "2710"
            },
            {
                "date": "1993",
                "value": "2697"
            },
            {
                "date": "1994",
                "value": "2710"
            },
            {
                "date": "1995",
                "value": "2640"
            },
            {
                "date": "1996",
                "value": "2666"
            },
            {
                "date": "1997",
                "value": "2751"
            },
            {
                "date": "1998",
                "value": "2723"
            },
            {
                "date": "1999",
                "value": "2737"
            },
            {
                "date": "2000",
                "value": "2769"
            },
            {
                "date": "2001",
                "value": "2784"
            },
            {
                "date": "2002",
                "value": "2775"
            },
            {
                "date": "2003",
                "value": "2763"
            },
            {
                "date": "2004",
                "value": "2753"
            },
            {
                "date": "2005",
                "value": "2748"
            },
            {
                "date": "2006",
                "value": "2771"
            },
            {
                "date": "2007",
                "value": "2772"
            },
            {
                "date": "2008",
                "value": "2775"
            },
            {
                "date": "2009",
                "value": "2805"
            },
            {
                "date": "2010",
                "value": "2815"
            },
            {
                "date": "2011",
                "value": "2833"
            },
            {
                "date": "2012",
                "value": "2860"
            },
            {
                "date": "2013",
                "value": "2853"
            }
        ],
        "New Zealand": [
            {
                "date": "1948",
                "value": "3259"
            },
            {
                "date": "1961",
                "value": "2926"
            },
            {
                "date": "1962",
                "value": "2963"
            },
            {
                "date": "1963",
                "value": "2952"
            },
            {
                "date": "1964",
                "value": "2956"
            },
            {
                "date": "1965",
                "value": "2966"
            },
            {
                "date": "1966",
                "value": "3086"
            },
            {
                "date": "1967",
                "value": "2999"
            },
            {
                "date": "1968",
                "value": "2971"
            },
            {
                "date": "1969",
                "value": "2962"
            },
            {
                "date": "1970",
                "value": "2958"
            },
            {
                "date": "1971",
                "value": "3024"
            },
            {
                "date": "1972",
                "value": "3050"
            },
            {
                "date": "1973",
                "value": "3086"
            },
            {
                "date": "1974",
                "value": "3093"
            },
            {
                "date": "1975",
                "value": "3134"
            },
            {
                "date": "1976",
                "value": "3235"
            },
            {
                "date": "1977",
                "value": "3114"
            },
            {
                "date": "1978",
                "value": "3124"
            },
            {
                "date": "1979",
                "value": "3051"
            },
            {
                "date": "1980",
                "value": "3063"
            },
            {
                "date": "1981",
                "value": "3063"
            },
            {
                "date": "1982",
                "value": "3078"
            },
            {
                "date": "1983",
                "value": "2970"
            },
            {
                "date": "1984",
                "value": "3068"
            },
            {
                "date": "1985",
                "value": "3021"
            },
            {
                "date": "1986",
                "value": "3152"
            },
            {
                "date": "1987",
                "value": "3162"
            },
            {
                "date": "1988",
                "value": "3124"
            },
            {
                "date": "1989",
                "value": "3076"
            },
            {
                "date": "1990",
                "value": "3257"
            },
            {
                "date": "1991",
                "value": "3196"
            },
            {
                "date": "1992",
                "value": "3188"
            },
            {
                "date": "1993",
                "value": "3229"
            },
            {
                "date": "1994",
                "value": "3168"
            },
            {
                "date": "1995",
                "value": "3208"
            },
            {
                "date": "1996",
                "value": "3199"
            },
            {
                "date": "1997",
                "value": "3223"
            },
            {
                "date": "1998",
                "value": "3209"
            },
            {
                "date": "1999",
                "value": "3187"
            },
            {
                "date": "2000",
                "value": "3173"
            },
            {
                "date": "2001",
                "value": "3117"
            },
            {
                "date": "2002",
                "value": "3121"
            },
            {
                "date": "2003",
                "value": "3120"
            },
            {
                "date": "2004",
                "value": "3157"
            },
            {
                "date": "2005",
                "value": "3183"
            },
            {
                "date": "2006",
                "value": "3151"
            },
            {
                "date": "2007",
                "value": "3184"
            },
            {
                "date": "2008",
                "value": "3205"
            },
            {
                "date": "2009",
                "value": "3144"
            },
            {
                "date": "2010",
                "value": "3139"
            },
            {
                "date": "2011",
                "value": "3137"
            },
            {
                "date": "2012",
                "value": "3127"
            },
            {
                "date": "2013",
                "value": "3137"
            }
        ],
        "Nicaragua": [
            {
                "date": "1961",
                "value": "1910"
            },
            {
                "date": "1962",
                "value": "1944"
            },
            {
                "date": "1963",
                "value": "1958"
            },
            {
                "date": "1964",
                "value": "2013"
            },
            {
                "date": "1965",
                "value": "2014"
            },
            {
                "date": "1966",
                "value": "2045"
            },
            {
                "date": "1967",
                "value": "2082"
            },
            {
                "date": "1968",
                "value": "2132"
            },
            {
                "date": "1969",
                "value": "2080"
            },
            {
                "date": "1970",
                "value": "2069"
            },
            {
                "date": "1971",
                "value": "2046"
            },
            {
                "date": "1972",
                "value": "1997"
            },
            {
                "date": "1973",
                "value": "2049"
            },
            {
                "date": "1974",
                "value": "2012"
            },
            {
                "date": "1975",
                "value": "2035"
            },
            {
                "date": "1976",
                "value": "2048"
            },
            {
                "date": "1977",
                "value": "2097"
            },
            {
                "date": "1978",
                "value": "2023"
            },
            {
                "date": "1979",
                "value": "1959"
            },
            {
                "date": "1980",
                "value": "2028"
            },
            {
                "date": "1981",
                "value": "2135"
            },
            {
                "date": "1982",
                "value": "2012"
            },
            {
                "date": "1983",
                "value": "2063"
            },
            {
                "date": "1984",
                "value": "2142"
            },
            {
                "date": "1985",
                "value": "2164"
            },
            {
                "date": "1986",
                "value": "2195"
            },
            {
                "date": "1987",
                "value": "2132"
            },
            {
                "date": "1988",
                "value": "2113"
            },
            {
                "date": "1989",
                "value": "2084"
            },
            {
                "date": "1990",
                "value": "1734"
            },
            {
                "date": "1991",
                "value": "1801"
            },
            {
                "date": "1992",
                "value": "1785"
            },
            {
                "date": "1993",
                "value": "1849"
            },
            {
                "date": "1994",
                "value": "1927"
            },
            {
                "date": "1995",
                "value": "1965"
            },
            {
                "date": "1996",
                "value": "1976"
            },
            {
                "date": "1997",
                "value": "1956"
            },
            {
                "date": "1998",
                "value": "2068"
            },
            {
                "date": "1999",
                "value": "2079"
            },
            {
                "date": "2000",
                "value": "2133"
            },
            {
                "date": "2001",
                "value": "2301"
            },
            {
                "date": "2002",
                "value": "2291"
            },
            {
                "date": "2003",
                "value": "2319"
            },
            {
                "date": "2004",
                "value": "2360"
            },
            {
                "date": "2005",
                "value": "2400"
            },
            {
                "date": "2006",
                "value": "2412"
            },
            {
                "date": "2007",
                "value": "2471"
            },
            {
                "date": "2008",
                "value": "2467"
            },
            {
                "date": "2009",
                "value": "2473"
            },
            {
                "date": "2010",
                "value": "2513"
            },
            {
                "date": "2011",
                "value": "2543"
            },
            {
                "date": "2012",
                "value": "2560"
            },
            {
                "date": "2013",
                "value": "2638"
            }
        ],
        "Niger": [
            {
                "date": "1961",
                "value": "1610"
            },
            {
                "date": "1962",
                "value": "1620"
            },
            {
                "date": "1963",
                "value": "1642"
            },
            {
                "date": "1964",
                "value": "1683"
            },
            {
                "date": "1965",
                "value": "1840"
            },
            {
                "date": "1966",
                "value": "1840"
            },
            {
                "date": "1967",
                "value": "1920"
            },
            {
                "date": "1968",
                "value": "2048"
            },
            {
                "date": "1969",
                "value": "1988"
            },
            {
                "date": "1970",
                "value": "1959"
            },
            {
                "date": "1971",
                "value": "2081"
            },
            {
                "date": "1972",
                "value": "1934"
            },
            {
                "date": "1973",
                "value": "1997"
            },
            {
                "date": "1974",
                "value": "2000"
            },
            {
                "date": "1975",
                "value": "2010"
            },
            {
                "date": "1976",
                "value": "2087"
            },
            {
                "date": "1977",
                "value": "2111"
            },
            {
                "date": "1978",
                "value": "2123"
            },
            {
                "date": "1979",
                "value": "2127"
            },
            {
                "date": "1980",
                "value": "2171"
            },
            {
                "date": "1981",
                "value": "2173"
            },
            {
                "date": "1982",
                "value": "2222"
            },
            {
                "date": "1983",
                "value": "2230"
            },
            {
                "date": "1984",
                "value": "2178"
            },
            {
                "date": "1985",
                "value": "2122"
            },
            {
                "date": "1986",
                "value": "2089"
            },
            {
                "date": "1987",
                "value": "2128"
            },
            {
                "date": "1988",
                "value": "2154"
            },
            {
                "date": "1989",
                "value": "2159"
            },
            {
                "date": "1990",
                "value": "2278"
            },
            {
                "date": "1991",
                "value": "2090"
            },
            {
                "date": "1992",
                "value": "2066"
            },
            {
                "date": "1993",
                "value": "2037"
            },
            {
                "date": "1994",
                "value": "1990"
            },
            {
                "date": "1995",
                "value": "2059"
            },
            {
                "date": "1996",
                "value": "2099"
            },
            {
                "date": "1997",
                "value": "2173"
            },
            {
                "date": "1998",
                "value": "2186"
            },
            {
                "date": "1999",
                "value": "2217"
            },
            {
                "date": "2000",
                "value": "2328"
            },
            {
                "date": "2001",
                "value": "2341"
            },
            {
                "date": "2002",
                "value": "2309"
            },
            {
                "date": "2003",
                "value": "2401"
            },
            {
                "date": "2004",
                "value": "2453"
            },
            {
                "date": "2005",
                "value": "2444"
            },
            {
                "date": "2006",
                "value": "2442"
            },
            {
                "date": "2007",
                "value": "2461"
            },
            {
                "date": "2008",
                "value": "2520"
            },
            {
                "date": "2009",
                "value": "2523"
            },
            {
                "date": "2010",
                "value": "2533"
            },
            {
                "date": "2011",
                "value": "2534"
            },
            {
                "date": "2012",
                "value": "2567"
            },
            {
                "date": "2013",
                "value": "2547"
            }
        ],
        "Nigeria": [
            {
                "date": "1961",
                "value": "1947"
            },
            {
                "date": "1962",
                "value": "2026"
            },
            {
                "date": "1963",
                "value": "1984"
            },
            {
                "date": "1964",
                "value": "1951"
            },
            {
                "date": "1965",
                "value": "1879"
            },
            {
                "date": "1966",
                "value": "1735"
            },
            {
                "date": "1967",
                "value": "1832"
            },
            {
                "date": "1968",
                "value": "1825"
            },
            {
                "date": "1969",
                "value": "1948"
            },
            {
                "date": "1970",
                "value": "1993"
            },
            {
                "date": "1971",
                "value": "1866"
            },
            {
                "date": "1972",
                "value": "1655"
            },
            {
                "date": "1973",
                "value": "1768"
            },
            {
                "date": "1974",
                "value": "1879"
            },
            {
                "date": "1975",
                "value": "1836"
            },
            {
                "date": "1976",
                "value": "1754"
            },
            {
                "date": "1977",
                "value": "1779"
            },
            {
                "date": "1978",
                "value": "1786"
            },
            {
                "date": "1979",
                "value": "1736"
            },
            {
                "date": "1980",
                "value": "1859"
            },
            {
                "date": "1981",
                "value": "1881"
            },
            {
                "date": "1982",
                "value": "1876"
            },
            {
                "date": "1983",
                "value": "1726"
            },
            {
                "date": "1984",
                "value": "1753"
            },
            {
                "date": "1985",
                "value": "1863"
            },
            {
                "date": "1986",
                "value": "2008"
            },
            {
                "date": "1987",
                "value": "1972"
            },
            {
                "date": "1988",
                "value": "2018"
            },
            {
                "date": "1989",
                "value": "2103"
            },
            {
                "date": "1990",
                "value": "2192"
            },
            {
                "date": "1991",
                "value": "2339"
            },
            {
                "date": "1992",
                "value": "2434"
            },
            {
                "date": "1993",
                "value": "2524"
            },
            {
                "date": "1994",
                "value": "2500"
            },
            {
                "date": "1995",
                "value": "2561"
            },
            {
                "date": "1996",
                "value": "2556"
            },
            {
                "date": "1997",
                "value": "2599"
            },
            {
                "date": "1998",
                "value": "2631"
            },
            {
                "date": "1999",
                "value": "2633"
            },
            {
                "date": "2000",
                "value": "2610"
            },
            {
                "date": "2001",
                "value": "2613"
            },
            {
                "date": "2002",
                "value": "2605"
            },
            {
                "date": "2003",
                "value": "2608"
            },
            {
                "date": "2004",
                "value": "2655"
            },
            {
                "date": "2005",
                "value": "2705"
            },
            {
                "date": "2006",
                "value": "2725"
            },
            {
                "date": "2007",
                "value": "2720"
            },
            {
                "date": "2008",
                "value": "2723"
            },
            {
                "date": "2009",
                "value": "2683"
            },
            {
                "date": "2010",
                "value": "2706"
            },
            {
                "date": "2011",
                "value": "2706"
            },
            {
                "date": "2012",
                "value": "2665"
            },
            {
                "date": "2013",
                "value": "2700"
            }
        ],
        "North Korea": [
            {
                "date": "1961",
                "value": "1879"
            },
            {
                "date": "1962",
                "value": "1906"
            },
            {
                "date": "1963",
                "value": "2018"
            },
            {
                "date": "1964",
                "value": "2100"
            },
            {
                "date": "1965",
                "value": "1956"
            },
            {
                "date": "1966",
                "value": "2015"
            },
            {
                "date": "1967",
                "value": "1910"
            },
            {
                "date": "1968",
                "value": "1925"
            },
            {
                "date": "1969",
                "value": "2093"
            },
            {
                "date": "1970",
                "value": "2072"
            },
            {
                "date": "1971",
                "value": "2097"
            },
            {
                "date": "1972",
                "value": "2085"
            },
            {
                "date": "1973",
                "value": "2150"
            },
            {
                "date": "1974",
                "value": "2055"
            },
            {
                "date": "1975",
                "value": "2126"
            },
            {
                "date": "1976",
                "value": "2239"
            },
            {
                "date": "1977",
                "value": "2197"
            },
            {
                "date": "1978",
                "value": "2198"
            },
            {
                "date": "1979",
                "value": "2342"
            },
            {
                "date": "1980",
                "value": "2193"
            },
            {
                "date": "1981",
                "value": "2296"
            },
            {
                "date": "1982",
                "value": "2008"
            },
            {
                "date": "1983",
                "value": "2030"
            },
            {
                "date": "1984",
                "value": "2070"
            },
            {
                "date": "1985",
                "value": "2070"
            },
            {
                "date": "1986",
                "value": "2177"
            },
            {
                "date": "1987",
                "value": "2178"
            },
            {
                "date": "1988",
                "value": "2127"
            },
            {
                "date": "1989",
                "value": "2231"
            },
            {
                "date": "1990",
                "value": "2370"
            },
            {
                "date": "1991",
                "value": "2368"
            },
            {
                "date": "1992",
                "value": "2222"
            },
            {
                "date": "1993",
                "value": "2276"
            },
            {
                "date": "1994",
                "value": "2246"
            },
            {
                "date": "1995",
                "value": "2103"
            },
            {
                "date": "1996",
                "value": "2080"
            },
            {
                "date": "1997",
                "value": "2133"
            },
            {
                "date": "1998",
                "value": "2121"
            },
            {
                "date": "1999",
                "value": "2112"
            },
            {
                "date": "2000",
                "value": "2147"
            },
            {
                "date": "2001",
                "value": "2096"
            },
            {
                "date": "2002",
                "value": "2182"
            },
            {
                "date": "2003",
                "value": "2189"
            },
            {
                "date": "2004",
                "value": "2206"
            },
            {
                "date": "2005",
                "value": "2180"
            },
            {
                "date": "2006",
                "value": "2141"
            },
            {
                "date": "2007",
                "value": "2109"
            },
            {
                "date": "2008",
                "value": "2095"
            },
            {
                "date": "2009",
                "value": "2088"
            },
            {
                "date": "2010",
                "value": "2089"
            },
            {
                "date": "2011",
                "value": "2100"
            },
            {
                "date": "2012",
                "value": "2105"
            },
            {
                "date": "2013",
                "value": "2094"
            }
        ],
        "North Macedonia": [
            {
                "date": "1992",
                "value": "2363"
            },
            {
                "date": "1993",
                "value": "2316"
            },
            {
                "date": "1994",
                "value": "2687"
            },
            {
                "date": "1995",
                "value": "2582"
            },
            {
                "date": "1996",
                "value": "2584"
            },
            {
                "date": "1997",
                "value": "2768"
            },
            {
                "date": "1998",
                "value": "2869"
            },
            {
                "date": "1999",
                "value": "2794"
            },
            {
                "date": "2000",
                "value": "2750"
            },
            {
                "date": "2001",
                "value": "2631"
            },
            {
                "date": "2002",
                "value": "2722"
            },
            {
                "date": "2003",
                "value": "2741"
            },
            {
                "date": "2004",
                "value": "2872"
            },
            {
                "date": "2005",
                "value": "2780"
            },
            {
                "date": "2006",
                "value": "2827"
            },
            {
                "date": "2007",
                "value": "3017"
            },
            {
                "date": "2008",
                "value": "2960"
            },
            {
                "date": "2009",
                "value": "2997"
            },
            {
                "date": "2010",
                "value": "2955"
            },
            {
                "date": "2011",
                "value": "2910"
            },
            {
                "date": "2012",
                "value": "2931"
            },
            {
                "date": "2013",
                "value": "2949"
            }
        ],
        "Northern America": [
            {
                "date": "1961",
                "value": "2873"
            },
            {
                "date": "1962",
                "value": "2857"
            },
            {
                "date": "1963",
                "value": "2864"
            },
            {
                "date": "1964",
                "value": "2914"
            },
            {
                "date": "1965",
                "value": "2923"
            },
            {
                "date": "1966",
                "value": "2951"
            },
            {
                "date": "1967",
                "value": "2975"
            },
            {
                "date": "1968",
                "value": "2995"
            },
            {
                "date": "1969",
                "value": "3029"
            },
            {
                "date": "1970",
                "value": "3023"
            },
            {
                "date": "1971",
                "value": "3040"
            },
            {
                "date": "1972",
                "value": "3050"
            },
            {
                "date": "1973",
                "value": "3033"
            },
            {
                "date": "1974",
                "value": "3025"
            },
            {
                "date": "1975",
                "value": "3019"
            },
            {
                "date": "1976",
                "value": "3150"
            },
            {
                "date": "1977",
                "value": "3122"
            },
            {
                "date": "1978",
                "value": "3134"
            },
            {
                "date": "1979",
                "value": "3186"
            },
            {
                "date": "1980",
                "value": "3156"
            },
            {
                "date": "1981",
                "value": "3188"
            },
            {
                "date": "1982",
                "value": "3168"
            },
            {
                "date": "1983",
                "value": "3199"
            },
            {
                "date": "1984",
                "value": "3248"
            },
            {
                "date": "1985",
                "value": "3347"
            },
            {
                "date": "1986",
                "value": "3326"
            },
            {
                "date": "1987",
                "value": "3420"
            },
            {
                "date": "1988",
                "value": "3414"
            },
            {
                "date": "1989",
                "value": "3395"
            },
            {
                "date": "1990",
                "value": "3447"
            },
            {
                "date": "1991",
                "value": "3475"
            },
            {
                "date": "1992",
                "value": "3513"
            },
            {
                "date": "1993",
                "value": "3557"
            },
            {
                "date": "1994",
                "value": "3620"
            },
            {
                "date": "1995",
                "value": "3543"
            },
            {
                "date": "1996",
                "value": "3554"
            },
            {
                "date": "1997",
                "value": "3623"
            },
            {
                "date": "1998",
                "value": "3638"
            },
            {
                "date": "1999",
                "value": "3656"
            },
            {
                "date": "2000",
                "value": "3730"
            },
            {
                "date": "2001",
                "value": "3687"
            },
            {
                "date": "2002",
                "value": "3755"
            },
            {
                "date": "2003",
                "value": "3751"
            },
            {
                "date": "2004",
                "value": "3781"
            },
            {
                "date": "2005",
                "value": "3793"
            },
            {
                "date": "2006",
                "value": "3753"
            },
            {
                "date": "2007",
                "value": "3730"
            },
            {
                "date": "2008",
                "value": "3676"
            },
            {
                "date": "2009",
                "value": "3625"
            },
            {
                "date": "2010",
                "value": "3630"
            },
            {
                "date": "2011",
                "value": "3632"
            },
            {
                "date": "2012",
                "value": "3667"
            },
            {
                "date": "2013",
                "value": "3663"
            }
        ],
        "Norway": [
            {
                "date": "1840",
                "value": "2250"
            },
            {
                "date": "1947",
                "value": "2899"
            },
            {
                "date": "1961",
                "value": "2783"
            },
            {
                "date": "1962",
                "value": "2929"
            },
            {
                "date": "1963",
                "value": "2802"
            },
            {
                "date": "1964",
                "value": "2860"
            },
            {
                "date": "1965",
                "value": "2900"
            },
            {
                "date": "1966",
                "value": "2993"
            },
            {
                "date": "1967",
                "value": "2950"
            },
            {
                "date": "1968",
                "value": "3028"
            },
            {
                "date": "1969",
                "value": "3000"
            },
            {
                "date": "1970",
                "value": "3014"
            },
            {
                "date": "1971",
                "value": "3044"
            },
            {
                "date": "1972",
                "value": "3085"
            },
            {
                "date": "1973",
                "value": "3086"
            },
            {
                "date": "1974",
                "value": "2983"
            },
            {
                "date": "1975",
                "value": "2969"
            },
            {
                "date": "1976",
                "value": "3186"
            },
            {
                "date": "1977",
                "value": "3168"
            },
            {
                "date": "1978",
                "value": "3223"
            },
            {
                "date": "1979",
                "value": "3264"
            },
            {
                "date": "1980",
                "value": "3349"
            },
            {
                "date": "1981",
                "value": "3333"
            },
            {
                "date": "1982",
                "value": "3152"
            },
            {
                "date": "1983",
                "value": "3164"
            },
            {
                "date": "1984",
                "value": "3200"
            },
            {
                "date": "1985",
                "value": "3198"
            },
            {
                "date": "1986",
                "value": "3235"
            },
            {
                "date": "1987",
                "value": "3307"
            },
            {
                "date": "1988",
                "value": "3124"
            },
            {
                "date": "1989",
                "value": "3188"
            },
            {
                "date": "1990",
                "value": "3156"
            },
            {
                "date": "1991",
                "value": "3222"
            },
            {
                "date": "1992",
                "value": "3219"
            },
            {
                "date": "1993",
                "value": "3222"
            },
            {
                "date": "1994",
                "value": "3277"
            },
            {
                "date": "1995",
                "value": "3224"
            },
            {
                "date": "1996",
                "value": "3311"
            },
            {
                "date": "1997",
                "value": "3329"
            },
            {
                "date": "1998",
                "value": "3402"
            },
            {
                "date": "1999",
                "value": "3418"
            },
            {
                "date": "2000",
                "value": "3378"
            },
            {
                "date": "2001",
                "value": "3418"
            },
            {
                "date": "2002",
                "value": "3459"
            },
            {
                "date": "2003",
                "value": "3437"
            },
            {
                "date": "2004",
                "value": "3477"
            },
            {
                "date": "2005",
                "value": "3520"
            },
            {
                "date": "2006",
                "value": "3446"
            },
            {
                "date": "2007",
                "value": "3464"
            },
            {
                "date": "2008",
                "value": "3478"
            },
            {
                "date": "2009",
                "value": "3471"
            },
            {
                "date": "2010",
                "value": "3486"
            },
            {
                "date": "2011",
                "value": "3488"
            },
            {
                "date": "2012",
                "value": "3499"
            },
            {
                "date": "2013",
                "value": "3485"
            }
        ],
        "Oceania": [
            {
                "date": "1961",
                "value": "3021"
            },
            {
                "date": "1962",
                "value": "3045"
            },
            {
                "date": "1963",
                "value": "3087"
            },
            {
                "date": "1964",
                "value": "3071"
            },
            {
                "date": "1965",
                "value": "3039"
            },
            {
                "date": "1966",
                "value": "3108"
            },
            {
                "date": "1967",
                "value": "3048"
            },
            {
                "date": "1968",
                "value": "3058"
            },
            {
                "date": "1969",
                "value": "3062"
            },
            {
                "date": "1970",
                "value": "3077"
            },
            {
                "date": "1971",
                "value": "3115"
            },
            {
                "date": "1972",
                "value": "3145"
            },
            {
                "date": "1973",
                "value": "3055"
            },
            {
                "date": "1974",
                "value": "2992"
            },
            {
                "date": "1975",
                "value": "3055"
            },
            {
                "date": "1976",
                "value": "3086"
            },
            {
                "date": "1977",
                "value": "3035"
            },
            {
                "date": "1978",
                "value": "3000"
            },
            {
                "date": "1979",
                "value": "2980"
            },
            {
                "date": "1980",
                "value": "3020"
            },
            {
                "date": "1981",
                "value": "3015"
            },
            {
                "date": "1982",
                "value": "3055"
            },
            {
                "date": "1983",
                "value": "2987"
            },
            {
                "date": "1984",
                "value": "3039"
            },
            {
                "date": "1985",
                "value": "3064"
            },
            {
                "date": "1986",
                "value": "3051"
            },
            {
                "date": "1987",
                "value": "3073"
            },
            {
                "date": "1988",
                "value": "3071"
            },
            {
                "date": "1989",
                "value": "3077"
            },
            {
                "date": "1990",
                "value": "3139"
            },
            {
                "date": "1991",
                "value": "3092"
            },
            {
                "date": "1992",
                "value": "3092"
            },
            {
                "date": "1993",
                "value": "3037"
            },
            {
                "date": "1994",
                "value": "3038"
            },
            {
                "date": "1995",
                "value": "3078"
            },
            {
                "date": "1996",
                "value": "3062"
            },
            {
                "date": "1997",
                "value": "3084"
            },
            {
                "date": "1998",
                "value": "3019"
            },
            {
                "date": "1999",
                "value": "3014"
            },
            {
                "date": "2000",
                "value": "2995"
            },
            {
                "date": "2001",
                "value": "3032"
            },
            {
                "date": "2002",
                "value": "3057"
            },
            {
                "date": "2003",
                "value": "3078"
            },
            {
                "date": "2004",
                "value": "3044"
            },
            {
                "date": "2005",
                "value": "3086"
            },
            {
                "date": "2006",
                "value": "3126"
            },
            {
                "date": "2007",
                "value": "3161"
            },
            {
                "date": "2008",
                "value": "3168"
            },
            {
                "date": "2009",
                "value": "3162"
            },
            {
                "date": "2010",
                "value": "3169"
            },
            {
                "date": "2011",
                "value": "3187"
            },
            {
                "date": "2012",
                "value": "3201"
            },
            {
                "date": "2013",
                "value": "3216"
            }
        ],
        "Oman": [
            {
                "date": "1990",
                "value": "2345"
            },
            {
                "date": "1991",
                "value": "2333"
            },
            {
                "date": "1992",
                "value": "2410"
            },
            {
                "date": "1993",
                "value": "2319"
            },
            {
                "date": "1994",
                "value": "2397"
            },
            {
                "date": "1995",
                "value": "2362"
            },
            {
                "date": "1996",
                "value": "2399"
            },
            {
                "date": "1997",
                "value": "2358"
            },
            {
                "date": "1998",
                "value": "2544"
            },
            {
                "date": "1999",
                "value": "2627"
            },
            {
                "date": "2000",
                "value": "2591"
            },
            {
                "date": "2001",
                "value": "2684"
            },
            {
                "date": "2002",
                "value": "2626"
            },
            {
                "date": "2003",
                "value": "2631"
            },
            {
                "date": "2004",
                "value": "2664"
            },
            {
                "date": "2005",
                "value": "2718"
            },
            {
                "date": "2006",
                "value": "2768"
            },
            {
                "date": "2007",
                "value": "2833"
            },
            {
                "date": "2008",
                "value": "2944"
            },
            {
                "date": "2009",
                "value": "3026"
            },
            {
                "date": "2010",
                "value": "3058"
            },
            {
                "date": "2011",
                "value": "3077"
            },
            {
                "date": "2012",
                "value": "3115"
            },
            {
                "date": "2013",
                "value": "3143"
            }
        ],
        "Pakistan": [
            {
                "date": "1961",
                "value": "1884"
            },
            {
                "date": "1962",
                "value": "1949"
            },
            {
                "date": "1963",
                "value": "1965"
            },
            {
                "date": "1964",
                "value": "2108"
            },
            {
                "date": "1965",
                "value": "2210"
            },
            {
                "date": "1966",
                "value": "2114"
            },
            {
                "date": "1967",
                "value": "2115"
            },
            {
                "date": "1968",
                "value": "2066"
            },
            {
                "date": "1969",
                "value": "2377"
            },
            {
                "date": "1970",
                "value": "2373"
            },
            {
                "date": "1971",
                "value": "2292"
            },
            {
                "date": "1972",
                "value": "2353"
            },
            {
                "date": "1973",
                "value": "2334"
            },
            {
                "date": "1974",
                "value": "2334"
            },
            {
                "date": "1975",
                "value": "2245"
            },
            {
                "date": "1976",
                "value": "2262"
            },
            {
                "date": "1977",
                "value": "2275"
            },
            {
                "date": "1978",
                "value": "2344"
            },
            {
                "date": "1979",
                "value": "2292"
            },
            {
                "date": "1980",
                "value": "2206"
            },
            {
                "date": "1981",
                "value": "2187"
            },
            {
                "date": "1982",
                "value": "2251"
            },
            {
                "date": "1983",
                "value": "2240"
            },
            {
                "date": "1984",
                "value": "2254"
            },
            {
                "date": "1985",
                "value": "2188"
            },
            {
                "date": "1986",
                "value": "2180"
            },
            {
                "date": "1987",
                "value": "2237"
            },
            {
                "date": "1988",
                "value": "2186"
            },
            {
                "date": "1989",
                "value": "2377"
            },
            {
                "date": "1990",
                "value": "2342"
            },
            {
                "date": "1991",
                "value": "2224"
            },
            {
                "date": "1992",
                "value": "2325"
            },
            {
                "date": "1993",
                "value": "2349"
            },
            {
                "date": "1994",
                "value": "2398"
            },
            {
                "date": "1995",
                "value": "2389"
            },
            {
                "date": "1996",
                "value": "2406"
            },
            {
                "date": "1997",
                "value": "2402"
            },
            {
                "date": "1998",
                "value": "2371"
            },
            {
                "date": "1999",
                "value": "2422"
            },
            {
                "date": "2000",
                "value": "2398"
            },
            {
                "date": "2001",
                "value": "2312"
            },
            {
                "date": "2002",
                "value": "2255"
            },
            {
                "date": "2003",
                "value": "2312"
            },
            {
                "date": "2004",
                "value": "2340"
            },
            {
                "date": "2005",
                "value": "2359"
            },
            {
                "date": "2006",
                "value": "2381"
            },
            {
                "date": "2007",
                "value": "2420"
            },
            {
                "date": "2008",
                "value": "2422"
            },
            {
                "date": "2009",
                "value": "2429"
            },
            {
                "date": "2010",
                "value": "2432"
            },
            {
                "date": "2011",
                "value": "2426"
            },
            {
                "date": "2012",
                "value": "2434"
            },
            {
                "date": "2013",
                "value": "2440"
            }
        ],
        "Panama": [
            {
                "date": "1961",
                "value": "2101"
            },
            {
                "date": "1962",
                "value": "2022"
            },
            {
                "date": "1963",
                "value": "2146"
            },
            {
                "date": "1964",
                "value": "2145"
            },
            {
                "date": "1965",
                "value": "2104"
            },
            {
                "date": "1966",
                "value": "2166"
            },
            {
                "date": "1967",
                "value": "2223"
            },
            {
                "date": "1968",
                "value": "2244"
            },
            {
                "date": "1969",
                "value": "2349"
            },
            {
                "date": "1970",
                "value": "2189"
            },
            {
                "date": "1971",
                "value": "2317"
            },
            {
                "date": "1972",
                "value": "2118"
            },
            {
                "date": "1973",
                "value": "2191"
            },
            {
                "date": "1974",
                "value": "2376"
            },
            {
                "date": "1975",
                "value": "2368"
            },
            {
                "date": "1976",
                "value": "2078"
            },
            {
                "date": "1977",
                "value": "2355"
            },
            {
                "date": "1978",
                "value": "2122"
            },
            {
                "date": "1979",
                "value": "2093"
            },
            {
                "date": "1980",
                "value": "2102"
            },
            {
                "date": "1981",
                "value": "2246"
            },
            {
                "date": "1982",
                "value": "2285"
            },
            {
                "date": "1983",
                "value": "2317"
            },
            {
                "date": "1984",
                "value": "2330"
            },
            {
                "date": "1985",
                "value": "2470"
            },
            {
                "date": "1986",
                "value": "2513"
            },
            {
                "date": "1987",
                "value": "2248"
            },
            {
                "date": "1988",
                "value": "2194"
            },
            {
                "date": "1989",
                "value": "2178"
            },
            {
                "date": "1990",
                "value": "2239"
            },
            {
                "date": "1991",
                "value": "2201"
            },
            {
                "date": "1992",
                "value": "2303"
            },
            {
                "date": "1993",
                "value": "2340"
            },
            {
                "date": "1994",
                "value": "2344"
            },
            {
                "date": "1995",
                "value": "2226"
            },
            {
                "date": "1996",
                "value": "2252"
            },
            {
                "date": "1997",
                "value": "2176"
            },
            {
                "date": "1998",
                "value": "2389"
            },
            {
                "date": "1999",
                "value": "2209"
            },
            {
                "date": "2000",
                "value": "2132"
            },
            {
                "date": "2001",
                "value": "2266"
            },
            {
                "date": "2002",
                "value": "2346"
            },
            {
                "date": "2003",
                "value": "2365"
            },
            {
                "date": "2004",
                "value": "2250"
            },
            {
                "date": "2005",
                "value": "2334"
            },
            {
                "date": "2006",
                "value": "2347"
            },
            {
                "date": "2007",
                "value": "2465"
            },
            {
                "date": "2008",
                "value": "2523"
            },
            {
                "date": "2009",
                "value": "2520"
            },
            {
                "date": "2010",
                "value": "2579"
            },
            {
                "date": "2011",
                "value": "2646"
            },
            {
                "date": "2012",
                "value": "2703"
            },
            {
                "date": "2013",
                "value": "2733"
            }
        ],
        "Paraguay": [
            {
                "date": "1961",
                "value": "2135"
            },
            {
                "date": "1962",
                "value": "2152"
            },
            {
                "date": "1963",
                "value": "2149"
            },
            {
                "date": "1964",
                "value": "2251"
            },
            {
                "date": "1965",
                "value": "2348"
            },
            {
                "date": "1966",
                "value": "2339"
            },
            {
                "date": "1967",
                "value": "2335"
            },
            {
                "date": "1968",
                "value": "2403"
            },
            {
                "date": "1969",
                "value": "2417"
            },
            {
                "date": "1970",
                "value": "2455"
            },
            {
                "date": "1971",
                "value": "2449"
            },
            {
                "date": "1972",
                "value": "2428"
            },
            {
                "date": "1973",
                "value": "2446"
            },
            {
                "date": "1974",
                "value": "2466"
            },
            {
                "date": "1975",
                "value": "2378"
            },
            {
                "date": "1976",
                "value": "2458"
            },
            {
                "date": "1977",
                "value": "2539"
            },
            {
                "date": "1978",
                "value": "2589"
            },
            {
                "date": "1979",
                "value": "2525"
            },
            {
                "date": "1980",
                "value": "2537"
            },
            {
                "date": "1981",
                "value": "2456"
            },
            {
                "date": "1982",
                "value": "2521"
            },
            {
                "date": "1983",
                "value": "2538"
            },
            {
                "date": "1984",
                "value": "2497"
            },
            {
                "date": "1985",
                "value": "2602"
            },
            {
                "date": "1986",
                "value": "2524"
            },
            {
                "date": "1987",
                "value": "2530"
            },
            {
                "date": "1988",
                "value": "2499"
            },
            {
                "date": "1989",
                "value": "2544"
            },
            {
                "date": "1990",
                "value": "2419"
            },
            {
                "date": "1991",
                "value": "2390"
            },
            {
                "date": "1992",
                "value": "2383"
            },
            {
                "date": "1993",
                "value": "2444"
            },
            {
                "date": "1994",
                "value": "2548"
            },
            {
                "date": "1995",
                "value": "2537"
            },
            {
                "date": "1996",
                "value": "2549"
            },
            {
                "date": "1997",
                "value": "2602"
            },
            {
                "date": "1998",
                "value": "2596"
            },
            {
                "date": "1999",
                "value": "2640"
            },
            {
                "date": "2000",
                "value": "2588"
            },
            {
                "date": "2001",
                "value": "2640"
            },
            {
                "date": "2002",
                "value": "2679"
            },
            {
                "date": "2003",
                "value": "2732"
            },
            {
                "date": "2004",
                "value": "2660"
            },
            {
                "date": "2005",
                "value": "2595"
            },
            {
                "date": "2006",
                "value": "2621"
            },
            {
                "date": "2007",
                "value": "2572"
            },
            {
                "date": "2008",
                "value": "2535"
            },
            {
                "date": "2009",
                "value": "2528"
            },
            {
                "date": "2010",
                "value": "2575"
            },
            {
                "date": "2011",
                "value": "2614"
            },
            {
                "date": "2012",
                "value": "2591"
            },
            {
                "date": "2013",
                "value": "2589"
            }
        ],
        "Peru": [
            {
                "date": "1946",
                "value": "1920"
            },
            {
                "date": "1948",
                "value": "2219"
            },
            {
                "date": "1961",
                "value": "2125"
            },
            {
                "date": "1962",
                "value": "2144"
            },
            {
                "date": "1963",
                "value": "1984"
            },
            {
                "date": "1964",
                "value": "2166"
            },
            {
                "date": "1965",
                "value": "2122"
            },
            {
                "date": "1966",
                "value": "2141"
            },
            {
                "date": "1967",
                "value": "2120"
            },
            {
                "date": "1968",
                "value": "2072"
            },
            {
                "date": "1969",
                "value": "2309"
            },
            {
                "date": "1970",
                "value": "2192"
            },
            {
                "date": "1971",
                "value": "2236"
            },
            {
                "date": "1972",
                "value": "2163"
            },
            {
                "date": "1973",
                "value": "2104"
            },
            {
                "date": "1974",
                "value": "2121"
            },
            {
                "date": "1975",
                "value": "2188"
            },
            {
                "date": "1976",
                "value": "2126"
            },
            {
                "date": "1977",
                "value": "2067"
            },
            {
                "date": "1978",
                "value": "1917"
            },
            {
                "date": "1979",
                "value": "2051"
            },
            {
                "date": "1980",
                "value": "2041"
            },
            {
                "date": "1981",
                "value": "2177"
            },
            {
                "date": "1982",
                "value": "2156"
            },
            {
                "date": "1983",
                "value": "2186"
            },
            {
                "date": "1984",
                "value": "1984"
            },
            {
                "date": "1985",
                "value": "2059"
            },
            {
                "date": "1986",
                "value": "2233"
            },
            {
                "date": "1987",
                "value": "2238"
            },
            {
                "date": "1988",
                "value": "2249"
            },
            {
                "date": "1989",
                "value": "2143"
            },
            {
                "date": "1990",
                "value": "2022"
            },
            {
                "date": "1991",
                "value": "2180"
            },
            {
                "date": "1992",
                "value": "2138"
            },
            {
                "date": "1993",
                "value": "2160"
            },
            {
                "date": "1994",
                "value": "2206"
            },
            {
                "date": "1995",
                "value": "2202"
            },
            {
                "date": "1996",
                "value": "2274"
            },
            {
                "date": "1997",
                "value": "2321"
            },
            {
                "date": "1998",
                "value": "2258"
            },
            {
                "date": "1999",
                "value": "2273"
            },
            {
                "date": "2000",
                "value": "2366"
            },
            {
                "date": "2001",
                "value": "2322"
            },
            {
                "date": "2002",
                "value": "2337"
            },
            {
                "date": "2003",
                "value": "2278"
            },
            {
                "date": "2004",
                "value": "2296"
            },
            {
                "date": "2005",
                "value": "2408"
            },
            {
                "date": "2006",
                "value": "2433"
            },
            {
                "date": "2007",
                "value": "2461"
            },
            {
                "date": "2008",
                "value": "2525"
            },
            {
                "date": "2009",
                "value": "2562"
            },
            {
                "date": "2010",
                "value": "2617"
            },
            {
                "date": "2011",
                "value": "2632"
            },
            {
                "date": "2012",
                "value": "2682"
            },
            {
                "date": "2013",
                "value": "2700"
            }
        ],
        "Philippines": [
            {
                "date": "1961",
                "value": "1788"
            },
            {
                "date": "1962",
                "value": "1728"
            },
            {
                "date": "1963",
                "value": "1798"
            },
            {
                "date": "1964",
                "value": "1812"
            },
            {
                "date": "1965",
                "value": "1876"
            },
            {
                "date": "1966",
                "value": "1840"
            },
            {
                "date": "1967",
                "value": "1865"
            },
            {
                "date": "1968",
                "value": "1844"
            },
            {
                "date": "1969",
                "value": "1852"
            },
            {
                "date": "1970",
                "value": "1811"
            },
            {
                "date": "1971",
                "value": "1837"
            },
            {
                "date": "1972",
                "value": "1899"
            },
            {
                "date": "1973",
                "value": "1874"
            },
            {
                "date": "1974",
                "value": "1971"
            },
            {
                "date": "1975",
                "value": "2009"
            },
            {
                "date": "1976",
                "value": "2061"
            },
            {
                "date": "1977",
                "value": "2122"
            },
            {
                "date": "1978",
                "value": "2166"
            },
            {
                "date": "1979",
                "value": "2177"
            },
            {
                "date": "1980",
                "value": "2273"
            },
            {
                "date": "1981",
                "value": "2221"
            },
            {
                "date": "1982",
                "value": "2203"
            },
            {
                "date": "1983",
                "value": "2043"
            },
            {
                "date": "1984",
                "value": "2141"
            },
            {
                "date": "1985",
                "value": "2109"
            },
            {
                "date": "1986",
                "value": "2123"
            },
            {
                "date": "1987",
                "value": "2142"
            },
            {
                "date": "1988",
                "value": "2140"
            },
            {
                "date": "1989",
                "value": "2213"
            },
            {
                "date": "1990",
                "value": "2257"
            },
            {
                "date": "1991",
                "value": "2214"
            },
            {
                "date": "1992",
                "value": "2246"
            },
            {
                "date": "1993",
                "value": "2207"
            },
            {
                "date": "1994",
                "value": "2313"
            },
            {
                "date": "1995",
                "value": "2289"
            },
            {
                "date": "1996",
                "value": "2364"
            },
            {
                "date": "1997",
                "value": "2343"
            },
            {
                "date": "1998",
                "value": "2292"
            },
            {
                "date": "1999",
                "value": "2359"
            },
            {
                "date": "2000",
                "value": "2392"
            },
            {
                "date": "2001",
                "value": "2373"
            },
            {
                "date": "2002",
                "value": "2393"
            },
            {
                "date": "2003",
                "value": "2391"
            },
            {
                "date": "2004",
                "value": "2461"
            },
            {
                "date": "2005",
                "value": "2472"
            },
            {
                "date": "2006",
                "value": "2514"
            },
            {
                "date": "2007",
                "value": "2570"
            },
            {
                "date": "2008",
                "value": "2583"
            },
            {
                "date": "2009",
                "value": "2595"
            },
            {
                "date": "2010",
                "value": "2582"
            },
            {
                "date": "2011",
                "value": "2572"
            },
            {
                "date": "2012",
                "value": "2584"
            },
            {
                "date": "2013",
                "value": "2570"
            }
        ],
        "Poland": [
            {
                "date": "1948",
                "value": "2625"
            },
            {
                "date": "1961",
                "value": "3270"
            },
            {
                "date": "1962",
                "value": "3273"
            },
            {
                "date": "1963",
                "value": "3291"
            },
            {
                "date": "1964",
                "value": "3304"
            },
            {
                "date": "1965",
                "value": "3358"
            },
            {
                "date": "1966",
                "value": "3380"
            },
            {
                "date": "1967",
                "value": "3376"
            },
            {
                "date": "1968",
                "value": "3391"
            },
            {
                "date": "1969",
                "value": "3405"
            },
            {
                "date": "1970",
                "value": "3422"
            },
            {
                "date": "1971",
                "value": "3429"
            },
            {
                "date": "1972",
                "value": "3469"
            },
            {
                "date": "1973",
                "value": "3504"
            },
            {
                "date": "1974",
                "value": "3515"
            },
            {
                "date": "1975",
                "value": "3539"
            },
            {
                "date": "1976",
                "value": "3589"
            },
            {
                "date": "1977",
                "value": "3579"
            },
            {
                "date": "1978",
                "value": "3585"
            },
            {
                "date": "1979",
                "value": "3586"
            },
            {
                "date": "1980",
                "value": "3577"
            },
            {
                "date": "1981",
                "value": "3362"
            },
            {
                "date": "1982",
                "value": "3280"
            },
            {
                "date": "1983",
                "value": "3357"
            },
            {
                "date": "1984",
                "value": "3339"
            },
            {
                "date": "1985",
                "value": "3360"
            },
            {
                "date": "1986",
                "value": "3426"
            },
            {
                "date": "1987",
                "value": "3454"
            },
            {
                "date": "1988",
                "value": "3474"
            },
            {
                "date": "1989",
                "value": "3489"
            },
            {
                "date": "1990",
                "value": "3347"
            },
            {
                "date": "1991",
                "value": "3288"
            },
            {
                "date": "1992",
                "value": "3361"
            },
            {
                "date": "1993",
                "value": "3425"
            },
            {
                "date": "1994",
                "value": "3300"
            },
            {
                "date": "1995",
                "value": "3320"
            },
            {
                "date": "1996",
                "value": "3340"
            },
            {
                "date": "1997",
                "value": "3316"
            },
            {
                "date": "1998",
                "value": "3378"
            },
            {
                "date": "1999",
                "value": "3384"
            },
            {
                "date": "2000",
                "value": "3419"
            },
            {
                "date": "2001",
                "value": "3421"
            },
            {
                "date": "2002",
                "value": "3429"
            },
            {
                "date": "2003",
                "value": "3421"
            },
            {
                "date": "2004",
                "value": "3380"
            },
            {
                "date": "2005",
                "value": "3370"
            },
            {
                "date": "2006",
                "value": "3353"
            },
            {
                "date": "2007",
                "value": "3364"
            },
            {
                "date": "2008",
                "value": "3346"
            },
            {
                "date": "2009",
                "value": "3418"
            },
            {
                "date": "2010",
                "value": "3413"
            },
            {
                "date": "2011",
                "value": "3443"
            },
            {
                "date": "2012",
                "value": "3443"
            },
            {
                "date": "2013",
                "value": "3451"
            }
        ],
        "Portugal": [
            {
                "date": "1948",
                "value": "2184"
            },
            {
                "date": "1961",
                "value": "2476"
            },
            {
                "date": "1962",
                "value": "2574"
            },
            {
                "date": "1963",
                "value": "2680"
            },
            {
                "date": "1964",
                "value": "2550"
            },
            {
                "date": "1965",
                "value": "2835"
            },
            {
                "date": "1966",
                "value": "2776"
            },
            {
                "date": "1967",
                "value": "2947"
            },
            {
                "date": "1968",
                "value": "2979"
            },
            {
                "date": "1969",
                "value": "3061"
            },
            {
                "date": "1970",
                "value": "3005"
            },
            {
                "date": "1971",
                "value": "3025"
            },
            {
                "date": "1972",
                "value": "2997"
            },
            {
                "date": "1973",
                "value": "2984"
            },
            {
                "date": "1974",
                "value": "3050"
            },
            {
                "date": "1975",
                "value": "3027"
            },
            {
                "date": "1976",
                "value": "3005"
            },
            {
                "date": "1977",
                "value": "2979"
            },
            {
                "date": "1978",
                "value": "2826"
            },
            {
                "date": "1979",
                "value": "2765"
            },
            {
                "date": "1980",
                "value": "2786"
            },
            {
                "date": "1981",
                "value": "2778"
            },
            {
                "date": "1982",
                "value": "2823"
            },
            {
                "date": "1983",
                "value": "2838"
            },
            {
                "date": "1984",
                "value": "2869"
            },
            {
                "date": "1985",
                "value": "3005"
            },
            {
                "date": "1986",
                "value": "3155"
            },
            {
                "date": "1987",
                "value": "3320"
            },
            {
                "date": "1988",
                "value": "3329"
            },
            {
                "date": "1989",
                "value": "3357"
            },
            {
                "date": "1990",
                "value": "3403"
            },
            {
                "date": "1991",
                "value": "3429"
            },
            {
                "date": "1992",
                "value": "3405"
            },
            {
                "date": "1993",
                "value": "3460"
            },
            {
                "date": "1994",
                "value": "3489"
            },
            {
                "date": "1995",
                "value": "3456"
            },
            {
                "date": "1996",
                "value": "3507"
            },
            {
                "date": "1997",
                "value": "3388"
            },
            {
                "date": "1998",
                "value": "3508"
            },
            {
                "date": "1999",
                "value": "3561"
            },
            {
                "date": "2000",
                "value": "3544"
            },
            {
                "date": "2001",
                "value": "3538"
            },
            {
                "date": "2002",
                "value": "3534"
            },
            {
                "date": "2003",
                "value": "3523"
            },
            {
                "date": "2004",
                "value": "3535"
            },
            {
                "date": "2005",
                "value": "3531"
            },
            {
                "date": "2006",
                "value": "3521"
            },
            {
                "date": "2007",
                "value": "3530"
            },
            {
                "date": "2008",
                "value": "3538"
            },
            {
                "date": "2009",
                "value": "3507"
            },
            {
                "date": "2010",
                "value": "3498"
            },
            {
                "date": "2011",
                "value": "3477"
            },
            {
                "date": "2012",
                "value": "3473"
            },
            {
                "date": "2013",
                "value": "3477"
            }
        ],
        "Romania": [
            {
                "date": "1961",
                "value": "2832"
            },
            {
                "date": "1962",
                "value": "2876"
            },
            {
                "date": "1963",
                "value": "2913"
            },
            {
                "date": "1964",
                "value": "2921"
            },
            {
                "date": "1965",
                "value": "2968"
            },
            {
                "date": "1966",
                "value": "3002"
            },
            {
                "date": "1967",
                "value": "2986"
            },
            {
                "date": "1968",
                "value": "2997"
            },
            {
                "date": "1969",
                "value": "3023"
            },
            {
                "date": "1970",
                "value": "2863"
            },
            {
                "date": "1971",
                "value": "2974"
            },
            {
                "date": "1972",
                "value": "3031"
            },
            {
                "date": "1973",
                "value": "3066"
            },
            {
                "date": "1974",
                "value": "3144"
            },
            {
                "date": "1975",
                "value": "3065"
            },
            {
                "date": "1976",
                "value": "3235"
            },
            {
                "date": "1977",
                "value": "3222"
            },
            {
                "date": "1978",
                "value": "3257"
            },
            {
                "date": "1979",
                "value": "3193"
            },
            {
                "date": "1980",
                "value": "3156"
            },
            {
                "date": "1981",
                "value": "3137"
            },
            {
                "date": "1982",
                "value": "2971"
            },
            {
                "date": "1983",
                "value": "2998"
            },
            {
                "date": "1984",
                "value": "3073"
            },
            {
                "date": "1985",
                "value": "3030"
            },
            {
                "date": "1986",
                "value": "2938"
            },
            {
                "date": "1987",
                "value": "2901"
            },
            {
                "date": "1988",
                "value": "2919"
            },
            {
                "date": "1989",
                "value": "2919"
            },
            {
                "date": "1990",
                "value": "3127"
            },
            {
                "date": "1991",
                "value": "2922"
            },
            {
                "date": "1992",
                "value": "2835"
            },
            {
                "date": "1993",
                "value": "3000"
            },
            {
                "date": "1994",
                "value": "2931"
            },
            {
                "date": "1995",
                "value": "3027"
            },
            {
                "date": "1996",
                "value": "3056"
            },
            {
                "date": "1997",
                "value": "3046"
            },
            {
                "date": "1998",
                "value": "3068"
            },
            {
                "date": "1999",
                "value": "3081"
            },
            {
                "date": "2000",
                "value": "3141"
            },
            {
                "date": "2001",
                "value": "3239"
            },
            {
                "date": "2002",
                "value": "3319"
            },
            {
                "date": "2003",
                "value": "3365"
            },
            {
                "date": "2004",
                "value": "3354"
            },
            {
                "date": "2005",
                "value": "3396"
            },
            {
                "date": "2006",
                "value": "3430"
            },
            {
                "date": "2007",
                "value": "3375"
            },
            {
                "date": "2008",
                "value": "3402"
            },
            {
                "date": "2009",
                "value": "3379"
            },
            {
                "date": "2010",
                "value": "3325"
            },
            {
                "date": "2011",
                "value": "3339"
            },
            {
                "date": "2012",
                "value": "3341"
            },
            {
                "date": "2013",
                "value": "3358"
            }
        ],
        "Russia": [
            {
                "date": "1961",
                "value": "3095"
            },
            {
                "date": "1962",
                "value": "3157"
            },
            {
                "date": "1963",
                "value": "3204"
            },
            {
                "date": "1964",
                "value": "3206"
            },
            {
                "date": "1965",
                "value": "3214"
            },
            {
                "date": "1966",
                "value": "3209"
            },
            {
                "date": "1967",
                "value": "3240"
            },
            {
                "date": "1968",
                "value": "3300"
            },
            {
                "date": "1969",
                "value": "3300"
            },
            {
                "date": "1970",
                "value": "3355"
            },
            {
                "date": "1971",
                "value": "3331"
            },
            {
                "date": "1972",
                "value": "3284"
            },
            {
                "date": "1973",
                "value": "3325"
            },
            {
                "date": "1974",
                "value": "3357"
            },
            {
                "date": "1975",
                "value": "3341"
            },
            {
                "date": "1976",
                "value": "3404"
            },
            {
                "date": "1977",
                "value": "3366"
            },
            {
                "date": "1978",
                "value": "3387"
            },
            {
                "date": "1979",
                "value": "3384"
            },
            {
                "date": "1980",
                "value": "3378"
            },
            {
                "date": "1981",
                "value": "3355"
            },
            {
                "date": "1982",
                "value": "3377"
            },
            {
                "date": "1983",
                "value": "3386"
            },
            {
                "date": "1984",
                "value": "3388"
            },
            {
                "date": "1985",
                "value": "3380"
            },
            {
                "date": "1986",
                "value": "3364"
            },
            {
                "date": "1987",
                "value": "3404"
            },
            {
                "date": "1988",
                "value": "3395"
            },
            {
                "date": "1989",
                "value": "3348"
            },
            {
                "date": "1990",
                "value": "3372"
            },
            {
                "date": "1991",
                "value": "3032"
            },
            {
                "date": "1992",
                "value": "2925"
            },
            {
                "date": "1993",
                "value": "2972"
            },
            {
                "date": "1994",
                "value": "2918"
            },
            {
                "date": "1995",
                "value": "2893"
            },
            {
                "date": "1996",
                "value": "2787"
            },
            {
                "date": "1997",
                "value": "2856"
            },
            {
                "date": "1998",
                "value": "2863"
            },
            {
                "date": "1999",
                "value": "2889"
            },
            {
                "date": "2000",
                "value": "2877"
            },
            {
                "date": "2001",
                "value": "2954"
            },
            {
                "date": "2002",
                "value": "3025"
            },
            {
                "date": "2003",
                "value": "3064"
            },
            {
                "date": "2004",
                "value": "3113"
            },
            {
                "date": "2005",
                "value": "3204"
            },
            {
                "date": "2006",
                "value": "3247"
            },
            {
                "date": "2007",
                "value": "3309"
            },
            {
                "date": "2008",
                "value": "3312"
            },
            {
                "date": "2009",
                "value": "3273"
            },
            {
                "date": "2010",
                "value": "3302"
            },
            {
                "date": "2011",
                "value": "3331"
            },
            {
                "date": "2012",
                "value": "3366"
            },
            {
                "date": "2013",
                "value": "3361"
            }
        ],
        "Rwanda": [
            {
                "date": "1961",
                "value": "1790"
            },
            {
                "date": "1962",
                "value": "1949"
            },
            {
                "date": "1963",
                "value": "1877"
            },
            {
                "date": "1964",
                "value": "1901"
            },
            {
                "date": "1965",
                "value": "1929"
            },
            {
                "date": "1966",
                "value": "2073"
            },
            {
                "date": "1967",
                "value": "2275"
            },
            {
                "date": "1968",
                "value": "2180"
            },
            {
                "date": "1969",
                "value": "2263"
            },
            {
                "date": "1970",
                "value": "2289"
            },
            {
                "date": "1971",
                "value": "2256"
            },
            {
                "date": "1972",
                "value": "2177"
            },
            {
                "date": "1973",
                "value": "2180"
            },
            {
                "date": "1974",
                "value": "2136"
            },
            {
                "date": "1975",
                "value": "2298"
            },
            {
                "date": "1976",
                "value": "2341"
            },
            {
                "date": "1977",
                "value": "2359"
            },
            {
                "date": "1978",
                "value": "2335"
            },
            {
                "date": "1979",
                "value": "2369"
            },
            {
                "date": "1980",
                "value": "2357"
            },
            {
                "date": "1981",
                "value": "2366"
            },
            {
                "date": "1982",
                "value": "2365"
            },
            {
                "date": "1983",
                "value": "2343"
            },
            {
                "date": "1984",
                "value": "2235"
            },
            {
                "date": "1985",
                "value": "2309"
            },
            {
                "date": "1986",
                "value": "2162"
            },
            {
                "date": "1987",
                "value": "2078"
            },
            {
                "date": "1988",
                "value": "1934"
            },
            {
                "date": "1989",
                "value": "1964"
            },
            {
                "date": "1990",
                "value": "1819"
            },
            {
                "date": "1991",
                "value": "1951"
            },
            {
                "date": "1992",
                "value": "1891"
            },
            {
                "date": "1993",
                "value": "1938"
            },
            {
                "date": "1994",
                "value": "1862"
            },
            {
                "date": "1995",
                "value": "1814"
            },
            {
                "date": "1996",
                "value": "1771"
            },
            {
                "date": "1997",
                "value": "1723"
            },
            {
                "date": "1998",
                "value": "1739"
            },
            {
                "date": "1999",
                "value": "1739"
            },
            {
                "date": "2000",
                "value": "1857"
            },
            {
                "date": "2001",
                "value": "1912"
            },
            {
                "date": "2002",
                "value": "2094"
            },
            {
                "date": "2003",
                "value": "2004"
            },
            {
                "date": "2004",
                "value": "1969"
            },
            {
                "date": "2005",
                "value": "2037"
            },
            {
                "date": "2006",
                "value": "2044"
            },
            {
                "date": "2007",
                "value": "2053"
            },
            {
                "date": "2008",
                "value": "2101"
            },
            {
                "date": "2009",
                "value": "2196"
            },
            {
                "date": "2010",
                "value": "2198"
            },
            {
                "date": "2011",
                "value": "2213"
            },
            {
                "date": "2012",
                "value": "2270"
            },
            {
                "date": "2013",
                "value": "2228"
            }
        ],
        "Saint Kitts and Nevis": [
            {
                "date": "1961",
                "value": "1717"
            },
            {
                "date": "1962",
                "value": "1782"
            },
            {
                "date": "1963",
                "value": "1815"
            },
            {
                "date": "1964",
                "value": "1883"
            },
            {
                "date": "1965",
                "value": "1931"
            },
            {
                "date": "1966",
                "value": "1960"
            },
            {
                "date": "1967",
                "value": "2004"
            },
            {
                "date": "1968",
                "value": "2042"
            },
            {
                "date": "1969",
                "value": "2001"
            },
            {
                "date": "1970",
                "value": "2077"
            },
            {
                "date": "1971",
                "value": "2028"
            },
            {
                "date": "1972",
                "value": "2176"
            },
            {
                "date": "1973",
                "value": "2177"
            },
            {
                "date": "1974",
                "value": "2284"
            },
            {
                "date": "1975",
                "value": "2211"
            },
            {
                "date": "1976",
                "value": "2210"
            },
            {
                "date": "1977",
                "value": "2227"
            },
            {
                "date": "1978",
                "value": "2253"
            },
            {
                "date": "1979",
                "value": "2318"
            },
            {
                "date": "1980",
                "value": "2368"
            },
            {
                "date": "1981",
                "value": "2274"
            },
            {
                "date": "1982",
                "value": "2280"
            },
            {
                "date": "1983",
                "value": "2333"
            },
            {
                "date": "1984",
                "value": "2454"
            },
            {
                "date": "1985",
                "value": "2623"
            },
            {
                "date": "1986",
                "value": "2631"
            },
            {
                "date": "1987",
                "value": "2684"
            },
            {
                "date": "1988",
                "value": "2725"
            },
            {
                "date": "1989",
                "value": "2634"
            },
            {
                "date": "1990",
                "value": "2498"
            },
            {
                "date": "1991",
                "value": "2518"
            },
            {
                "date": "1992",
                "value": "2506"
            },
            {
                "date": "1993",
                "value": "2408"
            },
            {
                "date": "1994",
                "value": "2432"
            },
            {
                "date": "1995",
                "value": "2493"
            },
            {
                "date": "1996",
                "value": "2514"
            },
            {
                "date": "1997",
                "value": "2415"
            },
            {
                "date": "1998",
                "value": "2399"
            },
            {
                "date": "1999",
                "value": "2384"
            },
            {
                "date": "2000",
                "value": "2514"
            },
            {
                "date": "2001",
                "value": "2539"
            },
            {
                "date": "2002",
                "value": "2514"
            },
            {
                "date": "2003",
                "value": "2463"
            },
            {
                "date": "2004",
                "value": "2466"
            },
            {
                "date": "2005",
                "value": "2406"
            },
            {
                "date": "2006",
                "value": "2427"
            },
            {
                "date": "2007",
                "value": "2454"
            },
            {
                "date": "2008",
                "value": "2513"
            },
            {
                "date": "2009",
                "value": "2492"
            },
            {
                "date": "2010",
                "value": "2487"
            },
            {
                "date": "2011",
                "value": "2470"
            },
            {
                "date": "2012",
                "value": "2477"
            },
            {
                "date": "2013",
                "value": "2492"
            }
        ],
        "Saint Lucia": [
            {
                "date": "1961",
                "value": "1688"
            },
            {
                "date": "1962",
                "value": "1747"
            },
            {
                "date": "1963",
                "value": "1700"
            },
            {
                "date": "1964",
                "value": "1780"
            },
            {
                "date": "1965",
                "value": "1747"
            },
            {
                "date": "1966",
                "value": "1805"
            },
            {
                "date": "1967",
                "value": "1768"
            },
            {
                "date": "1968",
                "value": "1819"
            },
            {
                "date": "1969",
                "value": "1837"
            },
            {
                "date": "1970",
                "value": "1904"
            },
            {
                "date": "1971",
                "value": "2027"
            },
            {
                "date": "1972",
                "value": "1960"
            },
            {
                "date": "1973",
                "value": "1937"
            },
            {
                "date": "1974",
                "value": "1907"
            },
            {
                "date": "1975",
                "value": "1897"
            },
            {
                "date": "1976",
                "value": "1949"
            },
            {
                "date": "1977",
                "value": "2137"
            },
            {
                "date": "1978",
                "value": "2216"
            },
            {
                "date": "1979",
                "value": "2256"
            },
            {
                "date": "1980",
                "value": "2184"
            },
            {
                "date": "1981",
                "value": "2261"
            },
            {
                "date": "1982",
                "value": "2267"
            },
            {
                "date": "1983",
                "value": "2256"
            },
            {
                "date": "1984",
                "value": "2399"
            },
            {
                "date": "1985",
                "value": "2426"
            },
            {
                "date": "1986",
                "value": "2463"
            },
            {
                "date": "1987",
                "value": "2500"
            },
            {
                "date": "1988",
                "value": "2408"
            },
            {
                "date": "1989",
                "value": "2454"
            },
            {
                "date": "1990",
                "value": "2497"
            },
            {
                "date": "1991",
                "value": "2568"
            },
            {
                "date": "1992",
                "value": "2687"
            },
            {
                "date": "1993",
                "value": "2682"
            },
            {
                "date": "1994",
                "value": "2727"
            },
            {
                "date": "1995",
                "value": "2669"
            },
            {
                "date": "1996",
                "value": "2672"
            },
            {
                "date": "1997",
                "value": "2735"
            },
            {
                "date": "1998",
                "value": "2684"
            },
            {
                "date": "1999",
                "value": "2708"
            },
            {
                "date": "2000",
                "value": "2709"
            },
            {
                "date": "2001",
                "value": "2610"
            },
            {
                "date": "2002",
                "value": "2677"
            },
            {
                "date": "2003",
                "value": "2640"
            },
            {
                "date": "2004",
                "value": "2649"
            },
            {
                "date": "2005",
                "value": "2653"
            },
            {
                "date": "2006",
                "value": "2631"
            },
            {
                "date": "2007",
                "value": "2589"
            },
            {
                "date": "2008",
                "value": "2555"
            },
            {
                "date": "2009",
                "value": "2581"
            },
            {
                "date": "2010",
                "value": "2596"
            },
            {
                "date": "2011",
                "value": "2583"
            },
            {
                "date": "2012",
                "value": "2579"
            },
            {
                "date": "2013",
                "value": "2595"
            }
        ],
        "Saint Vincent and the Grenadines": [
            {
                "date": "1961",
                "value": "1809"
            },
            {
                "date": "1962",
                "value": "1981"
            },
            {
                "date": "1963",
                "value": "1855"
            },
            {
                "date": "1964",
                "value": "1967"
            },
            {
                "date": "1965",
                "value": "2007"
            },
            {
                "date": "1966",
                "value": "2110"
            },
            {
                "date": "1967",
                "value": "2073"
            },
            {
                "date": "1968",
                "value": "2142"
            },
            {
                "date": "1969",
                "value": "2193"
            },
            {
                "date": "1970",
                "value": "2251"
            },
            {
                "date": "1971",
                "value": "2295"
            },
            {
                "date": "1972",
                "value": "2318"
            },
            {
                "date": "1973",
                "value": "2260"
            },
            {
                "date": "1974",
                "value": "2147"
            },
            {
                "date": "1975",
                "value": "2217"
            },
            {
                "date": "1976",
                "value": "2245"
            },
            {
                "date": "1977",
                "value": "2267"
            },
            {
                "date": "1978",
                "value": "2231"
            },
            {
                "date": "1979",
                "value": "2357"
            },
            {
                "date": "1980",
                "value": "2384"
            },
            {
                "date": "1981",
                "value": "2476"
            },
            {
                "date": "1982",
                "value": "2419"
            },
            {
                "date": "1983",
                "value": "2406"
            },
            {
                "date": "1984",
                "value": "2418"
            },
            {
                "date": "1985",
                "value": "2416"
            },
            {
                "date": "1986",
                "value": "2408"
            },
            {
                "date": "1987",
                "value": "2403"
            },
            {
                "date": "1988",
                "value": "2373"
            },
            {
                "date": "1989",
                "value": "2309"
            },
            {
                "date": "1990",
                "value": "2331"
            },
            {
                "date": "1991",
                "value": "2367"
            },
            {
                "date": "1992",
                "value": "2354"
            },
            {
                "date": "1993",
                "value": "2457"
            },
            {
                "date": "1994",
                "value": "2329"
            },
            {
                "date": "1995",
                "value": "2327"
            },
            {
                "date": "1996",
                "value": "2329"
            },
            {
                "date": "1997",
                "value": "2314"
            },
            {
                "date": "1998",
                "value": "2375"
            },
            {
                "date": "1999",
                "value": "2468"
            },
            {
                "date": "2000",
                "value": "2498"
            },
            {
                "date": "2001",
                "value": "2474"
            },
            {
                "date": "2002",
                "value": "2658"
            },
            {
                "date": "2003",
                "value": "2685"
            },
            {
                "date": "2004",
                "value": "2712"
            },
            {
                "date": "2005",
                "value": "2781"
            },
            {
                "date": "2006",
                "value": "2800"
            },
            {
                "date": "2007",
                "value": "2832"
            },
            {
                "date": "2008",
                "value": "2868"
            },
            {
                "date": "2009",
                "value": "2873"
            },
            {
                "date": "2010",
                "value": "2907"
            },
            {
                "date": "2011",
                "value": "2941"
            },
            {
                "date": "2012",
                "value": "2929"
            },
            {
                "date": "2013",
                "value": "2968"
            }
        ],
        "Samoa": [
            {
                "date": "1961",
                "value": "1977"
            },
            {
                "date": "1962",
                "value": "1981"
            },
            {
                "date": "1963",
                "value": "1971"
            },
            {
                "date": "1964",
                "value": "2005"
            },
            {
                "date": "1965",
                "value": "1996"
            },
            {
                "date": "1966",
                "value": "1981"
            },
            {
                "date": "1967",
                "value": "2039"
            },
            {
                "date": "1968",
                "value": "2102"
            },
            {
                "date": "1969",
                "value": "2158"
            },
            {
                "date": "1970",
                "value": "2222"
            },
            {
                "date": "1971",
                "value": "2253"
            },
            {
                "date": "1972",
                "value": "2252"
            },
            {
                "date": "1973",
                "value": "2281"
            },
            {
                "date": "1974",
                "value": "2339"
            },
            {
                "date": "1975",
                "value": "2402"
            },
            {
                "date": "1976",
                "value": "2447"
            },
            {
                "date": "1977",
                "value": "2460"
            },
            {
                "date": "1978",
                "value": "2442"
            },
            {
                "date": "1979",
                "value": "2470"
            },
            {
                "date": "1980",
                "value": "2431"
            },
            {
                "date": "1981",
                "value": "2496"
            },
            {
                "date": "1982",
                "value": "2513"
            },
            {
                "date": "1983",
                "value": "2501"
            },
            {
                "date": "1984",
                "value": "2478"
            },
            {
                "date": "1985",
                "value": "2690"
            },
            {
                "date": "1986",
                "value": "2579"
            },
            {
                "date": "1987",
                "value": "2667"
            },
            {
                "date": "1988",
                "value": "2697"
            },
            {
                "date": "1989",
                "value": "2624"
            },
            {
                "date": "1990",
                "value": "2580"
            },
            {
                "date": "1991",
                "value": "2571"
            },
            {
                "date": "1992",
                "value": "2442"
            },
            {
                "date": "1993",
                "value": "2344"
            },
            {
                "date": "1994",
                "value": "2397"
            },
            {
                "date": "1995",
                "value": "2465"
            },
            {
                "date": "1996",
                "value": "2503"
            },
            {
                "date": "1997",
                "value": "2553"
            },
            {
                "date": "1998",
                "value": "2614"
            },
            {
                "date": "1999",
                "value": "2708"
            },
            {
                "date": "2000",
                "value": "2772"
            },
            {
                "date": "2001",
                "value": "2821"
            },
            {
                "date": "2002",
                "value": "2817"
            },
            {
                "date": "2003",
                "value": "2830"
            },
            {
                "date": "2004",
                "value": "2882"
            },
            {
                "date": "2005",
                "value": "2894"
            },
            {
                "date": "2006",
                "value": "2860"
            },
            {
                "date": "2007",
                "value": "2851"
            },
            {
                "date": "2008",
                "value": "2914"
            },
            {
                "date": "2009",
                "value": "2881"
            },
            {
                "date": "2010",
                "value": "2911"
            },
            {
                "date": "2011",
                "value": "2883"
            },
            {
                "date": "2012",
                "value": "2962"
            },
            {
                "date": "2013",
                "value": "2960"
            }
        ],
        "Sao Tome and Principe": [
            {
                "date": "1961",
                "value": "2265"
            },
            {
                "date": "1962",
                "value": "2225"
            },
            {
                "date": "1963",
                "value": "2232"
            },
            {
                "date": "1964",
                "value": "2289"
            },
            {
                "date": "1965",
                "value": "2259"
            },
            {
                "date": "1966",
                "value": "2228"
            },
            {
                "date": "1967",
                "value": "2220"
            },
            {
                "date": "1968",
                "value": "2194"
            },
            {
                "date": "1969",
                "value": "2140"
            },
            {
                "date": "1970",
                "value": "2116"
            },
            {
                "date": "1971",
                "value": "2080"
            },
            {
                "date": "1972",
                "value": "2049"
            },
            {
                "date": "1973",
                "value": "2047"
            },
            {
                "date": "1974",
                "value": "1880"
            },
            {
                "date": "1975",
                "value": "1832"
            },
            {
                "date": "1976",
                "value": "1928"
            },
            {
                "date": "1977",
                "value": "2057"
            },
            {
                "date": "1978",
                "value": "2055"
            },
            {
                "date": "1979",
                "value": "2004"
            },
            {
                "date": "1980",
                "value": "2057"
            },
            {
                "date": "1981",
                "value": "2051"
            },
            {
                "date": "1982",
                "value": "2026"
            },
            {
                "date": "1983",
                "value": "2081"
            },
            {
                "date": "1984",
                "value": "2100"
            },
            {
                "date": "1985",
                "value": "2077"
            },
            {
                "date": "1986",
                "value": "1935"
            },
            {
                "date": "1987",
                "value": "1918"
            },
            {
                "date": "1988",
                "value": "1986"
            },
            {
                "date": "1989",
                "value": "2144"
            },
            {
                "date": "1990",
                "value": "2214"
            },
            {
                "date": "1991",
                "value": "2228"
            },
            {
                "date": "1992",
                "value": "2185"
            },
            {
                "date": "1993",
                "value": "2193"
            },
            {
                "date": "1994",
                "value": "2229"
            },
            {
                "date": "1995",
                "value": "2109"
            },
            {
                "date": "1996",
                "value": "2167"
            },
            {
                "date": "1997",
                "value": "2187"
            },
            {
                "date": "1998",
                "value": "2220"
            },
            {
                "date": "1999",
                "value": "2238"
            },
            {
                "date": "2000",
                "value": "2379"
            },
            {
                "date": "2001",
                "value": "2404"
            },
            {
                "date": "2002",
                "value": "2460"
            },
            {
                "date": "2003",
                "value": "2506"
            },
            {
                "date": "2004",
                "value": "2513"
            },
            {
                "date": "2005",
                "value": "2546"
            },
            {
                "date": "2006",
                "value": "2554"
            },
            {
                "date": "2007",
                "value": "2511"
            },
            {
                "date": "2008",
                "value": "2466"
            },
            {
                "date": "2009",
                "value": "2435"
            },
            {
                "date": "2010",
                "value": "2368"
            },
            {
                "date": "2011",
                "value": "2331"
            },
            {
                "date": "2012",
                "value": "2338"
            },
            {
                "date": "2013",
                "value": "2400"
            }
        ],
        "Saudi Arabia": [
            {
                "date": "1961",
                "value": "1717"
            },
            {
                "date": "1962",
                "value": "1752"
            },
            {
                "date": "1963",
                "value": "1791"
            },
            {
                "date": "1964",
                "value": "1818"
            },
            {
                "date": "1965",
                "value": "1857"
            },
            {
                "date": "1966",
                "value": "1855"
            },
            {
                "date": "1967",
                "value": "1881"
            },
            {
                "date": "1968",
                "value": "1880"
            },
            {
                "date": "1969",
                "value": "1868"
            },
            {
                "date": "1970",
                "value": "1887"
            },
            {
                "date": "1971",
                "value": "1895"
            },
            {
                "date": "1972",
                "value": "1761"
            },
            {
                "date": "1973",
                "value": "1678"
            },
            {
                "date": "1974",
                "value": "1678"
            },
            {
                "date": "1975",
                "value": "1792"
            },
            {
                "date": "1976",
                "value": "1908"
            },
            {
                "date": "1977",
                "value": "2115"
            },
            {
                "date": "1978",
                "value": "2323"
            },
            {
                "date": "1979",
                "value": "2633"
            },
            {
                "date": "1980",
                "value": "2874"
            },
            {
                "date": "1981",
                "value": "2899"
            },
            {
                "date": "1982",
                "value": "2904"
            },
            {
                "date": "1983",
                "value": "2925"
            },
            {
                "date": "1984",
                "value": "2716"
            },
            {
                "date": "1985",
                "value": "2696"
            },
            {
                "date": "1986",
                "value": "2594"
            },
            {
                "date": "1987",
                "value": "2565"
            },
            {
                "date": "1988",
                "value": "2800"
            },
            {
                "date": "1989",
                "value": "2749"
            },
            {
                "date": "1990",
                "value": "2867"
            },
            {
                "date": "1991",
                "value": "2865"
            },
            {
                "date": "1992",
                "value": "2780"
            },
            {
                "date": "1993",
                "value": "2742"
            },
            {
                "date": "1994",
                "value": "2703"
            },
            {
                "date": "1995",
                "value": "2849"
            },
            {
                "date": "1996",
                "value": "2913"
            },
            {
                "date": "1997",
                "value": "2976"
            },
            {
                "date": "1998",
                "value": "3011"
            },
            {
                "date": "1999",
                "value": "3072"
            },
            {
                "date": "2000",
                "value": "3111"
            },
            {
                "date": "2001",
                "value": "3080"
            },
            {
                "date": "2002",
                "value": "3021"
            },
            {
                "date": "2003",
                "value": "3003"
            },
            {
                "date": "2004",
                "value": "2959"
            },
            {
                "date": "2005",
                "value": "2991"
            },
            {
                "date": "2006",
                "value": "3045"
            },
            {
                "date": "2007",
                "value": "3046"
            },
            {
                "date": "2008",
                "value": "3014"
            },
            {
                "date": "2009",
                "value": "3007"
            },
            {
                "date": "2010",
                "value": "3124"
            },
            {
                "date": "2011",
                "value": "3103"
            },
            {
                "date": "2012",
                "value": "3269"
            },
            {
                "date": "2013",
                "value": "3255"
            }
        ],
        "Senegal": [
            {
                "date": "1961",
                "value": "2290"
            },
            {
                "date": "1962",
                "value": "2312"
            },
            {
                "date": "1963",
                "value": "2627"
            },
            {
                "date": "1964",
                "value": "2538"
            },
            {
                "date": "1965",
                "value": "2508"
            },
            {
                "date": "1966",
                "value": "2430"
            },
            {
                "date": "1967",
                "value": "2436"
            },
            {
                "date": "1968",
                "value": "2367"
            },
            {
                "date": "1969",
                "value": "2356"
            },
            {
                "date": "1970",
                "value": "2194"
            },
            {
                "date": "1971",
                "value": "2187"
            },
            {
                "date": "1972",
                "value": "2154"
            },
            {
                "date": "1973",
                "value": "2236"
            },
            {
                "date": "1974",
                "value": "2262"
            },
            {
                "date": "1975",
                "value": "2204"
            },
            {
                "date": "1976",
                "value": "2203"
            },
            {
                "date": "1977",
                "value": "2063"
            },
            {
                "date": "1978",
                "value": "2083"
            },
            {
                "date": "1979",
                "value": "2189"
            },
            {
                "date": "1980",
                "value": "2182"
            },
            {
                "date": "1981",
                "value": "2427"
            },
            {
                "date": "1982",
                "value": "2370"
            },
            {
                "date": "1983",
                "value": "2198"
            },
            {
                "date": "1984",
                "value": "2308"
            },
            {
                "date": "1985",
                "value": "2423"
            },
            {
                "date": "1986",
                "value": "2322"
            },
            {
                "date": "1987",
                "value": "2104"
            },
            {
                "date": "1988",
                "value": "2106"
            },
            {
                "date": "1989",
                "value": "2104"
            },
            {
                "date": "1990",
                "value": "2237"
            },
            {
                "date": "1991",
                "value": "2240"
            },
            {
                "date": "1992",
                "value": "2108"
            },
            {
                "date": "1993",
                "value": "2227"
            },
            {
                "date": "1994",
                "value": "2149"
            },
            {
                "date": "1995",
                "value": "2167"
            },
            {
                "date": "1996",
                "value": "2107"
            },
            {
                "date": "1997",
                "value": "2114"
            },
            {
                "date": "1998",
                "value": "2107"
            },
            {
                "date": "1999",
                "value": "2154"
            },
            {
                "date": "2000",
                "value": "2164"
            },
            {
                "date": "2001",
                "value": "2174"
            },
            {
                "date": "2002",
                "value": "2144"
            },
            {
                "date": "2003",
                "value": "2223"
            },
            {
                "date": "2004",
                "value": "2248"
            },
            {
                "date": "2005",
                "value": "2237"
            },
            {
                "date": "2006",
                "value": "2310"
            },
            {
                "date": "2007",
                "value": "2342"
            },
            {
                "date": "2008",
                "value": "2439"
            },
            {
                "date": "2009",
                "value": "2446"
            },
            {
                "date": "2010",
                "value": "2435"
            },
            {
                "date": "2011",
                "value": "2428"
            },
            {
                "date": "2012",
                "value": "2443"
            },
            {
                "date": "2013",
                "value": "2456"
            }
        ],
        "Serbia": [
            {
                "date": "2006",
                "value": "2750"
            },
            {
                "date": "2007",
                "value": "2714"
            },
            {
                "date": "2008",
                "value": "2722"
            },
            {
                "date": "2009",
                "value": "2760"
            },
            {
                "date": "2010",
                "value": "2725"
            },
            {
                "date": "2011",
                "value": "2733"
            },
            {
                "date": "2012",
                "value": "2717"
            },
            {
                "date": "2013",
                "value": "2728"
            }
        ],
        "Serbia and Montenegro": [
            {
                "date": "1992",
                "value": "2985"
            },
            {
                "date": "1993",
                "value": "2899"
            },
            {
                "date": "1994",
                "value": "2765"
            },
            {
                "date": "1995",
                "value": "2879"
            },
            {
                "date": "1996",
                "value": "3037"
            },
            {
                "date": "1997",
                "value": "2990"
            },
            {
                "date": "1998",
                "value": "2891"
            },
            {
                "date": "1999",
                "value": "2837"
            },
            {
                "date": "2000",
                "value": "2651"
            },
            {
                "date": "2001",
                "value": "2614"
            },
            {
                "date": "2002",
                "value": "2631"
            },
            {
                "date": "2003",
                "value": "2695"
            },
            {
                "date": "2004",
                "value": "2701"
            },
            {
                "date": "2005",
                "value": "2702"
            }
        ],
        "Sierra Leone": [
            {
                "date": "1961",
                "value": "1816"
            },
            {
                "date": "1962",
                "value": "1851"
            },
            {
                "date": "1963",
                "value": "1969"
            },
            {
                "date": "1964",
                "value": "1989"
            },
            {
                "date": "1965",
                "value": "2158"
            },
            {
                "date": "1966",
                "value": "2253"
            },
            {
                "date": "1967",
                "value": "2302"
            },
            {
                "date": "1968",
                "value": "2266"
            },
            {
                "date": "1969",
                "value": "2276"
            },
            {
                "date": "1970",
                "value": "2299"
            },
            {
                "date": "1971",
                "value": "2263"
            },
            {
                "date": "1972",
                "value": "2231"
            },
            {
                "date": "1973",
                "value": "2188"
            },
            {
                "date": "1974",
                "value": "2147"
            },
            {
                "date": "1975",
                "value": "2158"
            },
            {
                "date": "1976",
                "value": "2115"
            },
            {
                "date": "1977",
                "value": "2141"
            },
            {
                "date": "1978",
                "value": "2127"
            },
            {
                "date": "1979",
                "value": "2109"
            },
            {
                "date": "1980",
                "value": "2130"
            },
            {
                "date": "1981",
                "value": "2113"
            },
            {
                "date": "1982",
                "value": "2104"
            },
            {
                "date": "1983",
                "value": "1985"
            },
            {
                "date": "1984",
                "value": "1958"
            },
            {
                "date": "1985",
                "value": "1973"
            },
            {
                "date": "1986",
                "value": "1993"
            },
            {
                "date": "1987",
                "value": "2001"
            },
            {
                "date": "1988",
                "value": "1955"
            },
            {
                "date": "1989",
                "value": "1966"
            },
            {
                "date": "1990",
                "value": "1950"
            },
            {
                "date": "1991",
                "value": "1991"
            },
            {
                "date": "1992",
                "value": "2018"
            },
            {
                "date": "1993",
                "value": "2038"
            },
            {
                "date": "1994",
                "value": "2116"
            },
            {
                "date": "1995",
                "value": "2136"
            },
            {
                "date": "1996",
                "value": "2177"
            },
            {
                "date": "1997",
                "value": "2203"
            },
            {
                "date": "1998",
                "value": "2153"
            },
            {
                "date": "1999",
                "value": "2069"
            },
            {
                "date": "2000",
                "value": "1990"
            },
            {
                "date": "2001",
                "value": "1995"
            },
            {
                "date": "2002",
                "value": "2045"
            },
            {
                "date": "2003",
                "value": "2032"
            },
            {
                "date": "2004",
                "value": "2024"
            },
            {
                "date": "2005",
                "value": "2082"
            },
            {
                "date": "2006",
                "value": "2155"
            },
            {
                "date": "2007",
                "value": "2194"
            },
            {
                "date": "2008",
                "value": "2197"
            },
            {
                "date": "2009",
                "value": "2251"
            },
            {
                "date": "2010",
                "value": "2275"
            },
            {
                "date": "2011",
                "value": "2335"
            },
            {
                "date": "2012",
                "value": "2374"
            },
            {
                "date": "2013",
                "value": "2404"
            }
        ],
        "Slovakia": [
            {
                "date": "1993",
                "value": "2790"
            },
            {
                "date": "1994",
                "value": "2979"
            },
            {
                "date": "1995",
                "value": "2835"
            },
            {
                "date": "1996",
                "value": "2906"
            },
            {
                "date": "1997",
                "value": "2904"
            },
            {
                "date": "1998",
                "value": "2939"
            },
            {
                "date": "1999",
                "value": "2883"
            },
            {
                "date": "2000",
                "value": "2778"
            },
            {
                "date": "2001",
                "value": "2785"
            },
            {
                "date": "2002",
                "value": "2800"
            },
            {
                "date": "2003",
                "value": "2790"
            },
            {
                "date": "2004",
                "value": "2817"
            },
            {
                "date": "2005",
                "value": "2841"
            },
            {
                "date": "2006",
                "value": "2833"
            },
            {
                "date": "2007",
                "value": "2794"
            },
            {
                "date": "2008",
                "value": "2864"
            },
            {
                "date": "2009",
                "value": "2899"
            },
            {
                "date": "2010",
                "value": "2950"
            },
            {
                "date": "2011",
                "value": "2941"
            },
            {
                "date": "2012",
                "value": "2901"
            },
            {
                "date": "2013",
                "value": "2944"
            }
        ],
        "Slovenia": [
            {
                "date": "1992",
                "value": "2591"
            },
            {
                "date": "1993",
                "value": "2781"
            },
            {
                "date": "1994",
                "value": "2840"
            },
            {
                "date": "1995",
                "value": "2907"
            },
            {
                "date": "1996",
                "value": "3048"
            },
            {
                "date": "1997",
                "value": "2927"
            },
            {
                "date": "1998",
                "value": "2845"
            },
            {
                "date": "1999",
                "value": "3062"
            },
            {
                "date": "2000",
                "value": "3056"
            },
            {
                "date": "2001",
                "value": "3055"
            },
            {
                "date": "2002",
                "value": "3081"
            },
            {
                "date": "2003",
                "value": "3113"
            },
            {
                "date": "2004",
                "value": "3158"
            },
            {
                "date": "2005",
                "value": "3071"
            },
            {
                "date": "2006",
                "value": "3120"
            },
            {
                "date": "2007",
                "value": "3143"
            },
            {
                "date": "2008",
                "value": "3156"
            },
            {
                "date": "2009",
                "value": "3179"
            },
            {
                "date": "2010",
                "value": "3176"
            },
            {
                "date": "2011",
                "value": "3165"
            },
            {
                "date": "2012",
                "value": "3160"
            },
            {
                "date": "2013",
                "value": "3168"
            }
        ],
        "Solomon Islands": [
            {
                "date": "1961",
                "value": "2203"
            },
            {
                "date": "1962",
                "value": "2196"
            },
            {
                "date": "1963",
                "value": "2204"
            },
            {
                "date": "1964",
                "value": "2296"
            },
            {
                "date": "1965",
                "value": "2238"
            },
            {
                "date": "1966",
                "value": "2272"
            },
            {
                "date": "1967",
                "value": "2310"
            },
            {
                "date": "1968",
                "value": "2277"
            },
            {
                "date": "1969",
                "value": "2263"
            },
            {
                "date": "1970",
                "value": "2284"
            },
            {
                "date": "1971",
                "value": "2223"
            },
            {
                "date": "1972",
                "value": "2203"
            },
            {
                "date": "1973",
                "value": "2188"
            },
            {
                "date": "1974",
                "value": "2230"
            },
            {
                "date": "1975",
                "value": "2184"
            },
            {
                "date": "1976",
                "value": "2174"
            },
            {
                "date": "1977",
                "value": "2196"
            },
            {
                "date": "1978",
                "value": "2189"
            },
            {
                "date": "1979",
                "value": "2246"
            },
            {
                "date": "1980",
                "value": "2203"
            },
            {
                "date": "1981",
                "value": "2168"
            },
            {
                "date": "1982",
                "value": "2241"
            },
            {
                "date": "1983",
                "value": "2224"
            },
            {
                "date": "1984",
                "value": "2231"
            },
            {
                "date": "1985",
                "value": "2251"
            },
            {
                "date": "1986",
                "value": "2230"
            },
            {
                "date": "1987",
                "value": "2228"
            },
            {
                "date": "1988",
                "value": "2216"
            },
            {
                "date": "1989",
                "value": "2193"
            },
            {
                "date": "1990",
                "value": "2111"
            },
            {
                "date": "1991",
                "value": "2175"
            },
            {
                "date": "1992",
                "value": "2177"
            },
            {
                "date": "1993",
                "value": "2161"
            },
            {
                "date": "1994",
                "value": "2288"
            },
            {
                "date": "1995",
                "value": "2381"
            },
            {
                "date": "1996",
                "value": "2307"
            },
            {
                "date": "1997",
                "value": "2406"
            },
            {
                "date": "1998",
                "value": "2388"
            },
            {
                "date": "1999",
                "value": "2311"
            },
            {
                "date": "2000",
                "value": "2353"
            },
            {
                "date": "2001",
                "value": "2315"
            },
            {
                "date": "2002",
                "value": "2392"
            },
            {
                "date": "2003",
                "value": "2409"
            },
            {
                "date": "2004",
                "value": "2402"
            },
            {
                "date": "2005",
                "value": "2427"
            },
            {
                "date": "2006",
                "value": "2458"
            },
            {
                "date": "2007",
                "value": "2420"
            },
            {
                "date": "2008",
                "value": "2480"
            },
            {
                "date": "2009",
                "value": "2453"
            },
            {
                "date": "2010",
                "value": "2482"
            },
            {
                "date": "2011",
                "value": "2491"
            },
            {
                "date": "2012",
                "value": "2421"
            },
            {
                "date": "2013",
                "value": "2391"
            }
        ],
        "South Africa": [
            {
                "date": "1948",
                "value": "2517"
            },
            {
                "date": "1961",
                "value": "2671"
            },
            {
                "date": "1962",
                "value": "2615"
            },
            {
                "date": "1963",
                "value": "2725"
            },
            {
                "date": "1964",
                "value": "2757"
            },
            {
                "date": "1965",
                "value": "2864"
            },
            {
                "date": "1966",
                "value": "2758"
            },
            {
                "date": "1967",
                "value": "2703"
            },
            {
                "date": "1968",
                "value": "2752"
            },
            {
                "date": "1969",
                "value": "2793"
            },
            {
                "date": "1970",
                "value": "2817"
            },
            {
                "date": "1971",
                "value": "2787"
            },
            {
                "date": "1972",
                "value": "2859"
            },
            {
                "date": "1973",
                "value": "2902"
            },
            {
                "date": "1974",
                "value": "2876"
            },
            {
                "date": "1975",
                "value": "2897"
            },
            {
                "date": "1976",
                "value": "2851"
            },
            {
                "date": "1977",
                "value": "2841"
            },
            {
                "date": "1978",
                "value": "2850"
            },
            {
                "date": "1979",
                "value": "2818"
            },
            {
                "date": "1980",
                "value": "2862"
            },
            {
                "date": "1981",
                "value": "2831"
            },
            {
                "date": "1982",
                "value": "2912"
            },
            {
                "date": "1983",
                "value": "2839"
            },
            {
                "date": "1984",
                "value": "2843"
            },
            {
                "date": "1985",
                "value": "2887"
            },
            {
                "date": "1986",
                "value": "2821"
            },
            {
                "date": "1987",
                "value": "2926"
            },
            {
                "date": "1988",
                "value": "2874"
            },
            {
                "date": "1989",
                "value": "2827"
            },
            {
                "date": "1990",
                "value": "2830"
            },
            {
                "date": "1991",
                "value": "2816"
            },
            {
                "date": "1992",
                "value": "2796"
            },
            {
                "date": "1993",
                "value": "2838"
            },
            {
                "date": "1994",
                "value": "2826"
            },
            {
                "date": "1995",
                "value": "2810"
            },
            {
                "date": "1996",
                "value": "2796"
            },
            {
                "date": "1997",
                "value": "2815"
            },
            {
                "date": "1998",
                "value": "2847"
            },
            {
                "date": "1999",
                "value": "2835"
            },
            {
                "date": "2000",
                "value": "2886"
            },
            {
                "date": "2001",
                "value": "2909"
            },
            {
                "date": "2002",
                "value": "2906"
            },
            {
                "date": "2003",
                "value": "2929"
            },
            {
                "date": "2004",
                "value": "2940"
            },
            {
                "date": "2005",
                "value": "2952"
            },
            {
                "date": "2006",
                "value": "2927"
            },
            {
                "date": "2007",
                "value": "2920"
            },
            {
                "date": "2008",
                "value": "2924"
            },
            {
                "date": "2009",
                "value": "2936"
            },
            {
                "date": "2010",
                "value": "2992"
            },
            {
                "date": "2011",
                "value": "3002"
            },
            {
                "date": "2012",
                "value": "3014"
            },
            {
                "date": "2013",
                "value": "3022"
            }
        ],
        "South America": [
            {
                "date": "1961",
                "value": "2329"
            },
            {
                "date": "1962",
                "value": "2357"
            },
            {
                "date": "1963",
                "value": "2320"
            },
            {
                "date": "1964",
                "value": "2383"
            },
            {
                "date": "1965",
                "value": "2404"
            },
            {
                "date": "1966",
                "value": "2390"
            },
            {
                "date": "1967",
                "value": "2416"
            },
            {
                "date": "1968",
                "value": "2466"
            },
            {
                "date": "1969",
                "value": "2479"
            },
            {
                "date": "1970",
                "value": "2467"
            },
            {
                "date": "1971",
                "value": "2468"
            },
            {
                "date": "1972",
                "value": "2433"
            },
            {
                "date": "1973",
                "value": "2407"
            },
            {
                "date": "1974",
                "value": "2501"
            },
            {
                "date": "1975",
                "value": "2520"
            },
            {
                "date": "1976",
                "value": "2548"
            },
            {
                "date": "1977",
                "value": "2560"
            },
            {
                "date": "1978",
                "value": "2588"
            },
            {
                "date": "1979",
                "value": "2654"
            },
            {
                "date": "1980",
                "value": "2666"
            },
            {
                "date": "1981",
                "value": "2624"
            },
            {
                "date": "1982",
                "value": "2610"
            },
            {
                "date": "1983",
                "value": "2576"
            },
            {
                "date": "1984",
                "value": "2578"
            },
            {
                "date": "1985",
                "value": "2595"
            },
            {
                "date": "1986",
                "value": "2607"
            },
            {
                "date": "1987",
                "value": "2640"
            },
            {
                "date": "1988",
                "value": "2636"
            },
            {
                "date": "1989",
                "value": "2621"
            },
            {
                "date": "1990",
                "value": "2599"
            },
            {
                "date": "1991",
                "value": "2658"
            },
            {
                "date": "1992",
                "value": "2683"
            },
            {
                "date": "1993",
                "value": "2687"
            },
            {
                "date": "1994",
                "value": "2724"
            },
            {
                "date": "1995",
                "value": "2731"
            },
            {
                "date": "1996",
                "value": "2745"
            },
            {
                "date": "1997",
                "value": "2749"
            },
            {
                "date": "1998",
                "value": "2742"
            },
            {
                "date": "1999",
                "value": "2768"
            },
            {
                "date": "2000",
                "value": "2792"
            },
            {
                "date": "2001",
                "value": "2797"
            },
            {
                "date": "2002",
                "value": "2769"
            },
            {
                "date": "2003",
                "value": "2853"
            },
            {
                "date": "2004",
                "value": "2866"
            },
            {
                "date": "2005",
                "value": "2875"
            },
            {
                "date": "2006",
                "value": "2895"
            },
            {
                "date": "2007",
                "value": "2914"
            },
            {
                "date": "2008",
                "value": "2973"
            },
            {
                "date": "2009",
                "value": "2956"
            },
            {
                "date": "2010",
                "value": "2990"
            },
            {
                "date": "2011",
                "value": "3027"
            },
            {
                "date": "2012",
                "value": "3012"
            },
            {
                "date": "2013",
                "value": "3027"
            }
        ],
        "South Asia": [
            {
                "date": "1946",
                "value": "1770"
            }
        ],
        "South Korea": [
            {
                "date": "1961",
                "value": "2141"
            },
            {
                "date": "1962",
                "value": "2179"
            },
            {
                "date": "1963",
                "value": "2208"
            },
            {
                "date": "1964",
                "value": "2251"
            },
            {
                "date": "1965",
                "value": "2367"
            },
            {
                "date": "1966",
                "value": "2440"
            },
            {
                "date": "1967",
                "value": "2508"
            },
            {
                "date": "1968",
                "value": "2610"
            },
            {
                "date": "1969",
                "value": "2722"
            },
            {
                "date": "1970",
                "value": "2816"
            },
            {
                "date": "1971",
                "value": "2899"
            },
            {
                "date": "1972",
                "value": "2975"
            },
            {
                "date": "1973",
                "value": "3058"
            },
            {
                "date": "1974",
                "value": "3027"
            },
            {
                "date": "1975",
                "value": "3106"
            },
            {
                "date": "1976",
                "value": "3159"
            },
            {
                "date": "1977",
                "value": "3110"
            },
            {
                "date": "1978",
                "value": "3177"
            },
            {
                "date": "1979",
                "value": "3142"
            },
            {
                "date": "1980",
                "value": "3025"
            },
            {
                "date": "1981",
                "value": "2970"
            },
            {
                "date": "1982",
                "value": "2939"
            },
            {
                "date": "1983",
                "value": "2951"
            },
            {
                "date": "1984",
                "value": "2999"
            },
            {
                "date": "1985",
                "value": "2951"
            },
            {
                "date": "1986",
                "value": "2996"
            },
            {
                "date": "1987",
                "value": "3074"
            },
            {
                "date": "1988",
                "value": "3086"
            },
            {
                "date": "1989",
                "value": "3064"
            },
            {
                "date": "1990",
                "value": "2956"
            },
            {
                "date": "1991",
                "value": "2950"
            },
            {
                "date": "1992",
                "value": "3001"
            },
            {
                "date": "1993",
                "value": "2956"
            },
            {
                "date": "1994",
                "value": "2980"
            },
            {
                "date": "1995",
                "value": "3022"
            },
            {
                "date": "1996",
                "value": "3060"
            },
            {
                "date": "1997",
                "value": "3074"
            },
            {
                "date": "1998",
                "value": "2981"
            },
            {
                "date": "1999",
                "value": "3096"
            },
            {
                "date": "2000",
                "value": "3094"
            },
            {
                "date": "2001",
                "value": "3081"
            },
            {
                "date": "2002",
                "value": "3081"
            },
            {
                "date": "2003",
                "value": "3059"
            },
            {
                "date": "2004",
                "value": "3098"
            },
            {
                "date": "2005",
                "value": "3102"
            },
            {
                "date": "2006",
                "value": "3113"
            },
            {
                "date": "2007",
                "value": "3139"
            },
            {
                "date": "2008",
                "value": "3187"
            },
            {
                "date": "2009",
                "value": "3203"
            },
            {
                "date": "2010",
                "value": "3281"
            },
            {
                "date": "2011",
                "value": "3354"
            },
            {
                "date": "2012",
                "value": "3325"
            },
            {
                "date": "2013",
                "value": "3334"
            }
        ],
        "Spain": [
            {
                "date": "1948",
                "value": "2377"
            },
            {
                "date": "1961",
                "value": "2659"
            },
            {
                "date": "1962",
                "value": "2788"
            },
            {
                "date": "1963",
                "value": "2696"
            },
            {
                "date": "1964",
                "value": "2593"
            },
            {
                "date": "1965",
                "value": "2657"
            },
            {
                "date": "1966",
                "value": "2713"
            },
            {
                "date": "1967",
                "value": "2744"
            },
            {
                "date": "1968",
                "value": "2752"
            },
            {
                "date": "1969",
                "value": "2642"
            },
            {
                "date": "1970",
                "value": "2731"
            },
            {
                "date": "1971",
                "value": "2760"
            },
            {
                "date": "1972",
                "value": "2834"
            },
            {
                "date": "1973",
                "value": "2844"
            },
            {
                "date": "1974",
                "value": "3076"
            },
            {
                "date": "1975",
                "value": "3084"
            },
            {
                "date": "1976",
                "value": "3049"
            },
            {
                "date": "1977",
                "value": "3005"
            },
            {
                "date": "1978",
                "value": "3003"
            },
            {
                "date": "1979",
                "value": "3049"
            },
            {
                "date": "1980",
                "value": "3116"
            },
            {
                "date": "1981",
                "value": "2982"
            },
            {
                "date": "1982",
                "value": "3070"
            },
            {
                "date": "1983",
                "value": "3045"
            },
            {
                "date": "1984",
                "value": "3036"
            },
            {
                "date": "1985",
                "value": "3110"
            },
            {
                "date": "1986",
                "value": "3098"
            },
            {
                "date": "1987",
                "value": "3150"
            },
            {
                "date": "1988",
                "value": "3208"
            },
            {
                "date": "1989",
                "value": "3240"
            },
            {
                "date": "1990",
                "value": "3260"
            },
            {
                "date": "1991",
                "value": "3410"
            },
            {
                "date": "1992",
                "value": "3405"
            },
            {
                "date": "1993",
                "value": "3308"
            },
            {
                "date": "1994",
                "value": "3304"
            },
            {
                "date": "1995",
                "value": "3217"
            },
            {
                "date": "1996",
                "value": "3357"
            },
            {
                "date": "1997",
                "value": "3302"
            },
            {
                "date": "1998",
                "value": "3337"
            },
            {
                "date": "1999",
                "value": "3331"
            },
            {
                "date": "2000",
                "value": "3360"
            },
            {
                "date": "2001",
                "value": "3332"
            },
            {
                "date": "2002",
                "value": "3359"
            },
            {
                "date": "2003",
                "value": "3297"
            },
            {
                "date": "2004",
                "value": "3246"
            },
            {
                "date": "2005",
                "value": "3220"
            },
            {
                "date": "2006",
                "value": "3227"
            },
            {
                "date": "2007",
                "value": "3223"
            },
            {
                "date": "2008",
                "value": "3208"
            },
            {
                "date": "2009",
                "value": "3205"
            },
            {
                "date": "2010",
                "value": "3183"
            },
            {
                "date": "2011",
                "value": "3192"
            },
            {
                "date": "2012",
                "value": "3173"
            },
            {
                "date": "2013",
                "value": "3174"
            }
        ],
        "Sri Lanka": [
            {
                "date": "1961",
                "value": "2074"
            },
            {
                "date": "1962",
                "value": "2098"
            },
            {
                "date": "1963",
                "value": "2141"
            },
            {
                "date": "1964",
                "value": "2246"
            },
            {
                "date": "1965",
                "value": "2250"
            },
            {
                "date": "1966",
                "value": "2300"
            },
            {
                "date": "1967",
                "value": "2329"
            },
            {
                "date": "1968",
                "value": "2327"
            },
            {
                "date": "1969",
                "value": "2290"
            },
            {
                "date": "1970",
                "value": "2270"
            },
            {
                "date": "1971",
                "value": "2206"
            },
            {
                "date": "1972",
                "value": "2166"
            },
            {
                "date": "1973",
                "value": "2192"
            },
            {
                "date": "1974",
                "value": "2184"
            },
            {
                "date": "1975",
                "value": "2169"
            },
            {
                "date": "1976",
                "value": "2180"
            },
            {
                "date": "1977",
                "value": "2199"
            },
            {
                "date": "1978",
                "value": "2262"
            },
            {
                "date": "1979",
                "value": "2316"
            },
            {
                "date": "1980",
                "value": "2284"
            },
            {
                "date": "1981",
                "value": "2244"
            },
            {
                "date": "1982",
                "value": "2256"
            },
            {
                "date": "1983",
                "value": "2314"
            },
            {
                "date": "1984",
                "value": "2297"
            },
            {
                "date": "1985",
                "value": "2316"
            },
            {
                "date": "1986",
                "value": "2291"
            },
            {
                "date": "1987",
                "value": "2231"
            },
            {
                "date": "1988",
                "value": "2246"
            },
            {
                "date": "1989",
                "value": "2204"
            },
            {
                "date": "1990",
                "value": "2167"
            },
            {
                "date": "1991",
                "value": "2187"
            },
            {
                "date": "1992",
                "value": "2153"
            },
            {
                "date": "1993",
                "value": "2095"
            },
            {
                "date": "1994",
                "value": "2290"
            },
            {
                "date": "1995",
                "value": "2221"
            },
            {
                "date": "1996",
                "value": "2240"
            },
            {
                "date": "1997",
                "value": "2270"
            },
            {
                "date": "1998",
                "value": "2297"
            },
            {
                "date": "1999",
                "value": "2384"
            },
            {
                "date": "2000",
                "value": "2315"
            },
            {
                "date": "2001",
                "value": "2356"
            },
            {
                "date": "2002",
                "value": "2331"
            },
            {
                "date": "2003",
                "value": "2330"
            },
            {
                "date": "2004",
                "value": "2348"
            },
            {
                "date": "2005",
                "value": "2350"
            },
            {
                "date": "2006",
                "value": "2376"
            },
            {
                "date": "2007",
                "value": "2383"
            },
            {
                "date": "2008",
                "value": "2443"
            },
            {
                "date": "2009",
                "value": "2448"
            },
            {
                "date": "2010",
                "value": "2465"
            },
            {
                "date": "2011",
                "value": "2491"
            },
            {
                "date": "2012",
                "value": "2512"
            },
            {
                "date": "2013",
                "value": "2539"
            }
        ],
        "Sub-Saharan Africa": [
            {
                "date": "1946",
                "value": "2080"
            }
        ],
        "Sudan": [
            {
                "date": "2012",
                "value": "2301"
            },
            {
                "date": "2013",
                "value": "2336"
            }
        ],
        "Sudan (former)": [
            {
                "date": "1961",
                "value": "1590"
            },
            {
                "date": "1962",
                "value": "1802"
            },
            {
                "date": "1963",
                "value": "1731"
            },
            {
                "date": "1964",
                "value": "1772"
            },
            {
                "date": "1965",
                "value": "1610"
            },
            {
                "date": "1966",
                "value": "1618"
            },
            {
                "date": "1967",
                "value": "1740"
            },
            {
                "date": "1968",
                "value": "1786"
            },
            {
                "date": "1969",
                "value": "1828"
            },
            {
                "date": "1970",
                "value": "1956"
            },
            {
                "date": "1971",
                "value": "1958"
            },
            {
                "date": "1972",
                "value": "1945"
            },
            {
                "date": "1973",
                "value": "2006"
            },
            {
                "date": "1974",
                "value": "2051"
            },
            {
                "date": "1975",
                "value": "1907"
            },
            {
                "date": "1976",
                "value": "1959"
            },
            {
                "date": "1977",
                "value": "2034"
            },
            {
                "date": "1978",
                "value": "2171"
            },
            {
                "date": "1979",
                "value": "2093"
            },
            {
                "date": "1980",
                "value": "2076"
            },
            {
                "date": "1981",
                "value": "2074"
            },
            {
                "date": "1982",
                "value": "1959"
            },
            {
                "date": "1983",
                "value": "2041"
            },
            {
                "date": "1984",
                "value": "1800"
            },
            {
                "date": "1985",
                "value": "2006"
            },
            {
                "date": "1986",
                "value": "2049"
            },
            {
                "date": "1987",
                "value": "1968"
            },
            {
                "date": "1988",
                "value": "2050"
            },
            {
                "date": "1989",
                "value": "1956"
            },
            {
                "date": "1990",
                "value": "1929"
            },
            {
                "date": "1991",
                "value": "2038"
            },
            {
                "date": "1992",
                "value": "2023"
            },
            {
                "date": "1993",
                "value": "2102"
            },
            {
                "date": "1994",
                "value": "2144"
            },
            {
                "date": "1995",
                "value": "2169"
            },
            {
                "date": "1996",
                "value": "2158"
            },
            {
                "date": "1997",
                "value": "2153"
            },
            {
                "date": "1998",
                "value": "2167"
            },
            {
                "date": "1999",
                "value": "2180"
            },
            {
                "date": "2000",
                "value": "2206"
            },
            {
                "date": "2001",
                "value": "2249"
            },
            {
                "date": "2002",
                "value": "2283"
            },
            {
                "date": "2003",
                "value": "2282"
            },
            {
                "date": "2004",
                "value": "2271"
            },
            {
                "date": "2005",
                "value": "2296"
            },
            {
                "date": "2006",
                "value": "2331"
            },
            {
                "date": "2007",
                "value": "2344"
            },
            {
                "date": "2008",
                "value": "2344"
            },
            {
                "date": "2009",
                "value": "2346"
            },
            {
                "date": "2010",
                "value": "2323"
            },
            {
                "date": "2011",
                "value": "2346"
            }
        ],
        "Suriname": [
            {
                "date": "1961",
                "value": "1910"
            },
            {
                "date": "1962",
                "value": "1927"
            },
            {
                "date": "1963",
                "value": "1980"
            },
            {
                "date": "1964",
                "value": "2229"
            },
            {
                "date": "1965",
                "value": "2175"
            },
            {
                "date": "1966",
                "value": "2117"
            },
            {
                "date": "1967",
                "value": "2181"
            },
            {
                "date": "1968",
                "value": "2205"
            },
            {
                "date": "1969",
                "value": "2279"
            },
            {
                "date": "1970",
                "value": "2226"
            },
            {
                "date": "1971",
                "value": "2216"
            },
            {
                "date": "1972",
                "value": "2224"
            },
            {
                "date": "1973",
                "value": "2221"
            },
            {
                "date": "1974",
                "value": "2228"
            },
            {
                "date": "1975",
                "value": "2220"
            },
            {
                "date": "1976",
                "value": "2247"
            },
            {
                "date": "1977",
                "value": "2276"
            },
            {
                "date": "1978",
                "value": "2294"
            },
            {
                "date": "1979",
                "value": "2281"
            },
            {
                "date": "1980",
                "value": "2404"
            },
            {
                "date": "1981",
                "value": "2309"
            },
            {
                "date": "1982",
                "value": "2335"
            },
            {
                "date": "1983",
                "value": "2466"
            },
            {
                "date": "1984",
                "value": "2650"
            },
            {
                "date": "1985",
                "value": "2618"
            },
            {
                "date": "1986",
                "value": "2484"
            },
            {
                "date": "1987",
                "value": "2529"
            },
            {
                "date": "1988",
                "value": "2486"
            },
            {
                "date": "1989",
                "value": "2474"
            },
            {
                "date": "1990",
                "value": "2445"
            },
            {
                "date": "1991",
                "value": "2547"
            },
            {
                "date": "1992",
                "value": "2507"
            },
            {
                "date": "1993",
                "value": "2542"
            },
            {
                "date": "1994",
                "value": "2513"
            },
            {
                "date": "1995",
                "value": "2548"
            },
            {
                "date": "1996",
                "value": "2585"
            },
            {
                "date": "1997",
                "value": "2544"
            },
            {
                "date": "1998",
                "value": "2562"
            },
            {
                "date": "1999",
                "value": "2491"
            },
            {
                "date": "2000",
                "value": "2545"
            },
            {
                "date": "2001",
                "value": "2506"
            },
            {
                "date": "2002",
                "value": "2557"
            },
            {
                "date": "2003",
                "value": "2559"
            },
            {
                "date": "2004",
                "value": "2557"
            },
            {
                "date": "2005",
                "value": "2614"
            },
            {
                "date": "2006",
                "value": "2632"
            },
            {
                "date": "2007",
                "value": "2670"
            },
            {
                "date": "2008",
                "value": "2645"
            },
            {
                "date": "2009",
                "value": "2736"
            },
            {
                "date": "2010",
                "value": "2795"
            },
            {
                "date": "2011",
                "value": "2712"
            },
            {
                "date": "2012",
                "value": "2726"
            },
            {
                "date": "2013",
                "value": "2753"
            }
        ],
        "Sweden": [
            {
                "date": "1948",
                "value": "3108"
            },
            {
                "date": "1961",
                "value": "2845"
            },
            {
                "date": "1962",
                "value": "2816"
            },
            {
                "date": "1963",
                "value": "2807"
            },
            {
                "date": "1964",
                "value": "2894"
            },
            {
                "date": "1965",
                "value": "2859"
            },
            {
                "date": "1966",
                "value": "2875"
            },
            {
                "date": "1967",
                "value": "2859"
            },
            {
                "date": "1968",
                "value": "2823"
            },
            {
                "date": "1969",
                "value": "2805"
            },
            {
                "date": "1970",
                "value": "2874"
            },
            {
                "date": "1971",
                "value": "2905"
            },
            {
                "date": "1972",
                "value": "2862"
            },
            {
                "date": "1973",
                "value": "2862"
            },
            {
                "date": "1974",
                "value": "2886"
            },
            {
                "date": "1975",
                "value": "2932"
            },
            {
                "date": "1976",
                "value": "3010"
            },
            {
                "date": "1977",
                "value": "2969"
            },
            {
                "date": "1978",
                "value": "2935"
            },
            {
                "date": "1979",
                "value": "2968"
            },
            {
                "date": "1980",
                "value": "2991"
            },
            {
                "date": "1981",
                "value": "2965"
            },
            {
                "date": "1982",
                "value": "2981"
            },
            {
                "date": "1983",
                "value": "2985"
            },
            {
                "date": "1984",
                "value": "3054"
            },
            {
                "date": "1985",
                "value": "2977"
            },
            {
                "date": "1986",
                "value": "2975"
            },
            {
                "date": "1987",
                "value": "2899"
            },
            {
                "date": "1988",
                "value": "2951"
            },
            {
                "date": "1989",
                "value": "2979"
            },
            {
                "date": "1990",
                "value": "2973"
            },
            {
                "date": "1991",
                "value": "2942"
            },
            {
                "date": "1992",
                "value": "3053"
            },
            {
                "date": "1993",
                "value": "3137"
            },
            {
                "date": "1994",
                "value": "3087"
            },
            {
                "date": "1995",
                "value": "3088"
            },
            {
                "date": "1996",
                "value": "3039"
            },
            {
                "date": "1997",
                "value": "3087"
            },
            {
                "date": "1998",
                "value": "3063"
            },
            {
                "date": "1999",
                "value": "3115"
            },
            {
                "date": "2000",
                "value": "3099"
            },
            {
                "date": "2001",
                "value": "3124"
            },
            {
                "date": "2002",
                "value": "3133"
            },
            {
                "date": "2003",
                "value": "3124"
            },
            {
                "date": "2004",
                "value": "3147"
            },
            {
                "date": "2005",
                "value": "3122"
            },
            {
                "date": "2006",
                "value": "3091"
            },
            {
                "date": "2007",
                "value": "3089"
            },
            {
                "date": "2008",
                "value": "3128"
            },
            {
                "date": "2009",
                "value": "3126"
            },
            {
                "date": "2010",
                "value": "3151"
            },
            {
                "date": "2011",
                "value": "3157"
            },
            {
                "date": "2012",
                "value": "3170"
            },
            {
                "date": "2013",
                "value": "3179"
            }
        ],
        "Switzerland": [
            {
                "date": "1948",
                "value": "2996"
            },
            {
                "date": "1961",
                "value": "3576"
            },
            {
                "date": "1962",
                "value": "3483"
            },
            {
                "date": "1963",
                "value": "3405"
            },
            {
                "date": "1964",
                "value": "3446"
            },
            {
                "date": "1965",
                "value": "3445"
            },
            {
                "date": "1966",
                "value": "3443"
            },
            {
                "date": "1967",
                "value": "3303"
            },
            {
                "date": "1968",
                "value": "3423"
            },
            {
                "date": "1969",
                "value": "3427"
            },
            {
                "date": "1970",
                "value": "3498"
            },
            {
                "date": "1971",
                "value": "3451"
            },
            {
                "date": "1972",
                "value": "3522"
            },
            {
                "date": "1973",
                "value": "3539"
            },
            {
                "date": "1974",
                "value": "3414"
            },
            {
                "date": "1975",
                "value": "3227"
            },
            {
                "date": "1976",
                "value": "3315"
            },
            {
                "date": "1977",
                "value": "3494"
            },
            {
                "date": "1978",
                "value": "3451"
            },
            {
                "date": "1979",
                "value": "3401"
            },
            {
                "date": "1980",
                "value": "3512"
            },
            {
                "date": "1981",
                "value": "3522"
            },
            {
                "date": "1982",
                "value": "3481"
            },
            {
                "date": "1983",
                "value": "3455"
            },
            {
                "date": "1984",
                "value": "3413"
            },
            {
                "date": "1985",
                "value": "3408"
            },
            {
                "date": "1986",
                "value": "3427"
            },
            {
                "date": "1987",
                "value": "3440"
            },
            {
                "date": "1988",
                "value": "3439"
            },
            {
                "date": "1989",
                "value": "3422"
            },
            {
                "date": "1990",
                "value": "3441"
            },
            {
                "date": "1991",
                "value": "3350"
            },
            {
                "date": "1992",
                "value": "3420"
            },
            {
                "date": "1993",
                "value": "3358"
            },
            {
                "date": "1994",
                "value": "3332"
            },
            {
                "date": "1995",
                "value": "3311"
            },
            {
                "date": "1996",
                "value": "3340"
            },
            {
                "date": "1997",
                "value": "3318"
            },
            {
                "date": "1998",
                "value": "3327"
            },
            {
                "date": "1999",
                "value": "3324"
            },
            {
                "date": "2000",
                "value": "3440"
            },
            {
                "date": "2001",
                "value": "3380"
            },
            {
                "date": "2002",
                "value": "3436"
            },
            {
                "date": "2003",
                "value": "3432"
            },
            {
                "date": "2004",
                "value": "3412"
            },
            {
                "date": "2005",
                "value": "3386"
            },
            {
                "date": "2006",
                "value": "3432"
            },
            {
                "date": "2007",
                "value": "3428"
            },
            {
                "date": "2008",
                "value": "3445"
            },
            {
                "date": "2009",
                "value": "3465"
            },
            {
                "date": "2010",
                "value": "3448"
            },
            {
                "date": "2011",
                "value": "3491"
            },
            {
                "date": "2012",
                "value": "3382"
            },
            {
                "date": "2013",
                "value": "3391"
            }
        ],
        "Taiwan": [
            {
                "date": "1961",
                "value": "2526"
            },
            {
                "date": "1962",
                "value": "2466"
            },
            {
                "date": "1963",
                "value": "2422"
            },
            {
                "date": "1964",
                "value": "2492"
            },
            {
                "date": "1965",
                "value": "2463"
            },
            {
                "date": "1966",
                "value": "2469"
            },
            {
                "date": "1967",
                "value": "2460"
            },
            {
                "date": "1968",
                "value": "2493"
            },
            {
                "date": "1969",
                "value": "2543"
            },
            {
                "date": "1970",
                "value": "2599"
            },
            {
                "date": "1971",
                "value": "2624"
            },
            {
                "date": "1972",
                "value": "2687"
            },
            {
                "date": "1973",
                "value": "2717"
            },
            {
                "date": "1974",
                "value": "2772"
            },
            {
                "date": "1975",
                "value": "2834"
            },
            {
                "date": "1976",
                "value": "2810"
            },
            {
                "date": "1977",
                "value": "2815"
            },
            {
                "date": "1978",
                "value": "2821"
            },
            {
                "date": "1979",
                "value": "2838"
            },
            {
                "date": "1980",
                "value": "2771"
            },
            {
                "date": "1981",
                "value": "2721"
            },
            {
                "date": "1982",
                "value": "2708"
            },
            {
                "date": "1983",
                "value": "2663"
            },
            {
                "date": "1984",
                "value": "2641"
            },
            {
                "date": "1985",
                "value": "2708"
            },
            {
                "date": "1986",
                "value": "2744"
            },
            {
                "date": "1987",
                "value": "2780"
            },
            {
                "date": "1988",
                "value": "2827"
            },
            {
                "date": "1989",
                "value": "2910"
            },
            {
                "date": "1990",
                "value": "2947"
            },
            {
                "date": "1991",
                "value": "2987"
            },
            {
                "date": "1992",
                "value": "2974"
            },
            {
                "date": "1993",
                "value": "3058"
            },
            {
                "date": "1994",
                "value": "3064"
            },
            {
                "date": "1995",
                "value": "3077"
            },
            {
                "date": "1996",
                "value": "3105"
            },
            {
                "date": "1997",
                "value": "3111"
            },
            {
                "date": "1998",
                "value": "3065"
            },
            {
                "date": "1999",
                "value": "3104"
            },
            {
                "date": "2000",
                "value": "3119"
            },
            {
                "date": "2001",
                "value": "3011"
            },
            {
                "date": "2002",
                "value": "3002"
            },
            {
                "date": "2003",
                "value": "2991"
            },
            {
                "date": "2004",
                "value": "2986"
            },
            {
                "date": "2005",
                "value": "2985"
            },
            {
                "date": "2006",
                "value": "2948"
            },
            {
                "date": "2007",
                "value": "2964"
            },
            {
                "date": "2008",
                "value": "2925"
            },
            {
                "date": "2009",
                "value": "2938"
            },
            {
                "date": "2010",
                "value": "2962"
            },
            {
                "date": "2011",
                "value": "2956"
            },
            {
                "date": "2012",
                "value": "2955"
            },
            {
                "date": "2013",
                "value": "2997"
            }
        ],
        "Tajikistan": [
            {
                "date": "1961",
                "value": "3095"
            },
            {
                "date": "1962",
                "value": "3157"
            },
            {
                "date": "1963",
                "value": "3204"
            },
            {
                "date": "1964",
                "value": "3206"
            },
            {
                "date": "1965",
                "value": "3214"
            },
            {
                "date": "1966",
                "value": "3209"
            },
            {
                "date": "1967",
                "value": "3240"
            },
            {
                "date": "1968",
                "value": "3300"
            },
            {
                "date": "1969",
                "value": "3300"
            },
            {
                "date": "1970",
                "value": "3355"
            },
            {
                "date": "1971",
                "value": "3331"
            },
            {
                "date": "1972",
                "value": "3284"
            },
            {
                "date": "1973",
                "value": "3325"
            },
            {
                "date": "1974",
                "value": "3357"
            },
            {
                "date": "1975",
                "value": "3341"
            },
            {
                "date": "1976",
                "value": "3404"
            },
            {
                "date": "1977",
                "value": "3366"
            },
            {
                "date": "1978",
                "value": "3387"
            },
            {
                "date": "1979",
                "value": "3384"
            },
            {
                "date": "1980",
                "value": "3378"
            },
            {
                "date": "1981",
                "value": "3355"
            },
            {
                "date": "1982",
                "value": "3377"
            },
            {
                "date": "1983",
                "value": "3386"
            },
            {
                "date": "1984",
                "value": "3388"
            },
            {
                "date": "1985",
                "value": "3380"
            },
            {
                "date": "1986",
                "value": "3364"
            },
            {
                "date": "1987",
                "value": "3404"
            },
            {
                "date": "1988",
                "value": "3395"
            },
            {
                "date": "1989",
                "value": "3348"
            },
            {
                "date": "1990",
                "value": "3372"
            },
            {
                "date": "1991",
                "value": "3032"
            },
            {
                "date": "1992",
                "value": "2045"
            },
            {
                "date": "1993",
                "value": "2067"
            },
            {
                "date": "1994",
                "value": "2030"
            },
            {
                "date": "1995",
                "value": "1974"
            },
            {
                "date": "1996",
                "value": "1934"
            },
            {
                "date": "1997",
                "value": "1914"
            },
            {
                "date": "1998",
                "value": "1935"
            },
            {
                "date": "1999",
                "value": "1937"
            },
            {
                "date": "2000",
                "value": "1959"
            },
            {
                "date": "2001",
                "value": "1962"
            },
            {
                "date": "2002",
                "value": "1942"
            },
            {
                "date": "2003",
                "value": "1956"
            },
            {
                "date": "2004",
                "value": "1979"
            },
            {
                "date": "2005",
                "value": "2057"
            },
            {
                "date": "2006",
                "value": "2063"
            },
            {
                "date": "2007",
                "value": "2064"
            },
            {
                "date": "2008",
                "value": "2082"
            },
            {
                "date": "2009",
                "value": "2097"
            },
            {
                "date": "2010",
                "value": "2105"
            },
            {
                "date": "2011",
                "value": "2049"
            },
            {
                "date": "2012",
                "value": "2159"
            },
            {
                "date": "2013",
                "value": "2201"
            }
        ],
        "Tanzania": [
            {
                "date": "1961",
                "value": "1746"
            },
            {
                "date": "1962",
                "value": "1758"
            },
            {
                "date": "1963",
                "value": "1782"
            },
            {
                "date": "1964",
                "value": "1700"
            },
            {
                "date": "1965",
                "value": "1742"
            },
            {
                "date": "1966",
                "value": "1819"
            },
            {
                "date": "1967",
                "value": "1714"
            },
            {
                "date": "1968",
                "value": "1707"
            },
            {
                "date": "1969",
                "value": "1708"
            },
            {
                "date": "1970",
                "value": "1713"
            },
            {
                "date": "1971",
                "value": "1677"
            },
            {
                "date": "1972",
                "value": "1694"
            },
            {
                "date": "1973",
                "value": "1815"
            },
            {
                "date": "1974",
                "value": "1900"
            },
            {
                "date": "1975",
                "value": "2167"
            },
            {
                "date": "1976",
                "value": "2219"
            },
            {
                "date": "1977",
                "value": "2218"
            },
            {
                "date": "1978",
                "value": "2206"
            },
            {
                "date": "1979",
                "value": "2235"
            },
            {
                "date": "1980",
                "value": "2224"
            },
            {
                "date": "1981",
                "value": "2198"
            },
            {
                "date": "1982",
                "value": "2231"
            },
            {
                "date": "1983",
                "value": "2202"
            },
            {
                "date": "1984",
                "value": "2239"
            },
            {
                "date": "1985",
                "value": "2257"
            },
            {
                "date": "1986",
                "value": "2262"
            },
            {
                "date": "1987",
                "value": "2271"
            },
            {
                "date": "1988",
                "value": "2219"
            },
            {
                "date": "1989",
                "value": "2272"
            },
            {
                "date": "1990",
                "value": "2187"
            },
            {
                "date": "1991",
                "value": "2231"
            },
            {
                "date": "1992",
                "value": "2145"
            },
            {
                "date": "1993",
                "value": "2100"
            },
            {
                "date": "1994",
                "value": "2084"
            },
            {
                "date": "1995",
                "value": "2030"
            },
            {
                "date": "1996",
                "value": "2040"
            },
            {
                "date": "1997",
                "value": "2004"
            },
            {
                "date": "1998",
                "value": "2077"
            },
            {
                "date": "1999",
                "value": "2060"
            },
            {
                "date": "2000",
                "value": "2005"
            },
            {
                "date": "2001",
                "value": "2031"
            },
            {
                "date": "2002",
                "value": "2109"
            },
            {
                "date": "2003",
                "value": "1983"
            },
            {
                "date": "2004",
                "value": "2098"
            },
            {
                "date": "2005",
                "value": "2134"
            },
            {
                "date": "2006",
                "value": "2141"
            },
            {
                "date": "2007",
                "value": "2215"
            },
            {
                "date": "2008",
                "value": "2132"
            },
            {
                "date": "2009",
                "value": "2133"
            },
            {
                "date": "2010",
                "value": "2097"
            },
            {
                "date": "2011",
                "value": "2200"
            },
            {
                "date": "2012",
                "value": "2192"
            },
            {
                "date": "2013",
                "value": "2208"
            }
        ],
        "Thailand": [
            {
                "date": "1948",
                "value": "2020"
            },
            {
                "date": "1961",
                "value": "1942"
            },
            {
                "date": "1962",
                "value": "2066"
            },
            {
                "date": "1963",
                "value": "2173"
            },
            {
                "date": "1964",
                "value": "2163"
            },
            {
                "date": "1965",
                "value": "2063"
            },
            {
                "date": "1966",
                "value": "2280"
            },
            {
                "date": "1967",
                "value": "2114"
            },
            {
                "date": "1968",
                "value": "2176"
            },
            {
                "date": "1969",
                "value": "2186"
            },
            {
                "date": "1970",
                "value": "2190"
            },
            {
                "date": "1971",
                "value": "2194"
            },
            {
                "date": "1972",
                "value": "2170"
            },
            {
                "date": "1973",
                "value": "2266"
            },
            {
                "date": "1974",
                "value": "2272"
            },
            {
                "date": "1975",
                "value": "2275"
            },
            {
                "date": "1976",
                "value": "2220"
            },
            {
                "date": "1977",
                "value": "2174"
            },
            {
                "date": "1978",
                "value": "2365"
            },
            {
                "date": "1979",
                "value": "2185"
            },
            {
                "date": "1980",
                "value": "2170"
            },
            {
                "date": "1981",
                "value": "2198"
            },
            {
                "date": "1982",
                "value": "2033"
            },
            {
                "date": "1983",
                "value": "2152"
            },
            {
                "date": "1984",
                "value": "2095"
            },
            {
                "date": "1985",
                "value": "2067"
            },
            {
                "date": "1986",
                "value": "2096"
            },
            {
                "date": "1987",
                "value": "2068"
            },
            {
                "date": "1988",
                "value": "2081"
            },
            {
                "date": "1989",
                "value": "2061"
            },
            {
                "date": "1990",
                "value": "2180"
            },
            {
                "date": "1991",
                "value": "2260"
            },
            {
                "date": "1992",
                "value": "2271"
            },
            {
                "date": "1993",
                "value": "2265"
            },
            {
                "date": "1994",
                "value": "2363"
            },
            {
                "date": "1995",
                "value": "2415"
            },
            {
                "date": "1996",
                "value": "2558"
            },
            {
                "date": "1997",
                "value": "2539"
            },
            {
                "date": "1998",
                "value": "2600"
            },
            {
                "date": "1999",
                "value": "2558"
            },
            {
                "date": "2000",
                "value": "2604"
            },
            {
                "date": "2001",
                "value": "2578"
            },
            {
                "date": "2002",
                "value": "2630"
            },
            {
                "date": "2003",
                "value": "2642"
            },
            {
                "date": "2004",
                "value": "2651"
            },
            {
                "date": "2005",
                "value": "2720"
            },
            {
                "date": "2006",
                "value": "2796"
            },
            {
                "date": "2007",
                "value": "2766"
            },
            {
                "date": "2008",
                "value": "2757"
            },
            {
                "date": "2009",
                "value": "2734"
            },
            {
                "date": "2010",
                "value": "2756"
            },
            {
                "date": "2011",
                "value": "2760"
            },
            {
                "date": "2012",
                "value": "2784"
            },
            {
                "date": "2013",
                "value": "2784"
            }
        ],
        "Timor": [
            {
                "date": "1961",
                "value": "1741"
            },
            {
                "date": "1962",
                "value": "1752"
            },
            {
                "date": "1963",
                "value": "1693"
            },
            {
                "date": "1964",
                "value": "1662"
            },
            {
                "date": "1965",
                "value": "1695"
            },
            {
                "date": "1966",
                "value": "1768"
            },
            {
                "date": "1967",
                "value": "1725"
            },
            {
                "date": "1968",
                "value": "1743"
            },
            {
                "date": "1969",
                "value": "1794"
            },
            {
                "date": "1970",
                "value": "1712"
            },
            {
                "date": "1971",
                "value": "1702"
            },
            {
                "date": "1972",
                "value": "1684"
            },
            {
                "date": "1973",
                "value": "1716"
            },
            {
                "date": "1974",
                "value": "1717"
            },
            {
                "date": "1975",
                "value": "1744"
            },
            {
                "date": "1976",
                "value": "1783"
            },
            {
                "date": "1977",
                "value": "1905"
            },
            {
                "date": "1978",
                "value": "2013"
            },
            {
                "date": "1979",
                "value": "2122"
            },
            {
                "date": "1980",
                "value": "2077"
            },
            {
                "date": "1981",
                "value": "2134"
            },
            {
                "date": "1982",
                "value": "2148"
            },
            {
                "date": "1983",
                "value": "2127"
            },
            {
                "date": "1984",
                "value": "2160"
            },
            {
                "date": "1985",
                "value": "2118"
            },
            {
                "date": "1986",
                "value": "2107"
            },
            {
                "date": "1987",
                "value": "2088"
            },
            {
                "date": "1988",
                "value": "2092"
            },
            {
                "date": "1989",
                "value": "2076"
            },
            {
                "date": "1990",
                "value": "1817"
            },
            {
                "date": "1991",
                "value": "1933"
            },
            {
                "date": "1992",
                "value": "1986"
            },
            {
                "date": "1993",
                "value": "2032"
            },
            {
                "date": "1994",
                "value": "2006"
            },
            {
                "date": "1995",
                "value": "2033"
            },
            {
                "date": "1996",
                "value": "1888"
            },
            {
                "date": "1997",
                "value": "1923"
            },
            {
                "date": "1998",
                "value": "1798"
            },
            {
                "date": "1999",
                "value": "1829"
            },
            {
                "date": "2000",
                "value": "1872"
            },
            {
                "date": "2001",
                "value": "1940"
            },
            {
                "date": "2002",
                "value": "2063"
            },
            {
                "date": "2003",
                "value": "2058"
            },
            {
                "date": "2004",
                "value": "2040"
            },
            {
                "date": "2005",
                "value": "2031"
            },
            {
                "date": "2006",
                "value": "2038"
            },
            {
                "date": "2007",
                "value": "2046"
            },
            {
                "date": "2008",
                "value": "2061"
            },
            {
                "date": "2009",
                "value": "2040"
            },
            {
                "date": "2010",
                "value": "2082"
            },
            {
                "date": "2011",
                "value": "2105"
            },
            {
                "date": "2012",
                "value": "2150"
            },
            {
                "date": "2013",
                "value": "2131"
            }
        ],
        "Togo": [
            {
                "date": "1961",
                "value": "2040"
            },
            {
                "date": "1962",
                "value": "2196"
            },
            {
                "date": "1963",
                "value": "2137"
            },
            {
                "date": "1964",
                "value": "2215"
            },
            {
                "date": "1965",
                "value": "2272"
            },
            {
                "date": "1966",
                "value": "2231"
            },
            {
                "date": "1967",
                "value": "2309"
            },
            {
                "date": "1968",
                "value": "2190"
            },
            {
                "date": "1969",
                "value": "2065"
            },
            {
                "date": "1970",
                "value": "2091"
            },
            {
                "date": "1971",
                "value": "2193"
            },
            {
                "date": "1972",
                "value": "2170"
            },
            {
                "date": "1973",
                "value": "2052"
            },
            {
                "date": "1974",
                "value": "1930"
            },
            {
                "date": "1975",
                "value": "1884"
            },
            {
                "date": "1976",
                "value": "1814"
            },
            {
                "date": "1977",
                "value": "1789"
            },
            {
                "date": "1978",
                "value": "1892"
            },
            {
                "date": "1979",
                "value": "2036"
            },
            {
                "date": "1980",
                "value": "2049"
            },
            {
                "date": "1981",
                "value": "2024"
            },
            {
                "date": "1982",
                "value": "1973"
            },
            {
                "date": "1983",
                "value": "1860"
            },
            {
                "date": "1984",
                "value": "1892"
            },
            {
                "date": "1985",
                "value": "2038"
            },
            {
                "date": "1986",
                "value": "1853"
            },
            {
                "date": "1987",
                "value": "1763"
            },
            {
                "date": "1988",
                "value": "1940"
            },
            {
                "date": "1989",
                "value": "1967"
            },
            {
                "date": "1990",
                "value": "2091"
            },
            {
                "date": "1991",
                "value": "1930"
            },
            {
                "date": "1992",
                "value": "1896"
            },
            {
                "date": "1993",
                "value": "1959"
            },
            {
                "date": "1994",
                "value": "2042"
            },
            {
                "date": "1995",
                "value": "2046"
            },
            {
                "date": "1996",
                "value": "2112"
            },
            {
                "date": "1997",
                "value": "2154"
            },
            {
                "date": "1998",
                "value": "2123"
            },
            {
                "date": "1999",
                "value": "2149"
            },
            {
                "date": "2000",
                "value": "2171"
            },
            {
                "date": "2001",
                "value": "2155"
            },
            {
                "date": "2002",
                "value": "2157"
            },
            {
                "date": "2003",
                "value": "2199"
            },
            {
                "date": "2004",
                "value": "2246"
            },
            {
                "date": "2005",
                "value": "2238"
            },
            {
                "date": "2006",
                "value": "2283"
            },
            {
                "date": "2007",
                "value": "2295"
            },
            {
                "date": "2008",
                "value": "2316"
            },
            {
                "date": "2009",
                "value": "2340"
            },
            {
                "date": "2010",
                "value": "2370"
            },
            {
                "date": "2011",
                "value": "2383"
            },
            {
                "date": "2012",
                "value": "2414"
            },
            {
                "date": "2013",
                "value": "2454"
            }
        ],
        "Trinidad and Tobago": [
            {
                "date": "1961",
                "value": "2278"
            },
            {
                "date": "1962",
                "value": "2358"
            },
            {
                "date": "1963",
                "value": "2367"
            },
            {
                "date": "1964",
                "value": "2380"
            },
            {
                "date": "1965",
                "value": "2414"
            },
            {
                "date": "1966",
                "value": "2434"
            },
            {
                "date": "1967",
                "value": "2401"
            },
            {
                "date": "1968",
                "value": "2316"
            },
            {
                "date": "1969",
                "value": "2478"
            },
            {
                "date": "1970",
                "value": "2461"
            },
            {
                "date": "1971",
                "value": "2527"
            },
            {
                "date": "1972",
                "value": "2513"
            },
            {
                "date": "1973",
                "value": "2563"
            },
            {
                "date": "1974",
                "value": "2655"
            },
            {
                "date": "1975",
                "value": "2589"
            },
            {
                "date": "1976",
                "value": "2700"
            },
            {
                "date": "1977",
                "value": "2681"
            },
            {
                "date": "1978",
                "value": "2806"
            },
            {
                "date": "1979",
                "value": "2801"
            },
            {
                "date": "1980",
                "value": "2986"
            },
            {
                "date": "1981",
                "value": "2967"
            },
            {
                "date": "1982",
                "value": "2989"
            },
            {
                "date": "1983",
                "value": "3000"
            },
            {
                "date": "1984",
                "value": "3008"
            },
            {
                "date": "1985",
                "value": "2888"
            },
            {
                "date": "1986",
                "value": "3027"
            },
            {
                "date": "1987",
                "value": "2935"
            },
            {
                "date": "1988",
                "value": "2779"
            },
            {
                "date": "1989",
                "value": "2680"
            },
            {
                "date": "1990",
                "value": "2626"
            },
            {
                "date": "1991",
                "value": "2668"
            },
            {
                "date": "1992",
                "value": "2568"
            },
            {
                "date": "1993",
                "value": "2546"
            },
            {
                "date": "1994",
                "value": "2550"
            },
            {
                "date": "1995",
                "value": "2596"
            },
            {
                "date": "1996",
                "value": "2640"
            },
            {
                "date": "1997",
                "value": "2616"
            },
            {
                "date": "1998",
                "value": "2664"
            },
            {
                "date": "1999",
                "value": "2674"
            },
            {
                "date": "2000",
                "value": "2777"
            },
            {
                "date": "2001",
                "value": "2832"
            },
            {
                "date": "2002",
                "value": "2790"
            },
            {
                "date": "2003",
                "value": "2749"
            },
            {
                "date": "2004",
                "value": "2776"
            },
            {
                "date": "2005",
                "value": "2756"
            },
            {
                "date": "2006",
                "value": "2801"
            },
            {
                "date": "2007",
                "value": "2845"
            },
            {
                "date": "2008",
                "value": "2828"
            },
            {
                "date": "2009",
                "value": "2841"
            },
            {
                "date": "2010",
                "value": "2841"
            },
            {
                "date": "2011",
                "value": "2906"
            },
            {
                "date": "2012",
                "value": "2989"
            },
            {
                "date": "2013",
                "value": "3052"
            }
        ],
        "Tunisia": [
            {
                "date": "1948",
                "value": "1545"
            },
            {
                "date": "1961",
                "value": "2240"
            },
            {
                "date": "1962",
                "value": "2293"
            },
            {
                "date": "1963",
                "value": "2336"
            },
            {
                "date": "1964",
                "value": "2322"
            },
            {
                "date": "1965",
                "value": "2393"
            },
            {
                "date": "1966",
                "value": "2304"
            },
            {
                "date": "1967",
                "value": "2412"
            },
            {
                "date": "1968",
                "value": "2404"
            },
            {
                "date": "1969",
                "value": "2319"
            },
            {
                "date": "1970",
                "value": "2366"
            },
            {
                "date": "1971",
                "value": "2467"
            },
            {
                "date": "1972",
                "value": "2619"
            },
            {
                "date": "1973",
                "value": "2610"
            },
            {
                "date": "1974",
                "value": "2692"
            },
            {
                "date": "1975",
                "value": "2674"
            },
            {
                "date": "1976",
                "value": "2625"
            },
            {
                "date": "1977",
                "value": "2726"
            },
            {
                "date": "1978",
                "value": "2805"
            },
            {
                "date": "1979",
                "value": "2821"
            },
            {
                "date": "1980",
                "value": "2952"
            },
            {
                "date": "1981",
                "value": "2863"
            },
            {
                "date": "1982",
                "value": "2860"
            },
            {
                "date": "1983",
                "value": "2997"
            },
            {
                "date": "1984",
                "value": "3049"
            },
            {
                "date": "1985",
                "value": "3064"
            },
            {
                "date": "1986",
                "value": "3130"
            },
            {
                "date": "1987",
                "value": "3111"
            },
            {
                "date": "1988",
                "value": "3155"
            },
            {
                "date": "1989",
                "value": "3148"
            },
            {
                "date": "1990",
                "value": "3154"
            },
            {
                "date": "1991",
                "value": "3111"
            },
            {
                "date": "1992",
                "value": "3144"
            },
            {
                "date": "1993",
                "value": "3165"
            },
            {
                "date": "1994",
                "value": "3113"
            },
            {
                "date": "1995",
                "value": "3125"
            },
            {
                "date": "1996",
                "value": "3199"
            },
            {
                "date": "1997",
                "value": "3246"
            },
            {
                "date": "1998",
                "value": "3303"
            },
            {
                "date": "1999",
                "value": "3374"
            },
            {
                "date": "2000",
                "value": "3251"
            },
            {
                "date": "2001",
                "value": "3257"
            },
            {
                "date": "2002",
                "value": "3191"
            },
            {
                "date": "2003",
                "value": "3240"
            },
            {
                "date": "2004",
                "value": "3248"
            },
            {
                "date": "2005",
                "value": "3220"
            },
            {
                "date": "2006",
                "value": "3273"
            },
            {
                "date": "2007",
                "value": "3252"
            },
            {
                "date": "2008",
                "value": "3302"
            },
            {
                "date": "2009",
                "value": "3335"
            },
            {
                "date": "2010",
                "value": "3326"
            },
            {
                "date": "2011",
                "value": "3360"
            },
            {
                "date": "2012",
                "value": "3390"
            },
            {
                "date": "2013",
                "value": "3349"
            }
        ],
        "Turkey": [
            {
                "date": "1948",
                "value": "2506"
            },
            {
                "date": "1961",
                "value": "2957"
            },
            {
                "date": "1962",
                "value": "2915"
            },
            {
                "date": "1963",
                "value": "3010"
            },
            {
                "date": "1964",
                "value": "3004"
            },
            {
                "date": "1965",
                "value": "2992"
            },
            {
                "date": "1966",
                "value": "3095"
            },
            {
                "date": "1967",
                "value": "3067"
            },
            {
                "date": "1968",
                "value": "3085"
            },
            {
                "date": "1969",
                "value": "3060"
            },
            {
                "date": "1970",
                "value": "3141"
            },
            {
                "date": "1971",
                "value": "3212"
            },
            {
                "date": "1972",
                "value": "3267"
            },
            {
                "date": "1973",
                "value": "3178"
            },
            {
                "date": "1974",
                "value": "3187"
            },
            {
                "date": "1975",
                "value": "3300"
            },
            {
                "date": "1976",
                "value": "3373"
            },
            {
                "date": "1977",
                "value": "3308"
            },
            {
                "date": "1978",
                "value": "3304"
            },
            {
                "date": "1979",
                "value": "3377"
            },
            {
                "date": "1980",
                "value": "3446"
            },
            {
                "date": "1981",
                "value": "3342"
            },
            {
                "date": "1982",
                "value": "3414"
            },
            {
                "date": "1983",
                "value": "3427"
            },
            {
                "date": "1984",
                "value": "3418"
            },
            {
                "date": "1985",
                "value": "3626"
            },
            {
                "date": "1986",
                "value": "3617"
            },
            {
                "date": "1987",
                "value": "3685"
            },
            {
                "date": "1988",
                "value": "3721"
            },
            {
                "date": "1989",
                "value": "3723"
            },
            {
                "date": "1990",
                "value": "3775"
            },
            {
                "date": "1991",
                "value": "3724"
            },
            {
                "date": "1992",
                "value": "3710"
            },
            {
                "date": "1993",
                "value": "3729"
            },
            {
                "date": "1994",
                "value": "3728"
            },
            {
                "date": "1995",
                "value": "3715"
            },
            {
                "date": "1996",
                "value": "3686"
            },
            {
                "date": "1997",
                "value": "3604"
            },
            {
                "date": "1998",
                "value": "3658"
            },
            {
                "date": "1999",
                "value": "3618"
            },
            {
                "date": "2000",
                "value": "3662"
            },
            {
                "date": "2001",
                "value": "3621"
            },
            {
                "date": "2002",
                "value": "3607"
            },
            {
                "date": "2003",
                "value": "3588"
            },
            {
                "date": "2004",
                "value": "3609"
            },
            {
                "date": "2005",
                "value": "3611"
            },
            {
                "date": "2006",
                "value": "3647"
            },
            {
                "date": "2007",
                "value": "3630"
            },
            {
                "date": "2008",
                "value": "3595"
            },
            {
                "date": "2009",
                "value": "3621"
            },
            {
                "date": "2010",
                "value": "3650"
            },
            {
                "date": "2011",
                "value": "3674"
            },
            {
                "date": "2012",
                "value": "3690"
            },
            {
                "date": "2013",
                "value": "3706"
            }
        ],
        "Turkmenistan": [
            {
                "date": "1961",
                "value": "3095"
            },
            {
                "date": "1962",
                "value": "3157"
            },
            {
                "date": "1963",
                "value": "3204"
            },
            {
                "date": "1964",
                "value": "3206"
            },
            {
                "date": "1965",
                "value": "3214"
            },
            {
                "date": "1966",
                "value": "3209"
            },
            {
                "date": "1967",
                "value": "3240"
            },
            {
                "date": "1968",
                "value": "3300"
            },
            {
                "date": "1969",
                "value": "3300"
            },
            {
                "date": "1970",
                "value": "3355"
            },
            {
                "date": "1971",
                "value": "3331"
            },
            {
                "date": "1972",
                "value": "3284"
            },
            {
                "date": "1973",
                "value": "3325"
            },
            {
                "date": "1974",
                "value": "3357"
            },
            {
                "date": "1975",
                "value": "3341"
            },
            {
                "date": "1976",
                "value": "3404"
            },
            {
                "date": "1977",
                "value": "3366"
            },
            {
                "date": "1978",
                "value": "3387"
            },
            {
                "date": "1979",
                "value": "3384"
            },
            {
                "date": "1980",
                "value": "3378"
            },
            {
                "date": "1981",
                "value": "3355"
            },
            {
                "date": "1982",
                "value": "3377"
            },
            {
                "date": "1983",
                "value": "3386"
            },
            {
                "date": "1984",
                "value": "3388"
            },
            {
                "date": "1985",
                "value": "3380"
            },
            {
                "date": "1986",
                "value": "3364"
            },
            {
                "date": "1987",
                "value": "3404"
            },
            {
                "date": "1988",
                "value": "3395"
            },
            {
                "date": "1989",
                "value": "3348"
            },
            {
                "date": "1990",
                "value": "3372"
            },
            {
                "date": "1991",
                "value": "3032"
            },
            {
                "date": "1992",
                "value": "2561"
            },
            {
                "date": "1993",
                "value": "2578"
            },
            {
                "date": "1994",
                "value": "2546"
            },
            {
                "date": "1995",
                "value": "2539"
            },
            {
                "date": "1996",
                "value": "2509"
            },
            {
                "date": "1997",
                "value": "2540"
            },
            {
                "date": "1998",
                "value": "2560"
            },
            {
                "date": "1999",
                "value": "2603"
            },
            {
                "date": "2000",
                "value": "2613"
            },
            {
                "date": "2001",
                "value": "2623"
            },
            {
                "date": "2002",
                "value": "2682"
            },
            {
                "date": "2003",
                "value": "2742"
            },
            {
                "date": "2004",
                "value": "2814"
            },
            {
                "date": "2005",
                "value": "2831"
            },
            {
                "date": "2006",
                "value": "2835"
            },
            {
                "date": "2007",
                "value": "2901"
            },
            {
                "date": "2008",
                "value": "2872"
            },
            {
                "date": "2009",
                "value": "2874"
            },
            {
                "date": "2010",
                "value": "2866"
            },
            {
                "date": "2011",
                "value": "2851"
            },
            {
                "date": "2012",
                "value": "2842"
            },
            {
                "date": "2013",
                "value": "2840"
            }
        ],
        "UK, poor workers": [
            {
                "date": "1863",
                "value": "2395"
            }
        ],
        "USSR": [
            {
                "date": "1961",
                "value": "3095"
            },
            {
                "date": "1962",
                "value": "3157"
            },
            {
                "date": "1963",
                "value": "3204"
            },
            {
                "date": "1964",
                "value": "3206"
            },
            {
                "date": "1965",
                "value": "3214"
            },
            {
                "date": "1966",
                "value": "3209"
            },
            {
                "date": "1967",
                "value": "3240"
            },
            {
                "date": "1968",
                "value": "3300"
            },
            {
                "date": "1969",
                "value": "3300"
            },
            {
                "date": "1970",
                "value": "3355"
            },
            {
                "date": "1971",
                "value": "3331"
            },
            {
                "date": "1972",
                "value": "3284"
            },
            {
                "date": "1973",
                "value": "3325"
            },
            {
                "date": "1974",
                "value": "3357"
            },
            {
                "date": "1975",
                "value": "3341"
            },
            {
                "date": "1976",
                "value": "3404"
            },
            {
                "date": "1977",
                "value": "3366"
            },
            {
                "date": "1978",
                "value": "3387"
            },
            {
                "date": "1979",
                "value": "3384"
            },
            {
                "date": "1980",
                "value": "3378"
            },
            {
                "date": "1981",
                "value": "3355"
            },
            {
                "date": "1982",
                "value": "3377"
            },
            {
                "date": "1983",
                "value": "3386"
            },
            {
                "date": "1984",
                "value": "3388"
            },
            {
                "date": "1985",
                "value": "3380"
            },
            {
                "date": "1986",
                "value": "3364"
            },
            {
                "date": "1987",
                "value": "3404"
            },
            {
                "date": "1988",
                "value": "3395"
            },
            {
                "date": "1989",
                "value": "3348"
            },
            {
                "date": "1990",
                "value": "3372"
            },
            {
                "date": "1991",
                "value": "3032"
            }
        ],
        "Uganda": [
            {
                "date": "1961",
                "value": "2312"
            },
            {
                "date": "1962",
                "value": "2274"
            },
            {
                "date": "1963",
                "value": "2298"
            },
            {
                "date": "1964",
                "value": "2262"
            },
            {
                "date": "1965",
                "value": "2314"
            },
            {
                "date": "1966",
                "value": "2177"
            },
            {
                "date": "1967",
                "value": "2370"
            },
            {
                "date": "1968",
                "value": "2384"
            },
            {
                "date": "1969",
                "value": "2355"
            },
            {
                "date": "1970",
                "value": "2415"
            },
            {
                "date": "1971",
                "value": "2378"
            },
            {
                "date": "1972",
                "value": "2427"
            },
            {
                "date": "1973",
                "value": "2317"
            },
            {
                "date": "1974",
                "value": "2361"
            },
            {
                "date": "1975",
                "value": "2363"
            },
            {
                "date": "1976",
                "value": "2405"
            },
            {
                "date": "1977",
                "value": "2373"
            },
            {
                "date": "1978",
                "value": "2284"
            },
            {
                "date": "1979",
                "value": "2144"
            },
            {
                "date": "1980",
                "value": "2046"
            },
            {
                "date": "1981",
                "value": "2104"
            },
            {
                "date": "1982",
                "value": "2228"
            },
            {
                "date": "1983",
                "value": "2329"
            },
            {
                "date": "1984",
                "value": "2187"
            },
            {
                "date": "1985",
                "value": "2081"
            },
            {
                "date": "1986",
                "value": "2093"
            },
            {
                "date": "1987",
                "value": "2140"
            },
            {
                "date": "1988",
                "value": "2204"
            },
            {
                "date": "1989",
                "value": "2325"
            },
            {
                "date": "1990",
                "value": "2330"
            },
            {
                "date": "1991",
                "value": "2272"
            },
            {
                "date": "1992",
                "value": "2220"
            },
            {
                "date": "1993",
                "value": "2243"
            },
            {
                "date": "1994",
                "value": "2229"
            },
            {
                "date": "1995",
                "value": "2236"
            },
            {
                "date": "1996",
                "value": "2130"
            },
            {
                "date": "1997",
                "value": "2155"
            },
            {
                "date": "1998",
                "value": "2266"
            },
            {
                "date": "1999",
                "value": "2249"
            },
            {
                "date": "2000",
                "value": "2267"
            },
            {
                "date": "2001",
                "value": "2280"
            },
            {
                "date": "2002",
                "value": "2330"
            },
            {
                "date": "2003",
                "value": "2382"
            },
            {
                "date": "2004",
                "value": "2351"
            },
            {
                "date": "2005",
                "value": "2327"
            },
            {
                "date": "2006",
                "value": "2276"
            },
            {
                "date": "2007",
                "value": "2212"
            },
            {
                "date": "2008",
                "value": "2177"
            },
            {
                "date": "2009",
                "value": "2194"
            },
            {
                "date": "2010",
                "value": "2200"
            },
            {
                "date": "2011",
                "value": "2178"
            },
            {
                "date": "2012",
                "value": "2160"
            },
            {
                "date": "2013",
                "value": "2130"
            }
        ],
        "Ukraine": [
            {
                "date": "1961",
                "value": "3095"
            },
            {
                "date": "1962",
                "value": "3157"
            },
            {
                "date": "1963",
                "value": "3204"
            },
            {
                "date": "1964",
                "value": "3206"
            },
            {
                "date": "1965",
                "value": "3214"
            },
            {
                "date": "1966",
                "value": "3209"
            },
            {
                "date": "1967",
                "value": "3240"
            },
            {
                "date": "1968",
                "value": "3300"
            },
            {
                "date": "1969",
                "value": "3300"
            },
            {
                "date": "1970",
                "value": "3355"
            },
            {
                "date": "1971",
                "value": "3331"
            },
            {
                "date": "1972",
                "value": "3284"
            },
            {
                "date": "1973",
                "value": "3325"
            },
            {
                "date": "1974",
                "value": "3357"
            },
            {
                "date": "1975",
                "value": "3341"
            },
            {
                "date": "1976",
                "value": "3404"
            },
            {
                "date": "1977",
                "value": "3366"
            },
            {
                "date": "1978",
                "value": "3387"
            },
            {
                "date": "1979",
                "value": "3384"
            },
            {
                "date": "1980",
                "value": "3378"
            },
            {
                "date": "1981",
                "value": "3355"
            },
            {
                "date": "1982",
                "value": "3377"
            },
            {
                "date": "1983",
                "value": "3386"
            },
            {
                "date": "1984",
                "value": "3388"
            },
            {
                "date": "1985",
                "value": "3380"
            },
            {
                "date": "1986",
                "value": "3364"
            },
            {
                "date": "1987",
                "value": "3404"
            },
            {
                "date": "1988",
                "value": "3395"
            },
            {
                "date": "1989",
                "value": "3348"
            },
            {
                "date": "1990",
                "value": "3372"
            },
            {
                "date": "1991",
                "value": "3032"
            },
            {
                "date": "1992",
                "value": "3367"
            },
            {
                "date": "1993",
                "value": "3242"
            },
            {
                "date": "1994",
                "value": "2980"
            },
            {
                "date": "1995",
                "value": "2881"
            },
            {
                "date": "1996",
                "value": "2803"
            },
            {
                "date": "1997",
                "value": "2854"
            },
            {
                "date": "1998",
                "value": "2829"
            },
            {
                "date": "1999",
                "value": "2782"
            },
            {
                "date": "2000",
                "value": "2896"
            },
            {
                "date": "2001",
                "value": "2986"
            },
            {
                "date": "2002",
                "value": "3048"
            },
            {
                "date": "2003",
                "value": "3052"
            },
            {
                "date": "2004",
                "value": "3194"
            },
            {
                "date": "2005",
                "value": "3210"
            },
            {
                "date": "2006",
                "value": "3244"
            },
            {
                "date": "2007",
                "value": "3253"
            },
            {
                "date": "2008",
                "value": "3297"
            },
            {
                "date": "2009",
                "value": "3174"
            },
            {
                "date": "2010",
                "value": "3140"
            },
            {
                "date": "2011",
                "value": "3177"
            },
            {
                "date": "2012",
                "value": "3161"
            },
            {
                "date": "2013",
                "value": "3138"
            }
        ],
        "United Arab Emirates": [
            {
                "date": "1961",
                "value": "2891"
            },
            {
                "date": "1962",
                "value": "2775"
            },
            {
                "date": "1963",
                "value": "2735"
            },
            {
                "date": "1964",
                "value": "2622"
            },
            {
                "date": "1965",
                "value": "2587"
            },
            {
                "date": "1966",
                "value": "2685"
            },
            {
                "date": "1967",
                "value": "2774"
            },
            {
                "date": "1968",
                "value": "2926"
            },
            {
                "date": "1969",
                "value": "2935"
            },
            {
                "date": "1970",
                "value": "2930"
            },
            {
                "date": "1971",
                "value": "2786"
            },
            {
                "date": "1972",
                "value": "2712"
            },
            {
                "date": "1973",
                "value": "3340"
            },
            {
                "date": "1974",
                "value": "3014"
            },
            {
                "date": "1975",
                "value": "3141"
            },
            {
                "date": "1976",
                "value": "3155"
            },
            {
                "date": "1977",
                "value": "3136"
            },
            {
                "date": "1978",
                "value": "3193"
            },
            {
                "date": "1979",
                "value": "3074"
            },
            {
                "date": "1980",
                "value": "3394"
            },
            {
                "date": "1981",
                "value": "3396"
            },
            {
                "date": "1982",
                "value": "3428"
            },
            {
                "date": "1983",
                "value": "3481"
            },
            {
                "date": "1984",
                "value": "3651"
            },
            {
                "date": "1985",
                "value": "3477"
            },
            {
                "date": "1986",
                "value": "3421"
            },
            {
                "date": "1987",
                "value": "3525"
            },
            {
                "date": "1988",
                "value": "3389"
            },
            {
                "date": "1989",
                "value": "3371"
            },
            {
                "date": "1990",
                "value": "3077"
            },
            {
                "date": "1991",
                "value": "3073"
            },
            {
                "date": "1992",
                "value": "3197"
            },
            {
                "date": "1993",
                "value": "3232"
            },
            {
                "date": "1994",
                "value": "3316"
            },
            {
                "date": "1995",
                "value": "3261"
            },
            {
                "date": "1996",
                "value": "3254"
            },
            {
                "date": "1997",
                "value": "3259"
            },
            {
                "date": "1998",
                "value": "3310"
            },
            {
                "date": "1999",
                "value": "3375"
            },
            {
                "date": "2000",
                "value": "3295"
            },
            {
                "date": "2001",
                "value": "3320"
            },
            {
                "date": "2002",
                "value": "3355"
            },
            {
                "date": "2003",
                "value": "3338"
            },
            {
                "date": "2004",
                "value": "3285"
            },
            {
                "date": "2005",
                "value": "3205"
            },
            {
                "date": "2006",
                "value": "3202"
            },
            {
                "date": "2007",
                "value": "3186"
            },
            {
                "date": "2008",
                "value": "3149"
            },
            {
                "date": "2009",
                "value": "3170"
            },
            {
                "date": "2010",
                "value": "3161"
            },
            {
                "date": "2011",
                "value": "3210"
            },
            {
                "date": "2012",
                "value": "3230"
            },
            {
                "date": "2013",
                "value": "3280"
            }
        ],
        "United Kingdom": [
            {
                "date": "1300",
                "value": "1381"
            },
            {
                "date": "1380",
                "value": "2042"
            },
            {
                "date": "1450",
                "value": "1823"
            },
            {
                "date": "1700",
                "value": "2229"
            },
            {
                "date": "1800",
                "value": "2436"
            },
            {
                "date": "1880",
                "value": "2773"
            },
            {
                "date": "1930",
                "value": "2810"
            },
            {
                "date": "1947",
                "value": "2968"
            },
            {
                "date": "1950",
                "value": "3120"
            },
            {
                "date": "1961",
                "value": "3231"
            },
            {
                "date": "1962",
                "value": "3196"
            },
            {
                "date": "1963",
                "value": "3225"
            },
            {
                "date": "1964",
                "value": "3208"
            },
            {
                "date": "1965",
                "value": "3240"
            },
            {
                "date": "1966",
                "value": "3243"
            },
            {
                "date": "1967",
                "value": "3224"
            },
            {
                "date": "1968",
                "value": "3223"
            },
            {
                "date": "1969",
                "value": "3239"
            },
            {
                "date": "1970",
                "value": "3279"
            },
            {
                "date": "1971",
                "value": "3245"
            },
            {
                "date": "1972",
                "value": "3170"
            },
            {
                "date": "1973",
                "value": "3237"
            },
            {
                "date": "1974",
                "value": "3119"
            },
            {
                "date": "1975",
                "value": "3126"
            },
            {
                "date": "1976",
                "value": "3169"
            },
            {
                "date": "1977",
                "value": "3160"
            },
            {
                "date": "1978",
                "value": "3095"
            },
            {
                "date": "1979",
                "value": "3164"
            },
            {
                "date": "1980",
                "value": "3116"
            },
            {
                "date": "1981",
                "value": "3091"
            },
            {
                "date": "1982",
                "value": "3120"
            },
            {
                "date": "1983",
                "value": "3114"
            },
            {
                "date": "1984",
                "value": "3129"
            },
            {
                "date": "1985",
                "value": "3192"
            },
            {
                "date": "1986",
                "value": "3212"
            },
            {
                "date": "1987",
                "value": "3227"
            },
            {
                "date": "1988",
                "value": "3248"
            },
            {
                "date": "1989",
                "value": "3217"
            },
            {
                "date": "1990",
                "value": "3241"
            },
            {
                "date": "1991",
                "value": "3208"
            },
            {
                "date": "1992",
                "value": "3271"
            },
            {
                "date": "1993",
                "value": "3218"
            },
            {
                "date": "1994",
                "value": "3235"
            },
            {
                "date": "1995",
                "value": "3185"
            },
            {
                "date": "1996",
                "value": "3268"
            },
            {
                "date": "1997",
                "value": "3328"
            },
            {
                "date": "1998",
                "value": "3352"
            },
            {
                "date": "1999",
                "value": "3400"
            },
            {
                "date": "2000",
                "value": "3362"
            },
            {
                "date": "2001",
                "value": "3400"
            },
            {
                "date": "2002",
                "value": "3416"
            },
            {
                "date": "2003",
                "value": "3400"
            },
            {
                "date": "2004",
                "value": "3445"
            },
            {
                "date": "2005",
                "value": "3438"
            },
            {
                "date": "2006",
                "value": "3438"
            },
            {
                "date": "2007",
                "value": "3417"
            },
            {
                "date": "2008",
                "value": "3422"
            },
            {
                "date": "2009",
                "value": "3412"
            },
            {
                "date": "2010",
                "value": "3404"
            },
            {
                "date": "2011",
                "value": "3417"
            },
            {
                "date": "2012",
                "value": "3403"
            },
            {
                "date": "2013",
                "value": "3424"
            }
        ],
        "United States": [
            {
                "date": "1810",
                "value": "2935"
            },
            {
                "date": "1830",
                "value": "2888"
            },
            {
                "date": "1850",
                "value": "2585"
            },
            {
                "date": "1870",
                "value": "3029"
            },
            {
                "date": "1890",
                "value": "3134"
            },
            {
                "date": "1910",
                "value": "3068"
            },
            {
                "date": "1930",
                "value": "3400"
            },
            {
                "date": "1947",
                "value": "3244"
            },
            {
                "date": "1950",
                "value": "3200"
            },
            {
                "date": "1961",
                "value": "2880"
            },
            {
                "date": "1962",
                "value": "2858"
            },
            {
                "date": "1963",
                "value": "2860"
            },
            {
                "date": "1964",
                "value": "2926"
            },
            {
                "date": "1965",
                "value": "2922"
            },
            {
                "date": "1966",
                "value": "2954"
            },
            {
                "date": "1967",
                "value": "2978"
            },
            {
                "date": "1968",
                "value": "3001"
            },
            {
                "date": "1969",
                "value": "3033"
            },
            {
                "date": "1970",
                "value": "3029"
            },
            {
                "date": "1971",
                "value": "3052"
            },
            {
                "date": "1972",
                "value": "3062"
            },
            {
                "date": "1973",
                "value": "3040"
            },
            {
                "date": "1974",
                "value": "3031"
            },
            {
                "date": "1975",
                "value": "3033"
            },
            {
                "date": "1976",
                "value": "3163"
            },
            {
                "date": "1977",
                "value": "3135"
            },
            {
                "date": "1978",
                "value": "3155"
            },
            {
                "date": "1979",
                "value": "3214"
            },
            {
                "date": "1980",
                "value": "3178"
            },
            {
                "date": "1981",
                "value": "3218"
            },
            {
                "date": "1982",
                "value": "3191"
            },
            {
                "date": "1983",
                "value": "3230"
            },
            {
                "date": "1984",
                "value": "3275"
            },
            {
                "date": "1985",
                "value": "3380"
            },
            {
                "date": "1986",
                "value": "3352"
            },
            {
                "date": "1987",
                "value": "3450"
            },
            {
                "date": "1988",
                "value": "3458"
            },
            {
                "date": "1989",
                "value": "3433"
            },
            {
                "date": "1990",
                "value": "3493"
            },
            {
                "date": "1991",
                "value": "3522"
            },
            {
                "date": "1992",
                "value": "3559"
            },
            {
                "date": "1993",
                "value": "3605"
            },
            {
                "date": "1994",
                "value": "3665"
            },
            {
                "date": "1995",
                "value": "3580"
            },
            {
                "date": "1996",
                "value": "3587"
            },
            {
                "date": "1997",
                "value": "3648"
            },
            {
                "date": "1998",
                "value": "3658"
            },
            {
                "date": "1999",
                "value": "3673"
            },
            {
                "date": "2000",
                "value": "3755"
            },
            {
                "date": "2001",
                "value": "3707"
            },
            {
                "date": "2002",
                "value": "3783"
            },
            {
                "date": "2003",
                "value": "3777"
            },
            {
                "date": "2004",
                "value": "3809"
            },
            {
                "date": "2005",
                "value": "3828"
            },
            {
                "date": "2006",
                "value": "3783"
            },
            {
                "date": "2007",
                "value": "3757"
            },
            {
                "date": "2008",
                "value": "3700"
            },
            {
                "date": "2009",
                "value": "3645"
            },
            {
                "date": "2010",
                "value": "3650"
            },
            {
                "date": "2011",
                "value": "3649"
            },
            {
                "date": "2012",
                "value": "3687"
            },
            {
                "date": "2013",
                "value": "3682"
            }
        ],
        "Uruguay": [
            {
                "date": "1948",
                "value": "2529"
            },
            {
                "date": "1961",
                "value": "2794"
            },
            {
                "date": "1962",
                "value": "2708"
            },
            {
                "date": "1963",
                "value": "2772"
            },
            {
                "date": "1964",
                "value": "2839"
            },
            {
                "date": "1965",
                "value": "2753"
            },
            {
                "date": "1966",
                "value": "2738"
            },
            {
                "date": "1967",
                "value": "2658"
            },
            {
                "date": "1968",
                "value": "2718"
            },
            {
                "date": "1969",
                "value": "2866"
            },
            {
                "date": "1970",
                "value": "2951"
            },
            {
                "date": "1971",
                "value": "2801"
            },
            {
                "date": "1972",
                "value": "2761"
            },
            {
                "date": "1973",
                "value": "2739"
            },
            {
                "date": "1974",
                "value": "2919"
            },
            {
                "date": "1975",
                "value": "2890"
            },
            {
                "date": "1976",
                "value": "2880"
            },
            {
                "date": "1977",
                "value": "2710"
            },
            {
                "date": "1978",
                "value": "2701"
            },
            {
                "date": "1979",
                "value": "2882"
            },
            {
                "date": "1980",
                "value": "2823"
            },
            {
                "date": "1981",
                "value": "2864"
            },
            {
                "date": "1982",
                "value": "2792"
            },
            {
                "date": "1983",
                "value": "2571"
            },
            {
                "date": "1984",
                "value": "2683"
            },
            {
                "date": "1985",
                "value": "2649"
            },
            {
                "date": "1986",
                "value": "2571"
            },
            {
                "date": "1987",
                "value": "2614"
            },
            {
                "date": "1988",
                "value": "2590"
            },
            {
                "date": "1989",
                "value": "2495"
            },
            {
                "date": "1990",
                "value": "2527"
            },
            {
                "date": "1991",
                "value": "2699"
            },
            {
                "date": "1992",
                "value": "2762"
            },
            {
                "date": "1993",
                "value": "2746"
            },
            {
                "date": "1994",
                "value": "2783"
            },
            {
                "date": "1995",
                "value": "2678"
            },
            {
                "date": "1996",
                "value": "2819"
            },
            {
                "date": "1997",
                "value": "2810"
            },
            {
                "date": "1998",
                "value": "2821"
            },
            {
                "date": "1999",
                "value": "2825"
            },
            {
                "date": "2000",
                "value": "2811"
            },
            {
                "date": "2001",
                "value": "2869"
            },
            {
                "date": "2002",
                "value": "2838"
            },
            {
                "date": "2003",
                "value": "2835"
            },
            {
                "date": "2004",
                "value": "2831"
            },
            {
                "date": "2005",
                "value": "2809"
            },
            {
                "date": "2006",
                "value": "2823"
            },
            {
                "date": "2007",
                "value": "2890"
            },
            {
                "date": "2008",
                "value": "2958"
            },
            {
                "date": "2009",
                "value": "2977"
            },
            {
                "date": "2010",
                "value": "2984"
            },
            {
                "date": "2011",
                "value": "3012"
            },
            {
                "date": "2012",
                "value": "3016"
            },
            {
                "date": "2013",
                "value": "3050"
            }
        ],
        "Uzbekistan": [
            {
                "date": "1961",
                "value": "3095"
            },
            {
                "date": "1962",
                "value": "3157"
            },
            {
                "date": "1963",
                "value": "3204"
            },
            {
                "date": "1964",
                "value": "3206"
            },
            {
                "date": "1965",
                "value": "3214"
            },
            {
                "date": "1966",
                "value": "3209"
            },
            {
                "date": "1967",
                "value": "3240"
            },
            {
                "date": "1968",
                "value": "3300"
            },
            {
                "date": "1969",
                "value": "3300"
            },
            {
                "date": "1970",
                "value": "3355"
            },
            {
                "date": "1971",
                "value": "3331"
            },
            {
                "date": "1972",
                "value": "3284"
            },
            {
                "date": "1973",
                "value": "3325"
            },
            {
                "date": "1974",
                "value": "3357"
            },
            {
                "date": "1975",
                "value": "3341"
            },
            {
                "date": "1976",
                "value": "3404"
            },
            {
                "date": "1977",
                "value": "3366"
            },
            {
                "date": "1978",
                "value": "3387"
            },
            {
                "date": "1979",
                "value": "3384"
            },
            {
                "date": "1980",
                "value": "3378"
            },
            {
                "date": "1981",
                "value": "3355"
            },
            {
                "date": "1982",
                "value": "3377"
            },
            {
                "date": "1983",
                "value": "3386"
            },
            {
                "date": "1984",
                "value": "3388"
            },
            {
                "date": "1985",
                "value": "3380"
            },
            {
                "date": "1986",
                "value": "3364"
            },
            {
                "date": "1987",
                "value": "3404"
            },
            {
                "date": "1988",
                "value": "3395"
            },
            {
                "date": "1989",
                "value": "3348"
            },
            {
                "date": "1990",
                "value": "3372"
            },
            {
                "date": "1991",
                "value": "3032"
            },
            {
                "date": "1992",
                "value": "2718"
            },
            {
                "date": "1993",
                "value": "2707"
            },
            {
                "date": "1994",
                "value": "2697"
            },
            {
                "date": "1995",
                "value": "2655"
            },
            {
                "date": "1996",
                "value": "2594"
            },
            {
                "date": "1997",
                "value": "2541"
            },
            {
                "date": "1998",
                "value": "2499"
            },
            {
                "date": "1999",
                "value": "2432"
            },
            {
                "date": "2000",
                "value": "2368"
            },
            {
                "date": "2001",
                "value": "2286"
            },
            {
                "date": "2002",
                "value": "2289"
            },
            {
                "date": "2003",
                "value": "2351"
            },
            {
                "date": "2004",
                "value": "2385"
            },
            {
                "date": "2005",
                "value": "2471"
            },
            {
                "date": "2006",
                "value": "2556"
            },
            {
                "date": "2007",
                "value": "2581"
            },
            {
                "date": "2008",
                "value": "2597"
            },
            {
                "date": "2009",
                "value": "2605"
            },
            {
                "date": "2010",
                "value": "2648"
            },
            {
                "date": "2011",
                "value": "2694"
            },
            {
                "date": "2012",
                "value": "2730"
            },
            {
                "date": "2013",
                "value": "2760"
            }
        ],
        "Vanuatu": [
            {
                "date": "1961",
                "value": "2446"
            },
            {
                "date": "1962",
                "value": "2517"
            },
            {
                "date": "1963",
                "value": "2537"
            },
            {
                "date": "1964",
                "value": "2487"
            },
            {
                "date": "1965",
                "value": "2547"
            },
            {
                "date": "1966",
                "value": "2496"
            },
            {
                "date": "1967",
                "value": "2619"
            },
            {
                "date": "1968",
                "value": "2532"
            },
            {
                "date": "1969",
                "value": "2598"
            },
            {
                "date": "1970",
                "value": "2570"
            },
            {
                "date": "1971",
                "value": "2654"
            },
            {
                "date": "1972",
                "value": "2606"
            },
            {
                "date": "1973",
                "value": "2583"
            },
            {
                "date": "1974",
                "value": "2639"
            },
            {
                "date": "1975",
                "value": "2495"
            },
            {
                "date": "1976",
                "value": "2407"
            },
            {
                "date": "1977",
                "value": "2509"
            },
            {
                "date": "1978",
                "value": "2618"
            },
            {
                "date": "1979",
                "value": "2660"
            },
            {
                "date": "1980",
                "value": "2586"
            },
            {
                "date": "1981",
                "value": "2507"
            },
            {
                "date": "1982",
                "value": "2564"
            },
            {
                "date": "1983",
                "value": "2632"
            },
            {
                "date": "1984",
                "value": "2747"
            },
            {
                "date": "1985",
                "value": "2793"
            },
            {
                "date": "1986",
                "value": "2701"
            },
            {
                "date": "1987",
                "value": "2667"
            },
            {
                "date": "1988",
                "value": "2589"
            },
            {
                "date": "1989",
                "value": "2511"
            },
            {
                "date": "1990",
                "value": "2567"
            },
            {
                "date": "1991",
                "value": "2561"
            },
            {
                "date": "1992",
                "value": "2550"
            },
            {
                "date": "1993",
                "value": "2519"
            },
            {
                "date": "1994",
                "value": "2530"
            },
            {
                "date": "1995",
                "value": "2541"
            },
            {
                "date": "1996",
                "value": "2631"
            },
            {
                "date": "1997",
                "value": "2676"
            },
            {
                "date": "1998",
                "value": "2718"
            },
            {
                "date": "1999",
                "value": "2717"
            },
            {
                "date": "2000",
                "value": "2698"
            },
            {
                "date": "2001",
                "value": "2673"
            },
            {
                "date": "2002",
                "value": "2698"
            },
            {
                "date": "2003",
                "value": "2753"
            },
            {
                "date": "2004",
                "value": "2745"
            },
            {
                "date": "2005",
                "value": "2780"
            },
            {
                "date": "2006",
                "value": "2800"
            },
            {
                "date": "2007",
                "value": "2859"
            },
            {
                "date": "2008",
                "value": "2864"
            },
            {
                "date": "2009",
                "value": "2864"
            },
            {
                "date": "2010",
                "value": "2856"
            },
            {
                "date": "2011",
                "value": "2841"
            },
            {
                "date": "2012",
                "value": "2818"
            },
            {
                "date": "2013",
                "value": "2836"
            }
        ],
        "Venezuela": [
            {
                "date": "1961",
                "value": "2155"
            },
            {
                "date": "1962",
                "value": "2109"
            },
            {
                "date": "1963",
                "value": "2105"
            },
            {
                "date": "1964",
                "value": "2302"
            },
            {
                "date": "1965",
                "value": "2267"
            },
            {
                "date": "1966",
                "value": "2216"
            },
            {
                "date": "1967",
                "value": "2234"
            },
            {
                "date": "1968",
                "value": "2267"
            },
            {
                "date": "1969",
                "value": "2323"
            },
            {
                "date": "1970",
                "value": "2341"
            },
            {
                "date": "1971",
                "value": "2323"
            },
            {
                "date": "1972",
                "value": "2269"
            },
            {
                "date": "1973",
                "value": "2265"
            },
            {
                "date": "1974",
                "value": "2281"
            },
            {
                "date": "1975",
                "value": "2391"
            },
            {
                "date": "1976",
                "value": "2462"
            },
            {
                "date": "1977",
                "value": "2596"
            },
            {
                "date": "1978",
                "value": "2598"
            },
            {
                "date": "1979",
                "value": "2663"
            },
            {
                "date": "1980",
                "value": "2712"
            },
            {
                "date": "1981",
                "value": "2757"
            },
            {
                "date": "1982",
                "value": "2575"
            },
            {
                "date": "1983",
                "value": "2612"
            },
            {
                "date": "1984",
                "value": "2755"
            },
            {
                "date": "1985",
                "value": "2634"
            },
            {
                "date": "1986",
                "value": "2397"
            },
            {
                "date": "1987",
                "value": "2571"
            },
            {
                "date": "1988",
                "value": "2765"
            },
            {
                "date": "1989",
                "value": "2299"
            },
            {
                "date": "1990",
                "value": "2362"
            },
            {
                "date": "1991",
                "value": "2423"
            },
            {
                "date": "1992",
                "value": "2522"
            },
            {
                "date": "1993",
                "value": "2401"
            },
            {
                "date": "1994",
                "value": "2371"
            },
            {
                "date": "1995",
                "value": "2434"
            },
            {
                "date": "1996",
                "value": "2380"
            },
            {
                "date": "1997",
                "value": "2283"
            },
            {
                "date": "1998",
                "value": "2354"
            },
            {
                "date": "1999",
                "value": "2341"
            },
            {
                "date": "2000",
                "value": "2454"
            },
            {
                "date": "2001",
                "value": "2509"
            },
            {
                "date": "2002",
                "value": "2218"
            },
            {
                "date": "2003",
                "value": "2415"
            },
            {
                "date": "2004",
                "value": "2492"
            },
            {
                "date": "2005",
                "value": "2490"
            },
            {
                "date": "2006",
                "value": "2514"
            },
            {
                "date": "2007",
                "value": "2607"
            },
            {
                "date": "2008",
                "value": "2808"
            },
            {
                "date": "2009",
                "value": "2858"
            },
            {
                "date": "2010",
                "value": "2805"
            },
            {
                "date": "2011",
                "value": "2803"
            },
            {
                "date": "2012",
                "value": "2691"
            },
            {
                "date": "2013",
                "value": "2631"
            }
        ],
        "Vietnam": [
            {
                "date": "1961",
                "value": "1907"
            },
            {
                "date": "1962",
                "value": "1962"
            },
            {
                "date": "1963",
                "value": "1957"
            },
            {
                "date": "1964",
                "value": "1942"
            },
            {
                "date": "1965",
                "value": "1943"
            },
            {
                "date": "1966",
                "value": "1916"
            },
            {
                "date": "1967",
                "value": "1920"
            },
            {
                "date": "1968",
                "value": "1935"
            },
            {
                "date": "1969",
                "value": "1946"
            },
            {
                "date": "1970",
                "value": "2015"
            },
            {
                "date": "1971",
                "value": "1957"
            },
            {
                "date": "1972",
                "value": "1932"
            },
            {
                "date": "1973",
                "value": "1965"
            },
            {
                "date": "1974",
                "value": "1973"
            },
            {
                "date": "1975",
                "value": "1868"
            },
            {
                "date": "1976",
                "value": "1890"
            },
            {
                "date": "1977",
                "value": "1823"
            },
            {
                "date": "1978",
                "value": "1775"
            },
            {
                "date": "1979",
                "value": "1922"
            },
            {
                "date": "1980",
                "value": "1931"
            },
            {
                "date": "1981",
                "value": "2004"
            },
            {
                "date": "1982",
                "value": "1953"
            },
            {
                "date": "1983",
                "value": "1980"
            },
            {
                "date": "1984",
                "value": "2034"
            },
            {
                "date": "1985",
                "value": "2013"
            },
            {
                "date": "1986",
                "value": "2065"
            },
            {
                "date": "1987",
                "value": "1997"
            },
            {
                "date": "1988",
                "value": "1993"
            },
            {
                "date": "1989",
                "value": "1991"
            },
            {
                "date": "1990",
                "value": "1905"
            },
            {
                "date": "1991",
                "value": "1856"
            },
            {
                "date": "1992",
                "value": "1923"
            },
            {
                "date": "1993",
                "value": "2026"
            },
            {
                "date": "1994",
                "value": "2055"
            },
            {
                "date": "1995",
                "value": "2027"
            },
            {
                "date": "1996",
                "value": "2018"
            },
            {
                "date": "1997",
                "value": "1986"
            },
            {
                "date": "1998",
                "value": "2113"
            },
            {
                "date": "1999",
                "value": "2200"
            },
            {
                "date": "2000",
                "value": "2239"
            },
            {
                "date": "2001",
                "value": "2299"
            },
            {
                "date": "2002",
                "value": "2360"
            },
            {
                "date": "2003",
                "value": "2416"
            },
            {
                "date": "2004",
                "value": "2478"
            },
            {
                "date": "2005",
                "value": "2468"
            },
            {
                "date": "2006",
                "value": "2483"
            },
            {
                "date": "2007",
                "value": "2548"
            },
            {
                "date": "2008",
                "value": "2615"
            },
            {
                "date": "2009",
                "value": "2638"
            },
            {
                "date": "2010",
                "value": "2678"
            },
            {
                "date": "2011",
                "value": "2716"
            },
            {
                "date": "2012",
                "value": "2713"
            },
            {
                "date": "2013",
                "value": "2745"
            }
        ],
        "World": [
            {
                "date": "1961",
                "value": "2196"
            },
            {
                "date": "1962",
                "value": "2243"
            },
            {
                "date": "1963",
                "value": "2254"
            },
            {
                "date": "1964",
                "value": "2287"
            },
            {
                "date": "1965",
                "value": "2310"
            },
            {
                "date": "1966",
                "value": "2327"
            },
            {
                "date": "1967",
                "value": "2330"
            },
            {
                "date": "1968",
                "value": "2334"
            },
            {
                "date": "1969",
                "value": "2343"
            },
            {
                "date": "1970",
                "value": "2389"
            },
            {
                "date": "1971",
                "value": "2365"
            },
            {
                "date": "1972",
                "value": "2352"
            },
            {
                "date": "1973",
                "value": "2389"
            },
            {
                "date": "1974",
                "value": "2381"
            },
            {
                "date": "1975",
                "value": "2396"
            },
            {
                "date": "1976",
                "value": "2389"
            },
            {
                "date": "1977",
                "value": "2418"
            },
            {
                "date": "1978",
                "value": "2477"
            },
            {
                "date": "1979",
                "value": "2476"
            },
            {
                "date": "1980",
                "value": "2490"
            },
            {
                "date": "1981",
                "value": "2501"
            },
            {
                "date": "1982",
                "value": "2531"
            },
            {
                "date": "1983",
                "value": "2575"
            },
            {
                "date": "1984",
                "value": "2584"
            },
            {
                "date": "1985",
                "value": "2587"
            },
            {
                "date": "1986",
                "value": "2589"
            },
            {
                "date": "1987",
                "value": "2607"
            },
            {
                "date": "1988",
                "value": "2624"
            },
            {
                "date": "1989",
                "value": "2635"
            },
            {
                "date": "1990",
                "value": "2621"
            },
            {
                "date": "1991",
                "value": "2601"
            },
            {
                "date": "1992",
                "value": "2610"
            },
            {
                "date": "1993",
                "value": "2616"
            },
            {
                "date": "1994",
                "value": "2639"
            },
            {
                "date": "1995",
                "value": "2663"
            },
            {
                "date": "1996",
                "value": "2673"
            },
            {
                "date": "1997",
                "value": "2687"
            },
            {
                "date": "1998",
                "value": "2701"
            },
            {
                "date": "1999",
                "value": "2715"
            },
            {
                "date": "2000",
                "value": "2727"
            },
            {
                "date": "2001",
                "value": "2725"
            },
            {
                "date": "2002",
                "value": "2728"
            },
            {
                "date": "2003",
                "value": "2735"
            },
            {
                "date": "2004",
                "value": "2747"
            },
            {
                "date": "2005",
                "value": "2761"
            },
            {
                "date": "2006",
                "value": "2779"
            },
            {
                "date": "2007",
                "value": "2807"
            },
            {
                "date": "2008",
                "value": "2825"
            },
            {
                "date": "2009",
                "value": "2825"
            },
            {
                "date": "2010",
                "value": "2850"
            },
            {
                "date": "2011",
                "value": "2869"
            },
            {
                "date": "2012",
                "value": "2874"
            },
            {
                "date": "2013",
                "value": "2884"
            }
        ],
        "Yemen": [
            {
                "date": "1961",
                "value": "1792"
            },
            {
                "date": "1962",
                "value": "1800"
            },
            {
                "date": "1963",
                "value": "1819"
            },
            {
                "date": "1964",
                "value": "1825"
            },
            {
                "date": "1965",
                "value": "1844"
            },
            {
                "date": "1966",
                "value": "1854"
            },
            {
                "date": "1967",
                "value": "1848"
            },
            {
                "date": "1968",
                "value": "1841"
            },
            {
                "date": "1969",
                "value": "1863"
            },
            {
                "date": "1970",
                "value": "1842"
            },
            {
                "date": "1971",
                "value": "1832"
            },
            {
                "date": "1972",
                "value": "1835"
            },
            {
                "date": "1973",
                "value": "1865"
            },
            {
                "date": "1974",
                "value": "1873"
            },
            {
                "date": "1975",
                "value": "1875"
            },
            {
                "date": "1976",
                "value": "1943"
            },
            {
                "date": "1977",
                "value": "2006"
            },
            {
                "date": "1978",
                "value": "2100"
            },
            {
                "date": "1979",
                "value": "2063"
            },
            {
                "date": "1980",
                "value": "2024"
            },
            {
                "date": "1981",
                "value": "2027"
            },
            {
                "date": "1982",
                "value": "2091"
            },
            {
                "date": "1983",
                "value": "2057"
            },
            {
                "date": "1984",
                "value": "2106"
            },
            {
                "date": "1985",
                "value": "2055"
            },
            {
                "date": "1986",
                "value": "2133"
            },
            {
                "date": "1987",
                "value": "2159"
            },
            {
                "date": "1988",
                "value": "2245"
            },
            {
                "date": "1989",
                "value": "2196"
            },
            {
                "date": "1990",
                "value": "2048"
            },
            {
                "date": "1991",
                "value": "2029"
            },
            {
                "date": "1992",
                "value": "2108"
            },
            {
                "date": "1993",
                "value": "2092"
            },
            {
                "date": "1994",
                "value": "2051"
            },
            {
                "date": "1995",
                "value": "2043"
            },
            {
                "date": "1996",
                "value": "2034"
            },
            {
                "date": "1997",
                "value": "2051"
            },
            {
                "date": "1998",
                "value": "2067"
            },
            {
                "date": "1999",
                "value": "2083"
            },
            {
                "date": "2000",
                "value": "2091"
            },
            {
                "date": "2001",
                "value": "2068"
            },
            {
                "date": "2002",
                "value": "2082"
            },
            {
                "date": "2003",
                "value": "2067"
            },
            {
                "date": "2004",
                "value": "2074"
            },
            {
                "date": "2005",
                "value": "2093"
            },
            {
                "date": "2006",
                "value": "2117"
            },
            {
                "date": "2007",
                "value": "2156"
            },
            {
                "date": "2008",
                "value": "2134"
            },
            {
                "date": "2009",
                "value": "2160"
            },
            {
                "date": "2010",
                "value": "2197"
            },
            {
                "date": "2011",
                "value": "2206"
            },
            {
                "date": "2012",
                "value": "2231"
            },
            {
                "date": "2013",
                "value": "2223"
            }
        ],
        "Yugoslavia": [
            {
                "date": "1961",
                "value": "3049"
            },
            {
                "date": "1962",
                "value": "3193"
            },
            {
                "date": "1963",
                "value": "3210"
            },
            {
                "date": "1964",
                "value": "3286"
            },
            {
                "date": "1965",
                "value": "3294"
            },
            {
                "date": "1966",
                "value": "3396"
            },
            {
                "date": "1967",
                "value": "3425"
            },
            {
                "date": "1968",
                "value": "3395"
            },
            {
                "date": "1969",
                "value": "3421"
            },
            {
                "date": "1970",
                "value": "3424"
            },
            {
                "date": "1971",
                "value": "3461"
            },
            {
                "date": "1972",
                "value": "3423"
            },
            {
                "date": "1973",
                "value": "3452"
            },
            {
                "date": "1974",
                "value": "3608"
            },
            {
                "date": "1975",
                "value": "3579"
            },
            {
                "date": "1976",
                "value": "3648"
            },
            {
                "date": "1977",
                "value": "3655"
            },
            {
                "date": "1978",
                "value": "3613"
            },
            {
                "date": "1979",
                "value": "3610"
            },
            {
                "date": "1980",
                "value": "3662"
            },
            {
                "date": "1981",
                "value": "3676"
            },
            {
                "date": "1982",
                "value": "3643"
            },
            {
                "date": "1983",
                "value": "3676"
            },
            {
                "date": "1984",
                "value": "3634"
            },
            {
                "date": "1985",
                "value": "3614"
            },
            {
                "date": "1986",
                "value": "3706"
            },
            {
                "date": "1987",
                "value": "3662"
            },
            {
                "date": "1988",
                "value": "3641"
            },
            {
                "date": "1989",
                "value": "3636"
            },
            {
                "date": "1990",
                "value": "3672"
            },
            {
                "date": "1991",
                "value": "3448"
            }
        ],
        "Zambia": [
            {
                "date": "1961",
                "value": "2155"
            },
            {
                "date": "1962",
                "value": "2152"
            },
            {
                "date": "1963",
                "value": "2105"
            },
            {
                "date": "1964",
                "value": "2057"
            },
            {
                "date": "1965",
                "value": "2040"
            },
            {
                "date": "1966",
                "value": "2175"
            },
            {
                "date": "1967",
                "value": "2201"
            },
            {
                "date": "1968",
                "value": "2231"
            },
            {
                "date": "1969",
                "value": "2247"
            },
            {
                "date": "1970",
                "value": "2238"
            },
            {
                "date": "1971",
                "value": "2261"
            },
            {
                "date": "1972",
                "value": "2266"
            },
            {
                "date": "1973",
                "value": "2310"
            },
            {
                "date": "1974",
                "value": "2314"
            },
            {
                "date": "1975",
                "value": "2324"
            },
            {
                "date": "1976",
                "value": "2340"
            },
            {
                "date": "1977",
                "value": "2416"
            },
            {
                "date": "1978",
                "value": "2287"
            },
            {
                "date": "1979",
                "value": "2289"
            },
            {
                "date": "1980",
                "value": "2268"
            },
            {
                "date": "1981",
                "value": "2236"
            },
            {
                "date": "1982",
                "value": "2138"
            },
            {
                "date": "1983",
                "value": "2135"
            },
            {
                "date": "1984",
                "value": "2118"
            },
            {
                "date": "1985",
                "value": "2021"
            },
            {
                "date": "1986",
                "value": "2044"
            },
            {
                "date": "1987",
                "value": "2030"
            },
            {
                "date": "1988",
                "value": "2063"
            },
            {
                "date": "1989",
                "value": "2074"
            },
            {
                "date": "1990",
                "value": "2080"
            },
            {
                "date": "1991",
                "value": "2006"
            },
            {
                "date": "1992",
                "value": "1983"
            },
            {
                "date": "1993",
                "value": "1981"
            },
            {
                "date": "1994",
                "value": "2022"
            },
            {
                "date": "1995",
                "value": "2050"
            },
            {
                "date": "1996",
                "value": "2034"
            },
            {
                "date": "1997",
                "value": "1970"
            },
            {
                "date": "1998",
                "value": "1930"
            },
            {
                "date": "1999",
                "value": "1958"
            },
            {
                "date": "2000",
                "value": "1873"
            },
            {
                "date": "2001",
                "value": "1850"
            },
            {
                "date": "2002",
                "value": "1849"
            },
            {
                "date": "2003",
                "value": "1900"
            },
            {
                "date": "2004",
                "value": "1866"
            },
            {
                "date": "2005",
                "value": "1873"
            },
            {
                "date": "2006",
                "value": "1838"
            },
            {
                "date": "2007",
                "value": "1781"
            },
            {
                "date": "2008",
                "value": "1801"
            },
            {
                "date": "2009",
                "value": "1878"
            },
            {
                "date": "2010",
                "value": "1904"
            },
            {
                "date": "2011",
                "value": "1907"
            },
            {
                "date": "2012",
                "value": "1923"
            },
            {
                "date": "2013",
                "value": "1930"
            }
        ],
        "Zimbabwe": [
            {
                "date": "1961",
                "value": "2115"
            },
            {
                "date": "1962",
                "value": "2161"
            },
            {
                "date": "1963",
                "value": "2148"
            },
            {
                "date": "1964",
                "value": "2139"
            },
            {
                "date": "1965",
                "value": "2146"
            },
            {
                "date": "1966",
                "value": "2150"
            },
            {
                "date": "1967",
                "value": "2257"
            },
            {
                "date": "1968",
                "value": "2273"
            },
            {
                "date": "1969",
                "value": "2223"
            },
            {
                "date": "1970",
                "value": "2288"
            },
            {
                "date": "1971",
                "value": "2311"
            },
            {
                "date": "1972",
                "value": "2333"
            },
            {
                "date": "1973",
                "value": "2317"
            },
            {
                "date": "1974",
                "value": "2318"
            },
            {
                "date": "1975",
                "value": "2264"
            },
            {
                "date": "1976",
                "value": "2291"
            },
            {
                "date": "1977",
                "value": "2303"
            },
            {
                "date": "1978",
                "value": "2284"
            },
            {
                "date": "1979",
                "value": "2254"
            },
            {
                "date": "1980",
                "value": "2295"
            },
            {
                "date": "1981",
                "value": "2222"
            },
            {
                "date": "1982",
                "value": "2224"
            },
            {
                "date": "1983",
                "value": "2183"
            },
            {
                "date": "1984",
                "value": "2132"
            },
            {
                "date": "1985",
                "value": "2087"
            },
            {
                "date": "1986",
                "value": "2055"
            },
            {
                "date": "1987",
                "value": "2016"
            },
            {
                "date": "1988",
                "value": "2051"
            },
            {
                "date": "1989",
                "value": "2050"
            },
            {
                "date": "1990",
                "value": "2013"
            },
            {
                "date": "1991",
                "value": "1963"
            },
            {
                "date": "1992",
                "value": "1955"
            },
            {
                "date": "1993",
                "value": "1943"
            },
            {
                "date": "1994",
                "value": "1931"
            },
            {
                "date": "1995",
                "value": "1944"
            },
            {
                "date": "1996",
                "value": "1982"
            },
            {
                "date": "1997",
                "value": "2009"
            },
            {
                "date": "1998",
                "value": "2013"
            },
            {
                "date": "1999",
                "value": "1996"
            },
            {
                "date": "2000",
                "value": "1979"
            },
            {
                "date": "2001",
                "value": "2028"
            },
            {
                "date": "2002",
                "value": "2021"
            },
            {
                "date": "2003",
                "value": "2010"
            },
            {
                "date": "2004",
                "value": "2044"
            },
            {
                "date": "2005",
                "value": "2025"
            },
            {
                "date": "2006",
                "value": "2115"
            },
            {
                "date": "2007",
                "value": "2109"
            },
            {
                "date": "2008",
                "value": "2094"
            },
            {
                "date": "2009",
                "value": "2147"
            },
            {
                "date": "2010",
                "value": "2168"
            },
            {
                "date": "2011",
                "value": "2200"
            },
            {
                "date": "2012",
                "value": "2197"
            },
            {
                "date": "2013",
                "value": "2110"
            }
        ]
    };
    chart.data = caloriesData[nation]

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.logarithmic = true;

    // Create series
    function createSeries(field, name) {
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.dateX = "date";
    series.name = name;
    series.tooltipText = "{dateX}: [b]{valueY}[/]";
    series.strokeWidth = 2;
    
    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.stroke = am4core.color("#fff");
    bullet.circle.strokeWidth = 2;
    
    return series;
    }

    var series1 = createSeries("value", "Series #1");


    chart.legend = new am4charts.Legend();
    chart.cursor = new am4charts.XYCursor();
    
    });
    } // end am4core.ready()

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
function linechartTitle(input) {
    $('#line-nation-title').empty()
    $('#line-nation-title').html(`${capitalizeFirstLetter(input)}'s daily supply of calories per capita`);
    }