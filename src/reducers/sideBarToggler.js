const initialState = {
    isOpen: false,
    sideBarClassName: 'SideBar',
    contentClassName : 'content'
}

export default function sideBarToggler(state = initialState, action) {
    if (action.type === 'TOGGLE') {
        let sideBarTemp = state.sideBarClassName;
        let contentTemp = state.contentClassName;
        switch (state.sideBarClassName) {
            case 'SideBar' :
                sideBarTemp = 'SideBar open';
                contentTemp = 'content hidden';
                break;
            case 'SideBar open' :
                sideBarTemp = 'SideBar closed';
                contentTemp = 'content visible';
                break;
            case 'SideBar closed' :
                sideBarTemp = 'SideBar open';
                contentTemp = 'content hidden';
                break;
            default :
                break;
        }
        return {
            isOpen: !state.isOpen,
            sideBarClassName: sideBarTemp,
            contentClassName: contentTemp
        }
    }
    return state;
}