export interface NavMenu{
    children: MenuItem[];
    id: string;
}
export interface MenuItem{
    title: string;
    path?: string;
    target?: string;
    children?: any[];
}