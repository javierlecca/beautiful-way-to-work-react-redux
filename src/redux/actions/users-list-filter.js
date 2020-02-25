export const type = 'userListFilter';

const userListFilter = (text) => ({
    type,
    payload: text,
});

export default userListFilter;