const plugins = [
    // 解決style component reload爆版問題
    [
        "styled-components",
        {
            "ssr": true,
            "displayName": true,
            "preprocess": false
        }
    ],
    "@babel/plugin-transform-runtime"
];

module.exports = {
    presets: [
        "next/babel"
    ],
    plugins: [...plugins]
}