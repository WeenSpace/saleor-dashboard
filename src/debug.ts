import debugPkg from "debug";

/**
 * Will console log prefixed message with timestamp, controlled via env
 * Eg. DEBUG=weenspace-admin:* - enable all
 *     DEUBG=weenspace-admin:apps:* - enable apps debugger
 */
export const createDebug = (namespace: string) => debugPkg.debug(`weenspace-admin:${namespace}`);
