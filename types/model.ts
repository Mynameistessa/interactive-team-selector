export interface CTADetails {
  newTab: boolean;
  href: string;
  text: string;
}

export interface VideoDetails {
  video: {
    url: string;
    title: string;
  } | null;
  placeholder: {
    url: string;
    alt: string;
  };
  label: string;
}

export interface Subteam {
  title: string;
  body: string;
  cta: CTADetails[];
  video: VideoDetails[];
}
