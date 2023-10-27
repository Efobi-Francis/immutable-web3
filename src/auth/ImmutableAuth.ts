import { config, passport } from '@imtbl/sdk';
import { ImmutableConfiguration } from '@imtbl/sdk/dist/config';

interface PassportModuleConfiguration {
  baseConfig: ImmutableConfiguration;
  clientId: string;
  logoutRedirectUri: string;
  logoutMode?: 'redirect' | 'silent'; // defaults to 'redirect'
  redirectUri: string;
  scope?: string;
  audience?: string;
}

const configuration: PassportModuleConfiguration = {
  baseConfig: new config.ImmutableConfiguration({
    environment: config.Environment.SANDBOX,
  }),
  clientId: process.env.REACT_APP_CLIENT_ID as string,
  redirectUri: `https://rps-web3-game.netlify.app/`,
  logoutRedirectUri: 'https://rps-web3-game.netlify.app/logout',
  audience: 'platform_api',
  scope: 'openid offline_access email transact'
};

const passportInstance = new passport.Passport(configuration);

const provider = passportInstance.connectEvm();

export const login = async () => {
  return await provider.request({ method: "eth_requestAccounts" });
}

export const loginCallback = () => {
  window.open(`${passportInstance.loginCallback}`)
}
