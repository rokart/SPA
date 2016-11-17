/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Growth_Pages_5',
                            type: 'image',
                            rect: ['80px', '95px', '1120px', '700px', 'auto', 'auto'],
                            clip: 'rect(156px 1120px 700px 461px)',
                            fill: ["rgba(0,0,0,0)",im+"Growth_Pages_5.jpg",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['55px', '207px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Ne scripta omnesque voluptatum eam:<br><br>•        Te mea odio diam dolorem<br><br>Ei pri similique intellegam:<br><br>•        Fierent volutpat erroribus ea sit <br><br>•        At nam zril affert, ius illum latine et, vix porro laoreet <br><br>•        At lorem menandri erroribus nam <br><br>•        Veri lorem fastidii mei eu, in per congue adipisci<br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(0, 163, 174)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['504px', '64px', 'auto', 'auto', 'auto', 'auto'],
                            text: "seafsdf",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1200px', '800px'],
                            sizeRange: ['0px','1200px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1100,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "left",
                            0,
                            1100,
                            "linear",
                            "${Text3}",
                            '504px',
                            '118px'
                        ],
                        [
                            "eid4",
                            "top",
                            0,
                            1100,
                            "linear",
                            "${Text3}",
                            '64px',
                            '86px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-2176584");
