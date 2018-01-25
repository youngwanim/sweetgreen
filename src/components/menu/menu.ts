import { Component, Vue } from 'vue-property-decorator';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import './menu.scss';

Vue.use(VueAwesomeSwiper);

@Component({
    template: require('./menu.html')
})
export class MenuComponent extends Vue {

    package: string = 'vue-webpack-typescript';
    repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript';
    mode: string = process.env.ENV;
    swiperOption: any = {
      // pagination: {
      //   el: '.swiper-pagination'
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      autoplay: {
        delay: 10000,
      },
      loop: true,
    };

    productList: any = [
      {
        id: 'autumn-bowl',
        img: '/assets/img/menu/CityGourmetChop_Menu_AutumnBowl.png',
        name: '一碗秋',
        description: '羽衣甘蓝， 菠菜， 长叶莴苣, 烤香草鸡, 有机野米, 红薯, 烤杏仁, 炒蘑菇, 烤豆腐, 帕玛森芝士粉, 经典意式黑醋汁',
        cals: 610,
        price: 10.10,
      },
      {
        id: 'salmonster',
        img: '/assets/img/menu/CityGourmetChop_Menu_Salmonster.png',
        name: '三文鱼大师',
        description: '羽衣甘蓝，菠菜， 长叶莴苣, 腌制三文鱼, 牛油果, 黄瓜, 鸡蛋, 烤核桃, 红洋葱, 味增芝麻姜酱',
        cals: 605,
        price: 8.60,
      },
      {
        id: 'guaca-hola',
        img: '/assets/img/menu/CityGourmetChop_Menu_GuacaHola.png',
        name: '你好，牛油果',
        description: '羽衣甘蓝， 菠菜， 长叶莴苣, 烤香辣虾, 牛油果, 番茄, 玉米, 红洋葱, 芫荽叶, 玉米片, 青柠, 香辣红酒酱',
        cals: 705,
        price:9.90,
      },
      {
        id: 'green-earth',
        img: '/assets/img/menu/CityGourmetChop_Menu_GreenEarth.png',
        name: '绿色地球',
        description: '羽衣甘蓝， 菠菜， 长叶莴苣, 烤香辣鸡肉, 藜麦, 西蓝花, 玉米, 番茄, 苹果, 炒蘑菇, 意大利青酱',
        cals: 570,
        price: 10.10,
      },
      {
        id: 'egypt-hummus',
        img: '/assets/img/menu/CityGourmetChop_Menu_EgyptHummus.png',
        name: 'ⓥ埃及鹰嘴豆泥ⓥ',
        description: '羽衣甘蓝， 菠菜， 长叶莴苣, 自制鹰嘴豆泥, 菲达奶酪, 番茄, 红洋葱, 黄瓜, 红鹰嘴豆碎, 青柠酸奶酱',
        cals: 640,
        price: 9.60,
      }
    ];

    geSlideMoveEnd() {
      const activeIndex = this.$refs.swiper['swiper'].activeIndex;

      if (activeIndex === 2) {
        this.$refs.video1.play();
      }
      if (activeIndex === 3) {
        this.$refs.video2.play();
      }
      if (activeIndex === 4) {
        this.$refs.video3.play();
      }
    }

    geSlideMoveStart() {
      this.$refs.video1.pause();
      this.$refs.video2.pause();
      this.$refs.video3.pause();
    }

}
