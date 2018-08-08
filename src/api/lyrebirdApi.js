import axios from 'axios';

const authenticatedAxios = axios.create(
  { headers: { 'Authorization': `Bearer ${process.env.REACT_APP_LYREBIRD_API_KEY}`}}
);

const baseUrl = 'https://custom.lyrebird.ai/api/v0';

export function getVoices(){
  return authenticatedAxios.get(`${baseUrl}/voices`);
}

export function postUtterance(params){
  const body = [
    {
      text: params.text,
      metadata: {
        emotion: params.metadata.emotion.default
      }
    }
  ];

  return authenticatedAxios.post(`${baseUrl}/voices/${params.voiceId}/generate_async`, body);
}

export function getAsyncJob(asyncJobId){
  return authenticatedAxios.get(`${baseUrl}/async_jobs/${asyncJobId}`);
}

export function getUtterances(url = null){
  console.log(url)
  if(url === null){
    return authenticatedAxios.get(`${baseUrl}/utterances`);
  } else {
    return authenticatedAxios.get(url);
  }
}
