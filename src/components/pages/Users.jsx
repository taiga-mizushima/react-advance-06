import styled from "styled-components"
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map(((val) => {
    return{
        id: val,
        name: `Taiga-${val}`,
        image: "https://source.unsplash.com/brFsZ7qszSY",
        email: "12345example.com",
        phone: "000-0000-0000",
        company: {
          name: "テスト株式会社"
        },
        website: "https://google.com"
    }
}))

export const Users = () => {
    return (
        <SContainer>
            <h2>ユーザ一覧</h2>
            <SearchInput />
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user}/>
                ))}
            </SUserArea>
        </SContainer>
    )
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`