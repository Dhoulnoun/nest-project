'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-project documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-9b3ca42140b811c794fabc369d8d26fdad8440d956f6ac4018ec7255506047b5b2d73537d942020cb5550b2101763434628a92ae70525f9d0b6d3849397e809f"' : 'data-target="#xs-controllers-links-module-AppModule-9b3ca42140b811c794fabc369d8d26fdad8440d956f6ac4018ec7255506047b5b2d73537d942020cb5550b2101763434628a92ae70525f9d0b6d3849397e809f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-9b3ca42140b811c794fabc369d8d26fdad8440d956f6ac4018ec7255506047b5b2d73537d942020cb5550b2101763434628a92ae70525f9d0b6d3849397e809f"' :
                                            'id="xs-controllers-links-module-AppModule-9b3ca42140b811c794fabc369d8d26fdad8440d956f6ac4018ec7255506047b5b2d73537d942020cb5550b2101763434628a92ae70525f9d0b6d3849397e809f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-9b3ca42140b811c794fabc369d8d26fdad8440d956f6ac4018ec7255506047b5b2d73537d942020cb5550b2101763434628a92ae70525f9d0b6d3849397e809f"' : 'data-target="#xs-injectables-links-module-AppModule-9b3ca42140b811c794fabc369d8d26fdad8440d956f6ac4018ec7255506047b5b2d73537d942020cb5550b2101763434628a92ae70525f9d0b6d3849397e809f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9b3ca42140b811c794fabc369d8d26fdad8440d956f6ac4018ec7255506047b5b2d73537d942020cb5550b2101763434628a92ae70525f9d0b6d3849397e809f"' :
                                        'id="xs-injectables-links-module-AppModule-9b3ca42140b811c794fabc369d8d26fdad8440d956f6ac4018ec7255506047b5b2d73537d942020cb5550b2101763434628a92ae70525f9d0b6d3849397e809f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BankAccountsModule.html" data-type="entity-link" >BankAccountsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BankAccountsModule-540046d166772c77864d22d90b5c9da92daa2af64fbdca0df4a8b45ff8b94b490c96bae63777a78c7d794f1a4b3a7c650d390fe29f0d53fb3f1e14b208d3da94"' : 'data-target="#xs-controllers-links-module-BankAccountsModule-540046d166772c77864d22d90b5c9da92daa2af64fbdca0df4a8b45ff8b94b490c96bae63777a78c7d794f1a4b3a7c650d390fe29f0d53fb3f1e14b208d3da94"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BankAccountsModule-540046d166772c77864d22d90b5c9da92daa2af64fbdca0df4a8b45ff8b94b490c96bae63777a78c7d794f1a4b3a7c650d390fe29f0d53fb3f1e14b208d3da94"' :
                                            'id="xs-controllers-links-module-BankAccountsModule-540046d166772c77864d22d90b5c9da92daa2af64fbdca0df4a8b45ff8b94b490c96bae63777a78c7d794f1a4b3a7c650d390fe29f0d53fb3f1e14b208d3da94"' }>
                                            <li class="link">
                                                <a href="controllers/BankAccountsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BankAccountsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BankAccountsModule-540046d166772c77864d22d90b5c9da92daa2af64fbdca0df4a8b45ff8b94b490c96bae63777a78c7d794f1a4b3a7c650d390fe29f0d53fb3f1e14b208d3da94"' : 'data-target="#xs-injectables-links-module-BankAccountsModule-540046d166772c77864d22d90b5c9da92daa2af64fbdca0df4a8b45ff8b94b490c96bae63777a78c7d794f1a4b3a7c650d390fe29f0d53fb3f1e14b208d3da94"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BankAccountsModule-540046d166772c77864d22d90b5c9da92daa2af64fbdca0df4a8b45ff8b94b490c96bae63777a78c7d794f1a4b3a7c650d390fe29f0d53fb3f1e14b208d3da94"' :
                                        'id="xs-injectables-links-module-BankAccountsModule-540046d166772c77864d22d90b5c9da92daa2af64fbdca0df4a8b45ff8b94b490c96bae63777a78c7d794f1a4b3a7c650d390fe29f0d53fb3f1e14b208d3da94"' }>
                                        <li class="link">
                                            <a href="injectables/BankAccountsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BankAccountsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BankAccountTypesModule.html" data-type="entity-link" >BankAccountTypesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BankAccountTypesModule-4f9156300a68da46adc70c9a0c4e28311661d5386fe8cdd9cb77b4d4fc69c7135dedc621cc1efdd7bc1e09ac2484cb10f00d7f7660b99a0bc3c6e2506a205495"' : 'data-target="#xs-controllers-links-module-BankAccountTypesModule-4f9156300a68da46adc70c9a0c4e28311661d5386fe8cdd9cb77b4d4fc69c7135dedc621cc1efdd7bc1e09ac2484cb10f00d7f7660b99a0bc3c6e2506a205495"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BankAccountTypesModule-4f9156300a68da46adc70c9a0c4e28311661d5386fe8cdd9cb77b4d4fc69c7135dedc621cc1efdd7bc1e09ac2484cb10f00d7f7660b99a0bc3c6e2506a205495"' :
                                            'id="xs-controllers-links-module-BankAccountTypesModule-4f9156300a68da46adc70c9a0c4e28311661d5386fe8cdd9cb77b4d4fc69c7135dedc621cc1efdd7bc1e09ac2484cb10f00d7f7660b99a0bc3c6e2506a205495"' }>
                                            <li class="link">
                                                <a href="controllers/BankAccountTypesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BankAccountTypesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BankAccountTypesModule-4f9156300a68da46adc70c9a0c4e28311661d5386fe8cdd9cb77b4d4fc69c7135dedc621cc1efdd7bc1e09ac2484cb10f00d7f7660b99a0bc3c6e2506a205495"' : 'data-target="#xs-injectables-links-module-BankAccountTypesModule-4f9156300a68da46adc70c9a0c4e28311661d5386fe8cdd9cb77b4d4fc69c7135dedc621cc1efdd7bc1e09ac2484cb10f00d7f7660b99a0bc3c6e2506a205495"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BankAccountTypesModule-4f9156300a68da46adc70c9a0c4e28311661d5386fe8cdd9cb77b4d4fc69c7135dedc621cc1efdd7bc1e09ac2484cb10f00d7f7660b99a0bc3c6e2506a205495"' :
                                        'id="xs-injectables-links-module-BankAccountTypesModule-4f9156300a68da46adc70c9a0c4e28311661d5386fe8cdd9cb77b4d4fc69c7135dedc621cc1efdd7bc1e09ac2484cb10f00d7f7660b99a0bc3c6e2506a205495"' }>
                                        <li class="link">
                                            <a href="injectables/BankAccountTypesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BankAccountTypesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BankEmployeesModule.html" data-type="entity-link" >BankEmployeesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BankEmployeesModule-b8232952a36cac5dea43799474bdd302c34fec096ba8a89ef389c28db751f0901ef1064911d42e7e1ed5771c01d68291c9fa16e7f2fecf50bb3d9f690354cbda"' : 'data-target="#xs-controllers-links-module-BankEmployeesModule-b8232952a36cac5dea43799474bdd302c34fec096ba8a89ef389c28db751f0901ef1064911d42e7e1ed5771c01d68291c9fa16e7f2fecf50bb3d9f690354cbda"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BankEmployeesModule-b8232952a36cac5dea43799474bdd302c34fec096ba8a89ef389c28db751f0901ef1064911d42e7e1ed5771c01d68291c9fa16e7f2fecf50bb3d9f690354cbda"' :
                                            'id="xs-controllers-links-module-BankEmployeesModule-b8232952a36cac5dea43799474bdd302c34fec096ba8a89ef389c28db751f0901ef1064911d42e7e1ed5771c01d68291c9fa16e7f2fecf50bb3d9f690354cbda"' }>
                                            <li class="link">
                                                <a href="controllers/BankEmployeesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BankEmployeesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BankEmployeesModule-b8232952a36cac5dea43799474bdd302c34fec096ba8a89ef389c28db751f0901ef1064911d42e7e1ed5771c01d68291c9fa16e7f2fecf50bb3d9f690354cbda"' : 'data-target="#xs-injectables-links-module-BankEmployeesModule-b8232952a36cac5dea43799474bdd302c34fec096ba8a89ef389c28db751f0901ef1064911d42e7e1ed5771c01d68291c9fa16e7f2fecf50bb3d9f690354cbda"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BankEmployeesModule-b8232952a36cac5dea43799474bdd302c34fec096ba8a89ef389c28db751f0901ef1064911d42e7e1ed5771c01d68291c9fa16e7f2fecf50bb3d9f690354cbda"' :
                                        'id="xs-injectables-links-module-BankEmployeesModule-b8232952a36cac5dea43799474bdd302c34fec096ba8a89ef389c28db751f0901ef1064911d42e7e1ed5771c01d68291c9fa16e7f2fecf50bb3d9f690354cbda"' }>
                                        <li class="link">
                                            <a href="injectables/BankEmployeesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BankEmployeesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BankAccountsController.html" data-type="entity-link" >BankAccountsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BankAccountTypesController.html" data-type="entity-link" >BankAccountTypesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BankEmployeesController.html" data-type="entity-link" >BankEmployeesController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/BankAccountEntity.html" data-type="entity-link" >BankAccountEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/BankAccountTypeEntity.html" data-type="entity-link" >BankAccountTypeEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/BankEmployee.html" data-type="entity-link" >BankEmployee</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BankAccountDto.html" data-type="entity-link" >BankAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BankAccountTypeDto.html" data-type="entity-link" >BankAccountTypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BankEmployeeDto.html" data-type="entity-link" >BankEmployeeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBankAccountDto.html" data-type="entity-link" >CreateBankAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBankAccountTypeDto.html" data-type="entity-link" >CreateBankAccountTypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBankEmployeeDto.html" data-type="entity-link" >CreateBankEmployeeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBankAccountDto.html" data-type="entity-link" >UpdateBankAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBankAccountTypeDto.html" data-type="entity-link" >UpdateBankAccountTypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBankEmployeeDto.html" data-type="entity-link" >UpdateBankEmployeeDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuditMiddleware.html" data-type="entity-link" >AuditMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BankAccountsService.html" data-type="entity-link" >BankAccountsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BankAccountTypesService.html" data-type="entity-link" >BankAccountTypesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BankEmployeesService.html" data-type="entity-link" >BankEmployeesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BenchmarkInterceptor.html" data-type="entity-link" >BenchmarkInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationPipe.html" data-type="entity-link" >ValidationPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});