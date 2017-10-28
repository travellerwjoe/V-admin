<template>
    <div id="buttons">
        <Breadcrumb :items="['Home|/Dashboards/DashboardV1','UI Elements','Buttons']">
        </Breadcrumb>
        <div class="row wrapper wrapper-content animated fadeInRight">
            <div class="col-lg-4">
                <Panel>
                    <PanelHead>
                        <h5>Colors buttons</h5>
                    </PanelHead>
                    <PanelBody>
                        <p>
                            Use any of the available button classes to quickly create a styled button.
                        </p>

                        <h3 class="font-bold">
                            Normal buttons
                        </h3>
                        <p>
                            <Button wm>Default</Button>
                            <Button color="primary" wm>Primary</Button>
                            <Button color="success" wm>Success</Button>
                            <Button color="info" wm>Info</Button>
                            <Button color="warning" wm>Warning</Button>
                            <Button color="danger" wm>Danger</Button>
                            <Button color="link" wm>Link</Button>
                        </p>
                    </PanelBody>
                </Panel>
            </div>
            <div class="col-lg-4">
                <Panel>
                    <PanelHead>
                        <h5>Diferent size</h5>
                    </PanelHead>
                    <PanelBody>
                        <p>
                            If You want larger or smaller buttons You can add
                            <code>.btn-lg</code>,
                            <code>.btn-sm</code>, or
                            <code>.btn-xs</code> class.
                        </p>
                        <h3 class="font-bold">Button Sizes</h3>
                        <p>
                            <Button color="primary" size="lg">Large button</Button>
                            <Button color="default" size="lg">Large button</Button>
                            <br/>
                            <Button color="primary">Default button</Button>
                            <Button>Default button</Button>
                            <br/>
                            <Button color="primary" size="sm">Small button</Button>
                            <Button size="sm">Small button</Button>
                            <br/>
                            <Button color="primary" size="xs">Mini button</Button>
                            <Button size="xs">Mini button</Button>
                        </p>
                    </PanelBody>
                </Panel>
            </div>
            <div class="col-lg-4">
                <Panel>
                    <PanelHead>
                        <h5>Outline and Block Buttons</h5>
                    </PanelHead>
                    <PanelBody>
                        <p>
                            Create block level buttons or outline buttons, by adding
                            <code>.btn-block</code> or
                            <code>.btn-outline</code>.
                        </p>

                        <h3 class="font-bold">Outline buttons</h3>
                        <p>
                            <Button outline>Default</Button>
                            <Button color="primary" outline>Primary</Button>
                            <Button color="success" outline>Success</Button>
                            <Button color="info" outline>Info</Button>
                            <Button color="warning" outline>Warning</Button>
                            <Button color="danger" outline>Danger</Button>
                            <Button color="link" outline>Link</Button>
                        </p>
                        <h3 class="font-bold">Block buttons</h3>
                        <p>
                            <Button color="primary" outline block>Primary</Button>
                        </p>
                    </PanelBody>
                </Panel>
            </div>
            <div class="col-lg-12">
                <Panel>
                    <PanelHead>
                        <h5>3D Buttons</h5>
                    </PanelHead>
                    <PanelBody>
                        <p>
                            To add three diminsion to buttons You can add
                            <code>.dim</code> class to button.
                        </p>
                        <h3 class="font-bold">Three diminsion button</h3>
                        <Button color="primary" icon="fa-money" 3DLarge></Button>
                        <Button color="warning" icon="fa-warning" 3DLarge></Button>
                        <Button color="danger" icon="fa-heart" 3DLarge></Button>
                        <Button color="primary" icon="fa-dollar" 3DLarge>6</Button>
                        <Button color="primary" icon="fa-ruble" outline 3DLarge></Button>
                        <Button color="primary" icon="fa-money" 3D></Button>
                        <Button color="warning" icon="fa-warning" 3D></Button>
                        <Button color="primary" icon="fa-check" 3D></Button>
                        <Button color="success" icon="fa-upload" 3D></Button>
                        <Button color="info" icon="fa-paste" 3D></Button>
                        <Button color="warning" icon="fa-warning" 3D></Button>
                        <Button icon="fa-star" 3D></Button>
                        <Button color="danger" icon="fa-heart" 3D></Button>

                        <Button color="primary" icon="fa-money" outline 3D></Button>
                        <Button color="warning" icon="fa-warning" outline 3D></Button>
                        <Button color="primary" icon="fa-check" outline 3D></Button>
                        <Button color="success" icon="fa-upload" outline 3D></Button>
                        <Button color="info" icon="fa-paste" outline 3D></Button>
                        <Button color="warning" icon="fa-warning" outline 3D></Button>
                        <Button color="danger" icon="fa-heart" outline 3D></Button>
                    </PanelBody>
                </Panel>
            </div>
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-6">
                        <Panel>
                            <PanelHead>
                                <h5>Button dropdowns</h5>
                            </PanelHead>
                            <PanelBody>
                                <p>
                                    Droppdowns buttons are avalible with any color and any size.
                                </p>

                                <h3 class="font-bold">Dropdowns</h3>
                                <DropDown color="primary" button>
                                    <DropDownItem>Action</DropDownItem>
                                    <DropDownItem>
                                        <span class="font-bold">
                                            Another action
                                        </span>
                                    </DropDownItem>
                                    <DropDownItem>Something else here</DropDownItem>
                                    <DropDownDivider></DropDownDivider>
                                    <DropDownItem>Separated link</DropDownItem>
                                </DropDown>

                                <DropDown color="warning" button>
                                    <DropDownItem>Action</DropDownItem>
                                    <DropDownItem>
                                        <span class="font-bold">
                                            Another action
                                        </span>
                                    </DropDownItem>
                                    <DropDownItem>Something else here</DropDownItem>
                                    <DropDownDivider></DropDownDivider>
                                    <DropDownItem>Separated link</DropDownItem>
                                </DropDown>

                                <DropDown button>
                                    <DropDownItem>Action</DropDownItem>
                                    <DropDownItem>
                                        <span class="font-bold">
                                            Another action
                                        </span>
                                    </DropDownItem>
                                    <DropDownItem>Something else here</DropDownItem>
                                    <DropDownDivider></DropDownDivider>
                                    <DropDownItem>Separated link</DropDownItem>
                                </DropDown>

                                <br/>

                                <DropDown color="primary" size="sm" button>
                                    <DropDownItem>Action</DropDownItem>
                                    <DropDownItem>
                                        <span class="font-bold">
                                            Another action
                                        </span>
                                    </DropDownItem>
                                    <DropDownItem>Something else here</DropDownItem>
                                    <DropDownDivider></DropDownDivider>
                                    <DropDownItem>Separated link</DropDownItem>
                                </DropDown>

                                <DropDown color="warning" size="sm" button>
                                    <DropDownItem>Action</DropDownItem>
                                    <DropDownItem>
                                        <span class="font-bold">
                                            Another action
                                        </span>
                                    </DropDownItem>
                                    <DropDownItem>Something else here</DropDownItem>
                                    <DropDownDivider></DropDownDivider>
                                    <DropDownItem>Separated link</DropDownItem>
                                </DropDown>

                                <DropDown size="sm" button>
                                    <DropDownItem>Action</DropDownItem>
                                    <DropDownItem>
                                        <span class="font-bold">
                                            Another action
                                        </span>
                                    </DropDownItem>
                                    <DropDownItem>Something else here</DropDownItem>
                                    <DropDownDivider></DropDownDivider>
                                    <DropDownItem>Separated link</DropDownItem>
                                </DropDown>

                                <br/>
                                <DropDown color="primary" size="xs" button>
                                    <DropDownItem>Action</DropDownItem>
                                    <DropDownItem>
                                        <span class="font-bold">
                                            Another action
                                        </span>
                                    </DropDownItem>
                                    <DropDownItem>Something else here</DropDownItem>
                                    <DropDownDivider></DropDownDivider>
                                    <DropDownItem>Separated link</DropDownItem>
                                </DropDown>

                                <DropDown color="warning" size="xs" button>
                                    <DropDownItem>Action</DropDownItem>
                                    <DropDownItem>
                                        <span class="font-bold">
                                            Another action
                                        </span>
                                    </DropDownItem>
                                    <DropDownItem>Something else here</DropDownItem>
                                    <DropDownDivider></DropDownDivider>
                                    <DropDownItem>Separated link</DropDownItem>
                                </DropDown>

                                <DropDown size="xs" button>
                                    <DropDownItem>Action</DropDownItem>
                                    <DropDownItem>
                                        <span class="font-bold">
                                            Another action
                                        </span>
                                    </DropDownItem>
                                    <DropDownItem>Something else here</DropDownItem>
                                    <DropDownDivider></DropDownDivider>
                                    <DropDownItem>Separated link</DropDownItem>
                                </DropDown>
                            </PanelBody>
                        </Panel>
                    </div>
                    <div class="col-lg-6">
                        <Panel>
                            <PanelHead>
                                <h5>Grouped Buttons</h5>
                            </PanelHead>
                            <PanelBody>
                                <p>
                                    This is a group of buttons, ideal for sytuation where many actions are related to same element.
                                </p>

                                <h3 class="font-bold">Button Group</h3>
                                <ButtonGroup>
                                    <Button color="white">Left</Button>
                                    <Button color="primary">Middle</Button>
                                    <Button color="white">Right</Button>
                                </ButtonGroup>
                                <br/>
                                <br/>
                                <ButtonGroup>
                                    <Button color="white">
                                        <i class="fa fa-chevron-left"></i>
                                    </Button>
                                    <Button color="white">1</Button>
                                    <Button color="white" active>2</Button>
                                    <Button color="white">3</Button>
                                    <Button color="white">4</Button>
                                    <Button color="white">
                                        <i class="fa fa-chevron-right"></i>
                                    </Button>
                                </ButtonGroup>
                            </PanelBody>
                        </Panel>
                    </div>
                </div>
                <Panel>
                    <PanelHead>
                        <h5>Icon Buttons</h5>
                    </PanelHead>
                    <PanelBody>
                        <p>
                            To buttons with any color or any size you can add extra icon on the left or the right side.
                        </p>

                        <h3 class="font-bold">Commom Icon Buttons</h3>
                        <p>
                            <Button color="primary" icon="fa-check">Submit</Button>
                            <Button color="success" icon="fa-upload">Upload</Button>
                            <Button color="info" icon="fa-paste">Edit</Button>
                            <Button color="warning" icon="fa-warning">
                                <span class="bold">Warning</span>
                            </Button>
                            <Button icon="fa-map-marker">Map</Button>
                            <Button color="success" icon="fa-facebook">Sign in with Facebook</Button>
                            <Button color="success" icon="fa-facebook" outline>Sign in with Facebook</Button>
                            <Button color="white" icon="fa-user-md"></Button>
                            <Button color="white" icon="fa-group"></Button>
                            <Button color="white" icon="fa-wrench"></Button>
                            <Button color="white" icon="fa-exchange"></Button>
                            <Button color="white" icon="fa-check-circle-o"></Button>
                            <Button color="white" icon="fa-road"></Button>
                            <Button color="white" icon="fa-ambulance"></Button>
                            <Button color="white" icon="fa-ambulance"></Button>
                            <Button color="white" icon="fa-star"></Button>
                        </p>

                        <h3 class="font-bold">Toggle buttons Variations</h3>
                        <p>Button groups can act as a radio or a switch or even a single toggle. Below are some examples click to see what happens</p>
                        <Button color="primary" outline single>Single Toggle</Button>
                        <Button color="primary" single>Single Toggle</Button>

                        <ButtonGroup multiple>
                            <Button color="primary" icon="fa-bold" active>Bold</Button>
                            <Button color="primary" icon="fa-underline">Underline</Button>
                            <Button color="primary" icon="fa-italic">Italic</Button>
                        </ButtonGroup>
                    </PanelBody>
                </Panel>
            </div>
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-6">
                        <Panel>
                            <PanelHead>
                                <h5>Circle Icon Buttons</h5>
                            </PanelHead>
                            <PanelBody>
                                <p>
                                    For buttons you can add
                                    <code>.btn-circle</code> to rounded buttons and make it circle.
                                </p>

                                <h3 class="font-bold">Circle buttons</h3>
                                <br/>
                                <Button icon="fa-check" circle></Button>
                                <Button color="primary" icon="fa-list" circle></Button>
                                <Button color="success" icon="fa-link" circle></Button>
                                <Button color="info" icon="fa-check" circle></Button>
                                <Button color="warning" icon="fa-times" circle></Button>
                                <Button color="danger" icon="fa-heart" circle></Button>
                                <Button color="danger" icon="fa-heart" outline circle></Button>

                                <br/>
                                <br/>
                                <Button icon="fa-check" size="lg" circle></Button>
                                <Button color="primary" icon="fa-list" size="lg" circle></Button>
                                <Button color="success" icon="fa-link" size="lg" circle></Button>
                                <Button color="info" icon="fa-check" size="lg" circle></Button>
                                <Button color="warning" icon="fa-times" size="lg" circle></Button>
                                <Button color="danger" icon="fa-heart" size="lg" circle></Button>
                                <Button color="danger" icon="fa-heart" size="lg" outline circle></Button>
                            </PanelBody>
                        </Panel>
                    </div>
                    <div class="col-lg-6">
                        <Panel>
                            <PanelHead>
                                <h5>Rounded Buttons</h5>
                            </PanelHead>
                            <PanelBody>
                                <p>
                                    You can also add
                                    <code>.btn-rounded</code> class to round buttons.
                                </p>

                                <h3 class="font-bold">Button Group</h3>
                                <p>
                                    <Button rounded>Default</Button>
                                    <Button color="primary" rounded>Default</Button>
                                    <Button color="success" rounded>Success</Button>
                                    <Button color="info" rounded>Info</Button>
                                    <Button color="warning" rounded>Warning</Button>
                                    <Button color="danger" rounded>Danger</Button>
                                    <Button color="danger" outline rounded>Danger</Button>

                                    <br/>
                                    <br/>
                                    <Button color="primary" icon="fa-info-circle" block rounded>Block rounded with icon button</Button>

                                </p>
                            </PanelBody>
                        </Panel>
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
