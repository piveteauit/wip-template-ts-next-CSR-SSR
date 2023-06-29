const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Doe" },
    { id: 3, name: "Daaaa" },
];

const controllers = {
    users: {
        getAll(req: any, res: any, next: any) {
            console.log("TOTO !!!")
            return res.status(200).json(users)
        }
    }

}

export {
    controllers
}