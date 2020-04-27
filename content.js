function auto_sale_sort() {
    var href = location.search;
    /* 天猫搜索 */
    if (location.hostname === "list.tmall.com" && href.indexOf("sort=") < 0)
        href += "&sort=d";
    /* 淘宝搜索 */
    else if (location.hostname === "s.taobao.com" && href.indexOf("sort=") < 0)
        href += "&sort=sale-desc";
    /* 天猫淘宝店铺内搜索&分类浏览
    else if (location.search && href.indexOf("orderType=") < 0)
        href += "&orderType=hotsell_desc"; */
    else
        return;

    /* 进行跳转 */
    if (href !== location.search)
        location.search = href;
};
function auto_delete_tmall_shop() {
    var x = document.getElementsByClassName('item J_MouserOnverReq')
    console.log('shoplength:'+x.length)
    for(var i = x.length - 1; i >= 0; i--) {
        if(x[i]['innerHTML'].includes('icon-service-tianmao')){
        x[i].parentNode.removeChild(x[i]);
        }else{
        }
    }
};

auto_sale_sort()



if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded',afterDOMLoaded);
} else {
    afterDOMLoaded();
}

function afterDOMLoaded(){
    setTimeout(function(){
    auto_delete_tmall_shop()
    }, 100); 
}


