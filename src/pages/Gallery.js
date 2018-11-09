import React, {Fragment} from 'react';

import NavTop from './../components/NavTop/NavTop'
import Socials from './../components/Socials/Socials'
import Gallery from './../components/Gallery/Gallery'

class GalleryPage extends React.Component {

  render() {
    window.scrollTo(0, 0);
    return (
      <Fragment>
        
        <Socials />
        {/*<NavTop />*/}
        <div className="row">
          <Gallery id={+this.props.params.id} currentCity={this.props.params.cityName}/>
        </div>

      </Fragment>
    )
  }
}

export default GalleryPage;
