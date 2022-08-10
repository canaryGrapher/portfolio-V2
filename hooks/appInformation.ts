import { useEffect, useState } from 'react'
import { InstalledAppsPropsTypes } from "../types"

import installedApps from "../settings/installed-app"
import appInfo from "../settings/app-info"

const useInstalledAppInformation = () => {
    const [appData, setappData] = useState<any>([])

    useEffect(() => {
        const data = installedApps.map((app: InstalledAppsPropsTypes) => {
            return {
                name: appInfo[app.name].name,
                icon: appInfo[app.name].icon,
                path: appInfo[app.name].path
            }
        })
        setappData(data)
    }, [])

    return appData
}


export { useInstalledAppInformation }