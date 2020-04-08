"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../../../../utils/i18n");
const schema = {
    type: 'object',
    required: ['nameTranslations'],
    properties: Object.assign(Object.assign({}, i18n_1.buildTranslatedSchemaAttributes({
        name: { title: 'Nome dello slot', required: true },
        description: 'Descrizione',
    })), { externalUID: {
            type: 'string',
            title: 'UID esterno',
        } }),
};
exports.default = schema;
