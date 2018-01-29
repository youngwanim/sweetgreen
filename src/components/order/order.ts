import { Component, Vue } from 'vue-property-decorator';

import './order.scss';

@Component({
    template: require('./order.html')
})
export class OrderComponent extends Vue {

  package: string = 'vue-webpack-typescript';
  repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript';
  mode: string = process.env.ENV;
  currentProductImg: string = '';
  currentProductName: string = '';
  currentProductIngredient: any = [];
  ingredientsHeight: string = 'auto';
  ingredientItem: any = [
    { id: 'WarmQuinoa', name: '藜麦' },
    { id: 'OrganicWildRice', name: '有机野米' },
    { id: 'OrganicBabySpinach', name: '菠菜' },
    { id: 'OrganicArugula', name: 'Arugula' },
    { id: 'OrganicMesclun', name: 'Mesclun' },
    { id: 'ShreddedKale', name: '羽衣甘蓝' },
    { id: 'ChoppedRomaine', name: '长叶莴苣' },
    { id: 'RedOnion', name: '红洋葱' },
    { id: 'TortillaChips', name: '玉米片' },
    { id: 'RoastedSweetPotato', name: '红薯' },
    { id: 'Cilantro', name: '芫荽叶' },
    { id: 'ShreddedCabbage', name: 'Cabbage' },
    { id: 'Apples', name: 'Apples' },
    { id: 'SpicyBroccoli', name: '西蓝花' },
    { id: 'OrganicCarrot', name: 'Carrot' },
    { id: 'SpicyQuinoa', name: 'Spicy Quinoa' },
    { id: 'Cucumber', name: '黄瓜' },
    { id: 'RawBeet', name: 'Beet' },
    { id: 'Tomato', name: '番茄' },
    { id: 'ToastedAlmonds', name: '烤杏仁' },
    { id: 'Sprouts', name: 'Sprouts' },
    { id: 'SpicySunflowerSeeds', name: 'Spicy Sunflower Seeds' },
    { id: 'RawCorn', name: '玉米' },
    { id: 'Raisins', name: 'Raisins' },
    { id: 'HotChickpeas', name: '红鹰嘴豆碎' },
    { id: 'Basil', name: 'Basil' },
    { id: 'UmamiWalnuts', name: '烤核桃' },
    { id: 'ShavedParmesan', name: '帕玛森芝士粉' },
    { id: 'Steelhead', name: '腌制三文鱼' },
    { id: 'OrganicWhiteCheddar', name: 'White Cheddar' },
    { id: 'BlueCheese', name: 'Blue Cheese' },
    { id: 'WarmPortobelloMix', name: '炒蘑菇' },
    { id: 'RoastedSquash', name: 'Roasted Squash' },
    { id: 'Avocado', name: '牛油果' },
    { id: 'GoatCheese', name: 'Goat Cheese' },
    { id: 'HousemadeHummus', name: '自制鹰嘴豆泥' },
    { id: 'RoastedSesameTofu', name: '烤豆腐' },
    { id: 'HerbFalafel', name: 'Herb Falafel' },
    { id: 'CitrusShrimp', name: 'Shrimp' },
    { id: 'RoastedChicken', name: '烤香草鸡' },
    { id: 'ParmesanCrisp', name: 'Parmesan Crisp' },
    { id: 'HardBoiledEgg', name: '鸡蛋' },
    { id: 'FetaCheese', name: '菲达奶酪' },
    { id: 'MisoGlazedVegetables', name: 'Miso Glazed Vegetables' },
    { id: 'FreshLimeSqueeze', name: '青柠' },
    { id: 'ZaatarBreadcrumbs', name: 'Za&#145;atar Breadcrumbs' },
    { id: 'LimeCilantroJalapenoVinaigrette', name: 'Lime Cilantro Jalapeno Vinaigrette' },
    { id: 'CurryYogurtDressing', name: '青柠酸奶酱' },
    { id: 'MisoSesameGingerDressing', name: '味增芝麻姜酱' },
    { id: 'BalsamicVinegar', name: '经典意式黑醋汁' },
    { id: 'NoriFurikake', name: 'Nori Furikake' },
    { id: 'CarrotChiliVinaigrette', name: 'Carrot Chili Vinaigrette' },
    { id: 'ExtraVirginOliveOil', name: 'Olive Oil' },
    { id: 'SweetgreenHotSauce', name: 'Hot Sauce' },
    { id: 'SpicyCashewDressing', name: 'Spicy Cashew Dressing' },
    { id: 'RedChili', name: 'Red Chili' },
    { id: 'PestoVinaigrette', name: '意大利青酱' },
    { id: 'FreshLemonSqueeze', name: 'Lemon Squeeze' },
    { id: 'CucumberTahiniYogurtDressing', name: 'Cucumber Tahini Yogurt Dressing' },
    { id: 'CaesarDressing', name: 'Caesar' },
    { id: 'BalsamicVinaigrette', name: 'Balsamic Vinaigrette' },
    { id: 'SpicyRedwineDressing', name: '香辣红酒酱' },
  ];
  products: any = [
    {
      id: 'autumn-bowl',
      name: '一碗秋',
      img: '/assets/img/menu/CityGourmetChop_Menu_AutumnBowl.png',
      ingredient: ['ShreddedKale', 'OrganicBabySpinach', 'ChoppedRomaine', 'RoastedChicken', 'WarmPortobelloMix', 'ToastedAlmonds', 'OrganicWildRice', 'RoastedSweetPotato', 'RoastedSesameTofu', 'ShavedParmesan', 'BalsamicVinegar'],
    },
    {
      id: 'salmonster',
      name: '三文鱼大师',
      img: '/assets/img/menu/CityGourmetChop_Menu_Salmonster.png',
      ingredient: ['ShreddedKale', 'OrganicBabySpinach', 'Steelhead', 'ChoppedRomaine', 'Avocado', 'Cucumber', 'HardBoiledEgg', 'RedOnion', 'UmamiWalnuts', 'MisoSesameGingerDressing'],
    },
    {
      id: 'guaca-hola',
      name: '你好，牛油果',
      img: '/assets/img/menu/CityGourmetChop_Menu_GuacaHola.png',
      ingredient: ['ShreddedKale', 'OrganicBabySpinach', 'ChoppedRomaine', 'CitrusShrimp', 'TortillaChips', 'FreshLimeSqueeze', 'Avocado', 'Tomato', 'RawCorn', 'RedOnion', 'Cilantro', 'SpicyRedwineDressing'],
    },
    {
      id: 'green-earth',
      name: '绿色地球',
      img: '/assets/img/menu/CityGourmetChop_Menu_GreenEarth.png',
      ingredient: ['ShreddedKale', 'OrganicBabySpinach', 'ChoppedRomaine', 'RoastedChicken', 'WarmPortobelloMix', 'WarmQuinoa', 'SpicyBroccoli', 'RawCorn', 'Tomato', 'Apple', 'PestoVinaigrette'],
    },
    {
      id: 'egypt-hummus',
      name: '埃及鹰嘴豆泥',
      img: '/assets/img/menu/CityGourmetChop_Menu_EgyptHummus.png',
      ingredient: ['ShreddedKale', 'OrganicBabySpinach', 'ChoppedRomaine', 'HousemadeHummus', 'HotChickpeas', 'FetaCheese', 'Tomato', 'RedOnion', 'Cucumber', 'CurryYogurtDressing'],
    },
  ];

  getIngredientsListHeight(event) {
    const detailInfo = document.getElementById('detail-info').clientHeight;
    const ingredientsBar = document.getElementById('ingredients-bar').clientHeight;
    const detailName = document.getElementById('detail-name').clientHeight;
    if (document.documentElement.clientWidth >= 929) {
      this.ingredientsHeight = detailInfo - ingredientsBar - detailName - 20 + 'px';
    } else {
      this.ingredientsHeight = 'auto';
    }
    return document.documentElement.clientHeight;
  }

  setIngredientItem(item) {
    let result = false;
    for (let key in this.currentProductIngredient) {
      if (item === this.currentProductIngredient[key]) {
        result = true;
      }
    }
    return result;
  }

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.getIngredientsListHeight);
      this.getIngredientsListHeight;

      for (let product in this.products) {
        if (this.$route.params.id === this.products[product].id) {
          this.currentProductImg = this.products[product].img;
          this.currentProductName = this.products[product].name;
          this.currentProductIngredient = this.products[product].ingredient;
        }
      }
    });
  }

}
