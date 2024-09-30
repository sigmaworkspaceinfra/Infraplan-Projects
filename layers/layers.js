var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Boundry_1 = new ol.format.GeoJSON();
var features_Boundry_1 = format_Boundry_1.readFeatures(json_Boundry_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundry_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundry_1.addFeatures(features_Boundry_1);
var lyr_Boundry_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundry_1, 
                style: style_Boundry_1,
                popuplayertitle: "Boundry",
                interactive: false,
                title: '<img src="styles/legend/Boundry_1.png" /> Boundry'
            });
var format_Architectural3DMapping_2 = new ol.format.GeoJSON();
var features_Architectural3DMapping_2 = format_Architectural3DMapping_2.readFeatures(json_Architectural3DMapping_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Architectural3DMapping_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Architectural3DMapping_2.addFeatures(features_Architectural3DMapping_2);
var lyr_Architectural3DMapping_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Architectural3DMapping_2, 
                style: style_Architectural3DMapping_2,
                popuplayertitle: "Architectural 3D Mapping",
                interactive: true,
                title: '<img src="styles/legend/Architectural3DMapping_2.png" /> Architectural 3D Mapping'
            });
var format_CityDevelopmentPlanCitySanitationPlan_3 = new ol.format.GeoJSON();
var features_CityDevelopmentPlanCitySanitationPlan_3 = format_CityDevelopmentPlanCitySanitationPlan_3.readFeatures(json_CityDevelopmentPlanCitySanitationPlan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityDevelopmentPlanCitySanitationPlan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityDevelopmentPlanCitySanitationPlan_3.addFeatures(features_CityDevelopmentPlanCitySanitationPlan_3);
var lyr_CityDevelopmentPlanCitySanitationPlan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CityDevelopmentPlanCitySanitationPlan_3, 
                style: style_CityDevelopmentPlanCitySanitationPlan_3,
                popuplayertitle: "City Development Plan & City Sanitation Plan",
                interactive: true,
                title: '<img src="styles/legend/CityDevelopmentPlanCitySanitationPlan_3.png" /> City Development Plan & City Sanitation Plan'
            });
var format_SolarEnergy_4 = new ol.format.GeoJSON();
var features_SolarEnergy_4 = format_SolarEnergy_4.readFeatures(json_SolarEnergy_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolarEnergy_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolarEnergy_4.addFeatures(features_SolarEnergy_4);
var lyr_SolarEnergy_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SolarEnergy_4, 
                style: style_SolarEnergy_4,
                popuplayertitle: "Solar Energy ",
                interactive: true,
                title: '<img src="styles/legend/SolarEnergy_4.png" /> Solar Energy '
            });
var format_UndergroundDrainageScheme_5 = new ol.format.GeoJSON();
var features_UndergroundDrainageScheme_5 = format_UndergroundDrainageScheme_5.readFeatures(json_UndergroundDrainageScheme_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UndergroundDrainageScheme_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UndergroundDrainageScheme_5.addFeatures(features_UndergroundDrainageScheme_5);
var lyr_UndergroundDrainageScheme_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UndergroundDrainageScheme_5, 
                style: style_UndergroundDrainageScheme_5,
                popuplayertitle: "Underground Drainage Scheme",
                interactive: true,
                title: '<img src="styles/legend/UndergroundDrainageScheme_5.png" /> Underground Drainage Scheme'
            });
var format_HydraulicModelStudies_6 = new ol.format.GeoJSON();
var features_HydraulicModelStudies_6 = format_HydraulicModelStudies_6.readFeatures(json_HydraulicModelStudies_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HydraulicModelStudies_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HydraulicModelStudies_6.addFeatures(features_HydraulicModelStudies_6);
var lyr_HydraulicModelStudies_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HydraulicModelStudies_6, 
                style: style_HydraulicModelStudies_6,
                popuplayertitle: "Hydraulic Model Studies",
                interactive: true,
                title: '<img src="styles/legend/HydraulicModelStudies_6.png" /> Hydraulic Model Studies'
            });
var format_DrinkingWaterSupplyWorks_7 = new ol.format.GeoJSON();
var features_DrinkingWaterSupplyWorks_7 = format_DrinkingWaterSupplyWorks_7.readFeatures(json_DrinkingWaterSupplyWorks_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrinkingWaterSupplyWorks_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrinkingWaterSupplyWorks_7.addFeatures(features_DrinkingWaterSupplyWorks_7);
var lyr_DrinkingWaterSupplyWorks_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrinkingWaterSupplyWorks_7, 
                style: style_DrinkingWaterSupplyWorks_7,
                popuplayertitle: "Drinking Water Supply Works",
                interactive: true,
                title: '<img src="styles/legend/DrinkingWaterSupplyWorks_7.png" /> Drinking Water Supply Works'
            });
var group_Dump = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Dump"});
var group_datawithsymbols = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "data with symbols"});

lyr_GoogleMaps_0.setVisible(true);lyr_Boundry_1.setVisible(true);lyr_Architectural3DMapping_2.setVisible(true);lyr_CityDevelopmentPlanCitySanitationPlan_3.setVisible(true);lyr_SolarEnergy_4.setVisible(true);lyr_UndergroundDrainageScheme_5.setVisible(true);lyr_HydraulicModelStudies_6.setVisible(true);lyr_DrinkingWaterSupplyWorks_7.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Boundry_1,lyr_Architectural3DMapping_2,lyr_CityDevelopmentPlanCitySanitationPlan_3,lyr_SolarEnergy_4,lyr_UndergroundDrainageScheme_5,lyr_HydraulicModelStudies_6,lyr_DrinkingWaterSupplyWorks_7];
lyr_Boundry_1.set('fieldAliases', {'STATE': 'STATE', 'State_LGD': 'State_LGD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Architectural3DMapping_2.set('fieldAliases', {'Name': 'Name', 'Descri.': 'Descri.', });
lyr_CityDevelopmentPlanCitySanitationPlan_3.set('fieldAliases', {'Descri.': 'Descri.', 'Name': 'Name', });
lyr_SolarEnergy_4.set('fieldAliases', {'Name': 'Name', 'Descri.': 'Descri.', });
lyr_UndergroundDrainageScheme_5.set('fieldAliases', {'Name': 'Name', 'Descri.': 'Descri.', });
lyr_HydraulicModelStudies_6.set('fieldAliases', {'Name': 'Name', 'Descri.': 'Descri.', 'Photo': 'Photo', 'Photos': 'Photos', });
lyr_DrinkingWaterSupplyWorks_7.set('fieldAliases', {'Name': 'Name', 'Descri.': 'Descri.', });
lyr_Boundry_1.set('fieldImages', {'STATE': 'TextEdit', 'State_LGD': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Architectural3DMapping_2.set('fieldImages', {'Name': 'TextEdit', 'Descri.': 'TextEdit', });
lyr_CityDevelopmentPlanCitySanitationPlan_3.set('fieldImages', {'Descri.': 'TextEdit', 'Name': 'TextEdit', });
lyr_SolarEnergy_4.set('fieldImages', {'Name': '', 'Descri.': 'TextEdit', });
lyr_UndergroundDrainageScheme_5.set('fieldImages', {'Name': 'TextEdit', 'Descri.': 'TextEdit', });
lyr_HydraulicModelStudies_6.set('fieldImages', {'Name': 'TextEdit', 'Descri.': 'TextEdit', 'Photo': 'ExternalResource', 'Photos': 'ExternalResource', });
lyr_DrinkingWaterSupplyWorks_7.set('fieldImages', {'Name': 'TextEdit', 'Descri.': 'TextEdit', });
lyr_Boundry_1.set('fieldLabels', {'STATE': 'no label', 'State_LGD': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Architectural3DMapping_2.set('fieldLabels', {'Name': 'inline label - always visible', 'Descri.': 'inline label - visible with data', });
lyr_CityDevelopmentPlanCitySanitationPlan_3.set('fieldLabels', {'Descri.': 'inline label - always visible', 'Name': 'inline label - visible with data', });
lyr_SolarEnergy_4.set('fieldLabels', {'Name': 'inline label - visible with data', 'Descri.': 'inline label - visible with data', });
lyr_UndergroundDrainageScheme_5.set('fieldLabels', {'Name': 'inline label - visible with data', 'Descri.': 'inline label - visible with data', });
lyr_HydraulicModelStudies_6.set('fieldLabels', {'Name': 'inline label - visible with data', 'Descri.': 'inline label - visible with data', 'Photo': 'inline label - visible with data', 'Photos': 'inline label - visible with data', });
lyr_DrinkingWaterSupplyWorks_7.set('fieldLabels', {'Name': 'inline label - always visible', 'Descri.': 'inline label - visible with data', });
lyr_DrinkingWaterSupplyWorks_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});