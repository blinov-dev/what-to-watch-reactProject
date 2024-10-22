import Catalog from '../catalog/catalog';
import Footer from '../../components/footer/footer';

type PageContentProps = {
  catalogType: string;
}


function PageContent({ catalogType }: PageContentProps): JSX.Element {
  return (
    <div className="page-content">
      <Catalog catalogType={catalogType} />

      <Footer />
    </div >
  );
}

export default PageContent;
