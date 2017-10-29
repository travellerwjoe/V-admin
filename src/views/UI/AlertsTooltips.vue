<template>
    <div id="alerts&tooltips">
        <Breadcrumb :items="['Home|/Dashboards/DashboardV1','UI Elements','Alerts, Tooltips']">
        </Breadcrumb>
        <div class="wrapper wrapper-content animated fadeIn">
            <div class="row">
                <div class="col-lg-6">
                    <Panel>
                        <PanelHead>
                            <h5>Alerts Styles</h5>                            
                        </PanelHead>
                        <PanelBody>
                            <Alert color="success">
                                How quickly daft jumping zebras vex. <AlertLink>Alert Link</AlertLink>.
                            </Alert>
                            <Alert color="info">
                                How quickly daft jumping zebras vex. <AlertLink>Alert Link</AlertLink>.
                            </Alert>
                            <Alert color="warning">
                                How quickly daft jumping zebras vex. <AlertLink>Alert Link</AlertLink>.
                            </Alert>
                            <Alert color="danger">
                                How quickly daft jumping zebras vex. <AlertLink>Alert Link</AlertLink>.
                            </Alert>
                        </PanelBody>
                    </Panel>
                </div>
                <div class="col-lg-6">
                    <Panel>
                        <PanelHead>
                            <h5>Dismissable Alerts</h5>                                                   
                        </PanelHead>
                        <PanelBody>
                            <Alert color="success" close>
                                How quickly daft jumping zebras vex. <AlertLink>Alert Link</AlertLink>.
                            </Alert>
                            <Alert color="info" close>
                                How quickly daft jumping zebras vex. <AlertLink>Alert Link</AlertLink>.
                            </Alert>
                            <Alert color="warning" close>
                                How quickly daft jumping zebras vex. <AlertLink>Alert Link</AlertLink>.
                            </Alert>
                            <Alert color="danger" close>
                                How quickly daft jumping zebras vex. <AlertLink>Alert Link</AlertLink>.
                            </Alert>
                        </PanelBody>
                    </Panel>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <Panel>
                        <PanelHead>
                            <h5>Tooltips and Popovers</h5>                            
                        </PanelHead>
                        <PanelBody class="text-center">
                            <h4>Tooltip Demo <small>Background color more gentle.</small></h4>
                            <div class="tooltip-demo">
                                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="" data-original-title="Tooltip on left">Tooltip on left</button>
                                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top">Tooltip on top</button>
                                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
                                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
                            </div>
                            <br>
                            <h4>Clickable Popover Demo</h4>
                            <div class="tooltip-demo text-center">
                                <button type="button" class="btn btn-primary" data-toggle="popover" data-placement="auto left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="" aria-describedby="popover514234">
                                    Popover on left
                                </button>
                                <div class="popover fade left in" role="tooltip" id="popover514234" style="top: 167px; left: 48.3125px; display: block;">
                                    <div class="arrow" style="top: 50%;"></div>
                                    <h3 class="popover-title" style="display: none;"></h3>
                                    <div class="popover-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div>
                                </div>
                                <button type="button" class="btn btn-primary" data-toggle="popover" data-placement="auto top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="" aria-describedby="popover634934">
                                    Popover on top
                                </button>
                                <div class="popover fade top in" role="tooltip" id="popover634934" style="top: 119px; left: 379px; display: block;">
                                    <div class="arrow" style="left: 50%;"></div>
                                    <h3 class="popover-title" style="display: none;"></h3>
                                    <div class="popover-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div>
                                </div>
                                <button type="button" class="btn btn-primary" data-toggle="popover" data-placement="auto bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="" aria-describedby="popover320995">
                                    Popover on bottom
                                </button>
                                <div class="popover fade top in" role="tooltip" id="popover320995" style="top: 119px; left: 522.398px; display: block;">
                                    <div class="arrow" style="left: 50%;"></div>
                                    <h3 class="popover-title" style="display: none;"></h3>
                                    <div class="popover-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div>
                                </div>
                                <button type="button" class="btn btn-primary" data-toggle="popover" data-placement="auto right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="" aria-describedby="popover229436">
                                    Popover on right
                                </button>
                                <div class="popover fade right in" role="tooltip" id="popover229436" style="top: 167px; left: 875.688px; display: block;">
                                    <div class="arrow" style="top: 50%;"></div>
                                    <h3 class="popover-title" style="display: none;"></h3>
                                    <div class="popover-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div>
                                </div>
                            </div>
                        </PanelBody>
                    </Panel>
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>Tooltips and Popovers</h5>
                            <div class="ibox-tools">
                                <a class="collapse-link">
                                    <i class="fa fa-chevron-up"></i>
                                </a>
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i class="fa fa-wrench"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-user">
                                    <li><a href="#">Config option 1</a>
                                    </li>
                                    <li><a href="#">Config option 2</a>
                                    </li>
                                </ul>
                                <a class="close-link">
                                    <i class="fa fa-times"></i>
                                </a>
                            </div>
                        </div>
                        <div class="ibox-content text-center">
                            <h4>Tooltip Demo <small>Background color more gentle.</small></h4>
                            <div class="tooltip-demo">
                                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="" data-original-title="Tooltip on left">Tooltip on left</button>
                                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top">Tooltip on top</button>
                                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
                                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
                            </div>
                            <br>
                            <h4>Clickable Popover Demo</h4>
                            <div class="tooltip-demo text-center">
                                <button type="button" class="btn btn-primary" data-toggle="popover" data-placement="auto left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="" aria-describedby="popover514234">
                                    Popover on left
                                </button>
                                <div class="popover fade left in" role="tooltip" id="popover514234" style="top: 167px; left: 48.3125px; display: block;">
                                    <div class="arrow" style="top: 50%;"></div>
                                    <h3 class="popover-title" style="display: none;"></h3>
                                    <div class="popover-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div>
                                </div>
                                <button type="button" class="btn btn-primary" data-toggle="popover" data-placement="auto top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="" aria-describedby="popover634934">
                                    Popover on top
                                </button>
                                <div class="popover fade top in" role="tooltip" id="popover634934" style="top: 119px; left: 379px; display: block;">
                                    <div class="arrow" style="left: 50%;"></div>
                                    <h3 class="popover-title" style="display: none;"></h3>
                                    <div class="popover-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div>
                                </div>
                                <button type="button" class="btn btn-primary" data-toggle="popover" data-placement="auto bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="" aria-describedby="popover320995">
                                    Popover on bottom
                                </button>
                                <div class="popover fade top in" role="tooltip" id="popover320995" style="top: 119px; left: 522.398px; display: block;">
                                    <div class="arrow" style="left: 50%;"></div>
                                    <h3 class="popover-title" style="display: none;"></h3>
                                    <div class="popover-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div>
                                </div>
                                <button type="button" class="btn btn-primary" data-toggle="popover" data-placement="auto right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="" aria-describedby="popover229436">
                                    Popover on right
                                </button>
                                <div class="popover fade right in" role="tooltip" id="popover229436" style="top: 167px; left: 875.688px; display: block;">
                                    <div class="arrow" style="top: 50%;"></div>
                                    <h3 class="popover-title" style="display: none;"></h3>
                                    <div class="popover-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div>
                                </div>
                            </div>
                        </div>
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
