import { Component, Vue } from 'vue-property-decorator';

import './menu.scss';

@Component({
    template: require('./menu.html')
})
export class MenuComponent extends Vue {

    package: string = 'vue-webpack-typescript';
    repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript';
    mode: string = process.env.ENV;

    productList: any = [
      {
        id: 'menu1',
        img: '//cdn-1.sweetgreen.com/production/images/4857/4860/OLO_CurryChickpea.jpg?b=1515008948291',
        name: 'curry chickpea bowl',
        description: 'organic baby spinach, warm quinoa, hot chickpeas, shredded carrots, shredded cabbage, cilantro, roasted chicken, raisins, roasted almonds, curry yogurt dressing',
        cals: 610,
        price: 10.10,
      },
      {
        id: 'menu2',
        img: '//cdn-2.sweetgreen.com/production/images/4924/4928/1%20%282%29.jpg?b=1516398949762',
        name: 'Miso Bowl',
        description: 'shredded kale, organic wild rice, miso-glazed vegetables, basil, shredded cabbage, roasted chicken, roasted almonds, miso sesame ginger dressing',
        cals: 570,
        price: 10.10,
      },
      {
        id: 'menu3',
        img: '//cdn-7.sweetgreen.com/production/images/4877/4880/OLO-WinterSquash%20%20%20BC.jpg?b=1515028335983',
        name: 'Winter Squash + Blue Cheese Warm Bowl',
        description: 'shredded kale, organic wild rice, apples, local blue cheese, roasted squash, raisins, umami walnuts, balsamic vinaigrette',
        cals: 605,
        price: 8.60,
      },
      {
        id: 'menu4',
        img: '//cdn-4.sweetgreen.com/production/images/3330/3333/OLO-Harvest_Bowl%20%281%29-1.jpg?b=1485294620712',
        name: 'Harvest Bowl',
        description: 'organic wild rice, shredded kale, apples, roasted sweet potato, roasted chicken, goat cheese, toasted almonds, balsamic vinaigrette',
        cals: 705,
        price:9.90,
      },
      {
        id: 'menu5',
        img: '//cdn-4.sweetgreen.com/production/images/3349/3351/OLO-Shroomami%20%281%29-1.jpg?b=1485294960790',
        name: 'Shroomami',
        description: 'organic wild rice, shredded kale, raw beet, sprouts, basil, spicy sunflower seeds, warm portobello mix, roasted sesame tofu, miso sesame ginger dressing',
        cals: 640,
        price: 9.60,
      }
    ];

}
