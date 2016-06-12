export class ListWrapper <T>{
  content: T[];
  totalPages: number;   //1-based
  size: number;
  number: number;  //0-based 
}