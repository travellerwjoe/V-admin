<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<style lang="scss">

</style>
<script>
    import {
        inArray
    } from '@/utils/helpers'
    const validator = (val) => {
        val = parseInt(val)
        return val > 0 && val <= 12
    }
    const getProps = () => {
        const propKey = ['lg', 'md', 'sm', 'xs']
        const propVal = {
            type: [Number, String],
            validator
        }
        const props = {}
        propKey.forEach(item => {
            props[item] = propVal
            props[item + 'Of'] = propVal
            props[item + 'Ps'] = propVal
            props[item + 'Pl'] = propVal
        })
        return props
    }
    export default {
        props: {
            ...getProps(),
            textAlign: {
                type: String,
                validator(value) {
                    return inArray(value, ['left', 'center', 'right'])
                }
            }
        },
        methods: {},
        computed: {
            classes() {
                const classes = [];
                ['lg', 'md', 'sm', 'xs'].forEach(item => {
                    this[item] && classes.push(`col-${item}-${this[item]}`)
                    this[item + 'Of'] && classes.push(`col-${item}-offset-${this[item+'Of']}`)
                    this[item + 'Ps'] && classes.push(`col-${item}-push-${this[item+'Ps']}`)
                    this[item + 'Pl'] && classes.push(`col-${item}-pull-${this[item+'Pl']}`)
                })
                const textClass = this.textAlign ? `text-${this.textAlign}`:null
                return [...classes,textClass]
            }
        }
    }
</script>
