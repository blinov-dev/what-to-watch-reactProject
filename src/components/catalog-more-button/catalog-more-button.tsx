
type CatalogMoreButtonProps = {
  children: string;
}


function CatalogMoreButton({ children }: CatalogMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button">
        {children}

      </button>
    </div>
  );
}

export default CatalogMoreButton;
