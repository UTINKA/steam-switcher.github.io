(function($) 
{
	var AppUrl = 'https://utinka.github.io/steam-switcher.github.io/app/';
	var SelectedColorUI = 0;
	$(document).ready(function() 
	{
		GetVersion();
		//
		if(getMem('language') == '')
		{
			SetLanguage();
			setMem('language', 'english');
		}
		else if(getMem('language') != '' && getMem('language') != 'null')
		{
			SetLanguage(getMem('language'));
		}
		
		SelectedColorUI = RandomInteger(0, 5);
		UpdateUIColors();
		
		// images header
		$('.content .header .box_info .hbox .image').find('img').each(function(e)
		{
			var img = $(this);
			var imgID = img.attr('class');
			var ID = new String(imgID);
			ID = parseInt(ID.substring(4,ID.length));
			//
			if(SelectedColorUI == ID)
			{
				var CopyCSS = Array(2);
				CopyCSS[0] = img.css('margin');
				CopyCSS[1] = img.css('z-index');
				//
				img.css({
					'margin': '0',
					'z-index' : '6'
				});
				//
				$('.content .header .box_info .hbox .image').find('.img_0').css({
					'margin': CopyCSS[0],
					'z-index' : CopyCSS[1]
				});
			}
		});
		// images customize
		$('.content .box .block .customization_imgs').find('img').each(function(e)
		{
			var img = $(this);
			var imgID = img.attr('class');
			var ID = new String(imgID);
			ID = parseInt(ID.substring(4,ID.length));
			//
			if(SelectedColorUI == ID)
			{
				var CopyCSS = Array(2);
				CopyCSS[0] = img.css('margin');
				CopyCSS[1] = img.css('z-index');
				//
				img.css({
					'margin': '0',
					'z-index' : '6'
				});
				//
				$('.content .box .block .customization_imgs').find('.img_0').css({
					'margin': CopyCSS[0],
					'z-index' : CopyCSS[1]
				});
			}
		});
	});
	
	$(window).scroll(function()
	{
		var Top = $('html, body').scrollTop();
		//
		if(Top < 3)
		{
			$('.up_menu').css('box-shadow','0 -5px 10px 5px rgb(0 0 0 / 0%)');
			$('.up_menu .box .links').attr('type','a');
		}
		else if(Top > 3)
		{
			$('.up_menu').css('box-shadow','0 -5px 10px 5px rgb(0 0 0 / 30%)');
			$('.up_menu .box .links').attr('type','b');
		}
		$('.content .header .box_info .hbox .image .app_images').css('margin','-' + (25 + (Top/4)) + 'px');
	});
	
	// buttons language
	$('.content .header .box_info .hbox .image .box_language .language_en').click(function(e)
	{
		SetLanguage('english');
	});
	$('.content .header .box_info .hbox .image .box_language .language_ru').click(function(e)
	{
		SetLanguage('russian');
	});
	// Function's
	function RandomInteger(min, max) 
	{
		return Math.floor(Math.random() * (max - min) ) + min;
	}
	
	function getMem(key)
	{
		var memory = localStorage.getItem(key);
		if(memory != null && memory != 'null' && memory.length != 0) 
		{
			return memory;
		}
		else return false;
	}
	function setMem(key, value)
	{
		return localStorage.setItem(key, value);
	}
	
	function UpdateUIColors()
	{
		if(SelectedColorUI > 4) SelectedColorUI == 4;
		var 
			ColorHEX = "#818181", 
			ColorRGBA = "rgb(129 129 129 / 50%)",
			ColorHeader = "linear-gradient(180deg, rgb(129 129 129) 2%, rgb(255 255 255) 100%)",
			img_offline = 'images/app/app_offline/en/' + SelectedColorUI + '.png',
			img_online = 'images/app/app_online/en/' + SelectedColorUI + '.png'
		;
		// colors - 0(gray),1(purple),2(yellow),3(red),4(blue)
		console.log(SelectedColorUI);
		if(SelectedColorUI == 0)  
		{
			ColorHEX = "#818181";
			ColorRGBA = "rgb(129 129 129 / 50%)";
			ColorHeader = "linear-gradient(180deg, rgb(129 129 129) 2%, rgb(255 255 255) 100%)";
		}
		else if(SelectedColorUI == 1)
		{
			ColorHEX = "#ab0085";
			ColorRGBA = "rgb(170 0 133 / 50%)";
			ColorHeader = "linear-gradient(180deg, rgb(170 0 133) 2%, rgb(255 255 255) 100%)";
		}
		else if(SelectedColorUI == 2)
		{
			ColorHEX = "#f0b000";
			ColorRGBA = "rgb(238 174 0 / 50%)";
			ColorHeader = "linear-gradient(180deg, rgb(238 174 0) 2%, rgb(255 255 255) 100%)";
		}
		else if(SelectedColorUI == 3)
		{
			ColorHEX = "#ff091e";
			ColorRGBA = "rgb(255 9 30 / 50%)";
			ColorHeader = "linear-gradient(180deg, rgb(255 9 30) 2%, rgb(255 255 255) 100%)";
		}
		else if(SelectedColorUI == 4)
		{
			ColorHEX = "#0063b5";
			ColorRGBA = "rgb(0 99 181 / 50%)";
			ColorHeader = "linear-gradient(180deg, rgb(0 99 181) 2%, rgb(255 255 255) 100%)";
		}
		// Set UI Colors
		//
		// up menu
		$('.up_menu').css('background', ColorHEX);
		// header
		$('.content .header').css('background', ColorHeader);
		$('.content .header .box_info .hbox .image .box_language').css('background', ColorRGBA);
		$('.content .header .box_info .hbox .image label').css('color', ColorHEX);
		$('.content .header .box_info .hbox .image p').css('background', ColorRGBA);
		// lang
		$('.content .header .box_info .hbox .image .box_language label').css('color', '#ffffff');
		// content
		$('.content .box label').css('color', ColorHEX);
		if($('.content .box').attr('page') == '' || $('.content .box').attr('page') == undefined)
		{
			$('.content .box .block p').css('background', ColorRGBA);
			$('.content .box .block .download_and_enjoy').css({
				'background': 'unset',
				'color': ColorHEX
			});
			$('.content .box .block .h_download_link').css('border', '5px solid ' + ColorHEX);
			$('.content .box .block .h_download_link').mouseenter(function(e)
			{
				$('.content .box .block .h_download_link').css('border', '5px solid rgb(255 255 255 / 0%)');
			});
			$('.content .box .block .h_download_link').mouseleave(function(e)
			{
				$('.content .box .block .h_download_link').css('border', '5px solid ' + ColorHEX);
			});
			// Find info box img 
			if(getMem('language') == 'english')
			{
				var 
					img_offline = 'images/app/app_offline/en/' + SelectedColorUI + '.png', 
					img_online = 'images/app/app_online/en/' + SelectedColorUI + '.png'
				;
				$('.content .box .opportunities_box img').attr('src', img_online);
				$('.content .box .opportunities_box .img_two').attr('src', img_offline);
			}
			else if(getMem('language') == 'russian')
			{
				var 
					img_offline = 'images/app/app_offline/ru/' + SelectedColorUI + '.png', 
					img_online = 'images/app/app_online/ru/' + SelectedColorUI + '.png'
				;
				$('.content .box .opportunities_box img').attr('src', img_online);
				$('.content .box .opportunities_box .img_two').attr('src', img_offline);
			}
		}
		else if($('.content .box').attr('page') == 'news')
		{
			$('.content .box[page=news] .block text').css('background', ColorHEX);
			//$('.content .box[page=news] label').css('color', ColorHEX);
		}
	}
	
	function SetLanguage(lang = 'english')
	{
		setMem('language', lang);
		if(lang == 'english')
		{
			$('html').attr('lang','en');
			// up menu
			$('.up_menu .box .links .lk_home').text('Home');
			$('.up_menu .box .links .lk_news').text('News');
			$('.up_menu .box .links .lk_downloads').text('Downloads');
			// Content
			$('.content .header .box_info .hbox .image label').text('Stream Switcher what is it ?');
			$('.content .header .box_info .hbox .image p').text('Steam Switcher is designed to speed up the transition between your Steam accounts, and you can also store your accounts in it.');
			$('.content .header .box_info .hbox .image .box_language label').text('Language');
			$('.content .box .opportunities').text('opportunities');
			$('.content .box .block .find_acc_Info').text('Find out account information');
			$('.content .box .block .customize_as_you_like').text('Customize as you like');
			$('.content .box .liked').text('Liked?');
			$('.content .box .block .download_and_enjoy').text('Download and enjoy!');
			$('.content .box[page=news] label').text('news');
			// Header img
			$('.content .header .box_info .hbox .image .app_images').find('img').each(function(e)
			{
				var img = $(this);
				var imgID = img.attr('class');
				var ID = new String(imgID);
				ID = parseInt(ID.substring(4,ID.length));
				//
				var url = 'images/app/app_start/en/' + ID + '.png';
				img.attr('src',url);
			});
			// Find info box img 
			var 
				img_offline = 'images/app/app_offline/en/' + SelectedColorUI + '.png', 
				img_online = 'images/app/app_online/en/' + SelectedColorUI + '.png'
			;
			$('.content .box .opportunities_box img').attr('src', img_online);
			$('.content .box .opportunities_box .img_two').attr('src', img_offline);
			// Customization box content img
			$('.content .box .block .customization_imgs').find('img').each(function(e)
			{
				var img = $(this);
				var imgID = img.attr('class');
				var ID = new String(imgID);
				ID = parseInt(ID.substring(4,ID.length));
				//
				var url = 'images/app/app_settings/en/' + ID + '.png';
				img.attr('src',url);
			});
		}
		else if(lang == 'russian')
		{
			$('html').attr('lang','ru');
			// up menu
			$('.up_menu .box .links .lk_home').text('Главная');
			$('.up_menu .box .links .lk_news').text('Новости');
			$('.up_menu .box .links .lk_downloads').text('Загрузки');
			// Content
			$('.content .header .box_info .hbox .image label').text('Stream Switcher что это ?');
			$('.content .header .box_info .hbox .image p').text('Steam Switcher предназначен для ускорения перехода между своими аккаунтами Steam, а так же в нём можно хранить свои аккаунты.');
			$('.content .header .box_info .hbox .image .box_language label').text('Язык');
			$('.content .box .opportunities').text('возможности');
			$('.content .box .block .find_acc_Info').text('Узнавай информацию о аккаунте');
			$('.content .box .block .customize_as_you_like').text('Настраивай как тебе понравится');
			$('.content .box .liked').text('Понравилось?');
			$('.content .box .block .download_and_enjoy').text('Скачивай и наслаждайся!');
			$('.content .box[page=news] label').text('новости');
			// Header img
			$('.content .header .box_info .hbox .image .app_images').find('img').each(function(e)
			{
				var img = $(this);
				var imgID = img.attr('class');
				var ID = new String(imgID);
				ID = parseInt(ID.substring(4,ID.length));
				//
				var url = 'images/app/app_start/ru/' + ID + '.png';
				img.attr('src',url);
			});
			// Find info box img 
			var 
				img_offline = 'images/app/app_offline/ru/' + SelectedColorUI + '.png', 
				img_online = 'images/app/app_online/ru/' + SelectedColorUI + '.png'
			;
			$('.content .box .opportunities_box img').attr('src', img_online);
			$('.content .box .opportunities_box .img_two').attr('src', img_offline);
			// Customization box content img
			$('.content .box .block .customization_imgs').find('img').each(function(e)
			{
				var img = $(this);
				var imgID = img.attr('class');
				var ID = new String(imgID);
				ID = parseInt(ID.substring(4,ID.length));
				//
				var url = 'images/app/app_settings/ru/' + ID + '.png';
				img.attr('src',url);
			});
		}
		GetNews();
	}
	
	function GetNews()
	{
		var url = AppUrl + 'notifications_' + getMem('language') + '.txt';
		$.ajax(
		{
			url: url,
			type: 'GET',
			cache: false,
			beforeSend: function()
			{
				$('.content .box[page=news]').find('div').each(function(e)
				{
					$(this).remove();
				});
				$('.content .box[page=news]').find('br').each(function(e)
				{
					$(this).remove();
				});
			},
			success: function(data) 
			{
				data = data.split('\n\n');
				if($('.content .box').attr('page') == 'news')
				{
					if(data != undefined)
					{
						var id = 0;
						while(id != data.length)
						{
							var TwoData = data[id+1].split('\n');
							if(TwoData[2] == undefined)
							{
								TwoData[2] = '';
							}
							$('.content .box[page=news]').append('\
							<div class="block">\
								<text>\
									<p class="n_one">"' + data[id] + '"</p>\
									<div class="n_line"></div>\
									<p class="n_two">'+ TwoData[0] + '<br/>'+ TwoData[1] +'<br/>'+ TwoData[2] +'</p>\
								</text>\
							</div><br/>');
							id = id + 2;
						}
						
					}
				}
				UpdateUIColors();
				console.log(data);
			}
		});
	}
	
	function GetVersion()
	{
		var url = AppUrl + 'ver.txt';
		$.ajax(
		{
			url: url,
			type: 'GET',
			cache: false,
			beforeSend: function()
			{

			},
			success: function(data) 
			{
				console.log(data)
			}
		});
	}
	
	
})(jQuery);
