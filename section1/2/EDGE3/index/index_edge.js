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
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['55px', '205px', '472px', '514px', 'auto', 'auto'],
                            text: " You use Lorem <br><br>•        Vix porro laoreet maluisset<br>•        Quo aeque vocibus eu<br>•        Ne scripta omnesque voluptatum eam<br>•        Tantas blandit duo eu<br><br>Fierent volutpat erroribus ea sit, qui cu ubique probatus.<br><br>Lorem ipsum dolor sit amet, has vitae eripuit facilis ei, ut elit inani explicari sed, cum et sale tempor disputando. Quo aeque vocibus eu, his commodo appareat invenire no. Tantas blandit duo eu.<br>Quo aeque vocibus eu, his commodo appareat invenire no. Tantas blandit duo eu.<br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(0, 163, 174)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'titlebg',
                            type: 'image',
                            rect: ['0px', '96px', '772px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titlebg.png",'0px','0px']
                        },
                        {
                            id: 'Growth_Pages_32',
                            type: 'image',
                            rect: ['77px', '96px', '1126px', '704px', 'auto', 'auto'],
                            clip: 'rect(208px 1126px 704px 417.3330078125px)',
                            fill: ["rgba(0,0,0,0)",im+"Growth_Pages_3.jpg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['55px', '109px', 'auto', 'auto', 'auto', 'auto'],
                            text: " Cum et sale tempor disputando ",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,163,174,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'asd',
                            type: 'text',
                            rect: ['195px', '205px', 'auto', 'auto', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: " ipsum every ",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,163,174,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['305px', '205px', 'auto', 'auto', 'auto', 'auto'],
                            text: "for example, when you:",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'aasdsad',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['-5', '628', '1208', '172', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1200px', '800px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 40,
                    autoPlay: true,
                    data: [
                            [ "eid3", "trigger", 40, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${aasdsad}', [] ] ]
                    ]
                }
            },
            "Symbol_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '172px', '1208px', '172px', 'auto', 'auto'],
                            id: 'glossarytermpanel',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/glossarytermpanel.png', '0px', '0px']
                        },
                        {
                            rect: ['29px', '201px', '1122px', '88px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text3',
                            opacity: '1',
                            text: 'Lorem ipsum<br><br>Lorem ipsum dolor sit amet, has vitae eripuit facilis ei, ut elit inani explicari sed, cum et sale tempor disputando. Quo aeque vocibus eu, his commodo appareat invenire no. Tantas blandit duo eu. At nam zril affert, ius illum latine et, vix porro laoreet maluisset ex. Ne scripta omnesque voluptatum',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1208px', '172px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid6",
                            "top",
                            0,
                            500,
                            "easeInOutBack",
                            "${glossarytermpanel}",
                            '172px',
                            '0px'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '29px',
                            '29px'
                        ],
                        [
                            "eid7",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${glossarytermpanel}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "top",
                            0,
                            500,
                            "easeInOutBack",
                            "${Text3}",
                            '201px',
                            '29px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-23157687");
