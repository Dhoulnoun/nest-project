'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">nest-project documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AppModule-9b3ca42140b811c794fabc369d8d26fdad8440d956f6ac4018ec7255506047b5b2d73537d942020cb5550b2101763434628a92ae70525f9d0b6d3849397e809f"' : 'data-target="#xs-controllers-links-module-AppModule-9b3ca42140b811c794fabc369d8d26fdad8440d956f6ac4018ec7255506047b5b2d73537d942020cb5550b2101763434628a92ae70525f9d0b6d3849397e809f"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AppModule-9b3ca42140b811c794fabc369d8d26fdad8440d956f6ac4018ec7255506047b5b2d73537d942020cb5550b2101763434628a92ae70525f9d0b6d3849397e809f"' : 'id="xs-controllers-links-module-AppModule-9b3ca42140b811c794fabc369d8d26fdad8440d956f6ac4018ec7255506047b5b2d73537d942020cb5550b2101763434628a92ae70525f9d0b6d3849397e809f"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AppController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AppModule-9b3ca42140b811c794fabc369d8d26fdad8440d956f6ac4018ec7255506047b5b2d73537d942020cb5550b2101763434628a92ae70525f9d0b6d3849397e809f"' : 'data-target="#xs-injectables-links-module-AppModule-9b3ca42140b811c794fabc369d8d26fdad8440d956f6ac4018ec7255506047b5b2d73537d942020cb5550b2101763434628a92ae70525f9d0b6d3849397e809f"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-9b3ca42140b811c794fabc369d8d26fdad8440d956f6ac4018ec7255506047b5b2d73537d942020cb5550b2101763434628a92ae70525f9d0b6d3849397e809f"' : 'id="xs-injectables-links-module-AppModule-9b3ca42140b811c794fabc369d8d26fdad8440d956f6ac4018ec7255506047b5b2d73537d942020cb5550b2101763434628a92ae70525f9d0b6d3849397e809f"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AppService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/BankAccountsModule.html\" data-type=\"entity-link\" >BankAccountsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-BankAccountsModule-540046d166772c77864d22d90b5c9da92daa2af64fbdca0df4a8b45ff8b94b490c96bae63777a78c7d794f1a4b3a7c650d390fe29f0d53fb3f1e14b208d3da94"' : 'data-target="#xs-controllers-links-module-BankAccountsModule-540046d166772c77864d22d90b5c9da92daa2af64fbdca0df4a8b45ff8b94b490c96bae63777a78c7d794f1a4b3a7c650d390fe29f0d53fb3f1e14b208d3da94"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-BankAccountsModule-540046d166772c77864d22d90b5c9da92daa2af64fbdca0df4a8b45ff8b94b490c96bae63777a78c7d794f1a4b3a7c650d390fe29f0d53fb3f1e14b208d3da94"' : 'id="xs-controllers-links-module-BankAccountsModule-540046d166772c77864d22d90b5c9da92daa2af64fbdca0df4a8b45ff8b94b490c96bae63777a78c7d794f1a4b3a7c650d390fe29f0d53fb3f1e14b208d3da94"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/BankAccountsController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BankAccountsController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-BankAccountsModule-540046d166772c77864d22d90b5c9da92daa2af64fbdca0df4a8b45ff8b94b490c96bae63777a78c7d794f1a4b3a7c650d390fe29f0d53fb3f1e14b208d3da94"' : 'data-target="#xs-injectables-links-module-BankAccountsModule-540046d166772c77864d22d90b5c9da92daa2af64fbdca0df4a8b45ff8b94b490c96bae63777a78c7d794f1a4b3a7c650d390fe29f0d53fb3f1e14b208d3da94"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-BankAccountsModule-540046d166772c77864d22d90b5c9da92daa2af64fbdca0df4a8b45ff8b94b490c96bae63777a78c7d794f1a4b3a7c650d390fe29f0d53fb3f1e14b208d3da94"' : 'id="xs-injectables-links-module-BankAccountsModule-540046d166772c77864d22d90b5c9da92daa2af64fbdca0df4a8b45ff8b94b490c96bae63777a78c7d794f1a4b3a7c650d390fe29f0d53fb3f1e14b208d3da94"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/BankAccountsService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BankAccountsService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/BankAccountTypesModule.html\" data-type=\"entity-link\" >BankAccountTypesModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-BankAccountTypesModule-4f9156300a68da46adc70c9a0c4e28311661d5386fe8cdd9cb77b4d4fc69c7135dedc621cc1efdd7bc1e09ac2484cb10f00d7f7660b99a0bc3c6e2506a205495"' : 'data-target="#xs-controllers-links-module-BankAccountTypesModule-4f9156300a68da46adc70c9a0c4e28311661d5386fe8cdd9cb77b4d4fc69c7135dedc621cc1efdd7bc1e09ac2484cb10f00d7f7660b99a0bc3c6e2506a205495"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-BankAccountTypesModule-4f9156300a68da46adc70c9a0c4e28311661d5386fe8cdd9cb77b4d4fc69c7135dedc621cc1efdd7bc1e09ac2484cb10f00d7f7660b99a0bc3c6e2506a205495"' : 'id="xs-controllers-links-module-BankAccountTypesModule-4f9156300a68da46adc70c9a0c4e28311661d5386fe8cdd9cb77b4d4fc69c7135dedc621cc1efdd7bc1e09ac2484cb10f00d7f7660b99a0bc3c6e2506a205495"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/BankAccountTypesController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BankAccountTypesController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-BankAccountTypesModule-4f9156300a68da46adc70c9a0c4e28311661d5386fe8cdd9cb77b4d4fc69c7135dedc621cc1efdd7bc1e09ac2484cb10f00d7f7660b99a0bc3c6e2506a205495"' : 'data-target="#xs-injectables-links-module-BankAccountTypesModule-4f9156300a68da46adc70c9a0c4e28311661d5386fe8cdd9cb77b4d4fc69c7135dedc621cc1efdd7bc1e09ac2484cb10f00d7f7660b99a0bc3c6e2506a205495"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-BankAccountTypesModule-4f9156300a68da46adc70c9a0c4e28311661d5386fe8cdd9cb77b4d4fc69c7135dedc621cc1efdd7bc1e09ac2484cb10f00d7f7660b99a0bc3c6e2506a205495"' : 'id="xs-injectables-links-module-BankAccountTypesModule-4f9156300a68da46adc70c9a0c4e28311661d5386fe8cdd9cb77b4d4fc69c7135dedc621cc1efdd7bc1e09ac2484cb10f00d7f7660b99a0bc3c6e2506a205495"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/BankAccountTypesService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BankAccountTypesService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/BankEmployeesModule.html\" data-type=\"entity-link\" >BankEmployeesModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-BankEmployeesModule-b8232952a36cac5dea43799474bdd302c34fec096ba8a89ef389c28db751f0901ef1064911d42e7e1ed5771c01d68291c9fa16e7f2fecf50bb3d9f690354cbda"' : 'data-target="#xs-controllers-links-module-BankEmployeesModule-b8232952a36cac5dea43799474bdd302c34fec096ba8a89ef389c28db751f0901ef1064911d42e7e1ed5771c01d68291c9fa16e7f2fecf50bb3d9f690354cbda"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-BankEmployeesModule-b8232952a36cac5dea43799474bdd302c34fec096ba8a89ef389c28db751f0901ef1064911d42e7e1ed5771c01d68291c9fa16e7f2fecf50bb3d9f690354cbda"' : 'id="xs-controllers-links-module-BankEmployeesModule-b8232952a36cac5dea43799474bdd302c34fec096ba8a89ef389c28db751f0901ef1064911d42e7e1ed5771c01d68291c9fa16e7f2fecf50bb3d9f690354cbda"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/BankEmployeesController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BankEmployeesController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-BankEmployeesModule-b8232952a36cac5dea43799474bdd302c34fec096ba8a89ef389c28db751f0901ef1064911d42e7e1ed5771c01d68291c9fa16e7f2fecf50bb3d9f690354cbda"' : 'data-target="#xs-injectables-links-module-BankEmployeesModule-b8232952a36cac5dea43799474bdd302c34fec096ba8a89ef389c28db751f0901ef1064911d42e7e1ed5771c01d68291c9fa16e7f2fecf50bb3d9f690354cbda"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-BankEmployeesModule-b8232952a36cac5dea43799474bdd302c34fec096ba8a89ef389c28db751f0901ef1064911d42e7e1ed5771c01d68291c9fa16e7f2fecf50bb3d9f690354cbda"' : 'id="xs-injectables-links-module-BankEmployeesModule-b8232952a36cac5dea43799474bdd302c34fec096ba8a89ef389c28db751f0901ef1064911d42e7e1ed5771c01d68291c9fa16e7f2fecf50bb3d9f690354cbda"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/BankEmployeesService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BankEmployeesService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links"' : 'data-target="#xs-controllers-links"', ">\n                                <span class=\"icon ion-md-swap\"></span>\n                                <span>Controllers</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"controllers/AppController.html\" data-type=\"entity-link\" >AppController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/BankAccountsController.html\" data-type=\"entity-link\" >BankAccountsController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/BankAccountTypesController.html\" data-type=\"entity-link\" >BankAccountTypesController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/BankEmployeesController.html\" data-type=\"entity-link\" >BankEmployeesController</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#entities-links"' : 'data-target="#xs-entities-links"', ">\n                                <span class=\"icon ion-ios-apps\"></span>\n                                <span>Entities</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"entities/BankAccountEntity.html\" data-type=\"entity-link\" >BankAccountEntity</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/BankAccountTypeEntity.html\" data-type=\"entity-link\" >BankAccountTypeEntity</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/BankEmployee.html\" data-type=\"entity-link\" >BankEmployee</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/BankAccountDto.html\" data-type=\"entity-link\" >BankAccountDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/BankAccountTypeDto.html\" data-type=\"entity-link\" >BankAccountTypeDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/BankEmployeeDto.html\" data-type=\"entity-link\" >BankEmployeeDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateBankAccountDto.html\" data-type=\"entity-link\" >CreateBankAccountDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateBankAccountTypeDto.html\" data-type=\"entity-link\" >CreateBankAccountTypeDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateBankEmployeeDto.html\" data-type=\"entity-link\" >CreateBankEmployeeDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/HttpExceptionFilter.html\" data-type=\"entity-link\" >HttpExceptionFilter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateBankAccountDto.html\" data-type=\"entity-link\" >UpdateBankAccountDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateBankAccountTypeDto.html\" data-type=\"entity-link\" >UpdateBankAccountTypeDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateBankEmployeeDto.html\" data-type=\"entity-link\" >UpdateBankEmployeeDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AppService.html\" data-type=\"entity-link\" >AppService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/AuditMiddleware.html\" data-type=\"entity-link\" >AuditMiddleware</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/BankAccountsService.html\" data-type=\"entity-link\" >BankAccountsService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/BankAccountTypesService.html\" data-type=\"entity-link\" >BankAccountTypesService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/BankEmployeesService.html\" data-type=\"entity-link\" >BankEmployeesService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/BenchmarkInterceptor.html\" data-type=\"entity-link\" >BenchmarkInterceptor</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ValidationPipe.html\" data-type=\"entity-link\" >ValidationPipe</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));