// import { Category} from './category';

export class Product {

    readonly id : number;
     name: string;
     description: string;
     availableQuantity: number;
     price: number;
    // private category: Category;
    categoryId: number;
    categoryName: string;
    categoryDescription: string;

    constructor(id?: number, name?: string, description?: string, availableQuantity?: number, 
        price?: number, categoryId?: number, categoryName?: string, categoryDescription?: string
    
    ) {
        this.id=id || 0;
        this.name=name || '';
        this.description=description || '';
        this.availableQuantity=availableQuantity || 0;
        this.price=price || 0;
        // this.category=category;
        this.categoryId=categoryId || 0;
        this.categoryName=categoryName || '';
        this.categoryDescription=categoryDescription || '';
    }

    // getId() {
    //     return this.id;
    // }

    // public getName() {
    //     return this.name;
    // }
    // getDescription(){return this.description;}
    // getAvailableQuantitiy(){return this.availableQuantity;}
    // getPrice(){return this.price;}
    // // getCategory(){return this.category;}
    // getCategoryId() {return this.categoryId}
    // getCategoryName() {return this.categoryName}
    // getCategoryDescription() {return this.categoryDescription}

    // // setId(id: number) {
    // //     this.id=id;
    // // }

    // setName(name: string) {
    //     this.name=name;
    // }
    // setDescription(description:string){this.description=description;}
    // setAvailableQuantitiy(availableQuantity: number){this.availableQuantity=availableQuantity;}
    // setPrice(price: number){this.price=price;}
    // // setCategory(category: Category){this.category=category;}
    // setCategoryId(categoryId: number) {this.categoryId=categoryId}
    // setCategoryName(categoryName: string) {this.categoryName=categoryName}
    // setCategoryDescription(categoryDescription: string) {this.categoryDescription=categoryDescription}

    
}
