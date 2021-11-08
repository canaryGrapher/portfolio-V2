

// Use: To list types for AboutCard component
// Where: 
export type IAbout = {
  year: string;
  info: string;
  image: string;
}

export interface IAboutCard extends IAbout {
  odd: boolean;
}

export type ISkills = {
  image: string;
  title: string;
  info: string;
}