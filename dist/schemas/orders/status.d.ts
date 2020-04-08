declare namespace _default {
    export { STATUSES };
    export { STATUS_ENUM };
    export { STATUS_ENUM_NAMES };
}
export default _default;
export namespace STATUSES {
    export namespace pending {
        export const text: string;
        export const key: string;
        export const value: string;
        export namespace icon {
            export const name: string;
            export const color: string;
        }
    }
    export namespace shipped {
        const text_1: string;
        export { text_1 as text };
        const key_1: string;
        export { key_1 as key };
        const value_1: string;
        export { value_1 as value };
        export namespace icon_1 {
            const name_1: string;
            export { name_1 as name };
            const color_1: string;
            export { color_1 as color };
        }
        export { icon_1 as icon };
    }
    export namespace canceled {
        const text_2: string;
        export { text_2 as text };
        const key_2: string;
        export { key_2 as key };
        const value_2: string;
        export { value_2 as value };
        export namespace icon_2 {
            const name_2: string;
            export { name_2 as name };
            const color_2: string;
            export { color_2 as color };
        }
        export { icon_2 as icon };
    }
    export namespace delivered {
        const text_3: string;
        export { text_3 as text };
        const key_3: string;
        export { key_3 as key };
        const value_3: string;
        export { value_3 as value };
        export namespace icon_3 {
            const name_3: string;
            export { name_3 as name };
            const color_3: string;
            export { color_3 as color };
        }
        export { icon_3 as icon };
    }
    export namespace cash {
        const text_4: string;
        export { text_4 as text };
        const key_4: string;
        export { key_4 as key };
        const value_4: string;
        export { value_4 as value };
        export namespace icon_4 {
            const name_4: string;
            export { name_4 as name };
            const color_4: string;
            export { color_4 as color };
        }
        export { icon_4 as icon };
    }
}
export const STATUS_ENUM: string[];
export const STATUS_ENUM_NAMES: any[];
