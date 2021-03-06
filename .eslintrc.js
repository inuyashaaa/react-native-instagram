module.exports = {
    extends: "airbnb",
    parser: "babel-eslint",
    env: {
        jest: true
    },
    rules: {
        "indent": ["error", 2],
        "no-use-before-define": "off",
        "react/jsx-filename-extension": "off",
        "react/prop-types": "off",
        "react/prefer-stateless-function": "off",
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "react/no-array-index-key": 'off',
        "global-require": "off"
    }
};
