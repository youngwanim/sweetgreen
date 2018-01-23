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
    { id: 'TortillaChips', name: 'Tortilla Chips' },
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
    { id: 'ToastedAlmonds', name: 'Almonds' },
    { id: 'Sprouts', name: 'Sprouts' },
    { id: 'SpicySunflowerSeeds', name: 'Spicy Sunflower Seeds' },
    { id: 'RawCorn', name: '玉米' },
    { id: 'Raisins', name: 'Raisins' },
    { id: 'HotChickpeas', name: 'Hot Chickpeas' },
    { id: 'Basil', name: 'Basil' },
    { id: 'UmamiWalnuts', name: '烤核桃' },
    { id: 'ShavedParmesan', name: 'Parmesan' },
    { id: 'Steelhead', name: 'Steelhead' },
    { id: 'OrganicWhiteCheddar', name: 'White Cheddar' },
    { id: 'BlueCheese', name: 'Blue Cheese' },
    { id: 'WarmPortobelloMix', name: 'Portobellos' },
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
    { id: 'FreshLimeSqueeze', name: 'Lime Squeeze' },
    { id: 'ZaatarBreadcrumbs', name: 'Za&#145;atar Breadcrumbs' },
    { id: 'LimeCilantroJalapenoVinaigrette', name: 'Lime Cilantro Jalapeno Vinaigrette' },
    { id: 'CurryYogurtDressing', name: 'Curry Yogurt Dressing' },
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
  ];
  products: any = [
    {
      id: 'autumn-bowl',
      name: '一碗秋',
      img: '//cdn-8.sweetgreen.com/production/images/4857/4861/OLO_CurryChickpea.jpg?b=1515008957773',
      ingredient: ['ShreddedKale', 'OrganicBabySpinach', 'ChoppedRomaine', 'RoastedChicken', 'OrganicWildRice', 'RoastedSweetPotato', 'RoastedSesameTofu', 'BalsamicVinegar'],
    },
    {
      id: 'salmonster',
      name: '三文鱼大师',
      img: '//cdn-8.sweetgreen.com/production/images/4924/4926/1%20%282%29.jpg?b=1516398931466',
      ingredient: ['ShreddedKale', 'OrganicBabySpinach', 'ChoppedRomaine', 'Avocado', 'Cucumber', 'HardBoiledEgg', 'UmamiWalnuts', 'MisoSesameGingerDressing'],
    },
    {
      id: 'guaca-hola',
      name: '你好，牛油果',
      img: '//cdn-7.sweetgreen.com/production/images/4877/4893/OLO-WinterSquash%20%20%20BC.jpg?b=1515031039747',
      ingredient: ['ShreddedKale', 'OrganicBabySpinach', 'ChoppedRomaine', 'CitrusShrimp', 'Avocado', 'Tomato', 'RawCorn', 'RedOnion', 'Cilantro'],
    },
    {
      id: 'green-earth',
      name: '绿色地球',
      img: '//cdn-5.sweetgreen.com/production/images/3330/3336/OLO-Harvest_Bowl%20%281%29-1.jpg?b=1485294654269',
      ingredient: ['ShreddedKale', 'OrganicBabySpinach', 'ChoppedRomaine', 'RoastedChicken', 'WarmQuinoa', 'SpicyBroccoli', 'RawCorn', 'Tomato', 'Apple', 'PestoVinaigrette'],
    },
    {
      id: 'egypt-hummus',
      name: 'ⓥ埃及鹰嘴豆泥ⓥ',
      img: '//cdn-3.sweetgreen.com/production/images/3349/3366/OLO-Shroomami%20%281%29-1.jpg?b=1485295334571',
      ingredient: ['ShreddedKale', 'OrganicBabySpinach', 'ChoppedRomaine', 'HousemadeHummus', 'FetaCheese', 'Tomato', 'RedOnion', 'Cucumber'],
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
