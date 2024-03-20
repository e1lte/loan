import { defineConfig } from "@umijs/max"

export default defineConfig({
    antd: {},
    access: {},
    model: {},
    initialState: {},
    request: {},
    clickToComponent: {},
    layout: {
        title: "@umijs/max",
    },
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            name: "Loan",
            path: "/home",
            component: "./Home",
        },
        {
            name: "Loan Bank",
            path: "/access",
            component: "./Access",
        },
        {
            name: "Loan List",
            path: "/table",
            component: "./Table",
        },
        {
            name: "nest",
            path: "/nest",
            component: "./Nest",
        },
    ],
    npmClient: "pnpm",
})
