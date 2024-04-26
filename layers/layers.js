var wms_layers = [];

var lyr_elevation_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "elevation",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/elevation_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-235896.550000, -520278.250000, 223215.950000, 90944.250000]
                            })
                        });
var lyr_Fertility_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Fertility",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Fertility_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-232682.800000, -516269.500000, 219817.200000, 85730.500000]
                            })
                        });
var lyr_Irrigation_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Irrigation",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Irrigation_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-227682.800000, -512769.500000, 219817.200000, 82730.500000]
                            })
                        });
var lyr_Litteracy_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Litteracy",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Litteracy_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-232682.800000, -516269.500000, 219817.200000, 85730.500000]
                            })
                        });
var lyr_SRG_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "SRG",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SRG_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-227682.800000, -512769.500000, 219817.200000, 82730.500000]
                            })
                        });

lyr_elevation_0.setVisible(true);lyr_Fertility_1.setVisible(true);lyr_Irrigation_2.setVisible(true);lyr_Litteracy_3.setVisible(true);lyr_SRG_4.setVisible(true);
var layersList = [lyr_elevation_0,lyr_Fertility_1,lyr_Irrigation_2,lyr_Litteracy_3,lyr_SRG_4];
