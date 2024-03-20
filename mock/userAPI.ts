const users = [
    { id: 0, ID: "Umi", NICKNAME: "U", GENDER: "MALE" },
    { id: 1, ID: "Fish", NICKNAME: "B", GENDER: "FEMALE" },
]

export default {
    "GET /api/v1/queryUserList": (req: any, res: any) => {
        res.json({
            success: true,
            data: { list: users },
            errorCode: 0,
        })
    },
    "PUT /api/v1/user/": (req: any, res: any) => {
        res.json({
            success: true,
            errorCode: 0,
        })
    },
}
