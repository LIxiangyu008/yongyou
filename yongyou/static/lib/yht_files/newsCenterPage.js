$(function() {
    var init,
        marketActivity = $("#marketActivity"),
        newsCenter = $("#newsCenter"),
        newsCenterBtn = $("#newsCenterBtn"),
        serverHost = "http://www.yonyou.com",
        catalogName = { "market": "市场快递", "contract": "签约新闻", "media": "媒体关注", "expert": "专家观点", "all": "新闻中心" };

    init = function() {
        if (newsCenterBtn.parent().hasClass("on"))
            newsCenterBtn.click();
        else if (marketActivity.parent().hasClass("on"))
            marketActivity.click();
    }

    $("#marketActivity").click(function() {
        $(".pageNum[index='1']").click();
    });

    $(".pageNum").click(function() {
        var thiz = this;
        $.ajax({
            url: serverHost+"/Handlers/GetActivityList.ashx",
            type: "get",
            data: { pageNum: $(thiz).text() },
            success: function(data) {
                data = JSON.parse(data);
                $("#marketActivityNews").empty();
                $.each(data.Result, function(index, newsInfo) {


                    $("#marketActivityNews").append('<tr>' +
                        '<td>' +
                        '<a href="' + newsInfo.link + '" target="_blank">' + newsInfo.title + '(' + newsInfo.createtimeReal + ')</a>' +
                        '</td>' +
                        '</tr>');
                })

                var prevSelected = $(".fenye .selected"),
                    totalPages = parseInt(data.totalcount % 15 == 0 ? data.totalcount / 15 : data.totalcount / 15 + 1),
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

    newsCenterBtn.click(function() {
        $.ajax({
            url: serverHost+"/Handlers/GetNewsCenterService.ashx",
            type: "get",
            success: function(data) {
                data = JSON.parse(data);
                if (data)
                    newsCenter.empty();

                for (var key in catalogName) {
                    if (!data[key])
                        return true;

                    catalog = data[key];
                    newsCenter.append('<div class="container">' +
                        '<dl class="newspart">' +
                        '<dt>' +
                        '<div class="pull-right">' +
                        '<a href="newsListPage.html?catalog=' + key + '" class="btn btn-red btn-sm">+更多</a></div>' +
                        '<h2>' + catalogName[key] + '</h2>' +
                        '</dt>' +
                        '<dd>' +
                        '<span>' +
                        '<ul class="touzhizhe" id="' + key + '"></ul>' +
                        '</span>' +
                        '</dd>' +
                        '</dl>' +
                        '</div>');

                    $("#" + key).empty();
                    $.each(catalog, function(index, news) {
                        $("#" + key).append('<li>' +
                            '<a href="newsDetails.html?catalog=' + key + '&address=' + news.Link + '" target="_blank">' + news.title + '</a>' +
                            '<span> (' + news.pubDate + ')</span>' +
                            '</li>');
                    });
                }
            }
        });
    })

    init();
});