export default (data = undefined) => {
  const contentArea = document.querySelector('.data');
  contentArea.innerHTML = '';
  const dataKeys = [
    'description',
    'cloudcover',
    'description',
    'dew',
    'feelslike',
    'humidity',
    'icon',
    'snow',
    'snowdepth',
    'temp',
    'timeZone',
    'visibility',
    'winddir',
    'windgust',
    'windspeed',
  ];
  if (data === undefined) {
    ;
  } else {
    const fragment = new DocumentFragment;
    const header = document.createElement('h1');
    header.innerText = 'Todays weather';
    fragment.appendChild(header);
    for(let i =0; i < dataKeys.length;i+=1){
        const p = document.createElement('p');
        p.innerText = `${dataKeys[i]}: ${data[dataKeys[i]]}`
        fragment.appendChild(p);
    }
    contentArea.appendChild(fragment);
    contentArea.classList = 'data active'
  }
};
