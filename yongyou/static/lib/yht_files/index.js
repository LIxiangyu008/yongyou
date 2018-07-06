$(function() {
    var init, validFn, passwordCheck, getUserImg, generateNewsCenter,
        serverHost = "http://www.yonyou.com/";
    init = function() {
        generateNewsCenter();
    }

    generateNewsCenter = function() {
        $.ajax({
            url: serverHost+"Handlers/GetIndexService.ashx",
            type: "GET",
            success: function(data) {
                data = JSON.parse(data);
                if (data.newsCenter != null) {
                    $.each(data.newsCenter, function(index, newsInfo) {
                        var date = new Date(newsInfo.pubDate);

                        if (0 == index)
                            $("#newsActivity .headline").append('<div class="date">' +
                                '<span class="day">' + date.getDate() + '</span>' +
                                '<span class="year">' + date.getFullYear() + ' / ' + (date.getMonth() + 1) + '</span>' +
                                '</div>' +
                                '<div class="else">' +
                                '<a target="_blank" href="/yy/newsDetails.html?catalog=all&address=' + newsInfo.Link + '"><h2>' + newsInfo.title + '</h2></a>' +
                                '<p>' + newsInfo.description + '</p>' +
                                '<p class="more2">' +
                                '<a href="/yy/newsCenterPage.html?id=0">阅读更多&nbsp;&gt;</a>' +
                                '</p>' +
                                '</div>');
                        else
                            $("#newsActivity .list").append('<li>' +
                                '<span>(' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ')</span>' +
                                '<a target="_blank" href="/yy/newsDetails.html?catalog=all&address=' + newsInfo.Link + '">' + newsInfo.title + '</a>' +
                                '</li>');
                    });
                }

                if (data.marketActivity != null) {
                    $.each(data.marketActivity, function(index, newsInfo) {


                        $("#marketActivity").append('<li>' +
                            '<span>(' + newsInfo.createtime + ')</span>' +
                            '<a target="_blank" href="' + newsInfo.link + '">' + newsInfo.title + '</a>' +
                            '</li>');
                    });
                }
            }
        });
    }

    init();
});