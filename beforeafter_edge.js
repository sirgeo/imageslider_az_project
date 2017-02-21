/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bw2',
                type: 'image',
                rect: ['0px', '0px','550px','366px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bw.jpg",'0px','0px']
            },
            {
                id: 'color2',
                type: 'image',
                rect: ['0px', '0px','550px','366px','auto', 'auto'],
                clip: ['rect(0px 0px 366px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"color.jpg",'0px','0px']
            },
            {
                id: 'Divider',
                type: 'rect',
                rect: ['365px', '-6px','1px','387px','auto', 'auto'],
                cursor: ['col-resize'],
                opacity: 1,
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [1,"rgba(0,0,0,0.43)","none"],
                boxShadow: ["", 3, 0, 3, 0, "rgba(0,0,0,0.65)"],
                c: [
                {
                    id: 'arrows',
                    display: 'none',
                    type: 'image',
                    rect: ['-28px', '285px','57px','32px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"arrows.png",'0px','0px']
                },
                {
                    id: 'Btn',
                    type: 'rect',
                    rect: ['-4px', '274px','8px','52px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(192,192,192,1)"],
                    stroke: [1,"rgba(85,85,85,1.00)","solid"]
                },
                {
                    id: 'Descriptions',
                    type: 'rect',
                    rect: ['-108px', '337px','245px','44px','auto', 'auto'],
                    fill: ["rgba(255,255,255,0.00)"],
                    stroke: [1,"rgba(0, 0, 0, 0.429688)","none"],
                    c: [
                    {
                        id: 'Rectangle4',
                        type: 'rect',
                        rect: ['18px', '11px','90px','20px','auto', 'auto'],
                        fill: ["rgba(19,19,19,0.70)"],
                        stroke: [1,"rgba(0, 0, 0, 0.429688)","none"],
                        c: [
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['4px', '2px','auto','auto','auto', 'auto'],
                            text: "Google Earth image",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "normal", "none", "normal"]
                        }]
                    },
                    {
                        id: 'Rectangle5',
                        type: 'rect',
                        rect: ['108px', '11px','123px','20px','auto', 'auto'],
                        fill: ["rgba(19,19,19,0.6992)"],
                        stroke: [1,"rgba(0, 0, 0, 0.429688)","none"],
                        c: [
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['14px', '2px','100px','16px','auto', 'auto'],
                            text: "Tree cover classified ",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1)", "normal", "none", "normal"]
                        }]
                    }]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_color2}": [
                ["style", "top", '0px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '366px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,0,366,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '550px']
            ],
            "${_Descriptions}": [
                ["style", "top", '337px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-108px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)']
            ],
            "${_Divider}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'col-resize'],
                ["style", "width", '1px'],
                ["style", "top", '0px'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(0,0,0,0.43)'],
                ["style", "border-style", 'none'],
                ["style", "height", '366px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "left", '0px']
            ],
            "${_Btn}": [
                ["style", "top", '274px'],
                ["color", "background-color", 'rgba(192,192,192,1)'],
                ["style", "left", '-4px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '52px'],
                ["color", "border-color", 'rgba(85,85,85,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "width", '8px']
            ],
            "${_Text2}": [
                ["style", "top", '2px'],
                ["style", "height", '16px'],
                ["style", "left", '14px'],
                ["style", "width", '100px']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '2px'],
                ["style", "left", '4px'],
                ["style", "font-size", '14px']
            ],
            "${_bw2}": [
                ["style", "height", '366px'],
                ["style", "left", '0px'],
                ["style", "width", '550px']
            ],
            "${_Rectangle5}": [
                ["style", "top", '11px'],
                ["style", "border-style", 'none'],
                ["style", "left", '108px'],
                ["style", "width", '123px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '366px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle4}": [
                ["style", "top", '11px'],
                ["color", "background-color", 'rgba(19,19,19,0.70)'],
                ["style", "border-style", 'none'],
                ["style", "left", '18px'],
                ["style", "width", '90px']
            ],
            "${_arrows}": [
                ["style", "display", 'none'],
                ["style", "left", '-28px'],
                ["style", "top", '285px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid36", tween: [ "style", "${_Divider}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_color2}", "clip", [0,419,366,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,366,0]}], position: 0, duration: 680 },
                { id: "eid26", tween: [ "style", "${_color2}", "clip", [0,366,366,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,419,366,0]}], position: 680, duration: 120 },
                { id: "eid21", tween: [ "style", "${_Divider}", "left", '419px', { fromValue: '0px'}], position: 0, duration: 680 },
                { id: "eid22", tween: [ "style", "${_Divider}", "left", '366px', { fromValue: '419px'}], position: 680, duration: 120 },
                { id: "eid39", tween: [ "color", "${_Btn}", "background-color", 'rgba(192,192,192,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "color", "${_Btn}", "background-color", 'rgba(213,184,16,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 800, duration: 0 },
                { id: "eid42", tween: [ "color", "${_Btn}", "background-color", 'rgba(192,192,192,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(213,184,16,1.00)'}], position: 1000, duration: 0 },
                { id: "eid43", tween: [ "color", "${_Btn}", "background-color", 'rgba(213,184,16,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1.00)'}], position: 1250, duration: 0 },
                { id: "eid44", tween: [ "color", "${_Btn}", "background-color", 'rgba(192,192,192,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(213,184,16,1.00)'}], position: 1500, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Divider}", "opacity", '0.984375', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid38", tween: [ "style", "${_Divider}", "height", '366px', { fromValue: '366px'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_arrows}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_arrows}", "display", 'block', { fromValue: 'none'}], position: 800, duration: 0 },
                { id: "eid30", tween: [ "style", "${_arrows}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid31", tween: [ "style", "${_arrows}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid32", tween: [ "style", "${_arrows}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 }            ]
        }
    }
},
"Symbol_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    rect: ['9px', '0px', '2px', '400px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['col-resize'],
                    fill: ['rgba(192,192,192,1)'],
                    c: [
                    {
                        rect: ['-4px', '294px', '10px', '38px', 'auto', 'auto'],
                        borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                        id: 'Rectangle2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(192,192,192,1)']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '294px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-4px'],
                ["style", "width", '10px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "height", '400px'],
                ["style", "left", '9px'],
                ["style", "cursor", 'col-resize'],
                ["style", "width", '2px']
            ],
            "${symbolSelector}": [
                ["style", "height", '400px'],
                ["style", "width", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-41908609");
