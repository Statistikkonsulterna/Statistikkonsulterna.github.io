var CONFIG = {
 "data": {
  "_lastModified": 1726045828060,
  "hasNameColumn": false,
  "lastModified": 1726045828060,
  "nameColumnPosition": 0,
  "noCache": true,
  "path": "./data/Sverige_Bransch.xlsx",
  "reader": "excel",
  "sheet": "Bransch_total",
  "timeInColumns": true,
  "ddfPath": "./data/Sverige_Bransch.xlsx"
 },
 "locale": {
  "filePath": "assets/translation/",
  "id": "en"
 },
 "state": {
  "entities": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "SNI-namn",
   "filter": {},
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "entities_colorlegend": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "SNI-namn",
   "filter": {},
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "marker": {
   "allowSelectMultiple": true,
   "axis_x": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "autoconfig": {
     "index": 0,
     "type": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "fixBaseline": null,
    "scaleType": "linear",
    "spaceRef": null,
    "syncModels": [],
    "use": "indicator",
    "which": "Antal konkurser",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "axis_y": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "autoconfig": {
     "index": 1,
     "type": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "fixBaseline": null,
    "scaleType": "linear",
    "spaceRef": null,
    "syncModels": [],
    "use": "indicator",
    "which": "Antal anställda berörda av konkurser",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "color": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow",
      "ordinal"
     ]
    },
    "autoconfig": {},
    "data": "data",
    "palette": {
     "_default": "#4f6366"
    },
    "paletteHiddenKeys": [],
    "paletteLabels": null,
    "scaleType": "ordinal",
    "syncModels": [
     "marker_colorlegend"
    ],
    "use": "constant",
    "which": "_default"
   },
   "highlight": [],
   "label": {
    "autoconfig": {
     "includeOnlyIDs": [
      "name"
     ],
     "type": "string"
    },
    "data": "data",
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "property",
    "which": "SNI-namn"
   },
   "limit": 5000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "size": {
    "allow": {
     "scales": [
      "ordinal",
      "linear",
      "log",
      "genericLog",
      "pow"
     ]
    },
    "autoconfig": {
     "index": 2,
     "type": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "extent": [
     0,
     0.85
    ],
    "fixBaseline": 0,
    "scaleType": "ordinal",
    "spaceRef": null,
    "syncModels": [],
    "use": "constant",
    "which": "_default",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "size_label": {
    "_important": false,
    "allow": {
     "names": [
      "_default"
     ],
     "scales": [
      "ordinal",
      "linear",
      "log",
      "genericLog",
      "pow"
     ]
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "extent": [
     0,
     0.33
    ],
    "fixBaseline": 0,
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "constant",
    "which": "_default",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "space": [
    "entities",
    "time"
   ],
   "superHighlight": []
  },
  "marker_colorlegend": {
   "allowSelectMultiple": true,
   "highlight": [],
   "hook_geoshape": {
    "data": "data",
    "syncModels": [],
    "use": "property",
    "which": "shape_lores_svg"
   },
   "hook_rank": {
    "data": "data",
    "syncModels": [],
    "use": "property",
    "which": "rank"
   },
   "label": {
    "data": "data",
    "syncModels": [],
    "use": "property",
    "which": "name"
   },
   "limit": 1000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "space": [
    "entities_colorlegend"
   ],
   "superHighlight": []
  },
  "time": {
   "autoconfig": {
    "type": "time"
   },
   "delay": 150,
   "delayThresholdX2": 90,
   "delayThresholdX4": 45,
   "dim": "time",
   "end": "2023",
   "endBeforeForecast": "2023",
   "endOrigin": null,
   "endSelected": "2023",
   "format": {
    "data": null,
    "ui": null
   },
   "immediatePlay": true,
   "loop": false,
   "offset": 0,
   "pauseBeforeForecast": true,
   "playable": true,
   "playing": false,
   "record": false,
   "round": "round",
   "showForecast": true,
   "start": "2009",
   "startOrigin": null,
   "startSelected": "2009",
   "step": 1,
   "unit": "year",
   "value": "2021"
  }
 },
 "ui": {
  "adaptMinMaxZoom": false,
  "buttons": [
   "colors",
   "find",
   "zoom",
   "trails",
   "lock",
   "moreoptions",
   "presentation",
   "sidebarcollapse",
   "fullscreen"
  ],
  "chart": {
   "decorations": {
    "enabled": true,
    "xAxisGroups": null
   },
   "labels": {
    "dragging": true,
    "removeLabelBox": false
   },
   "lockNonSelected": 0,
   "margin": {
    "left": 79.938,
    "top": 0
   },
   "showForecastOverlay": false,
   "superhighlightOnMinimapHover": true,
   "trails": true,
   "whenHovering": {
    "higlightValueX": true,
    "higlightValueY": true,
    "showProjectionLineX": true,
    "showProjectionLineY": true
   }
  },
  "cursorMode": "arrow",
  "datawarning": {
   "doubtDomain": [],
   "doubtRange": []
  },
  "dialogs": {
   "dialog": {
    "find": {
     "enableSelectShowSwitch": false
    }
   },
   "moreoptions": [
    "opacity",
    "speed",
    "axes",
    "size",
    "colors",
    "label",
    "zoom",
    "presentation",
    "technical",
    "about"
   ],
   "popup": [
    "colors",
    "find",
    "size",
    "zoom",
    "moreoptions"
   ],
   "sidebar": [
    "colors",
    "find",
    "size",
    "zoom"
   ]
  },
  "panWithArrow": false,
  "presentation": false,
  "show_ticks": true,
  "sidebarCollapse": false,
  "splash": false,
  "zoomOnScrolling": false
 },
 "chartType": "BubbleChart"
};