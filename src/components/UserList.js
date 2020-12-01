import { UserCard } from "./UserCard"

export const UserList = ({ allUsers }) => {
    return (
        <div>
            {allUsers.map((el) => <UserCard
                key={el.id}
                name={el.username}
                id={el.id} />)}
        </div>
    )
}