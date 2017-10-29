<template>
    <div id="badges&labels&progress">
        <Breadcrumb :items="['Home|/Dashboards/DashboardV1','UI Elements','Badges, Labels, Progress']">
        </Breadcrumb>
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-6">
                    <Panel>
                        <PanelHead>
                            <h5>Badges</h5>
                        </PanelHead>
                        <PanelBody>
                            <p>
                                To add a badge style You have to add <code>.badge</code>class to element. To change a color od badge you can add extra class like <code>.badge-primary</code>.
                            </p>
                            <p>
                                <Badge>Plain</Badge>
                            </p>
                            <p>
                                <Badge color="primary">Primary</Badge>
                            </p>
                            <p>
                                <Badge color="info">Information</Badge>
                            </p>
                            <p>
                                <Badge color="success">Success</Badge>
                            </p>
                            <p>
                                <Badge color="warning">Warning</Badge>
                            </p>
                            <p>
                                <Badge color="danger">Danger</Badge>
                            </p>
                        </PanelBody>
                    </Panel>
                </div>
    
                <div class="col-lg-6">
                    <Panel>
                        <PanelHead>
                            <h5>Labels</h5>
                        </PanelHead>
                        <PanelBody>
                            <p>
                                Analogic to badge. To add a label style You have to add <code>.label</code>class to element. To change a color od label you can add extra class like <code>.label-primary</code>.
                            </p>
                            <p>
                                <Label>Plain</Label>
                            </p>
                            <p>
                                <Label color="primary">Primary</Label>
                            </p>
                            <p>
                                <Label color="info">Information</Label>
                            </p>
                            <p>
                                <Label color="success">Success</Label>
                            </p>
                            <p>
                                <Label color="warning">Warning</Label>
                            </p>
                            <p>
                                <Label color="danger">Danger</Label>
                            </p>
                        </PanelBody>
                    </Panel>
                </div>
    
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <Panel>
                        <PanelHead>
                            <h5>Progress Bars</h5>
                        </PanelHead>
                        <PanelBody>
                            <h5>Basic ProgressBars</h5>
                            <ProgressBar color="success" percent="35" label="35% Complete (success)">
                            </ProgressBar>
    
                            <ProgressBar color="success" percent="35" label="35% Complete (success)" reverse>
                            </ProgressBar>
    
                            <ProgressBar color="primary" percent="43" label="43% Complete (success)">
                            </ProgressBar>
    
                            <h5>Striped Progressbars</h5>
    
                            <ProgressBar color="warning" percent="50" label="50% Complete (success)" striped>
                            </ProgressBar>
    
                            <h5>Active Progressbars</h5>
    
                            <ProgressBar color="danger" percent="75" label="75% Complete (success)" striped active>
                            </ProgressBar>
    
                            <h5>Stacked Progressbars</h5>
    
                            <ProgressBar :data="[{'percent':30,color:'success','label':'30% Complete (success)'},{percent:20,color:'warning',label:'20% Complete (success)'},{percent:40,color:'danger',label:'40% Complete (success)'}]" striped active>
                            </ProgressBar>
    
                        </PanelBody>
                    </Panel>
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
