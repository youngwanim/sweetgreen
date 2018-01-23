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
        id: 'autumn-bowl',
        img: '//cdn-1.sweetgreen.com/production/images/4857/4860/OLO_CurryChickpea.jpg?b=1515008948291',
        name: '一碗秋',
        description: '羽衣甘蓝，菠菜， 长叶莴苣, 菊苣, 烤香草鸡, 有机野米, 红薯, 烤杏仁, 炒蘑菇, 烤豆腐, 哥瑞纳-帕达诺奶酪, 经典意式黑醋汁',
        cals: 610,
        price: 10.10,
      },
      {
        id: 'salmonster',
        img: '//cdn-7.sweetgreen.com/production/images/4877/4880/OLO-WinterSquash%20%20%20BC.jpg?b=1515028335983',
        name: '三文鱼大师',
        description: '羽衣甘蓝，菠菜， 长叶莴苣, 菊苣, 腌制三文鱼, 牛油果, 燕麦面饼干, 黄瓜, 鸡蛋, 烤核桃, 红芸豆, 味增芝麻姜酱',
        cals: 605,
        price: 8.60,
      },
      {
        id: 'guaca-hola',
        img: '//cdn-4.sweetgreen.com/production/images/3330/3333/OLO-Harvest_Bowl%20%281%29-1.jpg?b=1485294620712',
        name: '你好，牛油果',
        description: '羽衣甘蓝，菠菜， 长叶莴苣, 菊苣, 烤香辣虾, 牛油果, 番茄, 玉米, 红洋葱, 芫荽叶, 玉米片, 青柠, 青柠腰果酱',
        cals: 705,
        price:9.90,
      },
      {
        id: 'green-earth',
        img: '//cdn-2.sweetgreen.com/production/images/4924/4928/1%20%282%29.jpg?b=1516398949762',
        name: '绿色地球',
        description: '： 羽衣甘蓝，菠菜， 长叶莴苣, 菊苣, 烤香辣鸡肉, 藜麦, 西蓝花, 玉米, 番茄, 苹果, 黑橄榄, 炒蘑菇, 意大利青酱',
        cals: 570,
        price: 10.10,
      },
      {
        id: 'egypt-hummus',
        img: '//cdn-4.sweetgreen.com/production/images/3349/3351/OLO-Shroomami%20%281%29-1.jpg?b=1485294960790',
        name: 'ⓥ埃及鹰嘴豆泥ⓥ',
        description: '羽衣甘蓝，菠菜， 长叶莴苣, 菊苣, 自制鹰嘴豆泥, 菲达奶酪, 番茄, 红洋葱, 黄瓜, 红鹰嘴豆碎, 青柠酸奶酱',
        cals: 640,
        price: 9.60,
      }
    ];

}
