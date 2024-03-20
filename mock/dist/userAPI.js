"use strict";
exports.__esModule = true;
var users = [
    { id: 0, ID: "Umi", NICKNAME: "U", GENDER: "MALE" },
    { id: 1, ID: "Fish", NICKNAME: "B", GENDER: "FEMALE" },
];
exports["default"] = {
    "GET /api/v1/queryUserList": function (req, res) {
        res.json({
            success: true,
            data: { list: users },
            errorCode: 0
        });
    },
    "PUT /api/v1/user/": function (req, res) {
        res.json({
            success: true,
            errorCode: 0
        });
    }
};
