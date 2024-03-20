"use strict";
exports.__esModule = true;
var pro_components_1 = require("@ant-design/pro-components");
var max_1 = require("@umijs/max");
var antd_1 = require("antd");
var AccessPage = function () {
    var access = max_1.useAccess();
    return (React.createElement(pro_components_1.PageContainer, { ghost: true, header: {
            title: "Loan Bank"
        } },
        React.createElement(max_1.Access, { accessible: access.canSeeAdmin },
            React.createElement(antd_1.Button, null, "\u53EA\u6709 Admin \u53EF\u4EE5\u770B\u5230\u8FD9\u4E2A\u6309\u94AE"))));
};
exports["default"] = AccessPage;
