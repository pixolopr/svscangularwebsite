var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);
var adminurl = "http://localhost/svscbackend/index.php/";

phonecatControllers.controller('home', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = "OMKAR";
        $scope.navigation = NavigationService.getnav();

        TemplateService.content = "views/homecontent.html";
        console.log($scope.content);

        $scope.showmenu = function () {
            $('#mobilemenu').toggleClass('active');
            $('.menubutton span').toggleClass('active');
            $('.menubutton span:before').toggleClass('active');
            $('.menubutton span:after').toggleClass('active');
        };

        $scope.devicetest = function () {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true;
            } else {
                return false;
            };
        };

        $('#mobilemenu').addClass('animated lightSpeedIn');

       /* console.log("Abhay Amin");
        var ypos = 10;
        $(window).scroll(function () {
            ypos = window.pageYOffset;
            console.log(ypos);
            if (ypos > 100) {
                $('#mobilemenu').toggleClass('active');
            };
        });*/
  }]);


phonecatControllers.controller('about', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("About");
        TemplateService.title = $scope.menutitle;
       TemplateService.content = "views/about.html";
       
  }]);
phonecatControllers.controller('team', ['$scope', 'TemplateService', 'NavigationService', '$http',

  function ($scope, TemplateService, NavigationService, $http) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Services");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = "views/team.html";

        /*var playerdata = function (data, status) {
                console.log(data);
                $scope.playerdata = data;
                console.log($scope.playerdata[0].position);
        };
        $http.get(adminurl + "site/getplayers", {
            params: {}
        }).success(playerdata);*/
  }]);
phonecatControllers.controller('portfolio', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Portfolio");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
  }]);
phonecatControllers.controller('contact', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Contact");
        TemplateService.title = $scope.menutitle;
             TemplateService.content = "views/contact.html";
       
  }]);


phonecatControllers.controller('headerctrl', ['$scope', 'TemplateService',
 function ($scope, TemplateService) {
        $scope.template = TemplateService;
  }]);