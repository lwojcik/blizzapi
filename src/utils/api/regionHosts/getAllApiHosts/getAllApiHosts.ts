import config from 'config';

/**
 * Returns a list of all region API host uris
 *
 * @return List of all API host uris indexed by region id as array of strings.
 */
const getAllApiHosts = () => config.REGION_API_HOSTS;

export default getAllApiHosts;
