function language(lang) {
    $.getJSON("text-" + lang + ".json", function (aronela) {
        $("#header_title").text(aronela.header.title);
        $("#header_button").text(aronela.header.button);
        $("#header_sections1").text(aronela.header.sections[0].title);
        $("#header_sections2").text(aronela.header.sections[1].title);
        $("#header_sections3").text(aronela.header.sections[2].title);
        $("#header_sections4").text(aronela.header.sections[3].title);
        $("#what_we_do_title").text(aronela.what_we_do.title);
        $("#what_we_do_content").text(aronela.what_we_do.content);
        $("#what_we_do_sections_title1").text(aronela.what_we_do.sections[0].title);
        $("#what_we_do_sections_content1").text(aronela.what_we_do.sections[0].content);
        $("#what_we_do_sections_button1").text(aronela.what_we_do.sections[0].button);
        $("#what_we_do_sections_title2").text(aronela.what_we_do.sections[1].title);
        $("#what_we_do_sections_content2").text(aronela.what_we_do.sections[1].content);
        $("#what_we_do_sections_button2").text(aronela.what_we_do.sections[1].button);
        $("#what_we_do_sections_title3").text(aronela.what_we_do.sections[2].title);
        $("#what_we_do_sections_content3").text(aronela.what_we_do.sections[2].content);
        $("#what_we_do_sections_button3").text(aronela.what_we_do.sections[2].button);
    })
}

function language_switcher() {
    document.getElementById("english").onclick = function () {
        language("en");
    };
    document.getElementById("romana").onclick = function () {
        language("ro");
    }
}

language_switcher();

language('en');


