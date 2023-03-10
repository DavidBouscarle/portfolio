export const envResolver = {
    hostProtocol: process.env.NEXT_PUBLIC_HOST_PROTOCOL,
    hostDomain: process.env.NEXT_PUBLIC_HOST_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_API_TOKEN_SALT,
};

export const baseHostUrl = `${envResolver.hostProtocol}://${envResolver.hostDomain}`;
export const baseUrlApi = `${envResolver.hostProtocol}://${envResolver.hostDomain}/api`;