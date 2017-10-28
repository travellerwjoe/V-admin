<template>
    <div id="typography">
        <Breadcrumb :items="['Home|/Dashboards/DashboardV1','UI Elements','Typography']">
        </Breadcrumb>
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-6">
                    <Panel>
                        <PanelHead>
                            <h5>Headings</h5>
                        </PanelHead>
                        <PanelBody>
                            <h1>Heading 1
                                <small>Sub-heading</small>
                            </h1>
                            <h2>Heading 2
                                <small>Sub-heading</small>
                            </h2>
                            <h3>Heading 3
                                <small>Sub-heading</small>
                            </h3>
                            <h4>Heading 4
                                <small>Sub-heading</small>
                            </h4>
                            <h5>Heading 5
                                <small>Sub-heading</small>
                            </h5>
                            <h6>Heading 6
                                <small>Sub-heading</small>
                            </h6>
                        </PanelBody>
                    </Panel>
                </div>
                <div class="col-lg-6">
                    <Panel>
                        <PanelHead>
                            <h5>Paragraph text</h5>
                        </PanelHead>
                        <PanelBody>
                            <p>Lorem ipsum
                                <strong>eget urna mollis</strong> ornare vel eu leo.
                                <em>Cum sociisnatoque penatibus</em> et magnis dis parturient montes,
                                <code>code</code> nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Sed euismod aliquet sapien consequat tincidunt.
                            </p>
                            <p>Vivamus sagittis lacus vel augue laoreet
                                <abbr title="" data-original-title="Sample abbreviation">rutrum faucibus dolor auctor</abbr>. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Sed euismod aliquet sapien consequat tincidunt.
                            </p>
                            <p>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual.
                            </p>
                        </PanelBody>
                    </Panel>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <Panel>
                        <PanelHead>
                            <h5>Unstyled list</h5>
                        </PanelHead>
                        <PanelBody>
                            <ul class="unstyled">
                                <li>But I must explain </li>
                                <li>To you how all this mistaken</li>
                                <li>Idea of denouncing pleasure </li>
                                <li>Great explorer of the truth</li>
                                <li>To take a trivial example
                                    <ul>
                                        <li>Or one who avoids a pain</li>
                                        <li>Indignation and dislike men</li>
                                        <li>Nor again is there anyone </li>
                                        <li>But who has any right</li>
                                    </ul>
                                </li>
                                <li>That they cannot foresee</li>
                                <li>Who avoids a pain that produceg</li>
                                <li>Consequences that are extremely </li>
                            </ul>
                        </PanelBody>
                    </Panel>
                </div>
                <div class="col-lg-4">
                    <Panel>
                        <PanelHead>
                            <h5>Unordered list</h5>
                        </PanelHead>
                        <PanelBody>
                            <ul>
                                <li>But I must explain </li>
                                <li>To you how all this mistaken</li>
                                <li>Idea of denouncing pleasure </li>
                                <li>Great explorer of the truth</li>
                                <li>To take a trivial example
                                    <ul>
                                        <li>Or one who avoids a pain</li>
                                        <li>Indignation and dislike men</li>
                                        <li>Nor again is there anyone </li>
                                        <li>But who has any right</li>
                                    </ul>
                                </li>
                                <li>That they cannot foresee</li>
                                <li>Who avoids a pain that produceg</li>
                                <li>Consequences that are extremely </li>
                            </ul>
                        </PanelBody>
                    </Panel>
                </div>
                <div class="col-lg-4">
                    <Panel>
                        <PanelHead>
                            <h5>Ordered list</h5>
                        </PanelHead>
                        <PanelBody>
                            <ol>
                                <li>But I must explain </li>
                                <li>To you how all this mistaken</li>
                                <li>Idea of denouncing pleasure </li>
                                <li>Great explorer of the truth</li>
                                <li>To take a trivial example
                                    <ol>
                                        <li>Or one who avoids a pain</li>
                                        <li>Indignation and dislike men</li>
                                        <li>Nor again is there anyone </li>
                                        <li>But who has any right</li>
                                    </ol>
                                </li>
                                <li>That they cannot foresee</li>
                                <li>Who avoids a pain that produceg</li>
                                <li>Consequences that are extremely </li>
                            </ol>
                        </PanelBody>
                    </Panel>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <Panel>
                        <PanelHead>
                            <h5>Emphasis Classes</h5>
                        </PanelHead>
                        <PanelBody>
                            <p class="text-muted">This is an example of muted text.</p>
                            <p class="text-primary">This is an example of primary text.</p>
                            <p class="text-success">This is an example of success text.</p>
                            <p class="text-info">This is an example of info text.</p>
                            <p class="text-warning">This is an example of warning text.</p>
                            <p class="text-danger">This is an example of danger text.</p>
                        </PanelBody>
                    </Panel>
                </div>
                <div class="col-lg-6">
                    <Panel>
                        <PanelHead>
                            <h5>Blockquotes</h5>
                        </PanelHead>
                        <PanelBody>
                            <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <small>
                                    <strong>Author name</strong> in
                                    <cite title="" data-original-title="">Book name</cite>
                                </small>
                            </blockquote>
                        </PanelBody>
                    </Panel>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <Panel>
                        <PanelHead>
                            <h5>Alignment</h5>
                        </PanelHead>
                        <PanelBody>
                            <p class="text-left">Left aligned text.</p>
                            <p class="text-center">Center aligned text.</p>
                            <p class="text-right">Right aligned text.</p>
                        </PanelBody>
                    </Panel>
                </div>
                <div class="col-lg-4">
                    <Panel>
                        <PanelHead>
                            <h5>Address</h5>
                        </PanelHead>
                        <PanelBody>
                            <address>
                                <strong>Twitter, Inc.</strong><br> 795 Folsom Ave, Suite 600<br> San Francisco, CA 94107<br>
                                <abbr title="Phone">P:</abbr> (123) 456-7890
                            </address>
                            <address>
                                <strong>Full Name</strong><br>
                                <a href="mailto:#">first.last@example.com</a>
                            </address>
                        </PanelBody>
                    </Panel>
                </div>
                <div class="col-lg-4">
                    <Panel>
                        <PanelHead>
                            <h5>Grouped Lists</h5>
                        </PanelHead>
                        <PanelBody noPadding>
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <span class="badge badge-primary">16</span>
                                    But I must explain to
                                </li>
                                <li class="list-group-item ">
                                    <span class="badge badge-info">12</span>
                                    How all this mistaken
                                </li>
                                <li class="list-group-item">
                                    <span class="badge badge-danger">10</span>
                                    But because occasionally
                                </li>
                                <li class="list-group-item">
                                    <span class="badge badge-success">10</span>
                                    But who has any right
                                </li>
                                <li class="list-group-item">
                                    <span class="badge badge-warning">7</span>
                                    On the other hand
                                </li>
                            </ul>
                        </PanelBody>
                    </Panel>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <Panel>
                        <PanelHead>
                            <h5>Grouped Lists</h5>
                        </PanelHead>
                        <PanelBody>
                            <div class="list-group">
                                <a class="list-group-item active" href="#">
                                    <h3 class="list-group-item-heading">A wonderful serenity has taken</h3>
                                    <p class="list-group-item-text">I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. </p>
                                </a>
                                <a class="list-group-item" href="#">
                                    <h3 class="list-group-item-heading">Why painful the sixteen how minuter</h3>
                                    <p class="list-group-item-text">I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath </p>
                                </a>
                                <a class="list-group-item" href="#">
                                    <h3 class="list-group-item-heading">Barton waited twenty always repair</h3>
                                    <p class="list-group-item-text">I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary</p>
                                </a>
                            </div>
                        </PanelBody>
                    </Panel>
                </div>
                <div class="col-lg-6">
                    <Panel>
                        <PanelHead>
                            <h5>Wells</h5>
                        </PanelHead>
                        <PanelBody>
                            <div class="well">
                                <h3>
                                    The quick, brown fox jumps over a lazy dog.
                                </h3>
                                I feel the presence of the Almighty, who formed us in his own image, and the breath
                            </div>
                            <div class="well well-lg">
                                <h3>
                                    Quick zephyrs blow, vexing daft Jim.
                                </h3>
                                I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees
                            </div>
                            <div class="well well-sm">
                                <h3>
                                    Joaquin Phoenix was gazed by MTV for luck
                                </h3>
                                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                            </div>
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