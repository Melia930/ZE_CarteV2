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
var format_Test_dep_dynamique_1 = new ol.format.GeoJSON();
var features_Test_dep_dynamique_1 = format_Test_dep_dynamique_1.readFeatures(json_Test_dep_dynamique_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Test_dep_dynamique_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Test_dep_dynamique_1.addFeatures(features_Test_dep_dynamique_1);
var lyr_Test_dep_dynamique_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Test_dep_dynamique_1, 
                style: style_Test_dep_dynamique_1,
                interactive: true,
    title: 'Test_dep_dynamique<br />\
    <img src="styles/legend/Test_dep_dynamique_1_0.png" /> 1175623<br />\
    <img src="styles/legend/Test_dep_dynamique_1_1.png" /> 1400039<br />\
    <img src="styles/legend/Test_dep_dynamique_1_2.png" /> 153287<br />\
    <img src="styles/legend/Test_dep_dynamique_1_3.png" /> 174094<br />\
    <img src="styles/legend/Test_dep_dynamique_1_4.png" /> 191377<br />\
    <img src="styles/legend/Test_dep_dynamique_1_5.png" /> 229567<br />\
    <img src="styles/legend/Test_dep_dynamique_1_6.png" /> 260669<br />\
    <img src="styles/legend/Test_dep_dynamique_1_7.png" /> 279595<br />\
    <img src="styles/legend/Test_dep_dynamique_1_8.png" /> 374070<br />\
    <img src="styles/legend/Test_dep_dynamique_1_9.png" /> 389844<br />\
    <img src="styles/legend/Test_dep_dynamique_1_10.png" /> 479979<br />\
    <img src="styles/legend/Test_dep_dynamique_1_11.png" /> 748437<br />\
    <img src="styles/legend/Test_dep_dynamique_1_12.png" /> 76604<br />\
    <img src="styles/legend/Test_dep_dynamique_1_13.png" /> <br />'
        });
var format_Testpoints_dep_dynamique_2 = new ol.format.GeoJSON();
var features_Testpoints_dep_dynamique_2 = format_Testpoints_dep_dynamique_2.readFeatures(json_Testpoints_dep_dynamique_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Testpoints_dep_dynamique_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Testpoints_dep_dynamique_2.addFeatures(features_Testpoints_dep_dynamique_2);cluster_Testpoints_dep_dynamique_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Testpoints_dep_dynamique_2
});
var lyr_Testpoints_dep_dynamique_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Testpoints_dep_dynamique_2, 
                style: style_Testpoints_dep_dynamique_2,
                interactive: true,
                title: '<img src="styles/legend/Testpoints_dep_dynamique_2.png" /> Testpoints_dep_dynamique'
            });

lyr_d_depOccitanie_s_r76_0.setVisible(false);lyr_Test_dep_dynamique_1.setVisible(true);lyr_Testpoints_dep_dynamique_2.setVisible(true);
var layersList = [lyr_d_depOccitanie_s_r76_0,lyr_Test_dep_dynamique_1,lyr_Testpoints_dep_dynamique_2];
lyr_d_depOccitanie_s_r76_0.set('fieldAliases', {'ID': 'ID', 'NOM_DEP_M': 'NOM_DEP_M', 'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'montantbat': 'montantbat', 'montanttp': 'montanttp', 'montantbtp': 'montantbtp', 'LIBDEPT': 'LIBDEPT', 'pop2019': 'pop2019', 'pop_partRegion': 'pop_partRegion', 'evol_pop': 'evol_pop', 'pop_15ansplus': 'pop_15ansplus', 'niveau_vie_median': 'niveau_vie_median', 'niveau_vie_decile1': 'niveau_vie_decile1', 'niveau_vie_decile9': 'niveau_vie_decile9', 'taux_pauvrete': 'taux_pauvrete', 'taux_pauvrete_moins30': 'taux_pauvrete_moins30', 'diplôme_pas_peu': 'diplôme_pas_peu', 'diplôme_BEPC_brevet': 'diplôme_BEPC_brevet', 'diplôme_CAP_BEP': 'diplôme_CAP_BEP', 'diplôme_BAC': 'diplôme_BAC', 'diplôme_EnSup': 'diplôme_EnSup', 'part_0diplomes_nonScolarise': 'part_0diplomes_nonScolarise', 'Nb_non_scolarise': 'Nb_non_scolarise', 'taux_activite_15a24ans': 'taux_activite_15a24ans', 'taux_activite_ensemble': 'taux_activite_ensemble', 'taux_chomage': 'taux_chomage', 'Etab_construction': 'Etab_construction', 'Etab_TouSecteur': 'Etab_TouSecteur', 'creation_ent_TouSecteur': 'creation_ent_TouSecteur', 'part_creation_construction': 'part_creation_construction', 'etab_employeurs': 'etab_employeurs', 'part_effectif_construction': 'part_effectif_construction', 'pas_transport': 'pas_transport', 'marchePied': 'marchePied', 'velo': 'velo', 'deuxroues': 'deuxroues', 'voiture': 'voiture', 'transportsCommun': 'transportsCommun', 'taux_independance': 'taux_independance', 'indicateur_jeunesse': 'indicateur_jeunesse', 'nb_emploi_LT': 'nb_emploi_LT', 'taux_activite_25a54ans': 'taux_activite_25a54ans', 'taux_activite_55a64ans': 'taux_activite_55a64ans', 'part_appartement': 'part_appartement', 'logements': 'logements', 'part_RP': 'part_RP', 'part_RS': 'part_RS', 'part_LV': 'part_LV', 'part_proprio_RS': 'part_proprio_RS', 'part_maisons': 'part_maisons', 'part_RP_av46': 'part_RP_av46', 'AUT_Logt2020': 'AUT_Logt2020', 'COM_Logt2020': 'COM_Logt2020', 'COM_part_LogtIndiv2020': 'COM_part_LogtIndiv2020', 'AUT_part_LogtIndiv2020': 'AUT_part_LogtIndiv2020', 'AUT_part_LogtColl2020': 'AUT_part_LogtColl2020', 'COM_part_LogtColl2020': 'COM_part_LogtColl2020', });
lyr_Test_dep_dynamique_1.set('fieldAliases', {'ID': 'ID', 'NOM_DEP_M': 'NOM_DEP_M', 'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'montantbat': 'montantbat', 'montanttp': 'montanttp', 'montantbtp': 'montantbtp', 'LIBDEPT': 'LIBDEPT', 'pop2019': 'pop2019', 'pop_partRe': 'pop_partRe', 'evol_pop': 'evol_pop', 'pop_15ansp': 'pop_15ansp', 'niveau_vie': 'niveau_vie', 'niveau_v_1': 'niveau_v_1', 'niveau_v_2': 'niveau_v_2', 'taux_pauvr': 'taux_pauvr', 'taux_pau_1': 'taux_pau_1', 'diplôme_p': 'diplôme_p', 'diplôme_B': 'diplôme_B', 'diplôme_C': 'diplôme_C', 'diplôme_1': 'diplôme_1', 'diplôme_E': 'diplôme_E', 'part_0dipl': 'part_0dipl', 'Nb_non_sco': 'Nb_non_sco', 'taux_activ': 'taux_activ', 'taux_act_1': 'taux_act_1', 'taux_choma': 'taux_choma', 'Etab_const': 'Etab_const', 'Etab_TouSe': 'Etab_TouSe', 'creation_e': 'creation_e', 'part_creat': 'part_creat', 'etab_emplo': 'etab_emplo', 'part_effec': 'part_effec', 'pas_transp': 'pas_transp', 'marchePied': 'marchePied', 'velo': 'velo', 'deuxroues': 'deuxroues', 'voiture': 'voiture', 'transports': 'transports', 'taux_indep': 'taux_indep', 'indicateur': 'indicateur', 'nb_emploi_': 'nb_emploi_', 'taux_act_2': 'taux_act_2', 'taux_act_3': 'taux_act_3', 'part_appar': 'part_appar', 'logements': 'logements', 'part_RP': 'part_RP', 'part_RS': 'part_RS', 'part_LV': 'part_LV', 'part_propr': 'part_propr', 'part_maiso': 'part_maiso', 'part_RP_av': 'part_RP_av', 'AUT_Logt20': 'AUT_Logt20', 'COM_Logt20': 'COM_Logt20', 'COM_part_L': 'COM_part_L', 'AUT_part_L': 'AUT_part_L', 'AUT_part_1': 'AUT_part_1', 'COM_part_1': 'COM_part_1', });
lyr_Testpoints_dep_dynamique_2.set('fieldAliases', {'ID': 'ID', 'NOM_DEP_M': 'NOM_DEP_M', 'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'montantbat': 'montantbat', 'montanttp': 'montanttp', 'montantbtp': 'montantbtp', 'LIBDEPT': 'LIBDEPT', 'pop2019': 'pop2019', 'pop_partRe': 'pop_partRe', 'evol_pop': 'evol_pop', 'pop_15ansp': 'pop_15ansp', 'niveau_vie': 'niveau_vie', 'niveau_v_1': 'niveau_v_1', 'niveau_v_2': 'niveau_v_2', 'taux_pauvr': 'taux_pauvr', 'taux_pau_1': 'taux_pau_1', 'diplôme_p': 'diplôme_p', 'diplôme_B': 'diplôme_B', 'diplôme_C': 'diplôme_C', 'diplôme_1': 'diplôme_1', 'diplôme_E': 'diplôme_E', 'part_0dipl': 'part_0dipl', 'Nb_non_sco': 'Nb_non_sco', 'taux_activ': 'taux_activ', 'taux_act_1': 'taux_act_1', 'taux_choma': 'taux_choma', 'Etab_const': 'Etab_const', 'Etab_TouSe': 'Etab_TouSe', 'creation_e': 'creation_e', 'part_creat': 'part_creat', 'etab_emplo': 'etab_emplo', 'part_effec': 'part_effec', 'pas_transp': 'pas_transp', 'marchePied': 'marchePied', 'velo': 'velo', 'deuxroues': 'deuxroues', 'voiture': 'voiture', 'transports': 'transports', 'taux_indep': 'taux_indep', 'indicateur': 'indicateur', 'nb_emploi_': 'nb_emploi_', 'taux_act_2': 'taux_act_2', 'taux_act_3': 'taux_act_3', 'part_appar': 'part_appar', 'logements': 'logements', 'part_RP': 'part_RP', 'part_RS': 'part_RS', 'part_LV': 'part_LV', 'part_propr': 'part_propr', 'part_maiso': 'part_maiso', 'part_RP_av': 'part_RP_av', 'AUT_Logt20': 'AUT_Logt20', 'COM_Logt20': 'COM_Logt20', 'COM_part_L': 'COM_part_L', 'AUT_part_L': 'AUT_part_L', 'AUT_part_1': 'AUT_part_1', 'COM_part_1': 'COM_part_1', });
lyr_d_depOccitanie_s_r76_0.set('fieldImages', {'ID': 'TextEdit', 'NOM_DEP_M': 'TextEdit', 'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'montantbat': 'TextEdit', 'montanttp': 'TextEdit', 'montantbtp': 'TextEdit', 'LIBDEPT': 'TextEdit', 'pop2019': 'TextEdit', 'pop_partRegion': 'TextEdit', 'evol_pop': 'TextEdit', 'pop_15ansplus': 'TextEdit', 'niveau_vie_median': 'TextEdit', 'niveau_vie_decile1': 'TextEdit', 'niveau_vie_decile9': 'TextEdit', 'taux_pauvrete': 'TextEdit', 'taux_pauvrete_moins30': 'TextEdit', 'diplôme_pas_peu': 'TextEdit', 'diplôme_BEPC_brevet': 'TextEdit', 'diplôme_CAP_BEP': 'TextEdit', 'diplôme_BAC': 'TextEdit', 'diplôme_EnSup': 'TextEdit', 'part_0diplomes_nonScolarise': 'TextEdit', 'Nb_non_scolarise': 'TextEdit', 'taux_activite_15a24ans': 'TextEdit', 'taux_activite_ensemble': 'TextEdit', 'taux_chomage': 'TextEdit', 'Etab_construction': 'TextEdit', 'Etab_TouSecteur': 'TextEdit', 'creation_ent_TouSecteur': 'TextEdit', 'part_creation_construction': 'TextEdit', 'etab_employeurs': 'TextEdit', 'part_effectif_construction': 'TextEdit', 'pas_transport': 'TextEdit', 'marchePied': 'TextEdit', 'velo': 'TextEdit', 'deuxroues': 'TextEdit', 'voiture': 'TextEdit', 'transportsCommun': 'TextEdit', 'taux_independance': 'TextEdit', 'indicateur_jeunesse': 'TextEdit', 'nb_emploi_LT': 'TextEdit', 'taux_activite_25a54ans': 'TextEdit', 'taux_activite_55a64ans': 'TextEdit', 'part_appartement': 'TextEdit', 'logements': 'TextEdit', 'part_RP': 'TextEdit', 'part_RS': 'TextEdit', 'part_LV': 'TextEdit', 'part_proprio_RS': 'TextEdit', 'part_maisons': 'TextEdit', 'part_RP_av46': 'TextEdit', 'AUT_Logt2020': 'TextEdit', 'COM_Logt2020': 'TextEdit', 'COM_part_LogtIndiv2020': 'TextEdit', 'AUT_part_LogtIndiv2020': 'TextEdit', 'AUT_part_LogtColl2020': 'TextEdit', 'COM_part_LogtColl2020': 'TextEdit', });
lyr_Test_dep_dynamique_1.set('fieldImages', {'ID': 'TextEdit', 'NOM_DEP_M': 'TextEdit', 'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'montantbat': 'TextEdit', 'montanttp': 'TextEdit', 'montantbtp': 'TextEdit', 'LIBDEPT': 'TextEdit', 'pop2019': 'TextEdit', 'pop_partRe': 'TextEdit', 'evol_pop': 'TextEdit', 'pop_15ansp': 'TextEdit', 'niveau_vie': 'TextEdit', 'niveau_v_1': 'TextEdit', 'niveau_v_2': 'TextEdit', 'taux_pauvr': 'TextEdit', 'taux_pau_1': 'TextEdit', 'diplôme_p': 'TextEdit', 'diplôme_B': 'TextEdit', 'diplôme_C': 'TextEdit', 'diplôme_1': 'TextEdit', 'diplôme_E': 'TextEdit', 'part_0dipl': 'TextEdit', 'Nb_non_sco': 'TextEdit', 'taux_activ': 'TextEdit', 'taux_act_1': 'TextEdit', 'taux_choma': 'TextEdit', 'Etab_const': 'TextEdit', 'Etab_TouSe': 'TextEdit', 'creation_e': 'TextEdit', 'part_creat': 'TextEdit', 'etab_emplo': 'TextEdit', 'part_effec': 'TextEdit', 'pas_transp': 'TextEdit', 'marchePied': 'TextEdit', 'velo': 'TextEdit', 'deuxroues': 'TextEdit', 'voiture': 'TextEdit', 'transports': 'TextEdit', 'taux_indep': 'TextEdit', 'indicateur': 'TextEdit', 'nb_emploi_': 'TextEdit', 'taux_act_2': 'TextEdit', 'taux_act_3': 'TextEdit', 'part_appar': 'TextEdit', 'logements': 'TextEdit', 'part_RP': 'TextEdit', 'part_RS': 'TextEdit', 'part_LV': 'TextEdit', 'part_propr': 'TextEdit', 'part_maiso': 'TextEdit', 'part_RP_av': 'TextEdit', 'AUT_Logt20': 'TextEdit', 'COM_Logt20': 'TextEdit', 'COM_part_L': 'TextEdit', 'AUT_part_L': 'TextEdit', 'AUT_part_1': 'TextEdit', 'COM_part_1': 'TextEdit', });
lyr_Testpoints_dep_dynamique_2.set('fieldImages', {'ID': 'TextEdit', 'NOM_DEP_M': 'TextEdit', 'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'montantbat': 'TextEdit', 'montanttp': 'TextEdit', 'montantbtp': 'TextEdit', 'LIBDEPT': 'TextEdit', 'pop2019': 'TextEdit', 'pop_partRe': 'TextEdit', 'evol_pop': 'TextEdit', 'pop_15ansp': 'TextEdit', 'niveau_vie': 'TextEdit', 'niveau_v_1': 'TextEdit', 'niveau_v_2': 'TextEdit', 'taux_pauvr': 'TextEdit', 'taux_pau_1': 'TextEdit', 'diplôme_p': 'TextEdit', 'diplôme_B': 'TextEdit', 'diplôme_C': 'TextEdit', 'diplôme_1': 'TextEdit', 'diplôme_E': 'TextEdit', 'part_0dipl': 'TextEdit', 'Nb_non_sco': 'TextEdit', 'taux_activ': 'TextEdit', 'taux_act_1': 'TextEdit', 'taux_choma': 'TextEdit', 'Etab_const': 'TextEdit', 'Etab_TouSe': 'TextEdit', 'creation_e': 'TextEdit', 'part_creat': 'TextEdit', 'etab_emplo': 'TextEdit', 'part_effec': 'TextEdit', 'pas_transp': 'TextEdit', 'marchePied': 'TextEdit', 'velo': 'TextEdit', 'deuxroues': 'TextEdit', 'voiture': 'TextEdit', 'transports': 'TextEdit', 'taux_indep': 'TextEdit', 'indicateur': 'TextEdit', 'nb_emploi_': 'TextEdit', 'taux_act_2': 'TextEdit', 'taux_act_3': 'TextEdit', 'part_appar': 'TextEdit', 'logements': 'TextEdit', 'part_RP': 'TextEdit', 'part_RS': 'TextEdit', 'part_LV': 'TextEdit', 'part_propr': 'TextEdit', 'part_maiso': 'TextEdit', 'part_RP_av': 'TextEdit', 'AUT_Logt20': 'TextEdit', 'COM_Logt20': 'TextEdit', 'COM_part_L': 'TextEdit', 'AUT_part_L': 'TextEdit', 'AUT_part_1': 'TextEdit', 'COM_part_1': 'TextEdit', });
lyr_d_depOccitanie_s_r76_0.set('fieldLabels', {'ID': 'no label', 'NOM_DEP_M': 'no label', 'NOM_DEP': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'montantbat': 'no label', 'montanttp': 'no label', 'montantbtp': 'no label', 'LIBDEPT': 'no label', 'pop2019': 'no label', 'pop_partRegion': 'no label', 'evol_pop': 'no label', 'pop_15ansplus': 'no label', 'niveau_vie_median': 'no label', 'niveau_vie_decile1': 'no label', 'niveau_vie_decile9': 'no label', 'taux_pauvrete': 'no label', 'taux_pauvrete_moins30': 'no label', 'diplôme_pas_peu': 'no label', 'diplôme_BEPC_brevet': 'no label', 'diplôme_CAP_BEP': 'no label', 'diplôme_BAC': 'no label', 'diplôme_EnSup': 'no label', 'part_0diplomes_nonScolarise': 'no label', 'Nb_non_scolarise': 'no label', 'taux_activite_15a24ans': 'no label', 'taux_activite_ensemble': 'no label', 'taux_chomage': 'no label', 'Etab_construction': 'no label', 'Etab_TouSecteur': 'no label', 'creation_ent_TouSecteur': 'no label', 'part_creation_construction': 'no label', 'etab_employeurs': 'no label', 'part_effectif_construction': 'no label', 'pas_transport': 'no label', 'marchePied': 'no label', 'velo': 'no label', 'deuxroues': 'no label', 'voiture': 'no label', 'transportsCommun': 'no label', 'taux_independance': 'no label', 'indicateur_jeunesse': 'no label', 'nb_emploi_LT': 'no label', 'taux_activite_25a54ans': 'no label', 'taux_activite_55a64ans': 'no label', 'part_appartement': 'no label', 'logements': 'no label', 'part_RP': 'no label', 'part_RS': 'no label', 'part_LV': 'no label', 'part_proprio_RS': 'no label', 'part_maisons': 'no label', 'part_RP_av46': 'no label', 'AUT_Logt2020': 'no label', 'COM_Logt2020': 'no label', 'COM_part_LogtIndiv2020': 'no label', 'AUT_part_LogtIndiv2020': 'no label', 'AUT_part_LogtColl2020': 'no label', 'COM_part_LogtColl2020': 'no label', });
lyr_Test_dep_dynamique_1.set('fieldLabels', {'ID': 'inline label', 'NOM_DEP_M': 'inline label', 'NOM_DEP': 'inline label', 'INSEE_DEP': 'inline label', 'INSEE_REG': 'inline label', 'montantbat': 'inline label', 'montanttp': 'inline label', 'montantbtp': 'inline label', 'LIBDEPT': 'inline label', 'pop2019': 'inline label', 'pop_partRe': 'inline label', 'evol_pop': 'inline label', 'pop_15ansp': 'inline label', 'niveau_vie': 'inline label', 'niveau_v_1': 'inline label', 'niveau_v_2': 'inline label', 'taux_pauvr': 'inline label', 'taux_pau_1': 'inline label', 'diplôme_p': 'inline label', 'diplôme_B': 'inline label', 'diplôme_C': 'inline label', 'diplôme_1': 'inline label', 'diplôme_E': 'inline label', 'part_0dipl': 'inline label', 'Nb_non_sco': 'inline label', 'taux_activ': 'inline label', 'taux_act_1': 'inline label', 'taux_choma': 'inline label', 'Etab_const': 'inline label', 'Etab_TouSe': 'inline label', 'creation_e': 'inline label', 'part_creat': 'inline label', 'etab_emplo': 'inline label', 'part_effec': 'inline label', 'pas_transp': 'inline label', 'marchePied': 'inline label', 'velo': 'inline label', 'deuxroues': 'inline label', 'voiture': 'inline label', 'transports': 'inline label', 'taux_indep': 'inline label', 'indicateur': 'inline label', 'nb_emploi_': 'inline label', 'taux_act_2': 'inline label', 'taux_act_3': 'inline label', 'part_appar': 'inline label', 'logements': 'inline label', 'part_RP': 'inline label', 'part_RS': 'inline label', 'part_LV': 'inline label', 'part_propr': 'inline label', 'part_maiso': 'inline label', 'part_RP_av': 'inline label', 'AUT_Logt20': 'inline label', 'COM_Logt20': 'inline label', 'COM_part_L': 'inline label', 'AUT_part_L': 'inline label', 'AUT_part_1': 'inline label', 'COM_part_1': 'inline label', });
lyr_Testpoints_dep_dynamique_2.set('fieldLabels', {'ID': 'no label', 'NOM_DEP_M': 'inline label', 'NOM_DEP': 'no label', 'INSEE_DEP': 'inline label', 'INSEE_REG': 'no label', 'montantbat': 'no label', 'montanttp': 'no label', 'montantbtp': 'no label', 'LIBDEPT': 'no label', 'pop2019': 'no label', 'pop_partRe': 'no label', 'evol_pop': 'no label', 'pop_15ansp': 'no label', 'niveau_vie': 'no label', 'niveau_v_1': 'no label', 'niveau_v_2': 'no label', 'taux_pauvr': 'no label', 'taux_pau_1': 'no label', 'diplôme_p': 'no label', 'diplôme_B': 'no label', 'diplôme_C': 'no label', 'diplôme_1': 'no label', 'diplôme_E': 'no label', 'part_0dipl': 'no label', 'Nb_non_sco': 'no label', 'taux_activ': 'no label', 'taux_act_1': 'no label', 'taux_choma': 'no label', 'Etab_const': 'no label', 'Etab_TouSe': 'no label', 'creation_e': 'inline label', 'part_creat': 'inline label', 'etab_emplo': 'inline label', 'part_effec': 'inline label', 'pas_transp': 'inline label', 'marchePied': 'inline label', 'velo': 'no label', 'deuxroues': 'no label', 'voiture': 'no label', 'transports': 'no label', 'taux_indep': 'no label', 'indicateur': 'no label', 'nb_emploi_': 'no label', 'taux_act_2': 'no label', 'taux_act_3': 'no label', 'part_appar': 'no label', 'logements': 'no label', 'part_RP': 'no label', 'part_RS': 'no label', 'part_LV': 'no label', 'part_propr': 'no label', 'part_maiso': 'no label', 'part_RP_av': 'no label', 'AUT_Logt20': 'no label', 'COM_Logt20': 'no label', 'COM_part_L': 'no label', 'AUT_part_L': 'no label', 'AUT_part_1': 'no label', 'COM_part_1': 'no label', });
lyr_Testpoints_dep_dynamique_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});