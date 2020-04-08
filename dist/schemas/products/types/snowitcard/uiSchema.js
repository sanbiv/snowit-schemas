"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _uiDefinitions_1 = require("../_common/_uiDefinitions");
exports.default = Object.assign({ classNames: 'form-root', 'ui:field': 'layout', 'ui:layout': [
        ..._uiDefinitions_1.commonDataUILayout,
        {
            default: { width: 16 },
        },
        {
            bundle: {
                width: 16,
            },
        },
    ] }, _uiDefinitions_1.commonDataUIAdvanced());
