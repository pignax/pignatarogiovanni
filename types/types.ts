export type AppProps = {
  header: HeaderProps;
};

export type HomeProps = {
  header: HeaderProps;
};

export type HeaderProps = {
  logo: LogoProps;
  links: LinkProps[];
};

export type LogoProps = {
  text: string;
};

export type LinksProps = {
  links: LinkProps[];
};

export type LinkProps = {
  href: string;
  name: string;
};
