import {getPost, getUsers} from "../modules/sample";
import Sample from "../components/Sample";
import {connect} from "react-redux";
import React from 'react';

const {useEffect} = React;

const SampleContainer = ({
                             getPost,
                             getUsers,
                             post,
                             users,
                             loadingPost,
                             loadingUsers
                         }) => {
    useEffect(() => {
        getPost(1);
        getUsers(1);
    }, [getPost, getUsers]);

    return (
        <Sample
            post={post}
            users={users}
            loadingUsers={loadingUsers}
            loadingPost={loadingPost}
        />
    );

}
export default connect(
    ({sample_saga, loading}) => ({
        post: sample_saga.post,
        users: sample_saga.users,
        loadingPost: loading['sample/GET_POST'],
        loadingUsers: loading['sample/GET_USERS']
    }),
    {
        getPost,
        getUsers
    }
)(SampleContainer);