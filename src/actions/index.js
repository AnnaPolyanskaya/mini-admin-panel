import * as C from './constants';
import V4 from 'uuid/v4';

export const addComment = (name, content) => ({
    type: C.ADD_COMMENT,
    payload: {
        id: V4(),
        name, 
        content,
        accepted: false
    }
});
 
export const switchAdmin = (isAdmin) => ({
    type: C.CHANGE_TO_ADMIN,
    isAdmin
})

export const acceptComment = (id, accepted) => ({
    type: C.ACCEPT_COMMENT,
    id, 
    accepted
})

export const rejectComment = (id) => ({
    type: C.REJECT_COMMENT,
    id,
})