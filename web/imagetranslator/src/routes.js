import React from 'react';

import {BrowserRouter,Route} from 'react-router-dom';
import ImageAnalysis from './pages/ImageAnalysis';
import ImageTranslate from './pages/ImageTranslate';
import Landing from './pages/Landing';

function Routes(){
return(
  <BrowserRouter>
    <Route  path="/" exact component={Landing}/>
    <Route  path="/image-analysis" component={ImageAnalysis}/>
    <Route  path="/image-translate" component={ImageTranslate}/>
  </BrowserRouter>
    );
}

export default Routes;