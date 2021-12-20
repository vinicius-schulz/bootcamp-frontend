import Keycloak from 'keycloak-js';


const keycloakConfig = {
    "realm": "idonation",
    "auth-server-url": "http://3.141.196.157:9090/auth",
    "ssl-required": "none",
    "resource": "idonation-web",
    "public-client": true,
    "verify-token-audience": true,
    "use-resource-role-mappings": true,
    "confidential-port": 0
}

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak(keycloakConfig);

export default keycloak;