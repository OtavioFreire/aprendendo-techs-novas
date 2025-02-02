import pluginJs from "@eslint/js";

export default [
    pluginJs.configs.recommended,

    {
        rules: {
            "no-loops/no-loops": 2
        }
    }
];
