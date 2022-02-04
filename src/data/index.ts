export const categories = {
	'لوازم الکترونیکی': 
		['گوشی', 'لپتاپ', 'کامپیوتر'],
	'وسایل نقلیه': 
		['ماشین سنگین', 'پراید', 'پیکان', 'پژو', 'تیبا', 'سمند'],
	املاک: 
		['خانه', 'آپارتمان', 'ویلا'],
};

export const provinces = {
	تهران: 
		['شهریار', 'اسلام شهر', 'ورامین', 'اندیشه', 'رباط کریم', 'شریف اباد', 'لواسان', 'تهران', 'ری'],
	رشت: 
		['رودبار', 'رشت', 'ماسوله', 'صومه سرا', 'استارا', 'انزلی', 'ماسال', 'فومن'],
	مشهد: 
		['نیشابور', 'سبزوار', 'قوچان', 'تربت حیدریه', 'تربت جام', 'چناران', 'گلبهار', 'کاشمر'],
};

export const categoriesList = Object.keys(categories);
export const provincesList = Object.keys(provinces);

export type ProvincesObject = typeof provinces;
export type CategoriesObject = typeof categories;

export type Province = keyof ProvincesObject;
export type Categorie = keyof CategoriesObject;
