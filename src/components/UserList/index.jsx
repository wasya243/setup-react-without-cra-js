const MOCK_USERS = [
    {
        id: "some_id_1",
        name: "some name 1"
    },
    {
        id: "some_id_2",
        name: "some name 2"
    }
]

const UserList = () => {
    return (
        <div>
            {
                MOCK_USERS.map(u => {
                    return (
                        <div key={u.id}>
                            <p>Id: {u.id}</p>
                            <p>Name: {u.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserList