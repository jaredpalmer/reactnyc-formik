// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import React
import React from 'react';
// Import theme
import createTheme from 'spectacle/lib/themes/default';
// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';
import theme from '../theme';

// Require CSS
require('normalize.css');

require('../theme/index.css');

const fonts = {
  monospace:
    "'Inconsolata', Consolas, 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', Monaco, Courier, monospace",
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress="none"
        theme={theme}
        transition={['fade']}
        transitionDuration={500}
      >
        <Slide>
          <Heading size={1} textAlign="left">
            Formik
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textAlign="left">
            <Link
              style={{ color: '#0af' }}
              href="https://twitter.com/jaredpalmer"
            >
              @jaredpalmer
            </Link>
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textAlign="left">
            Forms.
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} textAlign="left">
            Forms are hard.
          </Heading>
          <List>
            <ListItem>Validating fields</ListItem>
            <ListItem>Tracking changes</ListItem>
            <ListItem>Staying organized</ListItem>
            <ListItem>(Not bashing your face into your keyboard)</ListItem>
          </List>
        </Slide>

        <Slide>
          <CodePane
            lang="js"
            style={{ fontSize: '2rem', background: '#111' }}
            source={`handleChange = e => {
  this.setState({ value: e.target.value })
}

// ...

<input 
  onChange={this.handleChange} 
  value={this.state.value} 
/>
`}
          />
        </Slide>
        <Slide>
          <CodePane
            lang="js"
            style={{ fontSize: '1.5rem', background: '#111' }}
            source={`handleChange = (event) => {
  this.setState({ 
    [event.target.name]: event.target.value 
  })
}

// ...

<input
  name="thing"
  onChange={this.handleChange} 
  value={this.state.thing} 
/>

<input
  name="other"
  onChange={this.handleChange} 
  value={this.state.other} 
/>
`}
          />
        </Slide>
        <Slide>
          <Heading size={2} textAlign="left">
            Formik
          </Heading>
        </Slide>
        <Slide>
          <List style={{ listStyle: 'none' }}>
            <ListItem style={{ fontFamily: fonts.monospace }}>values</ListItem>
            <ListItem style={{ fontFamily: fonts.monospace }}>touched</ListItem>
            <ListItem style={{ fontFamily: fonts.monospace }}>errors</ListItem>
            <ListItem style={{ fontFamily: fonts.monospace }}>
              isSubmitting
            </ListItem>
            <ListItem style={{ fontFamily: fonts.monospace }}>status</ListItem>
          </List>
        </Slide>
        <Slide>
          <CodePane
            lang="js"
            style={{ fontSize: '2rem', background: '#111' }}
            source={`handleChange = (event) => {
  event.persist()
  this.setState(prevState => ({ 
    values: {
      ...prevState.values,
      [event.target.name]: event.target.value 
    }
  })
}`}
          />
        </Slide>
        <Slide>
          <List style={{ listStyle: 'none' }}>
            <ListItem style={{ fontFamily: fonts.monospace }}>
              handleChange
            </ListItem>
            <ListItem style={{ fontFamily: fonts.monospace }}>
              handleBlur
            </ListItem>
            <ListItem style={{ fontFamily: fonts.monospace }}>
              handleSubmit
            </ListItem>
          </List>
          <List style={{ listStyle: 'none' }}>
            <ListItem style={{ fontFamily: fonts.monospace }}>
              setFieldValue
            </ListItem>
            <ListItem style={{ fontFamily: fonts.monospace }}>
              setFieldTouched
            </ListItem>
            <ListItem style={{ fontFamily: fonts.monospace }}>
              setFieldError
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left" style={{ marginBottom: '2rem' }}>
            Demos
          </Heading>
          <List style={{ listStyle: 'none' }}>
            <ListItem>
              <Link
                style={{ fontFamily: fonts.monospace }}
                href="https://codesandbox.io/s/zKrK5YLDZ"
                target="_blank"
              >
                Basic
              </Link>
            </ListItem>
            <ListItem>
              <Link
                style={{ fontFamily: fonts.monospace }}
                href="https://codesandbox.io/s/qJR4ykJk"
                target="_blank"
              >
                Input Primitives
              </Link>
            </ListItem>
            <ListItem>
              <Link
                style={{ fontFamily: fonts.monospace }}
                href="https://codesandbox.io/s/n4z5w983yj"
                target="_blank"
              >
                3rd-party inputs / prepopulation
              </Link>
            </ListItem>
            <ListItem>
              <Link
                style={{ fontFamily: fonts.monospace }}
                href="https://codesandbox.io/s/qqzx1o1vz4"
                target="_blank"
              >
                formik@next
              </Link>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={5} textAlign="left">
            <Link
              style={{ color: '#0af' }}
              href="https://github.com/jaredpalmer/formik"
            >
              jaredpalmer/formik
            </Link>
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
