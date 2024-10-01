import Catalog from '../catalog/catalog';
import Footer from '../../components/footer/footer';

type PageContentProps = {
  filmsCount: number;
}


function PageContent({ filmsCount }: PageContentProps): JSX.Element {
  return (
    <div className="page-content">
      <Catalog filmsCount={filmsCount} />

      <Footer />
    </div >
  );
}

export default PageContent;
