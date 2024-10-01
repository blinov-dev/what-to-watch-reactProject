type titleProps = {
  className: string;
  children: string;
};


function Title({ className, children }: titleProps): JSX.Element {
  return (
    <h2 className={className}>{children}</h2>
  );
}

export default Title;
