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
  if(url === null){
    return authenticatedAxios.get(`${baseUrl}/utterances`);
  } else {
    return authenticatedAxios.get(url);
  }
}

export function getUtteranceDownloadLink(utterance){
  return authenticatedAxios.get(`${baseUrl}/utterances/${utterance.id}/download?no_redirect=true`);
}

export function downloadUtterance(utterance){
  getUtteranceDownloadLink(utterance).then(response => {
    axios({
      url: response.data.url,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
       const url = window.URL.createObjectURL(new Blob([response.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', `${utterance.text.substring(0, 10)}.wav`);
       document.body.appendChild(link);
       link.click();
    });
  }).catch(error => {
    throw(error);
  });
}
