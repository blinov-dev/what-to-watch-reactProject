type titleProps = {
  className: string;
  children: string | JSX.Element;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};


function Title({ className, children, tag = 'h1' }: titleProps): JSX.Element {
  const Heading = tag;
  return (
    <Heading className={className}>{children}</Heading>
  );
}

export default Title;
