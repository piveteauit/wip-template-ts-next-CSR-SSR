const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Doe" },
  { id: 3, name: "Daaaa" },
  { id: 4, name: "John" },
  { id: 5, name: "Doe" },
  { id: 6, name: "Daadfsdfsaa" },
  { id: 7, name: "Jofezezhn" },
  { id: 8, name: "Dogrrgee" },
  { id: 9, name: "Dareherhaaa" },
  { id: 10, name: "Johrrrrrhn" },
  { id: 11, name: "Dogggge" },
  { id: 12, name: "Daggaaa" },
]

const controllers = {
  users: {
    getAll(req: any, res: any, next?: any) {
      const fullUsers = users.map((u) => ({
        ...u,
        email: "user@email.fake",
        country: "France",
        created_at: "2023-01-01",
        updated_at: "2023-01-01"
      }))
      return next ? res.status(200).json(fullUsers) : fullUsers
    },
  },
}

export { controllers }
