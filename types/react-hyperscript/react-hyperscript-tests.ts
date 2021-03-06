import * as React from 'react';
import h = require('react-hyperscript');

interface PropTypes {
    foo: string;
}

class SomeComponent extends React.Component<PropTypes> {
    render() {
        return React.createElement('div');
    }
}

const FunctionComponent: React.FunctionComponent<PropTypes> = () => React.createElement('div');

class MainComponent extends React.Component {
    render() {
        return h('div.example', [
            h('h1#heading', 'This is hyperscript'),
            h('h2', 'creating React.js markup'),
            h(SomeComponent, {foo: 'bar'}, [
                h('li', [
                    h('a', {href: 'http://whatever.com'}, 'One list item')
                ]),
                h('li', 'Another list item')
            ]),
            h(FunctionComponent, {foo: 'bar'}, [
                h('li', [
                    h('a', {href: 'http://whatever.com'}, 'One list item')
                ]),
                h('li', 'Another list item')
            ]),
            h('img', {src: 'https://example.com/some-image'}),
            h(['text']),
            h([
                h('span', 'text')
            ]),
            h(['zero', 'unit']),
            h([
                h('span', 'zero'),
                h('span', 'unit')
            ]),
            h('span', 1234)
        ]);
    }
}

class MixedComponent extends React.Component {
    render() {
        return h('div', {className: 'some class'}, [
            null,
            h('span', 'some tag'),
            'some text node'
        ]);
    }
}
