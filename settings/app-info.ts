import { Profile, Settings } from "../assets"
import { IconSettingProps } from "../types"

const appInfo: IconSettingProps = {
    "Profile": {
        id: 1,
        name: 'Profile',
        icon: Profile,
        path: '/apps/profile'
    },
    "Settings": {
        id: 2,
        name: 'Settings',
        icon: Settings,
        path: '/apps/settings'
    }
}

export default appInfo;