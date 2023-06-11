import getData from '@utils/getData.js';
import github from '@images/github.png';

const Template = async () => {
  const data = await getData();
  const view = `
    <div class="About">
      <div class="card">
        <div class="card_details">
          <div class="card_photo center circle">
            <img src="${data.picture.large}" alt="${data.name.first}">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;"
              xml:space="preserve">
              <circle cx="50" cy="50" r="40" />
            </svg>
          </div>
          <p class="card_title">Hi, My name is</p>
          <p class="card_value">${data.name.first} ${data.name.last}</p>
        </div>
        <div class="card_userdata">
          <ul>
            <li>${data.email}</li>
            <li>${data.location.country}</li>
          </ul>
        </div>
        <div class="card_social">
          <a href="https://twitter.com/gndx">
            <img src="assets/images/twitter.png" />
          </a>
          <a href="https://github.com/gndx">
            <img src="${github}" />
          </a>
          <a href="https://instagram.com/gndx">
            <img src="assets/images/instagram.png" />
          </a>
        </div>
      </div>
    </div>
  `;
  return view;
};

//antes las imgenes se importaban asi ../src/assets/images/twitter.png
//pero ahora se importan asi assets/images/twitter.png
//porque en el webpack.config.js se agrego el plugin CopyWebpackPlugin

//webpack nos provee la forma de convertrir las imagenes en base64, 
//asi que para el logo de github se puede hacer asi

export default Template;