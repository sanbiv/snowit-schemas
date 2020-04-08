"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../../../../utils/i18n");
exports.default = Object.assign({ classNames: 'form-root', 'ui:field': 'layout', 'ui:displayLabel': false, 'ui:layout': [
        {
            nameTranslations: { width: 16 },
        },
        {
            descriptionTranslations: { width: 16 },
        },
        {
            externalUID: { width: 16 },
        },
    ] }, i18n_1.buildUiSchemaLayout({
    name: { columns: 2 },
    description: { columns: 2, 'ui:widget': 'textarea' },
}));
