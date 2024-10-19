import Catalog from '../catalog/catalog';
import Footer from '../../components/footer/footer';

import { Film } from '../../types/film';
type PageContentProps = {
  films: Array<Film>;
  catalogType: string;
}


function PageContent({ films, catalogType }: PageContentProps): JSX.Element {
  return (
    <div className="page-content">
      <Catalog films={films} catalogType={catalogType} />

      <Footer />
    </div >
  );
}

export default PageContent;
