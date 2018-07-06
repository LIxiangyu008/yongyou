$(function () {
    var init, getNewsDetails, address,
		catalog = "all",
		serverHost = "http://www.yonyou.com",
		catalogName = { "market": "市场快递", "contract": "签约新闻", "media": "媒体关注", "expert": "专家观点", "all": "新闻中心" };

    init = function () {
        $(".pageNum[index='1']").click();
        var catalogVarName = "catalog=",
			addressVarName = "address=",
			search = window.location.search;
        var index = search.indexOf(catalogVarName),
			indexAddress = search.indexOf(addressVarName);

        if (indexAddress < index) {
            catalog = search.substring(index + catalogVarName.length);
            address = search.substring(indexAddress + addressVarName.length, index - 1);
        } else {
            catalog = search.substring(index + catalogVarName.length, indexAddress - 1);
            address = search.substring(indexAddress + addressVarName.length);
        }

        $("#subMenu").attr("href", "/yy/newsListPage.html?catalog=" + catalog).text(catalogName[catalog]);

        getNewsDetails();
    }

    getNewsDetails = function () {
        var thiz = this;

        $.ajax({
            url: serverHost+"/Handlers/GetNewsDetail.ashx",
            type: "get",
            data: { address: address },
            success: function (data) {
                data = JSON.parse(data);
                if (data) {
                    $("#newsTitle").text(data.newsTitle);
                    $("#newsContent").html(data.newsContent);

                    if (data.previousLink)
                        $("#prevNews").html('上一篇：<a href="/yy/newsDetails.html?catalog=' + catalog + '&address=' + data.previousLink + '">' + data.previousTitle + '</a>');
                    if (data.nextLink)
                        $("#nextNews").html('下一篇：<a href="/yy/newsDetails.html?catalog=' + catalog + '&address=' + data.nextLink + '">' + data.nextTitle + '</a>');
                }
            }
        });
    }

    init();
})
