<template>
    <div id="panels">
        <Breadcrumb :items="['Home|/Dashboards/DashboardV1','UI Elements','Tabs']">
        </Breadcrumb>
        <div class="wrapper wrapper-content animated fadeIn">
            <div class="row">
                <div class="col-lg-12">
                    <Panel>
                        <PanelHead>
                            <h5>Basic IN+ Panel
                                <small class="m-l-sm">This is custom panel</small>
                            </h5>
                        </PanelHead>
                        <PanelBody>
                            <h2>
                                This is standard IN+ Panel
                                <br/>
                            </h2>
                            <p>
                                <strong>Lorem ipsum dolor</strong>
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
                            <p>
                                <small>
                                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                                </small>
                            </p>
                        </PanelBody>
                        <PanelFoot>
                            <span class="pull-right">
                                The righ side of the footer
                            </span>
                            This is simple footer example
                        </PanelFoot>
                    </Panel>
                </div>
                <div class="col-lg-12">
                    <Panel collapsed>
                        <PanelHead>
                            <h5>Example of initial collapsed panel</h5>
                        </PanelHead>
                        <PanelBody>
                            <p>
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
                            <p>
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                            </p>
                        </PanelBody>
                    </Panel>
                </div>
                <div class="col-lg-12">
                    <Panel>
                        <PanelHead fullscreen>
                            <h5>Example with fullscreen option</h5>
                        </PanelHead>
                        <PanelBody>
                            <p>
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
                            <p>
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                            </p>
                        </PanelBody>
                    </Panel>
                </div>
                <div class="col-lg-12">
                    <Panel>
                        <PanelHead>
                            <h5>Example of constant height with scroll</h5>
                        </PanelHead>
                        <PanelBody scroll="100">
                            <p>
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                            </p>

                            <p>
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                            </p>
                            <p>
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                            </p>
                            <p>
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                            </p>
                        </PanelBody>
                    </Panel>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <Panel>
                        <PanelHead noTools>
                            <h5>Bootstrap Panels
                                <small>Custom background colors.</small>
                            </h5>
                        </PanelHead>
                        <PanelBody>
                            <div class="row">
                                <div class="col-lg-4">
                                    <BootstrapPanel>
                                        <div slot="head">Default Panel</div>
                                        <p slot="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                    </BootstrapPanel>
                                </div>
                                <div class="col-lg-4">
                                    <BootstrapPanel color="primary">
                                        <div slot="head">Primary Panel</div>
                                        <p slot="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                    </BootstrapPanel>
                                </div>
                                <div class="col-lg-4">
                                    <BootstrapPanel color="success">
                                        <div slot="head">Success Panel</div>
                                        <p slot="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                    </BootstrapPanel>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <BootstrapPanel color="info">
                                        <div slot="head">
                                            <i class="fa fa-info-circle"></i>
                                            Info Panel
                                        </div>
                                        <p slot="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                    </BootstrapPanel>
                                </div>
                                <div class="col-lg-4">
                                    <BootstrapPanel color="warning">
                                        <div slot="head">
                                            <i class="fa fa-warning"></i>
                                            Warning Panel
                                        </div>
                                        <p slot="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                    </BootstrapPanel>
                                </div>
                                <div class="col-lg-4">
                                    <BootstrapPanel color="danger">
                                        <div slot="head">
                                            Danger Panel with Footer
                                        </div>
                                        <p slot="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                        <div slot="foot">Panel Footer</div>
                                    </BootstrapPanel>
                                </div>
                            </div>
                        </PanelBody>
                    </Panel>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <Panel>
                        <PanelHead>
                            <h5>Collaps panels</h5>
                        </PanelHead>
                        <PanelBody>
                            <BootstrapPanelGroup>
                                <BootstrapPanel>
                                    <a slot="title" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Collapsible Group Item #1</a>
                                    <div slot="body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                </BootstrapPanel>
                                <BootstrapPanel collapsed>
                                    <a slot="title" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Collapsible Group Item #2</a>
                                    <div slot="body" id="collapseTwo">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                </BootstrapPanel>
                                <BootstrapPanel collapsed>
                                    <a slot="title" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Collapsible Group Item #3</a>
                                    <div slot="body" id="sollapseThree">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                </BootstrapPanel>
                            </BootstrapPanelGroup>
                        </PanelBody>
                    </Panel>
                </div>
                <div class="col-lg-6">
                    <div class="jumbotron">
                        <h1>Jumbotron</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>
                            <a role="button" class="btn btn-primary btn-lg">Learn more</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">

</style>
<script>
export default {
    
}
</script>
