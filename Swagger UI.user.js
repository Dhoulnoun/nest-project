// ==UserScript==
// @name         Swagger UI
// @namespace    http://localhost:3000/api
// @version      0.2
// @description  try to take over the world!
// @author       Audren Guillaume
// @match        http://localhost:3000/api/*
// @match        http://0.0.0.0:3000/api/*
// @match        http://itt-ddc.private.list.lu:3000/api/*
// @icon         https://static1.smartbear.co/swagger/media/assets/swagger_fav.png
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @resource     bootstrapCSS https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css
// @grant        GM_getResourceURL
// @grant        unsafeWindow
// ==/UserScript==

function cssElement(url) {
  let link = document.createElement('link');
  link.href = url;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  return link;
}
document.head.appendChild(cssElement(GM_getResourceURL('bootstrapCSS')));

const users = [
  { name: 'admin', password: 'admin' },
  { name: 'user-e', password: '#pwd e' },
  { name: 'user-a', password: '#pwd a' },
  { name: 'user-ae', password: '#pwd ae' },
  { name: 'user-x', password: '#pwd x' },
  { name: 'projectAdmin', password: '#pwd pa' },
  { name: 'projectMan', password: '#pwd pm' },
  { name: 'sysAdmin', password: '#pwd sa' },
];

const route = '/auth/login';
const url = `${window.location.origin}${route}`;

function main() {
  // the fetch request
  async function request({ name, password }) {
    try {
      // rename the title of the tab with the user login name
      document.title = `${name} on ${window.location.origin}`;

      // make the login request to the api / backend
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login: name, password }),
      });

      // get the token from the request response
      let payload = await res.json();

      // get the Redux store and dispatch an event to insert the token
      // TamperMonkey: use unsafeWindow instead of window to get full object
      unsafeWindow.ui.getStore().dispatch({
        type: 'authorize',
        payload: {
          bearer: {
            name: 'Bearer',
            schema: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT',
              description: 'Enter the access token (JWT format only)',
            },
            value: payload.token,
          },
        },
      });
      return true;
    } catch (e) {
      console.log('Error', e);
      return false;
    }
  }

  // components (display in reverse-order)

  const selectHtml = `
  <div>
    <select id="select-user" class="form-select">
      ${
        users.length > 0
          ? users.map(
              (user) => `<option value="${user.name}">${user.name}</option>`,
            )
          : '<option value="no-">No users</option>'
      }
    </select>
  </div>
  `;

  const selected = document.createElement('div');
  selected.style =
    'color: white; margin-left: 10px; position: relative; padding-right: 16px;';

  const badge = document.createElement('span');
  badge.className =
    'position-absolute top-10 end-0 translate-middle p-1 bg-success border border-light rounded-circle';

  const connectBtn = document.createElement('button');
  connectBtn.innerText = 'connect';
  connectBtn.type = 'button';
  connectBtn.className = 'btn btn-outline-success mx-2';
  connectBtn.active = true;

  connectBtn.onclick = async function (event) {
    const username = document.getElementById('select-user').value;
    const user = users.find((u) => u.name === username);

    const isOk = await request(user);
    if (isOk) {
      console.log('selected user is:', user);
      selected.innerText = `Connected as "${user.name}"`;
      selected.appendChild(badge);
    } else {
      $('.topbar-wrapper').removeChild(selected);
    }
  };

  const topbar = document.getElementsByClassName('topbar')[0];
  topbar.style = 'position: sticky; top: 0; z-index: 999;';

  //--- Add nodes to page
  $('.topbar-wrapper').append(selectHtml);
  $('.topbar-wrapper').append(connectBtn);
  $('.topbar-wrapper').append(selected);
}

// The setTimeout is important to wait the load of the react app before manipulating DOM.
setTimeout(() => {
  main();
}, 500);
