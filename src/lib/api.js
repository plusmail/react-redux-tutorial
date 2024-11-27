import axios from 'axios';
// API연결들은 Middleware에서 호출
export const getPost = id => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

export const getUsers = id => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`);
}