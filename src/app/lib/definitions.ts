export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  companies: CompanyField[]
;};

export type Company = {
  id: string;
  name: string;
  documents: Document[];
}

export type Document = {
  id: string;
  category: string;
  documentId: string;


}

export type Event = {
  id:string;
  name: string;
  date: Date;
  category: string;

}

export type Prestation = {
  id:string;
  name: string;
  description: Text;
  price: string;
}

export type CompanyField = {
  id: string;
  name: string;
}
