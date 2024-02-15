// Section 1: API Keys and Viewer Initialization
(function() {
    var currentSceneIndex = 0;
    var currentSlideIndex = 0;
    var slides;
    
    const apiKey = "AAPK0dc01961f9f84d51999214b2d7ca7ff6x6uGDqE0RJUvSzovTBuHrsjDNrutFT4xmERUGjjwJyxRD20vlXQvtIEPtAzSAOb7";
    Cesium.ArcGisMapService.defaultAccessToken = apiKey;

    const cesiumAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNWJlYzdlYi03OWE2LTQ4NDktYjU1MS0wMjg4MWIzMDI0YmEiLCJpZCI6MTczNDE4LCJpYXQiOjE3MDE2MjM1OTZ9.UMTbFZ4HZz2IJbfsVFFsob7GgDE1haShx5DWUdhrkr4";
    Cesium.Ion.defaultAccessToken = cesiumAccessToken;

   // Initialize the Cesium Viewer
    const viewer = new Cesium.Viewer('cesiumContainer', {
    animation: false, // Don't show the animation widget
    baseLayerPicker: false, // Don't show the base layer picker
    fullscreenButton: false, // Don't show the fullscreen button
    vrButton: false, // Don't show the VR button
    geocoder: false, // Don't show the geocoder widget
    homeButton: false, // Don't show the home button
    infoBox: true, // Don't show the info box
    sceneModePicker: false, // Don't show the scene mode picker
    selectionIndicator: false, // Don't show the selection indicator
    timeline: false, // Don't show the timeline
    navigationHelpButton: false, // Don't show the navigation help button
});

viewer.scene.globe.enableLighting = true;

      // Section 2: Scene and Location Setup
    // Define your locations array here as before

 const locations = [
        Cesium.Cartesian3.fromDegrees(-118.2485, 33.7489, 30000), // Vincent Thomas Bridge
        Cesium.Cartesian3.fromDegrees(-118.2340, 33.7500, 12000), // Middle Harbor
        Cesium.Cartesian3.fromDegrees(-118.2230, 33.7400, 8000), // Long Beach Container Terminal
        Cesium.Cartesian3.fromDegrees(-118.2140, 33.7320, 4000),  // Bluff Park (Residential Area)
        Cesium.Cartesian3.fromDegrees(-118.1685, 33.7705, 2500)  // Downtown 

       
        // Add more locations as needed
    ];

       const scenes = [
        {
            title: "1: The Green Port",
            content: "<p></p>" + "<p>The Port of Long Beach (POLB), proudly known as The Green Port, is a leader in green port operations. It plays a vital role in the U.S. and global economy, with its strategic location in Long Beach, California. The Port of Long Beach remains dedicated to pioneering green initiatives, integrating economic activity with environmental stewardship and community well-being. Among its awards and recognitions for its sustainable practices are the Level 4 Green Marine Environmental Certification, 2020 California Governor's Environmental and Economic Leadership Award, and the 2019 American Association of Port Authorities (AAPA) Environmental Excellence Award.</p>" +  
"<p>It's sustainable practices and goals include:</p>" +
"<ul>" +
"<p><li>Clean Air Action Plan (CAAP): Targets 100% zero-emission cargo by 2030 and trucks by 2035.</li></p>" +
"<p><li>Green Port Policy (2005): Addresses wildlife, air, water, soils, community engagement, and sustainability.</li></p>" +
"<p><li>Zero-Emissions Technologies: Focused on electric vehicles and infrastructure for a zero-emissions future.</li></p>" + 
"<p><li>Sustainable Terminal Design: Emphasizes energy-efficient, water-conserving, and waste-reducing practices.</li></p>" + 
"<p><li>Community Engagement: Prioritizes environmental justice and public health in local communities.</li></p>" + 
                "</ul>",  
destination: Cesium.Cartesian3.fromDegrees(-118.1832556, 33.5500, 17895),
orientation: {
  heading : Cesium.Math.toRadians(0.0), // North, adjust as necessary
  pitch : Cesium.Math.toRadians(-30.0), // Looking down, adjust as necessary
  roll : 0.0 // No roll
    }
},
               {
            title: "2: The Port",
            content: "<p></p>" + "<p>The Port of Long Beach is the second largest port in the United States in terms of container volume. The Port generates over $36 billion in annual economic activity, handles over $200 billion in annual trade volume, and supports over 450,000 jobs in Southern California. As a major contributor to the local economy, its operations are essential to the region's continued prosperity.</p>" +

"<p>Each year the port handles over 9 million 20-foot container units (TEUs) each year with a steady growth trend. However, all of this benefit and growth this is not without a significant impact to the environment. The Port has put significant attention to balancing these activities with its environmental impact. Through its various environmental initiatives and programs, the Port aims to minimize the environmental impact of its operations and contribute to a healthier and more sustainable future for the region.</p>",
         destination: Cesium.Cartesian3.fromDegrees(-118.2265, 33.7489, 5500),
orientation: {
  heading : Cesium.Math.toRadians(0.0), // True north
  pitch : Cesium.Math.toRadians(-90.0), // Looking straight down
  roll : 0.0 // No roll
}
    },
    
               {
            title: "3: The Port of Long Beach Terminals",
            content: "<img src='https://raw.githubusercontent.com/philippaburgess/polb_with_cesium/main/Terminals.jpg' alt='Terminals' style='width:90%;max-width:800px;'>",
            destination: Cesium.Cartesian3.fromDegrees(-118.2265, 33.7075, 16000),
          orientation: {
          heading : Cesium.Math.toRadians(355.0), // East, in radians
          pitch : Cesium.Math.toRadians(-70.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
              {
            title: "4: TEUs",
            content: "<img src='https://raw.githubusercontent.com/philippaburgess/polb_with_cesium/main/TEU.jpg' alt='TEU' style='width:90%;max-width:800px;'>",
            destination: Cesium.Cartesian3.fromDegrees(-118.2168, 33.7508, 1100), // Adjusted for close-up view
            orientation: {
            heading : Cesium.Math.toRadians(15.0), // North
            pitch : Cesium.Math.toRadians(-60.0), // Looking directly down
            roll : 0.0 // No roll
          }
        },

              {
            title: "5: Economic Impact",
            content: "<img src='https://raw.githubusercontent.com/philippaburgess/polb_with_cesium/main/Map.jpg' alt='Map' style='width:90%;max-width:800px;'>",
destination: Cesium.Cartesian3.fromDegrees(-98.35, 39.50, 5280000), // Central location of the U.S. on a larger scale
orientation: {
  heading : Cesium.Math.toRadians(0.0), // North
  pitch : Cesium.Math.toRadians(-90.0), // Looking directly down
  roll : 0.0 // No roll
          }
        },
              {
            title: "6: Environment",
            content: "<p></p>" + "<p>The Port of Long Beach has recognized its environmental impact and is actively pursuing improvements in water and air quality. Since the 1970s, the port has complied with stringent regulations to enhance water quality, and since 2005, it has implemented measures to significantly reduce air pollutants such as diesel particulate matter, sulfur oxides, and nitrogen oxides. These steps underscore the port's commitment to safeguarding the health of its workforce and the local community, as well as protecting local ecosystems.</p>" + 

"<p>Beneficiaries of these environmental efforts include:</p>" + 
"<ul>" + 
"<p><li>Mudflats: Vital aquatic habitats safeguarded under the Clean Water Act.</li></p>" + 
"<p><li>Essential Fish Habitats: Critical for the sustainability of coastal pelagic and groundfish populations.</li></p>" + 
"<p><li>Migratory Routes: Utilized by birds and marine mammals, including gray and blue whales.</li></p>" + 
"<p><li>Sea Turtle Habitats: Protected areas for various species of migratory sea turtles.</li></p>" + 
"</ul>",
         destination: Cesium.Cartesian3.fromDegrees(-120.0, 31.1, 240000), // Approximate location over the port
         orientation: {
         heading : Cesium.Math.toRadians(45), // North
         pitch : Cesium.Math.toRadians(-45), // Tilted angle looking down
         roll : 0.0 // No roll
          }
        },
             {
            title: "7: Clean Initiatives",
            content: "<p></p>" + "<p>The Port of Long Beach has been a pioneer in adopting clean energy sources, reducing air pollution, and enhancing water quality, alongside restoring natural habitats. In collaboration with government and local partners, the Port is setting the standard for green port operations. These actions and strategies reflect the Port's dedication to minimizing environmental impact and leading the way towards a sustainable future.</p>" + 
             "<p>Key initiatives include:</p>" + 
"<ul>" +    
"<p><li>Renewable Energy Initiatives: Assessing technological and financial feasibility of diverse opportunities and pursuing on-site renewable energy generation such as the Pier Wind project. </p></li>" + 
"<p><li>Partnerships and Collaborations: Working closely with clean technology companies, research institutions, government agencies like CARB and EPA, and non-profit organizations, the Port fosters innovative solutions and aligns with regional and state environmental goals.</p></li>" + 
"<p><li>Challenges and Solutions: Addressing the complexities of renewable energy and zero-emission transitions, the Port is navigating challenges such as high initial investments, the intermittency of renewable sources, technical complexities, and stakeholder engagement.</p></li>" +   
"<p><li>The strategies encompass seeking grants and innovative financing mechanisms, exploring energy storage solutions for consistent electricity supply, partnering with technology experts for smooth integration of new systems, and engaging stakeholders to ensure a shared commitment to sustainable practices.</p></li>" +
"</ul>",            
     destination: Cesium.Cartesian3.fromDegrees(-118.2010, 33.7300, 3500), // This brings the camera closer to the ground
     orientation: {
     heading : Cesium.Math.toRadians(300), // Faces north
     pitch : Cesium.Math.toRadians(-45), // Angle facing downwards
     roll : 0.0 // No roll
          }
        },
              {
            title: "8: Air Quality",
            content: "<p></p>" + "<p>Historically, the Port of Long Beach faced significant challenges with air pollution, impacting public health and the environment. In response, the Clean Air Action Plan (CAAP) was introduced, focusing on comprehensive measures to improve air quality in the South Coast Air Basin. Developed collaboratively by the South Coast Air Quality Management District (SCAQMD), local governments, businesses, and environmental groups, CAAP has played a crucial role in mitigating health risks associated with air pollution.</p>" +
"<p>The Port has made substantial progress in reducing key pollutants and is preparing to meet new regulatory challenges. Engaging with the community is a central aspect of these efforts, ensuring that policies and projects are attuned to the needs of those most affected by port operations. This ongoing dialogue shapes the Port's environmental initiatives, enhancing their effectiveness and relevance. Community engagement remains a cornerstone of these endeavors, ensuring that the Port's strategies are closely aligned with the needs and concerns of those most impacted by its operations. This collaborative approach is key to continuously refining and enhancing the Port's air quality initiatives. These comprehensive measures continue to enhance air quality in the South Coast Air Basin which is instrumental in reducing health risks associated with air pollution.</p>" +
"<p>Since 2005 the port has reduced: Diesel Particulate Matter (DPM) by 90%, Sulfur Oxides (SOx) by 97%, and Nitrogen Oxides (NOx) by 62%. </p>" +
                "<p>Use the Show/Hide toggle in all scenes to see real-time Air Quality from Google.</p>",    
           destination: Cesium.Cartesian3.fromDegrees(-118.1550, 33.620, 3800), // These coordinates position the camera above the port area.
           orientation: {
        heading: Cesium.Math.toRadians(340), // This heading rotates the camera to an angle that approximates the northwest direction.
        pitch: Cesium.Math.toRadians(-15), // This pitch tilts the camera towards the ground at a diagonal angle.
        roll: 0.0 // This sets the roll to zero, meaning no rotation along the axis of the camera's lens.
          }
        },
             {
            title: "9: Modernization",
            content: "<p></p>" + "<p>The recent reconstruction of the Vincent Thomas Bridge stands as a landmark achievement for the Port of Long Beach, significantly enhancing truck access and symbolizing the port's commitment to modernization. This project is part of a broader initiative that includes investing in low-sulfur marine fuel (LSMF) to reduce ship emissions. Additionally, the Port is embracing electric and green technologies, incorporating on-dock electric power and shore power systems to lower emissions from trucks and trains.</p>" + 
"<p>In its continued efforts to modernize, the Port has implemented shore power at several terminals, enabling ships to connect to the electrical grid while docked, thereby substantially reducing auxiliary engine use. Concurrently, the transition to zero-emissions cargo handling equipment is in progress, marked by the introduction of electric yard trucks and forklifts. Exploring hydrogen fuel cells as an alternative power source for cargo handling equipment and ships, and offering incentives for using clean energy and green technologies to vessels and trucking companies, are also a key part of the Port's forward-thinking strategy.</p>",  
       destination: Cesium.Cartesian3.fromDegrees(-118.278, 33.7486, 600), // This sets the camera above the port area with containers in view.
orientation: {
  heading: Cesium.Math.toRadians(15), // Heading at 0 degrees for north.
  pitch: Cesium.Math.toRadians(-60), // A slight downward pitch to capture the bridge and containers.
  roll: 0.0 // Roll set to zero to keep the horizon level.
          }
        },
        {
         title: "10: Railyard Expansion",
            content: "<p></p>" + 
"<p>The recent State of the Port Conference heralded 2024 as the Year of the Rail. This $1.567 billion Pier B On-Dock Rail initiative is part of the Port's broader modernization and sustainability efforts. Construction is expected to begin in the summer of 2024 and be completed in phases, with the final segment due to be finished in 2032.</p>" + 
"<p><iframe width='560' height='315' src='https://www.youtube.com/embed/vGqbabB5lQk?si=9KuwZVymXH7yloX' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe></p>",  
       destination: Cesium.Cartesian3.fromDegrees(-118.240, 33.7492, 1500), 
orientation: {
  heading: Cesium.Math.toRadians(15), // Heading at 0 degrees for north.
  pitch: Cesium.Math.toRadians(-60), // A slight downward pitch to capture the bridge and containers.
  roll: 0.0 // Roll set to zero to keep the horizon level.
          }
        },
             {
            title: "11: Future Planning",
            content: "<p></p>" + "<p>The Port of Long Beach has set forth clear environmental objectives, anchored by the Climate Adaptation and Coastal Resiliency Plan (CRP), which strategically tackles the challenges posed by climate change. The Port is on a determined path to significantly reduce greenhouse gas emissions, aiming for a 50% reduction by 2030 and reaching for complete elimination by 2050. Concurrently, there is a strong emphasis on enhancing air quality, specifically targeting the reduction of particulate matter and nitrogen oxides. The Port also fosters partnerships with universities and non-profits to advance climate resilience and emissions reduction through collaborative research and educational programs.</p>" + 
"<p>Strategies for Achieving Emission Reduction Goals:</p>" + 
"<ul>" + 
"<p><li>Ensuring the full implementation of the 2017 Clean Air Action Plan (CAAP) Update.</p></li>" + 
"<p><li>Transitioning to zero-emissions for cargo handling equipment and trucks.</p></li>" + 
"<p><li>Utilizing grant programs to support environmental mitigation efforts.</p></li>" + 
"<p><li>Strengthening collaborations with academic and non-profit organizations focused on climate resilience.</p></li>" + 
"<p><li>Developing policies that are in line with CAAP goals, integrating climate change considerations into all Port planning and development activities.</p></li>" + 
"<p><li>Incorporating sea-level rise analysis in the Port's Harbor Development Permit process for future-proof infrastructure planning.</p></li>" + 
"<li>Factoring zero-emissions infrastructure plans into lease negotiations and development projects, reinforcing the commitment to sustainable operations.</li>" + 
"</ul>", 
destination: Cesium.Cartesian3.fromDegrees(-118.225, 33.735, 10000), // This sets the camera above the area of interest.
orientation: {
  heading: Cesium.Math.toRadians(0), // Heading at 0 degrees for north.
  pitch: Cesium.Math.toRadians(-70), // A downward pitch to capture the port facilities.
  roll: 0.0 // Roll set to zero to keep the horizon level.
          }
        },
             {
            title: "12: Funding",
            content: "<p></p>" + "<p>Securing adequate funding is essential for the Port of Long Beach to achieve its sustainability goals. Government agencies like the Maritime Administration (MARAD), the California Air Resources Board (CARB), and the South Coast Air Quality Management District (SCAQMD) have been key in providing financial support for various environmental initiatives. Private partnerships also play a crucial role. The Port continues to seek funding opportunities, leveraging both government grants and private investments to support its ongoing and future environmental projects. This integrated approach to funding is pivotal in maintaining the momentum of the Port's extensive sustainability endeavors.</p>" + 
"<p>In recent developments, in March 2017, the Port was allocated $46.4 million by the BHC for its Community Grants Program, to be expended over 12 to 15 years. This program has already directed $31.1 million towards diverse projects, including public parks, water quality improvements, and healthcare programs, demonstrating a significant economic impact through job creation, enhanced quality of life, and increased economic activity. Companies like Toyota and Amazon have provided substantial funding, exemplifying successful public-private collaboration. Additionally, the Port’s community sponsorships have bolstered its engagement and visibility locally.</p>" + 
"<p>Looking to the future, the Port is expanding its funding horizons. A notable achievement in 2023 was securing $283 million in federal funding through the U.S. Department of Transportation's Mega Grant Program. The Port continues to seek funding opportunities to maintain the momentum of its sustainability endeavors and achieve its long-term environmental goals.</p>", 
destination: Cesium.Cartesian3.fromDegrees(-118.155, 33.712, 9550), // Adjust the coordinates and height to get the right angle and zoom level.
orientation: {
  heading: Cesium.Math.toRadians(300), // North is 0 degrees in radians.
  pitch: Cesium.Math.toRadians(-50), // A slightly steeper pitch to get a good view of the containers.
  roll: 0.0
          }
        },
        {
            title: "13: Good Neighbors",
            content: "<p></p>" + "<p>The Port of Long Beach actively works to mitigate negative effects from pollution and enhance the quality of life for nearby residents. The Port has initiated several key programs to uphold their commitment. </p>" +
"<ul>" + 
"<p><li>Community Engagement and Support: Through regular interaction with communities and leaders, the Port ensures that the needs of those most affected by its operations are addressed, guiding the Port's planning process.</li></p>" + 
"<p><li>Community Grants Program: Directs funding to neighborhoods significantly impacted by Port operations, supporting a variety of projects that enhance community well-being and mitigate negative impacts.</li></p>" + 
"<p><li>Health and Safety Initiatives: Prioritizes the health of local residents and workers by implementing air quality monitoring, pollution reduction measures, and other initiatives that safeguard public health.</li></p>" + 
"<p><li>Educational and Workforce Development: Raises awareness about its operations and offers training programs, empowering the local workforce and strengthening community ties.</li></p>" + 
"</ul>",
destination: Cesium.Cartesian3.fromDegrees(-118.234, 33.705, 3800), // Adjusted coordinates for the desired view
orientation: {
  heading: Cesium.Math.toRadians(0), // Zero for north
  pitch: Cesium.Math.toRadians(-30), // Adjust the angle to see the horizon and the port
  roll: 0.0
          }
        },
            {
            title: "14: Solutions",
            content: "<p></p>" + "<p>The Port of Long Beach is making great strides in its environmental efforts and initiatives, bolstered by legislation, private and public funding, and its many partnerships. The public also plays a pivotal role in this progress. Community members and those in the general public can effectively contribute in the following ways:</p>" + 
"<ul>" + 
"<p><li>Community Meetings and Workshops: Engage in discussions related to Port projects and initiatives, sharing valuable insights and feedback.</p></li>" + 
"<p><li>Engagement with Environmental Programs: Actively participate in clean-up efforts and educational activities organized by the Port, contributing to environmental preservation.</p></li>" + 
"<p><li>Sustainable Lifestyle Choices: Embrace environmentally conscious daily practices to reduce personal environmental impact, such as energy conservation and recycling.</p></li>" + 
"<p><li>Policy Advocacy: Advocate for clean air and water initiatives by reaching out to local, state, and federal officials, expressing concerns and supporting positive environmental policies.</p></li>" + 
"<p><li>Education and Outreach: Stay informed about environmental issues and actively spread awareness, encouraging others to adopt.</p></li>" + 
"</ul>", 
destination: Cesium.Cartesian3.fromDegrees(-118.225, 33.650, 8000), // Coordinates over the Port of Long Beach
orientation: {
  heading: Cesium.Math.toRadians(0), // North direction
  pitch: Cesium.Math.toRadians(-35), // Slight angle to view both the port and surrounding city
  roll: 0.0  // Level horizon
          }
        },
             {
            title: "15: References",
            content:"<img src='https://raw.githubusercontent.com/philippaburgess/polb_with_cesium/main/References.jpg' alt='References' style='width:90%;max-width:800px;'>",
            destination: Cesium.Cartesian3.fromDegrees(-118.3010, 33.7600, 12500),
          orientation: {
          heading : Cesium.Math.toRadians(45.0), // East, in radians
          pitch : Cesium.Math.toRadians(-70.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
             {
            title: "16: Thank You",
            content: "<img src='https://raw.githubusercontent.com/philippaburgess/polb_with_cesium/main/Thanks.jpg' alt='Thank You' style='width:90%;max-width:800px;'>",
            destination: Cesium.Cartesian3.fromDegrees(-118.2265, 33.7489, 5500),
          orientation: {
          heading : Cesium.Math.toRadians(0.0), // East, in radians
          pitch : Cesium.Math.toRadians(-90.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
            
];
    


// Section 3

var longBeachDataLayer;
var portTerminalLayer; 

const airQualityApiKey = 'AIzaSyAQ76encI5EJ6UK3ykhdMwO6fxU9495xBg'; // Replace with your actual API key
const airQualityMapType = 'US_AQI'; // The type of heatmap to return

var heatmapImageryProvider = new Cesium.UrlTemplateImageryProvider({
    url: `https://airquality.googleapis.com/v1/mapTypes/${airQualityMapType}/heatmapTiles/{z}/{x}/{y}?key=${airQualityApiKey}`
});
var heatmapLayer;
var heatmapVisible = false;    
var toggleButton; 
var airQualitySceneIndex = 7; // Scene 8 is where air quality data starts showing

var flyToBathymetricView;

var bathymetryTerrainProvider = new Cesium.CesiumTerrainProvider({
    url: Cesium.IonResource.fromAssetId(2426648) // Replace with your actual bathymetry asset ID
});
var defaultTerrainProvider = new Cesium.EllipsoidTerrainProvider({});
    
function setSceneContent(scene) {
      document.getElementById('scene-title').textContent = scene.title;
      document.getElementById('scene-description').innerHTML = scene.content;
      document.getElementById('scene-container').style.display = 'block';
 }

function manageHeatmapVisibility(sceneIndex) {
  if (sceneIndex >= airQualitySceneIndex) {
    // Show the button if we're at or past the scene where it's introduced
    toggleButton.style.display = 'block';
    // Show the heatmap by default only on Scene 8, but leave it as is for other scenes
    if (sceneIndex === airQualitySceneIndex && !heatmapVisible) {
      window.toggleHeatmap();
    }
  } else {
    // If we navigate back before Scene 8, hide the heatmap but keep the button visible
    if (heatmapVisible) {
      window.toggleHeatmap();
    }
  }
}
   function toggleHeatmap() {
 heatmapVisible = !heatmapVisible;
  if (heatmapVisible) {
    if (!heatmapLayer) {
      heatmapLayer = viewer.imageryLayers.addImageryProvider(heatmapImageryProvider);
    }
    toggleButton.textContent = 'Hide Air Quality';
  } else {
    if (heatmapLayer) {
      viewer.imageryLayers.remove(heatmapLayer);
      heatmapLayer = null;
    }
    toggleButton.textContent = 'Show Air Quality';
  }
}

function setDefaultTerrain() {
    viewer.scene.terrainProvider = defaultTerrainProvider;
}
    
function setBathymetryTerrain() {
    viewer.scene.terrainProvider = bathymetryTerrainProvider;
}

function flyToBathymetricView() {
    // Fly to the above water location first
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-120.0, 31.1, 240000),
        orientation: {
            heading: Cesium.Math.toRadians(45),
            pitch: Cesium.Math.toRadians(-45),
            roll: 0.0
        },
        duration: 8,
        complete: function() {
            // After arriving at the above water location, fly to underwater
            viewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(-118.2140, 33.7350, -10),
                orientation: {
                    heading: Cesium.Math.toRadians(0),
                    pitch: Cesium.Math.toRadians(0), // Slightly tilted down for underwater view
                    roll: 0.0
                },
                duration: 4
            });
        }
    });
}
 
function updateScene(sceneIndex) {
    if (typeof sceneIndex === 'undefined') {
        sceneIndex = currentSceneIndex;
    }

    if (sceneIndex < 0 || sceneIndex >= scenes.length) {
        console.error('Invalid sceneIndex:', sceneIndex);
        return;
    }

    currentSceneIndex = sceneIndex;
    var scene = scenes[sceneIndex];

    setSceneContent(scene);
    manageHeatmapVisibility(sceneIndex);
    checkSceneForGeoJsonLayers(sceneIndex);

    if (sceneIndex === 5) {
        flyToBathymetricView();
    } else {
        setDefaultTerrain();
        // Fly to the scene's designated view
        viewer.camera.flyTo({
            destination: scene.destination,
            orientation: scene.orientation,
            duration: 2
        });
    }
}
const portTerminalsGeoJsonUrl = 'https://raw.githubusercontent.com/philippaburgess/polb_with_cesium/main/PortTerminals_JSON.geojson';
const longBeachGeoJsonUrl = 'https://raw.githubusercontent.com/philippaburgess/polb_with_cesium/main/Long_Beach_Com_JSON_NEWEST.geojson';

function loadPortTerminalsDataLayer() {
    Cesium.GeoJsonDataSource.load(portTerminalsGeoJsonUrl)
        .then(function(dataSource) {
            viewer.dataSources.add(dataSource);
            portTerminalLayer = dataSource;
            // Optionally set some properties like name, show, etc.
            portTerminalLayer.name = 'Port Terminals';
            portTerminalLayer.show = true;
        }).catch(function(error) {
            console.error('Error loading Port Terminals GeoJSON:', error);
        });
}
    
// Function to load the Long Beach data layer
function loadLongBeachDataLayer() {
    Cesium.GeoJsonDataSource.load(longBeachGeoJsonUrl)
        .then(function(dataSource) {
            viewer.dataSources.add(dataSource);
            longBeachDataLayer = dataSource;
        }).catch(function(error) {
            console.error('Error loading Long Beach GeoJSON:', error);
        });
}

// Function to load GeoJson layers based on scene
function checkSceneForGeoJsonLayers(sceneIndex) {
  // Check if the current scene is the Port Terminals scene
  if (sceneIndex === 2) {
    if (!portTerminalLayer) {
      loadPortTerminalsDataLayer(); // Corrected function name
    }
  } else {
    // If we are not in the Port Terminals scene, remove the layer if it exists
    if (portTerminalLayer) {
      viewer.dataSources.remove(portTerminalLayer);
      portTerminalLayer = null;
    }
  }
  
  // Check if the current scene is the Long Beach Data scene
  if (sceneIndex === 12) {
    if (!longBeachDataLayer) {
      loadLongBeachDataLayer();
    }
  } else {
    // If we are not in the Long Beach Data scene, remove the layer if it exists
    if (longBeachDataLayer) {
      viewer.dataSources.remove(longBeachDataLayer);
      longBeachDataLayer = null;
    }
  }
}
    // Function to navigate to the specified scene

// Section 4 

    function displayInfoBox(pickedFeature) {        
    var infoBox = document.getElementById('infoBox');
    if (pickedFeature && pickedFeature.properties) {
    var properties = pickedFeature.properties.getValue(Cesium.JulianDate.now());
        var content = '<h4>Feature Information</h4>';
        
for (var key in properties) {
            if (properties.hasOwnProperty(key)) {
                content += '<strong>' + key + '</strong>: ' + properties[key] + '<br>';
            }
        }   
        infoBox.innerHTML = content; 
        infoBox.style.display = 'block'; 
    } else {
        infoBox.innerHTML = "<p>No data available.</p>";
        infoBox.style.display = 'block'; 
    }
}

window.toggleHeatmap = function() {
 heatmapVisible = !heatmapVisible; // Toggle the heatmap visibility state
    if (heatmapVisible) {
        if (!heatmapLayer) {
            // Add the heatmap layer if it doesn't exist
            heatmapLayer = viewer.imageryLayers.addImageryProvider(heatmapImageryProvider);
        }
        toggleButton.textContent = 'Hide Air Quality';
        toggleButton.classList.add('on'); // Add class 'on' to represent the active state
    } else {
        if (heatmapLayer) {
            // Remove the heatmap layer if it exists
            viewer.imageryLayers.remove(heatmapLayer);
            heatmapLayer = null;
        }
        toggleButton.textContent = 'Show Air Quality';
        toggleButton.classList.remove('on'); // Remove class 'on' to represent the inactive state
    }
};

window.nextScene = function() {
      if (currentSceneIndex < scenes.length - 1) {
        currentSceneIndex++;
        updateScene(currentSceneIndex); // Apply the new scene changes
        document.getElementById('slide-back').style.display = 'block'; // Show 'Previous' button
        document.getElementById('slide-forward').style.display = 'block'; // Ensure 'Next' button is visible unless it's the last scene
    }
    // Hide 'Next' button at the last scene
    if (currentSceneIndex === scenes.length - 1) {
        document.getElementById('slide-forward').style.display = 'none';
    }
};

window.previousScene = function() {
 if (currentSceneIndex > 0) {
        currentSceneIndex--;
        updateScene(currentSceneIndex); // Apply the new scene changes
        document.getElementById('slide-forward').style.display = 'block'; // Show 'Next' button
    }
    // Hide 'Previous' button at the first scene
    if (currentSceneIndex === 0) {
        document.getElementById('slide-back').style.display = 'none';
    } else {
        document.getElementById('slide-back').style.display = 'block'; // Show 'Previous' button if not the first scene
    }
};

// Function to show the scene container
function showSceneContainer() {
    var sceneContainer = document.getElementById('scene-container');
    if (sceneContainer) {
        sceneContainer.style.display = 'block';
    }
}

    
// Section 5

    function onFlyoverComplete() {
    document.getElementById('navigation-buttons').style.visibility = 'visible';
    showSceneContainer();
    document.getElementById('slide-forward').style.display = 'block';
    document.getElementById('slide-back').style.display = 'none'; // Hide the "Previous" button on the first scene
    updateScene(); // This will load the first scene
}

window.flyToLocationAndHold = function(index) {
    if (index >= locations.length) {
        onFlyoverComplete();
    } else {
        viewer.camera.flyTo({
            destination: locations[index],
            complete: function() {
                setTimeout(function() {
                    flyToLocationAndHold(index + 1);
                }, 1500); // Time to hold on each location
            }
        });
    }
};

window.closeScene = function() {
    var sceneContainer = document.getElementById('scene-container');
    if (sceneContainer) {
        sceneContainer.style.display = 'none'; // Hide the scene container
    }
    // Optional: Add logic to navigate back to the main view or do nothing
};

    // Section 6
    // This event listener is better placed outside the IIFE
    window.addEventListener('load', function() {
        slides = document.querySelectorAll('.slide');
    });

    document.addEventListener('DOMContentLoaded', function() {
  toggleButton = document.getElementById('toggleAirQuality');
    if (toggleButton) {
        toggleButton.addEventListener('click', window.toggleHeatmap);
    }

    // Initialize slides and set the first slide to active, if any are present
    slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }

    // Hide the navigation buttons initially
    document.getElementById('navigation-buttons').style.visibility = 'hidden';
    document.getElementById('slide-forward').style.display = 'none';
    document.getElementById('slide-back').style.display = 'none';
});

// Define next slide function
window.nextSlide = function() {
   if (currentSlideIndex < scenes.length - 1) {
        slides[currentSlideIndex].classList.remove('active');
   }
        currentSlideIndex++;

    if(slides[currentSlideIndex]) {
        slides[currentSlideIndex].classList.add('active');
   } else {
            console.error('No slide exists at index:', currentSlideIndex);
        }
}
window.closeInstructions = function() {
    // Hide the instruction box
    document.getElementById('instruction-box').style.display = 'none';
    // Start the flyover sequence
    flyToLocationAndHold(0); // Ensure this function is defined elsewhere
};

    
 })();
