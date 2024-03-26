

//ハンバーガーメニュー


$(function() {
  $('.hamburger, .nav_item').click(function() {
    $('.hamburger, .wrapper[nav-menu]').toggleClass('active');
    
    //初回クリック時
    if ($('.bar1, .bar3').hasClass('inactive')) {
      $('.bar1, .bar3').removeClass('inactive')
    }
    return false;
  });

  $('.nav_close').click(function() {
    $('.hamburger, .wrapper[nav-menu]').removeClass('active');
    return false;
  });
});


//メニュー　スクロールイベント

let start_position = 0,
    window_position,
    $window = $(window),
    $header = $('header');

$window.on( 'scroll' , function(){
    window_position = $(this).scrollTop();

    if (window_position <= start_position) {
        $header.css('top','0');
    } else {
        $header.css('top','-100px');
    }
    start_position = window_position;
    
});

$window.trigger('scroll');


//カルーセル
const mySwiper = new Swiper ('.swiper', {
  // 以下にオプションを設定
  loop: true, //最後に達したら先頭に戻る
  
  slidesPerView: '1.4', //何枚表示するか
  speed: 2000, // スライドアニメーションのスピード（ミリ秒）
  centeredSlides : true,
  autoplay: { //自動再生する
  delay: 4000, //次のスライドに切り替わるまでの時間
  disableOnInteraction: false, //ユーザーが操作したら止めるか
  waitForTransition: false, // アニメーションの間にスライドを止めるか
  },
  spaceBetween: '15',
  });



//タブ

'use strict'; /* 厳格にエラーをチェック */

{ /* ローカルスコープ */

// DOM取得
const tabMenus = document.querySelectorAll('.tab-menu-item');
console.log(tabMenus);

// イベント付加
tabMenus.forEach((tabMenu) => {
  tabMenu.addEventListener('click', tabSwitch);
})

// イベントの処理
function tabSwitch(e) {

  // クリックされた要素のデータ属性を取得
  const tabTargetData = e.currentTarget.dataset.tab;
  // クリックされた要素の親要素と、その子要素を取得
  const tabList = e.currentTarget.closest('.tab-menu');
  const tabItems = tabList.querySelectorAll('.tab-menu-item');
  // クリックされた要素の親要素の兄弟要素の子要素を取得
  const tabPanelItems = tabList.
  nextElementSibling.querySelectorAll('.tab-panel-box');

  // クリックされたtabの同階層のmenuとpanelのクラスを削除
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove('is-active');
  })
  tabPanelItems.forEach((tabPanelItem) => {
    tabPanelItem.classList.remove('is-show');
  })

  // クリックされたmenu要素にis-activeクラスを付加
  e.currentTarget.classList.add('is-active');
  // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
  tabPanelItems.forEach((tabPanelItem) => {
    if (tabPanelItem.dataset.panel ===  tabTargetData) {
      tabPanelItem.classList.add('is-show');
    }
  })

}

}