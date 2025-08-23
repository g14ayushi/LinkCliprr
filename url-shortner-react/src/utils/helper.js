import { subDomainList } from "./constant";

const getSubdomain = (location) => {
    const locationParts = location.split(".");
    const isLocalHost =  locationParts.slice(-1)[0] == "localhost";
    const sliceTill = isLocalHost ? -1 : -2;
    return locationParts.slice(0, sliceTill).join("");
}

export const getApps = () => {
    const subdomain = getSubdomain(window.location.hostname);

    const mainApp = subDomainList.find((app) => app.main);
    if(subdomain === "") return mainApp.app;

    const apps = subDomainList.find((app) => subdomain === app.subdomain);

    return apps ? apps.app : mainApp.app;
}