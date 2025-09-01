export const PasarLocator ={

BTN_Pasar : '//*[text()="Pasar"]',
HEAD_Favorite:'//div[contains(text(),"Favorit")]',
HEAD_Forex :'//div[contains(text(),"Forex")]',
HEAD_Komoiti :'(//div[contains(text(),"Komoditi")])[1]',
HEAD_Index :'//*[text()="Index"]',
//BTN_Love   :'(//img[@class="mx-auto d-block ue-click fav"])[1]',
  BTN_Love: (index: number = 1) => `(//img[@class="mx-auto d-block ue-click fav"])[${index}]`,
LINE_favorite : '//*[text()="Belum Ada Produk Favorit"]'
};