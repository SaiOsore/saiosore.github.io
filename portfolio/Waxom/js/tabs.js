//tabs
$('.latest-prs__list').click(function() {
    let tabName = $(this).attr('show-tab');
    if(tabName === 'tabs-all') {
      $(this).addClass('latest-prs__list--active').siblings().removeClass('latest-prs__list--active');
      $('.tabs-body .' + tabName).addClass('tabs-content--active');
      $('.latest-pr__btn').hide();
    } else {
      $(this).addClass('latest-prs__list--active').siblings().removeClass('latest-prs__list--active');
      $('.tabs-body .' + tabName).addClass('tabs-content--active').siblings().removeClass('tabs-content--active');
      $('.latest-pr__btn').show();
    }      
});