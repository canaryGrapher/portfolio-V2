interface IconPropsTypes {
    name: string;
    icon: any;
    path: string;
    id: number;
}

interface InstalledAppsPropsTypes {
    name: string;
}

interface IconSettingProps {
    [key: string]: IconPropsTypes;
}

export type { IconPropsTypes, InstalledAppsPropsTypes, IconSettingProps }