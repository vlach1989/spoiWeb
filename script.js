$(document).ready(function() {
    $(window).on("resize", hideMobileMenu);
    $('.flags').on("click", selectLanguage);
    $('#menu_icon_button').on("click", showMobileMenu);
    $('#menu ul li, .menu_mobile_button').on("click", goTo);
    $('.external_link').on("click", externalLink);
    $(window).on("load resize", function() {
        equalheight('.box');
    });
});

function externalLink(){
    var link = $(this).attr("data-target");
    window.open(link, '_blank');
}

function goTo() {
    var target = $(this).attr("data-target");
    var link = $(target);
    var margin = 100;
    var width = $(window).width();
    if (width > 749 && width < 1301){
        margin = 130;
    }

    $('html, body').animate({
        scrollTop: (link.offset().top) - margin
    }, 500);
    $('#menu_mobile').css("display", "none");
}

function selectLanguage(){
    var lng = $(this).attr('id');

    $.getJSON("lng/"+lng+".json", function(x){
        $('#menu ul li').each(function(i){
            $(this).text(x.menu[i]);
            });
        $('#menu_mobile button').each(function(i){
            $(this).text(x.menu[i]);
            });
        $('#headline').text(x.banner.headline);
        $('#headline_text').text(x.banner.headline_text);
        $('#visualization').text(x.section_visualization.visualization);
        $('#headlines_button_item').text(x.section_visualization.headlines_button_item);

        $('#about').text(x.section_about.about);
        $('#about_texts p').each(function(i){
            $(this).text(x.section_about.about_texts[i]);
            });

        $('#contribution').text(x.section_contribution.contribution);
        $('#contribution_boxes h4').each(function(i){
            $(this).text(x.section_contribution.contribution_boxes_h[i]);
            });
        $('#contribution_boxes p').each(function(i){
            $(this).text(x.section_contribution.contribution_boxes_p[i]);
            });

        $('#links').text(x.section_links.links);
        $('#links_boxes h4').each(function(i){
            $(this).text(x.section_links.links_boxes_h[i]);
            });
        $('#links_boxes p.to_fill').each(function(i){
            $(this).text(x.section_links.links_boxes_p[i]);
            });
        $('#contact').text(x.section_contact.contact);

    });
    $('.flags').css("opacity", 0.3);
    $('#'+lng).css("opacity",1);
}

function showMobileMenu() {
    var elm = $('#menu_mobile');
    if (elm.css("display") == "block") {
        elm.css("display", "none");
    } else {
        elm.css("display", "block");
    }
}

function hideMobileMenu() {
    $("#menu_mobile").css("display","none");
}

// set the equal height of desired elements
function equalheight (container){
    var tallest = 0;
    if ($(window).width() > 748){
        $(container).each(function() {
            $(this).css("height","auto");
            var height = $(this).height();
            if (height > tallest){
                tallest = height;
            }
        });
        $(container).each(function() {
            $(this).css("height",tallest+"px");
        });
    }
    else {
        $(container).each(function() {
            $(this).css("height","auto");
        });
    }
}