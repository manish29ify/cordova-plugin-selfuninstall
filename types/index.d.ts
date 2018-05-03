/**
 *
 * */
export interface Window {
    cordova : {
        plugins: {
            selfUninstall : SelfUninstallInterface
        }
    }
}
/**
 *
 * */
export interface SelfUninstallInterface {
    uninstall() : never;
}
/**
 *
 * */
export declare var cordova : {
    plugins:{
        selfUninstall : SelfUninstallInterface
    }
};
;
