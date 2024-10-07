import Catalog from '../catalog/catalog';
import Footer from '../../components/footer/footer';

import { Film } from '../../types/film';
type PageContentProps = {
  films: Array<Film>;
}


function PageContent({ films }: PageContentProps): JSX.Element {
  return (
    <div className="page-content">
      <Catalog films={films} />

      <Footer />
    </div >
  );
}

export default PageContent;
