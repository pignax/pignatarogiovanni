export type AppProps = {
  header: HeaderProps;
  home: HomeProps;
};

export type HomeProps = {
  main: MainProps;
};

export type MainProps = {
  title: string;
};

export type HeaderProps = {
  logo: LogoProps;
  links: LinksProps;
};

export type LinksProps = {
  link: LinkProps[];
};

export type LogoProps = {
  text: string;
};

export type LinkProps = {
  href: string;
  name: string;
};
