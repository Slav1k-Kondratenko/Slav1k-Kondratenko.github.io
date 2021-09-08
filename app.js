window.addEventListener('DOMContentLoaded', () => {
    const tabsBtn = document.querySelectorAll(".tabs__btn"),
        tabsItems = document.querySelectorAll(".main"),
        tabsBtnMain = document.querySelectorAll(".tabs__btn-main"),
        tabsItemsMain = document.querySelectorAll(".item__main"),
        tabsBtnLkw = document.querySelectorAll(".tabs__btn-lkw"),
        tabsItemsLkw = document.querySelectorAll(".item__lkw"),
        tabsBtnPkw = document.querySelectorAll(".tabs__btn-pkw"),
        tabsItemsPkw = document.querySelectorAll(".item__pkw"),
        tabsBtnMulti = document.querySelectorAll(".tabs__btn-multi"),
        tabsItemsMulti = document.querySelectorAll(".item__multi"),
        tabsBtnBrake = document.querySelectorAll(".brake__btn"),
        tabsItemsBrake = document.querySelectorAll(".brake__item"),
        modelBtn = document.querySelectorAll(".model__item"),
        modelItems = document.querySelectorAll(".car__data-engine"),
        modelList = document.querySelectorAll('.car__brand'),
        modelListItems = document.querySelectorAll('.model__list');

    // TabClick
    tabClick(tabsBtn, tabsItems);
    tabClick(tabsBtnMain, tabsItemsMain);
    tabClick(tabsBtnLkw, tabsItemsLkw);
    tabClick(tabsBtnPkw, tabsItemsPkw);
    tabClick(tabsBtnMulti, tabsItemsMulti);
    tabClick(tabsBtnBrake, tabsItemsBrake);
    tabClick(modelBtn, modelItems);

    function tabClick(tabs, items) {
        tabs.forEach(item => {
            item.addEventListener('click', () => {
                let currentBtn = item,
                    tabId = currentBtn.getAttribute("data-tab"),
                    currentTab = document.querySelector(tabId);
                if (!currentBtn.classList.contains('active')) {
                    tabs.forEach(item => {
                        item.classList.remove('active');
                    });

                    items.forEach(item => {
                        item.classList.remove('active');
                    });

                    currentBtn.classList.add('active');
                    currentTab.classList.add('active');
                }
            });
        });
    }

    // Timer
    function deadLine() {
        const setDeadLine = new Date();
        setDeadLine.setHours(17, 59, 59);
        return setDeadLine;
    }

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timerInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timerInterval);
                hours.innerHTML = getZero('0');
                minutes.innerHTML = getZero('0');
                seconds.innerHTML = getZero('0');
                alert('OO');
            }
        }
    }

    setClock('.timer', deadLine());

    // tabToggle(modelList, modelListItems);

    // function tabToggle(tabs, items) {
    //     tabs.forEach(item => {
    //         item.addEventListener('click', () => {
    //             let currentBtn = item,
    //                 tabId = currentBtn.getAttribute("data-collapse"),
    //                 currentTab = document.querySelector(tabId);

    //             currentBtn.classList.toggle('active');
    //             currentTab.classList.toggle('active');
    //     });
    // }

    // model list
    $(function () {
        $("[data-collapse]").on("click", function (event) {
            event.preventDefault();

            var $this = $(this),
                blockId = $this.data('collapse'),
                currentTab = document.querySelector(blockId);

            $this.toggleClass("active");
            $(currentTab).slideToggle("active");
        });
    });
});