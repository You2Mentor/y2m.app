interface AboutConfig {
  carouselSlides: AboutCarouselConfig[];
  heroSection: HeroSectionConfig;
  heroContent: HeroContentConfig;
  additionalContent: AdditionalContent;
}

export interface HeroSectionConfig {
  title: string;
  imagePath: string;
}

export interface HeroContentConfig {
  titleText: string;
  contentText: string;
  imagePath: string;
}

export interface AboutCarouselConfig {
  title: string;
  content: string;
  imagePath: string;
}

export interface AdditionalContent {
  contentBody: string;
}