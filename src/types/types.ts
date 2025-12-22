export type MenuCategory = "Coffee" | "Non-Coffee" | "Tea" | "Bakery" | "Morning Specials";

export interface MenuItem {
  id: number;
  name: {
    kor: string;
    eng: string;
  };
  category: MenuCategory;
  price: number;
  isNew: boolean;
  isRecommended: boolean;
  description?: {
    kor: string;
    eng: string;
  };
}
