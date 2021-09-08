<!DOCTYPE html>
<html lang="ru" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Подбор</title>
    <link rel="shortcut icon" href="images/ico/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
</head>

<body>

    <!-- header -->
    <header class="header">
        <img class="" src="images/omega.png" alt="">

        <!-- tabs__nav -->
        <div class="tabs__nav">
            <button type="button" data-tab="#tab_1" class="tabs__btn bg__main active" title="Главная">
                <h2></h2>
            </button>
            <button type="button" data-tab="#tab_2" class="tabs__btn bg__pkw" title="Легковая иномарка">
                <h2></h2>
            </button>
            <button type="button" data-tab="#tab_3" class="tabs__btn bg__lkw" title="Грузовая иномарка">
                <h2></h2>
            </button>
            <button type="button" data-tab="#tab_4" class="tabs__btn bg__sng" title="СНГ">
                <h2></h2>
            </button>
            <button type="button" data-tab="#tab_5" class="tabs__btn bg__multi" title="">
                <h2></h2>
            </button>
        </div>

        <!-- form -->
        <form class="search" action="https://www.google.co.uk/search?q=" method="get" target="_blank">
            <input class="search__input" type="search" name="q" value="" placeholder="GoogleParts">
            <input class="search__btn" type="submit" value="">
        </form>
    </header> <!-- /header -->

    <!-- main -->
    <div id="tab_1" class="main active ">
        <div class="main__tabs">
            <button type="button" data-tab="#main__tab_1" class="tabs__btn-main active">
                <h2>omega</h2>
            </button>
            <button type="button" data-tab="#main__tab_2" class="tabs__btn-main">
                <h2>Конкуренты</h2>
            </button>
        </div>

        <div id="main__tab_1" class="item__main active">
            <div class="element__wrapper">
                <a href="https://my.omega.page/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/omega.png" alt="">
                        <div class="element__title">
                            <h2>my.omega.page</h2>
                            <p>Сайт my.omega.page</p>
                        </div>
                    </div>
                </a>

                <a href="https://omega-auto.davintoo.com/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/omega_item.png" alt="">
                        <div class="element__title">
                            <h2> Collaborator</h2>
                            <p>Корпоративный учебный портал компании "ОМЕГА"</p>
                        </div>
                    </div>
                </a>

                <a href="http://qlikview.omega-auto.biz/qlikview/index.htm" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/qlikview.png" alt="">
                        <div class="element__title">
                            <h2> QlikView</h2>
                            <p>Отчеты, анализ отгрузок, KPI и т.д.</p>
                        </div>
                    </div>
                </a>

                <div class="element-timer">
                    <div class="promotion__timer">
                        <div class="timer">
                            <div class="timer__block">
                                <span id="hours">20</span>
                            </div>
                            <div class="timer__block">
                                <span id="minutes">56</span>
                            </div>
                            <div class="timer__block">
                                <span id="seconds">20</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://translate.google.com/?hl=ru&sl=en&tl=ru&op=translate" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/translate.png" alt="">
                        <div class="element__title">
                            <h2> Google Переводчик</h2>
                            <p>Переводчик</p>
                        </div>
                    </div>
                </a>

                <a href="https://usr.minjust.gov.ua/content/free-search" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/herb.png" alt="">
                        <div class="element__title">
                            <h2> МінЮст України</h2>
                            <p>Реестр ООО, ФЛП</p>
                        </div>
                    </div>
                </a>

                <a href="https://cabinet.tax.gov.ua/registers/pdv" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/herb2.svg" alt="">
                        <div class="element__title">
                            <h2> МинЮст Украины</h2>
                            <p>Электронный кабинет ООО, ФЛП</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->
        </div> <!-- /item__main -->

        <div id="main__tab_2" class="item__main">
            <div class="element__wrapper">
                <a href="https://exist.ua/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/exist.png" alt="">
                        <div class="element__title">
                            <h2>Exist.ua</h2>
                            <p>Exist.ua</p>
                        </div>
                    </div>
                </a>

                <a href="https://plentycar.ru/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/plentycar.png" alt="">
                        <div class="element__title">
                            <h2>Plentycar.ru</h2>
                            <p>Plentycar.ru</p>
                        </div>
                    </div>
                </a>

                <a href="https://911auto.com.ua/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/911.png" alt="">
                        <div class="element__title">
                            <h2>911auto</h2>
                            <p>911auto</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://strans-shop.com.ua/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/strans.png" alt="">
                        <div class="element__title">
                            <h2>STrans</h2>
                            <p>STrans</p>
                        </div>
                    </div>
                </a>

                <a href="https://tir-shop.com.ua/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/tirshoplogotip.png" alt="">
                        <div class="element__title">
                            <h2>TIR-SHOP</h2>
                            <p>TIR-SHOP</p>
                        </div>
                    </div>
                </a>

                <a href="http://concord-shop.com/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/concord.png" alt="">
                        <div class="element__title">
                            <h2>Concord</h2>
                            <p>Concord</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://www.fontenax.fr/CATALOGUE%20PR%20FONTENAX%202013.compressed%20(1).pdf" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/" alt="">
                        <div class="element__title">
                            <h2>Fontenax</h2>
                            <p>Fontenax</p>
                        </div>
                    </div>
                </a>

                <a href="http://samko.fr/catalogues/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/" alt="">
                        <div class="element__title">
                            <h2>Samko</h2>
                            <p>Samko</p>
                        </div>
                    </div>
                </a>

                <a href="https://onyarbi.com/ru/inicio" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/" alt="">
                        <div class="element__title">
                            <h2>Onyarbi</h2>
                            <p>Onyarbi</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.paiindustries.com/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/" alt="">
                        <div class="element__title">
                            <h2>PAI</h2>
                            <p>PAI</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

        </div> <!-- /item__main -->
    </div> <!-- /main -->


    <!-- pkw -->
    <div id="tab_2" class="main">
        <div class="main__tabs">
            <button type="button" data-tab="#pkw__tab_1" class="tabs__btn-pkw active">
                <h2>Каталоги</h2>
            </button>
            <button type="button" data-tab="#pkw__tab_5" class="tabs__btn-pkw">
                <h2>EPC</h2>
            </button>
            <button type="button" data-tab="#pkw__tab_3" class="tabs__btn-pkw">
                <h2>Подвеска</h2>
            </button>
            <button type="button" data-tab="#pkw__tab_2" class="tabs__btn-pkw">
                <h2>Тормоза</h2>
            </button>
            </button>
            <button type="button" data-tab="#pkw__tab_4" class="tabs__btn-pkw">
                <h2>Выпуск, тросы</h2>
            </button>
        </div>

        <div id="pkw__tab_1" class="item__pkw active">
            <div class="element__wrapper">
                <a href="https://ataka.part710.online/#/client/MTgwOQBjAG15c3Fs" target="_blank">
                    <div class="element">
                        <img class="element__logo circle" src="images/zenit.png" alt="">
                        <div class="element__title">
                            <h2> Zenit</h2>
                            <p>Оригинальные каталоги по VIN</p>
                        </div>
                    </div>
                </a>

                <a href="https://maxi.ecat.ua/catalogue/vin_search/XMCXNZ34A7F065360" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/elit.png" alt="">
                        <div class="element__title">
                            <h2> Elit.ua</h2>
                            <p>Подбор по VIN</p>
                        </div>
                    </div>
                </a>

                <a href="https://9012516509.laximo.online/index.php?task=catalogs" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/laximo.png" alt="">
                        <div class="element__title">
                            <h2>Laximo online</h2>
                            <p>Подбор по VIN</p>
                        </div>
                    </div>
                </a>

                <a href="https://adeo.pro/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/adeo.png" alt="">
                        <div class="element__title">
                            <h2>Adeo</h2>
                            <p>Подбор по VIN</p>
                        </div>
                    </div>
                </a>

                <a href="http://www.catcar.info/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/catcar.svg" alt="">
                        <div class="element__title">
                            <h2>CatCar</h2>
                            <p>Подбор по VIN</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.ilcats.ru/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="" alt="">
                        <div class="element__title">
                            <h2>iLCats</h2>
                            <p>Подбор по VIN</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://www.elcats.ru/" target="_blank">
                    <div class="element">
                        <img class="element__logo circle" src="images/elcats.png" alt="">
                        <div class="element__title">
                            <h2> Elcats.ru</h2>
                            <p>Электронные каталоги</p>
                        </div>
                    </div>
                </a>


                <a href="https://carinfo.kiev.ua/" target="_blank">
                    <div class="element">
                        <div class="element__logo">
                            <img src="" alt="">
                        </div>
                        <div class="element__title">
                            <h2> CarInfo</h2>
                            <p>Расшифровка VIN</p>
                        </div>
                    </div>
                </a>

                <a href="https://ua.carplates.app/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/carplates.png" alt="">
                        <div class="element__title">
                            <h2> Автономера</h2>
                            <p>Инфо о авто по гос.номеру</p>
                        </div>
                    </div>
                </a>

                <a href="https://чинамобил.рф/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/china.png" alt="">
                        <div class="element__title">
                            <h2>Чинамобил РФ</h2>
                            <p>Подбор на китайские авто</p>
                        </div>
                    </div>
                </a>

                <a href="https://kitaec.ua/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/kitaec.svg" alt="">
                        <div class="element__title">
                            <h2>Китаец</h2>
                            <p>Подбор на китайские авто</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.epcdata.ru/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="" alt="">
                        <div class="element__title">
                            <h2>EPCData</h2>
                            <p>Японцы, корейцы</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->
        </div> <!-- /pkw -->

        <div id="pkw__tab_2" class="item__pkw">
            <div class="element__wrapper">
                <a href="https://web.tecalliance.net/remsa/ru/home" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/remsa.png" alt="">
                        <div class="element__title">
                            <h2>Remsa</h2>
                            <p>Тормозные колодки</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.trwaftermarket.com/ru/commercial-vehicles/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/trw.png" alt="">
                        <div class="element__title">
                            <h2>TRW</h2>
                            <p>Колодки, суппорта</p>
                        </div>
                    </div>
                </a>

                <a href="http://www.e-sangsin.com/eng/main" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/hi-q.png" alt="">
                        <div class="element__title">
                            <h2>SangSin</h2>
                            <p>Колодки</p>
                        </div>
                    </div>
                </a>

                <a href="https://web.tecalliance.net/ate/ru/home?language=en&country=de&articleCountry=de"
                    target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/ate.png" alt="">
                        <div class="element__title">
                            <h2>ATE</h2>
                            <p>Тормозные колодки, суппорта</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://www.lpr.it/catalogo.php?&lang=en" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/lpr.png" alt="">
                        <div class="element__title">
                            <h2>LPR</h2>
                            <p>Цилиндры, колодки</p>
                        </div>
                    </div>
                </a>

                <a href="https://catalogsea.tecalliance.cn/catalog/mk-kashiyama/en" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/kashiyama.png" alt="">
                        <div class="element__title">
                            <h2>MK Kashiyama </h2>
                            <p>Колодки</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://web.tecalliance.net/ert/ru/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/ert.png" alt="">
                        <div class="element__title">
                            <h2>ERT</h2>
                            <p>Р/К Тормозных систем</p>
                        </div>
                    </div>
                </a>

                <a href="https://web.tecalliance.net/seinsa/ru/home/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/autofren.png" alt="">
                        <div class="element__title">
                            <h2>Autofren</h2>
                            <p>Р/К Тормозных систем</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.frenkit.es/ru/catalogo/catalogo-online" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/frenkit.png" alt="">
                        <div class="element__title">
                            <h2>Frenkit</h2>
                            <p>Р/К Тормозных систем</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->
        </div> <!-- /pkw -->

        <div id="pkw__tab_3" class="item__pkw">
            <div class="element__wrapper">
                <a href="https://webcat.zf.com/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/zf.png" alt="">
                        <div class="element__title">
                            <h2>ZF WebCat</h2>
                            <p>Sachs, TRW, Lemforder</p>
                        </div>
                    </div>
                </a>

                <a href="https://web.tecalliance.net/tae/ru/home" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/monroe.png" alt="">
                        <div class="element__title">
                            <h2>MONROE</h2>
                            <p>Амортизаторы</p>
                        </div>
                    </div>
                </a>

                <a href="https://kyb-europe.com/rus/katalog/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/kyb.png" alt="">
                        <div class="element__title">
                            <h2>KYB</h2>
                            <p>Амортизаторы</p>
                        </div>
                    </div>
                </a>

                <a href="http://web1.carparts-cat.com/default.aspx?11=18&14=16&1115=1&1281=17=0&10=FC30D7770D5B4C01846A4DDA33653021018016&12=100"
                    target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/bilstein.png" alt="">
                        <div class="element__title">
                            <h2>BILSTEIN</h2>
                            <p>Амортизаторы</p>
                        </div>
                    </div>
                </a>

                <a href="https://partsfinder.bilsteingroup.com/ru/truck/index" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/febi.png" alt="">
                        <div class="element__title">
                            <h2>FEBI</h2>
                            <p>Детали ходовой</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.meyle.com/ru/servisnyi-centr/onlain-katalog/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/meyle.png" alt="">
                        <div class="element__title">
                            <h2>Meyle</h2>
                            <p>Детали ходовой</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://febest.de/ru/catalog" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/febest.png" alt="">
                        <div class="element__title">
                            <h2>Febest</h2>
                            <p>Febest the best, of the best</p>
                        </div>
                    </div>
                </a>

                <a href="https://aftermarket.ctr.co.kr/Main" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/ctr.png" alt="">
                        <div class="element__title">
                            <h2>CTR</h2>
                            <p>Детали ходовой</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.drivparts.com/en-eu/catalogue.html" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/federal.png" alt="">
                        <div class="element__title">
                            <h2>Federal-Mogul</h2>
                            <p>Moog</p>
                        </div>
                    </div>
                </a>

                <a href="https://catalogue.sidem.be/index.asp" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/sidem.png" alt="">
                        <div class="element__title">
                            <h2>Sidem</h2>
                            <p>Детали ходовой</p>
                        </div>
                    </div>
                </a>

                <a href="https://catalogue.spidanchassisparts.com/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/spidan.png" alt="">
                        <div class="element__title">
                            <h2>Spidan</h2>
                            <p>Детали ходовой</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.gmb.jp/catalog/downloads/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/gmb.png" alt="">
                        <div class="element__title">
                            <h2>GMB</h2>
                            <p>Детали ходовой</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://webcat.schaeffler.com/web/schaeffler/ru_RU/index.xhtml?reset=1" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/luk.png" alt="">
                        <div class="element__title">
                            <h2>Luk</h2>
                            <p>Сцепление</p>
                        </div>
                    </div>
                </a>

                <a href="https://ru.valeoservice.com/ru" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/valeo.png" alt="">
                        <div class="element__title">
                            <h2>Valeo</h2>
                            <p>Сцепление</p>
                        </div>
                    </div>
                </a>

                <a href="http://www.phcvaleo-webcat.com/eng/product/search-vehicle?pc_depth=1&pc_depth1_id=&pc_depth2_id=&pc_depth3_id="
                    target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/phcvaleo.png" alt="">
                        <div class="element__title">
                            <h2>phcValeo</h2>
                            <p>Сцепление</p>
                        </div>
                    </div>
                </a>

                <a href="https://web.tecalliance.net/aisin-europe/ru/home" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/aisin.png" alt="">
                        <div class="element__title">
                            <h2>Aisin</h2>
                            <p>Сцепление</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.exedy-aftermarket.com/english/parts/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/exedy.png" alt="">
                        <div class="element__title">
                            <h2>Exedy</h2>
                            <p>Сцепление</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->
        </div> <!-- /pkw -->

        <div id="pkw__tab_4" class="item__pkw">
            <div class="element__wrapper">
                <a href="https://www.polmostrow.pl/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/polmostrow.png" alt="">
                        <div class="element__title">
                            <h2>Polmostrow</h2>
                            <p>Выпускные системы</p>
                        </div>
                    </div>
                </a>

                <a href="https://bosal.in.ua/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/bosal.png" alt="">
                        <div class="element__title">
                            <h2>Bosal</h2>
                            <p>Выпускные системы</p>
                        </div>
                    </div>
                </a>

                <a href="http://www.fa1.pl/ru/%d0%ba%d0%b0%d1%82%d0%b0%d0%bb%d0%be%d0%b3/#/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/fa1.png" alt="">
                        <div class="element__title">
                            <h2>Fischer Automotive</h2>
                            <p>Монтажные элементы выпуска</p>
                        </div>
                    </div>
                </a>
            </div>

            <div class="element__wrapper">
                <a href="https://www.adriauto.it/products/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/adriauto.png" alt="">
                        <div class="element__title">
                            <h2>Adriauto</h2>
                            <p>Тросы</p>
                        </div>
                    </div>
                </a>

                <a href="http://www.cofle.com/ru/%d0%bb%d0%b8%d0%b4%d0%b5%d1%80-%d0%bd%d0%b0-%d1%80%d1%8b%d0%bd%d0%ba%d0%b5-%d0%b7%d0%b0%d0%bf%d1%87%d0%b0%d1%81%d1%82%d0%b5%d0%b9/"
                    target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/cofle.png" alt="">
                        <div class="element__title">
                            <h2>Cofle</h2>
                            <p>Тросы</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper-->
        </div> <!-- /item__pkw-->

        <div id="pkw__tab_5" class="item__pkw">
            <div class="element__wrapper">
                <a href="https://carinfo.kiev.ua/" target="_blank">
                    <div class="element">
                        <div class="element__logo">
                            <img src="" alt="">
                        </div>
                        <div class="element__title">
                            <h2> CarInfo</h2>
                            <p>Расшифровка VIN</p>
                        </div>
                    </div>
                </a>

                <a href="https://vinformer.su/" target="_blank">
                    <div class="element">
                        <div class="element__logo">
                            <img class="element__logo" src="images/pkw/vinformer.png" alt="">
                        </div>
                        <div class="element__title">
                            <h2>VINFormer</h2>
                            <p>Расшифровка VIN</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.epcdata.ru/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="" alt="">
                        <div class="element__title">
                            <h2>EPCData</h2>
                            <p>Японцы, корейцы</p>
                        </div>
                    </div>
                </a>

                <a href="http://epc.avtozaz.com/?action=cat_zaz_model" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/sng/zaz.png" alt="">
                        <div class="element__title">
                            <h2>EPC ZAZ</h2>
                            <p>Раскладывает ЗАЗ по VIN</p>
                        </div>
                    </div>
                </a>

                <a href="http://psa-club.ru/rasshifrovka-vin/rasshifrovka-vin.html" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/pkw/psa.png" alt="">
                        <div class="element__title">
                            <h2>PSA Group</h2>
                            <p>Раскладывает PSA по VIN</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper-->

            <div class="element__wrapper">
                <a href="https://www.acurapartswarehouse.com/" target="_blank">
                    <div class="element">
                        <div class="element__logo">
                            <img class="element__logo" src="images/pkw/acura.png" alt="">
                        </div>
                        <div class="element__title">
                            <h2>AcuraPartsWarehouse.com</h2>
                            <p>Acura</p>
                        </div>
                    </div>
                </a>

                <a href="https://etlib.ru/tehdata/data?id=14157" target="_blank">
                    <div class="element">
                        <div class="element__logo">
                            <img class="element__logo" src="images/pkw/etlib.png" alt="">
                        </div>
                        <div class="element__title">
                            <h2>Etlib.ru</h2>
                            <p>Тех. данные, регламент обслуживания</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper-->
        </div> <!-- /item__pkw-->
    </div> <!-- /pkw -->


    <!-- lkw -->
    <div id="tab_3" class="main">
        <div class="main__tabs">
            <button type="button" data-tab="#lkw__tab_1" class="tabs__btn-lkw active">
                <h2>Каталоги</h2>
            </button>
            <button type="button" data-tab="#lkw__tab_2" class="tabs__btn-lkw">
                <h2>Подвеска, трансмиссия</h2>
            </button>
            <button type="button" data-tab="#lkw__tab_7" class="tabs__btn-lkw">
                <h2>Пневматика</h2>
            </button>
            <button type="button" data-tab="#lkw__tab_3" class="tabs__btn-lkw">
                <h2>Тормоза</h2>
            </button>
            <button type="button" data-tab="#lkw__tab_4" class="tabs__btn-lkw">
                <h2>Выпуск, PDF</h2>
            </button>
            <button type="button" data-tab="#lkw__tab_5" class="tabs__btn-lkw">
                <h2>Накладки</h2>
            </button>
            <button type="button" data-tab="#lkw__tab_6" class="tabs__btn-lkw">
                <h2>Фильтры без VIN</h2>
            </button>
        </div>

        <div id="lkw__tab_1" class="item__lkw active">
            <div class="element__wrapper">
                <a href="https://ataka.part710.online/#/client/MTgwOQBjAG15c3Fs" target="_blank">
                    <div class="element">
                        <img class="element__logo circle" src="images/zenit.png" alt="">
                        <div class="element__title">
                            <h2> Zenit</h2>
                            <p>Оригинальные каталоги по VIN</p>
                        </div>
                    </div>
                </a>

                <a href="https://maxi.ecat.ua/catalogue/vin_search/XMCXNZ34A7F065360" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/elit.png" alt="">
                        <div class="element__title">
                            <h2> Elit.ua</h2>
                            <p>Подбор по VIN</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.elcats.ru/" target="_blank">
                    <div class="element">
                        <img class="element__logo circle" src="images/elcats.png" alt="">
                        <div class="element__title">
                            <h2> Elcats.ru</h2>
                            <p>Электронные каталоги</p>
                        </div>
                    </div>
                </a>

                <a href="http://www.at-part.ru/catalogs.html" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/at-part.png" alt="">
                        <div class="element__title">
                            <h2>AT-Part</h2>
                            <p>Поиск по VIN Renault, DAF</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.etsp.ru/catalogue/original/?vin=WMA03SZZ49P017718" target="_blank">
                    <div class="element">
                        <img class="element__logo circle" src="images/lkw/etsp.jpg" alt="">
                        <div class="element__title">
                            <h2> ГК «ОМЕГА»</h2>
                            <p>Каталоги запчастей, поиск по VIN</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://portal.saf-axles.com/shop/app?__bk_&__windowid=PHX76959678&__rid=CHA1594117359412#2VFB2144C915D47DFAD66CC73CEC1F7E17E1D29351DB45EA618EEFB7B1BB136D42B8044FCE28E6056D"
                    target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/saf.png" alt="">
                        <div class="element__title">
                            <h2>SAF</h2>
                            <p>Раскладывает ось по номеру</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.bpw.de/mybpw/login.php?l=ru" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/bpw.png" alt="">
                        <div class="element__title">
                            <h2>BPW</h2>
                            <p>Раскладывает ось по номеру</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.cargobull-serviceportal.de/shop/Home.aspx" target="_blank">
                    <div class="element">
                        <img class="element__logo circle" src="images/lkw/schmitz.png" alt="">
                        <div class="element__title">
                            <h2>Schmitz Cargobull</h2>
                            <p>Раскладывает прицеп по номеру</p>
                        </div>
                    </div>
                </a>

                <a href="http://eberspacher.spb.ru/zapchasti/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/Eberspacher.png" alt="">
                        <div class="element__title">
                            <h2>Eberspacher</h2>
                            <p>Автономные отопители</p>
                        </div>
                    </div>
                </a>

                <a href="http://www.webasto.spb.ru/zapchasti_webasto/" target="_blank">
                    <div class="element">
                        <img class="element__logo circle" src="images/lkw/webasto.svg" alt="">
                        <div class="element__title">
                            <h2>Webasto</h2>
                            <p>Автономные отопители</p>
                        </div>
                    </div>
                </a>

                <a href="http://www.jost.ru/produkty/portfolio.html" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/jost.png" alt="">
                        <div class="element__title">
                            <h2>Jost</h2>
                            <p>Сцепные устройства</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="http://www.cei.it/?lang=ru" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/cei.png" alt="">
                        <div class="element__title">
                            <h2>CEI</h2>
                            <p>Шестерни, шкворня и т.д.</p>
                        </div>
                    </div>
                </a>

                <a href="https://catalog.axut-polska.pl/ru" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/axut.png" alt="">
                        <div class="element__title">
                            <h2>Axut</h2>
                            <p>Пневматика, р/к сцепных устройств, детали ходовой</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.sampa.com/en/search?word=1524771" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/sampa.svg" alt="">
                        <div class="element__title">
                            <h2>SAMPA</h2>
                            <p>Всякое разное</p>
                        </div>
                    </div>
                </a>

                <a href="https://ebs.co.uk/home.aspx" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/ebs.png" alt="">
                        <div class="element__title">
                            <h2>EBS</h2>
                            <p>Europian Brake System</p>
                        </div>
                    </div>
                </a>

                <a href="https://partnerportal.dieseltechnic.com/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/DieselTechnic.png" alt="">
                        <div class="element__title">
                            <h2>Diesel Technic</h2>
                            <p>Diesel Technic</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->
        </div> <!-- /item__lkw -->

        <div id="lkw__tab_2" class="item__lkw">
            <div class="element__wrapper">
                <a href="http://webshop.schomaecker.de/UI/User/Login.aspx" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/schomacker.png" alt="">
                        <div class="element__title">
                            <h2>SCHOMÄCKER</h2>
                            <p>Рессоры и стремянки</p>
                        </div>
                    </div>
                </a>

                <a href="http://www.gess.com.ua/identifikatsiya-stremyanok.html" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/gess.png" alt="">
                        <div class="element__title">
                            <h2>ГЕСС каталог стремянок</h2>
                            <p>Каталог стремянок</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.monroemagnumcatalogue.eu/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/monroe.png" alt="">
                        <div class="element__title">
                            <h2>MONROE Magnum</h2>
                            <p>Амортизаторы</p>
                        </div>
                    </div>
                </a>

                <a href="https://webcat.zf.com/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/zf.png" alt="">
                        <div class="element__title">
                            <h2>ZF WebCat</h2>
                            <p>Sachs, TRW, Lemforder</p>
                        </div>
                    </div>
                </a>

                <a href="https://partsfinder.bilsteingroup.com/ru/truck/index" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/febi.png" alt="">
                        <div class="element__title">
                            <h2>FEBI</h2>
                            <p>Шкворня, втулки, с/б</p>
                        </div>
                    </div>
                </a>

                <a href="https://vehicleaftermarket.skf.com/ru/ru" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/skf.png" alt="">
                        <div class="element__title">
                            <h2>SKF</h2>
                            <p>Подшипники</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://webcat.schaeffler.com/web/schaeffler/ru_RU/index.xhtml?reset=1" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/luk.png" alt="">
                        <div class="element__title">
                            <h2>Schaeffler</h2>
                            <p>Сцепление, с/б, втулки</p>
                        </div>
                    </div>
                </a>

                <a href="https://ru.valeoservice.com/ru" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/valeo.png" alt="">
                        <div class="element__title">
                            <h2>Valeo</h2>
                            <p>Сцепление</p>
                        </div>
                    </div>
                </a>

                <a href="https://ecommerce.emmerre.eu/siware/index.php" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/emmerre.png" alt="">
                        <div class="element__title">
                            <h2>Emmerre</h2>
                            <p>Детали ходовой, тормоза, цилиндры, подшипники.</p>
                        </div>
                    </div>
                </a>

                <a href="https://catalog.axut-polska.pl/ru" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/axut.png" alt="">
                        <div class="element__title">
                            <h2>Axut</h2>
                            <p>Пневматика, р/к сцепных устройств, детали ходовой</p>
                        </div>
                    </div>
                </a>

                <a href="http://www.cei.it/?lang=ru" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/cei.png" alt="">
                        <div class="element__title">
                            <h2>CEI</h2>
                            <p>Шестерни, шкворня и т.д.</p>
                        </div>
                    </div>
                </a>

                <a href="https://craft-bearings.com.ua/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/craft.png" alt="">
                        <div class="element__title">
                            <h2>CRAFT Bearings</h2>
                            <p>Подшипники</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://www.sampa.com/en/search?word=1524771" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/sampa.svg" alt="">
                        <div class="element__title">
                            <h2>SAMPA</h2>
                            <p>Всякое разное</p>
                        </div>
                    </div>
                </a>

                <a href="http://www.semlastik.com/en/products/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/sem.png" alt="">
                        <div class="element__title">
                            <h2>SEMPlastik</h2>
                            <p>SEMPlastik</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->
        </div> <!-- /item__lkw" -->

        <div id="lkw__tab_3" class="item__lkw">
            <div class="element__wrapper">
                <a href="http://katalog.lumag.pl/Default" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/lumag.png" alt="">
                        <div class="element__title">
                            <h2>Lumag</h2>
                            <p>Тормозные колодки, накладки, заклепки</p>
                        </div>
                    </div>
                </a>

                <a href="https://ecommerce.emmerre.eu/siware/index.php" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/emmerre.png" alt="">
                        <div class="element__title">
                            <h2>Emmerre</h2>
                            <p>Тормозные колодки и накладки</p>
                        </div>
                    </div>
                </a>

                <a href="https://web.tecalliance.net/remsa/ru/home" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/remsa.png" alt="">
                        <div class="element__title">
                            <h2>Remsa</h2>
                            <p>Тормозные колодки</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.trwaftermarket.com/ru/commercial-vehicles/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/trw.png" alt="">
                        <div class="element__title">
                            <h2>TRW</h2>
                            <p>Колодки</p>
                        </div>
                    </div>
                </a>

                <a href="http://www.cei.it/?lang=ru" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/cei.png" alt="">
                        <div class="element__title">
                            <h2>CEI</h2>
                            <p>Тормозные колодки</p>
                        </div>
                    </div>
                </a>

            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://www.belgiumtt.com/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/btt.png" alt="">
                        <div class="element__title">
                            <h2>BTT</h2>
                            <p>р/к суппортов</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.ttt-caliper.com/products" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/ttt.png" alt="">
                        <div class="element__title">
                            <h2>TTT Caliper</h2>
                            <p>р/к суппортов</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.majorsell.co.uk/ru/catalogues" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/majorsell.png" alt="">
                        <div class="element__title">
                            <h2>MAJORSELL</h2>
                            <p>р/к суппортов, р/к компрессоров</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.cheeft.com/Product/mainlist/1" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/cheeft.png" alt="">
                        <div class="element__title">
                            <h2>CHEEFT</h2>
                            <p>р/к суппортов</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.benefitauto.com.tr/ru/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/benefit.png" alt="">
                        <div class="element__title">
                            <h2>Benefit Caliper</h2>
                            <p>р/к суппортов</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.andacotomotiv.com.tr/produkti" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/andac.png" alt="">
                        <div class="element__title">
                            <h2>ANDAC ANDTECH</h2>
                            <p>р/к суппортов</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->
        </div> <!-- /item__lkw -->

        <div id="lkw__tab_4" class="item__lkw">
            <div class="element__wrapper">
                <a href="http://katalog.vanstar.pl/rut" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/vanstar.png" alt="">
                        <div class="element__title">
                            <h2>Vanstar</h2>
                            <p>Выпускные системы</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.hobifrance.com/en?lang=gb" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/hobi.png" alt="">
                        <div class="element__title">
                            <h2>HOBI</h2>
                            <p>Выпускные системы, рессиверы</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.dinexemission.ru/webshop" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/dinex.png" alt="">
                        <div class="element__title">
                            <h2>DINEX</h2>
                            <p>Выпускные системы</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.polmostrow.pl/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/polmostrow.png" alt="">
                        <div class="element__title">
                            <h2>Polmostrow</h2>
                            <p>Выпускные системы</p>
                        </div>
                    </div>
                </a>
            </div>

            <div class="element__wrapper">
                <a href="file:pdf/axle_mb.pdf" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/car_list/mercedes.png" alt="">
                        <div class="element__title">
                            <h2>Оси Mercedes</h2>
                            <p>Оси Mercedes</p>
                        </div>
                    </div>
                </a>

                <a href="file:pdf/axle_meritor.pdf" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/car_list/meritor.png" alt="">
                        <div class="element__title">
                            <h2>Оси Meritor</h2>
                            <p>Оси Meritor</p>
                        </div>
                    </div>
                </a>

                <a href="file:pdf/rider.pdf" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/rider.png" alt="">
                        <div class="element__title">
                            <h2>Rider</h2>
                            <p>Фитинги, запчасти ГИ</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->
        </div> <!-- /item__lkw -->

        <div id="lkw__tab_5" class="item__lkw">
            <div class="brake__tabs">
                <div class="brake__wrapper">
                    <button type="button" data-tab="#BPW" class="brake__btn active">
                        <h2>BPW</h2>
                    </button>
                    <button type="button" data-tab="#SAF" class="brake__btn">
                        <h2>SAF</h2>
                    </button>
                    <button type="button" data-tab="#ROR" class="brake__btn">
                        <h2>ROR</h2>
                    </button>
                    <button type="button" data-tab="#SMB" class="brake__btn">
                        <h2>SMB/FRUEHAUF/TRAILOR</h2>
                    </button>
                </div>
                <div class="brake__item active" id="BPW">
                    <table class="table__style" width="100%">
                        <thead>
                            <tr>
                                <th>Размер</th>
                                <th>Башмак</th>
                                <th>Накладка</th>
                                <th>Заклепки</th>
                                <th>Р/К</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>OLD 420x180</td>
                                <td>05.091.26.64.2</td>
                                <td>WVA 19032</td>
                                <td>8x15 --- 80шт</td>
                                <td>070.642</td>
                            </tr>
                            <tr>
                                <td>NEW 420x180</td>
                                <td>05.091.46.17.0</td>
                                <td>WVA 19032</td>
                                <td>8x15 --- 80шт</td>
                                <td>070.640</td>
                            </tr>
                            <tr>
                                <td>OLD 420x200</td>
                                <td>05.091.27.54.2</td>
                                <td>WVA 19094</td>
                                <td>8x15 --- 80шт</td>
                                <td>070.642</td>
                            </tr>
                            <tr>
                                <td>NEW 420x200</td>
                                <td>05.091.27.83.0</td>
                                <td>WVA 19032</td>
                                <td>8x15 --- 80шт</td>
                                <td>070.640</td>
                            </tr>
                        </tbody>
                    </table>
                </div> <!-- /bpw -->

                <div class="brake__item" id="SAF">
                    <table class="table__style" width="100%">
                        <thead>
                            <tr>
                                <th>Размер</th>
                                <th>Башмак</th>
                                <th>Накладка</th>
                                <th>Заклепки</th>
                                <th>Р/К</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>420x180 под шар</td>
                                <td>3054012000</td>
                                <td>WVA 19283</td>
                                <td>8x15 --- 64шт</td>
                                <td>смотри примечание</td>
                            </tr>
                            <tr>
                                <td>420x180</td>
                                <td>3054005200</td>
                                <td>WVA 19032</td>
                                <td>8x15 --- 80шт</td>
                                <td>смотри примечание</td>
                            </tr>
                            <tr>
                                <td>420х200 под шар</td>
                                <td>3054012200</td>
                                <td>WVA 19477</td>
                                <td>8х15 --- 64шт</td>
                                <td>смотри примечание</td>
                            </tr>
                            <tr>
                                <td>420x200</td>
                                <td>3054005300</td>
                                <td>WVA 19094</td>
                                <td>8x15 --- 80шт</td>
                                <td>смотри примечание</td>
                            </tr>
                        </tbody>
                    </table>
                </div> <!-- /saf -->

                <div class="brake__item" id="ROR">
                    <table class="table__style" width="100%">
                        <thead>
                            <tr>
                                <th>Размер</th>
                                <th>Башмак</th>
                                <th>Накладка</th>
                                <th>Заклепки</th>
                                <th>Р/К</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>419x178 ось LM/LC</td>
                                <td>15224724S</td>
                                <td>WVA 19030</td>
                                <td>L9 ---96шт</td>
                                <td>SB100072</td>
                            </tr>
                            <tr>
                                <td>419x178 ось TE/TM/TA/TC</td>
                                <td>15205533S</td>
                                <td>WVA 19036</td>
                                <td>L10 ---96шт</td>
                                <td>axl 126</td>
                            </tr>
                            <tr>
                                <td>419x219 ось TE/TM/TA/TC</td>
                                <td>15205191S</td>
                                <td>WVA 19369</td>
                                <td>L10 ---96шт</td>
                                <td>axl 126</td>
                            </tr>
                        </tbody>
                    </table>
                </div> <!-- /ror -->

                <div class="brake__item" id="SMB">
                    <table class="table__style" width="100%">
                        <thead>
                            <tr>
                                <th>Размер</th>
                                <th>Башмак</th>
                                <th>Накладка</th>
                                <th>Заклепки</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>419x178 c C2-09 по C2-10</td>
                                <td>m006204 (Axut: SB080092)</td>
                                <td>WVA 19613</td>
                                <td>5x15-128шт</td>
                            </tr>
                            <tr>
                                <td>419x178</td>
                                <td>(Axut: SB020088)</td>
                                <td>WVA 19036</td>
                                <td>L10 ---96шт</td>
                            </tr>
                            <tr>
                                <td>419x203 c C1-09 по C1-13</td>
                                <td>m006093 (Axut: SB028038)</td>
                                <td>WVA 19557</td>
                                <td>5x15-128шт</td>
                            </tr>
                            <tr>
                                <td>419x203</td>
                                <td>1674000b (Axut: SB080094)</td>
                                <td>WVA19365</td>
                                <td>L10 ---96шт</td>
                            </tr>
                        </tbody>
                    </table>
                </div> <!-- /smb -->
            </div> <!-- /brake__tabs -->
        </div> <!-- /item__lkw -->

        <div id="lkw__tab_6" class="item__lkw block">
            <div class="main__inner active">
                <div class="car__list">
                    <div class="car__list-item">
                        <div data-collapse="#car_1" class="car__brand">
                            <img class="logo_car" src="images/car_list/mercedes.png" alt="">
                            <h3 class="car__title">MERCEDES-BENZ</h3>
                        </div>
                        <div id="car_1" class="model__list">
                            <ul>
                                <li data-tab="#mb_1" class="model__item">ATEGO I 01.1998-10.2004</li>
                                <li data-tab="#mb_1" class="model__item">ATEGO II 01.2004-04.2013</li>
                                <li data-tab="#mb_2" class="model__item">ACTROS MP1 04.1996-10.2002</li>
                                <li data-tab="#mb_3" class="model__item">ACTROS MP2/MP3 10.2002-10.2011</li>
                                <li data-tab="#mb_4" class="model__item">AXOR I 09.2001-10.2004</li>
                                <li data-tab="#mb_5" class="model__item">AXOR II 10.2004- </li>
                            </ul>
                        </div>
                    </div>

                    <div class="car__list-item">
                        <div data-collapse="#car_2" class="car__brand">
                            <img class="logo_car" src="images/car_list/daf.png" alt="">
                            <h3 class="car__title">DAF</h3>
                        </div>
                        <div id="car_2" class="model__list">
                            <ul>
                                <li data-tab="#daf_1" class="model__item">ATI (95) 09.1987-01.1998</li>
                                <li data-tab="#daf_2" class="model__item">95 XF 01.1997-10.2002 Euro 2</li>
                                <li data-tab="#daf_3" class="model__item">XF 95 01.2002-12.2006 Euro 3</li>
                                <li data-tab="#daf_4" class="model__item">XF 105 10.2005- Euro 5</li>
                                <li data-tab="#daf_5" class="model__item">85 07.92-03.98 </li>
                                <li data-tab="#daf_6" class="model__item">85 CF 02.98-12.00 Euro 2</li>
                                <li data-tab="#daf_7" class="model__item">CF 85 01.01-05.13 Euro 3</li>
                                <li data-tab="#daf_8" class="model__item">CF 85 01.01-05.13 Euro 5</li>
                            </ul>
                        </div>
                    </div>

                    <div class="car__list-item">
                        <div data-collapse="#car_3" class="car__brand">
                            <img class="logo_car" src="images/car_list/renault.png" alt="">
                            <h3 class="car__title">Renault Trucks</h3>
                        </div>

                        <div id="car_3" class="model__list">
                            <ul>
                                <li data-tab="#rvi_1" class="model__item">MAGNUM 01.1997-05.2000</li>
                                <li data-tab="#rvi_2" class="model__item">MAGNUM 01.2000-</li>
                                <li data-tab="#rvi_3" class="model__item">MAGNUM 10.2006- DXI 12-13 Euro 5</li>
                                <li data-tab="#rvi_4" class="model__item">PREMIUM -12.1999 Euro 2</li>
                                <li data-tab="#rvi_5" class="model__item">PREMIUM 01.2000- Euro 3</li>
                                <li data-tab="#rvi_6" class="model__item">PREMIUM Euro 5</li>
                            </ul>
                        </div>
                    </div>

                    <div class="car__list-item">
                        <div data-collapse="#car_4" class="car__brand">
                            <img class="logo_car" src="images/car_list/man.png" alt="">
                            <h3 class="car__title">MAN</h3>
                        </div>
                        <div id="car_4" class="model__list">
                            <ul>
                                <li data-tab="#man_1" class="model__item">TGA</li>
                                <li data-tab="#man_2" class="model__item">L2000 10.1993-</li>
                                <li data-tab="#man_3" class="model__item">E2000 05.2000-</li>
                                <li data-tab="#man_4" class="model__item">TGL 04.2005- Euro 5</li>
                                <li data-tab="#man_5" class="model__item">TGM 04.2005- Euro 5</li>
                                <li data-tab="#man_6" class="model__item">TGS 08.2007</li>
                                <li data-tab="#man_7" class="model__item">TGX 08.2007</li>
                            </ul>
                        </div>
                    </div>

                    <div class="car__list-item">
                        <div data-collapse="#car_5" class="car__brand">
                            <img class="logo_car" src="images/car_list/scania.png" alt="">
                            <h3 class="car__title">Scania</h3>
                        </div>
                        <div id="car_5" class="model__list">
                            <ul>
                                <li data-tab="#scania_1" class="model__item">Seria-3</li>
                                <li data-tab="#scania_2" class="model__item">Seria-4</li>
                                <li data-tab="#scania_3" class="model__item">G, P, R, T - Series 01.03</li>
                            </ul>
                        </div>
                    </div>

                    <div class="car__list-item">
                        <div data-collapse="#car_6" class="car__brand">
                            <img class="logo_car" src="images/car_list/Volvo.png" alt="">
                            <h3 class="car__title">Volvo</h3>
                        </div>
                        <div id="car_6" class="model__list">
                            <ul>
                                <li data-tab="#volvo_1" class="model__item">Volvo FH12</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="car__data">
                    <!-- MB -->
                    <div id="mb_1" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="5">904.***,<br>900.***,<br>924.***<br>объем до 5л</td>
                                <td>ф. масл.</td>
                                <td>E160H01D28 (H=149,5mm)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E52KPD36</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E361L</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12 или AL24</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td rowspan="5">906.***,<br>926.***,<br>902.***,<br>925.***<br>объем от 6л</td>
                                <td>ф. масл.</td>
                                <td>E161H01D28 (H=221,5mm)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E52KPD36</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E361L (H=349mm)</td>
                                <td>E312L (H=305mm редкий)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12 или AL24</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="mb_2" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="5">All</td>
                                <td>ф. масл.</td>
                                <td>E500H D129</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E500KP02 D36</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E314L (+крышка)</td>
                                <td>E312L (H=305mm); E297L (H=249mm ) +крышка</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12 или AL24</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="mb_3" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="5">All</td>
                                <td>ф. масл.</td>
                                <td>E500H D129</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E500KP02 D36</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E603L (H=530mm)</td>
                                <td>E497L (H=332,30mm +крышка)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12 или AL24</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="mb_4" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="5">906.***<br>объем до 7л</td>
                                <td>ф. масл.</td>
                                <td>E161H01D28 (H=221,5mm)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E52KPD36 (H=101mm)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E361L</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12 или AL24</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td rowspan="5">457.***<br>объем до 12л</td>
                                <td>ф. масл.</td>
                                <td>E175H D129 (H=263,50mm)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E500KP02 D36 (H=202.50mm)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E497L (H=332,30mm +крышка) 04.03-</td>
                                <td>E312L (H=305mm) ; E297L (H=249mm ) -крышка -03.03</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12 или AL24</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="mb_5" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="5">906.***,<br>902.***,<br>926.***</td>
                                <td>ф. масл.</td>
                                <td>E161H01D28 (H=221,5mm)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E52KPD36 (H=101mm)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E361L (H=349mm)</td>
                                <td>E497L (H=332,30mm)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12 или AL24</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td rowspan="5">457.***</td>
                                <td>ф. масл.</td>
                                <td>E175H D129 (H=263,50mm)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E500KP02 D36 (H=202,50mm))</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E603L (H=530mm)</td>
                                <td>E497L (H=332,30 -крышка)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12 или AL24</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <!-- daf -->
                    <div id="daf_1" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="6">ALL</td>
                                <td>ф. масл.</td>
                                <td>H300W01</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>H18WK04 (H=210mm) -08.96</td>
                                <td>H17WK03 (H=143mm) 09.96-</td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E115L (H=376mm)</td>
                                <td>E218L (H=3810mm)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E1995LI</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="daf_2" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="6">XF280M<br>XF315M<br>XF355M</td>
                                <td>ф. масл.</td>
                                <td>H300W02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>H18WDK05, *01, *04 (M16)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>LX1025</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E944LI</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td rowspan="6">Переходная модель Дв. <br>XE280C,<br>XE315C,<br>XE355C,<br>XE390C</td>
                                <td>ф. масл.</td>
                                <td>H300W02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>H18WDK03 (H=144mm)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>LX1025</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E944LI</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="daf_3" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">ALL</td>
                                <td>ф. масл.</td>
                                <td>E34HD213 (H=149mm)</td>
                                <td>E43HD213 (H=220mm)</td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>Z12D64</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E66KPD36 (H=202mm)</td>
                                <td>E70KPD98 (H=247,60mm)</td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>LX1025</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E944LI</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="daf_4" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">ALL</td>
                                <td>ф. масл.</td>
                                <td>E89HD213</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>Z12D64 (-2011)</td>
                                <td>Z16D183 (2011-)</td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E82KPD36</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E794L (-2011)</td>
                                <td>E1084L (2011-)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL25</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E944LI</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="daf_5" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">ALL</td>
                                <td>ф. масл.</td>
                                <td>H300W01</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>H18WK04 (H=210mm) -08.96</td>
                                <td>H17WK03 (H=143mm) 09.96-</td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E251L</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="daf_6" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">ALL</td>
                                <td>ф. масл.</td>
                                <td>H300W02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>Z12D64</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>H17WK03 (H=143mm)</td>
                                <td>H18WK04 (H=210mm)</td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E251L (H=418мм)</td>
                                <td>E479L (H=480мм)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E945LI</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="daf_7" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">Мощность:<br>340,<br>380,<br>430,<br>480</td>
                                <td>ф. масл.</td>
                                <td>E34HD213 (H=149mm)</td>
                                <td>E43HD213 (H=220mm)</td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>Z12D64</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E66KPD36 (H=202mm)</td>
                                <td>E70KPD98 (H=247,6mm)</td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E541L (H=481мм)</td>
                                <td>E702L (H=507мм)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL22</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E969LI</td>
                                <td>E969LC (угольный)</td>
                            </tr>
                            <tr>
                                <td>Мощность: 480</td>
                                <td>ф. возд</td>
                                <td>E479L (редкий)</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="daf_8" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">Мощность:<br>360,<br>410,<br>460,<br>510</td>
                                <td>ф. масл.</td>
                                <td>E89HD213</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>Z16D183</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E82KPD36</td>
                                <td>иногда ставятся по 2шт.</td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E541L (H=481мм)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL25</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E969LI</td>
                                <td>E969LC (угольный)</td>
                            </tr>
                        </table>
                    </div>

                    <!-- man -->
                    <div id="man_1" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">Обьем 10,5л<br>D2066LF**<br>Обьем 12,4л<br>D2676LF**</td>
                                <td>ф. масл.</td>
                                <td>E422HD86</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E422KPD98</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>LX1024</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12</td>
                                <td>AL24</td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E954LI01</td>
                                <td>E954LC01 (Угольный)</td>
                            </tr>

                            <tr>
                                <td rowspan="7">Обьем 12л<br>D2866LF**<br>Обьем 12,8л<br>D2876LF**</td>
                                <td>ф. масл.</td>
                                <td>E13HD47</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E56KPD72</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>LX1024</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12</td>
                                <td>AL24</td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E954LI01</td>
                                <td>E954LC01 (Угольный)</td>
                            </tr>

                            <tr>
                                <td rowspan="7">D0836LF34<br>330лс</td>
                                <td>ф. масл.</td>
                                <td>E172HD35</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E56KPD72</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>LX1024</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12</td>
                                <td>AL24</td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E954LI01</td>
                                <td>E954LC01 (Угольный)</td>
                            </tr>
                        </table>
                    </div>

                    <div id="man_2" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">-01.2000</td>
                                <td>ф. масл.</td>
                                <td>H210W01</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>H70WDK14</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E115L (H=376mm)</td>
                                <td>E116L (H=381mm)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12</td>
                                <td>AL24</td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E949LI</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td rowspan="7">01.2000-</td>
                                <td>ф. масл.</td>
                                <td>H210W01</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>H70WDK14</td>
                                <td>иногда ставятся по 2шт.</td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E307L</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12</td>
                                <td>AL24</td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E949LI</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="man_3" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">ALL</td>
                                <td>ф. масл.</td>
                                <td>E13HD47</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>H70WDK14 (x2)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E237L</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12</td>
                                <td>AL24</td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E906LI</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="man_4" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">ALL</td>
                                <td>ф. масл.</td>
                                <td>E172HD35</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E422KPD98</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E811L (H=458mm)</td>
                                <td>E706L (H=417mm)<br>или E661L(H=305mm)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL24</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E954LI01</td>
                                <td>E954LC01 (угольный)</td>
                            </tr>
                            <tr>
                                <td>09.2012- Euro6</td>
                                <td>ф. возд.</td>
                                <td>E594L (H=415mm)</td>
                                <td>E1162L (плоский)</td>
                            </tr>
                        </table>
                    </div>

                    <div id="man_5" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">ALL</td>
                                <td>ф. масл.</td>
                                <td>E172HD35</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E422KPD98</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E811L (H=458mm)</td>
                                <td>E706L (H=417mm)<br>или E661L(H=305mm)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL24</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E954LI01</td>
                                <td>E954LC01 (угольный)</td>
                            </tr>
                            <tr>
                                <td>09.2012- Euro6</td>
                                <td>ф. возд.</td>
                                <td>E594L (H=415mm)</td>
                                <td>E1162L (плоский)</td>
                            </tr>
                        </table>
                    </div>

                    <div id="man_6" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">ALL</td>
                                <td>ф. масл.</td>
                                <td>E422HD86</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E422KPD98</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E428L01</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL24</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E954LI01</td>
                                <td>E954LC01 (угольный)</td>
                            </tr>
                            <tr>
                                <td>09.2012- Euro6</td>
                                <td>ф. возд.</td>
                                <td>E831HD275</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="man_7" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">ALL</td>
                                <td>ф. масл.</td>
                                <td>E422HD86</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E422KPD98</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E428L01</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL24</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E954LI01</td>
                                <td>E954LC01 (угольный)</td>
                            </tr>
                            <tr>
                                <td>09.2012- Euro6</td>
                                <td>ф. возд.</td>
                                <td>E831HD275</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <!-- scania -->
                    <div id="scania_1" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">ALL</td>
                                <td>ф. масл.</td>
                                <td>W920/7</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>KC24 (x2)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E218L (H=381мм)</td>
                                <td>E809L (H=435мм)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="scania_2" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">Все кроме:<br>R164</td>
                                <td>ф. масл.</td>
                                <td>H200W20</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>H17WK04</td>
                                <td>H17WK11 (LongLife)</td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E1013L (H=446мм)<br>E424L (H=464мм)</td>
                                <td>E1006L (H=442,5мм)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>T300W</td>
                                <td>T350W</td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E956LI01 (H=69мм)</td>
                                <td>E1970LI (H=10мм)</td>
                            </tr>

                            <tr>
                                <td rowspan="7">R164</td>
                                <td>ф. масл.</td>
                                <td>E21HD74</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E57KPD73</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E1013L (H=446мм)<br>E424L (H=464мм)</td>
                                <td>E1006L (H=442,5мм)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>T300W</td>
                                <td>T350W</td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E956LI01 (H=69мм)</td>
                                <td>E1970LI (H=10мм)</td>
                            </tr>
                        </table>
                    </div>

                    <div id="scania_3" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">Обьем 8,9л<br>DC 9.11<br>DC 9.12<br>DC 9.13<br>DC 9.17<br>DC 9.17<br>DC
                                    9.18</td>
                                <td>ф. масл.</td>
                                <td>H200W20</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E68KP01D73 (Вставка)</td>
                                <td>H17WK11 (Накручивается)</td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E1013L (H=446мм)<br>E424L (H=464мм)</td>
                                <td>E1016L (H=535мм)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>4324109272</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E2960LI 10.2007-</td>
                                <td>E956LI01 -09.2007<br>E1970LI -09.2007</td>
                            </tr>

                            <tr>
                                <td rowspan="7">Обьем 9,3л<br>DC 9.30<br>DC 9.35<br>DC 9.39<br>DC 9.110</td>
                                <td>ф. масл.</td>
                                <td>E123H01D194</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E103KP01D197-2</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E1013L (H=446мм)<br>E424L (H=464мм)</td>
                                <td>E1016L (H=535мм)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>4324109272</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E2960LI 10.2007-</td>
                                <td>E956LI01 -09.2007<br>E1970LI -09.2007</td>
                            </tr>
                        </table>
                    </div>

                    <!-- renault -->
                    <div id="rvi_1" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">MIDR:<br>390,<br>430,<br>470,<br>560</td>
                                <td>ф. масл.</td>
                                <td>H200W10 (x2)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>Z10D64</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>KC24 (x2)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>LX768 (H=472,5мм)</td>
                                <td>LX713 (H=464мм)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12</td>
                                <td>AL24</td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E1956LI</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="rvi_2" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">E-TECH:<br>400,<br>440,<br>480</td>
                                <td>ф. масл.</td>
                                <td>H200W10 (x2)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>Z13D94</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>H18WDK02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>LX713 (H=464мм)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12</td>
                                <td>AL24</td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E1956LI</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="rvi_3" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">ALL</td>
                                <td>ф. масл.</td>
                                <td>H200W40 (x2)<br>H200WN01 (x1)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>H200WDK01</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>LX713 (H=464мм)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL26</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E1956LI</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="rvi_4" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">MIDR</td>
                                <td>ф. масл.</td>
                                <td>H200W10 (x2)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>Z10D64</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>KC24 (x2)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>LX713 (H=464мм)</td>
                                <td>LX774 (H=556мм)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12</td>
                                <td>AL24</td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E2927LI</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="rvi_5" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">dCi</td>
                                <td>ф. масл.</td>
                                <td>H200W10 (x2)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>Z13D94</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>H18WDK02 (x2)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>LX713 (H=464мм)</td>
                                <td>LX774 (H=556мм)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12</td>
                                <td>AL24</td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E2927LI</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id="rvi_6" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">DXI7<br>Обьем: 7,2л<br>-340</td>
                                <td>ф. масл.</td>
                                <td>E416HD86</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>E416KPD36</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>LX713 (H=464мм)</td>
                                <td>LX774 (H=556мм)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL26</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E2927LI</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td rowspan="7">DXI11<br>Обьем: 10,8л<br>370-</td>
                                <td>ф. масл.</td>
                                <td>H200W40 (x2)<br>H200WN01 (x1)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>H200WDK01</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>LX713 (H=464мм)</td>
                                <td>LX774 (H=556мм)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL26</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E2927LI</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <!-- volvo -->
                    <div id="volvo_1" class="car__data-engine">
                        <table class="table__style">
                            <thead>
                                <tr>
                                    <th>Двигатель</th>
                                    <th>Позиция</th>
                                    <th>Вариант 1</th>
                                    <th>Вариант 2</th>
                                </tr>
                            </thead>
                            <tr>
                                <td rowspan="7">ALL</td>
                                <td>ф. масл.</td>
                                <td>H200W40 (x2)<br>H200WN01 (x1)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. центрифуга</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. топл.</td>
                                <td>H18WK03</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. возд.</td>
                                <td>E316L (крепеж квадрат)</td>
                                <td>E420L (крепеж круг)</td>
                            </tr>
                            <tr>
                                <td>ф. ГУР</td>
                                <td>E10H02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ф. влагоотдел.</td>
                                <td>AL12</td>
                                <td>AL24</td>
                            </tr>
                            <tr>
                                <td>ф. салона</td>
                                <td>E947LI</td>
                                <td>E947LC (угольный)</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div> <!-- /main__inner -->
        </div> <!-- /item__lkw -->

        <div id="lkw__tab_7" class="item__lkw">
            <div class="element__wrapper">
                <a href="http://www.airtechairsprings.com/ru/sayfa.asp?mdl=urunler" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/airtech.png" alt="">
                        <div class="element__title">
                            <h2>Airtech</h2>
                            <p>Пневмоподушки</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.meklas.com/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/connect.png" alt="">
                        <div class="element__title">
                            <h2>Connect</h2>
                            <p>Пневмоподушки</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.sampa.com/en/search?word=1524771" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/sampa.svg" alt="">
                        <div class="element__title">
                            <h2>SAMPA</h2>
                            <p>Всякое разное</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://www.knorr-bremsecvs.com/ru/products_1/productsearch/productsearch_1.jsp"
                    target="_blank">
                    <div class="element">
                        <img class="element__logo circle" src="images/lkw/knorr.png" alt="">
                        <div class="element__title">
                            <h2>Knorr-Bremse CVS</h2>
                            <p>Пневмосистемы</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.wabco-customercentre.com/catalog/ru_RU" target="_blank">
                    <div class="element">
                        <img class="element__logo circle" src="images/lkw/wabco.svg" alt="">
                        <div class="element__title">
                            <h2>WABCO</h2>
                            <p>Пневмосистемы</p>
                        </div>
                    </div>
                </a>

                <a href="https://vaden.com.tr/ru/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/vaden.png" alt="">
                        <div class="element__title">
                            <h2>Vaden</h2>
                            <p>Компрессоры и запчасти к ним</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.fss.com.tr/index.php" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/fss.png" alt="">
                        <div class="element__title">
                            <h2>F.S.S. Air</h2>
                            <p>Р/К пневмо</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="http://aignerr.de/files/aignerr_.pdf" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/aigner.png" alt="">
                        <div class="element__title">
                            <h2>Aignerr</h2>
                            <p>Пневмоподушки</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.phoenix-airsprings.com/catalog/ProductList.aspx?oe=3229004200&lang=ru-RU"
                    target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/phoenix.png" alt="">
                        <div class="element__title">
                            <h2>PHOENIX</h2>
                            <p>Пневмоподушки</p>
                        </div>
                    </div>
                </a>

                <a href="http://www.wuhlermann.com.tr/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/Wuhlermann.png" alt="">
                        <div class="element__title">
                            <h2>Wuhlermann</h2>
                            <p>Пневмоподушки</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->
        </div> <!-- /item__lkw -->
    </div> <!-- /lkw -->


    <!-- sng -->
    <div id="tab_4" class="main">
        <div class="main__tabs">
            <button type="button" data-tab="#sng_tab_1" class="tabs__btn-sng active">
                <h2>Каталоги</h2>
            </button>
        </div>

        <div id="sng__tab_1" class="item__sng active">
            <div class="element__wrapper">
                <a href="https://www.autoopt.ru/auto/catalog" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/sng/avtoopt.png" alt="">
                        <div class="element__title">
                            <h2>АвтоОпт</h2>
                            <p>Каталоги СНГ</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.avtoall.ru/catalog/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/sng/avtoall.png" alt="">
                        <div class="element__title">
                            <h2>AvtoALL</h2>
                            <p>Каталоги СНГ</p>
                        </div>
                    </div>
                </a>

                <a href="https://detali.zp.ua/catalog/10000003-vaz/?gclid=CjwKCAjwtpGGBhBJEiwAyRZX2ltiLdEbkoMLOxHshJ5K75s978LzzYVgfCj9kyyDy6nAtD6T-ka3nRoCRTQQAvD_BwE"
                    target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/sng/detalizp.png" alt="">
                        <div class="element__title">
                            <h2>ДеталиZP</h2>
                            <p>Каталоги СНГ</p>
                        </div>
                    </div>
                </a>

                <a href="http://epc.avtozaz.com/?action=cat_zaz_model" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/sng/zaz.png" alt="">
                        <div class="element__title">
                            <h2>EPC ZAZ</h2>
                            <p>Раскладывает ЗАЗ по VIN</p>
                        </div>
                    </div>
                </a>

                <a href="http://maz.by/services/car-passport" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/sng/maz.png" alt="">
                        <div class="element__title">
                            <h2>EPC МАЗ</h2>
                            <p>Раскладывает МАЗ по VIN</p>
                        </div>
                    </div>
                </a>
            </div> <!-- element__wrapper -->

            <div class="element__wrapper">
                <a href="https://t-150.com.ua/product_list" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/sng/traktor.png" alt="">
                        <div class="element__title">
                            <h2>Трактора</h2>
                            <p>Подбор сельхозтехника</p>
                        </div>
                    </div>
                </a>

                <a href="http://technoimpex.com.ua/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/sng/technoimpex.jpg" alt="">
                        <div class="element__title">
                            <h2>ТехноИмпекс</h2>
                            <p>Подбор сельхозтехника</p>
                        </div>
                    </div>
                </a>

                <a href="https://d-m.in.ua/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/sng/drivemission.png" alt="">
                        <div class="element__title">
                            <h2>DriveMisson</h2>
                            <p>Подбор Эталон, Тата, Богдан</p>
                        </div>
                    </div>
                </a>

                <a href="http://avtodetali.com.ua/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/sng/avtokom.png" alt="">
                        <div class="element__title">
                            <h2>АВТО-КОМ-ДЕТАЛЬ</h2>
                            <p>Электрооборудование</p>
                        </div>
                    </div>
                </a>
            </div> <!-- element__wrapper -->

            <div class="element__wrapper">
                <a href="http://www.starter.by/catalog/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/sng/bate.png" alt="">
                        <div class="element__title">
                            <h2>БАТЭ</h2>
                            <p>Стартеры, генерторы</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.vtnauto.com/ru/product.php" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/sng/vtn.png" alt="">
                        <div class="element__title">
                            <h2>ВТН</h2>
                            <p>Автоэлектрика ВТН</p>
                        </div>
                    </div>
                </a>

                <a href="http://www.zavod-nn.ru/remo1.html" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/sng/gaz.png" alt="">
                        <div class="element__title">
                            <h2>ГАЗ</h2>
                            <p>Выхлопные системы ГАЗ</p>
                        </div>
                    </div>
                </a>

                <a href="http://www.rostar.biz/about/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/sng/rostar.png" alt="">
                        <div class="element__title">
                            <h2>ROSTAR</h2>
                            <p>Шарниры ROSTAR</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.motordetal.ru/catalog/production/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/sng/motordetal.png" alt="">
                        <div class="element__title">
                            <h2>Кострома</h2>
                            <p>Детали ЦПГ</p>
                        </div>
                    </div>
                </a>
            </div> <!-- element__wrapper -->
        </div> <!-- /pkw -->
    </div> <!-- /sng -->


    <!-- multi -->
    <div id="tab_5" class="main">
        <div class="main__tabs">
            <button type="button" data-tab="#multi__tab_4" class="tabs__btn-multi active">
                <h2>Motor</h2>
            </button>
            <button type="button" data-tab="#multi__tab_1" class="tabs__btn-multi ">
                <h2>Масла</h2>
            </button>
            <button type="button" data-tab="#multi__tab_2" class="tabs__btn-multi">
                <h2>Фильтры</h2>
            </button>

            <button type="button" data-tab="#multi__tab_3" class="tabs__btn-multi">
                <h2>Навесное</h2>
            </button>
            <button type="button" data-tab="#multi__tab_5" class="tabs__btn-multi">
                <h2>Электрика</h2>
            </button>
        </div>

        <div id="multi__tab_1" class="item__multi">
            <div class="element__wrapper">
                <a href="http://eni-agip.ru/catalog/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/eni.png" alt="">
                        <div class="element__title">
                            <h2>Eni Agip</h2>
                            <p>Масла Eni</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.elf.ua/ru/lubricants-advisor" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/elf.png" alt="">
                        <div class="element__title">
                            <h2>Elf</h2>
                            <p>Масла Elf</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.shell.com.ru/motorists/%D0%9C%D0%BE%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B5-%D0%BC%D0%B0%D1%81%D0%BB%D0%B0-%D0%A8%D0%B5%D0%BB%D0%BB/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%B0-%D0%BC%D0%B0%D1%81%D0%BB%D0%B0-shell-lubematch.html#iframe=L21vdG9yaXN0cy9vaWxzLWx1YnJpY2FudHMvbHViZW1hdGNoL19qY3JfY29udGVudC9wYXIvaWZyYW1lZGFwcC5zdGF0aWMvaWZyYW1lLTAyMTEyMC5odG1sIy9ydS9ydQ"
                    target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/shell.png" alt="">
                        <div class="element__title">
                            <h2>Shell</h2>
                            <p>Масла Shell</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.mobil.ru/ru-ru/b2b-product-selector/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/mobil.png" alt="">
                        <div class="element__title">
                            <h2>Mobil</h2>
                            <p>Масла Mobil</p>
                        </div>
                    </div>
                </a>

                <a href="https://applications.castrol.com/oilselector/ru_ru/c/search" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/castrol.png" alt="">
                        <div class="element__title">
                            <h2>Castrol</h2>
                            <p>Масла Castrol</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://www.hepu.de/en/online-katalog.php" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/hepu.png" alt="">
                        <div class="element__title">
                            <h2>Hepu</h2>
                            <p>Автохимия Hepu</p>
                        </div>
                    </div>
                </a>

                <a href="https://partsfinder.bilsteingroup.com/ru/truck/index" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/febi.png" alt="">
                        <div class="element__title">
                            <h2>FEBI</h2>
                            <p>Автохимия FEBI</p>
                        </div>
                    </div>
                </a>

                <a href="https://brexol.com.ua/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/brexol.png" alt="">
                        <div class="element__title">
                            <h2>Brexol</h2>
                            <p>Масла Brexol</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.axxis-chemicals.com/ru/catalog/chemia-samochodowa" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/axxis.png" alt="">
                        <div class="element__title">
                            <h2>Axxis</h2>
                            <p>Автохимия Axxis</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->
        </div> <!-- /item__multi -->

        <div id="multi__tab_2" class="item__multi">
            <div class="element__wrapper">
                <a href="https://catalog.mahle-aftermarket.com/eu/?_ga=2.117193856.749997407.1623439913-137923788.1623439913"
                    target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/knecht.png" alt="">
                        <div class="element__title">
                            <h2>Knecht</h2>
                            <p>Фильтры Knecht</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.hengst.com/ru/onlain-katalog/poisk/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/hengst.png" alt="">
                        <div class="element__title">
                            <h2>Hengst</h2>
                            <p>Фильтры Hengst</p>
                        </div>
                    </div>
                </a>

                <a href="https://catalog.mann-filter.com/EU/rus" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/mann.png" alt="">
                        <div class="element__title">
                            <h2>MANN</h2>
                            <p>Фильтры MANN</p>
                        </div>
                    </div>
                </a>

                <a href="https://wixeurope.com/ru/nayti-filtr" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/wix.png" alt="">
                        <div class="element__title">
                            <h2>WIX</h2>
                            <p>Фильтры WIX</p>
                        </div>
                    </div>
                </a>

                <a href="https://onlineshop.ms-motorservice.com/msi/MSICD?page=checkUser&vko=0001&usertype=guest&app=shop"
                    target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/Kolbenschmidt.png" alt="">
                        <div class="element__title">
                            <h2>Kolbenschmidt </h2>
                            <p>MS Motorservice International</p>
                        </div>
                    </div>
                </a>

                <a href="https://denckermann-ru.ecatalog.com.pl/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/denckermann.png" alt="">
                        <div class="element__title">
                            <h2>Denckermann </h2>
                            <p>Фильтры Denckermann </p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://shop.donaldson.com/store/ru-ua/home?_requestid=12039312" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/donaldson.png" alt="">
                        <div class="element__title">
                            <h2>Donaldson</h2>
                            <p>Фильтры Donaldson</p>
                        </div>
                    </div>
                </a>

                <a href="http://catalog.mfilter.lt/catalog/#/vehicle" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/mfilter.png" alt="">
                        <div class="element__title">
                            <h2>MFilter</h2>
                            <p>Фильтры MFilter</p>
                        </div>
                    </div>
                </a>

                <a href="https://ufi-aftermarket.com/EU/ru/%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D1%8B/?typology=%22auto%22&lang=%22ru_RU%22"
                    target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/ufi.png" alt="">
                        <div class="element__title">
                            <h2>UFI</h2>
                            <p>Фильтры UFI</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.sogefifilterdivision.com/catalogues/FO/scripts/accueil.php?zone=FR&catalogue=PFX&lang=RU"
                    target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/purflux.png" alt="">
                        <div class="element__title">
                            <h2>Purflux </h2>
                            <p>Фильтры Purflux</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->
        </div> <!-- /item__multi -->

        <div id="multi__tab_3" class="item__multi">
            <div class="element__wrapper">
                <a href="https://www.gates.com/ru/ru.html/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/gates.png" alt="">
                        <div class="element__title">
                            <h2>Gates</h2>
                            <p>Ремни, ролики, термостаты</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.continental-engineparts.com/eu/ru-RU/Automotive-Aftermarket/PIC-Katalog/PIC-Product-Information-Center-12/?lg=ru"
                    target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/continental.png" alt="">
                        <div class="element__title">
                            <h2>Continental</h2>
                            <p>Ремни, ролики</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.daycogarage.com/catalogue/ru-ru/search-model" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/dayco.png" alt="">
                        <div class="element__title">
                            <h2>Dayco</h2>
                            <p>Ремни, ролики</p>
                        </div>
                    </div>
                </a>

                <a href="https://vehicleaftermarket.skf.com/ru/ru" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/skf.png" alt="">
                        <div class="element__title">
                            <h2>SKF</h2>
                            <p>Ролики</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://catalogue.nissens.com/FrontPage" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/nissens.png" alt="">
                        <div class="element__title">
                            <h2>Nissens</h2>
                            <p>Радиаторы, компрессоры</p>
                        </div>
                    </div>
                </a>

                <a href="https://webshop.nrf.eu/?___store=ru&___from_store=default" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/nrf.png" alt="">
                        <div class="element__title">
                            <h2>NRF</h2>
                            <p>Радиаторы</p>
                        </div>
                    </div>
                </a>

                <a href="https://ava-cooling.com/ru/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3.html" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/ava.png" alt="">
                        <div class="element__title">
                            <h2>AVA</h2>
                            <p>Радиаторы, компрессоры</p>
                        </div>
                    </div>
                </a>

                <a href="https://web.tecalliance.net/hella/ru/home" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/behr.png" alt="">
                        <div class="element__title">
                            <h2>Behr</h2>
                            <p>Радиаторы, компрессоры</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.denso-am.ru/elektronnyi-katalog/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/denso.png" alt="">
                        <div class="element__title">
                            <h2>Denso</h2>
                            <p>Радиаторы, компрессоры</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://ru.calorstatbyvernet.com/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/vernet.png" alt="">
                        <div class="element__title">
                            <h2>Vernet</h2>
                            <p>Термостаты, датчики</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->
        </div> <!-- /item__multi -->

        <div id="multi__tab_4" class="item__multi active">
            <div class="element__wrapper">
                <a href="https://onlineshop.ms-motorservice.com/msi/MSICD?page=checkUser&vko=0001&usertype=guest&app=shop"
                    target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/Kolbenschmidt.png" alt="">
                        <div class="element__title">
                            <h2>Kolbenschmidt </h2>
                            <p> MS Motorservice International</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.drivparts.com/en-eu/catalogue.html" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/federal.png" alt="">
                        <div class="element__title">
                            <h2>Federal-Mogul</h2>
                            <p>Nural, Goetze, Glyco</p>
                        </div>
                    </div>
                </a>

                <a href="https://catalog.mahle-aftermarket.com/eu/?filterId=983708" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/mahle.png" alt="">
                        <div class="element__title">
                            <h2>MAHLE</h2>
                            <p>MAHLE Aftermarket</p>
                        </div>
                    </div>
                </a>

                <a href="https://partsfinder.bilsteingroup.com/ru/truck/index" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/febi.png" alt="">
                        <div class="element__title">
                            <h2>FEBI</h2>
                            <p>Детали ДВС</p>
                        </div>
                    </div>
                </a>

                <a href="https://webcat.schaeffler.com/web/schaeffler/ru_RU/index.xhtml?reset=1" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/ina.png" alt="">
                        <div class="element__title">
                            <h2>Ina</h2>
                            <p>Детали ДВС</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.garrettmotion.com/ru/turbo-replacement/aftermarket-reman-turbochargers-catalog/"
                    target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/garrett.png" alt="">
                        <div class="element__title">
                            <h2>Garrett </h2>
                            <p>Турбины</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://www.sm-original-germany.com/ru/katalogi/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/sm.png" alt="">
                        <div class="element__title">
                            <h2>SM</h2>
                            <p>SM-Original</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.marinepartseurope.com/en/default.aspx" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/penta.png" alt="">
                        <div class="element__title">
                            <h2>Volvo Penta</h2>
                            <p>Подбор по ДВС</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://www.findyourseal.com/ru/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/corteco.png" alt="">
                        <div class="element__title">
                            <h2>CORTECO</h2>
                            <p>Подбор сальников по размеру</p>
                        </div>
                    </div>
                </a>

                <a href="http://ecatcorteco.com/web/corteco/ru_RU/applicationSearch.xhtml?reset=1" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/corteco.png" alt="">
                        <div class="element__title">
                            <h2>CORTECO</h2>
                            <p>Сальники, прокладки</p>
                        </div>
                    </div>
                </a>

                <a href="https://web.tecalliance.net/elring/RU/home?targetCountry=RU&articleCountry=RU" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/elring.png" alt="">
                        <div class="element__title">
                            <h2>Elring</h2>
                            <p>Сальники, прокладки</p>
                        </div>
                    </div>
                </a>

                <a href="https://web.tecalliance.net/reinz/en/home" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/victor-reinz.png" alt="">
                        <div class="element__title">
                            <h2>VICTOR REINZ</h2>
                            <p>Сальники, прокладки</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->
        </div> <!-- /item__multi -->

        <div id="multi__tab_5" class="item__multi">
            <div class="element__wrapper">
                <a href="https://www.denso-am.ru/elektronnyi-katalog/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/denso.png" alt="">
                        <div class="element__title">
                            <h2>Denso</h2>
                            <p>Свечи, датчики</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.ngkntk.com/ua/prilozhenie-podbor-produkcii/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/ngk.png" alt="">
                        <div class="element__title">
                            <h2>NGK</h2>
                            <p>Свечи, датчики</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.drivparts.com/en-eu/catalogue.html" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/lkw/federal.png" alt="">
                        <div class="element__title">
                            <h2>Federal-Mogul</h2>
                            <p>Beru, Champion</p>
                        </div>
                    </div>
                </a>

                <a href="https://ecom.eraspares.ru/ec/Tabellone.asp?SeCook=True&login=1" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi\era.png" alt="">
                        <div class="element__title">
                            <h2>Era</h2>
                            <p>Электрооборудование, датчики</p>
                        </div>
                    </div>
                </a>

                <a href="https://hc-cargo.com/com-ru" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi\cargo.png" alt="">
                        <div class="element__title">
                            <h2>Cargo HC</h2>
                            <p>Электрооборудование, датчики</p>
                        </div>
                    </div>
                </a>

                <a href="https://ru.valeoservice.com/ru" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/valeo.png" alt="">
                        <div class="element__title">
                            <h2>Valeo</h2>
                            <p>Электрооборудование, датчики</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="http://teparts.mozello.lv/nachalo/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/teparts.png" alt="">
                        <div class="element__title">
                            <h2>TE Parts </h2>
                            <p>Электроразъемы, датчики</p>
                        </div>
                    </div>
                </a>

                <a href="https://partsfinder.bilsteingroup.com/ru/truck/index" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/febi.png" alt="">
                        <div class="element__title">
                            <h2>FEBI</h2>
                            <p>Электрооборудование</p>
                        </div>
                    </div>
                </a>

                <a href="https://catalogo.facet.eu/EN" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/Facet.png" alt="">
                        <div class="element__title">
                            <h2>Facet</h2>
                            <p>Датчики</p>
                        </div>
                    </div>
                </a>

                <a href="http://ecatalog.fae.es/en/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/fae.png" alt="">
                        <div class="element__title">
                            <h2>FAE</h2>
                            <p>Датчики</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->

            <div class="element__wrapper">
                <a href="https://www.varta-automotive.com/ru-ru/products" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/varta.png" alt="">
                        <div class="element__title">
                            <h2>VARTA</h2>
                            <p>Аккумуляторы</p>
                        </div>
                    </div>
                </a>

                <a href="http://www.autoelectrica.com.ua/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/autoelectrica.png" alt="">
                        <div class="element__title">
                            <h2>Auto Electrica</h2>
                            <p>Подбор электрокомпонентов</p>
                        </div>
                    </div>
                </a>

                <a href="https://web.tecalliance.net/hella/ru/home?sessionArticleCountry=GB&sessionTargetCountry=GB"
                    target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/hella.png" alt="">
                        <div class="element__title">
                            <h2>Hella</h2>
                            <p>Электрооборудование</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.osram.de/apps/gvlrg/en_COM" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/osram.png" alt="">
                        <div class="element__title">
                            <h2>Osram</h2>
                            <p>Лампы</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.narva-light.com/" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/multi/narva.png" alt="">
                        <div class="element__title">
                            <h2>Narva</h2>
                            <p>Лампы</p>
                        </div>
                    </div>
                </a>

                <a href="file:pdf/lighting.pdf" target="_blank">
                    <div class="element">
                        <img class="element__logo" src="images/tempest.png" alt="">
                        <div class="element__title">
                            <h2>Светотехника PL</h2>
                            <p>Decaro, Tempest, ДК</p>
                        </div>
                    </div>
                </a>
            </div> <!-- /element__wrapper -->
        </div> <!-- /item__multi -->
    </div> <!-- /multi -->

    <!-- javascript -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="app.js" type="text/javascript"></script>
</body>

</html>
