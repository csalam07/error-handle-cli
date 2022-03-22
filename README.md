# error-handle-cli

<h4 align="center">
  

Let you customize error handle for Node CLI


<br>


## Installation

### npm

```sh
npm install erro-handle-cli
```

### Yarn

```sh
yarn add error-handle-cli
```

<br>


## Usage

```js
import handleError = from 'error-handle-cli';

const [err, res] = await somePromise();

handleError(`Failed to build resources`, err);
```

<br />


## API

### handleError(heading, err, displayError?, exit?)

#### ❯ heading

Type: `string`<br>

Heading of the error message.

#### ❯ err

Type: `error/object`<br>

#### ❯ displayError

Type: `boolean`<br>
Default: `true` (optional)

Display the error message or not.

#### ❯ exit

Type: `boolean`<br>
Default: `true` (optional)

Exit the CLI on error or not?

<br>

## License

- MIT © [cslam07](https://twitter.com/CSALam12/)
