import axios from 'axios';

const authenticatedAxios = axios.create(
  { headers: { 'Authorization': `Bearer ${process.env.REACT_APP_LYREBIRD_API_KEY}`}}
);

export function getVoices(){
  return authenticatedAxios.get('https://custom.lyrebird.ai/api/v0/voices')
}
