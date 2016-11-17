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
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'videobg',
                            type: 'image',
                            rect: ['176px', '160px', '1024px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"videobg.jpg",'0px','0px']
                        },
                        {
                            id: 'titlebg',
                            type: 'image',
                            rect: ['0px', '96px', '772px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titlebg.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['55px', '109px', 'auto', 'auto', 'auto', 'auto'],
                            text: " Glossary term example ",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,163,174,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['55px', '200px', '1116px', '200px', 'auto', 'auto'],
                            text: "Lorem ipsum dolor sit amet, has vitae eripuit facilis ei, ut elit inani explicari sed, cum et sale tempor disputando. Quo aeque vocibus eu, his commodo appareat invenire no. Tantas blandit duo eu.<br><br>Te mea odio diam dolorem, et sit tale commodo copiosae. Vim at erat utinam cetero. Ei pri similique intellegam, prima hendrerit duo ne. Feugiat definiebas te usu. Vidisse delenit id eum. ",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(0, 163, 174)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['55px', '341px', 'auto', 'auto', 'auto', 'auto'],
                            text: " His agam scripta vituperatoribus et, et cum magna denique neglegentur. ",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(145,63,143,1.00)", "400", "none solid rgb(0, 0, 0)", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'arrow-diagram1',
                            type: 'image',
                            rect: ['55px', '380px', '1106px', '159px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow-diagram1.png",'0px','0px']
                        },
                        {
                            id: 'arrow-diagram2',
                            type: 'image',
                            rect: ['55px', '537px', '1106px', '159px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow-diagram2.png",'0px','0px']
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['164px', '439px', '83px', '59px', 'auto', 'auto'],
                            text: "Te mea<br>odio",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(145, 63, 143)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy3',
                            type: 'text',
                            rect: ['981px', '435px', '83px', '59px', 'auto', 'auto'],
                            text: "Te mea<br>odio",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(145, 63, 143)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy2',
                            type: 'text',
                            rect: ['705px', '439px', '113px', '51px', 'auto', 'auto'],
                            text: "et sit tale commodo",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(145, 63, 143)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy',
                            type: 'text',
                            rect: ['422px', '450px', '140px', '30px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "Lorem ipsum ",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(44,153,62,1.00)", "400", "none solid rgb(145, 63, 143)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy7',
                            type: 'text',
                            rect: ['164px', '587px', '83px', '59px', 'auto', 'auto'],
                            text: "Te mea<br>odio",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(145, 63, 143)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy6',
                            type: 'text',
                            rect: ['965px', '587px', '83px', '59px', 'auto', 'auto'],
                            text: "Te mea<br>odio",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(145, 63, 143)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy5',
                            type: 'text',
                            rect: ['697px', '587px', '113px', '51px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "et sit tale commodo",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(44,153,62,1.00)", "400", "none solid rgb(145, 63, 143)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy4',
                            type: 'text',
                            rect: ['422px', '602px', '140px', '30px', 'auto', 'auto'],
                            text: "Lorem ipsum ",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(145, 63, 143)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Symbol_1',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['-5px', '628', '1208', '172', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1200px', '800px', 'auto', 'auto'],
                            sizeRange: ['','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 40,
                    autoPlay: true,
                    data: [
                            [ "eid14", "trigger", 40, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_1}', [] ] ]
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
                            type: 'image',
                            id: 'glossarytermpanel',
                            opacity: '0',
                            rect: ['0px', '172px', '1208px', '172px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/glossarytermpanel.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Lorem ipsum<br><br>Lorem ipsum dolor sit amet, has vitae eripuit facilis ei, ut elit inani explicari sed, cum et sale tempor disputando. Quo aeque vocibus eu, his commodo appareat invenire no. Tantas blandit duo eu. At nam zril affert, ius illum latine et, vix porro laoreet maluisset ex. Ne scripta omnesque voluptatum',
                            id: 'Text3',
                            opacity: '1',
                            align: 'left',
                            rect: ['26px', '29px', '1122px', '88px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1208px', '172px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
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
                            "eid12",
                            "top",
                            0,
                            500,
                            "easeInOutBack",
                            "${Text3}",
                            '200px',
                            '29px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-1");
