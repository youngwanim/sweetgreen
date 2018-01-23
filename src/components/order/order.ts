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
    { id: 'WarmQuinoa', name: 'Warm Quinoa ' },
    { id: 'OrganicWildRice', name: 'Wild Rice' },
    { id: 'OrganicBabySpinach', name: 'Baby Spinach' },
    { id: 'OrganicArugula', name: 'Arugula' },
    { id: 'OrganicMesclun', name: 'Mesclun' },
    { id: 'ShreddedKale', name: 'Kale' },
    { id: 'ChoppedRomaine', name: 'Romaine' },
    { id: 'RedOnion', name: 'Onion' },
    { id: 'TortillaChips', name: 'Tortilla Chips' },
    { id: 'RoastedSweetPotato', name: 'Sweet Potato' },
    { id: 'Cilantro', name: 'Cilantro' },
    { id: 'ShreddedCabbage', name: 'Cabbage' },
    { id: 'Apples', name: 'Apples' },
    { id: 'SpicyBroccoli', name: 'Spicy Broccoli' },
    { id: 'OrganicCarrot', name: 'Carrot' },
    { id: 'SpicyQuinoa', name: 'Spicy Quinoa' },
    { id: 'Cucumber', name: 'Cucumber' },
    { id: 'RawBeet', name: 'Beet' },
    { id: 'Tomato', name: 'Tomato' },
    { id: 'ToastedAlmonds', name: 'Almonds' },
    { id: 'Sprouts', name: 'Sprouts' },
    { id: 'SpicySunflowerSeeds', name: 'Spicy Sunflower Seeds' },
    { id: 'RawCorn', name: 'Corn' },
    { id: 'Raisins', name: 'Raisins' },
    { id: 'HotChickpeas', name: 'Hot Chickpeas' },
    { id: 'Basil', name: 'Basil' },
    { id: 'UmamiWalnuts', name: 'Umami Walnuts' },
    { id: 'ShavedParmesan', name: 'Parmesan' },
    { id: 'Steelhead', name: 'Steelhead' },
    { id: 'OrganicWhiteCheddar', name: 'White Cheddar' },
    { id: 'BlueCheese', name: 'Blue Cheese' },
    { id: 'WarmPortobelloMix', name: 'Portobellos' },
    { id: 'RoastedSquash', name: 'Roasted Squash' },
    { id: 'Avocado', name: 'Avocado' },
    { id: 'GoatCheese', name: 'Goat Cheese' },
    { id: 'HousemadeHummus', name: 'Hummus' },
    { id: 'RoastedSesameTofu', name: 'Sesame Tofu' },
    { id: 'HerbFalafel', name: 'Herb Falafel' },
    { id: 'CitrusShrimp', name: 'Shrimp' },
    { id: 'RoastedChicken', name: 'Chicken' },
    { id: 'ParmesanCrisp', name: 'Parmesan Crisp' },
    { id: 'HardBoiledEgg', name: 'Egg' },
    { id: 'FetaCheese', name: 'Feta' },
    { id: 'MisoGlazedVegetables', name: 'Miso Glazed Vegetables' },
    { id: 'FreshLimeSqueeze', name: 'Lime Squeeze' },
    { id: 'ZaatarBreadcrumbs', name: 'Za&#145;atar Breadcrumbs' },
    { id: 'LimeCilantroJalapenoVinaigrette', name: 'Lime Cilantro Jalapeno Vinaigrette' },
    { id: 'CurryYogurtDressing', name: 'Curry Yogurt Dressing' },
    { id: 'MisoSesameGingerDressing', name: 'Miso Sesame Ginger Dressing' },
    { id: 'BalsamicVinegar', name: 'Vinegar' },
    { id: 'NoriFurikake', name: 'Nori Furikake' },
    { id: 'CarrotChiliVinaigrette', name: 'Carrot Chili Vinaigrette' },
    { id: 'ExtraVirginOliveOil', name: 'Olive Oil' },
    { id: 'SweetgreenHotSauce', name: 'Hot Sauce' },
    { id: 'SpicyCashewDressing', name: 'Spicy Cashew Dressing' },
    { id: 'RedChili', name: 'Red Chili' },
    { id: 'PestoVinaigrette', name: 'Pesto Vinaigrette' },
    { id: 'FreshLemonSqueeze', name: 'Lemon Squeeze' },
    { id: 'CucumberTahiniYogurtDressing', name: 'Cucumber Tahini Yogurt Dressing' },
    { id: 'CaesarDressing', name: 'Caesar' },
    { id: 'BalsamicVinaigrette', name: 'Balsamic Vinaigrette' },
  ];
  products: any = [
    {
      id: 'menu1',
      name: 'Curry Chickpea Bowl',
      img: '//cdn-8.sweetgreen.com/production/images/4857/4861/OLO_CurryChickpea.jpg?b=1515008957773',
      ingredient: ['BalsamicVinaigrette', 'CaesarDressing', 'HerbFalafel'],
    },
    {
      id: 'menu2',
      name: 'Miso Bowl',
      img: '//cdn-8.sweetgreen.com/production/images/4924/4926/1%20%282%29.jpg?b=1516398931466',
      ingredient: ['BalsamicVinaigrette', 'CaesarDressing'],
    },
    {
      id: 'menu3',
      name: 'Winter Squash + Blue Cheese Warm Bowl',
      img: '//cdn-7.sweetgreen.com/production/images/4877/4893/OLO-WinterSquash%20%20%20BC.jpg?b=1515031039747',
      ingredient: ['ShreddedKale', 'OrganicWildRice ', 'Apples', 'UmamiWalnuts', 'Raisins'],
    },
    {
      id: 'menu4',
      name: 'Harvest Bowl',
      img: '//cdn-5.sweetgreen.com/production/images/3330/3336/OLO-Harvest_Bowl%20%281%29-1.jpg?b=1485294654269',
      ingredient: ['ShreddedKale', 'WarmQuinoa', 'Apples', 'ToastedAlmonds'],
    },
    {
      id: 'menu5',
      name: 'Shroomami',
      img: '//cdn-3.sweetgreen.com/production/images/3349/3366/OLO-Shroomami%20%281%29-1.jpg?b=1485295334571',
      ingredient: ['ShreddedKale', 'OrganicWildRice', 'Basil', 'Spicy Sunflower Seeds'],
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
