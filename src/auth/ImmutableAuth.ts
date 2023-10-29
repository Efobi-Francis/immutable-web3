import { config, passport } from '@imtbl/sdk';
import { ImmutableConfiguration } from '@imtbl/sdk/dist/config';
import { useAuth } from '../components/AuthContext.jsx';
import { resolve } from 'path-browserify';

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
  redirectUri: `https://rps-web3-game.netlify.app`,
  logoutRedirectUri: 'https://rps-web3-game.netlify.app/logout',
  audience: 'platform_api',
  scope: 'openid offline_access email transact'
};

function verifyConfiguration(config) {
  const mandatoryProperties = ['baseConfig', 'clientId', 'redirectUri', 'logoutRedirectUri'];

  for (const property of mandatoryProperties) {
    if (!(property in config)) {
      console.error(`Missing mandatory property: ${property}`);
      return false;
    }
  }

  console.log("All mandatory properties are set.");
  return true;
}

verifyConfiguration(configuration);

const passportInstance = new passport.Passport(configuration);

const provider = passportInstance.connectEvm();


export const Login = async () => {
  
  try {
    const status = await provider.request({ method: "eth_requestAccounts" });
    return status;

  } catch (error) {
    console.error("Login failed:", error);
  }
}

export const getUserInfo = () => {

  
  return passportInstance.getUserInfo().then(UserProfile => {
    return UserProfile;
  }).catch(error => {
    console.log('not ok', error);
    return false;
  });

}

export const logoutCallback = () => {
  // Call the logout method of your passport instance
  passportInstance.logout()
}

