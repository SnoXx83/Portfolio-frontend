
export interface Technology{
    id: number;
    name: string;
    img_url?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface Project{
    id: number;         
  name: string;      
  resume: string;     
  img_url_1?: string; 
  img_url_2?: string; 
  img_url_3?: string; 
  img_url_4?: string; 
  github_link?: string; 
  technologies: Technology[]; 
  createdAt?: string;
  updatedAt?: string;
}
