jQuery(document).ready(function(){jQuery('.arconix-faq-content').each(function(){if(jQuery(this).hasClass('faq-closed')){jQuery(this).hide();}});jQuery('.arconix-faq-title').each(function(){jQuery(this).click(function(){var toggleContent=jQuery(this).next('.arconix-faq-content');jQuery(this).toggleClass('faq-open').toggleClass('faq-closed');toggleContent.toggleClass('faq-open').toggleClass('faq-closed');toggleContent.slideToggle();});});jQuery('.arconix-faq-accordion-wrap').accordion({collapsible:true,active:false,heightStyle:"content"});});