"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var demo_1 = require("@/services/demo");
var pro_components_1 = require("@ant-design/pro-components");
var antd_1 = require("antd");
var react_1 = require("react");
var CreateForm_1 = require("./components/CreateForm");
var UpdateForm_1 = require("./components/UpdateForm");
var _a = demo_1["default"].UserController, addUser = _a.addUser, queryUserList = _a.queryUserList, deleteUser = _a.deleteUser, modifyUser = _a.modifyUser;
/**
 * 添加节点
 * @param fields
 */
var handleAdd = function (fields) { return __awaiter(void 0, void 0, void 0, function () {
    var hide, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hide = antd_1.message.loading("正在添加");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, addUser(__assign({}, fields))];
            case 2:
                _a.sent();
                hide();
                antd_1.message.success("添加成功");
                return [2 /*return*/, true];
            case 3:
                error_1 = _a.sent();
                hide();
                antd_1.message.error("添加失败请重试！");
                return [2 /*return*/, false];
            case 4: return [2 /*return*/];
        }
    });
}); };
/**
 * 更新节点
 * @param fields
 */
var handleUpdate = function (fields) { return __awaiter(void 0, void 0, void 0, function () {
    var hide, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hide = antd_1.message.loading("正在配置");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, modifyUser({
                        userId: fields.id || ""
                    }, {
                        name: fields.name || "",
                        nickName: fields.nickName || "",
                        email: fields.email || ""
                    })];
            case 2:
                _a.sent();
                hide();
                antd_1.message.success("配置成功");
                return [2 /*return*/, true];
            case 3:
                error_2 = _a.sent();
                hide();
                antd_1.message.error("配置失败请重试！");
                return [2 /*return*/, false];
            case 4: return [2 /*return*/];
        }
    });
}); };
/**
 *  删除节点
 * @param selectedRows
 */
var handleRemove = function (selectedRows) { return __awaiter(void 0, void 0, void 0, function () {
    var hide, error_3;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                hide = antd_1.message.loading("正在删除");
                if (!selectedRows)
                    return [2 /*return*/, true];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, deleteUser({
                        userId: ((_a = selectedRows.find(function (row) { return row.id; })) === null || _a === void 0 ? void 0 : _a.id) || ""
                    })];
            case 2:
                _b.sent();
                hide();
                antd_1.message.success("删除成功，即将刷新");
                return [2 /*return*/, true];
            case 3:
                error_3 = _b.sent();
                hide();
                antd_1.message.error("删除失败，请重试");
                return [2 /*return*/, false];
            case 4: return [2 /*return*/];
        }
    });
}); };
var TableList = function () {
    var _a = react_1.useState(false), createModalVisible = _a[0], handleModalVisible = _a[1];
    var _b = react_1.useState(false), updateModalVisible = _b[0], handleUpdateModalVisible = _b[1];
    var _c = react_1.useState({}), stepFormValues = _c[0], setStepFormValues = _c[1];
    var actionRef = react_1.useRef();
    var _d = react_1.useState(), row = _d[0], setRow = _d[1];
    var _e = react_1.useState([]), selectedRowsState = _e[0], setSelectedRows = _e[1];
    var columns = [
        {
            title: "ID",
            dataIndex: "name",
            tip: "ID's the only key",
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "ID's needed"
                    },
                ]
            }
        },
        {
            title: "NICKNAME",
            dataIndex: "NickName",
            valueType: "text"
        },
        {
            title: "GENDER",
            dataIndex: "gender",
            hideInForm: true,
            valueEnum: {
                0: { text: "Male", status: "Male" },
                1: { text: "Female", status: "Female" }
            }
        },
        {
            title: "OPTION",
            dataIndex: "option",
            valueType: "option",
            render: function (_, record) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("a", { onClick: function () {
                        handleUpdateModalVisible(true);
                        setStepFormValues(record);
                    } }, "\u914D\u7F6E"),
                react_1["default"].createElement(antd_1.Divider, { type: "vertical" }),
                react_1["default"].createElement("a", { href: "" }, "\u8BA2\u9605\u8B66\u62A5"))); }
        },
    ];
    return (react_1["default"].createElement(pro_components_1.PageContainer, { header: {
            title: "Load List"
        } },
        react_1["default"].createElement(pro_components_1.ProTable, { headerTitle: "\u67E5\u8BE2\u8868\u683C", actionRef: actionRef, rowKey: "id", search: {
                labelWidth: 120
            }, toolBarRender: function () { return [
                react_1["default"].createElement(antd_1.Button, { key: "1", type: "primary", onClick: function () { return handleModalVisible(true); } }, "\u65B0\u5EFA"),
            ]; }, request: function (params, sorter, filter) { return __awaiter(void 0, void 0, void 0, function () {
                var _a, data, success;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, queryUserList(__assign(__assign({}, params), { 
                                // FIXME: remove @ts-ignore
                                // @ts-ignore
                                sorter: sorter,
                                filter: filter }))];
                        case 1:
                            _a = _b.sent(), data = _a.data, success = _a.success;
                            return [2 /*return*/, {
                                    data: (data === null || data === void 0 ? void 0 : data.list) || [],
                                    success: success
                                }];
                    }
                });
            }); }, columns: columns, rowSelection: {
                onChange: function (_, selectedRows) {
                    return setSelectedRows(selectedRows);
                }
            } }),
        (selectedRowsState === null || selectedRowsState === void 0 ? void 0 : selectedRowsState.length) > 0 && (react_1["default"].createElement(pro_components_1.FooterToolbar, { extra: react_1["default"].createElement("div", null,
                "\u5DF2\u9009\u62E9",
                " ",
                react_1["default"].createElement("a", { style: { fontWeight: 600 } }, selectedRowsState.length),
                " ",
                "\u9879\u00A0\u00A0") },
            react_1["default"].createElement(antd_1.Button, { onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4 /*yield*/, handleRemove(selectedRowsState)];
                            case 1:
                                _c.sent();
                                setSelectedRows([]);
                                (_b = (_a = actionRef.current) === null || _a === void 0 ? void 0 : _a.reloadAndRest) === null || _b === void 0 ? void 0 : _b.call(_a);
                                return [2 /*return*/];
                        }
                    });
                }); } }, "\u6279\u91CF\u5220\u9664"),
            react_1["default"].createElement(antd_1.Button, { type: "primary" }, "\u6279\u91CF\u5BA1\u6279"))),
        react_1["default"].createElement(CreateForm_1["default"], { onCancel: function () { return handleModalVisible(false); }, modalVisible: createModalVisible },
            react_1["default"].createElement(pro_components_1.ProTable, { onSubmit: function (value) { return __awaiter(void 0, void 0, void 0, function () {
                    var success;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, handleAdd(value)];
                            case 1:
                                success = _a.sent();
                                if (success) {
                                    handleModalVisible(false);
                                    if (actionRef.current) {
                                        actionRef.current.reload();
                                    }
                                }
                                return [2 /*return*/];
                        }
                    });
                }); }, rowKey: "id", type: "form", columns: columns })),
        stepFormValues && Object.keys(stepFormValues).length ? (react_1["default"].createElement(UpdateForm_1["default"], { onSubmit: function (value) { return __awaiter(void 0, void 0, void 0, function () {
                var success;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, handleUpdate(value)];
                        case 1:
                            success = _a.sent();
                            if (success) {
                                handleUpdateModalVisible(false);
                                setStepFormValues({});
                                if (actionRef.current) {
                                    actionRef.current.reload();
                                }
                            }
                            return [2 /*return*/];
                    }
                });
            }); }, onCancel: function () {
                handleUpdateModalVisible(false);
                setStepFormValues({});
            }, updateModalVisible: updateModalVisible, values: stepFormValues })) : null,
        react_1["default"].createElement(antd_1.Drawer, { width: 600, open: !!row, onClose: function () {
                setRow(undefined);
            }, closable: false }, (row === null || row === void 0 ? void 0 : row.name) && (react_1["default"].createElement(pro_components_1.ProDescriptions, { column: 2, title: row === null || row === void 0 ? void 0 : row.name, request: function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, ({
                            data: row || {}
                        })];
                });
            }); }, params: {
                id: row === null || row === void 0 ? void 0 : row.name
            }, columns: columns })))));
};
exports["default"] = TableList;
