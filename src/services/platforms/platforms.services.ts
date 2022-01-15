import { Platform } from "../../repository/models/Platform";
import * as PlatformApi from "../../repository/api/platform-api/platform.api";

export async function getPlatforms(): Promise<Platform[]> {
    return PlatformApi.getPlatforms()
}

export async function getPlatformId(platformId: Platform['id']): Promise<Platform> {
    return PlatformApi.getPlatformId(platformId)
}
