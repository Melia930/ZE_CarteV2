var wms_layers = [];

var format_d_depOccitanie_s_r76_0 = new ol.format.GeoJSON();
var features_d_depOccitanie_s_r76_0 = format_d_depOccitanie_s_r76_0.readFeatures(json_d_depOccitanie_s_r76_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_d_depOccitanie_s_r76_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_d_depOccitanie_s_r76_0.addFeatures(features_d_depOccitanie_s_r76_0);
var lyr_d_depOccitanie_s_r76_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_d_depOccitanie_s_r76_0, 
                style: style_d_depOccitanie_s_r76_0,
                interactive: true,
                title: '<img src="styles/legend/d_depOccitanie_s_r76_0.png" /> d_depOccitanie_s_r76'
            });

lyr_d_depOccitanie_s_r76_0.setVisible(true);
var layersList = [lyr_d_depOccitanie_s_r76_0];
lyr_d_depOccitanie_s_r76_0.set('fieldAliases', {'ID': 'ID', 'NOM_DEP_M': 'NOM_DEP_M', 'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'montantbat': 'montantbat', 'montanttp': 'montanttp', 'montantbtp': 'montantbtp', });
lyr_d_depOccitanie_s_r76_0.set('fieldImages', {'ID': '', 'NOM_DEP_M': '', 'NOM_DEP': '', 'INSEE_DEP': '', 'INSEE_REG': '', 'montantbat': '', 'montanttp': '', 'montantbtp': '', });
lyr_d_depOccitanie_s_r76_0.set('fieldLabels', {'ID': 'inline label', 'NOM_DEP_M': 'no label', 'NOM_DEP': 'header label', 'INSEE_DEP': 'inline label', 'INSEE_REG': 'header label', 'montantbat': 'no label', 'montanttp': 'no label', 'montantbtp': 'no label', });
lyr_d_depOccitanie_s_r76_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});