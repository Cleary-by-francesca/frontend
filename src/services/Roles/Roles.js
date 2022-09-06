const rolesList = [
    {id: '0', title: 'NoRole', color: '#515151', notVisible: true},
    {id: '1', title: 'Chef', color: '#EEF33D',},
    {id: '2', title: 'Waiter', color: '#1CB2B2',},
    {id: '3', title: 'Bartender', color: '#FFC6FF',},
    {id: '4', title: 'Host', color: '#998FD7',},
    {id: '5', title: 'Manager', color: '#9BF6FF'},
    {id: '6', title: 'Dishwasher', color: '#FFB864'}
]

export const getRoles = async (title) => {
    if (title)
        return rolesList.filter(role => role.title.toLowerCase().includes(title.toLowerCase()))

    return rolesList
}

export const updateRole = async (id, role) => {
    const roleIndex = rolesList.findIndex(role => role.id === id)

    if (roleIndex !== -1) {
        rolesList[roleIndex] = {
            ...rolesList[roleIndex],
            ...role
        }
    }
}

export const deleteRole = async (id) => {
    const index = rolesList.findIndex(role => role.id === id)
    if (index !== -1) {
        rolesList.splice(index, 1)
        return true
    }
    return false
}
