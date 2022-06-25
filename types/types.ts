export type HomeProps = {
  header: HeaderProps;
};

export type HeaderProps = {
  links: LinkProps[];
};

export type LinkProps = {
  href: string;
  name: string;
};
