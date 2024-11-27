
// {loadingPost, loadingUsers, post, users}
// 는 SampleContainer에서 connect로 Store에 연결한 것을 props로 전달
const Sample = ({loadingPost, loadingUsers, post, users})=>{

    return (
        <div>
            <section>
                <h1>포스트</h1>
                {loadingPost && '로딩 중.....'}
                {!loadingPost && post && (
                    <div>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <hr/>
            <section>
                <h1>사용자 목록</h1>
                {loadingUsers && '사용자 로딩 중 ...'}
                {!loadingUsers && users && (
                    <ul>
                        {
                            users.map(user => (
                                <li key={user.id}>
                                    {user.name}--{user.username} -- ({user.email})
                                </li>
                            ))
                        }
                    </ul>
                )}
            </section>
        </div>
    )
}

export default Sample;