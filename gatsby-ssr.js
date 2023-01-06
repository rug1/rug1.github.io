/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

var React = require("react");

// Hack, to reorder the helmet components as first in <head> tag
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    /**
     * @type {any[]} headComponents
     */
    const headComponents = getHeadComponents();
    headComponents.sort((a, b) => {
        if (a.props && a.props["data-react-helmet"]) {
            return 0;
        }
        return 1;
    });
    replaceHeadComponents(headComponents);
};