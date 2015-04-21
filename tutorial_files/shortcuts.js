$(document).ready(function(){var shortcuts_enabled=true;$("input,textarea,select").live("focus",function(){shortcuts_enabled=false});$("input,textarea,select").live("blur",function(){shortcuts_enabled=true});if($(".shortcuts_items").size()){var shortcuts_items=$(".shortcuts_items .shortcuts_item");$(window).scroll(function(){var active_start_position=window.pageYOffset+0;var active_end_position=window.pageYOffset+50;shortcuts_items.each(function(index,item){var shortcuts_item=$(item);var shortcuts_item_position=shortcuts_item.offset().top+20;if(active_start_position<shortcuts_item_position&&shortcuts_item_position<active_end_position){if(shortcuts_item.hasClass("focus")){}else{$(".shortcuts_items .shortcuts_item.focus").removeClass("focus");shortcuts_item.addClass("focus")}}})})}$("input, textarea").live("keydown",function(e){if((e.altKey||e.ctrlKey||e.metaKey)&&e.keyCode==13){e.preventDefault();var form=$(this).parents("form");$(document).trigger("shortcuts.submit_form",form)}else{if(shortcuts_enabled){shortcuts_enabled=false}}});$("body").live("keyup",function(e){var not_meta_key=!e.altKey&&!e.ctrlKey&&!e.metaKey;if(shortcuts_enabled){if((e.altKey||e.ctrlKey||e.metaKey)&&e.which==37){e.preventDefault();$(document).trigger("shortcuts.to_prev_page")}if((e.altKey||e.ctrlKey||e.metaKey)&&e.which==39){e.preventDefault();$(document).trigger("shortcuts.to_next_page")}}});$("body").keypress(function(e){var not_meta_key=!e.altKey&&!e.ctrlKey&&!e.metaKey;if(shortcuts_enabled){if((e.which==47||e.which==46)&&not_meta_key){e.preventDefault();$(document).trigger("shortcuts.focus_to_search")}if((e.which==104||e.which==1088)&&not_meta_key){e.preventDefault();$(document).trigger("shortcuts.to_first_post")}if((e.which==108||e.which==1076)&&not_meta_key){e.preventDefault();$(document).trigger("shortcuts.to_last_post")}if((e.which==106||e.which==1086)&&not_meta_key){e.preventDefault();$(document).trigger("shortcuts.to_next_post")}if((e.which==107||e.which==1083)&&not_meta_key){e.preventDefault();$(document).trigger("shortcuts.to_prev_post")}if((e.which==111||e.which==1097)&&not_meta_key){e.preventDefault();$(document).trigger("shortcuts.open_post")}if((e.which==99||e.which==1089)&&not_meta_key){e.preventDefault();$(document).trigger("shortcuts.to_comment_form")}if((e.which==116||e.which==1077)&&not_meta_key){e.preventDefault();$(document).trigger("shortcuts.add_to_tracker")}if((e.which==109||e.which==1100)&&not_meta_key){e.preventDefault();$(document).trigger("shortcuts.subscribe_comments")}if((e.which==114||e.which==1082)&&not_meta_key){e.preventDefault();$(document).trigger("shortcuts.refresh_comments")}if((e.which==102||e.which==1072)&&not_meta_key){e.preventDefault();$(document).trigger("shortcuts.to_next_unreaded_comment")}if((e.which==106||e.which==1086)&&not_meta_key){e.preventDefault();$(document).trigger("shortcuts.to_next_new_comment")}if((e.which==107||e.which==1083)&&not_meta_key){e.preventDefault();$(document).trigger("shortcuts.to_prev_new_comment")}}});$(document).bind("shortcuts.escape",function(event,form){$("#navbar_overlay").trigger("click")});$(document).bind("shortcuts.subscribe_comments",function(event,form){$("#subscribe_comments").trigger("click")});$(document).bind("shortcuts.add_to_tracker",function(event,form){$("#tracker_comments").trigger("click")});$(document).bind("shortcuts.focus_to_search",function(event,form){$(".nav_panel .tab_menu").click();$('.global_search_form input[name="q"]').focus()});$(document).bind("shortcuts.submit_form",function(event,form){$('input[type="submit"],input.submit,input.edit',form).each(function(index,button){if($(button).hasClass("hidden")){}else{button.click()}})});$(document).bind("shortcuts.to_next_page",function(){var url=$("#next_page").attr("href");if(typeof url!=="undefined"){document.location.href=url}});$(document).bind("shortcuts.to_prev_page",function(){var url=$("#previous_page").attr("href");if(typeof url!=="undefined"){document.location.href=url}});$(document).bind("shortcuts.to_first_post",function(){var shortcuts_items=$(".shortcuts_items");if(shortcuts_items.size()){if($(".shortcuts_item",shortcuts_items).first().hasClass("focus")){$(document).trigger("shortcuts.to_prev_page")}else{$(".shortcuts_item.focus",shortcuts_items).removeClass("focus");$(".shortcuts_item",shortcuts_items).first().addClass("focus")}$.scrollTo($(".shortcuts_item.focus",shortcuts_items),200,{axis:"y"})}});$(document).bind("shortcuts.to_last_post",function(){var shortcuts_items=$(".shortcuts_items");if(shortcuts_items.size()){if($(".shortcuts_item",shortcuts_items).last().hasClass("focus")){$(document).trigger("shortcuts.to_next_page")}else{$(".shortcuts_item.focus",shortcuts_items).removeClass("focus");$(".shortcuts_item",shortcuts_items).last().addClass("focus")}$.scrollTo($(".shortcuts_item.focus",shortcuts_items),200,{axis:"y"})}});$(document).bind("shortcuts.to_next_post",function(){var shortcuts_items=$(".shortcuts_items");if(shortcuts_items.size()){if($(".shortcuts_item.focus",shortcuts_items).size()==0){$(".shortcuts_item",shortcuts_items).first().addClass("focus")}else{var shortcuts_item=$(".shortcuts_item.focus",shortcuts_items);var next_shortcuts_item=shortcuts_item.next();if(next_shortcuts_item.size()==0){$(document).trigger("shortcuts.to_next_page")}else{shortcuts_item.removeClass("focus");next_shortcuts_item.addClass("focus")}}$.scrollTo($(".shortcuts_item.focus",shortcuts_items),200,{axis:"y"})}});$(document).bind("shortcuts.to_prev_post",function(){var shortcuts_items=$(".shortcuts_items");if(shortcuts_items.size()){if($(".shortcuts_item.focus",shortcuts_items).size()==0){$(".shortcuts_item",shortcuts_items).last().addClass("focus")}else{var shortcuts_item=$(".shortcuts_item.focus",shortcuts_items);var prev_shortcuts_item=shortcuts_item.prev();if(prev_shortcuts_item.size()==0){$(document).trigger("shortcuts.to_prev_page")}else{shortcuts_item.removeClass("focus");prev_shortcuts_item.addClass("focus")}}$.scrollTo($(".shortcuts_item.focus",shortcuts_items),200,{axis:"y"})}});$(document).bind("shortcuts.open_post",function(){if($(".shortcuts_items").size()){var url=$(".shortcuts_items .shortcuts_item.focus .post_title").attr("href");if(url)document.location.href=url}});$(document).bind("shortcuts.to_comment_form",function(){if($("#comments_form_placeholder").size()){$.scrollTo($("#comments_form_placeholder"),200,{axis:"y"});$("#comment_text").focus()}});$(document).bind("shortcuts.refresh_comments",function(){if(g_show_xpanel){$("#xpanel .refresh").trigger("click")}});$(document).bind("shortcuts.to_next_unreaded_comment",function(){if(g_show_xpanel){$("#xpanel .new").trigger("click")}});$(document).bind("shortcuts.to_next_new_comment",function(){if(g_show_xpanel){$("#xpanel .next_new").trigger("click")}});$(document).bind("shortcuts.to_prev_new_comment",function(){if(g_show_xpanel){$("#xpanel .prev_new").trigger("click")}})});