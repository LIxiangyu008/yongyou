$(function() {
    var init,
        catalog = "all",
        serverHost = "http://www.yonyou.com",
        catalogName = { "market": "市场快递", "contract": "签约新闻", "media": "媒体关注", "expert": "专家观点", "linshi": "临时公告", "jidugonggao": "季度公告", "bannian": "半年公告", "nian": "年度公告", "all": "新闻中心" };

    init = function() {
        var varName = "catalog",
            search = window.location.search;
        var index = search.indexOf(varName);

        catalog = search.substring(varName.length + 2);
        $("#subMenu").attr("href", "newsListPage.html?catalog=" + catalog).text(catalogName[catalog]);
        $(".pageNum[index='1']").click();
    }

    $(".pageNum").click(function() {
        var thiz = this;

        $.ajax({
            url: serverHost+"/Handlers/GetNewsList.ashx",
            type: "get",
            data: { catalog: catalog, pageIndex: $(thiz).text() - 1 },
            success: function(data) {
                console.log(data);
                data = JSON.parse(data);
                if (data && data.newsList && data.newsList.length > 0) {
                    $("#news").empty();
                    $.each(data.newsList, function(index, newsInfo) {
                        var date = new Date(newsInfo.pubDate);
                        if (newsInfo.PubLink != "") {
                            $("#news").append('<tr>' +
                                '<td>' +
                                '<a href="' + newsInfo.PubLink + '" target="_blank">' + newsInfo.title + '(' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ')</a>' +
                                '</td>' +
                                '</tr>');
                        } else {
                            $("#news").append('<tr>' +
                                '<td>' +
                                '<a href="newsDetails.html?catalog=' + catalog + '&address=' + newsInfo.Link + '" target="_blank">' + newsInfo.title + '(' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ')</a>' +
                                '</td>' +
                                '</tr>');
                        }
                    });
                    var prevSelected = $(".fenye .selected"),
                        totalPages = data.totalPages,
                        pageNum = parseInt($(thiz).text());
                    if (prevSelected.length > 0)
                        prevSelected.removeClass("selected");

                    if ($(thiz).attr("index") < 4) {
                        if (pageNum > 1 && pageNum < totalPages - 3) {
                            $(".pageNum[index='1']").text(pageNum - 1);
                            $(".pageNum[index='2']").text(pageNum).addClass("selected");
                            $(".pageNum[index='3']").text(pageNum + 1);
                        } else {
                            $(thiz).addClass("selected");
                        }

                        $(".pageNum[index='4']").text(totalPages - 2);
                        $(".pageNum[index='5']").text(totalPages - 1);
                        $(".pageNum[index='6']").text(totalPages);
                    } else {
                        $(".pageNum[index='1']").text(1);
                        $(".pageNum[index='2']").text(2);
                        $(".pageNum[index='3']").text(3);

                        if (pageNum > 4 && pageNum < totalPages) {
                            $(".pageNum[index='4']").text(pageNum - 1);
                            $(".pageNum[index='5']").text(pageNum).addClass("selected");
                            $(".pageNum[index='6']").text(pageNum + 1);
                        } else {
                            $(thiz).addClass("selected");
                        }
                    }
                }
            }
        });
    });

    $(".prev").click(function() {
        var prevSelected = $(".fenye .selected");
        if (prevSelected.length > 0) {
            var pageNum = prevSelected.attr("index");
            var current = $(".pageNum[index='" + (parseInt(pageNum) - 1) + "']");

            if (current.length > 0)
                current.click();
        }
    });

    $(".next").click(function() {
        var prevSelected = $(".fenye .selected");
        if (prevSelected.length > 0) {
            var pageNum = prevSelected.attr("index");
            var current = $(".pageNum[index='" + (parseInt(pageNum) + 1) + "']");

            if (current.length > 0)
                current.click();
        }
    });

    init();
})