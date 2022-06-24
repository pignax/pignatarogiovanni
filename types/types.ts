export type HomeProps = {
  header: HeaderProps;
};

export type HeaderProps = {
  links: Links[];
};

export type Links = {
  href: string;
  name: string;
};
