// React Applicationn Imports
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './component/App'
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Imported Components
import Home_Page from './component/Home_Page';
import Tea from './component/Tea';
import Contact_Form from './component/Contact_Form';
import BlackTea from './component/Black_Tea';
import GreenTea from './component/Green_Tea';
import HerbalTea from './component/Herbal_Tea';
import HibiscusTea from './component/Hibiscus_Tea';
import BaseLayout from './component/Base_Layout';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={Home_Page} />
          <Route path="/Contact_Form" component={Contact_Form} />
          <Route path="/Tea" component={Tea} />
        </Switch>
      </BaseLayout>
    </App>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
